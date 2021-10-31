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

<style lang="scss">
:root {
  --primary: rgba(15, 111, 239, 0.9);
  --primary-85: rgba(15, 111, 239, 0.85);
  --primary-80: rgba(15, 111, 239, 0.8);
  --primary-75: rgba(15, 111, 239, 0.75);
  --primary-70: rgba(15, 111, 239, 0.7);
  --bg: #fafafa;
  --bg-lighter: #dedede;
  --btn: #fff;
  --text: #202224;
  --text-secondary: #999;
  --text-80: rgba(32, 34, 36, 0.8);
  --text-70: rgba(32, 34, 36, 0.7);
  --text-secondary-80: rgba(153, 153, 153, 0.8);
  --text-secondary-70: rgba(153, 153, 153, 0.7);
  --shadow-5: rgba(0, 0, 0, 0.05);
  --shadow-10: rgba(0, 0, 0, 0.1);
  --shadow-20: rgba(0, 0, 0, 0.2);
  --font-normal: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}

@mixin darkmode {
  :root {
    --bg: #1e1e1e;
    --bg-lighter: #2a2a2a;
    --text: #f2f2f2;
    --text-80: rgba(242, 242, 242, 0.8);
    --text-70: rgba(242, 242, 242, 0.7);
    --text-secondary: #4e4e4e;
    --text-secondary-80: rgba(78, 78, 78, 0.8);
    --text-secondary-70: rgba(78, 78, 78, 0.7);
    --shadow-5: rgba(255, 255, 255, 0.05);
    --shadow-10: rgba(255, 255, 255, 0.1);
    --shadow-20: rgba(255, 255, 255, 0.2);
  }
}

.darkmode {
  @include darkmode;
}

@media (prefers-color-scheme: dark) {
  @include darkmode;
}

// basic layout styles

html,
body,
#app {
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  overflow-x: hidden;
  position: relative;
  padding: 0;
  margin: 0;
  background: var(--bg);
}

div,
span,
p,
a {
  color: var(--text);
  font-family: var(--font-normal);
}

p {
  margin: 0;
}
</style>
