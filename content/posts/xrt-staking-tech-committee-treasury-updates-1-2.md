---
title: "Update to Version 1.2: Staking, Tech Committee and Treasury"
date: 2021-09-17
published: true
locale: 'en'
cover_image: ./images/xrt-staking-tech-committee-treasury-updates-1-2/113_Up_to_version_1_2_stakingtech_comm_treasury.jpg
description: "The project developers have implemented 2 important changes in the operation of the Robonomics parachain. The first is the inclusion of XRT staking, and the second is the launch of the first on-chain governance mechanisms."
abstract: "The project developers have implemented 2 important changes in the operation of the Robonomics parachain. The first is the inclusion of XRT staking, and the second is the launch of the first on-chain governance mechanisms."
tags: ['Robonomics parachain', 'XRT token', 'RWS token', 'Staking', 'New release']
---
import Card from '~/components/TextCard.vue'

## Update 1.1: Staking

### Theory

Decentralized PoS networks ensure their security by locking the funds of the validators and all token holders on the network who participate in the selection of the validator pool. To reward validators and token holders, an analogous PoW reward model is usually used, based on the inflation + all commission fees in the block. This is how NPoS is implemented in Polkadot/Kusama.

> Notably, both Ethereum and Polkadot include additional conditions for their reward models. Setting inflation targets, dividing the commission fees into several directions, and even burning a certain percentage of the commission fees are additional settings that both mature and newer networks are experimenting with in their implementations.

Parachains do not need staking in their core functionality. Parachains are secured by Relay Chain validators. This is a shared security model where the projects compete for slots during auctions.

#### Reinventing Staking

Parachains that want to take advantage of the "wisdom of the crowd" and assign tasks to the community need to reinvent staking. At Robonomics, that's what we did. The staking architecture in the Robonomics parachain is unique and specific to the blockchain issues that we solve for the IoT market. We offer two ways to pay for the basic functionality of smart devices: per transaction or by monthly subscription.

Per-transaction payment is self-explanatory. The subscription function needs a little explanation. Some IoT use cases need to periodically access cloud functions, and it is highly undesirable for these to fail. The gas-price mechanism still does not fully solve this problem, especially when it comes to guaranteeing transactions on every block. With this in mind, we came up with the idea of using the staking mechanism to manage a guaranteed quota with a subscription model. On the Substrate side, we did a little trick, based on zero-weight transaction priority processing. If an IoT device activates a subscription, then all its transactions will have priority over any others, except of course other zero-weight transactions. As more tokens go into the network's staking pool, more subscriptions will become available to users. 

<Card>

*For example:*

Total tokens: 2,000,000 XRT;
staked: 800,000 XRT;
parachain bandwidth: 5400 tx per block. 

This gives us 5400 * 800,000 / 2,000,000 = 2,160 monthly subscriptions for IoT devices.

</Card>

I will write about how the subscriptions and the payment pool will be distributed in a separate article entitled “Automated Subscription Auction.”

### Practical Use

DApp ready to go: https://robonomics.app/#/staking/

![XRT staking in Robonomics dapp, new bonding screen](./images/xrt-staking-tech-committee-treasury-updates-1-2/image2.jpg)

After the first transaction, you will get a table of statistics like this:

![XRT staking in Robonomics dapp, bonding list screen](./images/xrt-staking-tech-committee-treasury-updates-1-2/image4.jpg)

Sending tokens between accounts on the parachain will remain disabled. The ability to transfer tokens will be enabled after the parachain goes live on the Kusama network. 

### Observations

