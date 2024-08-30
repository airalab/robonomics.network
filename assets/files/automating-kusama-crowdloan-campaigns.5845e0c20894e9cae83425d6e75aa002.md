---
title: Automating Crowdloan Campaigns
date: 2021-12-08
published: true
locale: 'en'
cover_image: ./images/automating-kusama-crowdloan-campaigns/cover.jpg
description: "The experience and data from the first cohort of teams who have secured crowdloans can now provide a foundation that future teams can build from to better price, and automate the process of securing crowdloans and winning auctions."
abstract: "The experience and data from the first cohort of teams who have secured crowdloans can now provide a foundation that future teams can build from to better price, and automate the process of securing crowdloans and winning auctions."
tags: ['Robonomics parachain']
---
import KusamaSlotBanner from '~/components/blocks/KusamaSlotBanner.vue'



The initial parachain slot auctions and their associated crowdloans suffered from a first mover disadvantage that caused their prices to be difficult to predict and often too high.  This disadvantage is common in any new market undergoing price discovery, especially markets like the parachain auctions where teams are launching diverse products with diverse needs.

The experience and data from the first cohort of teams who have secured crowdloans can now provide a foundation that future teams can build from to better price, and automate the process of securing crowdloans and winning auctions.
					
The Robonomic core developers will implement an automated oracle beginning with the 4th parachain crowdloan campaign in order to participate in future Kusama parachain slot auctions. This mechanism will allow the robonomics team to automate payment of each future parachain slot lease at renewal.  The robonomics team hopes that this effort will inspire other future teams to use or implement their own automated process to better streamline and reduce the downside risks for teams of the overall slot auction system.

## Parameters currently independently determined by Parachains

> Contribution Cap; Campaign Period; Participant Rewards; Source of Rewards; Distribution of Tokens.

To mitigate risk and unpredictability for both projects and participants, and to help keep the cost of winning these auctions realistic and in line with their value proposition, we would propose that these aforementioned parameters are evaluated and subsequently determined not independently by Parachains, but by an automated oracle. With application and in due time, we anticipate this oracle could be integrated as a common good parachain on Kusama and eventually Polkadot. 
 								
Often overlooked in the excitement of these initial Crowdloans and their generous rewards mechanisms, is the reality that winning projects have a 48 week lifespan as a working operating parachain on Kusama before their lease expires and they are required to renew their position. 

With this in mind, we’ve laid out a v1 summary of our automated oracle algorithm and the conditions under which it could be relevant and effective in the context of the larger slot auction protocol. 


## Autonomous oracle of crowdloan campaigns

