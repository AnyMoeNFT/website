<template>
  <span
    :class="{
      'a-clickable-text': true,
      'a-clickable-text--secondary': type === 'secondary',
      'a-clickable-text--primary': type === 'primary',
    }"
    @click="handleClick"
    ><slot></slot
  ></span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    type: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleClick() {
      this.$emit('click');
    },
  },
});
</script>

<style lang="scss" scoped>
.a-clickable-text {
  color: var(--text);
  cursor: pointer;
}
.a-clickable-text:hover {
  color: var(--text-80);
}
.a-clickable-text--secondary {
  color: var(--text-secondary);
  cursor: pointer;
}
.a-clickable-text--secondary:hover {
  color: var(--text-secondary-80);
}
.a-clickable-text--primary {
  color: var(--primary);
}
.a-clickable-text--primary:hover {
  color: var(--primary-80);
}
</style>