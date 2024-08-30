---
title: "Successful tests of XRT transfer between Sepolia and Rococo Asset Hub via Snowbridge"
date: 2024-07-22
published: true
locale: 'en'
cover_image: ./images/snowbridge-sepolia-rococo-tested/snowbridge-sepolia-rococo-tested.png
description: "We have successfully conducted tests transferring XRT tokens between the Sepolia and Rococo Asset Hub networks using the Snowbridge protocol."
abstract: "Snowbridge is a general purpose, trustless and decentralized bridge between Polkadot and Ethereum."
---

## Intro

Hello everyone, as you know, the Robonomics project operates on two networks simultaneously: Ethereum and Kusama. Currently, there is no way to transfer the XRT token between these networks. Therefore, we are closely following the Snowbridge project, which is being developed as a universal bridge between Ethereum and Polkadot: https://docs.snowbridge.network/

Over the last month, we successfully transferred ERC20 XRT tokens between the test networks Sepolia and Rococo Asset Hub following the instructions from Snowbridge: 

https://docs.snowbridge.network/rococo-testnet/rococo-sepolia-token-transfers

## Deploy XRT contract and register token on the Snowbridge

First, the XRT contract was deployed on Sepolia: 

https://sepolia.etherscan.io/address/0x9e216c3aF5F0c6cE70851B93ddDB62573380CfEf

Since we needed to test sending our own token, we had to register it. This step consists of two parts: checking the required fee and registering the token:

1. To check the required fee, we called the `quoteRegisterTokenFee` method of the bridge contract (https://sepolia.etherscan.io/address/0x5b4909ce6ca82d2ce23bd46738953c7959e710cd#readProxyContract) and received the value `5000000500000000000`:
<rb-image zoom src="./images/snowbridge-sepolia-rococo-tested/quoteRegisterTokenFee.png" alt="quoteRegisterTokenFee" />

2. To register the token, we called the `registerToken` method of the bridge contract (https://sepolia.etherscan.io/address/0x5b4909ce6ca82d2ce23bd46738953c7959e710cd#writeProxyContract), specifying the required fee and the address of the deployed token:
<rb-image zoom src="./images/snowbridge-sepolia-rococo-tested/registerToken.png" alt="registerToken" />

The registration process should take about 30 minutes, and the new token should appear in the foreignAssets in Rococo Asset Hub. This can be checked using a chain state query in Rococo Asset Hub (https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-asset-hub-rpc.polkadot.io#/chainstate):
<rb-image zoom src="./images/snowbridge-sepolia-rococo-tested/foreign_asset_query.png" alt="Check if token registered" />

After successful registration, we received the following response:
```
{
    owner: 5GjRnmh5o3usSYzVmsxBWzHEpvJyHK4tKNPhjpUR3ASrruBy
    issuer: 5GjRnmh5o3usSYzVmsxBWzHEpvJyHK4tKNPhjpUR3ASrruBy
    admin: 5GjRnmh5o3usSYzVmsxBWzHEpvJyHK4tKNPhjpUR3ASrruBy
    freezer: 5GjRnmh5o3usSYzVmsxBWzHEpvJyHK4tKNPhjpUR3ASrruBy
    supply: 0
    deposit: 100,000,000,000
    minBalance: 1
    isSufficient: false
    accounts: 1
    sufficients: 0
    approvals: 0
    status: Live
}
```

## Test XRT transfer from Sepolia to Rococo Asset Hub

The next step was sending the XRT token from Sepolia to Rococo Asset Hub. For this, we performed the following actions:

1. First, we allowed the bridge contract to use 15 XRT from the account: 

    https://sepolia.etherscan.io/address/0x9e216c3aF5F0c6cE70851B93ddDB62573380CfEf#writeContract
    <rb-image zoom src="./images/snowbridge-sepolia-rococo-tested/xrt_approve_snowbridge_as_spender.png" alt="Approve XRT spender" />

2. Then requested the fee required for sending the token:
    <rb-image zoom src="./images/snowbridge-sepolia-rococo-tested/quoteSendTokenFee.png" alt="quoteSendTokenFee" />

3.  Initiated the transfer of XRT from Sepolia to Rococo Asset Hub following Snowbridge's instructions using the WETH example: https://docs.snowbridge.network/rococo-testnet/rococo-sepolia-token-transfers#id-5.-send-weth-to-polkadot
    
    A critical note regarding the `destinationAddress.data` field: its value needed to be enclosed in quotes (e.g. "0xb0fca9a0c5e03ab5b2294784fbbabea010295b3e1e48575cfe18dc2172ef657d").

    At this stage, we encountered significant delays. Instead of the expected 30 minutes, the transaction took several days. Eventually, all our transfers were successfully completed.
    Example transaction: https://sepolia.etherscan.io/tx/0xec539cd89cb955ffea2ff65cae6685a8abb0966a2c1b76876a308cc036cd18fb

    The XRT balance on the target account in Rococo Asset Hub can be checked by sending a `foreignAssets.account()` request in chain state:
    <rb-image zoom src="./images/snowbridge-sepolia-rococo-tested/example_of_foreignAssets_account.png" alt="Example of foreignAssets.account" />

    Sent a total of 15 XRT, so the balance in Rococo Asset Hub looked like this:
    ```
    {
        balance: 15,000,000,000
        status: Liquid
        reason: Consumer
        extra: null
    }
    ```

## Test XRT transfer from Rococo Asset Hub to Sepolia 

The final step was sending XRT from Rococo Asset Hub back to Sepolia. We performed the following extrinsic in Rococo Asset Hub: 

https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-asset-hub-rpc.polkadot.io#/extrinsics/decode/0xe1028400b0fca9a0c5e03ab5b2294784fbbabea010295b3e1e48575cfe18dc2172ef657d01360c34e5d8f49f802fc1cc2413bfcd827b054b3ab1195bddcba0168dfaf9a47693b305b96e68d238d9adeed276452c2bc156b3bd189ba016543c354edd95ad81f501040000001f0b03020109079edaa8020300010300f42680c6a807de3cfdfcfe49583b01d80278a39e030400020209079edaa80203009e216c3af5f0c6ce70851b93dddb62573380cfef0002286bee0000000000

This transaction can be viewed in the Rococo Asset Hub block explorer: 

https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-asset-hub-rpc.polkadot.io#/explorer/query/0x3524f4bef9e736cdff1d812d79e130cf6ade7a3fe3222a0853772fd1b6c3c89a

The corresponding transaction in Sepolia:

https://sepolia.etherscan.io/tx/0xe8a95dca350143a0c41891137e332962f2918351dcfc2612519e69c7a5c46772

This step was completed relatively quickly, within half an hour. As a result, 1 XRT was transferred back to Sepolia. The XRT balance in Rococo Asset Hub remained at 14 XRT:

```
{
    balance: 14,000,000,000
    status: Liquid
    reason: Consumer
    extra: null
}
```