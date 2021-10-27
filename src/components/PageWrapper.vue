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
});
</script>
