<template>
  <div class="page">
    <CommonHeader v-if="useDefaultHeader" />
    <slot name="header" v-else></slot>
    <div class="page-content">
      <slot></slot>
    </div>
    <CommonFooter v-if="useDefaultFooter" />
    <slot name="footer" v-else></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CommonHeader from './CommonHeader.vue';
import CommonFooter from './CommonFooter.vue';

export default defineComponent({
  props: {
    useDefaultHeader: {
      type: Boolean,
      default: true,
    },
    useDefaultFooter: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    CommonHeader,
    CommonFooter,
  },
});
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100vh;
  max-width: 1200px;
  padding: 0 24px;
  position: relative;
  margin: 0 auto;
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
}

$scroll-width: 4px;

.page::-webkit-scrollbar {
  width: $scroll-width;
  height: $scroll-width;
}
.page::-webkit-scrollbar-button {
  display: none;
}
.page::-webkit-scrollbar-thumb {
  width: $scroll-width;
  border-radius: $scroll-width;
  background: var(--primary);
}
.page::-webkit-scrollbar-track {
  background: var(--bg);
}
.page::-webkit-scrollbar-corner {
  background: var(--bg);
}
</style>
