---
title: 'Release 2.0 & XCM support'
date: 2022-06-09
published: true
locale: 'en'
cover_image: ./images/release-2.0-&-xcm-support/cover.jpg
description: "Release 2.0 is a very important milestone for our project & community, as it opens up the possibility of integrating Robonomics with other parachains in the Kusama ecosystem. In the coming months, the project R&D team will devote itself to integrations with the Statemine, Karura, Moonriver, Crust and KILT parachains."
abstract: "Release 2.0 and XCM support are here!"
tags: ['Robonomics parachain', 'Roadmap', 'New release']
---

[Release 2.0](https://github.com/airalab/robonomics/releases/tag/v2.0.0) is a very important milestone for our project & community, as it opens up the possibility of integrating Robonomics with other parachains in the Kusama ecosystem. In the coming months, the project R&D team will devote itself to integrations with the Statemine, Karura, Moonriver, Crust and KILT parachains.

We took the first steps towards parachain communication 1.5 years ago, [demonstrating the exchange of messages between two blockchains](https://wiki.robonomics.network/docs/en/cross-chain-messages/) during a master class in St. Petersburg. Last year, [Gav published a series of articles in which XCMP was modified](https://medium.com/polkadot-network/xcm-the-cross-consensus-message-format-3b77b1373392) - it was turned into cross-consensus messaging (XCM) and received it’s first version number above zero.

Two months after the refactoring of XCM, the Robonomics team have now completed our tests on Rococo and we are ready to integrate with other parachains in the Kusama ecosystem.

## Basic support for XCM in Robonomics

Adhering to the view that Kusama itself is a heterogeneous network, the Robonomics developers are trying to implement IoT/Robotics-specific functionality into the Robonomics parachain code.

We will maximize our usage of the features from other parachains which can help to implement smart home/city or industrial scenarios when possible. For example, this year we plan to use the existing solutions of other parachains (not create our own solutions for): (1) personal balances of user access tokens, (2) dapp and IoT device user identification system, (3) large file storage, (4) use of IoT devices in work smart contracts.

At the time of the release of version 2.0, Robonomics is ready for integration with any parachain running on the Kusama network. The software implementation of XCM support can be found in [the alpha runtime directory](https://github.com/airalab/robonomics/tree/master/runtime/alpha) of the main Robonomics repository on Substrate.

In May and June 2022, compatibility tests with the Relay chain were already carried out on Rococo network using the example of teleporting the native Rococo Relay Chain token - ROC (analogous to KSM, but on the Rococo test network) - to the Robonomics parachain.

https://youtu.be/BJHSFDZt0y4

[Twitter post](https://twitter.com/AIRA_Robonomics/status/1534081132765097984)

If you have any ideas based on integrating Robonomics with other Kusama parachains, email research@robonomics.network or join our [Discord](https://discord.gg/atduhWZpVr) for discussion in our main community channels.

## Integration with Statemine

The main goal of our integration with Statemine is the full launch of the liability() function of the Robonomics parachain. The liability() function is quite similar to the main Robonomics function in Ethereum, which allows you to organize a full cycle - using a robot as a service. From the moment of integration with Statemine, developers of IoT applications will be able to create their own token in Statemine (or use any existing Statemine token) to launch a smart device/robot to execute a given program. After the user program is executed, the tokens will be automatically transferred to the balance of the robot.

Back in spring, we showed a simple example of using tokens in Statemine to launch a coffee machine and described one of the scenarios of the tokenization development of access to equipment in the article: [Coworking for crypto-anarchists, p1](https://blog.aira.life/coworking-for-crypto-anarchists-p1-5ebecb252f2d). Accounting for the use of equipment in the office and differential distribution of access to equipment fits very well with access tokens in conjunction with the liability () function.

Another example of the use of Statemine integration with Robonomics, based on our existing use cases is the ability to use a telescope to mint NFT postcards. Today, user balances are stored in Statemine, and then NFTs are issued using RMRKs. Starting with our integration with Statemine, the telescope will be able to receive a task to create an image through the liability () function, and access tokens sent to the telescope will go to the balance of the telescope only after adding a link to NFT in the results of the liability () execution.

Work status: Q3 2022

## Integration with Karura

As long term builders on both the Ethereum and Dotsama ecosystems, Robonomics believes in integrating decentralized means of exchange for Robonomics parachain native token (XRT). Listing XRT on Karura swap is the ideal way to allow our token community to swap parachain native tokens in a decentralized way, and opening these HRMP communication channels is the first step in achieving that goal.

One of the ideas of Robonomics developers for further integration with Karura is automated currency and value exchange points for Kusama network tokens. We will share more about this separately, and certainly after the first step with the addition of XRT to Karura Swap.

Work status: Q3 2022

## Integration with Moonriver

The Robonomics parachain can become a universal mechanism for launching smart devices from within Moonriver smart contracts. We are currently working on this architecture and discussing a separate carbon footprint offset scenario using [DAO IPCI smart contracts](https://github.com/DAO-IPCI/DAO-IPCI) on the Moonriver parachain. 

Work status: Q3 2022

## Integration with KILT

Over the years of studying the robotics market, Robonomics developers have agreed that device identification is one of the most important tasks when considering complex scenarios for automating city life, logistics and industrial supply chains. KILT is an excellent example of continuing work towards integrating the functionality of various parachains within a heterogeneous network and solving problems that are significant for the IoT market.

Work status: Q4 2022
