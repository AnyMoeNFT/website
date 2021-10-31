<template>
  <div class="page-header">
    <div class="logo"></div>
    <div class="search"></div>
    <div class="user"></div>
    <div class="connect"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="scss" scoped>
.page-header {
  height: 48px;
  padding: 32px 0 24px 0;
  box-sizing: border-box;
  display: flex;
}

@media screen and (max-width: 767px) {
  .page-header {
    padding: 24px 0 4px 0;
  }
}
</style>
