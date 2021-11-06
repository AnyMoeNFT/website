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
  min-height: 100vh;
  max-width: 1200px;
  padding: 0 24px;
  position: relative;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>
