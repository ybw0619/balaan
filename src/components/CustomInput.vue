<template>
  <div>
    <input
      class="w-full"
      :style="{ width: `${props.width}px` }"
      :value="props.modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      @blur="validate"
      :type="props.password ? 'password' : 'text'"
    />
    <div v-show="!isValid" class="msg" v-html="msg" />
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  const msg = ref('');
  const isValid = ref(true);
  const emit = defineEmits();
  const props = defineProps({
    width: String || Number,
    modelValue: String,
    requierd: Boolean,
    password: Boolean,
    validator: {
      type: Function,
      default: null,
    },
    msg: String,
  });
  const validate = () => {
    if (props.requierd && props.modelValue === '') {
      msg.value = '정보를 기입해주세요';
      return (isValid.value = false);
    }
    if (props.validator) {
      msg.value = props.msg;
      return (isValid.value = props.validator());
    }
    return (isValid.value = true);
  };
  defineExpose({
    validate,
  });
</script>
<style></style>