So often, you want to be first, but over time you realize that it's more important to stay in the game. The Polkadot ecosystem is just the kind of place where it doesn't matter whether you are the first or the last, what matters is that there is a "free chair" for you. We wonder if in your childhood you played the game [“musical chairs”](https://en.wikipedia.org/wiki/Musical_chairs), but we remember it very well from kindergarten.

Of course, there is an important specificity here as well: the parachain slot lease must be extended before the end of the current lease, otherwise, there may be an interruption or complication in parachain services (the parachain will switch to [Pay-as-you-go Parachains](https://medium.com/polkadot-network/parathreads-pay-as-you-go-parachains-7440d23dde06),  also known as a parathread, for some time).

!["Polkadot ecosystem"](./images/automating-kusama-crowdloan-campaigns/polkadot-ecosystem.jpg)

In general, it's important to stay in line. Below we will talk about the first version of our proposed algorithm for autonomous calculation of the main parameters of crowdloan campaign oracle. Perhaps we should give it a name, but so far nothing interesting comes to mind.

### Contribution Cap Averaging

Within this model we would propose that the automated oracle calculates and averages the median cost in KSM required to win each auction from #15 - #29. This resulting averaged cost would be set as the KSM Crowdloan contribution cap for slot #30. 		

### Lifespan of a crowdloan campaign

We assume that one Crowdloan Campaign should aim to collect for 5 weeks. In case of failure, the oracle will have to shift the sample estimate of the median fees from a range of [15-29] auctions to [20-34] and so on, to account for the results of previous auctions. In this way, there will be an automatic setup up to the point of successfully obtaining a slot.

### Evaluation of the reward for each KSM in favour of the crowdloan campaign

This is the most complex part of the oracle algorithm, requiring the infrastructure of the running parachains. Predicting the cyclically repeating economy of parachains operating for several years now, we remain true to the view that [the reward for crowdloan campaign participants is equal to the lost profit from staking in the Relay chain](https://robonomics.network/blog/robonomics-parachain-lease-offering/).

Most importantly, the reward from staking can be autonomously estimated by an oracle with a fairly high degree of accuracy. For example, we can now talk about a lost profit of 0.19 KSM for every 1 KSM during the year. However, the lost revenue metric alone is not enough, since the reward in parachain is offered in the parachain native token. It is due to this that the scheme gets a little more complicated, but not by too much. We assume that the Kusama and Polkadot ecosystems will always have price tickers for native parachain tokens. For example, Karura’s $KAR may be such a ticker already this year in the Kusama network. We get that the oracle independently, without help from anyone outside, can: (1) obtain data about the current staking fee in the Relay chain, (2) autonomously obtain data about the price of a native parachain token from the DeFi segment of the ecosystem ticker and, based on that data, make an offer similar to the KSM staking.

The DOT and KSM holder will split their bag of tokens between staking in the Relay chain and supporting several (maybe several dozen) crowdloan campaigns, based on a desire to keep the reward as it would be if all DOT/KSM were staked, but diversifying the risk of a single token price. Yes, right now the rewards in parachains are more viewed as a percentage of all native tokens, and figures of 20% of total supply don't seem inflated in the community. Although it's hard to imagine a picture where every year 20% of all tokens will be offered just for slot rentals. Still, this is the genesis state at the stage of the first auctions and, again, a normal picture at the start. However, taking current rewards for everyday life for a decade is not a good idea.

The main criterion for calculating the reward will be the lost profit from staking in the crowdloan campaign of any of the projects and the conversion of this value into the number of native tokens at the current rate. This task can be performed by an autonomous process.

### Reward source and token distribution in parachain

We propose to implement a mechanism for issuing new tokens in the parachain through the treasury module. In turn, the parachain treasury will distribute new parachain coins among the crowdloan campaign participants on a monthly basis throughout the current slot lease term.

## Closing the loop

Above, we gave a generalized description of the first version of the oracle algorithm, which is intended to make the Robonomics protocol more viable without direct developer involvement. However, it is even more important to understand the connection between the slot lease in the ecosystem and the target function of the project. In the case of Robonomics, it is a fee to store, update and interact the user with the digital twin of the cyber-physical system. Our goal on the horizon of 3 years is to form a Robonomics segment capable of serving up to 1 million digital twins per month at ~0.25 XRT.

If the target load is reached, we will have more than $60 million per year in demand for XRT purchases in the marketplace, which will be burned off when the subscription is activated.

(I’ll talk more about the subscription life cycle separately when I publish the next release of Robonomics, dedicated to the subscription auction mechanism). It turns out that the value of XRT will not decline if the number of subscriptions sold for XRT during the year cumulatively exceeds the value that the treasury of parachain will pay according to the oracle of crowdloan campaigns.

In general, my team and I are on a course to create this scheme, which should make it possible to close the tokenomics of the parachain from the moment the slot is obtained to the moment the lease is renewed. We want to make this process as autonomous of human will as possible, and leave only the token holders and developers to propose improvements to the algorithm through the mechanism of democracy and the parachain technical committee. No handwork in perspective. In the meantime, as always happens with hypotheses, we will still take the first steps manually. Below is how the oracle of the future would work for the 4th crowdloan campaign (roughly).

## The parameters of the fourth crowdloan campaign

<Card>

### Collection limit **47,425.5262 KSM**

Based on fees assessment of the 15th auction, Geshiro

</Card>

<Card>

### Duration **5 weeks**

</Card>

<Card>

### Remuneration **4.20 XRT**

1 KSM ~ 370$ APR = 19%,<br/>1XRT ~ 17$

</Card>

<Card>

### Bonus

Pioneer NFT cardholders will receive an extra 1XRT for each KSM

</Card>

<Card>

### Distribution rewards **Monthly**

Proportionally equal shares for 12 months. The treasury performs by generating new tokens in the parachain

</Card>

<KusamaSlotBanner />

