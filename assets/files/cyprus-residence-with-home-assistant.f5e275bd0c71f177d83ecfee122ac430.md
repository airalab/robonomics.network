---
title: "아파트 건물에는 Home Assistant가 탑재되어 있습니다."
date: 2023-12-08
published: true
locale: 'ko'
cover_image: ../images/cyprus-residence-with-home-assistant/cover.jpg
description: "당신의 아파트는 가장 친밀한 장소입니다. 당신의 모든 데이터가 집 밖의 서버 어딘가에 저장된다는 것을 알고 있다면 편안하지 않을 것입니다. 이 프로젝트에서는 각 아파트마다 Home Assistant가 장착된 홈 서버가 설치됩니다."
abstract: "당신의 아파트는 가장 친밀한 장소입니다. 당신의 모든 데이터가 집 밖의 서버 어딘가에 저장된다는 것을 알고 있다면 편안하지 않을 것입니다. 이 프로젝트에서는 각 아파트마다 Home Assistant가 장착된 홈 서버가 설치됩니다."
tags: ['Announcements', 'Use Cases', 'Collaborations', 'Smart Home']
---

안녕하세요 여러분!

제 이름은 Vadim Manaenko입니다. 저는 Pinout LTD의 공동 창업자이자 [Robonomics Network](https://robonomics.network/) 프로젝트의 주요 개발자 중 한 명입니다. 오늘은 큰 소식을 여러분과 공유하고 싶습니다: Pinout LTD가 개발자 [CCS](https://www.stylianidesgroup.com/)와 [Residence 28](https://www.stylianidesgroup.com/property/residence-28) 건물의 28개 아파트와 공용 영역 자동화를 위한 계약을 체결했습니다. 작업은 2024년에 시작될 예정입니다.

## 프로젝트 소개

CCS 개발자는 1997년부터 시장에서 활동하고 있으며 600개 이상의 부동산을 건설했습니다. Residence 28 프로젝트는 키프로스 림소리에 위치해 있습니다. 이 건물은 총 생활 면적(실내 면적)이 약 1800m2인 두 개의 블록으로 구성될 것입니다. 이는 Zigbee 무선 장치로 구축된 스마트 홈 시스템이 탑재된 키프로스의 첫 아파트 건물이며, 이 시스템은 오픈 소스 [Home Assistant](https://www.home-assistant.io/) 소프트웨어로 제어되며 Robonomics Parachain Web3 클라우드를 통해 원격 액세스가 제공될 것입니다.

## 미래 주민들은 무엇을 받게 될까요?

아래는 두 개 블록 중 하나의 층별 계획과 표기 설명입니다.

<!-- ![Smart home floor plan](../images/cyprus-residence-with-home-assistant/smart-home-floor-plan-cyprus-residence.jpg) -->

<rb-image zoom src="./images/cyprus-residence-with-home-assistant/smart-home-floor-plan-cyprus-residence.jpg" alt="Smart home floor plan" />

"유선"이라는 단어에 혼동되지 마세요. 이는 장치가 지속적인 전원을 필요로 한다는 것을 의미하며, "무선" 열에 있는 장치는 배터리로 작동됩니다.

이 모든 장치를 설치하면 아파트에 어떤 새로운 변화가 있을까요?

스마트 스위치를 사용하면 주민들은 일반적인 방식과 스마트폰 애플리케이션을 통해 조명을 제어하고 일정과 시나리오를 설정할 수 있습니다. 예를 들어, 침실에 있을 때 전체 아파트의 조명을 끄거나 정해진 장면으로 저녁 분위기를 조성할 수 있습니다.

프로그래밍 가능한 IR 원격 제어는 한 곳에서 여러 장치를 제어할 수 있습니다. 예를 들어, 에어컨을 일정에 따라 켜거나 방의 온도를 설정하는 등의 기능을 수행할 수 있습니다.

커튼은 알람 시계에 연동하여 깨어남을 더 즐거운 경험으로 만들 수 있습니다.

스마트 보일러 버튼을 사용하면 한 번 일정을 설정하면 겨울에 따뜻한 물을 생각할 필요가 없습니다.

다양한 센서를 통해 거주하는 장소에 대한 완전한 정보를 얻을 수 있습니다. 모든 문과 창문이 닫혔는지, 어린이 방의 온도와 습도는 어떤지, 전기를 얼마나 사용하고 어떤 용도로 사용하는지, 어딘가에 물이 샌 곳은 없는지 등을 알 수 있습니다.

주민들의 편의를 위해 Pinout 엔지니어들은 아파트 내에서 무거운 인터넷을 제공할 것입니다. 이렇게 하면 죽은 지역이 없을 것입니다.

## 공용 영역

만약 아파트 내부 자동화로 제한된다면 이 건물은 스마트하다고 할 수 없을 것입니다. 공용 영역에서는 스마트 릴레이가 일출과 일몰 시간을 모니터링하여 에너지를 낭비하지 않고 필요한 때에만 가로등을 켤 것입니다. 로비와 계단에 있는 조명은 움직임이 감지될 때에만 켜집니다.

보안에 관해서는 주민들은 단일 홈 컨트롤 패널에서 인터콤 시스템에 액세스 수 있습니다. 또한 보안을 위해 CCTV 카메라를 설치할 것입니다.

<!-- ![Smart home lobby plan](../images/cyprus-residence-with-home-assistant/smart-home-lobby-plan-cyprus-residence.jpg) -->

<rb-image zoom src="./images/cyprus-residence-with-home-assistant/smart-home-lobby-plan-cyprus-residence.jpg" alt="Smart home lobby plan" />

## 결론

이미 어딘가에서 이 모든 것이 일어난 것 같은 느낌이 드시나요? 스마트 하우스와 아파트는 수십 년 동안 건설되어 왔습니다. 그렇다면 Pinout 엔지니어들이 새롭게 하는 일은 무엇일까요?

당신의 아파트는 가장 친밀한 장소입니다. 당신의 모든 데이터가 집 밖의 서버 어딘가에 저장된다는 것을 알고 있다면 편안하지 않을 것입니다. 이 프로젝트에서는 각 아파트마다 Home Assistant가 탑재된 홈 서버가 설치됩니다. 이 소프트웨어를 사용하면 모든 장치를 하나의 시스템으로 통합할 수 있으며, 모든 데이터는 아파트 내부에 유지됩니다.

이렇게 하면 글로벌 인터넷을 통해 명령을 전송하는 데에 딜레이가 없어집니다. 집에 있고 "조명 끄기"를 누르면 어딘가에 신호를 보내고 응답을 기다릴 필요가 없습니다.

또한 Home Assistant 자체가 새로운 스마트 장치가 나타났음을 인식하고, 예를 들어 TV나 로봇 청소기와 같은 장치를 추가할 것을 제안할 것입니다. 스마트 홈 시스템을 확장하고 습관에 맞게 자동화를 사용자 정의할 수 있습니다.

Residence 28은 자동화된 새로운 주거 단지에 불과하지 않습니다. 이는 당신의 삶에 쉽게 적응하는 스마트 홈입니다.