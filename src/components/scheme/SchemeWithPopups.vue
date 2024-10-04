<template>
  <div class="scheme" >
    <div class="scheme-item animate" v-in-viewport.once>
      <div>
        <div class="scheme-info" tabindex="0" >

          <!-- popup info -->
          <details>

            <summary>
              i
            </summary>

            <div class="popup-wrapper animate" v-in-viewport >
              <SchemePopup title="Decentralized application" :description="$t('Decentralized application (dapp) works within Blockchain. It is open source and its data served on IPFS and Github. These techonolgies allow application be secure and transparent at the same time. Our developers are working both on the development of Robonomics’ application and on the libraries that you can use when building your own dapp.')"/>
            </div>

          </details>

        </div>
        <g-image quality="75" alt="" class="dapp" aria-hidden="true" src="~/assets/images/index-dapp.png" />
      </div>
      <h3>{{$t('Decentralized application')}}</h3>
    </div>

    <div class="scheme-a animate-inside" v-in-viewport.once>
      <div class="scheme-a-right">
        <span>{{$t('Function request')}}</span>
        <span aria-hidden="true" class="arrow">---------------&gt;</span>
      </div>
      <div class="scheme-a-left">
        <span>{{$t('Report')}}</span>
        <span aria-hidden="true" class="arrow">&lt;---------------</span>
      </div>
    </div>

    <div class="scheme-item animate" v-in-viewport.once>
      <div class="digital-twin">

        <!-- popup info -->
        <div class="scheme-info " tabindex="0">
          <details>

            <summary>
              i
            </summary>

            <div class="popup-wrapper animate" v-in-viewport>
              <SchemePopup title="Digital twin" :description="$t('Digital Twin is one of the instruments provided by Robonomics Web Services (RWS). It acts as a digital version of the real-world equipment and copies all of its technical characteristics. It allows to make a decentralized app more responsive to the user’s commands.')"/>
            </div>

            </details>
        </div>
        <!-- <g-image aria-hidden="true" src="~/assets/images/index-digital-twin.svg" /> -->
        <svg xmlns="http://www.w3.org/2000/svg" width="95.25" height="163.573" viewBox="0 0 95.25 163.573">
          <g id="Group_4332" data-name="Group 4332" transform="translate(1 1)">
            <g id="Group_4327" data-name="Group 4327" transform="translate(0 0)">
              <path id="Path_7589" data-name="Path 7589" d="M-322.895,1010.268a4.184,4.184,0,0,0,2.837-3.8l.566-12.814a34.216,34.216,0,0,1,5.153-16.6.886.886,0,0,0,.106-.129,34.3,34.3,0,0,1,4.324-5.558c.554-.572,1.09-1.161,1.619-1.758.089-.1.177-.2.265-.3q.777-.89,1.517-1.815c.054-.069.109-.139.164-.209q1.563-1.974,2.949-4.088l.051-.076a56.806,56.806,0,0,0,3.772-6.733l.078-.163q.53-1.127,1.014-2.276c.009-.024.019-.049.03-.073q.45-1.083.854-2.183c.033-.09.068-.181.1-.272.211-.583.416-1.17.608-1.761.039-.12.072-.24.11-.36.07-.222.135-.443.2-.664q.253-.832.477-1.664c.059-.22.118-.439.174-.659q.249-.972.458-1.944c.024-.109.051-.218.073-.327q.249-1.189.438-2.376c.012-.075.021-.15.032-.224q.161-1.034.274-2.064c.023-.2.042-.4.062-.6q.087-.874.141-1.745c.013-.208.029-.415.039-.622.037-.759.062-1.517.062-2.272,0-25.2-20.916-45.708-46.625-45.708s-46.625,20.5-46.625,45.708c0,.755.025,1.513.062,2.272.01.207.026.414.039.621q.054.874.141,1.749c.019.2.039.4.062.6q.115,1.037.276,2.077c.01.07.018.14.03.21q.19,1.191.439,2.383c.022.1.048.207.07.309q.21.983.462,1.965c.054.213.112.427.17.641q.227.846.485,1.69c.065.213.127.426.195.64.039.123.073.246.113.369.193.594.4,1.185.613,1.772.029.08.059.16.089.239q.414,1.127.875,2.237l.012.03q.486,1.166,1.027,2.306l.06.128a56.949,56.949,0,0,0,3.788,6.76l.035.053q1.39,2.121,2.965,4.108c.052.066.1.131.155.2q.742.928,1.522,1.822c.086.1.173.195.259.293.53.6,1.068,1.189,1.622,1.762a34.319,34.319,0,0,1,4.324,5.559,1,1,0,0,0,.105.127,34.218,34.218,0,0,1,5.154,16.6l.566,12.814a4.184,4.184,0,0,0,2.837,3.8" transform="translate(387.593 -888.427)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
            </g>
            <line id="Line_182" data-name="Line 182" y1="2.726" transform="translate(64.698 127.838)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
            <line id="Line_183" data-name="Line 183" y1="2.727" transform="translate(64.698 133.849)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
            <line id="Line_184" data-name="Line 184" y1="2.726" transform="translate(64.698 139.861)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
            <path id="Path_7590" data-name="Path 7590" d="M-356.212,1048.76a13.176,13.176,0,0,0,2.382,2.633c1.138.925,6.427,5.383,8.648,7.258a4.335,4.335,0,0,0,1.923.931,2.719,2.719,0,0,0,2.713,2.579h3.987a2.719,2.719,0,0,0,2.712-2.579,4.327,4.327,0,0,0,1.922-.931c1.732-1.46,7.471-6.3,8.648-7.258a13.46,13.46,0,0,0,2.658-3.05.946.946,0,0,0,.139-.495v-1.387" transform="translate(385.178 -900.588)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
            <path id="Path_7591" data-name="Path 7591" d="M-357.022,1042.418c.012,1.055.034,1.982.07,2.722" transform="translate(385.241 -900.277)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
            <path id="Path_7592" data-name="Path 7592" d="M-357.01,1035.966c-.01.912-.018,1.808-.021,2.671" transform="translate(385.241 -899.78)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
            <path id="Path_7593" data-name="Path 7593" d="M-356.9,1029.454c-.019.894-.037,1.819-.053,2.754" transform="translate(385.236 -899.279)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
            <path id="Path_7594" data-name="Path 7594" d="M-320.526,1023.137v-2.712h-36.155c-.02.662-.074,2.487-.133,4.867" transform="translate(385.225 -898.584)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
            <path id="Path_7595" data-name="Path 7595" d="M-387.492,937.028q.054.874.141,1.749c.019.2.039.4.062.6q.115,1.037.276,2.077c.01.07.018.14.03.21q.191,1.191.439,2.383c.022.1.048.206.069.309q.212.983.463,1.965c.054.213.112.427.17.641q.227.846.485,1.69c.065.213.127.426.195.64.039.123.073.246.113.369.008.028.019.054.028.081h88.109c.008-.027.018-.054.028-.081.039-.12.072-.24.11-.36.07-.222.135-.443.2-.664q.253-.832.477-1.664c.059-.22.118-.439.174-.659q.249-.972.458-1.944c.024-.109.051-.218.073-.327q.249-1.189.438-2.376c.012-.076.021-.15.032-.224q.161-1.034.274-2.064c.023-.2.042-.4.062-.6q.087-.874.141-1.745c.013-.208.029-.415.039-.622.037-.759.062-1.517.062-2.272,0-25.2-20.916-45.708-46.625-45.708s-46.625,20.5-46.625,45.708c0,.755.025,1.513.062,2.272C-387.521,936.614-387.505,936.822-387.492,937.028Z" transform="translate(387.593 -888.427)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
            <g id="Group_4328" data-name="Group 4328" transform="translate(25.619 124.436)">
              <path id="Path_7596" data-name="Path 7596" d="M-358.2,1028.976a1.639,1.639,0,0,1-1.635-1.537,1.639,1.639,0,0,1,1.534-1.739l39.349-2.46a1.642,1.642,0,0,1,1.739,1.534,1.64,1.64,0,0,1-1.534,1.739l-39.35,2.459C-358.131,1028.975-358.166,1028.976-358.2,1028.976Z" transform="translate(359.839 -1023.236)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
            </g>
            <g id="Group_4329" data-name="Group 4329" transform="translate(25.619 130.447)">
              <path id="Path_7597" data-name="Path 7597" d="M-358.2,1035.488a1.639,1.639,0,0,1-1.635-1.537,1.64,1.64,0,0,1,1.534-1.739l1.1-.068,38.251-2.391a1.643,1.643,0,0,1,1.739,1.534,1.64,1.64,0,0,1-1.534,1.739l-39.35,2.459C-358.131,1035.488-358.166,1035.488-358.2,1035.488Z" transform="translate(359.839 -1029.75)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
            </g>
            <g id="Group_4330" data-name="Group 4330" transform="translate(25.619 136.46)">
              <path id="Path_7598" data-name="Path 7598" d="M-358.2,1042a1.639,1.639,0,0,1-1.635-1.537,1.639,1.639,0,0,1,1.534-1.739l39.349-2.459a1.642,1.642,0,0,1,1.739,1.533,1.641,1.641,0,0,1-1.534,1.739L-358.1,1042C-358.131,1042-358.166,1042-358.2,1042Z" transform="translate(359.839 -1036.263)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
            </g>
            <g id="Group_4331" data-name="Group 4331" transform="translate(25.619 142.471)">
              <path id="Path_7599" data-name="Path 7599" d="M-358.2,1048.514a1.639,1.639,0,0,1-1.635-1.537,1.64,1.64,0,0,1,1.534-1.739l1.051-.066,38.3-2.393a1.643,1.643,0,0,1,1.739,1.534,1.64,1.64,0,0,1-1.534,1.739l-37.787,2.361-1.563.1C-358.131,1048.514-358.166,1048.514-358.2,1048.514Z" transform="translate(359.839 -1042.776)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
            </g>
          </g>
        </svg>
        <h3>{{$t('Digital twin')}}</h3>
      </div>
    </div>

    <div class="scheme-a animate-inside" v-in-viewport.once>
      <div class="scheme-a-right">
        <span>{{$t('Control')}}</span>
        <span aria-hidden="true" class="arrow">---------------></span>
      </div>
      <div class="scheme-a-left">
        <span>{{$t('Log')}}</span>
        <span aria-hidden="true" class="arrow">&lt;---------------</span>
      </div>
    </div>

    <div class="scheme-item animate" v-in-viewport.once>
      <div>

        <!-- popup info -->
        <div class="scheme-info" tabindex="0">

          <details>

            <summary>
              i
            </summary>

            <div class="popup-wrapper animate" v-in-viewport>
              <SchemePopup title="IoT / Smart device" :description="$t('You can use Robonomics with a wide range of Zigbee smart devices to automate and control various aspects of your home/office or use it with ROS-based robotics for more complex industrial tasks.')"/>
            </div>

          </details>

        </div>
        <g-image alt="" quality="75"  aria-hidden="true" src="~/assets/images/index-smart-device.svg" />
        <h3>{{$t('IoT / Smart device')}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
  import SchemePopup from  '~/components/scheme/SchemePopup.vue'
export default {

  components: {SchemePopup},


  mounted() {
    const details = document.querySelectorAll("details");

    // Close all opened details on body click
    document.body.addEventListener('click', (e) => {
      const current = e.target.closest("details");
      document.body.querySelectorAll("details").forEach((e) => {
        if (e !== current) {
          e.open = false;
        }
      });
    })

    // close all the details except the target one
    details.forEach((targetDetail) => {
      targetDetail.addEventListener("click", () => {
        details.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute("open");
          }
        });
      });
    });
  }

}
</script>

