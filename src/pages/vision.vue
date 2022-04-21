<template>
  <layout>

    <MetaInfo
      :pageTitle = "$ts('Vision page title')"
      :pageDescription = "'We are experimenters, engineers and scientists. It is important for us not only to develop a solution that is relevant for today, but first to understand the scientific validity of the approach and achieve clarity in the presentation of the principles that should underlie the entire architecture of a software solution.'"
      :pageImage = "'/website_cover_vision.jpg'"
    />

    <div class="page vision">

      <section class="vision-banner page-banner section section__solid section__blue animate-inside" v-in-viewport.once>
        <div class="vision-logo" v-in-viewport.once>
          <g-image class="logo" alt="Robonomics logo" src="~/assets/images/robonomics-logo.svg" />
          <g-image class="earth" alt="Earth" src="~/assets/images/earth.png" />
        </div>

        <h1 class="clean">
          <p>
            <b>Secure</b>
            <b>Serverless</b>
            <b>Futuristic</b>
          </p>
          IoT applications
        </h1>

        <div class="vision-subtitle"><span class="text">{{$ts('Vision page title')}}</span></div>
        <g-image class="vision-city" alt="You'll love the future" src="~/assets/images/city.png" />
        <div class="vision-decortext left">
          $ robonomics io<br/>
          robonomics-io 0.18.0<br/>
          Run I/O actions using Robonomics Framework.<br/><br/>
          USAGE:<br/>
          robonomics io [FLAGS] [OPTIONS] SUBCOMMAND<br/><br/>
          SUBCOMMANDS:<br/>
          help     Prints this message or the help of the given subcommand(s)<br/>
          read     Read information from device<br/>
          write    Write information into device
        </div>

        <div class="vision-decortext right">At the frontier of cybernetics and economics</div>
      </section>

      <section class="vision-iot layout layout__content grid-2 animate-inside" v-in-viewport.once>
        <div class="text-col-2">
          <h2>Build your IoT services on Robonomics platform <sup>*</sup></h2>
          <p><i>* taking full advantage of decentralized architecture</i></p>
          <p class="hyphens">Robonomics allows users to connect to smart devices using decentralized applications (dapp)
            that do not require the user data transfer for authentication. Communication takes place via a decentralized
            network of providers without a single point of failure, and the device independently obtains information
            from the blockchain network to run for execution or transmit data remotely. Thus, Robonomics provides a high
            level of device cybersecurity and user data privacy at all stages of communication from the user application
            to the launch of the smart device.</p>
        </div>
        <div class="vision-iot-pic">
          <div id="parallax-iotapp" aria-hidden="true">
            <div class="parallax-layer" data-depth="0.2"><g-image id="parallax-iotapp-1" alt="" src="~/assets/images/iot-applications-1.png" /></div>
            <div class="parallax-layer" data-depth="0.6"><g-image id="parallax-iotapp-2" alt="" src="~/assets/images/iot-applications-2.png" /></div>
            <div class="parallax-layer" data-depth="0.3"><g-image id="parallax-iotapp-3" alt="" src="~/assets/images/iot-applications-3.png" /></div>
            <div class="parallax-layer" data-depth="0.5"><g-image id="parallax-iotapp-4" alt="" src="~/assets/images/iot-applications-4.png" /></div>
            <div class="parallax-layer" data-depth="0.9"><g-image id="parallax-iotapp-5" alt="" src="~/assets/images/iot-applications-5.png" /></div>
            <div class="parallax-layer" data-depth="0.9"><g-image id="parallax-iotapp-6" alt="" src="~/assets/images/iot-applications-6.png" /></div>
            <div class="parallax-layer" data-depth="0.9"><g-image id="parallax-iotapp-7" alt="" src="~/assets/images/iot-applications-7.png" /></div>
          </div>
        </div>
      </section>

      <section class="vision-beginning section__solid animate-inside" v-in-viewport.once>
        <div class="layout layout__content">
          <div class="hyphens vision-beginning-text">
            <h2>From smart contracts to cross chain IoT platform</h2>
            <p>The Robonomics project is over 6 years old. We started to prepare for the first experiment demonstrating
              human-machine communication using an independent decentralized provider network in 2015, from the early
              days of the Ethereum network. By early 2021, the project team managed to create a techno-economic machine
              communication protocol running on top of Ethereum and IPFS, and complement it with elements of a
              cloud-based IoT platform based on the Polkadot parachain.</p>
            <p>As a result, today, we already have a hybrid platform for creating futuristic IoT applications that
              enable interaction with devices under the control of a global decentralized computer.</p>
          </div>
        </div>

        <g-link class="vision-beginning-link" to="https://youtu.be/V_3rcP2Duv0"><g-image alt="Youtube video" src="~/assets/images/youtube.png" /></g-link>
        <g-image aria-hidden="true" class="bg" alt="" src="~/assets/images/wintercoding.png" />
      </section>

      <section class="vision-cybernetics section__solid animate-inside" v-in-viewport.once>
        <div class="layout layout__content">
          <article>
            <h2>At the frontier of cybernetics and economics</h2>
            <p class="hyphens">The creators of Robonomics are experimenters, engineers, and scientists who care to
              understand the scientific validity of the approach and achieve clarity in presenting the principles that
              should form the basis of the entire architecture of the software solution.</p>
            <p class="hyphens">In our articles between 2017 and 2020, we presented the scientific community with many
              concepts and solutions united around the idea of the robot economy, an economic system in which robotic
              devices act as independent agents capable of performing key economic activities, previously reserved for
              humans. You can read the scientific articles at <g-link to="/community#science">this link</g-link>.
            </p>
            <p class="hyphens">We would like to justify the emergence of the robot economy and explain in general terms
              why we believe that this concept is the inevitable and obvious answer to the functioning of the
              large-scale robotic systems of the new industrial revolution.</p>
          </article>
          <div class="bg" aria-hidden="true"><g-image alt="" src="~/assets/images/cybernetics-girls.png" /></div>

          <MovingNumbers />
        </div>
      </section>

      <section class="vision-fathers layout layout__content animate-inside" v-in-viewport.once>

        <div class="vision-fathers-image">
          <h2>Move Towards the Factory of the Future</h2>
          <i>Inspired by Ronald Coase</i>
          
          <g-image alt="" src="~/assets/images/person-ronald-coase.png" style="margin-top: 0"/>
        </div>

        <article class="hyphens">
          <p>The Nobel laureate in economics Ronald Coase in his 1937 work “The Nature of the Firm” best demonstrated
            the dichotomy «hierarchy vs free market» and gave an explanation of the reasons for the existence of
            organizations, in particular firms. Coase discusses the impact of transaction costs (the cost of collecting
            and processing information) to make decisions about the conclusion of a contract and to monitor its
            implementation. The firm, with all its hierarchical extra-market structure, is formed as the most efficient
            way to provide the consumer with the target product with the lowest transaction costs at the moment, when
            the transactional effort to create the same product through multiple exchanges on the market between
            individuals becomes much higher. To best visualize this process, look at the illustrative example of buying
            a car. Try to buy a car by the parts and calculate how much money and time you will spend just to assemble
            all the components in your garage. The risks and negotiation costs of buying parts are too high compared to
            Tesla’s off-the-shelf Model X.</p>
          <p>Nevertheless, this does not lead to the emergence of the world’s only firm for the production of
            everything. The point is that the same transaction costs also impose restrictions on the size of firms.
            Coase writes:</p>
          <p class="vision-fathers-callout">“...a firm will tend to expand until the costs of organising an extra
            transaction within the firm become equal to the costs of carrying out the same transaction by means of an
            exchange on the open market...”</p>
          <p>In other words, the more complex the hierarchy within the firm, the greater the internal costs, and at some
            point, they turn out to be excessive compared to the costs of returning to the market. Therefore, to ensure
            their growth as one of the drivers, entrepreneurs are looking for ways to reduce these costs.</p>
        </article>

      </section>

      <hr/>

      <section class="vision-fathers vision-cps layout layout__content animate-inside" v-in-viewport.once>

        <div class="vision-fathers-image">
          <h2>Automation in the supply chain</h2>
          <g-image src="~/assets/images/industry-4-0-robonomics.png" />
        </div>

        <article class="hyphens">
          <p>The key element in setting up of interaction among various related automated components within robotics and
            lights-out manufacturing is the idea of cyber-physical system (CPS).</p>
          <p>It is interesting to note that сyber-physical system is the principle idea behind the implementation of
            Industry 4.0 solutions. This is what the future of our life in Smart Cities looks like: autopilot taxi on
            your phone, drone selfie in the park for Instagram, subscription to air pollution data from thousands of
            local sensors, a network of 3D printers at metro stations, your home robot Rosie with access to Amazon, a
            smart factory that can rebuild the production cycle autonomously or work directly with the customer.</p>
          <p>CPS is a complex structure of many connected elements: from the app on the phone, it extends to controlling
            the drone in flight over the city, and then proceeds to publishing the resulting photos to Instagram, but
            only after processing by cloud AI.</p>
          <p>The most important thing in the CPS design process is to find the fine line between sufficient and
            excessive number of automated elements in the service user supply chain. In other words, where is the size
            limit of the CPS? To answer this question, we should turn to the famous mathematician Norbert Wiener.</p>
        </article>
        

      </section>

      <hr/>

      <section class="vision-fathers layout layout__content animate-inside" v-in-viewport.once>

        <div class="vision-fathers-image">
          <h2>Self-regulating systems</h2>
          <i>Inspired by Norbert Wiener</i>
          
          <g-image alt="" src="~/assets/images/person-norbert-wiener.png" />
        </div>

        <article class="hyphens">
          <p>In 1948 a professor of mathematics at the MIT Norbert Wiener published one of the most seminal works
            "Cybernetics: Or Control and Communication in the Animal and the Machine". He used the term "cybernetics" as
            self-regulating mechanisms for the first time and, so, this publication is considered a recognized
            Cybernetic birthday.</p>
          <p>Norbert Wiener speaks about viability of interdisciplinary science approach. For example he drew the
            parallels between automated control systems and challenges of scaling and complexity increasing of human
            society.</p>
          <p>So, in other words, the cybernetic approach can be applied equally to psychotherapy, biology and automated
            navigation.
            It is based on the function of the system, how the individual actions are controlled and how the individual
            nodes interact with each other.</p>
          <p>Taking into account Ronald Coase's and Norbert Wiener's publications, following up the development of
            Industry 4.0, we can consider using CPS as an economic agent, while designing robotized services. To
            regulate the size of the CPS and adapt to the changing needs of the individuals we can use market
            mechanism.</p>
          <p>And what’s so scientifically interesting, taking as a basis the idea of the restrictions imposed by the
            market on the size of the firm, we can say that the limit of the increase in CPS will always be determined
            by the market and nothing else is required for this.</p>
          <p>Robofirms are an ideal representation for cyber-physical systems.
            They are a fairly autonomous unit capable of providing services to both humans and other robots for money.
            As a result, the robot economy appears to us to be a general set of CPSs that provide services and goods
            directly to the market.</p>
        </article>


      </section>

      <section class="vision-industry40 section__solid section__lightblue animate-inside" v-in-viewport.once>
        <div class="layout layout__content">
          <div>
            <h2>
              <b>Bitcoin</b> 
              & Industry 4.0
            </h2>

            <div class="industry40">
              <div>
                <g-image aria-hidden="true" src="~/assets/images/industy-1.png" />
                <div class="text">
                  <h5>Industry 1.0</h5>
                  <small>Mechanization: <br/>replacement of muscle power with steam energy.</small>
                  <small class="text-color-blue">1784 г.</small>
                </div>
              </div>

              <div>
                <g-image aria-hidden="true" src="~/assets/images/industy-2.png" />
                <div class="text">
                  <h5>Industry 2.0</h5>
                  <small>Electrification: <br/>introduction of assembly-line production.</small>
                  <small class="text-color-blue">1870 г.</small>
                </div>
              </div>

              <div>
                <g-image aria-hidden="true" src="~/assets/images/industy-3.png" />
                <div class="text">
                  <h5>Industry 3.0</h5>
                  <small>Automation: <br/>introduction of automated systems with CNC.</small>
                  <small class="text-color-blue">1969 г.</small>
                </div>
              </div>

              <div>
                <g-image aria-hidden="true" src="~/assets/images/industy-4.png" />
                <div class="text">
                  <h5>Industry 4.0</h5>
                  <small>Smart production: <br/>development of cyber physical systems.</small>
                  <small class="text-color-blue">Now</small>
                </div>
              </div>
            </div>

          </div>

          <div class="robot hyphens text-col-2">
            <p>In the world of robofirms it turns out to be natural to provide robots with access to social institutions
              that previously were only needed by humans.</p>
            <p>Social institutions do not appear because we are people and physiologically a person cannot live without
              banks, contracts, and other instruments of society. But only because a person, at some point in time,
              entered the path of more complex relations in society and took an important step towards accelerating the
              processes of those around us.</p>
            <p>Money and contracts should become available to robots, not because this is a sick fantasy of robot fans
              who have forgotten what Skynet is. But only because the new industrial revolution sets itself the task of
              building complex automated chains, the processes in which will affect the exchange of both technical
              information and economic information, and will also proceed at a speed inaccessible to humans.</p>
            <g-image aria-hidden="true" src="~/assets/images/robot-w-bitcoin.png"/>
          </div>
        </div>
      </section>

      <section class="vision-bitcoin animate-inside" v-in-viewport.once>
        <div class="layout layout__content hyphens text-col-3">

          <p>One of the examples of our experiments: negotiating road space and right of way payments for autonomous
            vehicles to reduce congestion. What a person would absolutely not do in traffic, the car will do for you
            without difficulties: you want to switch lanes, your car and your neighbor's car exchange offers on the cost
            of such an operation at a rate of hundreds msgs per second, they will reveal an equilibrium price, and so
            you are already in the next faster moving lane. This means that now it will become available to “charge”
            your ride with uber and make it faster.</p>
          <p>Robots need money that will be directly available to them in order to be able to perform operations without
            a person at the speed with which only machines can make decisions. And all this is solely for a person to
            enjoy life in the Smart City!</p>
          <p>And here we smoothly come to the first electronic cash - Bitcoin. The fact that Bitcoin can be stored in
            your account on the principle of not a bank, but cash in your wallet makes it the first money that the robot
            can manage independently, more precisely autonomously. At the same time, today we can already say that
            Bitcoin is not just electronic cash, but a truly global financial institution.</p>
          <p class="vision-bitcoin-conslution">As a result: an event not invented by us, but clearly falling into our
            vision, makes Bitcoin the first money for robots, or, if we look even deeper, it is precisely that social
            institution that will help the formation of robotic firms.</p>

          <g-image aria-hidden="true" src="~/assets/images/vision-bitcoin-robots.png"/>
        </div>
      </section>

      <hr/>

      <section class="layout layout__content animate-inside" v-in-viewport.once>
        <div class="text-col-3">
          <h2>
            <b>Smart contracts</b><br/>
            Ethereum
          </h2>
          <p class="hyphens">Bitcoin became the first money available to robots. Meanwhile we can't talk about Bitcoin
            in its current form as a tool for full-fledged technical and economic exchange.</p>
          <p class="hyphens">
            Now we already have smart contracts, DeFi markets and a decentralized infrastructure for exchanging messages
            between robots that
            open up the possibility for humanity to create a fully automated part of the human economy - the robot
            economy.
          </p>
          <p class="hyphens">
            One of the great opportunity to build the economy of robots is
            <g-link to="https://ethereum.org/">Ethereum</g-link>
            technology. With Ethereum functionality
            robots are able not only exchange money, but to enter into contracts with humans and among themselves.
          </p>
          <p class="hyphens">
            But what's the point of machine to machine (m2m) contract based communication? That's a great question!
            Let's go back to CPS. When we talk about direct communications between sensors, machine equipment or any
            other elements
            we still talk about collaboration within one regulated system.
            But if we want smart cities services to be alive (or even smart home in some cases), we need establish
            communication with various third-party elements.
          </p>
          <p class="hyphens">
            Let's imagine drone delivery service. If a drone, for example, is DHL's property how it can access to
            Amazon's warehouses or access to over the entire airspace of the city? Is it be a monopoly? This is a major
            challenge for many 4th industrial revolution initiatives!
          </p>
          <p class="hyphens">
            Most corporations say they need nearly complete rights to its surroundings because they don’t know how to
            securely set up the exchange of technical information between automated systems outside of their own
            internal corporate structure.
            At the same time, if you look at the processes where a person works, then we see that the cooperation of
            different corporations has been long and successfully existed.
            You can easily order door-to-door delivery of purchased goods on the Amazon website, and the courier will be
            able to drive a car along city roads, receive an order at the warehouse and bring it to you.
          </p>
          <p class="hyphens">
            What's the difference? In the first case there is no way to build a contractual relationship between
            machines, and in the second case, in the world of people, contractual relations already exist.
          </p>
          <g-image alt="" src="~/assets/images/vision-ethereum.png" />
        </div>
      </section>

      <hr/>

      <section class="layout layout__content animate-inside" v-in-viewport.once>
        <div class="text-col-3">
          <h2>
            <b>Parachains</b><br/>
            Polkadot
          </h2>
          <p class="hyphens">
            The main difficulty that Robonomics faces today is the high price for launching an IoT device using
            Ethereum.
            In Ethereum you have to pay a commission on each transaction in terms of US dollars in the range of $10 to
            $100.
            It is quite expensive for most cases from the real economy, be it a car-sharing trip, renting a smart
            apartment, drone delivery or 3D printing of your favorite anime hero to order.
          </p>
          <p class="hyphens">
            Out of fairness, we would like to note that there are profitable scenarios even with transaction fees in the
            Ethereum network of 2018 - 2019. For example, automated carbon footprint offset transactions or transferring
            the order from the website directly to the production.
            But still, for the mass application of the web3 technologies in the field of IoT, a reduction in the price
            that the cloud charges from the connected device is required.
          </p>
          <p class="hyphens">
            Looking for an opportunity to reduce the cost of interacting with an IoT device, Robonomics developers have
            studied alternative developments to Ethereum.
            Our choice settled on the
            <g-link to="https://polkadot.network">Polkadot</g-link>
            architecture, which would allow us to run our own blockchain, within a common network, in which security is
            ensured by validators independent of our project.
          </p>
          <g-image alt="" src="~/assets/images/vision-polkadot.png"/>
        </div>
      </section>

      <section class="vision-chains section section__solid animate-inside" v-in-viewport.once>
        <div class="layout layout__content">

          <div class="grid-2" v-in-viewport.once>
            <div>
              <g-image src="~/assets/images/vision-chains-polkadot.svg"/>
              <h2>Polkadot</h2>
            </div>
            <div>
              <h2>Ethereum 2.0</h2>
              <g-image src="~/assets/images/vision-chains-etherium.svg"/>
            </div>
          </div>
          <div class="grid-2">
            <div>
              <p>Heterogeneous Blockchain Network</p>
              <g-image src="~/assets/images/vision-chains-parachain.svg"/>
            </div>
            <div>
              <p>Homogeneous Shard Network</p>
              <g-image src="~/assets/images/vision-chains-shard-network.svg"/>
            </div>
          </div>
          <div class="grid-2">
            <div>
              <p>On-chain protocol control</p>
              <g-image src="~/assets/images/vision-chains-polkadot-hammer.svg"/>
            </div>
            <div>
              <p>Protection against the tyranny of the crowd</p>
              <g-image src="~/assets/images/vision-chains-tyranny.svg"/>
            </div>
          </div>
          <div class="grid-2">
            <div>
              <p>Auction of bandwidth in the common network</p>
              <g-image src="~/assets/images/vision-chains-auction.svg"/>
            </div>
            <div>
              <p>Payment for gas by users</p>
              <g-image src="~/assets/images/vision-chains-gas-payment.svg"/>
            </div>
          </div>
        </div>
      </section>

      <section class="vision-fathers layout layout__content animate-inside" v-in-viewport.once>

        <div class="vision-fathers-image">
          <h2>open questions of teleology</h2>
          <i>Inspired by Norbert Wiener</i>

          <g-image alt="" src="~/assets/images/person-lugwig-von-mises.svg"/>
        </div>

        <article class="hyphens">
          <p>One extremely popular question that still remains open — the purposefulness of
            robots when providing services to people. This is a specific but academically important question. The fact
            is that human economics often includes factors related to the good faith performance of tasks in a contract,
            the desire of the parties to achieve a result, and the opportunistic and altruistic behavior of the
            individual in society. It is difficult to talk about such issues in robotics today, so the developers of
            Robonomics would like to leave teleological issues open for further study, and focus their attention on the
            praxeological part of robots’ behavior as economic agents. Regarding goal setting, an early article by
            Norbert Wiener and his colleagues “Behavior, Purpose and Teleology”, as well as the work of the American
            economist and philosopher Ludwig von Mises on human activity can be considered as points of reference.</p>
          <br>
          <p>Mises, in his book <strong>«Human Action: A Treatise of Economics»</strong>, looks at the human being in economics from a
            praxeological perspective. Praxeology gives us an interesting insight into human behavior without a direct
            correlation to the ultimate goal. By continuing to study the phenomena in human economics from the
            perspective of the processes themselves, separated from the end goals, we can understand more about the
            framework that can be formed for a robot economy, so as not to delve into questions of machine teleology.</p>
        </article>


      </section>

