<template>
  <div
    :class="{
      'a-button': true,
      'a-button--large': size === 'large',
      'a-button--small': size === 'small',
      'a-button--primary': type === 'primary',
      'a-button--round': round,
      'a-button--anim': anim,
    }"
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
    size: {
      type: String,
      default: 'medium',
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
  height: 48px;
  line-height: 32px;
  padding: 8px 24px;
  background: var(--bg);
  color: var(--primary);
  border-radius: 4px;
  box-shadow: 2px 4px 16px var(--shadow-20);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.05rem;
  cursor: pointer;
  border: 1px solid var(--primary);
  user-select: none;
  box-sizing: border-box;
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
.a-button.a-button--large {
  font-size: 16px;
  line-height: 40px;
  padding: 10px 32px;
  height: 60px;
}
.a-button.a-button--large.a-button--round {
  border-radius: 30px;
}
.a-button.a-button--small {
  font-size: 13px;
  line-height: 28px;
  padding: 4px 20px;
  height: 36px;
}
.a-button.a-button--small.a-button--round {
  border-radius: 18px;
}
.a-button--primary {
  background: var(--primary);
  color: var(--btn);
  box-shadow: 0 4px 10px var(--shadow-20);
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
  box-shadow: 0 4px 16px var(--shadow-25);
}
</style>
