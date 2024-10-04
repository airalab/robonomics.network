<template>
  <div>


    <svg viewBox="0 0 63.6619772368 63.6619772368">
      <circle class="pie0 pie-white" cx="31.8309886184" cy="31.8309886184" r="15.9154943092"/>

      <!-- first pie chart -->
      <circle class="pie1 pie-blue" cx="31.8309886184" cy="31.8309886184" r="15.9154943092"/>
      <circle class="pie2 pie-light-blue" cx="31.8309886184" cy="31.8309886184" r="15.9154943092"/>

      <!-- second pie chart -->
      <circle class="pie3 pie-light-purple" cx="31.8309886184" cy="31.8309886184" r="15.9154943092"/>
      <circle class="pie4 pie-purple" cx="31.8309886184" cy="31.8309886184" r="15.9154943092"/>

      <!--third pie chart  -->
      <circle class="pie5 pie-light-purple" cx="31.8309886184" cy="31.8309886184" r="15.9154943092"/>

      <!-- fourth pie chart -->
      <circle class="pie7 pie-pink" cx="31.8309886184" cy="31.8309886184" r="15.9154943092"/>

      <!-- fifth pie chart -->
      <circle class="pie9 pie-purple" cx="31.8309886184" cy="31.8309886184" r="15.9154943092"/>
      <circle class="pie8 pie-light-purple" cx="31.8309886184" cy="31.8309886184" r="15.9154943092"/>
      <circle class="pie06 pie-blue" cx="31.8309886184" cy="31.8309886184" r="15.9154943092"/>

      <!-- sixth pie chart -->
      <circle class="pie10 pie-light-purple" cx="31.8309886184" cy="31.8309886184" r="15.9154943092"/>
      <circle class="pie11 pie-pink" cx="31.8309886184" cy="31.8309886184" r="15.9154943092"/>
      <circle class="pie12 pie-blue" cx="31.8309886184" cy="31.8309886184" r="15.9154943092"/>
	  </svg>

    <!-- robonomics logo -->
    <svg class="circle-chart" viewBox="0 0 453.25 453.25" xmlns="http://www.w3.org/2000/svg"> 
      <circle class="cls-3" cx="226.63" cy="226.63" r="140"/><polygon class="cls-4" points="226.44 191.87 226.44 230.62 258.6 247.58 226.44 191.87"/><polygon class="cls-5" points="226.44 230.62 194.28 247.58 258.6 247.58 226.44 230.62"/><polygon class="cls-1" points="226.44 191.87 194.28 247.58 226.5 230.62 226.44 191.87"/><polygon class="cls-6" points="226.44 151.12 158.7 268.44 294.18 268.44 226.44 151.12"/><circle class="cls-1" cx="226.44" cy="151.56" r="4.76"/><circle class="cls-1" cx="293.07" cy="267.62" r="4.76"/><circle class="cls-1" cx="159.81" cy="267.69" r="4.76"/>
    </svg>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.cls-1{fill:#03a5ed;}
.cls-2{fill:#a1e7ff;}
.cls-3{fill:#f2f2f2;}
.cls-4{fill:#b5c0f1;}
.cls-5{fill:#221363;}
.cls-6{fill:none;stroke:#03a5ed;stroke-miterlimit:10;stroke-width:2px;}

svg {
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: visible;
}

circle {
	fill:rgba(0,0,0,0);
  stroke-width:31.8309886184;
  stroke-dasharray: 0,0,0,100;
  stroke-dashoffset: 0;
  /* -webkit-animation: pie1 3s infonite ease both;
  animation: pie1 3s infinite ease both; */
  -webkit-animation: pie1 3s forwards ease;
  animation: pie1 3s forwards ease;
}

.pie-white {
  stroke: #fff;
}

.pie-blue {
  stroke:#03a5ed;
}

.pie-light-blue {
  stroke: #a1e7ff;;
}

.pie-purple {
  stroke: #b5c0f1;
}

.pie-light-purple {
  stroke: #caddfc;
}

.pie-pink {
  stroke:#f34c9a;;
}

.pie0 {
  stroke-dasharray: 0,0,100,0;
  animation: none;
}

/* first pie */

.pie1 {
  stroke-dashoffset: 250px;
  animation-delay: 1s;
}

.pie2 {
  stroke-dashoffset: 225px;
  -webkit-animation-name: pie2;
  animation-name: pie2;
  animation-duration: 3s;
  animation-delay: 1.5s;
}

/* first pie */

/* second pie */

.pie3 {
  stroke-dashoffset: 228px;
  -webkit-animation-name: pie3;
  animation-name: pie3;
  animation-delay: 3s;
}

.pie4 {
  stroke-dashoffset: 218px;
  -webkit-animation-name: pie4;
  animation-name: pie4;
  animation-duration: 3s;
  animation-delay: 3.5s;
}

/* second pie */

/* third pie */

.pie5 {
  stroke-dashoffset: 224px;
  /* stroke-dashoffset: 230px; */
  -webkit-animation-name: pie5;
  animation-name: pie5;
  animation-delay: 4.5s;
}

/* third pie */

/* .pie6 {
  stroke-dashoffset: 210px;
  -webkit-animation-name: pie6;
  animation-name: pie6;
  animation-duration: 6s;
  animation-delay: 9s;
} */


/* fourth pie */
.pie7 {
  stroke-dashoffset: 240px;
  -webkit-animation-name: pie7;
  animation-name: pie7;
  animation-duration: 2.5s;
  animation-delay: 5.5s;
}

/* fourth pie */

/* fifth pie */

.pie8 {
  /* stroke-dashoffset: 333px; */
  stroke-dashoffset: 316px;
  -webkit-animation-name: pie8;
  animation-name: pie8;
  animation-delay: 7s;
}

.pie9 {
  /* stroke-dashoffset: 216px; */
  stroke-dashoffset: 210px;
  -webkit-animation-name: pie9;
  animation-name: pie9;
  animation-duration: 2s;
  animation-delay: 7s;
}

.pie06 {
  stroke-dashoffset: 238px;
  -webkit-animation-name: pie06;
  animation-name: pie06;
  animation-delay: 7s;
}

/* fifth pie */

/* sixth pie */

.pie10 {
  stroke-dashoffset: 115px;
  -webkit-animation-name: pie10;
  animation-name: pie10;
  animation-duration: 2.5s;
  animation-delay: 8s;
  
}

.pie11 {
  stroke-dashoffset: 230px;
  -webkit-animation-name: pie11;
  animation-name: pie11;
  animation-delay: 8s;
}

.pie12 {
  stroke-dashoffset: 250px;
  -webkit-animation-name: pie12;
  animation-name: pie12;
  animation-delay: 8s;
}

/* sixth pie */

@keyframes pie1 {
  50%,100% {stroke-dasharray: 0,0,25,75;}
}
@keyframes pie2 {
  50%,100% {stroke-dasharray:0, 0, 75, 25}
}
@keyframes pie3 {
  50%,100% {stroke-dasharray: 0,0,20,80;}
}
@keyframes pie4 {
  50%,100% {stroke-dasharray: 0,0,70,30;}
}

@keyframes pie5 {
  50%,100% {stroke-dasharray: 0,0,10,90;}
}
@keyframes pie6 {
  50%,100% {stroke-dasharray: 0,0,70,30;}
}
@keyframes pie06 {
  50%,100% {stroke-dasharray: 0,0,5,95;}
}
@keyframes pie7 {
  50%,100% {stroke-dasharray: 0,0,9,92;}
}
@keyframes pie8 {
  50%,100% {stroke-dasharray: 0,0,7,93;} 
}
@keyframes pie9 {
  50%,100% {stroke-dasharray: 0,0,70,30;}
}
@keyframes pie10 {
  50%,100% {stroke-dasharray: 0,0,70.6,29.4;}
}
@keyframes pie11 {
  50%,100% {stroke-dasharray: 0,0,11,89;}
}
@keyframes pie12 {
  50%,100% {stroke-dasharray: 0,0,15,85;}
}
</style>