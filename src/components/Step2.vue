<template>
  <div>
    <h2>배송지 정보 입력</h2>
    <div class="flex mt-1">
      이름
      <custom-input
        ref="name"
        v-model="data.name"
        v-bind="nameValidator"
        requierd
      />
    </div>
    <div class="flex mt-1">
      연락처
      <custom-input
        ref="phone"
        v-model="data.phone"
        v-bind="phoneValidator"
        requierd
      />
    </div>
    <div class="flex mt-1">
      주소
      <button @click="openPostcode">우편번호</button>
    </div>
    <custom-input class="mt-1" ref="address" v-model="data.address" requierd />
    <div class="justify-end mt-1">
      <button @click="emit('prevStep', true)">이전</button>
      <button @click="emit('nextStep', checked)">다음</button>
    </div>
  </div>
</template>
<script setup>
  import CustomInput from './CustomInput.vue';
  import { ref, nextTick } from 'vue';
  import {
    ENGLISH_REGEX,
    KOREAN_REGEX,
    PHONE_REGEX,
    validateAll,
  } from '../utils';

  const emit = defineEmits('prevStep', 'nextStep');
  const { data } = defineProps({
    data: Object,
  });

  const name = ref(null);
  const phone = ref(null);
  const address = ref(null);

  const checked = validateAll([name, phone, address]);

  const isKorean = (str) => KOREAN_REGEX.test(str);
  const isEnglish = (str) => ENGLISH_REGEX.test(str);
  const isPhoneNumber = (str) => PHONE_REGEX.test(str);

  const nameValidator = {
    validator: () => isKorean(data.name) || isEnglish(data.name),
    msg: '한글 2글자/영어 3글자 이상 작성해주세요',
  };
  const phoneValidator = {
    validator: () => isPhoneNumber(data.phone),
    msg: '올바른 휴대폰번호 형식이 아닙니다.',
  };

  const openPostcode = async () => {
    const { address: returndAdress } = await new Promise((r) => {
      new daum.Postcode({
        oncomplete: r,
      }).open();
    });
    data.address = returndAdress;
    await nextTick();
    address.value.validate();
  };
</script>
<style scoped></style>
