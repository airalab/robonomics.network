---
title: "Robonomics开源硬件起源"
date: 2024-11-11
published: true
locale: 'zh'
cover_image: ../images/robonomics-open-hardware-origins/cover.png
description: "随着我们启动“网络黑客硬件”项目，是时候回顾自2020年以来的硬件之旅了。本文将探讨Robonomics的开源硬件运动。"
abstract: "随着我们启动“网络黑客硬件”项目，是时候回顾自2020年以来的硬件之旅了。本文将探讨Robonomics的开源硬件运动。"
tags: ['路线图', '智能家居']
---

Robonomics一直在某种程度上是一个“硬件”项目。对我们来说，区块链是设备可以成为真正经济主体并利用金融资产产生现实变化的技术。从2016年由智能合约发起的第一次无人机飞行开始，我们一直没有停止思考真实硬件——能感知真实世界并有能力影响它的硬件：传感器和机器人。同时，我们始终致力于开源软件运动，试图使硬件项目也开放。现在，我们开发的所有设备的设计图都是以开放许可证发布的。

自2020年以来已经过去了很长时间，现在是回顾我们开发了多少有趣硬件的绝佳时机。在本文中，我们将回顾Robonomics中开放硬件运动的历史以及过去、现在和未来最有趣的发展。

## 传感器网络 - 空气质量

市民传感器网络项目始于2020年4月，当时我们开发了一个特殊的DApp，用于查看所有传感器在世界地图上向Robonomics网络提供数据。我们很快意识到，为了确保最佳用户体验，需要一个即插即用的解决方案，这样人们就可以购买传感器，连接它，并立即成为社区成员，而无需深入了解编程和电路设计。2021年8月，我们开始研发空气质量传感器，仅几个月后，我们获得了第一个原型，其中包括一个SDS011 PM2.5/PM10激光颗粒传感器和一个流行的DHT22（AM2302）温湿度传感器。

<rb-image zoom src="./images/robonomics-open-hardware-origins/air-quality-station.jpg" alt="传感器网络空气质量硬件" />

