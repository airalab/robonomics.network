<template>
  <div v-bind="$attrs" class="model" aria-label="3d model for open-source server Risc-V" v-in-viewport='{ margin: "-200px 0%" }'>

    <g-image src="~/assets/images/hardware-2025/riscv/RiscV-Layout-1.webp" immediate />
    <g-image src="~/assets/images/hardware-2025/riscv/RiscV-Layout-2.webp" immediate />
    <g-image src="~/assets/images/hardware-2025/riscv/RiscV-Layout-3.webp" immediate />
    <g-image src="~/assets/images/hardware-2025/riscv/RiscV-Layout-4.webp" immediate />
    <g-image src="~/assets/images/hardware-2025/riscv/RiscV-Layout-5.webp" immediate />
    <g-image src="~/assets/images/hardware-2025/riscv/RiscV-Layout-6.webp" immediate />
    <g-image src="~/assets/images/hardware-2025/riscv/RiscV-Layout-7.webp" immediate />
    <g-image src="~/assets/images/hardware-2025/riscv/RiscV-Layout-8.webp" immediate />

  </div>
</template>

<style scoped>

  
  @property --koef {
    syntax: '<number>';
    initial-value: 0;
    inherits: false;
  }

  @keyframes openmodel {
    /* 0% {--koef: 0} */
    100% {--koef: 1}
  }

   @keyframes closemodel {
    0% {--koef: 1}
    100% {--koef: 0}
  }

  .model {
     --opengap: 10px;
    position: relative;
    width: 100%;
    max-width: 500px;
  }

  .model img {
    display: block;
    width: 100%;
    margin-bottom: calc(var(--opengap) * 8 * var(--koef));
    animation: openmodel 1s ease-in-out forwards;
  }

  .model.in-viewport img {
    animation: closemodel 0.5s linear 0s forwards;
  }

  .model img:not(:first-child) {
    position: absolute;
    left: 0;
    top: 0;
  }

  .model img:nth-child(1) {
    position: relative;
    z-index: 8;
  }

  .model img:nth-child(2) {
    z-index: 7;
    transform: translateY(calc(var(--opengap) * var(--koef) * 1));
  }

  .model img:nth-child(3) {
    z-index: 6;
    transform: translateY(calc(var(--opengap) * var(--koef) * 4));
  }

  .model img:nth-child(4) {
    z-index: 5;
    transform: translateY(calc(var(--opengap) * var(--koef) * 3));
  }

  .model img:nth-child(5) {
    z-index: 3;
    transform: translateY(calc(var(--opengap) * var(--koef) * 4));
  }

  .model img:nth-child(6) {
    z-index: 4;
    transform: translateY(calc(var(--opengap) * var(--koef) * 5));
  }

  .model img:nth-child(7) {
    z-index: 2;
    transform: translateY(calc(var(--opengap) * var(--koef) * 6));
  }

  .model img:nth-child(8) {
    z-index: 1;
    transform: translateY(calc(var(--opengap) * var(--koef) * 7));
  }

</style>
