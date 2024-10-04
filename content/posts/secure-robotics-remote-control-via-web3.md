---
title: "Secure Robotics Remote Control: Robonomics Solution"
date: 2024-04-19
published: true
locale: 'en'
cover_image: ./images/secure-robotics-remote-control-via-web3/remote_control_cover.png
description: "Remote connection and control of your own smart device is a very popular feature among users. However, such a trivial task still causes a lot of difficulties for inexperienced users - from overcoming NAT to security issues. In a new article, we will show how these difficulties can be overcome with the help of Robonomics."
related: ['Robonomics Helps Enable Rust for ROS 2', 'Automation: Home meets Industrial']
abstract: "Remote connection and control of your own smart device is a very popular feature among users. However, such a trivial task still causes a lot of difficulties for inexperienced users - from overcoming NAT to security issues. In a new article, we will show how these difficulties can be overcome with the help of Robonomics."
tags: ['ROS 2', 'Smart Home']
---

In the previous article, we talked about how we use the advantages of industrial solutions in the infrastructure of a robotized smart home. We showed how the ROS 2 framework and its middleware protocol provide automatic device discovery and intensive interaction (including in real-time) between them within a local network, which is very convenient. However, this approach is mainly suitable for the so-called Trusted Zone - that part of the computer network where the appearance of any third-party actors is unlikely. In this case, we trust all the programs running and do not need to use encryption in the same way it is not used within one computer when programs exchange data with each other.

But what if you need to ensure the operation of ROS 2 devices with some external service or provide remote access to them from the outside? At such moments, a security problem arises - having gained access to one ROS 2 node, an external service (and potentially a malicious person) essentially gets access to all other nodes - it can completely listen to all internal DDS traffic and access all available system services.

The classic trade-off between security and speed/convenience is resolved by dividing the sovereign smart home system into two parts - secure and insecure.

## ROS 2 Security

