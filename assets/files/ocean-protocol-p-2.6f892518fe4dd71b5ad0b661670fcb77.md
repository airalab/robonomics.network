---
title: Robonomics Network x Ocean Protocol p. 2&#58; Monetizing Data from Robots and IoT Devices
date: 2021-07-01
published: true
locale: 'en'
tags: ['Collaborations']
cover_image: ./images/ocean-protocol-p-2/Robonomics_Ocean_p_2.jpg
description: "First results of collaboration between Robonomics Network and OCEAN Protocol"
abstract: "First results of collaboration between Robonomics Network and OCEAN Protocol"
---
import Card from '~/components/TextCard.vue'

## Introduction

This article [expands the integration](/blog/article-ocean-p1/) between Robonomics Network and Ocean Protocol. There will be described specifically how to connect robotic devices to the protocol, as well as possible use-cases where such integration will add value to the operation of the autonomous system.

For those who are not familiar with Ocean Protocol: the idea is to transform any data into a full-fledged asset by tokenization, with the ability of buying / selling and transferring ownership. In short, when tokenizing data, you deploy and mint an ERC20 token (datatokens), the ownership of which allows you to have access to the data assigned with it (1 datatoken = access the dataset). The protocol allows you to flexibly manage access, for example, organize temporary access to data or give access to their analytics without violating privacy. Thus, it becomes possible to monetize tokenized data, create markets for them and use the full power of decentralized finance tools.

The Robonomics team is well aware of the value of monetization through tokenization, but even better, we understand the value of automation. We have already learned how to automatically monetize the useful activities of robots and IoT devices, so why not automate the monetization of the results (logs and data) of this activity? With Ocean Protocol, almost any robotic device that generates valuable data can be turned into a simple source of income for its owner. Or the device can become a consumer of useful data to finish its task.

## Aspects of integration for ROS-devices

In order for Robonomics to work with many different types of devices, we use the Robot Operating System, a middleware suite that allows us to conveniently deploy software for robotic devices. Thanks to ROS, it is quite easy to connect a new type of device to the network. The active ROS community has developed hundreds of ready-to-use packages for various robots and IoT devices over the years.

The three main abstractions in the ROS environment are nodes, topics, and messages. A node is a process / program that performs a certain task and communicates with other nodes through topics. A node subscribes to a topic, waiting for messages, or publishes its own messages to them. In this implementation, the different-type components of the robotic system are able to interact with each other at the same level.

The figure below depicts a typical process for accepting and completing a task by a robotic device (promisor) in Robonomics v1 running on the Ethereum network. The AIRA сlient block is a deployed image of the required software for the device, including ROS. The figure shows (in blue frames) that the device communicates with the decentralized network through the AIRA client by receiving and sending messages in the corresponding ROS topics. The mission of the device ends with the final sending of the resulting message to the IPFS network, which contains a link to data potentially acceptable for monetization.

!["The process of Robonomics v2"](./images/ocean-protocol-p-2/uml-robonomics-ver1.png)

