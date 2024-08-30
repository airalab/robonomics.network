---
title: Robonomics Frontier
date: 2021-07-23
published: true
locale: 'en'
cover_image: ./images/Robonomics-Frontier/Robonomics-Frontier_cover_2_blog.jpg
description: "As a result of the summer Kusama crowdloans, Robonomics reached the Top-10 projects of the Polkadot ecosystem. Before the next wave of auctions, the project’s developers decided to deploy and maintain a functionally identical network."
abstract: "As a result of the summer Kusama crowdloans, Robonomics reached the Top-10 projects of the Polkadot ecosystem. Before the next wave of auctions, the project’s developers decided to deploy and maintain a functionally identical network — Frontier Relay chain, that will be integrated with Robonomics parachain."
tags: ['Robonomics parachain', 'XRT token', 'Staking', 'Roadmap']
---
import Card from '~/components/TextCard.vue'

## Not a wild cousin of Kusama

Kusama Relay chain is under development and passes all updates using stable versions of Polkadot releases. For example, the current version of Kusama was built on [polkadot v0.9.8](https://github.com/paritytech/polkadot/releases/tag/v0.9.8) release.

![Kusama Relay Chain and Polkadot release 0.9.8](./images/Robonomics-Frontier/Kusama-Relay-Chain-and-Polkadot-release-0-9-8.jpg)

Frontier Relay chain will use the same versions of Polkadot releases, which will be implemented by Kusama network in the form of its Relay chain.

To connect to Frontier Relay chain, you can use Substrate portal following this link: https://parachain.robonomics.network/ 

After connecting the Robonomics parachain to the Frontier Relay chain we can have a blockchain that could work in real-time and would be integrated into the Kusama network. It means that we need to overcome any challenges that Kusama parachains will have. All new capabilities that will appear with new Polkadot releases, will be also supported by Robonomics’ parachain.

## XCMP and integration with Kusama parachains

Maybe only one disadvantage today (in 2021), when we are talking about the lifecycle in a Frontier network and not about the main Kusama network, is a lack of integration via [XCMP](https://wiki.polkadot.network/docs/learn-crosschain#overview-of-xcmp).

But it does not mean that you cannot execute technical integration tasks and prepare a Robonomics parachain to work with Karura, Moonriver and Khala. It is those three parachains that are interesting for the Robonomics team in terms of integration. We can start maintaining work in a Frontier network with copies of the mentioned projects, but only after release of public documentation and first samples of using Kusama (how to create trading pair on Karura, connect functions of parachain with solidity/ink smart contracts in Moonriver, or to provide data privacy with Khala).

I’m personally expecting that the process of parachains integration would be executed very carefully in the first year, and maybe other projects will also work together in sandboxes and after it transfer integration mechanisms to Kusama network. So, Robonomics could be in the Kusama network right to the moment of active integration between the projects.

## Genesis block of Robonomics parachain in Frontier network

In the genesis block will be presented XRT balances of exodus participants, crowdloan contributors and open test network collators. This block will be formed only a few days before the parachain launch in a Frontier network. We will announce this update on our [Twitter](https://twitter.com/AIRA_Robonomics) and [Telegram](https://t.me/Robonomics_ann).

We are expecting that the genesis block will be formed during the period from 28th to 31st of July.

Important information for XRT holders in the Ethereum network: To participate in the parachain’s genesis block and participate in staking, you can use dapp exodus till 28th of July. After 28th of July the opportunity to transfer XRT tokens into Ethereum to Frontier will still be available. But this process will be executed by the technical committee of the network and not more often than once a week.

Also we would like to notice, that the exodus would not allow you to go back till the moment when Robonomics parachain will be connected to the Kusama network, and when there will be suitable bridge to Ethereum. The situation is ~ similar to the process of transfer to Ethereum 2.0 for ETH holders.

## XRT staking

XRT staking in Robonomics parachain aims to split the capacity between two options of payments: for transaction or for subscription. You can read more about this in the article [“RWS overview, part 2 “Heterogeneous tokenomics”](https://blog.aira.life/rws-overview-part-2-heterogeneous-tokenomics-afc209cc855) on Medium.

The basis of reward for the staking will be ~ 10%. This amount helps to launch the parachain. In the future, the reward will be determined by [Democracy pallet](https://substrate.dev/rustdocs/latest/pallet_democracy/) for XRT holders. 

Crowdloan contributors will get increased reward rate — 50%. Thus, it will help us to test the mechanism: “Parachain, which always wins”, which will propose adaptive reward for staking Robonomics to the reward for staking in Kusama / Polkadot relay chain and considering XRT price to KSM/DOT. We will explain later in detail about this mechanism and after a few tests. 

Staking will be available from the update 1.1 in Frontier network. Please note that tokens transfer in parachain will be turned off on the start, similar to the launch of the Polkadot Relay chain.

## Roadmap - Life after auction

Regardless of that we did not win a slot — the roadmap of parachain development won’t change. Below you will find our plans that were published in the article: https://robonomics.network/blog/crowdloan-starts-today/.

<Card>

### Part 1: Establishing core functionality

In 3 months after the Robonomics parachain launch, Robonomics developers are going to activate the core functionally that’s been developing during 2019-2021, and also supplement the network with modules that have proven themselves in the Polkadot and Kusama ecosystems.

* **Genesis state: (0 week)** Launch of the starter pack of Robonomics parachain functions with IoT management services and collators reward systems.
* **Update 1.1** Staking and allowing transfers (3 - 4 week). Will allow you to transfer XRT and stake your XRT with a 10% APR for all token holders and 50% for Crowdloan participants.
* **Update 1.2** Treasury and Technical committee (4 - 6 week). Will allow transferring a share of the DAO funds from Ethereum to the parachain. The Technical Committee can produce emergency referenda. These are used for emergency bug fixes or rapid implementation of new but battle-tested features into the runtime.
* **Update 1.3** RWS (7 - 8 week). Will allow using IoT management functions with not only commission payments in XRT but a monthly subscription as well.
* **Update 1.4** Robot-as-a-service (9 - 10 week). Will allow to implement a control process for the provision of automated services and use payments within transactions to launch devices.
* **Update 1.5** XCMP functionality and Robobank (11 - 12 week). The solution is based on the Polkadot XCMP architecture that will allow any parachain to get access to IoT device management with payment in a native token.
* **Update 1.6** Democracy and Remove Sudo (13 - 14 week). Developers won’t have the ability to interfere with the operations of the network without the involvement of the technical committee or voting of parachain native token holders.

</Card>

<Card>

### Part 2: Launch services based on Robonomics R&D

2nd part of Robonomics parachain growth in Kusama designated to the launch of services based on previous Robonomics team’s R&D projects.

* **Globally available digital passports of products** By supplementing the status of digital twins with information about the produced products, customers will be able to issue digital passports protected against changes and loss of information in the future. This use case is already implemented as a pilot at the enterprise that’s producing drones. The solution used for quality control during packaging with video recording.
* **Smart leasing of IoT & Robotics** We’ll demonstrate the ability to use the Robonomics parachain for leasing an IoT/Robotics device. Using the example of 2 robots controlled by Robonomics parachain in 2 different industries. The first use case - an educational program based on Boston Dynamics SDK, during which developers will learn how to control the famous robot dog - Spot. The second one - an industrial manipulator sold under a leasing agreement in the United States. Both robots will provide customers with automatically generated reports at the end of the user session.
* **Environmental mitigation services for smart buildings with real carbon credits** It will allow customers to automatically collect information about the electricity consumption of the household or apartment building, burn carbon credits, and store a report in the parachain.
* **Fault-tolerant civil sensors network** A complete set of software modules for creating a sensor network in a city or enterprise to track the desired indicators and provide access to them without a central point of failure. Today it is being tested in one of Russian’s industrial cities - Togliatti.
* **Self-driving cars and drones traffic management solution to avoid route collisions in public areas** It’ll allow managing a fleet of drones with publicly monitored access to route changes to public agencies responsible for local security and efficiency of air space and roads.
* **Ecosystem integration updates** We will focus on integrations with other parachains to expand the capabilities of IoT projects that are interested in the Polkadot ecosystem’s features.

</Card>

<Card>

### Part 3: Transform into Robonomics Relay Chain

The final task for the 48 weeks of existence in the Kusama network is the transformation of the Robonomics parachain into the Robonomics Relay Chain. This is our vision of the future of Robonomics, as a complete segment of the Polkadot infrastructure specifically prepared for working with IoT devices.

</Card>

<Card :image="'/avatars/Sergei-Lonshakov.jpg'" :back="'transparent'" imageSize="big" alignContentV="middle">

#### EnsRationis

Robonomics network architect

element: @ensrationis:robonomics.network

</Card>

