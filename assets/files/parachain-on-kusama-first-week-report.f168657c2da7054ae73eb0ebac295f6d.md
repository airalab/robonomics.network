---
title: "Robonomics parachain on Kusama: first week's report"
date: 2022-01-18
published: true
locale: 'en'
tags: ['Robonomics parachain']
cover_image: ./images/parachain-on-kusama-first-week-report/cover.jpg
description: "Since the launch of the Robonomics parachain, we have managed to complete a fairly large range of tasks, and for that, my special thanks goes out to everyone who broke away early from nice meals, champagne, and trips to friends & family on January 2nd and 3rd :) The below information is what I personally participated in and what I want to tell you about."
abstract: "Since the launch of the Robonomics parachain, we have managed to complete a fairly large range of tasks, and for that, my special thanks goes out to everyone who broke away early from nice meals, champagne, and trips to friends & family on January 2nd and 3rd :) The below information is what I personally participated in and what I want to tell you about."
author: '@ensrationis'
---
import KusamaSlotBanner from '~/components/blocks/KusamaSlotBanner.vue'
import Card from '~/components/TextCard.vue'

## Basic infrastructure of the Robonomics Parachain

The Robonomics parachain [was launched on 9th January 2022](https://twitter.com/EnsRationis/status/1480139879057174530). Upon launching, [release 1.4  of "Kusama Parachain Launch"](https://github.com/airalab/robonomics/releases/tag/v1.4.0) – which can be used to launch a [collator](https://wiki.polkadot.network/docs/learn-collator) – was posted on GitHub.

[Together with p2p.org](https://economy.p2p.org/p2p-validator-and-robonomics-announce-partnership-for-launch-of-parachains-on-kusama/), we launched the first of the parachain collators. During the first week of parachain operation, an open network of [40+ collators](https://telemetry.parachain.robonomics.network/#/Robonomics) emerged. 

Let me remind you that the role of the collator is to collect parachain block candidates and transfer them for validation to the Kusama Relay chain’s network of validator nodes. Parahcain collators perform calculations on the current block, and try to propagate the formed block as soon as possible among parachain collators. In return, the collator receives a small, guaranteed amount of XRT as a reward for the computations spent plus 50% of all commissions generated in the block. 

Two [days into the parachain launch](https://discord.com/channels/803947358492557312/895723411278557227/930224374630473738), a contest was held amongst the community members to see who could set up the first collators. 

On the third day, [Subscan switched](https://twitter.com/AIRA_Robonomics/status/1480833207834664960) swapped over the Robonomics parachain block explorer from the testnet (Frontier Network) to the mainnet.

The Robonomics wiki was updated tp provide community-tested instructions for building and running a parachain collator, including:

- [how to build a collator node from source](https://wiki.robonomics.network/docs/en/how-to-build-collator-node/)
- [how to launch the Robonomics collator](https://wiki.robonomics.network/docs/en/how-to-launch-the-robonomics-collator/)

Issues related to the work of collators can be discussed:

- on Discord: https://discord.gg/hBJS7uE2NC
- or on Element: https://app.element.io/#/room/#robonomics:matrix.org

## Runtime Parachain for today

For everyone who is not yet familiar with the concept of runtime, I would advise you to read this article first: https://docs.substrate.io/v3/runtime/frame/ 

The current runtime structure of Robonomics is as follows:

<Card>

### Robonomics Parachain

#### Cyber physical system functions
- Digital twin
- Launch
- Datalog
- Robot-as-a-service

#### IoT Subscription
- Subscription auction
- Staking

#### Onchain governance
- Treasury
- Tech comm
- Democracy

#### Token
- Balances
- Transaction 
- Multisig
- Vesting

#### Network maintenance
- Lighthouse 
- Identity

</Card>

You can read the technical descriptions of the runtime modules specific to the Robonomics parachain at the following link: https://crates.robonomics.network/pallet_robonomics_datalog/index.html 

Additionally, we will also talk separately about Robonomics parachain modules as we approach the Winter Developer School 2022, which will be held in February.

## Establishment of the Parachain Technical Committee

![the Parachain Technical Committee](./images/parachain-on-kusama-first-week-report/1-parachain-technical-committee.png)

The six project developers who most frequently participated in frontier network development were added into the [Parachain Technical Committee](https://wiki.polkadot.network/ru-RU/docs/learn-governance#technical-committee). 

The Technical Committee can produce emergency referenda, which are fast-tracked for voting and implementation. These are used for emergency bug fixes or rapid implementation of new but battle-tested features into the runtime.

## Parachain Treasury replenished and good to go

Similar to how the Kusama Network [Treasury](https://wiki.polkadot.network/ru-RU/docs/learn-treasury) works, the Robonomics developers plan to use over 400,000 XRT to support the community. Examples of requests to the Kusama Treasury are available here kusama.polkassembly.io.

Instructions on how to submit a request to the Robonomics Treasury and details regarding priority areas for funding will be discussed separately in subsequent blog articles.

![Robonomics Treasury](./images/parachain-on-kusama-first-week-report/2-Treasury.png)

The Treasury is available at: https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/treasury

## 1/12th of crowdloan reward for participants of the 4th crowdloan campaign distributed and the launch of the vesting module

Robonomics Developers have completed the distribution of 1/12th of the crowdloan rewards to the balances of crowdloan contributors. You can check the balance using Developer > Chain state > system.account():FrameSystemAccountInfo

![Robonomics Chain state] (./images/parachain-on-kusama-first-week-report/3-chain-state.png)

The free value as shown in the screenshot corresponds to 1,102,517,448 Wn ≈ 1.1 XRT (the free balance is displayed in micro XRT 10<sup>−6</sup> )  and this is the free balance available for transfer within the network.

The vesting module was also enabled in the latest runtime update. This week 11/12 bounties are being sent out, which will also show up in Developer > Chain state > system.account():FrameSystemAccountInfo under "miscFrozen".

The full crowdloan contribution reward will be unlocked linearly within the next 11 months. The amount available for unlocking can be seen in the “vested” field of the Accounts page.

![The amount available for unlocking](./images/parachain-on-kusama-first-week-report/4-amount-available.png)

Towards the end of January, we will provide more information regarding claiming an additional 1 XRT per 1 KSM contributed during the crowdloan for those who own a Robonomics Pioneer NFT.  Robonomics Developers will report this separately on [Twitter](https://twitter.com/AIRA_Robonomics).

## Migrating XRT from the frontier network

Over the past six months, we have continued to test the functionality of the parachain in the [frontier network](https://robonomics.network/blog/robonomics-frontier/). In the first week of the life of the parachain in Kusama, developers stopped the work on the frontier network, and distributed parachain balances to Kusama.

![frontier network](./images/parachain-on-kusama-first-week-report/5-frontier-network.png)

As you can see in the screenshot, the last block of the Robonomics parachain on the frontier network relay chain is #1,046,628, and the frontier network stopped producing blocks 143 hours ago. 

You can check your balance at the time of the last block in the frontier network using the link (Developer > Chain state > system.account: AccountInfo): 
https://parachain.robonomics.network/?rpc=wss%3A%2F%2Fmain.frontier .rpc.robonomics.network%2F#/chainstate 

It should be noted that the transfer of balances was a multi-layered task:
- To begin with, free and staked tokens were collected.
- Later, staking rewards were collected, which have not yet been received by users (not claimed).
- Rewards were also added to them and requested for withdrawal but not withdrawn from staking.
- 11/12th of the crowdloan rewards for participating in the 1st crowdloan campaign (“Plan B” rewards) were deducted from user balances (see below).
- Received values were added up and sent to one developer owned address for distribution.
- 11/12th of the crowdloan rewards for participants of the 4th crowdloan campaign were sent into vesting for 11 months.

Thus, the initial balance of participants on Kusama parachain should consist of:
- XRT Tokens transferred via the exodus bridge.
- Staking rewards generated in the lifetime of the parachain which existed on the frontier network relay chain.
- Collators rewards
- 1/12th of the crowdloan contribution reward from participation in the 1st crowdloan campaign (“Plan B” rewards).
- 1/12th of the crowdloan contribution rewards from participation in the 4th (winning) crowdloan campaign

## XRT staking on Kusama Parachain

In the second update of the Robonomics parachain, the XRT staking module was included.

![Robonomics dapp](./images/parachain-on-kusama-first-week-report/6-Robonomics-dapp.png)
*An example of working with the staking section in Robonomics dapp*

XRT staking is available on the Robonomics dapp at the following link: https://robonomics.app/#/staking/ 

The staking reward is approximately 10% per year.

For participants in the 4th crowdloan campaign, the Robonomics developers have increased the staking reward to 50%. Please note that this percentage of staking reward is limited only to the amount of XRT generated via your participation in the 4th crowdloan campaign.

It should be noted that the full implementation of the [autonomous parachain life cycle](https://robonomics.network/blog/automating-kusama-crowdloan-campaigns/) will change the constant values of the staking reward to variables that adapt to the size of the KSM staking reward on the Relay chain. This topic will be further discussed with more detail in the Robonomics Whitepaper 2022. After its publication, we will begin to change the network.

## The most important lies ahead!

Robonomics application scenarios [are already moving from the frontier network to the Kusama parachain](https://twitter.com/EnsRationis/status/1481900111856906240). Towards the end of January, we will announce the dates of the Robonomics demo week of IoT projects which are ready to present their solutions based on the Kusama parachain. 

Follow our [Twitter](https://twitter.com/AIRA_Robonomics) for updates, and remember that Robonomics does not aim to be a unicorn amongst crypto projects until we pave a sustainable development path for user growth. During 2022, dozens of interesting web3 application scenarios in the field of IoT await us. Still, the project will only take its rightful place when Robonomics becomes useful for thousands of regular users. In the meantime, we all need to continue to work and help develop the project; try to change the world around you towards the introduction of web3 technologies; for example, connect Home Assistant to data transfer from IoT devices via the Robonomics parachain: [Leemo video](https://www.youtube.com/watch?v=iB2Z8HtERgs) ([Instruction on GitHub](https://github.com/airalab/robonomics-smarthome)).