---
title: Hacked Johnny's Lab
date: 2024-06-25
published: true
locale: 'en'
tags: ['Events', 'Online school', 'Web3', ]
cover_image: ./images/hacked-johnnys-lab/cover.png
description: 'There was a recent event “Hack Johnny’s Lab” by Robonomics and I believe I did hack it in a way! Apart from the very first try which I lost due to rules misunderstanding, I won every round I took part in and here is a short “howto” story.'
abstract: "Hey there! PaTara on the line. There was a recent event “Hack Johnny’s Lab” by Robonomics and I believe I did hack it in a way! Apart from the very first try which I lost due to rules misunderstanding, I won every round I took part in and here is a short “howto” story. Pavel Tarasov [PaTara]"
---

So, a quick and necessary rules recap: 12 words in a mixed order, a 5-minute video of a TurtleBot 4 wandering around a lab 
and spoiling the mnemonic phrase word order, 5-20 participants willing to win and a free Sunday to think up a strategy.

<rb-image zoom src="./images/hacked-johnnys-lab/0.png" alt="Game Interface" />

I’m sort of familiar with programming and I have a decent laptop and almost no skill in image recognition. More than that, 
I decided to play it fairly, which means no video downloading, no playback speed abuse, no playbar navigation. 
So the picked strategy was a good old bruteforce. Sounds more hacking that anything.
What do we have here: a set of 12 words in a mixed order. This gives us 12! (factorial) options of phrases 
(479’001’600 to be precise). Quite an amount to process!


## Strategy 1: dumb and straightforward.

Well, what else do I need, just go and sort through! But here is the first trick: 12! mnemonic phrases just didn’t fit in 
my 64 GB RAM! I got a SIGTERM error in the IDE console. 
So I created an [iterator](https://docs.python.org/3/library/itertools.html#itertools.permutations) and started the process. 
It took me some time, not sure exactly, how much, but within 30 seconds, to calculate the number of combinations. 
Just an evaluative run. But the thing is: my laptop didn’t even spin its fans at max! A single core was loaded. 

I googled a Python [multiprocessing](https://docs.python.org/3/library/multiprocessing.html) package to load all 
the logical cores of my CPU (20 of them) to parallel the computations. Otherwise, it would have been an eternal journey. 
But with that I had to split my iterator in 12 parts. The itertools multiprocessing packages do work together, 
but when a whole set of options is in the RAM. That was not my case, so the following was performed:

<rb-image zoom src="./images/hacked-johnnys-lab/1.png" alt="Parallelizing"/>


From that moment and ever I would use this strategy to make my CPU load monitor look like this:

<rb-image zoom src="./images/hacked-johnnys-lab/1_1.png" alt="CPU Load"/>


I believe this shortened the execution time down to around 5 seconds. I got the best way to iterate through 
the combinations but there were just too many of them! The first step involved performing roughly 480 millions 
extrinsics in the network. The node would simply ban me for DDOS and even without that It would take forever!

<rb-image zoom src="./images/hacked-johnnys-lab/2.png" alt="1st Attempt"/>


Just for a debugging reason I started the script (for node communication I used a 
[py-substrate-interface](https://pypi.org/project/substrate-interface/1.0.3/) package) and noticed that prior to call 
performing I got errors like _invalid mnemonic phrase_. A clue! If I could validate the combination on prem, 
I would save tons of time! GitHub parsing led me to 
[this](https://github.com/polkascan/py-substrate-interface/blob/master/substrateinterface/keypair.py#L170) 
line of code and I added a combination validation to my script. This has reduced the number of potential extrinsics down
to roughly 39’000’000 12 times faster!

<rb-image zoom src="./images/hacked-johnnys-lab/3.png" alt="2nd Attempt"/>


But still, 39 million calls would ban me forever, so I needed more digging. How could I significantly cut the 
number of calculations? Well, by a little bit betraying my initial strategy. See, I was going to avoid video watching, 
“a hacker, who won’t even need a video”, but the math made me change my mind. Change it to a 132 times faster strategy. 
Below is the explanation:

<rb-image zoom src="./images/hacked-johnnys-lab/4.png" alt="2 Words Insertion"/>


With that I only needed to know two correct positions of words in a phrase (one would take too long, experiment-validated). 
I would iterate through a 10! combinations, insert two words in correct positions and validate the phrase, 
cutting down the options to approximately 300’000 quite a decrease! More that, 10! combinations set fitted in my RAM, excellent!

<rb-image zoom src="./images/hacked-johnnys-lab/5.png" alt="3rd Attempt"/>


Also, rather than trying to transfer all the tokens each 300k times and calling a public node for that I decided to set 
up my own local Robonomics node synchronized with the chain and ask it for a resulting account address balance! 
Query is way “easier” than an extrinsic. After a whole night of synchronizing (I’ve set a cache limit so that my 
laptop won’t blow up with chain data in its ROM) I gave it a try and.. this was a disaster. Network transactions 
(even within a localhost) took too much time. I didn’t even wait till the end, it was obviously way slower than 
watching a whole video. If only I could know the exact address of the account! But for that I need a mnemonic phrase… **Or do I really?**

Look. The rules say that the desired account has **exactly** 42 XRT. Why wouldn’t I get all the active addresses in the network,
filter them by having exactly 42 XRT and compare each generated address with a list of possible targets 
(around 20, decreasing to 1 in the end). Easy to say and to do. 

Now, after modifying my script once more I finally made it to only one query and one transaction which would for sure 
give me the desired prize.

<rb-image zoom src="./images/hacked-johnnys-lab/6.png" alt="4th Attempt"/>


Now, after I watched 25 seconds of the video (meanwhile filling in the words of a mnemonic), 
I would only need 30 seconds at max to steal the reward. Hacked it.

<rb-image zoom src="./images/hacked-johnnys-lab/7.png" alt="Discord Bot Notification"/>



