<template>
  <div id="app">
    <Page
      :useDefaultHeader="$route.meta.useDefaultHeader ?? true"
      :useDefaultFooter="$route.meta.useDefaultFooter ?? true"
    >
      <router-view></router-view>
    </Page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Page from '@/components/PageWrapper.vue';

export default defineComponent({
  components: {
    Page,
  },
});
</script>
