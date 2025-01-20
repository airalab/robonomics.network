---
title: "로보노믹스 오픈 하드웨어의 기원"
date: 2024-11-11
published: true
locale: 'ko'
cover_image: ../images/robonomics-open-hardware-origins/cover.png
description: "사이버펑크를 위한 하드웨어 프로젝트를 시작하면서, 2020년 이후의 하드웨어 여정을 되돌아보는 시간입니다. 이 글은 로보노믹스의 오픈 하드웨어 운동을 탐구할 것입니다."
abstract: "사이버펑크를 위한 하드웨어 프로젝트를 시작하면서, 2020년 이후의 하드웨어 여정을 되돌아보는 시간입니다. 이 글은 로보노믹스의 오픈 하드웨어 운동을 탐구할 것입니다."
tags: ['로드맵', '스마트 홈']
---

로보노믹스는 언제나 일부로 "하드웨어" 프로젝트였습니다. 우리에게 블록체인은 기기가 진정한 경제 주체가 되어 금융 자산을 사용하여 현실 세계에서 변화를 일으킬 수 있는 기술이었습니다. 2016년에 스마트 계약으로 시작된 첫 드론 비행부터, 우리는 현실 하드웨어에 대해 한 분의 휴식도 없이 생각해 왔습니다 - 현실 세계를 감지하고 영향을 미칠 수 있는 하드웨어: 센서와 로봇. 동시에 오픈 소스 소프트웨어 운동에 충실하면서, 우리는 하드웨어 프로젝트도 오픈하려고 노력했습니다. 지금은 개발하는 모든 기기의 청사진이 오픈 라이선스로 공개되어 있습니다.

2020년 이후로 많은 시간이 흘렀고, 이제 우리가 개발한 흥미로운 하드웨어를 얼마나 많이 만들었는지 되돌아보는 것이 완벽한 시간입니다. 이 글에서는로보노믹스에서의 오픈 하드웨어 운동 역사와 지난, 현재, 그리고 미래의 가장 흥미로운 발전 사항에 대해 알아봅시다.

## 센서 네트워크 - 대기 품질

시민 센서 네트워크 프로젝트는 2020년 4월에 시작되었으며, 그때 우리는 Robonomics 네트워크로 데이터를 제공하는 모든 센서를 세계지도에서 볼 수 있는 특별한 DApp을 개발했습니다. 최고의 사용자 경험을 보장하기 위해 Plug&Play 솔루션이 필요하다는 것을 빨리 깨달았습니다. 센서를 구입하고 연결하면 프로그래밍과 회로 설계에 대한 심층적인 지식이 없어도 즉시 커뮤니티 회원이 될 수 있습니다. 2021년 8월에는 대기 품질 센서에 대한 작업이 시작되었고, 그 후 몇 달 만에 SDS011 PM2.5/PM10 레이저 입자 센서와 인기 있는 DHT22 (AM2302) 온도 및 습도 센서가 포함된 첫 번째 프로토타입을 얻었습니다.

<rb-image zoom src="./images/robonomics-open-hardware-origins/air-quality-station.jpg" alt="센서 네트워크 대기 품질 하드웨어" />

