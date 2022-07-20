<template>
  <div>
    <h2>결제 정보 입력</h2>
    <div class="flex">카드번호</div>
    <div class="flex mt-1">
      <custom-input
        ref="card1"
        v-model="data.card1"
        v-bind="cardNumValidator(1)"
        :width="80"
        requierd
      />
      -
      <custom-input
        ref="card2"
        v-model="data.card2"
        v-bind="cardNumValidator(2)"
        :width="80"
        requierd
      />
      -
      <custom-input
        ref="card3"
        v-model="data.card3"
        v-bind="cardNumValidator(3)"
        :width="80"
        requierd
      />
      -
      <custom-input
        ref="card4"
        v-model="data.card4"
        v-bind="cardNumValidator(4)"
        :width="80"
        requierd
        @focusout="checkLuhn(cardNumber)"
      />
    </div>
    <div class="msg" v-show="!isValid">유효한카드번호를 입력해주세요.</div>

    <div class="justify-end mt-1">
      <button @click="emit('prevStep', true)">이전</button>
      <button @click="emit('nextStep', isValidCardNumber)">다음</button>
    </div>
  </div>
</template>
<script setup>
  import CustomInput from './CustomInput.vue';
  import { ref, computed } from 'vue';
  import { CARD_REGEX, validateAll } from '../utils';
  const emit = defineEmits();
  const { data } = defineProps({
    data: Object,
  });

  const isValid = ref(true);
  const card1 = ref(null);
  const card2 = ref(null);
  const card3 = ref(null);
  const card4 = ref(null);
  const cardNumber = computed(
    () => data.card1 + data.card2 + data.card3 + data.card4,
  );

  const checked = validateAll([card1, card2, card3, card4]);

  const isValidCardNumber = computed(
    () => checked.value && checkLuhn(cardNumber.value),
  );

  const isCardNum = (str) => CARD_REGEX.test(str);

  const cardNumValidator = (i) => ({
    validator: () => isCardNum(data[`card${i}`]),
    msg: '4자리 숫자 입력요망',
  });

  const checkLuhn = (str) =>
    (isValid.value =
      str
        .split('')
        .map((x) => parseInt(x))
        .map((x, i) => (i % 2 === 0 ? (x * 2 > 9 ? x * 2 - 9 : x * 2) : x))
        .reduce((x, y) => x + y, 0) %
        10 ===
      0);
</script>
<style scoped></style>
