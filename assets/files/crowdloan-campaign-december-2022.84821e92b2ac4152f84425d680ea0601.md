---
title: New Robonomics Crowdloan Campaign, December 2022
date: 2022-12-12
published: true
locale: 'en'
tags: ['Robonomics parachain', 'Polkadot', 'Announcements']
cover_image: ./images/crowdloan-campaign-december-2022/cover.jpg
description: "After a bit of a hitch caused by the chaos in the early days of OpenGov, we're ready to restart the Robonomics crowdloan campaign. In this article, we'll take a look at the series of events that led to the restart of the campaign and present its new parameters."
abstract: "After a bit of a hitch caused by the chaos in the early days of OpenGov, we're ready to restart the Robonomics crowdloan campaign. In this article, we'll take a look at the series of events that led to the restart of the campaign and present its new parameters."
---
import Card from '~/components/TextCard.vue'

## Kusama OpenGov Causes cₕₐₒₛ

The long awaited arrival of the new governance system, OpenGov (Gov2), has finally arrived on Kusama, but it brought along a lot of chaos with it. The instatement of the new OpenGov system resulted in the previously scheduled auctions not being successfully enacted. The Kusama community had started [Gov1 referendum #252](https://kusama.polkassembly.io/referendum/252) for fixing the auctions schedule, but it did not enact successfully because of restrictions of AuctionAdmin privilege. This error was caused by the fact that in the new gov system it is mandatory to push the OpenGov proposal on the Auction track in order to launch auctions. It was decided to adjust OpenGov params with [a runtime upgrade](https://kusama.polkassembly.io/referendum/254), but this referendum was also not successful either due to a conflict between the Gov1 and Gov2 logic.

All in all, it took the Kusama community and developers a couple of weeks to figure out the intricacies of the new governance system. This was unforeseen, and had impacted the Robonomics project’s plans to bid in an parachain slot auction in our November 2022 crowdloan campaign. We have already dissolved [the November 2022 crowdloan](/blog/robonomics-crowdloan-campaigns-november-2022/) which was initiated on paraID 2237, and all KSM has been returned to the crowdloan contributors.

## New Challenges for Extending the Lease of the Slot

**The standard method** for swapping parachain leases prior to the release of OpenGov was the following:

1. Generate new paraID using registrar(Reserve) extrinsic.
2. Set on-chain ID for new paraID.
3. Open crowdloan using crowdloan(Create) extrinsic.
4. Bid in a parachain slot auction.
5. If successful in the auction, then the developers would initiate governance action to swap over the lease from this donor paraID to the working parachain paraID using the forceLease and registrar:swap functions, similar to these previous referendums: [Karura lease swap](https://kusama.polkassembly.io/referendum/192), [Moonriver and Khala lease swap](https://kusama.polkassembly.io/motion/468), [Shiden lease swap](https://kusama.polkassembly.io/referendum/199), [Parallel-Heiko lease swap](https://kusama.polkassembly.io/referendum/219), [Genshiro lease swap](https://kusama.polkassembly.io/referendum/246).
6. The end result would be that the working parachain would have its lease extended, continue to produce blocks, and not suffer any downtime.

However, with the introduction of OpenGov, thresholds for governance action on Kusama have become extraordinarily high. In basic terms, the new OpenGov system has multiple tracks. Each track can support a specific type of function (can call only particular extrinsics). Some tracks have limited power, such as tipping small amounts of KSM, but others have tremendous power, such as the Root track.

The thresholds for OpenGov tracks are extraordinarily high, and there are already actions within the Kusama community to lower them, as they are already causing issues for parachain projects such as [Kintsugi](https://twitter.com/kintsugi_btc/status/1599036329399943168). Simply put, a particular referendum must obtain enough support from the network's stakeholders (KSM holders) in order for the referendum to pass from the voting period to the confirmation period. 

In order for the parachain to be able to carry out the aforementioned 6 step plan to swap the lease, it is needed to start the parachain auction schedule once again, this means that an OpenGov referendum should pass that restarts the auctions either via the Lease Admin track, or possibly as part of a runtime upgrade via the Root/Whitelisted Caller tracks. This is where the issue arises – in order for the referendum to be put into the confirmation period in a timely manner, it requires a significant percentage of all circulating supply of KSM tokens to vote in favour of the referendum. Typical voter turnout on Kusama is relatively low, meaning that it could potentially take multiple weeks for a Lease Admin track referendum to reach a threshold where it is realistically possible for the referendum to be pushed through to the confirmation period.

While we still hope that the community will adjust OpenGov params, fortunately, there is a way that the parachain can use XCM in order to execute the 6 step plan without needing to utilise the relay chain’s new OpenGov system.

We can register a new paraID using the registrar(Reserve) extrinsic, and load a shell runtime to that paraID using the registrar(Register) extrinsic. This parachain should only initiate XCM messages for lease swaps. We then send an XCM message containing a lease swap request from the main parachain to the shell parachain. When the shell parachain wins an auction, and the lease becomes active, a minimal environment is launched which is able to send an XCM message to swap the lease slot with the main parachain.

## New Parameters for Crowdloan Campaign

As [mentioned previously](https://robonomics.network/blog/robonomics-crowdloan-campaigns-november-2022/), we want to automate our crowdloan campaigns based on the statistics on the cost of slot leasing and ideal staking rate. Let’s take a look at current parameters for the renewal algorithm.

<Card alignContent="center">

**1. Statistics of median leasing price from August to November 2022 (information taken from [parachains.info](http://parachains.info/)):**

</Card>

<div class="big-table">

|  | Auction 62 | Auction 61 | Auction 60 | Auction 59 | Auction 58 | Auction 57 | Auction 56 | Auction 55 | Auction 54 | Auction 53 | Auction 52 | Auction 51 | Auction 50 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Winner | Parathread 2236 | Parathread 2233 | Zeitgeist | Crab Network | — | Crust Shadow | Genshiro | DAO IPCI | Parathread 2223 | Quartz | Bit.Country | Snow | Subsocial |
| Last Bid (KSM) | 1 005 | 241 | 500 | 11 | 0 | 1 807 | 2 000 | 111 | 1 001 | 1 005 | 3 500 | 13 926 | 1 001 |
| Contributions | self-funded | self-funded | self-funded | self-funded | — | 209 | 160 | self-funded | self-funded | self-funded | self-funded | 782 | self-funded |
| Number of participants | 1 | 3 | 2 | 1 | 0 | 1 | 2 | 2 | 2 | 2 | 2 | 1 | 1 |

</div>

<Card class="withImg" alignContent="center">

**2. The median bid is:**

![beta subscript med equals 1001KSM](./images/crowdloan-campaign-december-2022/formula-1.svg)

</Card>

<Card class="withImg" alignContent="center">

**3. We additionally introduce an correction if previous crowdloan campaigns were not successful. The median bid adjusted for previous crowdloan attempts is:**

![beta subscript 'adjmed' equals 1001 multiplied by 2 equals 2002 KSM](./images/crowdloan-campaign-december-2022/formula-2.svg)

</Card>

<Card class="withImg" alignContent="center">

**4. The ideal staking rate is:**

![x subscript ideal equals 45.0 percent](./images/crowdloan-campaign-december-2022/formula-3.svg)

</Card>

<Card class="withImg" alignContent="center">

**5. The real staking rate is:**

![x subscript 'real' equals 49.3%  greater than percent x subscript 'ideal'](./images/crowdloan-campaign-december-2022/formula-4.svg)

</Card>

<Card class="withImg" alignContent="center">

**6. The ideal interest rate is:**

![i subscript 'ideal' ​equals I subscript 'NPoS' ​ divided by x subscript 'ideal' equals 0.1 divided by 0.45 multiply by 100 percent equals 22.22 percent](./images/crowdloan-campaign-december-2022/formula-5.svg)

</Card>

<Card class="withImg" alignContent="center">

**7. The reward for participation in the crowdloan campaign (XRT per 1 KSM):**

![R subscript 'perKSM' ​equals (1 multiply by $KSM ​multiply by i subscript 'ideal') divided by $XRT ​equals (1 multiply by 24.65$ multiply by 0.22) divided by 2.30$ equals 2.38 XRT per KSM](./images/crowdloan-campaign-december-2022/formula-6.svg)

</Card>

<Card class="withImg" alignContent="center">

**8. Total payouts to crowdloan participants:**

![R subscript 'total' ​equals B  subscript 'adjmed' ​multiply by R subscript 'perKSM' equals 4768.05 XRT](./images/crowdloan-campaign-december-2022/formula-7.svg)

</Card>

That's the story. And, as always, ₑₓₚₑcₜ cₕₐₒₛ.