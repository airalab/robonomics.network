---
title: Robonomics Crowdloan Campaigns, November 2022
date: 2022-11-18
published: true
locale: 'en'
tags: ['Robonomics parachain', 'Polkadot']
cover_image: ./images/robonomics-crowdloan-campaigns-november-2022/cover.jpg
description: "The first leasing period for the Robonomics parachain slot on the Kusama network is coming to an end. By winning auction #20, we got the opportunity to launch, set up and test the first projects based on Robonomics within the Polkadot ecosystem."
abstract: "The first leasing period for the Robonomics parachain slot on the Kusama network is coming to an end. By winning auction #20, we got the opportunity to launch, set up and test the first projects based on Robonomics within the Polkadot ecosystem."
---
import Card from '~/components/TextCard.vue'

During 2022, the Robonomics parachain in Kusama was used in a dozen R&D projects and processed more than [4 million transactions](https://robonomics.subscan.io/) for IoT devices in total.

The Robonomics developers want to continue the implementation of parachain on the Kusama network. Now the entire Polkadot ecosystem is in a phase of dynamic development, and we want to be at the forefront of this process. In other words, we want to stay in the Kusama network.

Our plans for 2023 include the active development around the idea of a decentralized cloud for the control of home IoT infrastructure. Now we are working to ensure that our [decentralized application](https://robonomics.app/) , [wiki project](https://wiki.robonomics.network/) and our educational resource, the [Robonomics Academy](http://robonomics.academy/), have all the necessary functions and information for IoT infrastructure owners.

We will also continue to experiment with opening new XCM channels inside the Polkadot ecosystem in order to find the most optimal “build” of the decentralized cloud for IoT, where not only our parachain, but the parachain ecosystem in its entirety is used to solve the problems arising from the world of the Internet of Things. For example, one of the most obvious scenarios in this direction is a project of decentralized data storage called Crust Network, with which we have already opened a set of HRMP channels. In 2023, all users of Robonomics IoT subscriptions will have their storage usage on Crust network paid for automatically. In 2023, we will try to apply a similar approach in regards to paying for the services of other parachains using funds stored on the Robonomics parachain.

As a result, today we have a working parachain for launching and sending the telemetry of IoT devices on the Kusama network. We are ready to continue our R&D work on the path to becoming a fully-fledged competitor to AWS for IoT, and next year we will place the maximum emphasis on supporting those who have made the important step of deciding to abandon the usual centralized clouds.


## Automating Crowdloan Campaigns, part 2

Last year, the concept of an autonomous oracle for crowdloan campaigns was first introduced in the article [Automating Crowdloan Campaigns](https://robonomics.network/blog/automating-kusama-crowdloan-campaigns/). For developers of the Robonomics parachain, finding an option to autonomize the life of the parachain is an important part of building a decentralized cloud for IoT. This year, for the first time, we will try to launch a crowdloan campaign on behalf of the parachain itself. Below you can find the calculations of the parameters of the new crowdloan campaign, which we plan to eventually turn into a completely autonomous process that will be able to independently launch new campaigns and successfully renew the slot lease.

As we expected, after the first batch of crazy auctions bids, the situation has become a lot more stable / normal, and now we can finally turn to some statistics on the cost of slot leasing. The renewal algorithm will collect statistics from the last dozen auctions to calculate the median leasing price. For example, the table below shows summarized statistics from July to November 2022 (information taken from [parachains.info](https://parachains.info/auctions/)).

<div class="big-table">

  |                              | Auction 60   | Auction 59     | Auction 58 | Auction 57   | Auction 56 | Auction 55   | Auction 54      | Auction 53   | Auction 52   | Auction 51 | Auction 50  | Auction 49      | Auction 48    | 
  |------------------------------|--------------|----------------|------------|--------------|------------|--------------|-----------------|--------------|--------------|------------|-------------|-----------------|---------------|                                            
  | **Winner**                   | Zeitgeist    | Crab Network   | -          | Crust Shadow | Genshiro   | DAO IPCI     | Parathread 2223 | Quartz       | Bit.Country  | Snow       | Subsocial   | Parathread 2130 | GM Parachain  |
  | **Last Bid (KSM)**           | 500          | 11             | 0          | 1 807        | 2 000      | 111          | 1 001           | 1 005        | 3 500        | 13 926     | 1 001       | 1 131           | 5 014         |
  | **Contributions**            | self-funded  | self-funded    | -          | 209          | 160        | self-funded  | self-funded     | self-funded  | self-funded  | 782        | self-funded | self-funded     | 738           |
  | **Number of participants**   | 2            | 1              | 0          | 1            | 2          | 2            | 2               | 2            | 2            | 1          | 1           | 1               | 1             |

</div>

<Card alignContent="center" back="transparent">

**In this case, the median bid is:**

![beta subscript med equals 1001KSM](./images/robonomics-crowdloan-campaigns-november-2022/formula-1.svg)

</Card>

> Update December 5: Due to updates to the Kusama network ([Gov2 upgrade](https://twitter.com/nachortti/status/1588203599129190403)) the Robonomics crowdloan campaign will be restarted in the coming days. The collection limit will be increased to 10,050 KSM.

Thus, the algorithm will use this bid to estimate the cap of the crowdloan campaign.

Further, as mentioned in the [previous publication](https://robonomics.network/blog/automating-kusama-crowdloan-campaigns/), as the main criterion for calculating the reward for participation in the crowdloan, we use the estimation of the KSM stakers opportunity cost versus staking on the Relay Chain. The staking mechanism of the Polkadot ecosystem is designed in such a way that the system provides a return to those who assist in maintining the network’s security, whilst trying to ensure liquidity of the native token. To do this, the “*ideal staking rate*” parameter (to which the network should attain) was introduced. If the number of staked tokens falls below the ideal value, staking rewards increase (thereby prompting users to stake more, to enhance network security). And vice versa, if the staking rate exceeds the ideal, then the rewards drop exponentially.

Our algorithm assumes that the system is in a state above ideal staking (because network security is important to us), so **the maximum annual interest rate for staking** that is possible under these conditions is determined by the ideal staking rate parameter and the maximum inflation rate for stakers (i.e. the total number of minted tokens to pay to validators and nominators):

<Card alignContent="center" back="transparent">

![i subscript 'ideal' ​equals I subscript NPoS divided by ​ x  subscript 'ideal'](./images/robonomics-crowdloan-campaigns-november-2022/formula-2.svg)

</Card>

You can read more about these calculations in the [Token Economics](https://research.web3.foundation/en/latest/polkadot/overview/2-token-economics.html) article from W3F Research.

In the Kusama network, the inflation rate is set at 10%, i.e. this is the maximum that will be minted to stakers in an ideal scenario. The ideal staking rate varies depending on the number of parachains and is currently 45% (as indicated on the Polkadot.js portal of the Kusama network). Thus, we get:

<Card alignContent="center" back="transparent">

![i subscript 'ideal' equals 0.1 divided by 0.45 multiply by 100 percent  equals 22.22 percent](./images/robonomics-crowdloan-campaigns-november-2022/formula-3.svg)

</Card>

At the moment, the *real staking rate* is 52.6%, and the profit of staking participants is less than the ideal level (about 15%). Therefore, the algorithm can take the *ideal interest rate* parameter for the crowdloan campaign, thereby finding a level of reward for participation in the crowdloan that is fair for the network and attractive for stakers.

Now we can calculate the reward for participation in the crowdloan campaign (XRT per 1 KSM), knowing the cost of tokens on the market:

<Card alignContent="center" back="transparent">

![R subscript 'perKSM' ​equals (1 multiply by $KSM ​multiply by i subscript 'ideal' ) divided by $XRT ](./images/robonomics-crowdloan-campaigns-november-2022/formula-4.svg)

</Card>

At the current exchange rate of KSM and XRT, the crowdloan reward will be about **2.06 XRT per 1 KSM**. Knowing this value and the median cost of leasing a slot, it is easy to calculate the total payouts to crowdloan participants:

<Card alignContent="center" back="transparent">

![R subscript 'total' equals beta subscript 'med' ​multiply by R subscript 'perKSM' equals 2075.03XRT](./images/robonomics-crowdloan-campaigns-november-2022/formula-5.svg)

</Card>

> Update December 5: Due to Kusama network updates ([Gov2 upgrade](https://twitter.com/nachortti/status/1588203599129190403)) the Robonomics crowdloan campaign will be restarted in the coming days. The total reward pool has been increased to 20,750 XRT.

## Movement from inflationary to deflationary parachain tokenomics

The cost of shared security on the Kusama network has stabilized. This can be seen from the recent slot auction statistics, projects do not need to allocate a substantial number of their parachain’s native token supply to reward crowdloan campaign participants. In addition to this fact, we should consider that a Robonomics-specific mechanism for burning native tokens is at the moment that a user activates an IoT subscription - meaning that the Robonomics architecture within the Polkadot ecosystem can actually be a parachain with deflationary tokenomics.

It is estimated that the total generation of new Robonomics parachain tokens in 2023 will be less than 0.38% of the total number of parachain token issuance. There is also ~370k XRT stored within the treasury of the Robonomics parachain, of which 3.5k XRT is automatically burned each month. This means that the Robonomics parachain in 2023 will show definite deflationary dynamics, with a high probability of the deflation of parachain token being greater than 3%. The actual amount of deflation will depend on the amount of XRT burned during IoT user subscriptions activation.

Due to this, the Robonomics developers plan to cancel token staking during the next parachain slot leasing period, and focus heavily on further development of the parachain’s architecture. Additionally, there will be heavy focus on reducing the generation of new XRT tokens (to an extent that is practicable), and to actively develop more parachain services which utilize the expenditure (burning) of XRT tokens.

Keep walking…

![](./images/robonomics-crowdloan-campaigns-november-2022/keep-walking.jpg)

