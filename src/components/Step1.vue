<template>
  <div>
    <h2>개인 정보 입력</h2>
    <div class="flex mt-1">
      이메일
      <custom-input
        ref="email"
        v-model="data.email"
        v-bind="emailValidator"
        requierd
      />
    </div>
    <div class="flex mt-1">
      비밀번호
      <custom-input
        ref="password"
        v-model="data.password"
        v-bind="passwordValidator"
        requierd
        password
      />
    </div>
    <div class="flex mt-1">
      비밀번호확인
      <custom-input
        ref="confirmPassword"
        v-model="data.confirmPassword"
        v-bind="confirmPasswordValidator"
        requierd
        password
      />
    </div>
    <div class="justify-end mt-1">
      <button @click="emit('nextStep', checked)">다음</button>
    </div>
  </div>
</template>
<script setup>
  import CustomInput from './CustomInput.vue';
  import { ref } from 'vue';
  import { EMAIL_REGEX, PASSWORD_REGEX, validateAll } from '../utils';

  const emit = defineEmits(['nextStep']);
  const { data } = defineProps({
    data: Object,
  });

  const email = ref(null);
  const password = ref(null);
  const confirmPassword = ref(null);

  const checked = validateAll([email, password, confirmPassword]);

  const isEmail = (str) => EMAIL_REGEX.test(str);
  const ispassword = (str) => PASSWORD_REGEX.test(str);

  const emailValidator = {
    validator: () => isEmail(data.email),
    msg: '올바른 이메일 형식이 아닙니다.',
  };
  const passwordValidator = {
    validator: () => ispassword(data.password),
    msg: '영문 대문자, 소문자, 특수문자를 포함<br/>8자리 이상으로 입력해주세요.',
  };
  const confirmPasswordValidator = {
    validator: () => data.password === data.confirmPassword,
    msg: '비밀번호를 다시 확인해주세요.',
  };
</script>
<style scoped></style>
