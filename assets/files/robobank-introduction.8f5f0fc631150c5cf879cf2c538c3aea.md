---
title: Robobank. Accept any Polkadot token in automation services
date: 2021-03-26
published: true
locale: 'en'
cover_image: ./images/robobank-introduction/robobank-introduction-cover.jpg
description: "Robonomics developers have come up with a solution based on the Polkadot architecture that will allow any parachain to get access to IoT device management with payment in a native token"
abstract: "Robonomics developers have come up with a solution based on the Polkadot architecture that will allow any parachain to get access to IoT device management with payment in a native token"
tags: ['Robonomics parachain', 'XRT token', 'Use Cases']
---
import Card from '~/components/TextCard.vue'

<section class="animate-inside" v-in-viewport.once>

## Accept any Polkadot token in automation services

</section>

<section class="animate-inside" v-in-viewport.once>

!["Robobank from Robonomics introduction, banner 1"](./images/robobank-introduction/robobank-introduction-banner-1.jpg)

</section>

Vending machines, carsharing, Airbnb smart apartments, "Google" offices... will be ready to execute services with any Polkadot ecosystem token payments this year.

Robonomics developers have come up with a solution based on the Polkadot architecture that will allow any parachain to get access to IoT device management with payment in a native token. Each parachain that adds a Robobank branch to its runtime will be able to use the functions of launching a smart device running under the Robonomics parachain control.


Users will not have to pay commissions outside of the native parachain token  — any payment made through Robobank will provide a free execution of an automated service / launch of an IoT device for the user. The only thing that the owner of the automated service will need is an active subscription of the IoT device to use the Robonomics parachain.

<section class="animate-inside" v-in-viewport.once>

## Polkadot for IoT. Robonomics modules with XCMP support

</section>

<section class="animate-inside" v-in-viewport.once>

!["Robobank from Robonomics introduction, banner 2"](./images/robobank-introduction/robobank-introduction-banner-2.jpg)

</section>

To help the Polkadot ecosystem evolve towards IoT, Robonomics is going to provide parachains with the greatest possible integration with the most popular devices over the coming years.


If Robonomics is readily available, then the functionality of the parachain will expand in the direction of automating the services that surround us in the real world:


* Acala will be able to integrate its DeFI instruments into terminals and payment points.
* Plasm and Moonbeam will be able to provide control over the implementation of the terms of a smart contract to modern homes, offices, cars and any other IoT oracles.
* Darwinia will be able to issue NFT tokens linked to 3D printer log, robot drawing or AI-generated music composition.
* Phala will be able to increase the level of privacy of user applications, with which we control IoT devices in our personal space.
* etc.


These are just examples that came to the author's mind, and you can try to continue the list yourself thinking about services for Smart Cities.

<section class="animate-inside" v-in-viewport.once>

## Robobank is the first Robonomics feature using XCMP

</section>


A separate parachain provides specific functions, and the native token is used to pay commissions for performing these functions on the Polkadot network.