<!--   TODO move the following code to /src/pages/architecture.vue   -->

<!--  TODO moving up to here -->
      
      <section class="section section__solid section__darkgray">
        <div class="vision-books layout layout__content">
          <div>
            <h2>Have you read this?</h2>
            <p class="layout__text"><i>Great books lead to great ideas. If you're after more inspiration about
              human-machine communication, try reading science fiction books. Mark the books you’ve already read and see
              what else can we offer you for further reflection.</i></p>
            <div class="vision-books-books">
              <div class="book" @click="markBook($event)">
                Do Androids Dream of Electric Sheep?
                <small>Philip K. Dick</small>
                <span></span>
              </div>

              <div class="book" @click="markBook($event)">
                Autofac
                <small>Philip K. Dick</small>
                <span></span>
              </div>

              <div class="book" @click="markBook($event)">
                I, Robot
                <small>Isaac Asimov</small>
                <span></span>
              </div>

              <div class="book" @click="markBook($event)">
                The Bicentennial Man
                <small>Isaac Asimov</small>
                <span></span>
              </div>

              <div class="book" @click="markBook($event)">
                Neuromancer
                <small>William Gibson</small>
                <span></span>
              </div>

              <div class="book" @click="markBook($event)">
                Marionettes, Inc.
                <small>Ray Bradbury</small>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="teleology" class="vision-fathers layout layout__content" v-show="booksMarked > 1">

        <div class="vision-fathers-image">
          <h2>Open questions of teleology</h2>
          <i>and a treatise by L. von Mises</i>

          <g-image alt="" src="~/assets/images/person-mises.png"/>
        </div>

        <article class="hyphens">
          <p>In conclusion, we would like to mention questions that remain open from a global point of view.
            What is the goal of robots?
          </p>
          <p>In fact, the economy of people is often associated with the conscientiousness of performing tasks within
            the framework of the contract, the desire of the parties to achieve a result, the opportunistic and
            altruistic behavior of the individual in society.
            All of these principles are hard to apply to the robot economy.
            What are the motives of the robot economy? It's an open question that we need to research and discuss in
            society for better understanding and applying robots.
          </p>
          <p>For the start we suggest to look at Mises's work "Human Action: A Treatise on Economics" (praxeological
            approach) and at early article by Norbert Wiener "Behavior, Purpose and Teleology" (teleological
            vision).</p>
          <p>Praxeology inspires us with interesting ideas about human behavior without direct dependence on the
            purposes.
            This gives us the opportunity to work on the processes of the economy of robots conditionally as with a
            black
            box without delving into the ultimate goals. At the same time, teleology poses a challenge to explain
            causes.</p>
          <p>We hope that somewhere at the junction of the works of Mises and Wiener, a point for further development of
            the
            robot economy may be found, not just as a protocol of interaction between people and machines of a
            praxeological nature, but taking into account the teleological elements of building interspecies
            communication.</p>
        </article>


      </section>


    </div>

  </layout>
