<template>
  <div class="page">
    <CommonHeader v-if="useDefaultHeader" />
    <slot v-else name="header"></slot>
    <div class="page-content">
      <slot></slot>
    </div>
    <CommonFooter v-if="useDefaultFooter" />
    <slot v-else name="footer"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CommonHeader from './CommonHeader.vue';
import CommonFooter from './CommonFooter.vue';

export default defineComponent({
  components: {
    CommonHeader,
    CommonFooter,
  },
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
});
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  position: relative;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>
