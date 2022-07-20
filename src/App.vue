<template>
  <component
    :is="steps[currentStep].component"
    :data="steps[currentStep].data"
    @nextStep="increaseStep"
    @prevStep="decreaseStep"
  />
</template>
<script setup>
  import Step1 from './components/Step1.vue';
  import Step2 from './components/Step2.vue';
  import Step3 from './components/Step3.vue';
  import Step4 from './components/Step4.vue';
  import { ref, reactive } from 'vue';

  const currentStep = ref(1);
  const data = reactive({
    step1: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    step2: {
      name: '',
      phone: '',
      address: '',
    },
    step3: {
      card1: '',
      card2: '',
      card3: '',
      card4: '',
    },
  });
  const step1 = reactive({
    component: Object.freeze(Step1),
    data: data.step1,
  });
  const step2 = reactive({
    component: Object.freeze(Step2),
    data: data.step2,
  });
  const step3 = reactive({
    component: Object.freeze(Step3),
    data: data.step3,
  });
  const step4 = reactive({
    component: Object.freeze(Step4),
    data,
  });

  const steps = {
    1: step1,
    2: step2,
    3: step3,
    4: step4,
  };

  const increaseStep = (isValidated) => {
    if (!isValidated) {
      return;
    }
    currentStep.value += currentStep.value >= 4 ? 0 : 1;
  };
  const decreaseStep = (isValidated) => {
    if (!isValidated) {
      return;
    }
    currentStep.value -= currentStep.value <= 1 ? 0 : 1;
  };
</script>
<style></style>