</template>


<script>

import Parallax from 'parallax-js'

export default {

  components: {
    MetaInfo: () => import("~/components/MetaInfo.vue"),
    Abstract: () => import("~/components/TextAbstract.vue"),
    Button: () => import("~/components/Button.vue"),
    tip: () => import("~/components/tip.vue"),
    MovingNumbers: () => import("~/components/decor/MovingNumbers.vue")
  },

  data() {
    return {
      booksMarked: 0,
      scrolled: false
    }
  },

  mounted() {
    var scene = document.getElementById('parallax-iotapp');
    var parallaxInstance = new Parallax(scene);
  },

  methods: {
    markBook: function (e) {
      e.target.classList.toggle('active');
      if (e.target.classList.contains('active')) {
        this.booksMarked++;
      } else {
        this.booksMarked--
      }

      if (this.booksMarked > 2 && !this.scrolled) {
        this.$smoothScroll({
          scrollTo: document.getElementById('teleology'),
          duration: 1000,
          updateHistory: false,
          offset: -100
        });

        this.scrolled = true;
      }
    }
  }
}
</script>

<style scoped>


.vision article {
  text-align: left;
}

.vision article h2 {
  text-align: left;
}


/* 1 ---- */
.vision-banner {
  position: relative;
  background: var(--color-gradient-mars);
  min-height: 450px;
  overflow: hidden;
}