As of [block # 235,047](https://robonomics.subscan.io/block/235047), we have approximately one thousand accounts; the largest token holder is the treasury. Treasury funds will not participate in staking.

The remaining accounts on the network appeared as a result of using the Exodus DApp by ERC-20 token holders, or they were participants in the first crowd loan campaign in the Kusama auctions.

Thanks to the integration with Subscan, XRT holders on the Robonomics parachain can use this wonderful interface: https://robonomics.subscan.io/account

![Robonomics Subscan.io account screen](./images/xrt-staking-tech-committee-treasury-updates-1-2/image3.jpg)

On the Exodus DApp interface, you can see the migration statistics from the Ethereum blockchain to the Robonomics parachain: https://robonomics.app/#/exodus

![XRT from the Ethereum blockchain to the Robonomics parachain in Robonomics dapp](./images/xrt-staking-tech-committee-treasury-updates-1-2/image6.jpg)

### Further Improvements to Staking Functionality

The current task for the developers is to test the basic staking mechanisms for token holders under real conditions: adding to the staking pool, accumulating rewards, and unfreezing tokens within 7 days. 

*An interesting task for the community:* check the correctness of the reward calculator, taking into account the two options: a 10% annual reward for participants in the Exodus migration and a 50% annual reward for members of the crowd loan campaign.

After the 1.3 RWS update, the staking mechanism will go live on the network. The RWS update will add subscription capability for digital twins, and the challenge of bandwidth allocation will make sense. Accordingly, we will later be able to fully assess the correctness of the staking mechanism.

## Update 1.2: Tech Committee and Treasury

As with update 1.1, this has already been implemented into the parachain work. The technical committee is currently made up of six technical specialists who have taken part in the development of the parachain during the last 2 years; the DAO [transferred 692,500 XRT](https://etherscan.io/tx/0x6b9a9cbe7d21badf565ebce0fb50b865da8f5f784899db5fb455d1b276d14acf) to the balance of the treasury of the parachain by burning ERC-20 tokens through the Exodus DApp. The network's treasury and technical committee are the first elements of on-chain governance that the parachain developers have implemented so far. More details about each of them are given below.

### Network Technical Committee

The technical committee portal is available at: https://parachain.robonomics.network/?rpc=wss%3A%2F%2Fmain.frontier.rpc.robonomics.network%2F#/techcomm

![The technical committee portal in Robonomics parachain](./images/xrt-staking-tech-committee-treasury-updates-1-2/image5.jpg)

As of September 15, you can see the six members of the technical committee that were added: 2 devops specialists, a software architect, the main Substrate implementation developer, a senior robotics engineer, and a senior DApp developer.
The technical committee will take care of updating the parachain runtime code, starting with subsequent releases on GitHub.

You can read more about the work of this committee in the Polkadot wiki: https://wiki.polkadot.network/docs/learn-governance#technical-committee

Until the Robonomics parachain goes live on Kusama, the project developers will not expand on-chain governance by adding councils or referenda. After the successful launch of the parachain, we will revisit the question of new opportunities to influence network operations for new project participants.

### Treasury

The parachain treasury is available here: https://parachain.robonomics.network/?rpc=wss%3A%2F%2Fmain.frontier.rpc.robonomics.network%2F#/treasury

![The treasury in Robonomics parachain](./images/xrt-staking-tech-committee-treasury-updates-1-2/image1.jpg)

Over the past month, ~100k XRT was distributed from the treasury to the balances of participants in the first Robonomics crowd loan campaign from Summer 2021. These operations are not shown as requests, but rather done by Sudo. Now that we have a technical committee, requests will go through a vote. 

It is also worth noting an interesting mechanism of the treasury: the periodic burning of balances. You can read more about the work of the treasury in the Polkadot wiki: https://wiki.polkadot.network/docs/learn-treasury

The community can request that the parachain treasury allocate XRT for tasks that will be useful in the development of Robonomics in the Polkadot ecosystem or for attracting users from the IoT market.

### Conclusion

There are many exciting updates to come, and each will open up new opportunities for the community. Updates to the project's community development program will soon be published with more information on what will be available to the community over the next 6 months.

<Card :image="'/avatars/Sergei-Lonshakov.jpg'" :back="'transparent'" imageSize="big">

EnsRationis

Robonomics network architect

element: @ensrationis:robonomics.network

</Card>


<Card :icon="'/icons/icon-notification.png'" :link="'https://twitter.com/AIRA_Robonomics'">

### Join our Twitter

Stay tuned and follow updates

</Card>
