<template>
  <CaseLayout
    :path="$route.path"
    introImg="blockchain-coffee/1.png"
    introText="The 'Robonomics Coffee' is a smart coffee machine integrated into the <a href='/'>Robonomics Network</a>. This project aims to illustrate Robonomics' potential in the IoT sphere through a real-world example."
    withExtras
    :showFooter="false"
  >

    <section class="case-page__content">

      <CaseText
        title="Establishing democracy with smart contracts"
        text="Let's imagine a small office with a team of 10-15 people. While everybody is focused on their own deadlines for their main professional tasks, no one seems to care about the upkeep of the office space. The most common solution to avoid sinking into chaos is to hire third-party individuals for support. Another approach is to take the initiative and impose penalties on those who create a mess or deplete supplies without replenishing them. However, is it ethical to live under tyranny in our future crypto-anarchist world, where everyone is expected to be responsible and enjoy freedom? Let's strive to create a more democratic society using smart contracts and the new generation of Internet technologies (often referred to as Web3). We need tools that can help us make decisions together, and then ensure they work properly without humans having to get directly involved."
      />

      <CaseText
        title="'Who drank all the coffee?!' or the tragedy of the commons"
        text="There's a concept widely discussed in economics, ecology, and other sciences known as the 'tragedy of the commons.' This pertains to a scenario in which individuals who have access to a shared resource prioritize their own interests, ultimately exhausting the resource. Coffee closely resembles such a resource, as it deteriorates due to uncontrolled consumption in the office. However, at the same time, usually none of the team members are inclined to invest their time and money in obtaining an additional package of coffee beans. So, they keep drinking coffee without getting new supplies."
      />

      <CaseText
        title="Strategy for transforming the coffee machine into an autonomous robotic device"
        multiply
      >
        <p><b>How to formulate the task in numbers.</b> Assuming a monthly coffee budget of $100, which is approximately equivalent to 150 cups for our team of 10 people, this leaves each person with 1 cup every 2 days. Now, let's delve into the technical details. The question is: how can we bring an autonomous coffee machine to life in the office?</p>

        <p><b>Step 1: automated coffee bean ordering</b>. We've made an arrangement with the barista, Nikita, who's located near the office. He'll supply us with coffee beans upon receiving an alert from the bot. The bot sends a message when the coffee is running low, specifying the quantity of coffee (in kilograms) needed for the order and the corresponding payment amount determined by the team. With these details, Nikita can select the coffee according to his preference.</p>

        <p><b>Step 2: automatic access to smart office.</b> Simultaneously with the order, the coffee machine generates a QR code. Nikita then presents this QR code to the camera for office entry.</p>

        <p><b>Step 3: distribution of coffee tokens to the team.</b> Once the local camera scans the QR code, the smart home management system initiates a payment to Nikita and distributes new coffee tokens among the team members.</p>

        <p><b>Step 4: drink coffee!</b>  In order to receive a fresh cup of coffee, a team member needs to send a coffee token to the address of the coffee machine.</p>
        
        <h3 class="youtube-icon">Coffee beans delivery process:</h3>
        <Youtube
          title="P1012663 delivery"
          src="https://www.youtube.com/embed/Q7C4Mb9wn64"
        />
      </CaseText>


      <!-- <div class="cases__list-wrapper layout__text">
        <b class="cases__list-title">Automated process:</b>
        <ol class="cases__list">
          <li>When the coffee machine’s token balance >= 90% of the total supply. It indicates that the bot has to send a message to Nikita.</li>
          <li>The coffee machine sends the order to Nikita and scans the QR code when he’s in HQ.</li>
          <li>After the camera scans the QR code, the smart-home IoT controller settles a payment. Each team member gets the underlying coffee tokens.</li>
          <li>To get a new cup of coffee, a team member has to make an extrinsic call (send a coffee token to the coffee machine’s address), whereupon the automated launch is initiated.</li>
          <li>As soon as the machine gathers 90% of the total supply it repeats the cycle.</li>
        </ol>
      </div>


      <div class="layout__text">

        <g-image immediate alt="scheme" src="@/assets/images/cases/blockchain-coffee/2.png"/>

        <h3>The autonomous coffee machine offers solutions:</h3>

        <ul class="cases__list">
          <li>Unused tokens can be pooled, promoting equitable distribution.</li>
          <li>Additional funding ensures higher quality coffee.</li>
          <li>Decisions on coffee amount involve a DAO vote.</li>
          <li>The scheme promotes flexibility, limited only by automation.</li>
          <li>Empowered by web3, this crypto-anarchic approach marks our progress in addressing shared resource challenges.</li>
        </ul>
      </div> -->


      <CaseText
        title="HOW TO MAKE COFFEE?"
        multiply
        class="mb-big"
      >

        <g-image class="mb" immediate alt="scheme how to" src="@/assets/images/cases/blockchain-coffee/scheme-0.svg"/>
        <p>In order to have a cup of delicious coffee, a customer should send some funds (1 Statemine's token <g-link to="https://assethub-kusama.subscan.io/assets/3077">ACT</g-link>, id=3077) to the address of a coffee machine in Statemine parachain. After that the pouring process is started and action log is published in the <g-link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/explorer">Robonomics Parachain portal</g-link> via Datalog function.</p>
        <p> <b>NOTE!</b> You may use any token on Statemine, more on that <g-link to="https://wiki.robonomics.network/docs/robonomics-coffee/#things-to-point-out">here</g-link> </p>

        <Youtube
          title="P1012663 Coffee"
          src="https://www.youtube.com/embed/Z8pXcLjlJnQ"
        />
      </CaseText>

      <CaseText
        class="mb-big"
        title="How it works?"
        text="There is a single-board computer attached to the body of the coffee machine. This computer is the center of the entire system, where all the processes are happening. The single-board (Raspberry Pi 4) is connected to the control panel of the coffee machine via jumper breadboard wires and GPIO interface. RPI is also the one interacting with Robonomics and Statemine parachains. Sample flowchart of the workflow is presented below."
        img="blockchain-coffee/scheme-1.svg"
        imgAlt="how it works"
      />

      <CaseText
        title="TUTORIAL"
        multiply
        class="mb-big"
      >

        <h3 class="mt">Used hardware</h3>
        
        <ul class="cases__list mb-big">
          <li>Coffee machineThe very important criteria for a coffee machine was the ability to solder some wires to the control panel since GPIO was selected as a communication interface being the easiest one to implement. Several options were considered (<g-link to="https://www.philips.com/c-p/SM5478_10R1/picobaristo-super-automatic-espresso-machine">Saeco PicoBaristo HD 8925</g-link>, <g-link to="https://www.delonghi.com/en/esam3200-s-ex-1-magnifica-automatic-coffee-maker/p/ESAM3200.S%20EX%3A1">De'Longhi ESAM3200.S</g-link>). As may be seen, no touchscreen and no bells and whistles, just buttons and espresso. Finally, <g-link to="https://www.delonghi.com/en/ecam22-110-sb-magnifica-s-automatic-coffee-maker/p/ECAM22.110.SB">De’Longhi Magnifica ECAM 22.110</g-link> was chosen as it is cheap and has an easy-removed front panel.</li>
          <li>Single-board <g-link to="https://www.raspberrypi.com/products/raspberry-pi-4-model-b/">Raspberry Pi 4B</g-link>(2 GB) with Ubuntu server installed via <g-link to="https://www.raspberrypi.com/software/">RPi Imager</g-link>.</li>
          <li>5V adapter and USB A to USB type C cable (<g-link to="https://www.amazon.com/Charger-FOBSUNLAND-Universal-Adapter-S6-Note/dp/B073Q1N8FL/ref=sr_1_2_sspa?keywords=5v+adapter&qid=1636572682&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExQ1JDSkQ5NlBGTFU2JmVuY3J5cHRlZElkPUEwODgwMDgzMUJKMU5YVEdXRjdBWCZlbmNyeXB0ZWRBZElkPUEwMTc3NjgwMldDQ1lJWUkwTVY4VSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=">this</g-link> and <g-link to="https://www.amazon.com/Charger-Braided-Charging-Compatible-Samsung/dp/B0794M53HQ/ref=sr_1_1?keywords=usb+a+type+c+cable&qid=1636572602&sr=8-1">this</g-link> are examples)</li>
          <li>A set of F-M, M-M, F-F jumper wires, a breadboard (again, this is just an example)</li>
          <li>Transistor and a resistor(optionally). More on that later.</li>
        </ul>

        <h3 class="mt">Tools</h3>
        
        <ul class="cases__list">
          <li>A set of screwdrivers.</li>
          <li>Soldering iron with some solder and resin.</li>
          <li>Multimeter.</li>
        </ul>
      </CaseText>

      <div class="layout__text">
        <h3>Hardware installation</h3>

        <ol class="cases__list cases__list--style-bold mb-big">
          <li>
            <CaseText
              multiply
              img="blockchain-coffee/3.png"
              imgAlt="Disassembly the coffee machine."
            >
              <h4>Disassembly the coffee machine.</h4>
              <p>There is a <g-link to="https://www.youtube.com/watch?v=7Y5NCePD0PM">sample tutorial</g-link> on YouTube. Your goal is to remove the front panel (it won't be used anymore, so this is a thing to improve to hide all the wires) and detach the control PCB.</p>
            </CaseText>
          </li>
          <li>
            <CaseText
              title="Solder two wires to the button you need."
              subtitle
              text="Solder them to the isolated contacts (in our case - two bottom contacts). You can use any wires, but keep im mind that in the end there should be an M-wire to put it into the breadboard."
              img="blockchain-coffee/4.png"
              imgAlt="Solder two wires to the button you need."
            />
          </li>
          <li>
            <CaseText
              title="Assemble the entire coffee machine back leaving the front panel removed."
              subtitle
              img="blockchain-coffee/5.png"
              imgAlt="Assemble the entire coffee machine back leaving the front panel removed."
            />
          </li>
          <li>
            <CaseText
              multiply
              img="blockchain-coffee/6.png"
              imgAlt="Circuit"
            >
              <h4>Circuit.</h4>
              <p>Overall circuit is presented below, this is a very simple transistor switch, we used <span class="formula" v-katex="'R1=1kΩ'"></span> R1=1kΩ, a npn transistor <span class="formula" v-katex="'Q1 (hfe=40, Uce>5V, Ic>0.015A'"></span>, sample <g-link to="https://alltransistors.com/adv/pdfdatasheet_rca/2n1613.pdf">here</g-link>, but almost any general transistor suites, since this is a switch) and a small 3.3V diode  <span class="formula" v-katex="'D'"></span> in base circuit found in the storage of our lab :) One can use a MOSFET transistor as well.</p>
              <g-image immediate alt="scheme" src="@/assets/images/cases/blockchain-coffee/scheme-2.svg"/>
            </CaseText>
          </li>
          <li>
            <CaseText
              title="Connect coffee machine and rpi."
              text="Connect wires marked as RPI GND and RPI GPIO Pin to pins GND and 21 respectively. RPI GPIO scheme is presented below. Wires marked as Button+ and Button- should be connected to the left button contact and right button contact respectively."
              img="blockchain-coffee/scheme-3.svg"
              imgAlt="Connect coffee machine and rpi."
            />
          </li>
        </ol>
      </div>

      <div class="layout__text">
        <h3 class="underline">Software installation</h3>
        <p>Time to turn the Raspberry Pi into blockchain-powered coffee maker!</p>

        <h4>Option 1: using robonomics parachain in kusama network</h4>
        <ul>
          <li>
            <span>Prepare the RPI for Substrate libs (<g-link to="https://www.rust-lang.org/tools/install">source</g-link>):</span>
<vue-code-highlight language="bash" class="mt">curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh 
rustup default nightly
</vue-code-highlight>
          </li>
          <li>
            <span>Install gpiozero library (<g-link to="https://gpiozero.readthedocs.io/en/stable/installing.html">source</g-link>) and reboot:</span>
  <vue-code-highlight language="bash" class="mt">sudo apt update 
sudo apt install python3-gpiozero 
sudo pip3 install gpiozero 
sudo reboot
</vue-code-highlight>            
          </li>
          <li>
            <span>Clone the repository</span>
  <vue-code-highlight language="bash" class="mt">git clone https://github.com/Multi-Agent-io/robonomics-coffee-maker</vue-code-highlight>              
          </li>
          <li>
            <span>Install project requirements</span>
  <vue-code-highlight language="bash" class="mt">pip3 install -r requirements.txt</vue-code-highlight>  
          </li>
        </ul>

        <h4>Option 2: using everscale network</h4>
        <ul class="mb-big">
          <li>
            <span>Install gpiozero library (<g-link to="https://gpiozero.readthedocs.io/en/stable/installing.html">source</g-link>) and reboot:</span>
  <vue-code-highlight language="bash" class="mt">sudo apt update 
sudo apt install python3-gpiozero 
sudo pip3 install gpiozero 
sudo reboot</vue-code-highlight>
          </li>
          <li>
            <span>Clone the repository</span>
    <vue-code-highlight language="bash" class="mt">git clone https://github.com/Multi-Agent-io/robonomics-coffee-maker 
cd robonomics-coffee-maker</vue-code-highlight>              
          </li>
          <li>
            <span>Install Node.js requirements</span>
    <vue-code-highlight language="bash" class="mt">npm install @eversdk/core 
npm install python-shell 
mv eversdk.node ~/.tonlabs/binaries/1 
git clone https://github.com/tonlabs/ever-sdk-js 
cd ever-sdk-js/packages/lib-node 
npm install -g</vue-code-highlight>  
          <p class="mt">The reason why we can't just npm install @eversdk/lib-node is because this library is not compiled for the ARM architecture.</p>
          </li>
        </ul>
      </div>

      <div class="layout__text">
        <h3 class="underline">Account management</h3>

        <CaseText
          title="Option 1: using robonomics parachain in kusama network"
          multiply
          subtitle
          class="mt mb-big"
        >
          <p>On your PC install <g-link to="https://polkadot.js.org/extension/">Polkadot Extension</g-link> and register a coffee machine account there. <b>Save mnemonic seed phrase as it is going to be used later.</b></p>
          <g-image immediate alt="polkadot extension" src="@/assets/images/cases/blockchain-coffee/7.png"/>
          <p>Logging actions in Robonomics is optional, you will need XRT on <g-link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/">Robonomics Parachain portal</g-link> for coffee machine account (it is the same across networks) for this. If not, there will simply be an error message <em>"Balance too low."</em></p>
        </CaseText>


        <CaseText
          title="Option 2: using Everscale Network"
          text="Create an account in the Everscale with, for example, mobile app. Save seed and activate a coffee-machine address there. Insert this address in main.js"
          class="mb-big"
          subtitle
        />
      </div>

      <div class="layout__text">
        <h3 class="underline">Run Robonomics Coffee</h3>
        <h4 class="no-mt">Option 1: using Robonomics Parachain in Kusama Network</h4>
        <p>Run this in corresponding network repo folder:</p>
<vue-code-highlight language="bash" class="mt">python3 main.py &#60;previously saved seed in quotes></vue-code-highlight> 
        <p>You should see the program waiting for ACT incomes:</p>
        <g-image immediate alt="ACT income" src="@/assets/images/cases/blockchain-coffee/8.png"/>
        <p>You can send tokens from another account created the same way via <code class="code-inline">assets:transferextrinsic</code> on <g-link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fstatemine-rpc.polkadot.io#/explorer">Statemine</g-link>.</p>
        <p>As soon as there is an income (positive change in <code class="code-inline">assets:accountstorage</code> function for address derived from seed and for token id <code class="code-inline">3077</code>) the RPI triggers GPIO pin 18 and coffee machine starts making coffee and records a datalog!</p>
        <g-image immediate alt="preview" src="@/assets/images/cases/blockchain-coffee/9.png"/>
        <g-image immediate alt="coffee machine" src="@/assets/images/cases/blockchain-coffee/10.png"/>

        <h4>Option 2: using Everscale Network</h4>
        <p>Run poller by</p>
  <vue-code-highlight language="bash" class="mt">node main.js</vue-code-highlight> 
        <p class="mt mb-big">Then send 0.5 EVR to the address specified in the <code class="code-inline">main.js</code> file. Everscale use case does not imply Datalog recording.</p>
      </div>

      <div class="layout__text">
        <h2 class="underline">Things to point out</h2>
        <ul class="cases__list">
          <li>This is a POC of a blockchain-driven IoT device, it has things to improve, wires to hide and functionality to implement.</li>
          <li>
            Token ID, the one, coffee machine is waiting to receive, is set <g-link to="https://github.com/Multi-Agent-io/robonomics-coffee-maker/blob/master/statemine_monitor.py#L27">here</g-link>, <b>so you can use your own token</b>, existing one or newly created. To create one, go to <g-link to="https://github.com/airalab/robonomics-wiki">Statemine Kusama parachain page</g-link>, <code class="code-inline">Network -> Assets -> Create</code>. Set an ID there, complete the procedure and paste ID in the code.
            <g-image immediate alt="preview" src="@/assets/images/cases/blockchain-coffee/11.png"/>
          </li>
          <li>Right now the only thing that matters for income tracker is the positive difference between current and previous asset balance. This may be filtered <g-link to="https://github.com/Multi-Agent-io/robonomics-coffee-maker/blob/master/statemine_monitor.py#L59">code</g-link>.</li>
          <li>
            One may use QR-code for mobile apps for convenient transfers.
            <g-image immediate alt="preview" src="@/assets/images/cases/blockchain-coffee/12.png"/>
          </li>
        </ul>
      </div>
    </section>
  </CaseLayout>
</template>

<script>
export default {

  components: {
    CaseLayout: () => import('~/layouts/CaseLayout.vue'),
    CaseText: () => import('~/components/case/CaseText.vue'),
  }

}
</script>

<style scoped>

  img {
    margin: 0 auto;
    margin-top: calc(var(--space) * 0.7);
    margin-bottom: calc(var(--space) * 2);
    display: block;
  }

  .mb {
    margin-bottom: var(--space);
  }

  .mb-big {
    margin-bottom: calc(var(--space) * 3);
  }

  .mt {
    margin-top: calc(var(--space) * 0.7);
  }

  .no-mt {
    margin-top: 0;
  }

  .case-page__content .youtube-icon {
    margin-top: calc(var(--space) * 2);
    padding-left: 40px;
    background-image: url("data:image/svg+xml,%3Csvg width='31' height='22' viewBox='0 0 31 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_700_10062)'%3E%3Cpath d='M30.3613 3.44197C30.004 2.09595 28.9564 1.03516 27.6294 0.673012C25.2032 0 15.4995 0 15.4995 0C15.4995 0 5.7957 0 3.37055 0.647373C2.06786 1.00952 0.995988 2.09702 0.638697 3.44304C0 5.90114 0 11 0 11C0 11 0 16.1245 0.638697 18.557C0.995988 19.903 2.04362 20.9638 3.37055 21.3259C5.82205 21.9989 15.4995 21.9989 15.4995 21.9989C15.4995 21.9989 25.2032 21.9989 27.6284 21.3516C28.9564 20.9894 30.003 19.9276 30.3602 18.5826C30.9989 16.1234 30.9989 11.0256 30.9989 11.0256C30.9989 11.0256 31.0242 5.90114 30.3602 3.44197H30.3613ZM12.4103 15.71V6.28892L20.4794 10.9989L12.4103 15.7089V15.71Z' fill='black'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_700_10062'%3E%3Crect width='31' height='22' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
    background-position: left;
    background-size: 31px 22px;
    background-repeat: no-repeat;
  }


  .case-page__content .layout__text {
    margin-bottom: var(--space);
  }

  .cases__list-title {
    display: inline-block;
    margin-bottom: calc(var(--space) * 0.7);
  }

  ul.cases__list {
    margin-left: var(--space-text);
  }

  .cases__list li {
    margin-bottom: calc(var(--space) * 0.5);
  }

  .cases__list--style-bold li::marker {
    font-size: calc(var(--base-font-size) * 1.3);
    font-weight: 800;
  }

</style>