.vision-banner h1 {
  margin-top: calc(var(--space) * 0.5);
}


.vision-banner h1 b {
  display: inline-block;
  margin-right: var(--space);
  font-weight: 700;
  font-size: 80%;
}

.vision-banner h1 b:last-child {
  margin-right: 0;
}


@media screen and (max-width: 800px) {
  /* .vision-banner { font-size: calc(var(--base-font-size) * 2); } */
  .vision-banner p {
    font-size: 70%;
  }
}

@media screen and (max-width: 400px) {
  .vision-banner p {
    margin-bottom: calc(var(--space) * 1.5);
  }
}

.vision-banner .vision-city {
  position: absolute;
  bottom: 0;
  width: 580px;
  left: calc(50% - 290px);
  z-index: 0;
}

.vision-banner > *:not(.vision-city):not(.vision-banner):not(.vision-decortext) {
  position: relative;
  z-index: 1;
}


.vision-logo {
  position: relative;
  z-index: 1;
  margin-top: calc(var(--space) * 1.7);
  visibility: hidden;
  opacity: 0;
}

.vision-logo .logo {
  width: 130px;
  position: relative;
  z-index: 1;

  transform: translateX(10%);
}

.vision-logo .earth {
  position: absolute;
  width: 250px;
  left: calc(50% - 45px);
  top: -70px;
  opacity: 0.5;
  z-index: 0;

  transform: translateX(-10%);
}


