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
  --primary-full: rgba(15, 111, 239);
  --primary-85: rgba(15, 111, 239, 0.85);
  --primary-80: rgba(15, 111, 239, 0.8);
  --primary-75: rgba(15, 111, 239, 0.75);
  --primary-70: rgba(15, 111, 239, 0.7);
  --bg: #fafafa;
  --bg-alter: #fdfdfd;
  --bg-darker: #eaeaea;
  --disabled: #e3e3e3;
  --btn: #fff;
  --text: #202224;
  --text-secondary: #999;
  --text-disabled: #bebebe;
  --text-80: rgba(32, 34, 36, 0.8);
  --text-70: rgba(32, 34, 36, 0.7);
  --text-secondary-80: rgba(153, 153, 153, 0.8);
  --text-secondary-70: rgba(153, 153, 153, 0.7);
  --placeholder: #aeaeae;
  --border: #cecece;
  --line: #efefef;
  --scroll-bar: #ccc;
  --mask: rgba(0, 0, 0, 0.8);
  --shadow-5: rgba(0, 0, 0, 0.05);
  --shadow-10: rgba(0, 0, 0, 0.1);
  --shadow-20: rgba(0, 0, 0, 0.2);
  --shadow-25: rgba(0, 0, 0, 0.3);
  --shadow-40: rgba(0, 0, 0, 0.4);
  --shadow-w-10: rgba(255, 255, 255, 0.1);
  --shadow-w-20: rgba(255, 255, 255, 0.2);
  --font-normal: Quicksand, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}

// basic layout styles

html,
body,
#app {
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
  padding: 0;
  margin: 0;
  background: var(--bg);
}

body {
  overflow-y: auto;
}

$scroll-width: 8px;

body::-webkit-scrollbar {
  width: $scroll-width;
  height: $scroll-width;
}
body::-webkit-scrollbar-button {
  display: none;
}
body::-webkit-scrollbar-thumb {
  width: $scroll-width;
  border-radius: $scroll-width;
  background: var(--scroll-bar);
}
body::-webkit-scrollbar-track {
  background: var(--bg);
}
body::-webkit-scrollbar-corner {
  background: var(--bg);
}

div,
span,
p,
a,
input,
pre {
  color: var(--text);
  font-family: var(--font-normal);
}

p {
  margin: 0;
}
</style>