Designating a zone with special security requirements in the workspace of ROS 2 nodes is quite a non-trivial task. The standard ROS 2 Security package ([sros2](https://docs.ros.org/en/rolling/Concepts/Intermediate/About-Security.html)) is part of [ros-core](https://ros.org/reps/rep-2001.html#id32), on which all ROS 2 distributions are built, and according to the core developers, it is intended to solve this problem. It provides the ability to set up a relatively simple public key infrastructure (PKI) within a single local network. For each ROS 2 node, access policies to the data of other nodes are set, as well as a set of standard files for such scenarios - cryptographic keys and certificates. During program execution, nodes "see" only those data sources to which access is explicitly written in the configuration at the project launch stage. However, this approach has a major drawback - all traffic in the system is encrypted, which can affect performance under the network load created by DDS. It will be necessary to write out all access policies and generate keys for all nodes. This is very difficult to set up and maintain. And most importantly, we are losing the main advantage of ROS 2 Middleware - performance.

## Bridges

Another solution is to create so-called gateways, which transmit the necessary data while keeping everything else private. Typically, this is achieved using VPN or SSH tunnels. A separate node is created in the secure data exchange space, which has a public address for external connections. In this case, security management is carried out only at the level of this node (essentially a window to the outside world), without affecting all the others. This approach is used in the projects [Husarnet](https://github.com/husarnet/husarnet), [DDS Router](https://github.com/eProsima/DDS-Router) and [Zenoh Bridge](https://github.com/eclipse-zenoh/zenoh-plugin-ros2dds), but it also has its drawbacks. In this scenario, you need to establish a secure communication channel strictly linked to the counterparty's IP address or domain name. These can change, become blocked, or be vulnerable to attacks. At the time when SSH was created, this wasn't considered. Additionally, SSH primarily relies on the operating system's access control system, with all its inherent disadvantages.

<rb-image zoom src="./images/secure-robotics-remote-control-via-web3/remote_control_legacy_approach.png" alt="Classic Remote Control via public IP and SSH/VPN" />

*Here's how users typically connect to their robots remotely these days. However, this approach has some drawbacks. It requires a public IP or/and DNS name, which can be blocked in some countries. It also necessitates the storage of additional private keys in potentially unsafe locations (e.g., ~/.ssh).*

SSH, primarily used by system administrators and IT specialists, requires basic knowledge of the Bash command line and trust in the operating system, as encryption keys are stored directly in the file system or SSH agent. Managing access keys remains a fairly complex task for the average user to stay a safe way to protect their data.

## Web3 Solution

As we can see, the above methods are not without their drawbacks, so we will consider a possible solution to the problem using peer-to-peer network technologies, on which Robonomics is built. In this case, the decentralized Robonomics cloud can be viewed as a secure routing table, the addresses of the counterparties in which are the public keys of the nodes. You need a local Robonomics node and knowledge of what public key your counterparty has, so as not to depend on the DNS system (including domain name registrars and servers) and IP address blocking. The [libp2p](https://libp2p.io/) library, which Robonomics uses, can use different transport protocols for message delivery.

Furthermore, with the advancement of Web3 technologies, more efficient methods for managing critical information, including private keys, have emerged. One of them is a mnemonic phrase or seed - a set of 12 or 24 words, used to create accounts in decentralized networks. This method is convenient and safe, as the seed is written on an external medium (for example, on paper) once during initialization and is used only to recover the account. A master key is created from the mnemonic phrase, from which any key hierarchy for different tasks can be created (see **[Hierarchical deterministic keys](https://docs.substrate.io/reference/command-line-tools/subkey/#hierarchical-deterministic-keys)**). This simplifies key management and their recovery if they have been lost. If a malicious person gains access to one of your key pairs, they will not be able to get information about other keys created from the mnemonic phrase. The soft derived key feature allows you to confirm ownership of the root account without disclosing it. Because soft keys can be derived using the parent public key, they can be used to identify the parent key without exposing the parent seed.

## Remote control in Home Assistant

Let's examine the connection process in more detail. The decentralized [Robonomics application](https://robonomics.app/) (or just DApp) works directly in your browser, it does not require you to install any additional software or the need to store keys in the file system in an environment of a large number of programs, the security of which you cannot be sure. Access key management is performed through the Polkadot JS extension, as well as with the help of an external hardware key storage (for example, [Polkadot Vault](https://wiki.polkadot.network/docs/polkadot-vault)) for additional reliability. In addition to specialized software for interaction with Robonomics, DApp also includes a lightweight libp2p node, with which the connection to Home Assistant takes place.

<rb-image zoom src="./images/secure-robotics-remote-control-via-web3/robonomics_home_assistant_usecase.png" alt="Home Assistant Remote Control" />

The owner of a Robonomics Web Service subscription manages access rights to smart home infrastructure through what is known as a controller - an account that manages all sensitive information in encrypted form in a digital twin. Only users added to the subscription can decrypt this data. In addition to access keys, the Digital Twin also stores the DApp configuration and, the so-called, libp2p multi-address to which the DApp connects for a secure connection. Multi-address is one of those innovations that makes the libp2p approach so unique and flexible. This is a special format of address for nodes, which implies the presence of many IP addresses, transport and network identifiers, protocols and ports, through which you can contact a specific node. The full list of supported protocols is presented in the [specification](https://github.com/multiformats/multiaddr/blob/master/protocols.csv).

So, the user added to the subscription extracts a multi-address from the Robonomics digital twin and establishes a secure connection with a Peer ID known only to him. Success!

## Remote Control in ROS 2

Similarly, you can employ Robonomics' existing features to interact with robots. The Robossembler team, under the Robonomics Grant Program, developed a Proof of Concept project known as [Robonomics Bridge](https://gitlab.com/robossembler/robonomics_bridge). This bridge enables your ROS 2 nodes to connect with any external service, remote workstation, or another ROS 2 system.

<rb-image zoom src="./images/secure-robotics-remote-control-via-web3/robonomics_ros2_usecase.png" alt="ROS 2 Remote Control with Robonomics" />

*An illustration of what remote control of a home robot might look like in the case of ROS 2. This approach offers a number of significant advantages: there is no need for a public IP, access to the robot is available even through network firewalls (NAT), private cryptographic keys are not stored on disk and are reliably protected.*

The protocol used in ROS 2, DDS, naturally combines with libp2p due to its similar publisher-subscriber model for node interaction. With the help of the Robonomics bridge, ROS 2 nodes and their interfaces - topics, services, message types (for example, using the eProsima Integration Service) can be declaratively configured, through which interaction with the robot from outside is possible. This also allows for an additional level of security when connecting to a remote computer. The mechanism for obtaining the PeerID of the counterparty can be the same as in the case with Home Assistant - through a Digital Twin request from the Robonomics node, with the only difference being that instead of the Home Assistant Server there will be a ROS 2 robot, and instead of the libp2p-websocker-proxy there will be a Robonomics ROS 2 Wrapper connected to the robot.

## Potential opportunities in the future

However, these are not all the possibilities that a decentralized cloud on Web3 technologies can offer. In the example described above, these technologies are used for relatively simple transmission of message data streams between remote computers.

This can be called the basic transport level in the Robonomics network stack, which is the basis for the implementation of more complex higher-level protocols. Starting from SSH analogues, implying more interactive interaction of users with their cyber-physical systems, and ending with application protocols implying the interaction of a large number of users of autonomous robotic infrastructure.

For example, the decision to start production of a certain product can be linked to voting within an organization of potential consumers of this product, considering economic feasibility. Currently, the decision to start any production is made through investment mechanisms, where investors, having received information about potential demand, can acquire shares of individual companies that can satisfy this demand in the future. If consumers can participate more actively in the development and pricing of new products, then in the long term we can switch to such a mode of operation when production will automatically restructure to satisfy demand according to data provided by consumers into the network.