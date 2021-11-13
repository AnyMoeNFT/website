<template>
  <Page
    :useDefaultHeader="$route.meta.useDefaultHeader ?? true"
    :useDefaultFooter="$route.meta.useDefaultFooter ?? true"
  >
    <router-view></router-view>
  </Page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Page from '@/components/layout/PageWrapper.vue';

export default defineComponent({
  components: {
    Page,
  },
});
</script>
