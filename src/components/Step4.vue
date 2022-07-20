<template>
  <div>
    <h2>{{ data.step2.name }}님</h2>
    <h2>회원가입되었습니다.</h2>
    <br />
    <h4>이메일: {{ data.step1.email }}</h4>
    <h4>주소: {{ data.step2.address }}</h4>
    <h4>연락처: {{ data.step2.phone }}</h4>
  </div>
</template>
<script setup>
  const { data } = defineProps(['data']);
</script>
<style scoped></style>