在过去的三年里，该设备经历了广泛的修改，最终演变为最新版本："Altruist"公民监测站。这款智能传感器收集环境数据，包括噪音水平、灰尘颗粒和温度，并将其存储在去中心化的[传感器地图](https://sensors.social/)上。该站可以通过具有I2C接口的传感器进行扩展：BMP180 — 温度和湿度，BME/P280 — 温度、湿度、大气压力，HTU21D — 温度和湿度，CCS811 VOC传感器 — 挥发性有机化合物，CO2当量和1-Wire接口传感器：DS18B20 — 温度。

<rb-image zoom src="./images/robonomics-open-hardware-origins/altruist-hq.jpg" alt="Altruist Air Station" />

我们在[Robonomics Academia](https://robonomics.academy/en/learn/sensors-connectivity-course/overview/)网站和[Wiki](https://wiki.robonomics.network/docs/sds-sensor-connect/)上有许多关于传感器网络的教育材料。这段[视频](https://www.youtube.com/watch?v=OdTd1sacCso)展示了如何使用我们的模块制作自己的个人监测站，并连接到公民监测传感器网络。

## 网络经济 - 代币化咖啡机

除了全球传感器网络，我们还考虑了将Robonomics用于家用设备的场景。在这方面的第一个项目之一是一个区块链连接的咖啡机，于2021年10月推出。是的，这不是传统意义上的开发，而是一种黑客行为。我们使用串行模型的咖啡机和我们的工程技能使这些机器兼容Web3。

<rb-image zoom src="./images/robonomics-open-hardware-origins/robonomics-coffee-maker.jpg" alt="robonomics-coffee-maker" />

然而，这硬件项目在当时集成了所有Robonomics创新：

- 在单板计算机上轻量级的Robonomics基础节点
- 以咖啡代币的形式发行的真实世界资产（RWA），当收到新一批咖啡并在办公室的团队成员之间均匀分配时，这些代币将在Statemine平行链上发行
- 使用责任调色盘的实际应用，简化了供需代理之间的互动 — 通过这个功能，咖啡机器搜索最有利可图的咖啡供应商

您可以在[这里](https://robonomics.network/cases/blockchain-coffee-machine/)了解更多关于这个迷人项目的信息，并在Sergey Lonshakov在Medium上的博客[Coworking for crypto-anarchists](https://blog.aira.life/coworking-for-crypto-anarchists-p1-5ebecb252f2d)中阅读更多。

## 智能家居设备

2022年，我们开始开发基于Web3技术的安全和私密智能家居解决方案。我们专注于无线通信，创建了一系列与去中心化Robonomics云兼容的远程控制设备。我们的旅程始于Espressif Systems的热门ESP8266 WiFi芯片。然后我们进步到更多功能的ESP32-C3，具有开放的RISC-V架构和蓝牙5支持。2024年，我们采用了Espressif最先进的芯片 — ESP32-C6 — 增加了Thread/Zigbee协议支持。现在，我们整个Robonomics智能家居设备系列使用ESP32-C6芯片。这些设备都与开源智能家居服务器Home Assistant兼容。用户可以通过我们的[Web Flasher](https://webflasher.robonomics.network/)轻松更新固件。我们已在[我们的Github存储库](https://github.com/airalab/hardware)中发布了模块的源文件。

### 开关

传统上，有线建筑自动化系统是在初始建设期间与其他电气网络一起设计的。如果您的住所没有按照这种方式设计，添加智能设备通常需要昂贵的翻新。我们的开关提供了一种解决方案：在没有翻新的情况下实现智能控制。只需将开关安装在标准插座盒中，它就可以访问Home Assistant服务器，将智能家居功能带入传统有线空间。

<rb-image zoom src="./images/robonomics-open-hardware-origins/2-gang-switch.jpg" alt="" />

### 红外遥控器

红外收发器长期以来一直主导着远程控制家用电器的市场。几乎每个家庭都包含这些设备，包括媒体播放器、空调等。为了简化将这些设备集成到智能家居系统中，我们开发了一个可配置的网关。该网关允许您通过MQTT协议轻松将您的红外控制家电连接到家庭服务器，所有这些都通过一个简单的配置过程完成。

<rb-image zoom src="./images/robonomics-open-hardware-origins/ir-remote-control.jpg" alt="红外遥控器" />

### 能源监控

节能无疑是智能家居最重要的功能之一。虽然能够在不离开沙发的情况下控制任何设备很棒，但更令人满意的是由于能源消耗变化的历史数据，电费比平时低15-20%。这种动力推动了我们第一个可安装在DIN导轨上的设备的开发——这是自动化的行业标准。与我们所有的智能家居设备一样，能源监控器通过MQTT协议无线连接到Home Assistant服务器。查看[演示视频](https://www.youtube.com/watch?v=xtXIsORJGP0)，展示监控器的开箱、设置和初始使用。

<rb-image zoom src="./images/robonomics-open-hardware-origins/energy-monitor.jpg" alt="Energy Monitor" />

## DIY和工业机器人

2021年初，Robonomics启动了Robossembler项目，旨在改变工业机器人的制造方式。我们希望朝着能够自我组装的机器人发展。在保持这个梦想的同时，我们在2021年设定了一个更实际的目标。我们决定创建一个任何人都可以构建和使用的开源机械臂。这个机械臂将能够自动组装物品，甚至可能能够复制自己。传统的工业机器人设计不包括自动组装的可能性，因此我们不得不从电机开始，重新审视所有结构组件。我们专注于改进机器人的电机、齿轮箱和整体结构。这个过程充满挑战且耗时。然而，我们现在开始看到我们努力的积极成果。我们的辛勤工作开始见效，项目进展顺利。

### 伺服

大多数开源机器人操作器最初使用步进电机，这并不理想。现代专有机器人现在使用带有集成控制器的伺服驱动器以获得更好的反馈。我们的团队开发了一款定制的伺服驱动控制器，适用于各种电机项目。

<rb-image zoom src="./images/robonomics-open-hardware-origins/robossembler-servo-reducer-exploding-view-01.jpg" alt="Robossembler Servo Exploding View" />

<rb-image zoom src="./images/robonomics-open-hardware-origins/servo.jpg" alt="Robossembler Servo" />

我们设计了用户友好的伺服驱动器，适合DIY爱好者使用。您无需高科技车间来制造定子。我们使用普通的DIN螺丝代替昂贵的电工钢作为磁芯，您可以使用3D打印机制造转子和定子的主要部件。这使得爱好者更容易在家中建造项目。源代码可在我们的存储库中找到 [gitlab](https://gitlab.com/robossembler/servo)。

### 绕线机

在电机开发过程中，我们最初手工绕制了几个定子，这是一项极其耗时的过程。没有在犹豫了很久之后，我们决定创建一台专门用于自动定子线圈绕制的机器。结果呢？一个成本非常具有竞争力的解决方案，约为150美元。目前，这是世界上第一台开源绕线机。我们设计时考虑了易获取性：大多数零件都可以通过3D打印制造。您可以观看整个过程——从组装到机器首次连续工作8小时绕制定子线圈——在这个[视频](https://youtu.be/5glGYkbpT6w?si=H6iFg7i56K8elXjw)中。源代码可在我们的[gitlab](https://gitlab.com/robossembler/cnc/motor-wire-winder)存储库中找到。

<rb-image zoom src="./images/robonomics-open-hardware-origins/winder.jpg" alt="电机绕线机" />

现在我们已经解决了最基本的任务——开发电机和生产设备，我们可以继续前进了！2025年，我们计划测试Robossembler Arm，这是一个完全开源的6轴机器人操作器。我们已经开发了一个独特的齿轮箱，齿比为1:43，这将为机器人提供必要的力量，即使使用我们的DIY电机也能胜任！

<rb-image zoom src="./images/robonomics-open-hardware-origins/robossembler-arm.jpg" alt="Robossembler Arm" />

## 接下来是什么？

我们不会就此停止- 我们对2025年有很大的计划！我们将制造更多设备。现在，您可以查看我们的新硬件系列，适用于[Cyberpunks](https://robonomics.network/devices/)。这个新系列将包括几种设备，包括我们已经讨论过的Altruist站。以下是我们正在开发的其他内容：

- RISC-V智能家居服务器。这是最开源的智能家居服务器，由RISC-V驱动，内部使用Web3云取代Google服务器。智能WI-FI MQTT设备搭载开源固件Tasmota，完全兼容Home Assistant。
- Hikikomori Tamagotchi。这是一个智能可穿戴站，可检查家庭或衣物传感器的状态。
- 智能保险柜。这是一个根据用户定义条件解锁的保险柜。查看保险柜开启和关闭的日志。根据需要对保险柜进行编程，例如在长时间不活动后授予受信任账户访问权限。