<style scoped>
  .scheme {
    display: grid;
    grid-template-columns: 1fr 150px 1fr 150px 1fr;
    gap: 0;
    align-items: center;
    align-content: center;
    justify-items: stretch;
    justify-content: space-between;
    margin: calc(var(--space)*2) 0 0;

    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .scheme > * {
    display: grid;
    align-content: center;
  }

  .scheme h3 {
    margin-top: 10px;
    font-size: calc(var(--base-font-size ) * 0.8);
  }

  .scheme-item {
    position: relative;
    min-height: 318px;
    padding: var(--space);
  }

  .scheme-item .dapp {
    width: 300px;
  }

  .scheme-item .digital-twin svg path {
    transition: stroke 0.5s ease-in-out;
  }

  .scheme-item .digital-twin svg path {
    stroke: var(--color-dark);
  }

  .scheme-a {
    position: relative;
    font-size: 0.6em;
    font-variation-settings: var(--font-flex-lightmedium);
  }

  .scheme-a span {
    display: block;
  }

  .scheme-a .arrow {
    white-space: nowrap;
  }


  /* scheme popups */

  .scheme-info summary::-webkit-details-marker,
  .scheme-info summary::marker {
    display: none;
    font-size: 0;
  }
  .scheme-info summary {
    position: absolute;
    top: 1px;
    right: 8px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: var(--base-font-size);
    background-color: transparent;
    color: var(--color-dark);
    border-radius: 100px;
    border: 2px solid var(--color-dark);
    cursor: pointer;
    user-select: none;
    text-transform: lowercase;
    transition: color 0.33s ease-in-out, background-color 0.33s ease-in-out;    z-index: 120;
  }

  .scheme-info details[open] summary {
    color: var(--color-light);
    background-color: var(--color-dark);
  }

  .popup-wrapper {
    position: absolute;
    top: -5px;
    left: 0;
    min-height: 300px;
    padding: calc(var(--space) / 2);
    background-color: var(--color-light);
    border: 1px solid var(--color-dark);
    z-index: 100;
  }

  .popup-wrapper.animate {
    animation-delay: 0;
    animation-duration: 0.35s;
  }


  @media screen and (max-width: 1200px) {
    .scheme {
      gap: 0;
      grid-template-columns: 1fr 120px 1fr 120px 1fr;
      font-size: 80%;
    }
  }

  @media screen and (max-width: 900px) {
    .scheme {
      grid-template-columns: 1fr;
      gap: calc(var(--space)*2);
    }

    .scheme .scheme-a {
      font-size: 80%;
      transform: rotate(90deg);
    }

    .popup-wrapper {
      min-height: 200px;
    }
  }
</style>