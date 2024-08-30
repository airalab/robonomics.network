---
title: "Robonomics parachain updates, March’22"
date: 2022-03-17
published: true
locale: 'en'
cover_image: ./images/robonomics-parachain-updates-march-22/cover.jpg
description: "The Robonomics parachain was launched in January of this year, and our first publicly available progress report was published on January 18th in a blog post. Now, we will provide details of the work we have already performed within the task list"
abstract: ""
tags: ['Robonomics parachain', 'Roadmap', 'New release']
---
import Card from '~/components/TextCard.vue'
import UserForm from '~/components/blocks/UserForm.vue'

The Robonomics parachain was launched in January of this year, and our first publicly available progress report was published on January 18th [in a blog post](https://robonomics.network/blog/parachain-on-kusama-first-week-report/). Now, we will provide details of the work we have already performed within the task list as specified in the roadmap on Github: [Tracking issue for Robonomics Parachains on Kusama Launch #145](https://github.com/airalab/robonomics/issues/145).

## About the most important things in the work of the Robonomics parachain on Kusama in 2 months

- The parachain is stable and has processed the first million extrinsics. The current network of collators also remains open with approximately [80 collators](https://telemetry.parachain.robonomics.network/#list/Robonomics). Anyone can [become a Robonomics collator](https://wiki.robonomics.network/docs/en/how-to-launch-the-robonomics-collator/) and receive rewards for preparing parachain block candidates and passing them to the Kusama validators.

- [In the release 1.8.2](https://github.com/airalab/robonomics/releases/tag/v1.8.2), the sudo function was removed. The change was accepted by the parachain at the block [347,918](https://robonomics.subscan.io/block/347918). This means that the project development team no longer has the administrative functions of managing the parachain anymore.

- [The technical committee](https://polkadot.js.org/apps/#/techcomm) completed the first update of the network protocol through the on-chain governance mechanism. In just 2 months, the technical committee has processed around 40 requests, such as exodus events, treasury proposals and runtime upgrades.

- [Starting from the release 1.8.0](https://github.com/airalab/robonomics/releases/tag/v1.8.0), the Robot-as-a-service function is fully available. Using this function, you can combine the technical and economic parameters of launching an IoT device.

- [The mechanism of IoT subscriptions in the Robonomics parachain](https://wiki.robonomics.network/docs/en/get-subscription/) has passed the stage of the first applications in real work scenarios. Now it has become the main functionality of the parachain, which the Robonomics developers plan to offer to home infrastructure owners.

- The Winter school was suspended on February 24th. After 3 weeks, the developers decided to abandon the continuation of the school as an event. The Winter School lessons have been redesigned as an introductory Robonomics course, which will be available online 24/7 during 2022 from anywhere in the world. The course will be published on the [robonomics.academy website](https://robonomics.academy/) by the end of March.

- An additional 1 XRT for crowdoan campaign participants who have a pioneer card [is available through the Robonomics dapp](https://robonomics.app/#/bonus-for-pioneer).

## Parachain statistics for 2 months

You can find most of the statistics yourself on the Subscan.io block explorer at: [robonomics.subscan.io](https://robonomics.subscan.io)

![Parachain statistics on Subscan.io](./images/robonomics-parachain-updates-march-22/robonomics-parachain-subscan.jpg)

### The Robonomics parachain processed 1 million transactions

It is more correct to say [extrinsics](https://wiki.polkadot.network/docs/build-protocol-info#extrinsics), but still we will sometimes use such assumptions for simplicity.

![extrinsics for Robonomics](./images/robonomics-parachain-updates-march-22/montly-extrinsics.png)

The daily load on the parachain today is from 10 to 25 thousands transactions per day. The datalog() function is mainly used to remotely collect data from IoT devices. Also, since February, the Robonomics developers have started using parachain IoT subscriptions for the first Robonomics scenarios of which we have been preparing for the past 2 years.

![The daily load on the parachain today](./images/robonomics-parachain-updates-march-22/robonomics-parachain-transactions.jpg)

The number of full Robonomics nodes that transmit to [the publicly available parachain telemetry service](https://telemetry.parachain.robonomics.network/#list/Robonomics) has doubled from 40 to 80 full network nodes. Anyone can [become a Robonomics collator](https://wiki.robonomics.network/docs/en/how-to-launch-the-robonomics-collator/) and receive rewards for preparing parachain block candidates and passing them to the Kusama validators.

### The first Robonomics users

Already in early February, we had confidence that the Robonomics parachain was ready to accept it’s first users. Engaging early adopters always involves putting a lot of emphasis on training and helping out with whatever situation an early version user gets into. It is also a search for the most patient and responsive people who are interested in the technologies we use. Yes, there are always a few of them, and it is difficult to find them in more numbers than a couple of friends and work colleagues, but this is precisely the task we face in 2022. By creating a community of web3 + IoT power users ready to experiment for the sake of education, we will be able to ensure the exponential growth of the project in 2023-2024.

The main thing we want to do to attract the first users is to develop some training courses in 2022 that will not only be useful in terms of acquiring skills, but will also be interesting to complete.

Of course, the Robonomics developers plan to organize contests and encourage the community for being active. However, we still believe that creativity/enthusiasm is stronger than the learning material we could provide. It's cool when, in the process of learning, you can try [to go through a black mirror](https://blackmirror.robonomics.academy/#/) and, while the QR code on the screen changes, remember any episode of the series of the same name or a scene from Philip K. Dick's book "Ubik", in which the main character quarrels with the door, to which he owes a couple of coins... In general, one of the main tasks of the team is to maintain a creative approach to user education in the future.

![](./images/robonomics-parachain-updates-march-22/blackmirror-lesson.jpg)

The Winter school [was suspended on February 24th](https://twitter.com/EnsRationis/status/1496885398404059136). Fortunately, you can still try the first lesson now! To do this, follow the link: [https://blackmirror.robonomics.academy/#/](https://blackmirror.robonomics.academy/#/)

Those who have already completed the first lesson of the School in February may notice that the address of (D)app has changed. Now the lesson is available on the robonomics.academy domain, and soon all 5 lessons that we planned to conduct in the event format of the last week of February will be available online 24/7 in the Robonomics introductory course format. We will tell you about this separately.

### The Robonomics releases on GitHub

Over the past 2 weeks, there have been many releases of the Robonomics parachain client. The most relevant at the time of this writing is [1.8.4](https://github.com/airalab/robonomics/releases).

[Building the Robonomics parachain client](https://wiki.robonomics.network/docs/en/how-to-build-collator-node/) on Ubuntu 21.10 and running without any difficulties:

![Building the Robonomics parachain client](./images/robonomics-parachain-updates-march-22/building-client-for-robonomics-parachain.jpg)

In addition to system updates in releases, it is important to note the following improvements:

- [Release 1.8.0](https://github.com/airalab/robonomics/releases/tag/v1.8.0) - added pallet liability, which allows you to fully implement the Robot-as-a-Service model and launch an IoT device with the transfer of technical and economic information in an atomic form.
- [Release 1.8.2](https://github.com/airalab/robonomics/releases/tag/v1.8.2) - the superuser (sudo) has been removed from the Robonomics parachain. Already today, the Robonomics parachain does not have the possibility of direct control by the developers.

You can get acquainted with all the changes in the Robonomics parachain client at the link: [https://github.com/airalab/robonomics/releases](https://github.com/airalab/robonomics/releases)

## The first stage of the roadmap 2022 is 90% completed

By the end of Q1 2022, the project team has completed almost all [the tasks to implement the basic functionality of the parachain](https://github.com/airalab/robonomics/issues/145), and several Robonomics scenarios that previously worked only in test mode are already at the pilot stage.

### The main task of Q2 2022 - XCM integrations

As you can see from [the Tracking issue for Robonomics Parachains on Kusama Launch #145](https://github.com/airalab/robonomics/issues/145), the first part of the tasks has an item related to [XCMP](https://research.web3.foundation/en/latest/polkadot/XCMP/index.html) implementation. We implemented the first tests with messaging between 2 instances of the Robonomics parachain during [a master class in St. Petersburg in the fall of 2020](https://youtu.be/zCH7RuIHEMg). It is the case howeever, that in past 1.5 years XCMP has undergone many changes, and now it is more correct to say [XCM (Cross-Consensus Message)](https://wiki.polkadot.network/docs/learn-crosschain).

Gavin Wood introduced the first version of XCM in the fall of 2021. XCM is well covered in three articles on medium:

- [XCM: The Cross-Consensus Message Format](https://medium.com/polkadot-network/xcm-the-cross-consensus-message-format-3b77b1373392)
- [XCM Part II: Versioning and Compatibility](https://medium.com/polkadot-network/xcm-part-ii-versioning-and-compatibility-b313fc257b83)
- [XCM Part III: Execution and Error Management](https://medium.com/polkadot-network/xcm-part-iii-execution-and-error-management-ceb8155dd166)r

Already in February, we began to refine the Robonomics parachain in order to implement the first integration within the Kusama ecosystem. Our first task in this direction is integration with the Statemine parachain. This integration will allow users to use any statemine tokens to pay according to the Robot-as-a-Service model, for example, [when remotely controlling a telescope in the Atacama Desert](http://telescope.merklebot.com/) or to pay for items in a vending machine with tokens anywhere in the world.

In addition to integration with Statemine, plans for Q2 include:

- Integration with Karura to add XRT/kUSD liquidity pool.
- Integration with Moonriver to manage IoT devices using arbitrary solidity contracts.
- Studying the technology of bridges between Ethereum and Kusama using the example of Darwinia.

We will describe each integration scenario separately based on the results of testing in Rococo, Westend or other sandboxes where Karura, Moonriver, Darwinia parachains have their own test versions.

## In conclusion

There is complete chaos around us now, but the project team marked our trajectory for the web3 universe long ago - we publish the results of our work on the Internet so that experiments can be repeated anywhere in the world, because apart from open source code and access to the blockchain, you do not need anything more. Of course, life in the world of web3 is not so easy when it comes to a lot of details, but we can handle it. As engineers, we can imagine the consequences of militarization in the 21st century. The best thing that we all can do, with the current geopolitcal situations in mind, is to personally participate in peaceful projects and create as much open source software as possible for the tasks of ordinary people. Over the past year, our efforts have launched such projects as: an educational program for [remote control of the robotic dog Boston Dynamics](https://spot-sdk.education/); [remote observation of the starry sky](https://www.youtube.com/watch?v=Up8hESnXnaY) from the most suitable place for this on the planet Earth - the Atacama Desert; [civil sensor network for monitoring the quality of the urban environment](https://airalab.org/en/air-monitoring) in the industrial city of Togliatti; [monitoring of water quality](https://www.youtube.com/watch?v=4iCkdF2UJmo) in the canals of St. Petersburg. This year we will be focusing on smart home scenarios so you can [manage your home IoT infrastructure without the help of clouds](https://wiki.robonomics.network/docs/en/home-assistant-begin/).

We will share more with you in the next roadmap updates.