지난 세 년 동안 이 장치는 광범위한 수정을 거쳐 최신 버전인 "알트루이스트" 시민 모니터링 스테이션으로 이끌렸습니다. 이 스마트 센서는 소음 수준, 먼지 입자, 온도 등 환경 데이터를 수집하고 분산형 [센서 맵](https://sensors.social/)에 저장합니다. 스테이션은 I2C 인터페이스를 따르는 센서를 추가하여 확장할 수 있습니다: BMP180 — 온도와 습도, BME/P280 — 온도, 습도, 대기압, HTU21D — 온도와 습도, CCS811 VOC 센서 — 휘발성 유기 화합물, CO2 동등 및 1-Wire 인터페이스를 가진 센서: DS18B20 — 온도.

<rb-image zoom src="./images/robonomics-open-hardware-origins/altruist-hq.jpg" alt="Altruist Air Station" />

[Robonomics Academia](https://robonomics.academy/en/learn/sensors-connectivity-course/overview/) 웹사이트와 [위키](https://wiki.robonomics.network/docs/sds-sensor-connect/)에는 센서 네트워크에 대한 많은 교육 자료가 있습니다. [비디오](https://www.youtube.com/watch?v=OdTd1sacCso)에서는 당신이 우리의 모듈을 사용하여 개별 모니터링 스테이션을 만들고 시민 모니터링 센서 네트워크에 연결하는 방법을 보여줍니다.

## 사이버 경제 - 토큰화된 커피 머신

글로벌 센서 네트워크 외에도, 우리는 가정용 장치에 Robonomics를 사용하는 시나리오도 고려했습니다. 이 분야에서의 첫 번째 프로젝트 중 하나는 2021년 10월에 시작된 블록체인 연결 커피 머신이었습니다. 네, 이것은 전통적인 의미의 개발이 아니라 해킹이었습니다. 우리는 시리얼 모델의 커피 머신과 우리의 엔지니어링 기술을 사용하여 이러한 기계들을 Web3 호환으로 만들었습니다.

<rb-image zoom src="./images/robonomics-open-hardware-origins/robonomics-coffee-maker.jpg" alt="robonomics-coffee-maker" />

그러나, 이것은하드웨어 프로젝트에는 그 당시 사용 가능한 모든 Robonomics 혁신이 포함되어 있었습니다:

- 단일 보드 컴퓨터에 Lightweight Robonomics 기반 노드
- Statemine 패러체인에서 커피 패키지를 수령하고 사무실 팀원들 사이에 균등하게 분배되는 커피 토큰 형태의 실제 자산 (RWA)
- 공급 및 수요 에이전트 간 상호 작용을 간소화하기 위해 책임 팔레트를 실용적으로 적용 — 이 기능으로 커피 메이커는 가장 유리한 커피 공급업체를 찾았습니다

이 흥미로운 프로젝트에 대해 더 많이 알아보려면 [여기](https://robonomics.network/cases/blockchain-coffee-machine/)를 클릭하거나 Sergey Lonshakov의 블로그인 Medium의 [암호 아나키스트를 위한 코워킹](https://blog.aira.life/coworking-for-crypto-anarchists-p1-5ebecb252f2d)를 읽어보세요.

## 스마트 홈 장치

2022년에는 Web3 기술을 기반으로 안전하고 개인 정보 보호가 보장된 스마트 홈 솔루션을 개발하기 시작했습니다. 무선 통신에 중점을 두어 분산형 Robonomics 클라우드와 호환되는 원격 제어 장치 라인을 만들었습니다. 우리의 여정은 Espressif Systems의 인기 있는 ESP8266 WiFi 칩으로 시작되었습니다. 그 후 더 다재다능한 ESP32-C3로 진행되었는데, 이 칩은 오픈 RISC-V 아키텍처와 블루투스 5 지원을 특징으로 합니다. 2024년에는 Espressif의 가장 고급 칩인 ESP32-C6를 채택했는데, Thread/Zigbee 프로토콜 지원이 추가되었습니다. 현재 우리의 전체 Robonomics 스마트 홈 장치 라인은 사용 중입니다.ESP32-C6 칩. 이러한 장치들은 오픈 소스 스마트 홈 서버 Home Assistant와 완벽하게 호환됩니다. 사용자는 [Web Flasher](https://webflasher.robonomics.network/)를 통해 쉽게 펌웨어를 업데이트할 수 있습니다. 우리는 모듈의 소스 파일을 [Github 저장소](https://github.com/airalab/hardware)에 공개했습니다.

### 스위치

전통적으로 유선 건물 자동화 시스템은 초기 건설 단계에서 다른 전기 네트워크와 함께 설계됩니다. 만약 귀하의 거주지가 이러한 방식으로 설계되지 않았다면, 스마트 장치를 추가하는 것은 종종 비용이 많이 드는 개조를 필요로 합니다. 우리의 스위치는 해결책을 제공합니다: 개조 없이 지능적인 제어를 구현할 수 있습니다. 스위치를 표준 콘센트 상자에 설치하기만 하면 Home Assistant 서버에서 접근할 수 있게 되어, 전통적으로 유선으로 연결된 공간에 스마트 홈 기능을 제공합니다.

<rb-image zoom src="./images/robonomics-open-hardware-origins/2-gang-switch.jpg" alt="" />

### 적외선 원격 제어

적외선 송수신기는 오랫동안 원격으로 제어되는 가정용 가전제품 시장을 지배해왔습니다. 거의 모든 가정에는 미디어 플레이어, 에어컨 등을 포함한 이러한 장치들이 있습니다. 이러한 장치들을 스마트 홈 시스템에 통합하기 위해 구성 가능한 게이트웨이를 개발했습니다. 이 게이트웨이를 사용하면 MQTT 프로토콜을 통해 간단한 구성 과정을 통해 IR 제어 가전제품을 집 서버에 쉽게 연결할 수 있습니다.

<rb-image zoom src="./images/robonomics-open-hardware-origins/ir-remote-control.jpg" alt="IR Remote Control" />

### 에너지 모니터에너지 

절약은 스마트 홈의 가장 중요한 기능 중 하나입니다. 쇼파에서 일어나지 않고 장치를 제어할 수 있는 능력은 좋지만, 에너지 소비 변화에 대한 역사적 데이터 덕분에 평소보다 15~20% 낮은 전기 요금을 받는 것이 더욱 만족스럽습니다. 이 동기가 우리의 첫 번째 DIN 레일 장착 가능한 장치 개발로 이어졌습니다. 이 장치는 자동화를 위한 산업 표준입니다. 우리의 모든 스마트 홈 장치와 마찬가지로 에너지 모니터는 MQTT 프로토콜을 통해 홈 어시스턴트 서버에 무선으로 연결됩니다. [데모 비디오](https://www.youtube.com/watch?v=xtXIsORJGP0)를 확인하여 모니터의 개봉, 설정 및 초기 사용을 살펴보세요.

<rb-image zoom src="./images/robonomics-open-hardware-origins/energy-monitor.jpg" alt="에너지 모니터" />


## DIY 및 산업용 로봇공학

2021년 초, Robonomics는 산업용 로봇 제작 방식을 바꾸기 위한 큰 목표를 가진 Robossembler 프로젝트를 시작했습니다. 우리는 자체로 스스로를 만들 수 있는 로봇으로 나아가고 싶었습니다. 이 꿈을 살려두면서, 우리는 2021년에 더 실용적인 목표를 세웠습니다. 누구나 만들고 사용할 수 있는 오픈 소스 로봇 팔을 만들기로 결정했습니다. 이 팔은 물건을 자동으로 조립할 수 있을 뿐만 아니라 자신의 사본을 만들 수도 있을 것입니다. 산업용 로봇의 클래식한 디자인에는 자동으로 조립할 수 있는 기능이 포함되어 있지 않기 때문에, 우리는 모터부터 시작하여 모든 구조적 구성 요소를 재검토해야 했습니다. 우리는로봇의 모터, 기어박스, 그리고 전체 구조를 설계하는 것은 어려웠고 시간이 많이 소요되었습니다. 그러나 이제 우리의 노력에서 긍정적인 결과를 보기 시작했습니다. 우리의 노고가 시작되어 성과를 거두고 있으며 프로젝트에 대한 좋은 진전을 이루고 있습니다.

### 서보

대부분의 오픈 로봇 조작기는 처음에는 이상적이지 않았던 스텝 모터를 사용했습니다. 현대의 프로프리어터리 로봇은 이제 피드백을 위해 통합된 컨트롤러가 있는 서보 드라이브를 사용합니다. 우리 팀은 다양한 모터 프로젝트에 적용할 수 있는 사용자 정의 서보 드라이브 컨트롤러를 개발했습니다.


<rb-image zoom src="./images/robonomics-open-hardware-origins/robossembler-servo-reducer-exploding-view-01.jpg" alt="로보셈블러 서보 폭발 뷰" />

<rb-image zoom src="./images/robonomics-open-hardware-origins/servo.jpg" alt="로보셈블러 서보" />

우리는 DIY 애호가들을 위해 사용하기 쉬운 서보 드라이브를 디자인했습니다. 자석 코어에 비싼 전기강판을 사용하는 대신 일반 DIN 나사를 사용합니다. 3D 프린터를 사용하여 로터와 스테이터의 주요 부품을 만들 수 있습니다. 이로써 취미로 집에서 프로젝트를 구축하는 것이 훨씬 쉬워졌습니다. 소스는 [gitlab](https://gitlab.com/robossembler/servo)에서 확인할 수 있습니다.

### 감속기

모터 개발 중에 우리는 처음에 손으로 여러 스테이터를 감았습니다. 이것은 극도로 노동 집약적인 과정이었습니다.많은 망설임 끝에, 우리는 자동 스테이터 코일 꼬임을 위한 전문 기계를 만들기로 결정했습니다. 결과는 놀랍도록 비용 효율적인 해결책으로, 약 150달러 정도에 이를 수 있습니다. 현재 이 기계는 세계 최초의 오픈 소스 꼬임 기계로 자리 잡고 있습니다. 우리는 접근성을 염두에 두고 설계했습니다: 대부분의 부품은 3D 프린팅이 가능합니다. [이 비디오](https://youtu.be/5glGYkbpT6w?si=H6iFg7i56K8elXjw)에서 조립부터 기계의 첫 8시간 스테이터 꼬임까지 전과정을 확인할 수 있습니다. 소스는 [gitlab](https://gitlab.com/robossembler/cnc/motor-wire-winder)의 저장소에서 확인할 수 있습니다.

<rb-image zoom src="./images/robonomics-open-hardware-origins/winder.jpg" alt="모터 와이어 꼬임기" />

이제 가장 기본적인 작업 - 모터 개발 및 생산을 위한 장비를 개발한 상태이므로, 앞으로 나아갈 수 있습니다! 2025년에는 완전히 오픈 소스 6축 로봇 조작기인 Robossembler Arm을 테스트할 계획입니다. 이미 DIY 모터로도 충분한 힘을 제공할 1:43 기어 비율의 독특한 기어박스를 개발했습니다!

<rb-image zoom src="./images/robonomics-open-hardware-origins/robossembler-arm.jpg" alt="Robossembler Arm" />

## 다음은 무엇인가요?

우리는 여기서 멈추지 않습니다- 2025년을 위한 큰 계획이 있습니다! 더 많은 기기를 만들 계획입니다. 지금 당장 [robonomics.network/devices](https://robonomics.network/devices/)에서 새로운 하드웨어 for Cyberpunks 라인을 확인할 수 있습니다. 이 새로운 라인에는 이미 이야기한 Altruist 스테이션이 포함될 것입니다. 다음은 저희가 작업 중인 내용입니다:

- RISC-V 스마트 홈 서버. RISC-V로 구동되는 가장 오픈 소스 스마트 홈 서버로, Google 서버를 대체하는 Web3 클라우드가 내부에 있습니다. 오픈 소스 펌웨어 Tasmota가 탑재된 스마트 WI-FI MQTT 기기로 Home Assistant와 완벽하게 호환됩니다.
- 히키코모리 타마고치. 가정이나 의류의 센서 상태를 확인하는 스마트 웨어러블 스테이션입니다.
- 스마트 금고. 사용자 정의 조건에 따라 스마트 계약으로 잠금 해제되는 금고입니다. 금고의 개방 및 폐쇄 기록을 확인할 수 있습니다. 신뢰할 수 있는 계정에 일정 기간 동안 활동이 없을 경우 접근 권한을 부여하는 등 사용자의 요구에 맞게 금고를 프로그래밍할 수 있습니다.