In Robonomics v2, which is being developed as a [parachain](https://parachain.robonomics.network/) of the Polkadot ecosystem, the process is slightly different. Currently, the `launch()` and `datalog()`&nbsp;[functions](https://wiki.robonomics.network/docs/en/rio-overview/) are available for device control; the first function allows you to perform transactions to turn the device on / off, and the second one sends datastring to the blockchain. But logs and device data are still collected using ROS topics. They can then be passed either directly to `datalog()`, or sent to IPFS first.

Therefore, the first task in integrating Ocean Protocol with Robonomics Network is to bring the protocol API to the ROS environment. Further, such a package for ROS can be integrated into the AIRA client and automatically deploy the creation of datatokens.

## Example of Ocean integration with ROS

This section provides a description of the ocean_ros repository, created by Robonomics engineers, which is a ROS package that implements the integration of Ocean Protocol API and ROS. Ocean Protocol offers several API options for working with it, in this case the [ocean.py](https://github.com/oceanprotocol/ocean.py) Python library is used, since ROS has the Python client library [rospy](http://wiki.ros.org/rospy). The main purpose of the package is to create three ROS nodes, through which a robotic device can deploy and mint datatokens, create a pool for placement on the market, or buy datatokens for the use. Let's go through the installation and launch of the package.

This example is also available as a screencast on YouTube:

https://youtu.be/Ssit8-u6dZY

<Card orientation="vertical" alignContent="left">

### Requirements & Installation

The package requires:

* Ubuntu
* Python 3.8.5 or later
* ROS, Melodic ver. (installation instructions [here](http://wiki.ros.org/melodic/Installation/Ubuntu))

Installing the package:

<rb-code>

```sh
git clone https://github.com/LoSk-p/ocean_ros
cd ..
catkin_make
source devel/setup.bash
```

</rb-code>

</Card>

<Card orientation="vertical" alignContent="left">

### Setting Ethereum network & node

In the example, the Infura provider is used to set up the connection. Infura allows you to remotely use the Ethereum infrastructure without the need to launch a full node, which is very convenient for a compact robotic device with limited computing power.

Note that for the example, a connection to Rinkeby, the Ethereum testnet, is being configured. If you need to switch to the mainnet or another, refer to the Ocean [documentation](https://docs.oceanprotocol.com/concepts/networks/).

The steps to set up are as follows:

* Go to https://infura.io and sign up.
* At the Infura site, create a new project.
* Within the project settings page, note your Infura project ID value. This will be used in the next step.
* Create `config.ini` file in the config directory (example of configuration you can find in `config_template.ini` file).
* Write your Infura project ID for the network in the config file.

</Card>

<Card orientation="vertical" alignContent="left">

### Setting Ethereum account and getting Rinkeby ETH tokens

* Install Metamask wallet to your browser and generate an Ethereum account. Instructions are [here](https://docs.oceanprotocol.com/tutorials/metamask-setup/).
* Get Rinkeby ETH tokens from a [faucet](https://faucet.rinkeby.io/).
* [Export](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key) the private key from Metamask and create a file with your private key:

<rb-code>

```sh
echo <private_key> > private_ocean
```
</rb-code>


</Card>

<Card orientation="vertical" alignContent="left">

### Installing Python libraries

Install Python module venv for creating virtual environments:

<rb-code>

```sh
sudo apt-get install python3.8-venv
```
</rb-code>

Create Python virtual environment and install necessary libraries:

<rb-code>

```sh
python3.8 -m venv venv
source venv/bin/activate 
pip install ocean-lib rospkg catkin_pkg
```
</rb-code>

</Card>

<Card orientation="vertical" alignContent="left">

### Getting Rinkeby test OCEAN tokens

Get Rinkeby OCEAN via this [faucet](https://faucet.rinkeby.oceanprotocol.com/).

</Card>

<Card orientation="vertical" alignContent="left">

### Running ocean_ros

In the terminal with Python virtual environment run ROS launch file:

<rb-code>

```sh
roslaunch ocean_ros datatokens.launch
```

</rb-code>

Now you can access ROS topics to work with datatokens.

</Card>

<Card orientation="vertical" alignContent="left">

### Creating datatoken

To create a datatoken, you need to publish a message to the topic `/ocean/create_datatoken`. The message should contain the path to the private key file from your Metamask account, IPFS URL to data from device, OCEAN and datatoken liquidity. Message example:

<rb-code>

```sh
rostopic pub /ocean/create_datatoken ocean_ros/Metadata "private_key_path: '/home/user/private_ocean'                     
data_created: '2021-12-28T10:55:11Z'
type: 'dataset' 
name: 'test_ros'
author: 'author'             
license: 'CC0: Public Domain'    
files_content_type: ['text/text']
files_url: ['https://gateway.ipfs.io/ipfs/QmWRjFcQi4Xcisqi8FP3AbGS3PB3gNHgtnfzbcpodKKCBP']                 
tokens_nomber: 100.0
ocean_amount: 10.0"
```

</rb-code>

The corresponding ROS node will create a datatoken and it will become available for sale. You can see information about datatoken in `/ocean/token_response` topic:

<rb-code>

```sh
rostopic echo /ocean/token_response
```

</rb-code>

</Card>

<Card orientation="vertical" alignContent="left">

### Buying datatoken

To buy a datatoken, you need to publish a message to the topic `/ocean/get_datatoken`. The message should contain the path to the private key file from your Metamask account and information about the datatoken you want to buy (you can find it on the [market](https://market.oceanprotocol.com/) or from the `/ocean/token_response` topic). Message example (don't forget to change `destination` in the message):


<rb-code>

```sh
rostopic pub /ocean/get_datatoken ocean_ros/BuyDatatoken "{private_key_path: '/home/user/private_ocean', destination: '/home/user/', token_address: '0x9fb21F68257F1d718d764B68b1430B6460796e42', did: 'did:op:9fb21F68257F1d718d764B68b1430B6460796e42', pool_address: '0xcF295B85ef5ADd0E513B789477C6d14eA6Bc718a'}"
```

</rb-code>

You can see path to the downloaded datafile in `/ocean/buying_response` topic:

<rb-code>

```sh
rostopic echo /ocean/buying_response
```

</rb-code>

</Card>

## Use-cases

This section will describe potential examples of the application of automatic tokenization of data received by robotic devices.

### Environmental data

Perhaps the most interesting illustration of application would be the tokenization of environmental data. The value of such data is only growing, taking into account the increasing interest of the population, companies and regulators in the problems of environmental management. The main problems here are the scale of ecology (air, water, soil multiplied by the enormous and often inaccessible territories of the Earth) and the issue of trust in the collected data. A mobile automatic device (air or water drone) or a network of stationary sensors perfectly solve the first problem, and blockchain and decentralized technologies mitigate the second. With the ability to tokenize this data using the Ocean Protocol, completely new markets are opening up where concepts such as citizen science and carbon credits fit perfectly. 

Robonomics has been working with devices for ecology for a long time. For example, the package [sensors-connectivity](https://github.com/airalab/sensors-connectivity) was developed, which allows you to turn ROS-compatible sensors into telemetry agents. Robonomics engineers are developing various models of [water drones](https://blog.aira.life/water-drone-2-0-first-stage-of-development-db8ad6c81d3c) to collect chemical indicators in rivers and lakes, and are also exploring the possibility of using [UAVs](http://www.ijeetc.com/uploadfile/2019/1009/20191009035041545.pdf) to assess air quality.

<rb-code>

```
1556199372.384576 <=>\x86##5E1567057C105409#DOV01SW#0#WT:6.53#PH:8.89#DO:90.4#COND:348.9#
```

</rb-code>

Example of collected water data: temperature, PH value, dissolved oxygen, conductivity
In each case, the devices generate sensor and GPS logs, which are then [published](https://gateway.ipfs.io/ipfs/QmWRjFcQi4Xcisqi8FP3AbGS3PB3gNHgtnfzbcpodKKCBP) to IPFS and provided by the device as a result. This is where we can add value to this data by creating a datatoken by Ocean Protocol. Robonomics Network will ensure that the data was collected by a specific robot for a specific task, and Ocean Protocol will ensure that only those who own the datatoken can access it.

### Marketing data

The trend of robotics in everyday life is growing and it is easy enough to find examples of robot promoters or a robot for customer service. The experience of interaction of such robots with people can be used for marketing research, similar to sites that collect data about users. Moreover, the value of this data will be even higher, because the interaction with the person occurs at a closer level.

We can imagine a robotic device that, in the process of performing its specific task (for example, a robotic waiter), simultaneously collects visual, sound or other information about the client. In this case, machine learning tools can be used for creating a completely new type of data about customer reaction to a particular type of service or product. This is a great scope for using datatokens, both for raw data from robots and for those analyzed by algorithms. Moreover, Ocean Protocol has a Compute-to-data function that allows us to provide private data for analytics without violating confidentiality.

### Technical logs

Improving the algorithms of robots also requires the analysis of their operating data. This primarily concerns machine learning, which requires datasets, but we can also talk about sharing three-dimensional maps (for example, for simultaneous localization and mapping) between devices operating in the same or similar environment. Monetization of such technical logs will be more field-specific, but the value will lie in their uniqueness and rarity.

Examples include the tokenization of data generated by robotic vacuum cleaners for the improvement of their performance (bypassing obstacles, better recognition of the environment in apartments). Another example is service data of a production line, whose processing will optimize operating or production costs.

## Conclusion

The examples show that the combination of Robonomics Network and  Ocean Protocol creates a fundamentally new type of assets, previously unavailable due to poor automation of technical processes and the impossibility of secure control and exchange of their results. Moreover, these are only obvious ideas, and in the future, with the proliferation of IoT and robots, completely new markets for cyber-physical data may appear.