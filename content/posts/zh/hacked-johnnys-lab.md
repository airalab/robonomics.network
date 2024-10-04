---
title: 黑客约翰尼的实验室
date: 2024-06-25
published: true
locale: 'zh'
tags: ['Events', 'Online school', 'Web3', ]
cover_image: ../images/hacked-johnnys-lab/cover.png
description: '最近有一个由Robonomics举办的活动“黑客约翰尼的实验室”，我相信我以某种方式黑进去了！除了第一次由于规则误解而输掉之外，我参加的每一轮我都赢了，这里是一个简短的“如何”故事。'
abstract: "嘿！PaTara在这里。最近有一个由Robonomics举办的活动“黑客约翰尼的实验室”，我相信我以某种方式黑进去了！除了第一次由于规则误解而输掉之外，我参加的每一轮我都赢了，这里是一个简短的“如何”故事。 "
---

因此，快速回顾一下必要的规则：12 个单词，顺序不一，一段 5 分钟的视频，视频中 TurtleBot 4 在实验室里徘徊
并破坏了助记词的词序，5-20 名参与者愿意获胜，并在周日自由思考策略。

<rb-image zoom src="./images/hacked-johnnys-lab/0.png" alt="Game Interface" />

我对编程有点了解，我有一台体面的笔记本电脑，几乎没有图像识别技能。更重要的是， 
我决定公平地玩，这意味着不下载视频，不滥用播放速度，不使用播放栏导航。 
所以选择的策略是老式的暴力破解。听起来更像是黑客行为。
我们这里有���么：一个包含12个词的混合顺序集合。这给了我们12！（阶乘）短语选项 
（准确地说是479’001’600）。要处理的数量相当可观！


## 策略1：愚蠢而直接。

嗯，我还需要什么，就去整理一下！但这里有第一个技巧：12！助记短语根本不适用 
我的64 GB RAM！在IDE控制台中出现了SIGTERM错误。 
所以我创建了一个 [迭代器](https://docs.python.org/3/library/itertools.html#itertools.permutations) 并启动了该过程。
我花了一些时间，不确定具体花了多长时间，但在 30 秒内，计算出了组合的数量。
只是一个评估性运行。但问题是：我的笔记本甚至没有将风扇转到最大转速！只有一个核心被加载。 

我搜索了一个Python [multiprocessing](https://docs.python.org/3/library/multiprocessing.html)包，以加载我的CPU的所有逻辑核心（共20个）以并行计算。否则，这将是一次永恒的旅程。 
但是为此我必须将我的迭代器分成12部分。itertools multiprocessing包可以一起工作， 
但当整个选项集在RAM中时。这不是我的情况，所以进行了以下操作： 
从那一刻起，我将使用这种策略使我的CPU负载监视器看起来像这样：

<rb-image zoom src="./images/hacked-johnnys-lab/1.png" alt="Parallelizing"/>


我相信这将执行时间缩短到大约5秒。我找到了遍历组合的最佳方法，但组合太多了！第一步涉及在网络中执行大约4.8亿次外部操作。节点将简单地因为DDOS而禁止我，即使没有那样，也需要很长时间！

<rb-image zoom src="./images/hacked-johnnys-lab/1_1.png" alt="CPU Load"/>


仅出于调试目的，我启动了脚本（用于节点通信我使用了一个 
[py-substrate-interface](https://pypi.org/project/substrate-interface/1.0.3/)包）并注意到在调用之前 
执行时我遇到了诸如_无效助记词短语_之类的错误。一个线索！如果我可以在本地验证组合，

<rb-image zoom src="./images/hacked-johnnys-lab/2.png" alt="1st Attempt"/>


我将节省大量时间！GitHub解析引导我到 
[这里](https://github.com/polkascan/py-substrate-interface/blob/master/substrateinterface/keypair.py#L170) 
代码行，并将组合验证添加到我的脚本中。这将将潜在外部操作的数量减少到大约3900万，快了12倍！ 
但是，3900万次调用将永远禁止我，所以我需要更深入挖掘。我如何显着减少 
计算次数？嗯，稍微背叛我的初始策略。看，我本来打算避免观看视频， 
“一个不需要视频的黑客”，但数学让我改变了主意。将其更改为快132倍的策略。
以下是解释：

<rb-image zoom src="./images/hacked-johnnys-lab/3.png" alt="2nd Attempt"/>


这样我只需要知道短语中两个单词的正确位置（一个将花费太长时间，经过验证的实验）。 
我将遍历10！组合，将两个单词插入正确的位置并验证短语， 
将选项减少到大约30万，减少了很多！10！组合集适合我的RAM，太棒了！ 
自己的本地Robonomics节点与链同步，并询问其结果账户地址余额！

<rb-image zoom src="./images/hacked-johnnys-lab/4.png" alt="2 Words Insertion"/>


查询比外部操作“更容易”。整夜同步后（我设置了一个缓存限制，以便我的 
笔记本电脑不会因为ROM中的链数据而爆炸），我尝试了一下，结果是灾难性的。网络事务 
（即使在本地主机内）花费了太多时间。我甚至没有等到结束，显然比

<rb-image zoom src="./images/hacked-johnnys-lab/5.png" alt="3rd Attempt"/>


而不是尝试每300k次转移所有令牌并为此调用公共节点，我决定设置 
观看整个视频要慢得多。如果我只能知道账户的确切地址！但为此我需要助记词短语... **或者我真的需要吗？** 
查询比外部查询“简单”得多。经过一整晚的同步（我设置了缓存限制，这样我的笔记本电脑就不会因为 ROM 中的链式数据而崩溃），我尝试了一下，结果……这是一场灾难。网络交易
（即使在本地主机内部）花费太多时间。我甚至没有等到结束，显然比 
看整个视频慢得多。如果我只能知道账户的确切地址！但为此我需要一个助记短语... **或者我真的需要吗？**

看。规则说���所需的帐户**恰好**有42个XRT。为什么我不能获得网络中的所有活动地址，
通过拥有恰好42个XRT来筛选它们，并将每个生成的地址与可能的目标列表进行比较 
（大约20个，最终减少到1个）。说起来容易做起来难。 

现在，再次修改我的脚本后，我终于只需要一个查询和一个交易就可以 
给我想要的奖品。

<rb-image zoom src="./images/hacked-johnnys-lab/6.png" alt="4th Attempt"/>


现在，我观看了25秒的视频（同时填写助记词的单词）， 
我只需要最多30秒就可以窃取奖励。已经破解了。

<rb-image zoom src="./images/hacked-johnnys-lab/7.png" alt="Discord Bot Notification"/>



