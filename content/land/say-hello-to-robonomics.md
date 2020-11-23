---
title: Say hello to Robonomics 🎉
published: true
description: "Meet Robonomics network – secure, сost-effective, and futuristic IoT platform for connecting robotics under Polkadot and Ethereum control"
---
import Abstract from '~/components/TextAbstract.vue'
import Grid from '~/components/TextGrid.vue'
import Card from '~/components/TextLinkCard.vue'
import CardIcon from '~/components/TextLinkIcon.vue'
import Button from '~/components/Button.vue'


<Abstract :text="'Meet Robonomics network – secure, сost-effective, and futuristic IoT platform for connecting robotics under Polkadot and Ethereum control'" />

[!["What Robonomics can do?"](./images/robonomics-can.jpg)](https://blog.aira.life/robonomics-can-72f631824670)

<!--<Grid :layout="'1fr 1fr 1fr'">
    <Card
        :title="'What is Robonomics Network?'"
        :link="'https://static.robonomics.network/docs/presentations/Robonomics.Keypoint.updated.August.2020.pdf'" 
        :button="'View Keypoint presentation'"
    />
    <Card
        :title="'Robot economics'" 
        :link="'https://static.robonomics.network/docs/book-the-economy-of-robots-1-2017/robonomics.network-book-the-economy-of-robots-1-2017-en.pdf'" 
        :button="'View our colourful book'"
    />
    <Card
        :title="'Research & Development'"
        :link="'https://wiki.robonomics.network/docs/r-and-d-based-on-robonomics-network/'"  
        :button="'Conducted on Robonomics Network'"
    />
</Grid>-->

<Grid :layout="'3'">
    <CardIcon
        :image="'/land/icon-presentation.png'" 
        :title="'What is Robonomics Network?'"
        :caption="'View Keypoint presentation'"
        :link="'https://static.robonomics.network/docs/presentations/Robonomics.Keypoint.updated.August.2020.pdf'"
    />
    <CardIcon
        :image="'/land/icon-book.png'" 
        :title="'Robot economics'"  
        :caption="'View our colourful book'"
        :link="'https://static.robonomics.network/docs/book-the-economy-of-robots-1-2017/robonomics.network-book-the-economy-of-robots-1-2017-en.pdf'"
    />
    <CardIcon
        :image="'/land/icon-coding.png'"
        :title="'Research & Development'"
        :caption="'Conducted on Robonomics Network'"
        :link="'https://wiki.robonomics.network/docs/r-and-d-based-on-robonomics-network/'"  
    />
</Grid>


<Card 
    :title="'Robonomics Incentive Program'"
    :link="'/blog/community-incentative-programm/'"  
    :button="'Read about rewards'"
    :back="'gradient'"
>

Robonomics has Incentive Program for Developers, Ambassadors & Influencers

</Card>

## Enjoy the latest AMA session!

<div class="layout__text">

https://www.youtube.com/embed/IEgvXcj3nSo

</div>

## How can I use the Robonomics?

<Grid :layout="'4'">
    <CardIcon
        :image="'/land/icon-wiki.png'" 
        :title="'Robonomics Wiki'"
        :caption="'For IoT & Robotics developers'"
        :link="'https://wiki.robonomics.network/docs/'"
    />
    <CardIcon
        :image="'/land/icon-kuka.png'" 
        :title="'Launch Kuka manipulator'"
        :caption="'Under Robonomics Network control'"
        :link="'https://wiki.robonomics.network/docs/kuka/'"
    />
    <CardIcon
        :image="'/land/icon-application.png'" 
        :title="'Robonomics DAPP'"
        :caption="'Made for connecting IoT & Robotics under Robonomics control smoothly'"
        :link="'https://dapp.robonomics.network/#/'"
    />
    <CardIcon
        :image="'/land/icon-rws.png'" 
        :title="'Sign up for RWS beta'"
        :link="'https://share.hsforms.com/1rlIfFL6ZSriaOjtf4NAGPw535vx?sidebar&__hstc=136840367.cb56ffd63c4554e84a6b795a22bdcfee.1602671793634.1605539005983.1605618482734.17&__hssc=136840367.2.1605618482734&__hsfp=1772620931'"
    />
    <CardIcon
        :image="'/land/icon-github.png'" 
        :title="'Github'"
        :link="'https://github.com/airalab/robonomics'"
    />
    <CardIcon
        :image="'/land/icon-twitter.png'" 
        :title="'Twitter'"
        :link="'https://twitter.com/AIRA_Robonomics'"
    />
    <CardIcon
        :image="'/land/icon-youtube.png'" 
        :title="'YouTube'"
        :link="'https://www.youtube.com/c/Airalab'"
    />
    <CardIcon
        :image="'/land/icon-telegram.png'" 
        :title="'Telegram'"
        :link="'https://t.me/robonomics'"
    />
</Grid>


## Want to talk with core Robonomics DAO developers?

<Button :link="'https://discourse.robonomics.network/'" :label="'Visit Robonomics Network forum'" :scale="'1.2'"/>