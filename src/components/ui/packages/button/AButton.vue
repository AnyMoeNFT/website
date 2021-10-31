<template>
  <div
    :class="{
      'a-button': true,
      'a-button--primary': type === 'primary',
      'a-button--round': round,
      'a-button--anim': anim,
    }"
    @click="handleClick"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AButton',
  props: {
    type: {
      type: String,
      default: '',
    },
    round: {
      type: Boolean,
      default: false,
    },
    anim: {
      type: Boolean,
      default: false,
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
.a-button {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  line-height: 32px;
  padding: 7px 24px;
  background: var(--bg);
  color: var(--primary);
  border-radius: 4px;
  box-shadow: 2px 4px 8px var(--shadow-5);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.05rem;
  cursor: pointer;
  border: 1px solid var(--primary);
  user-select: none;
}
.a-button:hover {
  filter: brightness(1.125);
}
.a-button:active {
  filter: brightness(1.05);
}
.a-button--round {
  border-radius: 24px;
}
.a-button--primary {
  background: var(--primary);
  color: var(--btn);
  box-shadow: 0 4px 8px var(--shadow-10);
  border: none;
}
.a-button--primary:hover {
  filter: none;
  background: var(--primary-85);
}
.a-button--primary:active {
  filter: none;
  background: var(--primary-75);
}
.a-button--anim {
  transition: all 100ms ease;
}
.a-button--anim:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px var(--shadow-20);
}
</style>
