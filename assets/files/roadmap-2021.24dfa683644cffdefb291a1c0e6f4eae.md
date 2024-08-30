---
title: Trajectory of Robonomics Development 2021, Part 1
date: 2021-02-18
published: true
locale: 'en'
cover_image: ./images/roadmap-2021/1.jpg
description: "The Polkadot architecture is becoming explicit and complete, which should allow us, as parachain developers, to shift our focus from maintaining improvements in Polkadot dependencies (the substrate framework, cumulus and other), and move on to increasing the functionality of our parachain."
abstract: "The Polkadot architecture is becoming explicit and complete, which should allow us, as parachain developers, to shift our focus from maintaining improvements in Polkadot dependencies (the substrate framework, cumulus and other), and move on to increasing the functionality of our parachain."
tags: ['Roadmap', 'Robonomics parachain']
---

Starting with this article, I would like to share the tasks that the core project development team are ready to share with the community today.

In total, we have counted about [20 tasks](https://github.com/orgs/airalab/projects/7) that we are willing to implement this year. Some of them are full-fledged tasks, while the second part rather reflects the fact that the core developers devote time to this area, for example, supporting the academic community, conducting dev camps and developing Internet resources around the project.

Today I will share the development team plans related to task #1 - launching parachain on the Kusama network.

## Task #1: Parachain on Kusama
Leads: [@ensrationis](https://scholar.google.com/citations?user=0c53yygAAAAJ&hl=en), [@akru](https://github.com/akru)

!["Robonomics Parachain on Kusama first"](./images/robonomics-parachain-lease-offering/Robonomics_Parachain-web.jpg)

Earlier, we presented a general vision of development in the Polkadot ecosystem - [Robonomics Parachain on Kusama first, Robonomics Relay Chain on Polkadot is a vision](https://robonomics.network/blog/robonomics-parachain-lease-offering/). Now let's add more details.

### Rococo > Kusama > Polkadot 

On December 31, 2020, [the Robonomics release "Rococo V1 support"](https://github.com/airalab/robonomics/releases/tag/v0.22.0) for testing the parachain in the main Polkadot testnet Rococo v1 was published. During January - February 2021, we continue to improve the Robonomics code merging new commits associated with the restarts of Rococo Relay Chain. To test the operation of the Robonomics parachain, the developers keep our own fork of Rococo Relay Chain up to date, so the issue of connecting our parachain to the public network is rather a question of (1) public proof of the project's compatibility with the ecosystem, (2) the possibility of conducting tests with other projects from the ecosystem - Phala, Acala, Moonbeam, Darwinia etc - to search for collaborative implementations using the now available XCMP in Rococo v1.

### Kusama Slot Auction

Ahead of us are tasks related to participation in the auction of slots of the Kusama network. First, we need to figure out the implementation of this mechanism. Of course, we have been studying the theory for a long time, but the practice of participating in the auction will open up new tasks for the team. In any case, we will try to rehearse the auction and share the results with the community through a blog post.

### Democracy, Treasury and others parachains modules

In addition to participating in the auction, the developers are in the discussion of the following issues regarding the launch of the parachain on the Kusama network:

* What modules from the standard and used in the Polkadot / Kusama network can be useful to developers and the community after the launch of the parachain?
* How are we going to launch parachain: follow the scenario from root privileges for the main developers to democracy, or …
* How many XRT tokens should be transferred from Ethereum to Kusama and then to Polkadot?
* The minimum inflation parameters in the Robonomics network for the successful launch of the staking mechanism at the start of the parachain.
* …

Of course, there are more questions, but these ones will most likely be interesting for the community in the first place and we think about them as a priority.

### Specific Functions of Robonomics Parachain

While speaking about the launch of the parachain, we must understand its main and special functions, which open up new possibilities of the Polkadot network to a certain group of users. Robonomics will provide the ability to manage smart devices connected to the Internet using the Robonomics Web Services (short: RWS) functionality, and we will also implement the functionality already tested on the Ethereum network for the emerging robot economy - smart contracts for the provision of automated services. Thus, Robonomics aims to help the entire Polkadot ecosystem increase the capabilities of each project separately towards deep integration with the IoT market.

To date, the possibility has already been implemented (1) to enable, disable and transfer the IoT task to the device / robot through the Robonomics parachain; (2) to receive device telemetry directly through the parachain or in a combination of IPFS + parachain for big data, and (3) a parachain subscription mechanism with guaranteed bandwidth.

Ahead of us is the implementation of such functionality as:
 
1. Robobank to accept any Polkadot token in automation services
2. Single version of True via Digital Twins on Blockchain
3. Bitcoin payments for real estate
4. Privacy of using IoT applications
5. global supply chains on blockchain
6. DeFi connectivity for IoT
7. NFT for IoT

As you can see, tasks such as (3), (4), (6), (7) are of particular interest, since they imply integration with other parachains in order to utilize their useful functions in Robonomics.

Let us see the power of a common ecosystem of many specific projects!

### Conclusion

The Polkadot architecture is becoming explicit and complete, which should allow us, as parachain developers, to shift our focus from maintaining improvements in Polkadot dependencies (the substrate framework, cumulus and other), and move on to increasing the functionality of our parachain.

It is important not to forget that the process of racing for a parachain slot is an internal development process, but most importantly - a specific functionality of a parachain; the main thing is to provide Robonomics functions to other parachains and implement the use of other parachains in your code. Then the entire ecosystem will be able to provide interesting functionality to users; functionality that will be extremely difficult to find outside of Polkadot.

In the next article I will talk about the Robobank project, the improvements of the Substrate based client of the Robonomics Network, as well as our plans for the development of Robonomics dapp and Robonomics Web Services.

*ensrationis*