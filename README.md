# Official website of Robonomics Network

This website is supposed to contain all useful information for our community. 

### How to suggest any changes

1. Create an issue for this repo.
2. Be sure you checked website carefully and the description of issue is quite clear.
3. We will consider your suggestion as soon as we can and give you reply.

## For developers

* Built with [Gridsome](https://gridsome.org/).
* Please, use [npm](https://www.npmjs.com) to install packages

To start it locally you need install node.js and [Gridsome framework](https://gridsome.org).

**Start**
`npm i`

**Develop**
`gridsome develop`

**Build**
`gridsome build`

### How to add a new post

1. You need to create **markdown** file in ``content/posts``. File name must be in *kebab case*: e.g `digital-twins-introduction.md`.

2. Then, you need to add ***Frontmatter***:
 
It must be at the top of the Markdown file, and must take the form of valid YAML set between triple-dashed lines. Between the triple-dashed lines, you can set or edit following options:

```
---
title: 'Introduction to Digital Twins' # Title for the page, you do not need to duplicate it in text
date: 2024-08-23 # Publishing date
published: true # the status of the post (if `false` it won't be visible)
locale: 'en' # locale in which the post was published
tags: ['Digital Twin', 'Web3', 'Philosophy of Robonomics'] # tags to use on blog and filter posts
cover_image: ./images/digital-twins-introduction/cover.png # cover image
description: "Digital twins are a powerful concept in modern technology. This guide will introduce you to the basics of digital twins, covering their history, types, current industry standards, and potential applications in Web3. Whether you're new to the topic or looking to refresh your knowledge, this concise overview will provide valuable insights." # description of the post
abstract: "Digital twins are not a new concept; they emerged in the early 1990s and have since periodically captured the attention of researchers, engineers, and founders. Now, in 2024, digital twins are again in the spotlight—since 2016, according to Google Trends, interest in them has steadily grown. We believe it's important to familiarize readers with this concept, as the term is often interpreted loosely, making it challenging to understand. Igor Brylev [movefasta]" # abstract that will be added atop of the post page (not necessary)
translated: true # add this parameter if you translated the post by yourself and did not use AI.
---
```

3. Add contents of the post following markdown syntax.

### Components for post

#### Images 

- Create a folder with the same name as your post in `content/posts/images/url-of-your-post`. Upload images in the folder.

  - For localized posts:
      Create folder with the locale you are using in `content/posts/images/locale`. Then, create folder with the same name as your post in `content/posts/images/locale/url-of-your-post`. Upload images in the folder.

- There are two ways for inserting pictures in your post:

1. With the custom component `rb-image`.
It is recommended to insert pictures with built-in tag <rb-image>, however you may also use standard way for Markdown files.

```
  <rb-image zoom src="./images/digital-twins-introduction/2.png" alt="Physical asset's model" />
```

- localized

```
  <rb-image zoom src="../images/ru/digital-twins-introduction/1.png" alt="Классическая модель" /> 
```

2. Using markdown syntax:

```
  !["Robot Class Model"](./images/digital-twins-introduction/1.png)
```

- localized

```
  !["Классическая модель"](../images/ru/digital-twins-introduction/1.png) 
```

- Inserting localized post covers 

If you need to localize your cover than your *cover_image* will look something like this: 

```
  cover_image: ../images/ru/digital-twins-introduction/cover.png
```

- Properties:

| Property | Type | Required | Default | Description |
|---|---|---|---|---|
| `src` | `String` | `true` |  | path to the image |
| `link` | `String` | `false` |  | loops youtube video |
| `zoom` | `Boolean` | `false` | `false` | add zoom to the image |
| `space` | `Boolean` | `false` | `true` | add or remove space after picture element |
| `caption` | `String` | `false` |  | caption for the image |
| `captionCenter` | `Boolean` | `false` | `false` | puts image caption to the center |
| `captionSize` | `String` | `false` | `normal` | change caption font size<br>Available options:<br>'small', 'normal', 'x2' |
| `captionItalic` | `Boolean` | `false` | `true` | remove or add italic font style from caption |



#### Grid 

The component helps to position elements in grid. 

- Use grid wrapper component first: 

```c
<rb-grid></rb-grid>
```

- And then use as many grid items components as you like inside wrapper:

```c
  <rb-grid :columns="4" textAlign="center" align="end">
    <rb-grid-element>
      <rb-image zoom src="./images/robonomics-open-hardware-origins/air-quality-station.jpg" alt="Sensors Network Air Quality Hardware" caption="Caption testing" :captionItalic="false" :space="false" />
    </rb-grid-element>
    <rb-grid-element>
      <rb-image zoom src="./images/robonomics-open-hardware-origins/altruist-hq.jpg" alt="Altruist Air Station" caption="Caption testing" :captionItalic="false" :space="false" />
    </rb-grid-element>
        <rb-grid-element>
      <rb-image zoom src="./images/robonomics-open-hardware-origins/air-quality-station.jpg" alt="Sensors Network Air Quality Hardware" />
    </rb-grid-element>
    <rb-grid-element>
      <rb-image zoom src="./images/robonomics-open-hardware-origins/altruist-hq.jpg" alt="Altruist Air Station" />
    </rb-grid-element>
  </rb-grid>

```

- Properties:

| Property | Type | Required | Default | Description |
|---|---|---|---|---|
| `columns` | `Number` | `false` | 4 | Number of columns for grid.<br>Options: from `1` to `6` |
| `align` | `String` | `false` |  | align items on the block axis<br>Options: `start`, `center`, `end` |
| `justify` | `String` | `false` |  | align items on the inline axis<br>Options: `start`, `center`,`end` |
| `space` | `String` | `false` | `space` | adjust gap between grid elements<br>Options: '0', 'space', 'x2' |
| `textAlign` | `String` | `false` | `left` | align text inside grid<br>Options: `left`,`center`,`right` |

#### Code block

To insert code in your post you may use default markdown syntax:

<pre>
```
import requests
from substrateinterface import Keypair, KeypairType
from robonomicsinterface import Account
import typing as tp
import json
import os

ADMIN_SEED="client teach develop blush just ginger depart sister orange rather measure park"
IPFS_HASH="QmZMkJo6StbfDVvGCqVnV3sZeG7R3cftt7WXfdUVdpJ4c3"
```
</pre>

or `rb-code` component

``<rb-code>``

<pre>
```sh
import requests
from substrateinterface import Keypair, KeypairType
from robonomicsinterface import Account
import typing as tp
import json
import os
```
</pre>

``</rb-code>``


#### Text Card

You may use text card `<card>` component to accentuate you text block:

```
<Card alignContent="center">

**1. Statistics of median leasing price from August to November 2022 (information taken from [parachains.info](http://parachains.info/)):**

</Card>

```

- Props: 

| Property | Type | Required | Default | Description |
|---|---|---|---|---|
| `link` | `String` | `false` |  | if you want your card to be a link |
| `linkTex` | `String` | `false` |  | text for the link |
| `imageLocal` | `String` | `false` |  | if you need local image for your text card |
| `image` | `String` | `false` |  | if you need image for your text card |
| `imageSize` | `String` | `false` | `small` | size of your image </br> Options: `small`, `mid`, `big`, `block` |
| `orientation` | `String` | `false` | `horizontal` | orientation for your text card </br> Options: `horizontal`, `vertical` |
| `back` | `String` | `false` | `white` | background color of your card </br> Options: `transparent`, `white`, `darkblue`, `gradient` |
| `shadow` | `String` | `false` | `gray` | shadow color for your card </br> Options: `light`, `gray`, `dark` |
| `alignContent` | `String` | `false` | `none` | aligns content horizontally </br> Options: `left`, `center`, `right`,  `none` |
| `alignContentV` | `String` | `false` | `top` | aligns content vertically </br> Options: `top`, `middle` |


#### Text Abstract
You may use text abstract in your posts:

```
<Abstract :style="{marginBottom: '2rem'}" class="post_abstract"  :text="`<b>Robotics</b> is a rapidly developing field of science that allows people to create machines that can safely exist in a complex human world, interact with its inhabitants (humans and other machines), perform some useful actions, usually aimed at improving the humans’ quality of life and in some way to simplify it.`" />
```

| Property | Type | Required | Default | Description |
|---|---|---|---|---|
| `text` | `String` | `true` |  | text you want to add  for your abstract |
| `className` | `String` | `false` |  | custom class for the component |


## For contributors
Please, fill free to open issues with your suggestions or pull requests.
