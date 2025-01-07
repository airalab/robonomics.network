<template>

  <layout :title="$t('Unitree G1 Humanoid Robot')" >
    <MetaInfo
      pageTitle = "Unitree G1 Humanoid Robot"
      pageDescription = "For California residents and guests, our partners offer an exciting chance to rent a humanoid robot, a new product spreading across the market."
      :pageImage = "'/website_cover_unitree.webp'"
    />

    <p class="layout layout__content space-b-2 intro">{{ $t('Rent the cutting-edge humanoid robot for your research, programming, and entertainment projects.') }}</p>

    <RentSection/>

    <article class="layout space-b-2">
      <div class="grid-3 unitree-prices">
        <section class="oldy">
          <div class="space-b unitree__price-info">
            <span>{{ $t('Hour') }}</span>
            <h5>{{ $t('$200') }}</h5>
          </div>
          <ul>
            <li class="space-b-05">{{ $t('Rent on site (Oakland, CA)') }}</li>
            <li class="space-b-05">{{ $t('Suitable for short tasks') }}</li>
            <li class="space-b-05">{{ $t('No engineering support included') }}</li>
          </ul>
        </section>
        <section class="oldy">
          <div class="space-b unitree__price-info">
            <span>{{ $t('Day') }}</span>
            <h5>{{ $t('$900') }}</h5>
          </div>
          <ul>
            <li class="space-b-05">{{ $t('Rent on site (Oakland, CA)') }}</li>
            <li class="space-b-05">{{ $t('Suitable for bigger tasks') }}</li>
            <li class="space-b-05">{{ $t('Basic engineering support included') }}</li>
          </ul>
        </section>
        <section class="oldy">
          <div class="space-b unitree__price-info">
            <span>{{ $t('Week+') }}</span>
            <h5>{{ $t('On demand') }}</h5>
          </div>
          <ul>
            <li class="space-b-05">{{ $t('Delivery to your location') }}</li>
            <li class="space-b-05">{{ $t('Customized approach') }}</li>
            <li class="space-b-05">{{ $t('Engineering support can be included') }}</li>
          </ul>
        </section>
      </div>
    </article>

    <h2 class="layout title-lined"><span>{{ $t('Enter the new era') }}</span></h2>

    <article class="layout layout__text space-b-2">
      <p>{{ $t('The G1 humanoid robot with its innovative features offers versatility for research, programming, and entertainment needs. The Unitree G1 includes a Power Control Dexterous Hand, enabling it to perform delicate tasks such as handling objects, pressing buttons, and carrying out other precise operations with various items.') }}</p>
      <g-image src="~/assets/images/devices/unitree-g1/unitree-g1-dex3.webp" alt="Unitree Dex3-1 Power Control Dexterous Hand, Operate Everything"/>
    </article>

    <h2 class="layout title-lined space-b-2"><span>{{ $t('Tech specification') }}</span></h2>
    <article class="layout layout__text space-b-2 unitree-specification">
      <ul class="align-center">
        <li>
          <b>{{ $t('Height, Width and Thickness（Stand）') }}</b>
          <span>{{ $t('1320x450x200mm') }}</span>
        </li>
        <li>
          <b>{{ $t('Height, Width and Thickness（Fold）') }}</b>
          <span>{{ $t('690x450x300mm') }}</span>
        </li>
        <li>
          <b>{{ $t('Weight (With Battery)') }}</b>
          <span>{{ $t('About 35kg') }}</span>
        </li>
        <li>
          <b>{{ $t('Arm Maximum Load') }}</b>
          <span>{{ $t('About 2Kg') }}</span>
        </li>
        <li>
          <b>{{ $t('Cooling System') }}</b>
          <span>{{ $t('Local air cooling') }}</span>
        </li>
        <li>
          <b>{{ $t('Smart Battery (Quick Release)') }}</b>
          <span>{{ $t('9000mAh') }}</span>
        </li>
        <li>
          <b>{{ $t('Charger') }}</b>
          <span>{{ $t('54V 5A') }}</span>
        </li>
        <li>
          <b>{{ $t('Battery Life') }}</b>
          <span>{{ $t('About 2h') }}</span>
        </li>
        <li>
          <b>{{ $t('Sensing Sensor') }}</b>
          <span>{{ $t('Depth Camera+3D LiDAR') }}</span>
        </li>
        <li>
          <b>{{ $t('5W Speaker') }}</b>
        </li>
        <li>
          <b>{{ $t('WiFi 6 , Bluetooth 5.2') }}</b>
        </li>
        <li>
          <b>{{ $t('Manual Controller') }}</b>
        </li>
      </ul>
    </article>


  </layout>
</template>

<script>

export default {

  components: {
    MetaInfo: () => import("~/components/MetaInfo.vue"),
    RentSection: () => import ('@/components/blocks/RentHumanoidSection.vue'),
  }

}
</script>

<style scoped>

  ul {
    list-style: none;
    margin: 0;
  }

  section.oldy {
    width: 100%;
  }

  .intro {
    font-size: calc(var(--base-font-size) * 1.2);
    line-height: 1.2;
    text-align: center;
    font-variation-settings: var(--font-flex-medium);
  }

  .unitree-prices {
    justify-items: center;
  }

  .unitree__price-info h5 {
    font-size: calc(var(--base-font-size) * 1.7);
    font-variation-settings: var(--font-flex-extrabold);
    line-height: 1;
    text-transform: uppercase;
  }

  .unitree__price-info span {
    font-size: calc(var(--base-font-size) * 0.8);
    font-variation-settings: var(--font-flex-bold);
  }

  .unitree-specification li {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .unitree-specification li:not(:last-child) {
    margin-bottom: calc(var(--space) * 0.8);
  }
  
</style>