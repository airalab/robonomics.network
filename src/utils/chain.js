import { ApiPromise, WsProvider } from "@polkadot/api";
import {
  web3Accounts,
  web3Enable,
  web3FromSource
} from "@polkadot/extension-dapp";
import keyring from "@polkadot/ui-keyring";

import BN from "bn.js";
import { u8aConcat, u8aToHex, hexToBn } from "@polkadot/util";
import { blake2AsU8a } from "@polkadot/util-crypto";

export const config = {
  endpoint: "wss://kusama-rpc.polkadot.io",
  types: {
    "ValidationCodeHash": "Hash"
  },
  paraId: 2077
};

let provider;
let api;
export function getProvider() {
  if (!provider) {
    provider = new WsProvider(config.endpoint);
  }
  return provider
}
export async function initApi() {
  api = await ApiPromise.create({
    provider: getProvider(),
    types: config.types
  });
  return api;
}

export function getApi() {
  return api;
}

export async function getExtension() {
  const extensions = await web3Enable("crowdloan");
  if (extensions.length === 0) throw new Error("no extension");
  return extensions[0];
}

function onLoad() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      return reject(new Error('no extension'));
    }, 3000);
    const interval = setInterval(() => {
      if (Object.keys(window.injectedWeb3).length > 0) {
        clearInterval(interval);
        return resolve();
      }
    }, 100);
  });
}

let isInitAccounts = false;
export async function initAccounts(api, config = {}) {
  await onLoad();
  await getExtension();
  const accounts = await web3Accounts();
  const injectedAccounts = accounts.map(({ address, meta }) => ({
    address,
    meta
  }));
  keyring.loadAll(
    {
      genesisHash: api.genesisHash,
      ss58Format: api.registry.chainSS58,
      ...config
    },
    injectedAccounts
  );

  isInitAccounts = true;
  return accounts;
}

export function getAccounts(
  api,
  config = {
    isDevelopment: false,
    type: "sr25519"
  }
) {
  if (isInitAccounts) {
    return keyring.getPairs();
  }
  return initAccounts(api, config);
}

export async function getAccount(api, address) {
  const account = keyring.getPair(address);
  if (account.meta.isInjected) {
    const injected = await web3FromSource(account.meta.source);
    api.setSigner(injected.signer);
    return {
      ...account,
      signMsg: async function(data) {
        return (await injected.signer.signRaw({
          address: account.address,
          data: u8aToHex(data),
          type: "bytes"
        })).signature;
      }
    };
  }

  return {
    ...account,
    signMsg: async function(data) {
      return Promise.resolve(u8aToHex(account.sign(data)));
    }
  };
}

function createChildKey(trieIndex) {
  return u8aToHex(
    u8aConcat(
      ":child_storage:default:",
      blake2AsU8a(u8aConcat("crowdloan", trieIndex.toU8a()))
    )
  );
}

function toUnit(balance, decimals) {
  const base = new BN(10).pow(new BN(decimals));
  const dm = new BN(balance).divmod(base);
  return parseFloat(dm.div.toString() + "." + dm.mod.toString());
}

export async function getStat(api) {
  const fund = (await api.query.crowdloan.funds(config.paraId)).toJSON();
  const index = api.createType("u32", fund.trieIndex);
  const childKey = createChildKey(index);
  const contributors = (await api.rpc.childstate.getKeys(childKey, "0x")).toArray();
  return {
    amountUnit: toUnit(
      hexToBn(fund.raised).toString(),
      api.registry.chainDecimals[0]
    ),
    count: contributors.length
  };
}

export async function parseBlock(api, number = null) {
  const paraId = config.paraId;
  const block = number;
  let timestamp;
  let fund;
  let keys;
  if (block) {
    const blockHash = await api.rpc.chain.getBlockHash(block);
    const blockInfo = await api.rpc.chain.getBlock(blockHash);
    blockInfo.block.extrinsics.forEach(extrinsic => {
      if (extrinsic.method.section === "timestamp") {
        timestamp = extrinsic.method.args[0].toNumber();
      }
    });
    fund = (await api.query.crowdloan.funds.at(blockHash, paraId)).toJSON();
    const index = api.createType("u32", fund.trieIndex);
    const childKey = createChildKey(index);
    keys = await api.rpc.childstate.getKeys(childKey, "0x", blockHash);
  } else {
    fund = (await api.query.crowdloan.funds(paraId)).toJSON();
    const index = api.createType("u32", fund.trieIndex);
    const childKey = createChildKey(index);
    keys = await api.rpc.childstate.getKeys(childKey, "0x");
  }
  const contributors = keys.toArray();
  return {
    block,
    timestamp,
    amount: hexToBn(fund.raised).toString(),
    amountUnit: toUnit(
      hexToBn(fund.raised).toString(),
      api.registry.chainDecimals[0]
    ),
    count: contributors.length
  };
}
