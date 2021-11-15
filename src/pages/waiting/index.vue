<template>
  <div class="waiting">
    <div class="waiting-logo">
      <Logo />
    </div>
    <div class="waiting-text">
      <a-gradient-text class="waiting-text__main" size="4.5rem"
        >Link reality and virtualization</a-gradient-text
      >
      <div class="waiting-text__sub">A brand new NFT world is coming...</div>
      <div class="waiting-text__action">
        <a-button size="large" round disabled type="primary"
          >Stand by for more information</a-button
        >
      </div>
    </div>
    <div class="waiting-footer">
      <a-split padding="32" />
      <div>AnyMoe Team © 2021</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Logo from '@/components/icon/Logo.vue';

export default defineComponent({
  components: {
    Logo,
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
.waiting {
  padding-top: 5.5rem;
  box-sizing: border-box;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  &-logo {
    opacity: 0.8;
    display: flex;
    justify-content: center;
    filter: drop-shadow(0 4px 8px var(--shadow-10));
    svg {
      width: 144px;
      height: 144px;
    }
  }
  &-text {
    margin-top: 1.5rem;
    flex: 1;
    div {
      width: 100%;
      text-align: center;
    }
    &__main {
      filter: drop-shadow(0 8px 48px fade(var(--primary), 10%));
    }
    &__sub {
      font-size: 32px;
      opacity: 0.5;
      margin-top: 1rem;
      letter-spacing: 0.05rem;
      text-shadow: 0 4px 24px var(--shadow-20);
    }
    &__action {
      margin-top: 6rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  &-footer {
    font-size: 14px;
    padding-bottom: 4rem;
    position: relative;
    div {
      color: var(--text-secondary-70);
      width: 100%;
      text-align: center;
      letter-spacing: 0.05rem;
    }
  }
}
</style>