# Official Website of Robonomics Network

This website serves as a hub for all essential information for our community.

## How to Suggest Changes

1. **Create an issue** in this repository.
2. **Review the website carefully** to ensure your issue is valid and clearly described.
3. We will review your suggestion as soon as possible and respond accordingly.

## For Developers

- Built with [Astro](https://astro.build/).
- Use [yarn](https://yarnpkg.com/) to manage dependencies.
- Node.js version must be **>=18.17.1**.

### Getting Started

Ensure you have Node.js and the [Astro framework](https://astro.build/) installed before proceeding.

- **Install dependencies:** 
`yarn install`

- **Start development server**
`yarn dev`

- **Build for production**
`yarn build`

### How to add a new post

1. Create a **Markdown (MDX)** file in the /scr/blog/ directory.
- Use *kebab-case* for filenames (e.g., digital-twins-introduction.mdx).

2. Add **Frontmatter** metadata at the top of the file:
 
It must be at the top of the Markdown file, and must take the form of valid YAML set between triple-dashed lines. Between the triple-dashed lines, you can set or edit following options:

```
---
title: 'Introduction to Digital Twins' # Title for the page, you do not need to duplicate it in text
date: 2024-08-23 # Publishing date
published: true # the status of the post (if `false` it won't be visible)
locale: 'en' # locale in which the post was published
tags: ['Digital Twin', 'Web3', 'Philosophy of Robonomics'] # tags to use on blog and filter posts (it a must parameter, include at least one tag)
cover_image: ./images/digital-twins-introduction/cover.png # cover image
description: "Digital twins are a powerful concept in modern technology. This guide will introduce you to the basics of digital twins, covering their history, types, current industry standards, and potential applications in Web3. Whether you're new to the topic or looking to refresh your knowledge, this concise overview will provide valuable insights." # description of the post
abstract: "Digital twins are not a new concept; they emerged in the early 1990s and have since periodically captured the attention of researchers, engineers, and founders. Now, in 2024, digital twins are again in the spotlight—since 2016, according to Google Trends, interest in them has steadily grown. We believe it's important to familiarize readers with this concept, as the term is often interpreted loosely, making it challenging to understand. Igor Brylev [movefasta]" # abstract that will be added atop of the post page (not necessary)
translated: true # add this parameter if you translated the post by yourself and did not use AI.
---
```

3. Write the post content using **Markdown syntax**.

### Custom Components for Posts

#### Images 

- Create a folder with the same name as your post in `/public/blog/images/url-of-your-post`. Upload images in the folder.

- For localized posts:
  Create folder with the locale you are using in `public/blog/images/locale`. Then, create folder with the same name as your post in `/public/blog/images/locale/url-of-your-post`. Upload images in the folder.

- There are two ways for inserting pictures in your post:

1. With the custom component `RbImage`.
It is recommended to insert pictures with built-in tag <RbImage>, however you may also use standard way for Markdown files.

```
  <RbImage zoom src="./images/digital-twins-introduction/2.png" alt="Physical asset's model" />
```

- localized

```
  <RbImage zoom src="../images/ru/digital-twins-introduction/1.png" alt="Классическая модель" /> 
```

2. Using markdown syntax:

```
  !["Robot Class Model"](/images/digital-twins-introduction/1.png)
```

- localized

```
  !["Классическая модель"](/images/ru/digital-twins-introduction/1.png) 
```

- Inserting localized post covers 

If you need to localize your cover than your *cover_image* will look something like this: 

```
  cover_image: /images/ru/digital-twins-introduction/cover.png
```

- Properties:

| Property | Type | Required | Default | Description |
|---|---|---|---|---|
| `src` | `String` | `true` |  | path to the image |
| `link` | `String` | `false` |  | if you want to make a link |
| `zoom` | `Boolean` | `false` | `false` | add zoom to the image |
| `space` | `Boolean` | `false` | `true` | add or remove space after picture element |
| `caption` | `String` | `false` |  | caption for the image |
| `captionCenter` | `Boolean` | `false` | `false` | puts image caption to the center |
| `captionSize` | `String` | `false` | `normal` | change caption font size<br>Available options:<br>'small', 'normal', 'x2' |
| `captionItalic` | `Boolean` | `false` | `true` | remove or add italic font style from caption |



#### Grid 

To structure content in a grid: 

- Use grid wrapper component first: 

```c
<RbGridWrapper></RbGridWrapper>
```

- And then use as many grid items components as you like inside wrapper:

```c
  <RbGridWrapper columns="4" textAlign="center" align="end">
    <RbGridElement>
      <RbImage zoom src="/blog/images/robonomics-open-hardware-origins/air-quality-station.jpg" alt="Sensors Network Air Quality Hardware" caption="Caption testing" captionItalic="false" space="false" />
    </RbGridElement>
    <RbGridElement>
      <RbImage zoom src="/blog/images/robonomics-open-hardware-origins/air-quality-station.jpg" alt="Sensors Network Air Quality Hardware" caption="Caption testing" captionItalic="false" space="false" />
    </RbGridElement>
    <RbGridElement>
      <RbImage zoom src="/blog/images/robonomics-open-hardware-origins/air-quality-station.jpg" alt="Sensors Network Air Quality Hardware" caption="Caption testing" captionItalic="false" space="false" />
    </RbGridElement>
    <RbGridElement>
      <RbImage zoom src="/blog/images/robonomics-open-hardware-origins/air-quality-station.jpg" alt="Sensors Network Air Quality Hardware" caption="Caption testing" captionItalic="false" space="false" />
  </RbGridWrapper>

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

or `RbCode` component

``<RbCode>``

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

``</RbCode>``


#### Text Card

You may use text card `<TextCard>` component to accentuate you text block:

```
<TextCard alignContent="center">

**1. Statistics of median leasing price from August to November 2022 (information taken from [parachains.info](http://parachains.info/)):**

</TextCard>

```

- Props: 

| Property | Type | Required | Default | Description |
|---|---|---|---|---|
| `link` | `String` | `false` |  | if you want your card to be a link |
| `linkText` | `String` | `false` |  | text for the link |
| `imageExternal` | `String` | `false` |  | if you need an external image for your text card |
| `image` | `String` | `false` |  | if you need image for your text card |
| `imageSize` | `String` | `false` | `small` | size of your image </br> Options: `small`, `mid`, `big`, `block` |
| `imageRound` | `Boolean` | `false` | `true` | border-radius for the icon |
| `icon` | `String` | `false` | `` | if you want to add a small icon at the top of the card |
| `orientation` | `String` | `` | `horizontal` | orientation for your text card </br> Options: `horizontal`, `vertical` |
| `back` | `String` | `false` | `white` | background color of your card </br> Options: `transparent`, `white`, `darkblue`, `gradient` |
| `shadow` | `String` | `false` | `gray` | shadow color for your card </br> Options: `light`, `gray`, `dark` |
| `alignContent` | `String` | `false` | `none` | aligns content horizontally </br> Options: `left`, `center`, `right`,  `none` |
| `alignContentV` | `String` | `false` | `top` | aligns content vertically </br> Options: `top`, `middle` |
| `overlap` | `Boolean` | `false` | `true` | if link prop is not empty then the whole card becomes clickable link |
| `className` | `Boolean` | `false` | `true` | if additional classes need to be added |


### YouTube Embeds

You may add YouTube video to a post like that:

```
<YouTube id="https://www.youtube.com/watch?v=qX24V99GeW4" posterQuality="max" />
```

Learn more about properties [here](https://astro-embed.netlify.app/components/youtube/)


### How to Translate a Post

- You must create **.env** file and add *OPENAI_KEY* variable with your key!

- If you wish to translate your md document you need to run the command: 
 
```bash
yarn translate-md
```

> To translate all at once, every new lines in pages, new document or changed document you need only one command now 

```bash
yarn translate-all
```

> Also, make sure you are translating only the changed files that are **needed** to be translated. For example, you need to change 5 files. Three of them includes text changes and removing some outdated information. And the other two need to update links for some images or just change an external link. In this case, it would be wise to change the first three files and translate them and only then change links in the other two.

> Translation happens to all changed files (24 hours update), but it's not necessary for the updated links, especially if the file large and therefore translation takes some time.

After running the needed command all you have to do is wait and check the files (ai translations have some flaws). To check files run `yarn dev` and see if there are any errors.


## For contributors
Please, fill free to open issues with your suggestions or pull requests.