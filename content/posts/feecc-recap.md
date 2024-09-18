---
title: "FEECC: A Decentralized Manufacturing Data Accumulation System"
date: 2024-09-12
published: true
locale: 'en'
tags: ['Use Cases', 'Web3']
cover_image: ./images/feecc-recap/0-cover.png
description: 'For almost 4 years now there is a long-lasting experiment held to apply Robonomics technologies to a real-life production business. Inside is a quick recap of that.'
abstract: "What if a seller can provide irrefutable proof of bona fide of your.. cappuccino? And what if it is not a cup of coffee, but rather a big supply chain for a car manufacturer. Or, even more responsible, a medical equipment company? Pavel Tarasov [PaTara]"
---

So, coffee. Say, neither was it spilled and substituted with water, nor was it a mix of old shots or something. 
I know, the overwhelming majority of companies value their reputation and day to day prove their integrity and coffee 
is the product which can’t really impact that much. 

But with the medical equipment the consequences may not just be a spoiled taste. Anyway, no clue we had about medicine, 
but the idea behind [FEECC](https://multi-agent.io/projects/feecc/) started with a coffee experiment.

<rb-image zoom src="./images/feecc-recap/1-coffee.png" alt="Coffee Schema" />

So basically this was just a recording software which was triggered via a big red button and a QR-code label printer, 
but beneath the hood there was a whole set of web3 magic.
First, the video wasn’t stored in a regular file system. Instead, IPFS was used. The key benefit behind this is the 
thing called CID - Content Identifier. A fixed-length key to find your file from all over the world (theoretically).
Second and most important, the CID was put in a Datalog - a Robonomics Parachain pallet feature which allows you to 
store any string up to 512 bytes in a blockchain forever! This means that by putting the content-related pointer into 
a crypto-backed data storage you ensure the transparency and trust into that cup of coffee. You may not need it every 
time you take your favorite lavanda raf, but that one day it tastes bitter, you and the seller may be totally sure who’s 
the culprit here. 


## Not only a customer service, but an internal MES module.

MES stands for Manufacturing Execution System. It is responsible for manufacturing process optimization and analysis 
and there is a specific spot where FEECC may come in handy. See, there is a medical equipment company, EndoStars, 
which uses manually-assembled components and those are subject to risk of defects. Prior to FEECC installation you 
could never tell if the defect is a supplier fault or the assembler’s mistake. More than that, there were several 
processes yet to be optimized like providing assembly schemes in a digital form rather than searching through tons of 
papers. So after a while of development and integration processes the following scheme is now in use:

<rb-image zoom src="./images/feecc-recap/2-assembly.png" alt="Assembly" />

The assemblers get their parts and trigger the recording process with a web application button (this application also
contains assembly instructions). Then, they get a unique barcode to stick to the part and assemble it under video 
surveillance. When the assembly process is finished, same as with coffee, they get the data stored in IPFS to be 
distributed and the CID put into the Robonomics chain to be saved forever. Optionally they may get a QR-code 
(database-independent) for a customer but the majority of use cases is for an inner quality control department. 


Before departing the goods to the customer they perform a quality check. This process is also facilitated with some 
FEECC web modules and the protocol is saved in the chain as well, but the key point here is the link of the product 
with its assembly data (videos as for now). This link is irreplaceable since the data is in the blockchain and the 
address is also linked to the content itself. With that the quality control department may be sure of the innocence of 
their colleagues and the assemblers may protect themselves against blame.

<rb-image zoom src="./images/feecc-recap/3-qcd.png" alt="QCD" />

## Architecture.
Below is a schemed recap of the architecture of the software used in this case. Some of the technical details are 
omitted but the concept itself is clear: FEECC lets you save valuable data in an irreplaceable form to avoid fraud and 
ensure safe supply chains. This may come with other manufacturing modules with the same core idea inside: secure and 
transparent data storage and use.

<rb-image zoom src="./images/feecc-recap/4-architecture.png" alt="Architecture" />

## What are the numbers?

The coffee experiment started 4 years ago and the medical manufacture integration occurred in fall 2021. And we have 
some numbers to share:

<rb-image zoom src="./images/feecc-recap/5-numbers.png" alt="Numbers" />

With all that we can definitely say that FEECC is a real-life-proved web3 application to provide secure data 
accumulation and storage for productions.
