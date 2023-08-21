<template>
  <CaseLayout
    :path="$route.path"
    introImg="blockchain-coffee/1.png"
    introText="'Robonomics coffee' - is a smart coffee machine integrated in <a href='/'>Robonomics Network</a>. This project aims to show Robonomics potential in the IoT sphere by a real-world example."
    withExtras
    :showFooter="false"
  >

    <section class="case-page__content">
      <p>In the experiment's setting, envision a small office housing 10–15 developers. Two critical factors stand out:</p>
      <p><b>Passion for creation:</b>  When engrossed in solving intricate engineering problems for days, consciousness roams the realms of the physical and digital. In such moments, immediate concerns fade, including attentiveness. </p>
      <p><b>Flexible hierarchy:</b> Despite hints of meritocracy, enforcing rules outside of professional duties is complex. Senior developers can't make juniors comply, and most developers ignore non-task-related issues due to their intense focus on building.</p>
      <p>Ordinary startup offices delegate upkeep to others, disconnecting creators from daily life responsibilities. High salaries and developer status fuel this. Despite noble goals like enhancing society, blockchain projects often neglect office hygiene. Let's drive positive change without oppressive hierarchies. Infusing a touch of crypto-anarchism, a freedom facilitated by next-gen Internet tech, can lead this transition.</p>

      <CaseText
        title="Addressing the commons dilemma with coffee"
        multiply
      >
        <p>Using a Statemmine parachain-controlled coffee machine, we illustrate a common challenge in tight-knit teams - the Tragedy of the Commons. In the realm of economic science, it's a term denoting shared resource depletion due to unchecked use.</p><p>Delving into p2p network issues, you encounter the Tragedy of Communities. Coffee mirrors this concern, degrading with excessive office consumption. Yet, nobody wants to ask peers to cut back or fund extra supplies. Especially for a unique, distant brew that's a 40-minute trek away. A quintessential team scenario.</p>
      </CaseText>

      <CaseText
        title="Resolving shared coffee dilemma with automation"
        text="Our monthly coffee budget is $100, equivalent about to 150 cups for our 10-person team. Splitting this, we're left with 1 cup every 2 days per person."
      />

      <CaseText
        title="Technical solution: autonomous coffee machine"
        multiply
      >
        <p><b>We've created a Telegram bot</b> for our barista Nikita. When coffee is low, the bot alerts Nikita who selects the coffee based on remaining funds. A QR code is generated and attached to the order. Nikita uses the QR code to enter our HQ, leaving coffee.</p><p><b>The QR code activates the smart home system.</b> After Nikita's visit, developers receive coffee tokens for payment. These tokens, with minimal fees, allow 150-300 cups per month.</p>

        <Youtube
          title="P1012663 delivery"
          src="https://www.youtube.com/embed/Q7C4Mb9wn64"
        />
      </CaseText>

      <div class="cases__list-wrapper">
        <b class="cases__list-title">Automated process:</b>
        <ol class="cases__list">
          <li>When the coffee machine’s token balance >= 90% of the total supply. It indicates that the bot has to send a message to Nikita.</li>
          <li>The coffee machine sends the order to Nikita and scans the QR code when he’s in HQ.</li>
          <li>After the camera scans the QR code, the smart-home IoT controller settles a payment. Each team member gets the underlying coffee tokens.</li>
          <li>To get a new cup of coffee, a team member has to make an extrinsic call (send a coffee token to the coffee machine’s address), whereupon the automated launch is initiated.</li>
          <li>As soon as the machine gathers 90% of the total supply it repeats the cycle.</li>
        </ol>
      </div>

      <g-image src="@/assets/images/cases/blockchain-coffee/2.png"/>

      <h3>The autonomous coffee machine offers solutions:</h3>
      
      <ul class="cases__list">
        <li>Unused tokens can be pooled, promoting equitable distribution.</li>
        <li>Additional funding ensures higher quality coffee.</li>
        <li>Decisions on coffee amount involve a DAO vote.</li>
        <li>The scheme promotes flexibility, limited only by automation.</li>
        <li>Empowered by web3, this crypto-anarchic approach marks our progress in addressing shared resource challenges.</li>
      </ul>

      <CaseText
        title="HOW TO MAKE COFFEE?"
        multiply
        class="mb-big"
      >
        <!-- link "ACT" is not found -->
        <g-image src="@/assets/images/cases/blockchain-coffee/scheme-0.svg"/>
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
            <g-image src="@/assets/images/cases/blockchain-coffee/scheme-2.svg"/>
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
<vue-code-highlight language="bash" class="mt">git clone https://github.com/Multi-Agent-io/robonomics-coffee-maker
</vue-code-highlight>              
        </li>
        <li>
          <span>Install project requirements</span>
