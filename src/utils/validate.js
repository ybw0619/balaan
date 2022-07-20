import { computed } from 'vue';

export const validateAll = (refs) =>
  computed(() => refs.map((v) => v.value.validate()).every(Boolean));
