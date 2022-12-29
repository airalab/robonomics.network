---
title: 'Robonomics Parachain Suspension Announcement'
date: 2022-12-05
published: true
locale: 'en'
cover_image: ./images/parachain-suspension-announcement/cover.jpg
description: "The Robonomics parachain on Kusama will soon stop producing blocks due to the parachain lease period expiring. In this article we will explain the series of events that will lead to this occurring, and how Robonomics will attempt to mitigate this situation through the use of XCM."
abstract: "The Robonomics parachain on Kusama will soon stop producing blocks due to the parachain lease period expiring. In this article we will explain the series of events that will lead to this occurring, and how Robonomics will attempt to mitigate this situation through the use of XCM."
tags: ['Robonomics parachain', 'Announcements']
---
import Card from '~/components/TextCard.vue'

## Kusama OpenGov causes cₕₐₒₛ

The long awaited arrival of the new governance system, OpenGov (Gov2), has finally arrived on Kusama, but it brought along a lot of chaos with it. The instatement of the new OpenGov system meant that the previously scheduled auctions wouldn’t be enacted successfully, this meant that the Kusama community had to push through [Gov1 referendum #252](https://kusama.polkassembly.io/referendum/252) – additional details can be found in the [council motion post](https://kusama.polkassembly.io/motion/582). However, this referendum was not successfully enacted - meaning there are currently no scheduled auctions on Kusama.

This change to the schedule was unforeseen, and has impacted the Robonomics project’s plans to bid in an upcoming parachain slot auction as soon as our [November 2022 crowdloan](/blog/robonomics-crowdloan-campaigns-november-2022/) opened.

## Current State of the Robonomics parachain

As it stands right now, the parachain lease period for the Robonomics parachain (paraID 2048) is set to come to an end at approximately 09:00 UTC 12-Dec-22. **The standard method** for swapping parachain leases prior to the release of OpenGov was the following:

1. Generate new paraID using registrar(Reserve) extrinsic (we chose paraID 2237).
2. Set on-chain ID for new paraID to “Robonomics 2”.
3. Open crowdloan using crowdloan(Create) extrinsic.
4. Bid in a parachain slot auction.
5. If successful in the auction, then the Robonomics Developers would initiate governance action to swap over the lease from paraID 2237 to paraID 2048 using the forceLease and registrar:swap functions, similar to these previous referendums:

    - [Karura lease swap](https://kusama.polkassembly.io/referendum/192)
    - [Moonriver and Khala lease swap](https://kusama.polkassembly.io/motion/468)
    - [Shiden lease swap](https://kusama.polkassembly.io/referendum/199)
    - [Parallel-Heiko lease swap](https://kusama.polkassembly.io/referendum/219)
    - [Genshiro lease swap](https://kusama.polkassembly.io/referendum/246)
6. The end result would be that the Robonomics parachain with paraID 2048 would have its lease extended, continue to produce blocks, and not suffer any downtime.

However, there are now 2 key factors that prevent us from following these steps:
1. Parachain slot auctions on Kusama are paused (as we mentioned previously).
2. OpenGov thresholds on Kusama are extraordinarily high.

In basic terms, the new OpenGov system has multiple tracks. Each track can support a specific type of function (can call only particular extrinsics). Some tracks have limited power, such as tipping small amounts of KSM, but others have tremendous power, such as the Root track. 

The thresholds for OpenGov tracks are extraordinarily high, and there are already talks within the Kusama community to lower them, as they are already causing issues for parachain projects such as [Kintsugi](https://twitter.com/kintsugi_btc/status/1599036329399943168). Simply put, a particular referendum must obtain enough support from the network's stakeholders (KSM holders) in order for the referendum to pass from the voting period to the confirmation period. A table of voting curves can be found [here](https://docs.google.com/spreadsheets/d/1vU15a-y_pLR3_3difDxNyhZD_JkehldvnOin7ideW1g/edit#gid=310803467).

In order for the Robonomics project to be able to carry out the aforementioned 6 step plan to swap our lease, we now would also need to pass an OpenGov referendum via the Lease Admin Track. This is where the issue arises – in order for the referendum to be put into the confirmation period, it requires a significant percentage of all circulating supply of KSM tokens to vote in favour of the referendum.

<table>
<thead>
<tr>
<th colspan="3">Lease Admin Track Parameters</th>
</tr>
<tr>
<th># Hours</th>
<th>Amount of KSM tokens needed to enact</th>
<th>% of circulating supply</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>6,500,000</td>
<td>50%</td>
</tr>
<tr>
<td>1</td>
<td>5,922,800</td>
<td>45.56%</td>
</tr>
<tr>
<td>2</td>
<td>5,439,200</td>
<td>41.84%</td>
</tr>
<tr>
<td>3</td>
<td>5,027,100</td>
<td>38.67%</td>
</tr>
<tr>
<td>6</td>
<td>4,091,100</td>
<td>31.47%</td>
</tr>
<tr>
<td>12</td>
<td>2,970,500</td>
<td>22.85%</td>
</tr>
<tr>
<td>24 (1D)</td>
<td>1,900,600</td>
<td>14.62%</td>
</tr>
<tr>
<td>48 (2D)</td>
<td>1,077,700</td>
<td>8.29%</td>
</tr>
<tr>
<td>72 (3D)</td>
<td>734,500</td>
<td>5.65%</td>
</tr>
<tr>
<td>168 (7D)</td>
<td>284,700</td>
<td>2.19%</td>
</tr>
<tr>
<td>336 (14D)</td>
<td>97,500</td>
<td>0.75%</td>
</tr>
<tr>
<td>504 (21D)</td>
<td>32,500</td>
<td>0.25%</td>
</tr>
<tr>
<td>672 (28D)</td>
<td>–</td>
<td>–</td>
</tr>
</tbody>
</table>

Typical voter turnout on Kusama is relatively low, meaning that it would likely take multiple weeks for a Lease Admin track referendum to reach a threshold where it is realistically possible for the referendum to be pushed through to the confirmation period.

## How Robonomics will solve this issue

Fortunately, there is a way that Robonomics can use XCM in order to revive the Robonomics parachain (paraID 2048) without needing to utilise the relay chain’s new OpenGov system. However, this is not without inconvenience:

<Card>

### Preparatory Phase:

1. Unfortunately, we must dissolve the November 2022 crowdloan which was initiated on paraID 2237. This has already been carried out, and all KSM has been returned to the crowdloan contributors.
2. Register new paraID using the registrar(Reserve) extrinsic, and load a shell runtime to that paraID using the registrar(Register) extrinsic. The new paraID is 2240. This parachain can only initiate XCM messages for lease swaps.
3. Initiate a crowdloan from paraID 2240 by issuing the crowdloan(Create) extrinsic.
4. Send an XCM message containing a lease swap request from the main Robonomics parachain (paraID 2048) to the shell parachain (paraID 2240).

</Card>

<Card>

### Temporary Block Production Suspension Period & Revival of the Robonomics Parachain

1. The Robonomics parachain (paraID 2048) will stop producing blocks at the end of its current lease period. The chain state of this parachain is stored in the Kusama relay chain.
2. The shell parachain (paraID 2240) participates in a parachain slot auction, until it secures a new lease.
3. When the shell parachain (paraID 2240) wins an auction, and the lease becomes active, a minimal environment is launched which is able to send an XCM message to revive the main Robonomics parachain (paraID 2048).
4. The shell parachain (paraID 2240) has at this point sacrificed itself by exchanging its parachain lease with the main Robonomics parachain (paraID 2048) via the aforementioned XCM.
5. Having been handed a new parachain lease slot, the Robonomics parachain (paraID 2048) leaves its state of suspended animation and returns to producing blocks.

</Card>

We sincerely apologise for any inconvenience that this may cause, and the maintainers of the Robonomics project shall try all possible scenarios to attempt to rectify the situation ASAP.

At the end of the day, ₑₓₚₑcₜ cₕₐₒₛ.