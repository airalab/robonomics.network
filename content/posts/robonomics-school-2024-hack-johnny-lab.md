---
title: "Robonomics School 2024: Game Rules for Hack Johnny's Lab"
date: 2024-06-05
published: true
locale: 'en'
cover_image: ./images/robonomics-school-2024-hack-johnny-lab/cover.jpeg
description: "In the coming days, we will launch a practical quest of Robonomics School 2024, during which you will be able to feel like a real privacy violator and even 'steal' tokens. Interested? Check out the rules for the game 'Hack Johnny's lab'!"
abstract: "In the coming days, we will launch a practical quest of Robonomics School 2024, during which you will be able to feel like a real privacy violator and even 'steal' tokens. Interested? Check out the rules for the game Hack Johnny's Lab!"
tags: ['Announcements', 'Events', 'Online school']
---
import Card from '~/components/TextCard.vue'


## Motivation for The Game

This game draws a lot of inspiration from the ideas about escaping from Black Mirror, which Sergei talked about in his articles ([first](https://robonomics.academy/en/learn/escape-from-black-mirror/overview/) and [second](https://robonomics.academy/en/learn/school-2024-iot-vs-ai/overview/)) at Robonomics Academy.

Imagine, an ordinary cheap robot vacuum cleaner has a serious ability to spy on the lives of its owners. It does not even matter whether some malicious person gains access to this data; AI analysis of video recordings is enough to draw conclusions about non-public aspects of a person’s life. Any dirty secrets, unnoticeable patterns of behavior, and private information — everything goes into the profile furnace. Think about it, while you are trying to grab some free tokens.

## The Goal of The Game

In the game, players are tasked to restore the seed phrase from the data of the mobile robot. The robot moves randomly around the laboratory, recording video. From time to time, the robot publishes one of the 12 seed phrase words. During one of the robot’s stops, players can see on the video a sign with a number, which hints at the order of that word in the seed phrase. The task is to match the numbers on the signs with the set of words received at the robot's stops, to restore the correct seed phrase.

The player who first restores the seed phrase and withdraws all XRT tokens from its address wins.

## The Game Rules

*Registration of players*

- To participate, players have to create a new account on the Robonomics parachain, and it must be created with the Edwards (ed25519) encryption type. Instructions are available on [our wiki](https://wiki.robonomics.network/docs/create-account-in-dapp/).
- Next, players need to go to the [Discord bot](https://discordapp.com/channels/803947358492557312/1245395009964871772) on the Robonomics server and wait for a message about the start of a new session.
- At the start of the session, players send the created account addresses in **Robonomics parachain format** to the Discord bot. Players will have 60 minutes to enter.

*Laboratory exploration*

- After the registration is complete, the mobile robot will go to explore the laboratory. After that, the robot will send a video recording and a list of the words in the seed phrase (not in the correct order).
- Players are waiting for a message from the Discord bot about receiving results from the robot and go to the application [via a link](https://robonomics.academy/en/demoapps/johnnyb-lab/) to start restoring the seed phrase.

*Restoring the Seed Phrase*

- To access the data, players have to use the registered Robonomics account.
- Players will have access to the video recording and the set of seed phrase words. The player's task is to find the correct order of the words based on the numbers on the signs located in the laboratory.

<Card alignContent="left">

**Example.** If the set of words: 

`finding -> church -> relation -> dog -> sample`

And the robot's route, reconstructed from the video: 

`Sign #5 -> Sign #3 -> Sign #1 -> Sign #2 -> Sign #4`

Then:

`finding — Sign #5 -> finding is 5th word`

`church — Sign #3 -> church is 3rd word`

`relation — Sign #1 -> relation is 1st word`

`dog — Sign #2 -> dog is 2nd word`

`sample — Sign #4 -> sample is 4th word`

As a result, the correct seed phrase: `relation dog church sample finding`

</Card>


- After finding the seed phrase, players can restore access to the account with tokens using any application.
- For example, in the Polkadot.js extension, this can be done using the *Import account from pre-existing seed* function.
- All restored account with XRTs have **an Schnorrkel (sr25519)** encryption type, that supported in most Polkadot / Kusama wallets.


*Announcement of the winner*

- Once a player has accessed the account, he or she has to withdraw XRT to become the winner of the session, until someone else does it.
- For example, using the Polkadot.js extension, this can be done on [our Polkadot / Substrate portal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/accounts) on the Account page. Just press Send button and withdrawn tokens to any place you want. You can use *Transfer the full account balance, reap the sender* check to make full balance withdrawal.
- Upon completion of the session, after the tokens are withdrawn, the bot will notify the Discord channel by publishing the winner's address.

## Event Conditions

The event will last 9 days, during which in the morning and evening (18 times in total) you will have the opportunity to be the first to reach **42 XRT** within each session.

The registration for session is started at **10:00 and 20:00 EEST** every day and last 60 minutes.

Follow our social networks so you do not miss the start of the event!