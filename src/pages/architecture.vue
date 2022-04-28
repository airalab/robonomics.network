<template>
  <layout>
    <MetaInfo
      pageTitle = "Architecture page"
      pageDescription = "We are experimenters, engineers and scientists. It is important for us not only to develop a solution that is relevant for today, but first to understand the scientific validity of the approach and achieve clarity in the presentation of the principles that should underlie the entire architecture of a software solution."
      :pageImage="'/website_cover_vision.jpg'"
    />
    <div class="page architecture">
      <section class="architecture-banner section__solid animate-inside" v-in-viewport.once>
        <div class="layout layout__content">
          <article>
            <h1>robonomics architecture</h1>
            <p class="hyphens">The main idea that the authors of Robonomics tried to convey before - is the natural, logical,
              and seemingly inevitable evolution from the current level of the economy into fully automated services.
              Automated services will need to have both the ability to speak the language of human economics and also
              the machines’ own economics to perform various operations in the world around them at a speed not
              available to humans.</p>
            <p class="hyphens">Next we would like to show you the practical areas of human-machine interaction using modern
              Internet technology. We will move from the familiar IoT device architecture of technical information
              exchange through cloud services to the organization of technical-economic interaction through a
              decentralized, globally accessible network of providers.</p>
            <p class="hyphens">To begin with, we need to make an excursion into the area that is most clearly related
              to the network connection of automated systems. After that, we will look at the basics of the Internet of
              Things in order to highlight the problems and main challenges faced by the creators of IoT systems and to
              the solution of which Robonomics is aimed.</p>
          </article>
          <div class="bg" aria-hidden="true">
            <g-image alt="" src="~/assets/images/vision-architecture-background.png"/>
          </div>
        </div>
      </section>

      <section class="vision-fathers layout layout__content animate-inside" v-in-viewport.once>

        <div class="vision-fathers-image">
          <h2>Overview of the state of the internet of things <br/> <strong>(IOT)</strong></h2>

          <g-image alt="" src="~/assets/images/person-victor-glushkov.svg"/>
        </div>

        <article class="hyphens">
          <p>The issue of network accessibility of automatic devices has been discussed all over the planet since the
            60s, and already at that time quite serious attempts were made to solve it. For example, the Soviet
            cyberneticist Viktor Glushkov proposed and partially implemented the automated collection of information on
            the production volumes of an individual plant as part of the design of the
            <g-link to="https://en.wikipedia.org/wiki/OGAS">OGAS</g-link> national information system
            in the 60s and 70s. It is widely known how the Coca-Cola vending machine was connected to the ARPANET in the
            1980s so that the machines could report the availability of drinks and their temperature.</p>
          <p>But still, the actual development of IoT is happening today, due to the widespread use of enabling
            technologies. The main drivers of the rapid evolution of Internet of Things applications are the results of
            the development of many areas – from wireless communications of various ranges and embedded devices, to
            cloud analytics and machine learning. The number of IoT devices has been growing steadily over the past 10
            years (with a forecast of 25 billion units by 2030), and this has spurred researchers and developers to
            create new IoT applications in various areas such as healthcare, home automation, agribusiness,
            environmental protection.</p>
          <p>We are more interested in the process of building IoT-systems and the tasks that arise in this process.
            Over the years of research, many different architectures have been proposed, and by averaging them, we can
            distinguish three basic components of an IoT system: devices, network infrastructure, analytical, computing
            and control machines.</p>
        </article>


      </section>

      <hr/>

      <section class="architecture-digital-twin layout layout__content animate-inside" v-in-viewport.once>
        <g-image src="~/assets/images/vision-digital-twin.svg"/>
        <article class="hyphens">
          <p>The development and application of the Internet of Things has shown that solving typical problems is not
            enough. Completely new concepts and principles, based on earlier mistakes and identified shortcomings, have
            emerged by the present day. This certainly convenient approach of using cloud services turned out to have a
            number of critical shortcomings related to scalability, privacy, and security. In an effort to solve these
            problems, it was proposed to bring data processing, logic, and computation closer to the immediate place
            where they are used. Thus, the concepts of
            fog and edge computing emerged, with intermediate systems between the cloud and devices taking over some of
            the cloud’s functions. Therefore, the creation of edge systems has become one of the new challenges of
            building the Internet of Things.</p>
          <p>Another recent challenge for building IoT has been the concept of the digital twin — a digital version of
            real equipment that copies its specifications and historical data. This concept is at its best in areas
            where it is necessary to have an accurate and complete specification of a process and be able to predict
            its development. The Internet of Things acts as the main integrator of digital twins, but this task is much
            more profound than the usual connectivity of IoT devices.</p>
          <p></p>
          <p>Right now we are witnessing a whole segment of the network, designed and convenient not for people, but for
            machines. The Internet of Things is no longer just the mechanics of connecting a device to the network, but
            more services, created and available specifically to devices. The Internet of Things not only connects the
            user and the device, but also helps the devices to handle the tasks of providing a service for the person,
            but autonomously.</p>
        </article>
      </section>

      <hr/>

      <section class="architecture-iot-classification layout layout__content animate-inside" v-in-viewport.once>
        <div>
          <h2>Classification <strong>of iot devices</strong></h2>
          <g-image src="~/assets/images/iot-classification.svg"/>
        </div>
        <div>
          <div>
            <g-image src="~/assets/images/vision-embedded-systems.svg"/>
            <div>
              <h3>Embedded iot systems</h3>
              <p>Such systems have no user interfaces and typically used at the lowes level of the IoT ecosystems to
                provide basic functionality. Have to be energy efficient and small. Have limited computing and
                communication resources. IoT gateways or controllers are usually act as signal receivers.</p>
            </div>
          </div>
          <div>
            <g-image src="~/assets/images/vision-edge-systems.svg"/>
            <div>
              <h3>EDGE-SYSTEMS: IOT GATEWAYS AND CONTROLLERS</h3>
              <p>These systems act as a link between locally accessible embedded systems and the global Internet. They
                typically support multiple communication protocols of embedded systems and transfer telemetry from
                devices to the cloud and control signals backwards. Often these devices are more sophisticated version
                of the WiFi router, equipped ith a single board computer to perform primary processing of information
                from devices without leaving the local network.</p>
            </div>
          </div>
          <div>
            <g-image src="~/assets/images/vision-autonomous-systems.svg"/>
            <div>
              <h3>autonomous systems</h3>
              <p>This class includes complex automata (such as Spot from Boston Dynamics), which have a control
                component on the level of a full computer with a high-performance processor and a large amount of
                memory. In such cases, the robot is connected to the Internet without additional intermediate solutions
                (edge-systems). The necessary software for accessing the Internet of Things is installed directly on the
                computer of the stand-alone system. Data is collected and partially processed locally, then broadcast
                to the Internet similar to any full-fledged network device.</p>
            </div>
          </div>
        </div>
      </section>

      <hr/>

      <section class="architecture-iot-providers layout layout__content animate-inside" v-in-viewport.once>
        <div class="grid-2">
          <div>
            <h3>internet of things providers</h3>
            <article class="hyphens">
              <g-image src="~/assets/images/vision-iot-providers.svg"/>
              <p>
                The main job of IoT providers is providing users with remote access to data and analytics, as well as
                management of smart devices over the Internet. The main criteria for the quality of the provider is
                security of operations, stability of connection and availability of the provider from anywhere in the
                world.</p>
              <p>The standard scheme for working with an IoT provider includes: installing software on a compatible
                with the cloud smart device, setting up cloud-side management services after the first successful
                connection of a device, connection of various kinds of analytical services.</p>
            </article>
          </div>
          <div>
            <h3>digital twins are the heart of the internet of things</h3>
            <article class="hyphens">
              <g-image src="~/assets/images/vision-digital-twin-small.svg"/>
              <p>Speaking of digital twins, it should be noted that architecturally their implementation is required;
                as a refusal to give the user direct access to control devices and change their states. Out of the most
                obvious reasons for rejection are, first, the presence of their own requirements and conditions in the
                devices just before the launch. Second, if multiple user devices must access a single data source,
                giving personalized control to each user can be critical. Lastly, it is extremely useful to keep the
                last actual state of the device available in case it goes out of operation.</p>
              <p>As a result, we have a separation of the loop of information exchange with the user and the actual
                generation of actual data by the sensors. To illustrate this principle, below is the process of the
                user working with an IoT device using a digital twin.</p>
            </article>
          </div>

        </div>
      </section>

      <hr/>

      <section class="architecture-data-flows layout layout__content animate-inside" v-in-viewport.once>
        <article class="hyphens">
          <h3>iot data flows in cloud services</h3>
          <div class="grid-2">
            <g-image src="~/assets/images/vision-data-flows-1.svg"/>
            <div>
              <p>1.</p>
              <p>1. Input values for cloud triggers. For example, the cloud service sends various notifications to the
                user in the event of a report from a car alarm sensor about a strike.</p>
            </div>
          </div>
          <div class="grid-2">
            <g-image src="~/assets/images/vision-data-flows-2.svg"/>
            <div>
              <p>2.</p>
              <p>Output data for complex analytics that cannot be produced at the edge level. For example, when
                processing video for face recognition in a crowd.</p>
            </div>
          </div>
          <div class="grid-2">
            <g-image src="~/assets/images/vision-data-flows-3.svg"/>
            <div>
              <p>3.</p>
              <p>The basis for forming a digital twin of the device in order to create a cast of its state. For
                example, at the user’s request in the mobile app or on the website.</p>
            </div>

          </div>
        </article>
      </section>

      <hr/>

      <section class="architecture-data-flows layout layout__content animate-inside" v-in-viewport.once>
        <article class="hyphens">
          <h3>popular examples of iot solutions</h3>
          <div class="grid-2">
            <g-image src="~/assets/images/vision-data-flows-4.svg"/>
            <div>
              <p>1.</p>
              <p>A typical smart home system provides a wide range of options for controlling your living space. With its help you can remotely control the door locks, setting up one-time or regular access to the room as family and friends, and for maintenance or delivery personnel. With numerous sensors and recording devices, the system is able to include video recording when triggering motion sensors, autonomously make decisions to shut off the water supply when a leak is detected in the water system, start a scheduled robot vacuum cleaner, providing a cleaning report to the user app, change the room temperature to the optimal value depending on your schedule.</p>
            </div>
          </div>
          <div class="grid-2">
            <g-image src="~/assets/images/vision-data-flows-5.svg"/>
            <div>
              <p>2.</p>
              <p>Smart cars. Providing the car’s onboard electronics with access to mobile Internet, the user gets access to remote control of various car functions directly from his smartphone: opening doors, turning on the air conditioner, controlling the headlights. If such cars are used for carsharing, then you can create an interactive map of the location of cars with their status, the remaining fuel, etc. for the clients of this service.</p>
            </div>
          </div>
          <div class="grid-2">
            <g-image src="~/assets/images/vision-data-flows-6.svg"/>
            <div>
              <p>3.</p>
              <p>Smart equipment leasing system. The company installs robotic manipulators on the conveyor line under a contract with payment for the number of operations or for the time of the robot. Manipulators regularly provide a log of operations performed, errors and warnings. The robot’s leasing fee is calculated on the basis of this, as well as the vendor’s predictive maintenance of the robots.</p>
            </div>
          </div>
        </article>
      </section>

      <hr/>

      <section class="architecture-current-problems layout layout__content animate-inside" v-in-viewport.once>
        <article class="hyphens">
          <div>
            <h2><strong>current problems</strong><br/> of building IoT solutions</h2>
            <h3>global availability</h3>
            <article class="hyphens">
              <p>The standard client-server architecture requires specifying endpoints when routing messages from IoT devices. Thus, during the life of a smart device, the lack of connection will mean a limitation in the ability to control and interact with the device.</p>
              <p>For example, the trade war between China and the United States is already a sword of Damocles hanging over thousands of consumers of Chinese smart appliances in the United States and vice versa. At any moment, the blocking of Xiaomi servers by the U.S. authorities could affect users of devices that connect to the manufacturer’s cloud services.</p>
              <p>Being in the immediate vicinity of an IoT device, you can’t control it from a mobile app if there is no connection to the servers, through which the user authentication and telemetry collection from the devices themselves are provided. That is, the device is actually controlled by the cloud, not the user.</p>
            </article>
            <h3>CYBERSECURITY</h3>
            <article class="hyphens">
              <p>The most important reason for the low cybersecurity of most IoT solutions stems from the problematic legacy of cloud client-server architecture. For example, the most common smart home architecture right now is usually an IoT hub, connected to a cloud service. Thus, a typical IoT system is a central control element connected to multiple external systems. Certainly, the cloud service is more secure than low-level devices, but the consolidation of centralized control over hundreds of thousands of such systems makes any security breaches and leaks a massive disaster.</p>
              <p>The cloud service servers are subject to all the typical cybersecurity problems: network attacks, DoS attacks (driving the system to failure), malicious modifications, user session hijacking, etc. But strong threats also include unintentional problems such as design errors, misuse or natural disasters that cause servers to fail. Also another definitely important point is the need in principle to trust the cloud and the people who maintain it.</p>
              <p>All of this is exacerbated by the scale of IoT solutions. The number of IoT devices belonging to the same system can exceed hundreds or thousands, and at the same time by their nature IoT devices have less computing power, which makes it much more difficult to deploy firewalls and anti- viruses for them. Unfortunately the most pernicious factor is the fact that IoT devices are functioning CPSs, so threats to cybersecurity a real ready manifested at the physical level.</p>
            </article>
          </div>
          <div>
            <h3>data privacy</h3>
            <article class="hyphens">
              <p>The privacy point needs to be separated from cybersecurity, because this problem is specific to IoT systems. Due to the large number and varied device types that are much more integrated into the physical world than just computers and smartphones, the range of types of private data is multiplied. It’s no longer just GPS location, shopping records, financial transactions and photos, but also a permanent record of video and conversations, voice prints, health conditions and even a list of a person’s habits. Among the types of threats related to privacy are:</p>
              <p>The creepiest part is that users have little or no awareness that they are giving up their privacy because they have almost no idea what data is being collected and how it is being used. The threat to privacy grows not only from intruders, but also from organizations and government agencies precisely because of this. The cloud IoT services typically require maximum data transfer from devices, and there are no ways to prohibit or narrow data transfer («Accept the Terms or Piss Off»). Moreover, despite the fact that the collected data is an asset and has real value, the person it is collected from is not only denied the right to actively dispose of that data, but even is denied any compensation for their own data’s collection and usage.</p>
            </article>
          </div>
        </article>
      </section>

      <section class="architecture-main-tasks section__solid section__blue-lightest animate-inside" v-in-viewport.once>
        <div class="layout layout__content">
          <article class="hyphens">
            <h2><strong>main tasks</strong><br/>of robonomics architecture</h2>
            <p>Building on the achievements and challenges of cloud platforms, Robonomics aims to offer the IoT market safer and more advanced Internet solutions at every stage of human-machine communication. Below are the main tasks that Robonomics is aimed at:</p>
            <div>
              <h3>1 >> </h3>
              <h3>MANAGING AN IOT DEVICE USING A DECENTRALIZED CLOUD</h3>
            </div>
            <p>Blockchain networks have all the capabilities to provide the highest degree of security for running a device and getting its telemetry. The interaction with the device can actually be described by changing the state of the digital twin stored in the blockchain network and sending information about these changes. In the case of a permissionless blockchain, we can talk about the guarantees of global availability of providers for IoT, as well as a high level of protection of digital twin data from unwanted changes.</p>
            <div>
              <h3>2 >> </h3>
              <h3>PERFORMING TECHNICAL AND ECONOMIC TRANSACTION BETWEEN PEOPLE AND MACHINES</h3>
            </div>
            <p>Thanks to the mechanism of cryptocurrencies and smart contracts, we can provide access to automated systems directly to digital markets. For example, Ethereum already implements most of the basic tools of economic activity that can be used in the operation of autonomous devices. The applications created for the interaction between the end user and the IoT device will be much more effective if the terms of service and payment for it are inseparable from the launch parameters of the device.</p>
            <div>
              <h3>3 >> </h3>
              <h3>ERVERLESS IOT APPLICATIONS FOR USERS</h3>
            </div>
            <p>Modern advances in web3-technology can solve the issue of user privacy. With web3 there is no need to authenticate or require connection to specific servers to access telemetry and control the device.</p>
          </article>
          <div>
            <g-image src="~/assets/images/vision-main-tasks.svg"/>
            <p>Robonomics is a decentralized cloud for digital twins of IoT devices. Robonomics supports the
              techno-economic format for communication, as well as providing private applications for users</p>
          </div>
        </div>
      </section>

      <hr class="no-margins"/>

      <section class="architecture-basic-components section__solid section__blue-lightest animate-inside" v-in-viewport.once>
        <div class="layout layout__content">
          <h2><strong>basic components</strong><br/>of robonomics architecture</h2>
          <div class="grid-2">
            <div class="grid-3">
              <g-image src="~/assets/images/vision-basic-components-1.svg"/>
              <g-image src="~/assets/images/vision-basic-components-2.svg"/>
              <g-image src="~/assets/images/vision-basic-components-3.svg"/>
              <div>
                <div><h2>1.</h2></div>
                <p>A human interface to access the system</p>
              </div>
              <div>
                <div><h2>2.</h2></div>
                <p>A communication protocol</p>
              </div>
              <div>
                <div><h2>3.</h2></div>
                <p>A machine interface</p>
              </div>
            </div>
            <article class="hyphens">
              <div>
                <h3>1 >> </h3>
                <h3>human interface:</h3>
              </div>
              <p>We propose the use of decentralized applications (dapps) as the main way to connect users to control smart devices over the Internet. Thus, we will be able to provide the most secure (in terms of data) user interface to the system, which will be able to simultaneously work in the conditions of the local city network, and through a common global network.</p>
              <div>
                <h3>2 >> </h3>
                <h3>communication protocol:</h3>
              </div>
              <p>Its role is played by the Robonomics network, a specification developed by the project team that implements a decentralized network of providers that provide the transmission, processing and storage of information needed to run IoT devices. In fact, it is an implementation of a function-specific node for IPFS, Ethereum, and Polkadot networks.</p>
              <div>
                <h3>3 >> </h3>
                <h3>machine interface:</h3>
              </div>
              <p>We have chosen the most well-known robotics framework called Robot Operating System Robot Operating System (ROS) as the standard interface for integrating any compatible cyber-physical system. Robonomics supports several uses for ROS. The implementation of Robonomics for the Ethereum network is in the form of the ROS package robonomics_comm. For the ROS 2 architecture, we implement support for Robonomics as a middleware layer (see «Robonomics as ROS 2 Middleware» for details). When the use of ROS is redundant (e.g., when working with IoT devices), a Python robonomics-interface module has been developed. It helps to access the functions of Robonomics natively and works with both local and private and remote and public nodes.</p>
            </article>
          </div>
        </div>
      </section>

      <hr class="no-margins"/>

      <section class="architecture-simple-representation section__solid section__blue-lightest animate-inside" v-in-viewport.once>
        <div class="layout layout__content">
          <h2><strong>A simple representation</strong><br/>of robonomics architecture</h2>
          <div class="grid-2">
            <div>
              <p>Here is a general diagram of the complete device startup cycle using the Robonomics platform:</p>
              <ol>
                <li>The user’s decentralized application sends a request for a device control function through the Robonomics network.</li>
                <li>The Robonomics network provides request translation using libp2p and captures events in Ethereum blockchain or Robonomics parachain.</li>
                <li>The control of the device is provided by a decentralized network, which is guaranteed to store the necessary information to run the IoT device.</li>
                <li>The IoT device independently receives information from Ethereum and Polkadot networks about the current state of the digital twin. This ensures that the device can be started safely only after the technical and economic start-up parameters have been settled.</li>
                <li>As a result of the operation, the IoT device publishes a log of completed operations, which can be used as evidence of the service provided or for debugging errors.</li>
                <li>The log is transformed into a report for the user and becomes available in his dapp.</li>
              </ol>
            </div>
            <g-image src="~/assets/images/vision-simple-representation.svg"/>
          </div>

        </div>
      </section>

    </div>

  </layout>
