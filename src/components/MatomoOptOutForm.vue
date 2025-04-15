<template>
  <div class="optout-form">
    <p>{{ $tr(optDescr) }}</p>
    <p>{{ $tr(optChoice)}}</p>
    <label class="custom-checkbox">
      <input 
        @change="check" 
        type="checkbox" 
        v-model="optOut" 
        name="optout" 
        value="optout" 
        class="custom-checkbox__field" 
      />
      <span class="custom-checkbox__content"></span>
      <strong>{{$tr(optText)}}</strong>
    </label>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { translateVue as $tr} from "../assets/scripts/utils/translate";

const optOut = ref(false);
const optText = ref("You are currently opted out. Click here to opt in.");
const optDescr = ref(
  "You may choose not to have a unique web analytics cookie identification number assigned to your computer to avoid the aggregation and analysis of data collected on this website."
);
const optChoice = ref(
  "To make that choice, please click below to receive an opt-out cookie"
);

const setOptOutText = () => {
  _paq.push([
    function () {
      if (this.isUserOptedOut()) {
        optText.value = $tr("You are currently opted out. Click here to opt in.");
        optDescr.value = $tr("Opt-out complete; your visits to this website will not be recorded by the Web Analytics tool. Note that if you clear your cookies, delete the opt-out cookie, or if you change computers or Web browsers, you will need to perform the opt-out procedure again.");
        optChoice.value = $tr("Please click below to opt in:");
      } else {
        optText.value = $tr("You are currently opted in. Click here to opt out.");
        optDescr.value = $tr("You may choose not to have a unique web analytics cookie identification number assigned to your computer to avoid the aggregation and analysis of data collected on this website.");
        optChoice.value = $tr("To make that choice, please click below to receive an opt-out cookie");
      }
    },
  ]);
};

const check = () => {
  _paq.push([
    function () {
      if (this.isUserOptedOut()) {
        _paq.push(["forgetUserOptOut"]);
      } else {
        _paq.push(["optUserOut"]);
      }
    },
  ]);
  setOptOutText();
};

onMounted(() => {
  setTimeout(() => {
    _paq.push([
      function () {
        optOut.value = this.isUserOptedOut();
      },
    ]);
    setOptOutText();
  }, 300);
});
</script>

<style scoped>
.optout-form {
  padding: calc(var(--space) * 0.5);
  min-height: 220px;
  border: 2px solid var(--color-dark);
}

.custom-checkbox strong {
  padding-left: 0px;
  font-size: var(--base-font-size);
}

.custom-checkbox__field:checked + .custom-checkbox__content::before {
  background-color: var(--color-blue);
}
</style>