<vue-code-highlight language="bash" class="mt">pip3 install -r requirements.txt
</vue-code-highlight>  
        </li>
      </ul>

      <h4>Option 2: using everscale network</h4>
      <ul class="mb-big">
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
npm install -g
</vue-code-highlight>  
        <p class="mt">The reason why we can't just npm install @eversdk/lib-node is because this library is not compiled for the ARM architecture.</p>
        </li>
      </ul>

      <h3 class="underline">Account management</h3>

      <CaseText
        title="Option 1: using robonomics parachain in kusama network"
        multiply
        subtitle
        class="mt mb-big"
      >
        <p>On your PC install <g-link to="https://polkadot.js.org/extension/">Polkadot Extension</g-link> and register a coffee machine account there. <b>Save mnemonic seed phrase as it is going to be used later.</b></p>
        <g-image alt="polkadot extension" src="@/assets/images/cases/blockchain-coffee/7.png"/>
        <p>Logging actions in Robonomics is optional, you will need XRT on <g-link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/">Robonomics Parachain portal</g-link> for coffee machine account (it is the same across networks) for this. If not, there will simply be an error message <em>"Balance too low."</em></p>
      </CaseText>


      <CaseText
        title="Option 2: using Everscale Network"
        text="Create an account in the Everscale with, for example, mobile app. Save seed and activate a coffee-machine address there. Insert this address in main.js"
        class="mb-big"
        subtitle
      />

      <h3 class="underline">Run Robonomics Coffee</h3>
      <h4 class="no-mt">Option 1: using Robonomics Parachain in Kusama Network</h4>
      <p>Run this in corresponding network repo folder:</p>
 <vue-code-highlight language="bash" class="mt">python3 main.py &#60;previously saved seed in quotes>"
</vue-code-highlight> 
      <p>You should see the program waiting for ACT incomes:</p>
      <g-image alt="ACT income" src="@/assets/images/cases/blockchain-coffee/8.png"/>
      <p>You can send tokens from another account created the same way via <code class="code-inline">assets:transferextrinsic</code> on <g-link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fstatemine-rpc.polkadot.io#/explorer">Statemine</g-link>.</p>
      <p>As soon as there is an income (positive change in <code class="code-inline">assets:accountstorage</code> function for address derived from seed and for token id <code class="code-inline">3077</code>) the RPI triggers GPIO pin 18 and coffee machine starts making coffee and records a datalog!</p>
      <g-image alt="preview" src="@/assets/images/cases/blockchain-coffee/9.png"/>
      <g-image alt="coffee machine" src="@/assets/images/cases/blockchain-coffee/10.png"/>

      <h4>Option 2: using Everscale Network</h4>
      <p>Run poller by</p>
<vue-code-highlight language="bash" class="mt">node main.js</vue-code-highlight> 
      <p class="mt mb-big">Then send 0.5 EVR to the address specified in the <code class="code-inline">main.js</code> file. Everscale use case does not imply Datalog recording.</p>

      <h2 class="underline">Things to point out</h2>
      <ul class="cases__list">
        <li>This is a POC of a blockchain-driven IoT device, it has things to improve, wires to hide and functionality to implement.</li>
        <li>
          Token ID, the one, coffee machine is waiting to receive, is set <g-link to="https://github.com/Multi-Agent-io/robonomics-coffee-maker/blob/master/statemine_monitor.py#L27">here</g-link>, <b>so you can use your own token</b>, existing one or newly created. To create one, go to <g-link to="https://github.com/airalab/robonomics-wiki">Statemine Kusama parachain page</g-link>, <code class="code-inline">Network -> Assets -> Create</code>. Set an ID there, complete the procedure and paste ID in the code.
          <g-image alt="preview" src="@/assets/images/cases/blockchain-coffee/11.png"/>
        </li>
        <li>Right now the only thing that matters for income tracker is the positive difference between current and previous asset balance. This may be filtered <g-link to="https://github.com/Multi-Agent-io/robonomics-coffee-maker/blob/master/statemine_monitor.py#L59">code</g-link>.</li>
        <li>
          One may use QR-code for mobile apps for convenient transfers.
          <g-image alt="preview" src="@/assets/images/cases/blockchain-coffee/12.png"/>
        </li>
      </ul>
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

  .mb-big {
    margin-bottom: calc(var(--space) * 3);
  }

  .mt {
    margin-top: calc(var(--space) * 0.7);
  }

  .no-mt {
    margin-top: 0;
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