.vision-logo.in-viewport {
  animation: FadeIn 2s 0.4s linear forwards;
}

.vision-logo.in-viewport .logo, .vision-logo.in-viewport .earth {
  animation: logoAnimation 2s 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
}

@keyframes logoAnimation {
  to {
    transform: translateX(0);
  }
}


.vision-subtitle {
  /* position: absolute;
  z-index: 1;
  bottom: 20px;
  left: 0;
  right: 0; */
  text-align: center;
  /* white-space: nowrap; */
}

.vision-subtitle .text {
  display: inline-block;
  padding: 0 0.4rem;
  margin: 0;
  background: #000;
  color: #fff;
  font-weight: 300;
}


.vision-decortext {
  position: absolute;
  z-index: 0;
  text-align: left;
  opacity: 0.4;
}

.vision-decortext.left {
  font-size: 60%;
  bottom: 30px;
  left: 50px;
}

.vision-decortext.right {
  top: 30px;
  right: 30px;
  max-width: 250px;
}

@media screen and (max-width: 700px) {
  .vision-decortext {
    display: none;
  }
}


/* 2 ---- */

.vision-iot {
  padding-right: 0;
}

.vision-iot-pic {
  justify-self: center;
  align-self: end;
  width: 100%;
}

h4 {
  margin-top: 0;
  font-style: italic;
}

