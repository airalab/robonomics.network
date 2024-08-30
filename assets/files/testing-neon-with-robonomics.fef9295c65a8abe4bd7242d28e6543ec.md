---
title: Testing Neon EVM with Robonomics Smart Contracts
date: 2022-10-03
published: true
locale: 'en'
tags: ['Robonomics in Ethereum', 'Collaborations', 'Smart Contracts', 'Neon']
cover_image: ./images/testing-neon-with-robonomics/blog_cover_neon_multi-agent.jpg
description: "The purpose of these tests were to validate the readiness of the Neon platform to move to the production stage using Robonomics smart contracts, which allow cyber-physical systems (robots) to make technical-economic transactions."
abstract: ""
---

## TL;DR

The purpose of these tests were to validate the readiness of the [Neon](https://neon-labs.org/) platform to move to the production stage using Robonomics smart contracts, which allow cyber-physical systems (robots) to make technical-economic transactions.

In the Robonomics network, interaction is established between two parties: Promisee - the one who orders the service, sends a description of technical task and transfers funds for its execution; Promisor - one who performs a service. A typical scenario was tested, whereby a liability contract is concluded between a Promisee and a Promisor - this was followed by validation of the resulting work by a third party, and a commission payment to the node that accompanied the contract between the parties.

For this example, a simulation of a robotic arm was used, which was asked to perform a sequence of actions. The tests were successful.

## Scope and Goals of Testing

Engineers of [Multi-Agent Systems](https://multi-agent.io/) have been working with [Robonomics Network](https://robonomics.network/) for several years. The first implementation of the Robonomics Network was created for the Ethereum network. It is a set of smart contracts for machine-to-machine communication.

The core of the Robonomics Network is the [Liability](https://github.com/airalab/robonomics_contracts/blob/master/contracts/robonomics/Liability.sol) contract, a smart contract that reproduces the typical relationship between the customer of a service (Promisee) and the service provider (Promisor), and includes the technical and economic parameters of the transaction between them. The parties can be either an autonomous agent and a person (human-to-machine interaction), or purely two autonomous agents (machine-to-machine interaction). The Promisee and Promisor broadcast messages with the parameters of their technical-economic transaction, and then the conclusion of the transaction is provided by a special node - the Provider - which looks for matches of these parameters. Providers are controlled by [Lighthouse](https://github.com/airalab/robonomics_contracts/blob/master/contracts/robonomics/Lighthouse.sol), which is a special smart contract that executes a transaction when the provider establishes a market match between the parties.

There are three scenarios in which the fulfillment of an obligation can take place:

1. A simple commitment (with no verification of the final result, and no commission paid to Provider nodes)
2. Obligation with a commission paid to the Provider
3. Commitment with a commission to the Provider and validation of the results with the help of a third party - observing network.

The purpose of this test is to test the most complex, third Robonomics scenario on the Neon EVM platform.

## Testing Scenarios Description

As we develop the industrial zones and the infrastructure of modern cities, the emergence of fully automated enterprises and services that are controlled by cyber-physical systems (CPS) and which provide their services as autonomous agents is highly likely. In this regard, we can also expect the formation of networks of autonomous CPS in order to increase the speed and quality of communication in the process of production and provision of services.

In order to take full advantage of the possibilities of smart contracts, a scenario of interaction between two autonomous economic agents was chosen. Consider the liability life cycle in the Robonomics network:

![Liability Life Cycle](./images/testing-neon-with-robonomics/step-by-step-3.jpg)

The figure above shows that the Robonomics network provider calls the Lighthouse contract, which in turn calls the [contract factory](https://github.com/airalab/robonomics_contracts/blob/master/contracts/robonomics/Factory.sol) to create the Liability contract. The Liability contract contains data about the transaction, such as the terms of reference, payment for the service, validator address and the deadline.

To learn more about the possible use cases for Robonomics, check out the Robonomics [R&D](https://wiki.robonomics.network/docs/en/r-and-d-based-on-robonomics-network/#launching-a-drone-under-the-control-of-a-decentralized-computer) page!

To replicate the entire Robonomics infrastructure on the Neon network, we will implement a robot launch scenario through a Liability contract similar to this [example](https://wiki.robonomics.network/docs/en/kuka/). If the script can be repeated, then all functions will work.

## Deliverables

The source code for the Robonomics contracts is available [here](https://github.com/airalab/robonomics_contracts).
The contracts use many features of the Ethereum VM which includes:

- ERC20 [XRT](https://github.com/airalab/robonomics_contracts/blob/master/contracts/robonomics/XRT.sol) Token
- [Factory](https://github.com/airalab/robonomics_contracts/blob/master/contracts/robonomics/Factory.sol)
- Own contract for [ENS](https://github.com/airalab/robonomics_contracts/blob/master/contracts/ens/ENS.sol)
- [Proxy](https://github.com/airalab/robonomics_contracts/blob/master/contracts/misc/SharedCode.sol) for contracts
- Various modifiers and roles in contracts

Addresses of contracts in the Neon devnet network https://devnet.neonevm.org

| Contract Name  | Address                                    |
|----------------|--------------------------------------------|
| Migrations     | 0x1DC538bE2C8572509a571B150f11aB55E52EF12E |
| ENS            | 0xa7AEa12F60D0278F01e14DBC7cc459d04d051406 |
| DutchAuction   | 0xF44F8803548D72Dbc3E28340EFD7b5328aa4F058 |
| Liability      | 0xA694196351dc1488e3884eCc6b650F0d8D55346a |
| Lighthouse     | 0x80FB5CC4c396E272b56700E6ffF5DBf4661013A8 |
| XRT            | 0x3322d7D99cF65Cab5A92073c928b5E9674af3c29 |
| PublicAmbix    | 0x85c03bE5ccFf11E79a0A776D183eF067590549d1 |
| Factory        | 0xCFa833bF0D46369D9024f95c9C8dFa1E4a07806C |
| PublicResolver | 0xAC9E9AA8A4cB524FE87f2b14489F1D6bE68dc46e |

[Source code](https://github.com/Multi-Agent-io/neon-kuka-demo) for the scenario

## Changes Made to Original Contracts

The contracts are written for Solidity 0.5.0. As such, no changes were required when deploying and using the contracts.

## Testing Workflow

In general, the test consists of sending corresponding messages from one agent to another.

Next, the Promisor finds a new liability contract in the network and begins to execute it. Upon completion of the work, a message is sent with the result, which is then recorded in the contract.

Step-by-step instructions for launching are in [README.md](https://github.com/Multi-Agent-io/neon-kuka-demo/blob/main/README.md)

## Testing Results in Detail

Screencast of the process

https://youtu.be/fYJVF7KrNnI

![Liability](./images/testing-neon-with-robonomics/liability.jpg)

When the simulation starts, an offer message is created, and a demand message comes from the Promisee, after which a Liability contract is created using the createLiability function of the Lighthouse contract. With the help of the XRT contract, tokens are transferred from the Promisee’s address to the address of the Liability contract.

After a new Liability contract has been discovered on the Neon devnet, the agent starts working. The result of the work (telemetry) is written to a file and sent to IPFS, the hash from the file is saved as a result.

After the work is completed, the Liability contract is finalized using the finalizeLiability() function of the Lighthouse contract and the tokens are transferred from the Liability address to the addresses of the Promisor and Validator.

The successful execution of the simulation showed that all contracts worked correctly and the Neon platform works.

## Neon Platform Drawbacks

### Truffle fails if it doesn't get a response from the network

During the process of deploying contracts, it turned out that the proxy does not always return a response on time, which is why Truffle ends with an error:

<rb-code>

```sh
TypeError: Cannot read properties of null (reading 'from')                                    
    at Web3InterfaceAdapter.(<anonymous>) (/usr/lib/node_modules/truffle/build/webpack:/packages
/interface-adapter/dist/adapter/web3/index.js:71:1)                                           
    at Generator.next (<anonymous>)                                                          
    at fulfilled (/usr/lib/node_modules/truffle/build/webpack:/packages/interface-adapter/dist
/adapter/web3/index.js:5:43)                                                                  
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
Truffle v5.5.23 (core: 5.5.23)
Node v16.14.0
```
</rb-code>

It was not possible to find a relationship between the test conditions and the occurrence of an error, but most likely Neon EVM cannot send a transaction receipt, and Truffle cannot process a Null response.

If we add timeout and retry here [index.ts#L75](https://github.com/trufflesuite/truffle/blob/develop/packages/interface-adapter/lib/adapter/web3/index.ts#L75), then the deployment should proceed without errors.

### No WS/WSS Endpoint

Neon EVM does not have a WS/WSS endpoint unlike Ethereum, which makes it impossible to subscribe to events from the network. Therefore, during testing, we monitored the events manually.

### No Event Names

Neon EVM returns rather poor descriptions of events after a transaction, for example:

<rb-code>

```sh
 events: {
    '0': {
      address: '0xCFa833bF0D46369D9024f95c9C8dFa1E4a07806C',
      transactionHash: '0x9894a984e6b3f6ce469c8837e11739f6e50d00216cf7c5bc3d32da106a58d50a',
      transactionLogIndex: '0x1',
      blockHash: '0x72040f317d3a469d30327d4e1def903790b70dbede46b4f0ea4f28f30a679a80',
      blockNumber: 156073183,
      transactionIndex: 0,
      logIndex: 1,
      id: 'log_e51e2f9f',
      returnValues: Result {},
      event: undefined,
      signature: null,
      raw: [Object]
    },
...
```
</rb-code>

Instead of 0, 1, etc. we expected to see named events.

## Conclusion

Using the Neon EVM platform, a scenario was successfully tested whereby a liability contract between a Promisee and a Promisor is concluded with subsequent validation of the result of the work done by a third party. Additionally, a Provider participated, who checked the coincidence of supply and demand between the parties, and received a commission for this work.

The demonstration used a simulation of a robotic arm that was hired to perform a sequence of actions. As a result of the work, the robot sent a file with telemetry received during the task.

Despite some peculiarities in the operation of the network, in the end, all participating contracts showed their operability in the Neon environment.