</template>

<script>
export default {
  name: "architecture",

  components: {
    MetaInfo: () => import ("~/components/MetaInfo.vue")
  }
}
</script>

<style scoped>

  .architecture article,
  .activity h2,
  .architecture h3
  {
    text-align: left;
  }

  @media screen and (max-width: 1100px) {
    .text-col-3 {
      column-count: 1;
    }
  }

  /* VISION Fathers */

  .vision-fathers a {
    color: var(--color-dark)
  }

  @media screen and (min-width: 1100px) {
    .vision-fathers {
      display: grid;
      grid-template-columns: 500px 1fr;
    }
  }

  @media screen and (min-width: 1500px) {
    .vision-fathers article {
      column-count: 2;
    }
  }

  @media screen and (max-width: 1100px) and (min-width: 560px) {
    .vision-fathers {
      column-count: 2;
      column-gap: var(--space);
    }
  }

  .vision-fathers-image {
    max-width: 550px;
    text-align: left;
  }

  .vision-fathers-image img {
    display: block;
    width: 80%;
    margin: var(--space) auto var(--space)
  }

  .vision-fathers-image h2 {
    text-align: left;
    margin: 0 0 calc(var(--space) / 2);
  }

  /* Architecture banner */

  .architecture-banner {
    background-image: radial-gradient(circle at 80%, #AB02AC, #F25206 70%);
    color: #fff;
    padding-top: calc(var(--space) * 3);
    padding-bottom: calc(var(--space) * 3);
    overflow: hidden;
    position: relative;
  }

  .architecture-banner h1 {
    text-align: left;
  }

  .architecture-banner article {
    max-width: 50%;
    position: relative;
    z-index: 2;
  }

  .architecture-banner .bg {
    position: absolute;
    bottom: -20px;
    left: 55%;
    z-index: 1;
    height: 100%;

  }
  .architecture-banner .bg img {
    display: block;
    max-width: 1400px;
    width: auto;
    height: 100%;
  }

  @media screen and (max-width: 1000px) {
    .architecture-banner .bg {
      position: relative;
      bottom: -8rem;
      left: 10%;
      height: auto;
    }
    .architecture-banner .bg img {
      height: auto;
      width: 80%;
    }
    .architecture-banner article {
      max-width: 100%;
    }
  }

  /* Digital twin */

  .architecture-digital-twin {
    grid-template-columns: 1fr 1fr;
  }

  .architecture-digital-twin img {
    display: block;
    text-align: left;
    padding-left: var(--space);
    width: 100%;
    max-width: 1000px;
  }

  @media screen and (max-width: 1000px) {
    .architecture-digital-twin {
      grid-template-columns: 400px 1fr;
      column-gap: calc(var(--space) * 2);
    }
  }

  @media screen and (max-width: 1100px) {
    .architecture-digital-twin p:first-child {
      margin-top: var(--space);
    }
  }

  @media screen and (min-width: 1100px) {
    .architecture-digital-twin {
      display: grid;
      grid-template-columns: 500px 1fr;
      column-gap: calc(var(--space) * 2);
    }
  }

  @media screen and (min-width: 1500px) {
    .architecture-digital-twin {
      grid-template-columns: 700px 1fr;
    }
    .architecture-digital-twin article {
      column-count: 2;
    }
  }

  @media screen and (max-width: 1100px) and (min-width: 560px) {
    .architecture-digital-twin {
      column-count: 2;
      column-gap: var(--space);
    }
  }

  /* IoT classification */

  .architecture-iot-classification {
    grid-template-columns: 1fr 1fr;
  }

  .architecture-iot-classification h3 {
    font-size: 1.75rem;
    font-weight: 700;
    padding-right: 10px;
    padding-bottom: 5px;
    text-align: left;
    display: inline;
    background-color: var(--color-blue-lighter);
  }

  .architecture-iot-classification h3 ~ p {
    margin-top: calc(var(--space) * 0.5);
  }

  .architecture-iot-classification > div > img {
    padding-top: calc(var(--space) * 4);
    width: 80%;
  }

  .architecture-iot-classification div:nth-child(2) div {
    display: grid;
    grid-template-columns: 2fr 5fr;
    column-gap: var(--space);
    padding-bottom: var(--space);
  }

  .architecture-iot-classification div:nth-child(2) > div img {
    width: auto;
  }

  .architecture-iot-classification div:nth-child(2) div div {
    display: block;
    text-align: left;
  }

  @media screen and (max-width: 800px) {

    .architecture-iot-classification > div > img {
      padding-top: calc(var(--space) * 2);
      width: 80%;
    }

    .architecture-iot-classification div:nth-child(2) div {
      grid-template-columns: 1fr;
    }
    .architecture-iot-classification div:nth-child(2) > div img {
      width: 40%;
      margin-left: auto;
      margin-right: auto;
      padding-top: var(--space);
      padding-bottom: var(--space);
    }
  }

  @media screen and (min-width: 1100px) {
    .architecture-iot-classification {
      display: grid;
    }
  }

  /* IoT providers */

  .architecture-iot-providers h3 {
    font-size: 1.75rem;
    font-weight: 700;
    padding-right: 10px;
    padding-bottom: 5px;
    text-align: left;
    display: inline;
    background-color: var(--color-blue-lighter);
  }

  .architecture-iot-providers article {
    margin-top: var(--space);
    column-count: 2;
  }

  .architecture-iot-providers img {
    width: 80%;
    margin-left: 10%;
  }

  .architecture-iot-providers .grid-2 {
    margin-top: var(--space);
  }

  .architecture-iot-providers .grid-2 div {
    text-align: left;
  }

  @media screen and (max-width: 800px) {
    .architecture-iot-providers > .grid-2 article {
      column-count: 1;
    }
  }

  @media screen and (max-width: 1300px) {
    .architecture-iot-providers > .grid-2 {
      grid-template-columns: 1fr;
    }
  }

  /* Data flows */

  .architecture-data-flows h3 {
    font-size: 1.75rem;
    font-weight: 700;
    padding-right: 10px;
    padding-bottom: 5px;
    text-align: left;
    display: inline;
    background-color: var(--color-blue-lighter);
  }

  .architecture-data-flows div {
    text-align: left;
  }

  .architecture-data-flows article .grid-2 img {
    width: 80%;
    margin-left: 10%;
  }

  .architecture-data-flows article .grid-2 div {
    display: flex;
    flex-direction: row;
    gap: var(--space);
  }
  .architecture-data-flows h3 ~ .grid-2 {
    padding-top: var(--space);
  }

  .architecture-data-flows article .grid-2 {
    grid-template-columns: 1fr 3fr;
  }

  @media screen and (max-width: 1100px) {
    .architecture-data-flows article .grid-2 {
      grid-template-columns: 1fr;
    }
    .architecture-data-flows article .grid-2 > img {
      margin-left: auto;
      margin-right: auto;
      max-width: 50%;
    }

  }

  /* Current problems */

  .architecture-current-problems div {
    text-align: left;
  }

  .architecture-current-problems h2 {
    text-align: left;
  }

  .architecture-current-problems h3 {
    text-align: left;
    width: 100%;
    font-weight: 700;
    line-height: 1.3;
    display: inline-block;
    background-color: var(--color-orange);
    color: var(--color-light);
  }

  .architecture-current-problems article {
    column-count: 2;
  }

  @media screen and (max-width: 1100px) {
    .architecture-current-problems article {
      column-count: 1;
    }

  }

  /* Main tasks */

  .architecture-main-tasks {
    margin-top: 0;
    margin-bottom: 0;
    padding: var(--space);
  }

  .architecture-main-tasks article {
    column-count: 2;
    gap: var(--space);
  }

  .architecture-main-tasks p:not:nth-child(1) {
    margin-top: var(--space);
    margin-left: calc(var(--space) * 3);
  }

  .architecture-main-tasks p {
    margin-left: 0;
  }

  .architecture-main-tasks div {
    text-align: left;
  }

  .architecture-main-tasks h2, .architecture-main-tasks h3 {
    text-align: left;
  }

  .architecture-main-tasks h3 {
    text-align: left;
    margin-block-start: 0;
    margin-block-end: calc(var(--space) * 0.15);
    font-weight: 700;
  }

  .architecture-main-tasks div h3:first-child {
    white-space: nowrap;
  }

  .architecture-main-tasks div h3:not:first-child {
    width: 100%;
  }

  .architecture-main-tasks div ~ p {
    padding-left: calc(var(--space) * 3);
  }

  .architecture-main-tasks article div {
    display: flex;
    flex-direction: row;
    gap: var(--space);
    background-color: var(--color-light);
  }

  .architecture-main-tasks article ~ div {
    margin-top: var(--space);
    width:100%;
    position: relative;
  }

  .architecture-main-tasks article ~ div > img {
    width: 100%;
  }

  .architecture-main-tasks article ~ div > p {
    position: absolute;
    color: var(--color-light);
    width: 26%;
    height: 25%;
    left: 37.5%;
    top: 55%;
  }

  @media screen and (max-width: 1100px) {
    .architecture-main-tasks article {
      column-count: 1;
    }
  }

  @media screen and (min-width: 890px) and (max-width: 1200px){
    .architecture-main-tasks article ~ div > p {
      font-size: 80%;
    }
  }

  @media screen and (max-width: 890px) {
    .architecture-main-tasks article ~ div > p {
      font-size: 70%;
    }
  }

  @media screen and (max-width: 810px){
    .architecture-main-tasks article ~ div > p {
      font-size: 55%;
    }
  }

  @media screen and (max-width: 670px) {
    .architecture-main-tasks article ~ div > p {
      font-size: 45%;
    }
  }

  @media screen and (max-width: 580px) {
    .architecture-main-tasks article ~ div > p {
      font-size: 35%;
    }
  }


  /* Basic components */

  .architecture-basic-components h2, .architecture-basic-components h3 {
    text-align: left;
  }

  .architecture-basic-components h3 {
    text-align: left;
    margin-block-start: 0;
    margin-block-end: calc(var(--space) * 0.15);
    font-weight: 700;
  }

  .architecture-basic-components article div {
    display: flex;
    flex-direction: row;
    gap: var(--space);
    background-color: var(--color-light);
  }

  .architecture-basic-components .grid-3 img {
    width: 90%;
    margin: auto;
  }

  .architecture-basic-components .grid-3 div div {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50px;
    height: 50px;
    background-color: var(--color-light);
    border-radius: 50%;
    position: relative;
  }

  .architecture-basic-components .grid-3 div div h2 {
    position: absolute;
    white-space: nowrap;
    left: 15px;
    letter-spacing: -0.3rem;
  }

  .architecture-basic-components .grid-3 div div ~ p {
    margin-top: calc(var(--space) * 0.5);
  }
  
  @media screen and (max-width: 1100px) {
    .architecture-basic-components .grid-2 {
      grid-template-columns: 1fr;
    }
    .architecture-basic-components .grid-3 {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  /* Simple representation */

  .architecture-simple-representation h2,
  .architecture-simple-representation h3,
  .architecture-simple-representation li,
  .architecture-simple-representation p {
    text-align: left;
  }

  .architecture-simple-representation li {
    padding-left: var(--space);
  }

  .architecture-simple-representation .grid-2 {
    grid-template-columns: 1.5fr 2fr;
  }

  .architecture-simple-representation img {
    width: 100%;
  }

  @media screen and (max-width: 1100px) {
    .architecture-simple-representation .grid-2 {
      grid-template-columns: 1fr;
    }
  }

</style>