.text-col-2 {
  padding-right: var(--space);
}

@media screen and (max-width: 1280px) {
  .text-col-2 {
    column-count: 1;
  }
}

@media screen and (max-width: 950px) {
  #parallax-iotapp {
    transform: scale(0.8) !important;
  }

  .vision-iot-pic {
    grid-row-start: 1;
    align-self: center;
    overflow: hidden;
  }

  .vision-iot {
    grid-template-columns: 1fr;
    grid-template-rows: 400px 1fr;
  }
}


#parallax-iotapp {
  position: relative;
  width: 516px;
  height: 545px;
  margin: 0 auto;
}

#parallax-iotapp img {
  position: absolute;
}


.parallax-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

#parallax-iotapp-1 {
  width: 237px;
  bottom: 0;
  left: 100px;
}

#parallax-iotapp-2 {
  width: 180px;
  bottom: 0;
  left: 300px;
}

#parallax-iotapp-3 {
  width: 516px;
  bottom: 78px;
  left: 0;
}

#parallax-iotapp-4 {
  width: 318px;
  bottom: 200px;
  left: 90px;
}

#parallax-iotapp-5 {
  width: 80px;
  bottom: 400px;
  left: 10px;
}

#parallax-iotapp-6 {
  width: 84px;
  bottom: 370px;
  left: 400px;
}

#parallax-iotapp-7 {
  width: 55px;
  bottom: 170px;
  left: -40px;
}

/* 3 ----- */

.vision-beginning {
  background: linear-gradient(#96daff, #fffbf3 60%);
  position: relative;
  min-height: 500px;
  padding-top: calc(var(--space) * 2);
  padding-bottom: calc(var(--space) * 2);
  overflow: hidden;
  margin-bottom: 0;
}

.vision-beginning .bg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 0;
}

@media screen and (max-width: 660px) {
  .vision-beginning {
    padding-bottom: 200px;
  }
}

.vision-beginning-text, .vision-beginning-text h2 {
  text-align: left;
}

.vision-beginning-text {
  width: 50%;
  float: right;
  position: relative;
  z-index: 1;
  max-width: 700px;
}

@media screen and (max-width: 660px) {
  .vision-beginning-text {
    float: none;
    width: 100%;
  }
}


.vision-beginning-link {
  position: absolute;
  top: calc(var(--space) * 2);
  left: calc(var(--space) * 2);
  z-index: 2;

  width: 100px;


  animation: FloatY 2s linear 0.4s infinite;
}

@media screen and (max-width: 660px) {
  .vision-beginning-link {
    bottom: calc(var(--space) * 2);
    right: calc(var(--space) * 2);
    top: auto;
    left: auto;
  }
}

