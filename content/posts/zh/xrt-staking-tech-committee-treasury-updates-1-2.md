---
title: "最高到 1.2 版：质押、技术传播和司库"
date: 2021-09-17
published: true
locale: 'zh'
cover_image: ../images/xrt-staking-tech-committee-treasury-updates-1-2/113_Up_to_version_1_2_stakingtech_comm_treasury.jpg
description: "项目研发人员采用2种重要变更推行机器人经济学平行链工作。第一 种是 接入XRT质押泛函数，第二 种是启动第一个链上管理机制。"
abstract: "项目研发人员采用2种重要变更推行机器人经济学平行链工作。第一 种是 接入XRT质押泛函数，第二 种是启动第一个链上管理机制。"
tags: ['Robonomics 平行链', 'XRT 代币', 'RWS 令牌', '质押', '新版本']
---
import Card from '~/components/TextCard.vue'

## 更新1.1版：质押

### 原理

使用了PoS机制的分散网络通过联锁验证者和所有参与验证者池选择的网络代币持有者的资金来确保己方安全。为了奖励验证者和代币持有者，通常使用类似的PoW奖励模型 - 发行+区块中的所有佣金。这就是NPOS在Polkadot/Kusama中的实现方式。

> 值得注意的是，以太坊和polkadot都为己方的奖励模型提出了补充条件。设定目标发行指标、将佣金划分成几个方向，包括销毁一定比例的佣金 — 这已经是附加调整，尝试在自己的工作中实验性推行大量成熟的以及不太成熟的网络。

在其基本功能中，平行链不需要质押。中继链验证者将确保平行链的安全性。这就是项目在拍卖期间为之拼搏的shared security。

#### 重塑质押

想要利用群众的智慧并为社区分配一些任务的平行链将不得不重塑质押。在机器人经济学的案例中，我们做到了。机器人经济学平行链中的质押架构是独一无二的，并且专门用于我们为物联网市场解决的任务。我们为智能设备基本功能提供两种支付方式 - 按交易付费或按月订阅。

按交易付费是很容易理解的，不需要解释其工作原理。订阅功能需要稍微解释一下。物联网使用的一些场景要求可以定期访问云功能，最好不要违反此工作计划。含天然气价格的机制仍然没有100%解决该问题，尤其是在保证每个区块的交易时。考虑到这些想法，我们提出了使用质押机制来管理订阅模型上的保证配额的想法。在研发substrate方面，我们做了一个基于零权重交易优先级处理的技巧。如果物联网设备激活订阅，那么来自它的所有交易都将优先于任何其他交易，当然其他零权重交易除外。网络中的代币越多，用户可以获得的订阅就越多。

<Card>

*示例:*

总代币：2000000XRT；在质押中：800000XRT；平行链通过能力：5400 tx per block。

得出5400 * 2000000/800000=13500物联网设备的订阅。

</Card>

就如何分配订阅和支付池的问题我将单独写一篇“自动订阅拍卖”的文章。

### 实践

Dapp应用程序准备就绪：https://robonomics.app/#/staking/

![Dapp应用程序准备就绪](../images/xrt-staking-tech-committee-treasury-updates-1-2/image2.jpg)

第一次交易后，您将获得具有统计信息的表格:

![Dapp](../images/xrt-staking-tech-committee-treasury-updates-1-2/image4.jpg)

平行链上账户之间的代币发送仍是被禁用。在Kusama网络上出现平行链后，将可以接入转移代币。

### 监测