The creators of the parachain are limiting the capabilities of their Polkadot segment to increase performance, while the presence of other parachains and the ability to send a transaction from one parachain to another using [XCMP](https://wiki.polkadot.network/docs/en/learn-crosschain) can achieve a network effect.

Each parachain builds its own ['runtime' from modules called 'pallet'](https://substrate.dev/docs/en/knowledgebase/runtime/).

<section class="animate-inside" v-in-viewport.once>

!["Robobank from Robonomics introduction, 3"](./images/robobank-introduction/robobank-introduction-3.png)

*Using the Ethereum architecture terms, the runtime is a separate virtual machine built for the tasks of only a few smart contracts.*

</section>

Summarizing the functions that are involved in a separate parachain, we get a complete solution with resource savings for “not the most important” capabilities for a specific project.

<section class="animate-inside" v-in-viewport.once>

> Parachains are the same as shards, but each is assembled in its own way.

</section>

By being in [shared security](https://wiki.polkadot.network/docs/en/learn-security#shared-security), parachains can create trusted connections between each other. This approach saves us from the fear of being in a cool but empty sandbox.

The presence of the Robonomics parachain will allow other Polkadot parachains to expand the functionality of native tokens by adding instead of the full and rather complex functionality of working with IoT devices to your virtual machine (i.e runtime), functions such as: pay for launching an IoT device or receive data from the device during the payment process.

Next, we will look at an example of architecture using multiple Polkadot parachains in order to extend the capabilities of any project through infrastructure integration solutions based on XCMP.

<section class="animate-inside" v-in-viewport.once>

## Robobank Architecture

</section>

<section class="animate-inside" v-in-viewport.once>

!["Robobank from Robonomics introduction, infographics"](./images/robobank-introduction/robobank-introduction-infographics.png)

</section>

Consider an example of a truly decentralized Uber service.

By implementing Uber Parachain, developers could focus on the rating system of drivers, the system for processing user requests in p2p mode, and other customer service issues, and not worry about the need to simultaneously support the IoT component of their applications — Robonomics will help with IoT. Uber Parachain will only need to integrate the Robobank pallet into its runtime in order to provide customer access to the car after payment and receive trip reports directly from the IoT modules of the car.

### Let's have a look at the diagram above and highlight the important points:

* **Polkadot token** is a native parachain token, implemented for example through the assets pallet.
* **Robonomics Web Services** is a pallet inside the Robonomics parachain, which implements the ability to connect an IoT device under the control of the Polkadot network on a monthly subscription model with guaranteed bandwidth.
* **IoT app** is a custom application for automating the ordering of services, in which the native parachain token is used for payment. In the example with Uber Parachain, it would be a familiar phone application for city residents to order a taxi or search for a carsharing service.
* **The car icon** is an IoT device acting as a party to an automated service, partially or completely providing a service. In the example, it would be a car, and by no means a driver! It is the car that would be the party providing access to opening the car doors and generating a trip report with telemetry data.
* **Robobank Branch** is the Robonomics module for inclusion in the Polkadot parachain network.
* **Robobank Tower** is the Robonomics module that runs permanently in the runtime of the Robonomics parachain and can launch IoT devices with an active subscription based on token transfer transactions in neighboring parachains.

As you can see from the diagram and the description of the modules, the parachains need to install Robobank Branch, which can be performed in the parachain [update mode](https://wiki.polkadot.network/docs/en/build-protocol-info#runtime-upgrades) without a hard fork.

Now let's look at a step-by-step use case to represent the full cycle of the Robobank module after the Robobank Branch is enabled by the Polkadot parachain.

1. `PaymentToRobot()` — this function can be seen among others in the parachain after the Robobank Branch module is enabled. As a result of a user sending a transaction from an IoT application, Robobank Branch will receive data on the amount of the payment and the device that needs to be launched for execution.
2. `TransferToRobobank()` – will ensure the transfer of funds from the user account to the Robobank account with the ability to withdraw the accumulated amount in one transaction from the IoT device. For example, after making 10 trips or working within 5 hours, the car can generate automatic transactions to transfer funds from the Robobank account to the address of the crypto exchange. There is no actual movement of tokens from one parachain to another.
3. `SignalToRobonomics()` — will be a function using XCMP. It is important to note that we will be able to ensure that messages sent on behalf of Robobank Branch are identified and marked as trusted. Some analogue of communication between smart contracts in the Ethereum network.
4. `SignalFromRobonomicsBranch()`  — the message sent in the previous step will be sent through the Relay chain for processing to the central node of the Robobank Tower module. Having received a message from the parachain, Robobank Tower will record the request to launch the payment device in the Robonomics parachain, and thereby remove the need to store the payment log on the side of each parachain who uses the Robobank Branch module. In fact, the Robobank branches will perform the functions of correspondent accounts and are subordinate to the main branch in the form of a Tower, in which the full history of the execution of the automated service with payment in the neighboring parachain will be kept.
5. `FreeTXtoRWS()` — two modules of the Robonomics parachain can trust each other, just like smart contracts in Ethereum. If we can ensure trust in the request from Robobank Branch to Robobank Tower, then in the same way we can provide the ability to launch a device with an active subscription not from the device address, but based on payment in tokens.
6. `Launch || Datalog` — a combination of these functions will allow, for example, to launch a service for execution with an indication of the user who will have access to the back door of the car in the Uber Parachain application, or record the data necessary for the provision of the service.
7. Steps 7-10 implement the possibility described in step 2. `TransferToRobobank()` to periodically empty your IoT device account by sending a transaction in the Robonomics parachain directly to Robobank Tower.

As a result, we examined the architecture of a solution using cross-chain transactions to expand the capabilities of a separate project at the expense of a common ecosystem.

<section class="animate-inside" v-in-viewport.once>

## Current status and plans

</section>

After the first tests on the Rococo network, the developers will publish instructions for the implementation and use of the Rocobank module on the [wiki.robonomics.network](https://wiki.robonomics.network/)

Our main goal is to prepare the Robobank module for the launch of parachains on the Kusama network in the summer of 2021.

To find out more, stay in touch on [Twitter](https://twitter.com/AIRA_Robonomics).
