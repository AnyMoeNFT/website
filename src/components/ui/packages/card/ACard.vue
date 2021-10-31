<template>
  <div
    :class="{
      'a-card': true,
      'a-card--fulfill': fulfill,
    }"
    :style="cardStyle"
  >
    <div class="a-card-header" v-if="hasHeader">
      <span class="a-card-header__title">{{ title }}</span>
      <slot name="header"></slot>
    </div>
    <div
      :class="{
        'a-card-body': true,
        'a-card-body--no-header': !hasHeader,
        'a-card-body--no-footer': !hasFooter,
      }"
    >
      <slot></slot>
    </div>
    <div class="a-card-footer" name="footer" v-if="hasFooter">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useSlots } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
    width: {
      type: [Number, String],
      default: 240,
    },
    fulfill: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const hasHeader = !!useSlots().header || !!props.title;
    const hasFooter = !!useSlots().footer;
    const cardStyle = {
      width: typeof props.width === 'number' ? `${props.width}px` : props.width,
    };
    return {
      title: props.title,
      hasHeader,
      hasFooter,
      cardStyle,
    };
  },
});
</script>

<style lang="scss" scoped>
.a-card {
  height: max-content;
  position: relative;
  box-shadow: 0 6px 20px var(--shadow-5);
  border-radius: 16px;
  overflow: hidden;
  > div {
    box-sizing: border-box;
  }
  &-header {
    width: 100%;
    padding: 10px 18px 4px 18px;
    &__title {
      color: var(--text);
      font-size: 18px;
      font-weight: 600;
      width: 100%;
      line-height: 32px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      letter-spacing: 0.05rem;
    }
  }
  &-body {
    width: 100%;
    height: max-content;
    position: relative;
    padding: 0px 18px 12px 18px;
  }
  &-body--no-header {
    padding-top: 14px;
  }
  &-body--no-footer {
    padding-bottom: 16px;
  }
  &-footer {
    width: 100%;
    height: max-content;
    position: relative;
    padding: 10px 18px 14px 18px;
    background: var(--bg-lighter);
  }
}
.a-card--fulfill {
  .a-card-body {
    padding: 0;
  }
}
</style>