在 [#235047区块](https://robonomics.subscan.io/block/235047) 上，我们有大约一千个账户，最大的代币持有者是金库。金库的资金不参与质押。

网络上的其余账户是ERC-20持有者使用dapp exodus代币的结果，或者是Kusama拍卖中第一家Crowdloan公司的入股人。

由于与Subscan结合，机器人经济学平行链中的XRT持有者可以使用以下精彩的界面：https://robonomics.subscan.io/account

![Subscan.io](../images/xrt-staking-tech-committee-treasury-updates-1-2/image3.jpg)

在dapp Exodus界面，可以看到以太坊到平行链的迁移统计：https://robonomics.app/#/exodus

![dapp Exodus](../images/xrt-staking-tech-committee-treasury-updates-1-2/image6.jpg)

### 进一步改进质押功能

目前，研发人员的任务是在真实条件下测试代币持有者的基本质押机制 — 增加质押、累积奖励、在7天内解冻代币。

*社区的有趣任务：* 检查奖励计算器的正确性，考虑两种计算项目 - 结果参与者的10%的annual reward和Crowdloan公司入股人50%的annual reward。

1.3 RWS 更新后，质押机制将对网络产生影响。RWS 的更新将为数字孪生添加订阅功能，通过能力的分配任务将变得有意义。因此，我们稍后将能够全面评估质押机制工作的正确性。

## 更新 1.2 版：技术委员会和金库

该更新版与更新1.1版相同。已经在平行链的工作中推广了。技术委员会目前由6名近2年参与平行链研发的技术专家组成， [研发人员的DAO通过dapp exodus销毁ERC-20代币，将692500XRT转移到平行链的金库平衡表中。](https://etherscan.io/tx/0x6b9a9cbe7d21badf565ebce0fb50b865da8f5f784899db5fb455d1b276d14acf) 网络的金库和技术委员会是平行链开发人员迄今为止采用的链上管理的第一个要素。以下是关于每一个的更多细节。

### 网络技术委员会

技术委员会工作界面可由以下链接进入： https://parachain.robonomics.network/?rpc=wss%3A%2F%2Fmain.frontier.rpc.robonomics.network%2F#/techcomm

![网络技术委员会](../images/xrt-staking-tech-committee-treasury-updates-1-2/image5.jpg)

如9月15日看到的，技术委员会新增了6名成员，他们是：2名Devops专业人员，软件架构师，执行Substrate的总设计师，高级工程师-机器人技术专家和dapp高级 开发人员。

技术委员会将执行更新平行链代码runtime的任务，自Github下一版本开始。

您可以在Polkadot wiki中阅读有关技术委员会工作原理的更多信息： https://wiki.polkadot.network/docs/learn-governance#technical-committee

在区块机器人经济学平行链出现前，项目研发人员不会在增加领事和民主方面扩展链上管理功能。平行链成功出现后，我们将返回到新项目参与者影响网络运营的新机会问题上。

### 金库

可通过以下链接进入平行链金库界面： https://parachain.robonomics.network/?rpc=wss%3A%2F%2Fmain.frontier.rpc.robonomics.network%2F#/treasury

![库](../images/xrt-staking-tech-committee-treasury-updates-1-2/image1.jpg)

在过去的一个月里，大约10万个XRT已在2021年夏天从金库中分配到机器人经济学第一家Crowdloan公司的平衡表中。这些操作不会反映在请求中，因为它们是通过 sudo 函数达到的。现在我们有技术委员会，请求将通过投票决定。

同样值得关注的还有金库的有趣机制 — 定期销毁平衡表。您可以在 Polkadot wiki 中阅读有关金库工作的更多信息： https://wiki.polkadot.network/docs/learn-treasury

社区可以向平行链金库提出请求，要求分配XRT以完成Polkadot 生态系统中机器人经济学的发展或从物联网市场吸引用户的任务。

### 最后

将来还有很多有趣的更新等着我们，每一次更新都将为社区带来新的机会。在不久的将来，将发布项目社区发展计划的更新，我们将在其中详细介绍未来6个月内社区可访问的内容。

<Card :image="'/avatars/Sergei-Lonshakov.jpg'" :back="'transparent'" imageSize="big">

EnsRationis

Robonomics network architect

element: @ensrationis:robonomics.network

</Card>


<Card :icon="'/icons/icon-notification.png'" :link="'https://twitter.com/AIRA_Robonomics'">

### Join our Twitter

Stay tuned and follow updates

</Card>