/* 4 ----- */
.vision-cybernetics {
  background-image: radial-gradient(circle at 80%, #a6fcf6, #1717b0 50%);
  color: #fff;
  padding-top: calc(var(--space) * 3);
  padding-bottom: calc(var(--space) * 3);
  overflow: hidden;

  position: relative;
}

.vision-cybernetics article {
  max-width: 50%;
  position: relative;
  z-index: 2;
}

.vision-cybernetics a {
  color: #fff;
  font-weight: 500;
}

.vision-cybernetics a:hover {
  color: var(--color-blue-light)
}

.vision-cybernetics .bg {
  position: absolute;
  bottom: 0;
  left: 40%;
  z-index: 1;
}

.vision-cybernetics .bg img {
  display: block;
  max-width: 1400px;
}

@media screen and (max-width: 1600px) {
  .vision-cybernetics .bg {
    left: 20%;
  }
}

@media screen and (max-width: 1200px) {
  .vision-cybernetics .bg {
    left: 30%;
  }

  .vision-cybernetics .bg img {
    max-width: 1000px;
  }
}

@media screen and (max-width: 1000px) {
  .vision-cybernetics {
    padding-bottom: 0 !important;
  }

  .vision-cybernetics article {
    max-width: 100%;
  }

  .vision-cybernetics .bg {
    position: static;
  }

  .vision-cybernetics .bg img {
    max-width: 140%;
    margin-left: -20%;
  }

  .vision-cybernetics .numbers {
    opacity: 0.3;
  }
}


/* 5, 6, 7 ----- */

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

@media screen and (max-width: 1100px) {
  .vision-coase-image {
    margin-bottom: calc(var(--space) * 2);
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

.vision-fathers-callout {
  text-align: left;
  font-style: italic;
  font-weight: 500;
}


/* 6 ----- */
.vision-cps {
  grid-template-columns: 1fr 1fr;
  padding-left: 0 !important;
}

.vision-cps h2 {
  max-width: 500px;
  text-align: left;
  padding-left: var(--space)
}

.vision-cps img {
  display: block;
  width: 90%;
  max-width: 1000px;
  margin: calc(var(--space) * 3) 0 var(--space)
}

.vision-cps article {
  padding-left: var(--space)
}

.vision-cps .vision-fathers-image {
  max-width: 100%;
}

/* 7 ----- */

.vision-industry40 small {
  font-size: 60%; line-height: 1.2;
}


.vision-industry40 .layout {
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  gap: calc(var(--space) * 2);
}

.vision-industry40 .layout h2 {
  text-align: left;
}

.vision-industry40 .layout h2 b {
  display: block;
}

.vision-industry40 .robot img {
  float: right;
  width: 10rem;
  margin: 1rem;
}

.vision-industry40 .industry40 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: calc(var(--space) * 0.7);
  align-items: end;
}

.vision-industry40 .industry40 img {
  margin: 0 auto;
}

.vision-industry40 .industry40 .text {
  text-align: left;
  margin-top: var(--space);
  padding: 0 0.5rem;
  line-height: 1.1;
}

.vision-industry40 .industry40 .text h5 {
  margin: 0;
  font-weight: bold;
  letter-spacing: normal;
  text-align: left;
}

.vision-industry40 .industry40 .text small {
  display: block;
  margin-top: 0.5rem;
}

.vision-industry40 .industry40 .text .text-color-blue {
  font-weight: bold;
}


@media screen and (max-width: 1280px) {
  .vision-industry40 .layout {
    grid-template-columns: 1fr;
  }

  .vision-industry40 .robot img {
    float: none;
    display: block;
    margin: 0 auto;
  }
}

@media screen and (max-width: 750px) {

  .vision-industry40 .industry40 {
    grid-template-columns: 1fr;
  }

  .vision-industry40 .industry40 > div {
    display: grid;
    grid-template-columns: 120px 1fr;
    align-items: center;
    gap: var(--space)
  }
}


/* 8 ----- */
.vision-bitcoin .vision-bitcoin-conslution {
  text-align: left;
  font-style: italic;
  font-size: 120%;
  font-weight: 500;
}

/*  ----- */

.vision-chains, .vision-chains a {
  color: #fff;
}

.vision-chains {
  background: linear-gradient(to right, #e30078, #e30078 50%, #81a8f8 50%, #81a8f8 100%);
  background-position: 0;
  transition: all 10s;
}

/*.vision-chains.in-viewport {*/
/*  animation: 10s collapse paused;*/
/*  animation-iteration-count: 1;*/
/*}*/

/*@keyframes collapse {*/
/*  0% {*/
/*    background: linear-gradient(to right, #e30078, #e30078 25%, #81a8f8 75%, #81a8f8 100%);*/
/*  }*/
/*  10% { background: linear-gradient(to right, #e30078, #e30078 22.5%, #81a8f8 72.5%, #81a8f8 100%); }*/
/*  20% { background: linear-gradient(to right, #e30078, #e30078 30%, #81a8f8 70%, #81a8f8 100%); }*/
/*  30% { background: linear-gradient(to right, #e30078, #e30078 32.5%, #81a8f8 67.5%, #81a8f8 100%); }*/
/*  40% { background: linear-gradient(to right, #e30078, #e30078 35%, #81a8f8 65%, #81a8f8 100%); }*/
/*  50% { background: linear-gradient(to right, #e30078, #e30078 37.5%, #81a8f8 62.5%, #81a8f8 100%); }*/
/*  60% { background: linear-gradient(to right, #e30078, #e30078 40%, #81a8f8 60%, #81a8f8 100%); }*/
/*  70% { background: linear-gradient(to right, #e30078, #e30078 42.5%, #81a8f8 57.5%, #81a8f8 100%); }*/
/*  80% { background: linear-gradient(to right, #e30078, #e30078 45%, #81a8f8 55%, #81a8f8 100%); }*/
/*  90% { background: linear-gradient(to right, #e30078, #e30078 47.5%, #81a8f8 52.5%, #81a8f8 100%); }*/
/*  100% { background: linear-gradient(to right, #e30078, #e30078 50%, #81a8f8 50%, #81a8f8 100%); }*/
/*}*/

.vision-chains .grid-2 {
  text-transform: uppercase;
  letter-spacing: 1px;
  /*margin: calc(var(--space) * 2) 0;*/
  color: var(--color-dark);
}

.vision-chains .grid-2:after {
  display: block;
  content: '';
  width: 200%;
  height: 1px;
  background-image: linear-gradient(to right, transparent, transparent 50%, #A6FCF6 50%, #A6FCF6);
  background-size: 10px 1px;
  background-repeat: repeat-x;
}

.vision-chains .grid-2:last-child:after {
  background-image: none;
}

.vision-chains .grid-2 img {
  height: calc(var(--space) * 6);
  width: auto;
}

.vision-chains .grid-2:nth-child(1) img {
  height: calc(var(--space) * 4);

}

.vision-chains .grid-2:nth-child(1) div {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
}

.vision-chains .grid-2 div:nth-child(1) {
  justify-content: flex-end;
  align-items: center;
}

.vision-chains .grid-2 div:nth-child(1) h2, .vision-chains .grid-2 div:nth-child(2) h2 {
  margin: 0;
}

.vision-chains .grid-2 div:first-child {
  position: relative;
  padding-right: calc(var(--space) * 1.5);
  text-align: right;
}

.vision-chains .grid-2 div:not(:first-child) {
  padding-left: calc(var(--space) * 1.5);
}

.vision-chains .grid-2:nth-child(1) div:first-child:after {
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: -55px;
  bottom: calc(var(--space));
  width: 80px;
  height: 80px;
  background-color: var(--color-dark);
  border-radius: 50%;

  content: "VS";
  color: var(--color-light);
  font-weight: 500;
  font-size: 2.5rem;
}

.vision-chains .grid-2 div:first-child h2 {
  text-align: right;
}

.vision-chains .grid-2 div, .vision-chains .grid-2 div h2 {
  text-align: left;
}

.vision-chains .grid-2 p {
  text-transform: none;
  margin-top: 1rem;
}

@media screen and (max-width: 570px) {
  .vision-chains .grid-2 {
    grid-template-columns: 1fr;
  }

  .vision-chains .grid-2:after {
    display: none;
  }


  .vision-chains .grid-2:nth-child(1) div:first-child:after {
    display: none;
  }

  .vision-chains .grid-2 div, .vision-chains .grid-2 div h4 {
    text-align: center !important;
  }

  .vision-chains .grid-2 div:last-child:after {
    display: none !important;
  }

  .vision-chains .grid-2:not(:first-child) div:nth-child(odd) img {
    margin-right: 50%;
    height: auto;
    width: 60%;
  }
  .vision-chains .grid-2:not(:first-child) div:nth-child(odd) p {
    text-align: left;
  }

  .vision-chains .grid-2:not(:first-child) div:nth-child(even) img {
    margin-left: 40%;
    height: auto;
    width: 60%;
  }

  .vision-chains .grid-2:not(:first-child) div:nth-child(even) p {
    text-align: right;
  }

}

@media screen and (max-width: 1100px) {
  .text-col-3 {
    column-count: 1;
  }
}

/* ----- */

.vision-books-books {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space);
  text-align: left;
}

@media screen and (min-width: 1520px) {
  .vision-books-books {
    grid-template-columns: repeat(6, 1fr);
  }
}

@media screen and (max-width: 870px) {
  .vision-books-books {
    grid-template-columns: 1fr;
  }
}

.vision-books-books .book {
  display: grid;
  align-content: space-between;
  text-decoration: none;
  background-color: var(--color-gray-mid);
  padding: var(--space);
  font-weight: bold;
  letter-spacing: normal;
  position: relative;
  cursor: pointer;

  box-shadow: 4px 4px 0 #000;
}

.vision-books-books .book * {
  pointer-events: none;
}

.vision-books-books .book span {
  --switch-size: 34px;
  display: grid;
  justify-items: center;
  align-items: center;

  position: absolute;
  width: var(--switch-size);
  height: var(--switch-size);
  border-radius: calc(var(--switch-size) * 2);
  background: #fff;
  bottom: calc(var(--space) * 0.5);
  right: calc(var(--space) * 0.5);
}

.vision-books-books .book small {
  display: block;
  margin-top: var(--space)
}

.vision-books-books .book:nth-child(1):hover, .vision-books-books .book:nth-child(1).active {
  background-color: #cd76ff;
}

.vision-books-books .book:nth-child(2):hover, .vision-books-books .book:nth-child(2).active {
  background-color: #0ccfd6;
}

.vision-books-books .book:nth-child(3):hover, .vision-books-books .book:nth-child(3).active {
  background-color: #f126bf;
}

.vision-books-books .book:nth-child(4):hover, .vision-books-books .book:nth-child(4).active {
  background-color: #f74873;
}

.vision-books-books .book:nth-child(5):hover, .vision-books-books .book:nth-child(5).active {
  background-color: #9865f7;
}

.vision-books-books .book:nth-child(6):hover, .vision-books-books .book:nth-child(6).active {
  background-color: #36b85d;
}

.vision-books-books .book.active span {
  background: var(--color-darkgray);
  text-align: center;
}

.vision-books-books .book.active span:before {
  content: "+";
  font-weight: 300;
  line-height: 1;
  font-size: 2rem;
  display: inline-block;
  vertical-align: middle;
}


</style>