<template>
  <div class="waiting">
    <div class="waiting-logo">
      <Logo />
    </div>
    <div class="waiting-text">
      <a-gradient-text class="waiting-text__main" size="4.5rem"
        >Link virtual<br class="desktop-hide" />
        and reality</a-gradient-text
      >
      <div class="waiting-text__sub">A brand new NFT world is coming...</div>
      <div class="waiting-text__action">
        <a-button size="large" round disabled type="primary"
          >Stand by for more information</a-button
        >
      </div>
    </div>
    <div class="waiting-footer">
      <div>AnyMoe Team © 2021</div>
    </div>
    <a-lottie class="waiting-bg" :animData="waitingBgAnim"></a-lottie>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Logo from '@/components/icon/Logo.vue';
import waitingBgAnim from '@/lottie/waiting-bg.json';

export default defineComponent({
  components: {
    Logo,
  },
  setup() {
    return {
      waitingBgAnim,
    };
  },
});
</script>

<style lang="scss" scoped>
.desktop-hide {
  display: none;
}

.waiting {
  padding-top: 5.5rem;
  box-sizing: border-box;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  &-logo {
    z-index: 1;
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
    z-index: 1;
    div {
      width: 100%;
      text-align: center;
    }
    &__main {
      filter: drop-shadow(0 8px 48px fade(var(--primary), 10%));
      text-shadow: 0 2px 12px var(--shadow-10);
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
    padding: 3rem 0 4rem 0;
    position: relative;
    z-index: 1;
    div {
      color: var(--bg-alter);
      width: 100%;
      text-align: center;
      letter-spacing: 0.05rem;
      text-shadow: 0 2px 4px var(--shadow-5);
    }
  }
  &-bg {
    z-index: 0;
    position: fixed;
    bottom: -8px;
    left: 0;
    width: 100vw;
    filter: drop-shadow(0 4px 8px var(--shadow-20)) opacity(0.6);
  }
}

@media screen and (max-width: 1280px) {
  .waiting {
    &-bg {
      width: 1280px;
      left: calc((100vw - 1280px) / 2);
    }
  }
}

@media screen and (max-width: 767px) {
  .desktop-hide {
    display: block;
  }
  .waiting {
    padding-top: 3.5rem;
    &-text {
      &__main {
        font-size: 80px !important;
        margin-top: 1.5rem;
      }
      &__sub {
        font-size: 24px;
        margin-top: 3.5rem;
      }
    }
  }
}
@media screen and (max-width: 767px) and (max-height: 865px) {
  .desktop-hide {
    display: block;
  }
  .waiting {
    padding-top: 1.5rem;
    &-logo {
      svg {
        width: 108px;
        height: 108px;
      }
    }
    &-text {
      &__main {
        font-size: 64px !important;
        margin-top: 0.75rem;
      }
      &__sub {
        font-size: 24px;
        margin-top: 1.5rem;
      }
      &__action {
        margin-top: 5rem;
      }
    }
  }
}

@media screen and (max-width: 475px) {
  .waiting {
    &-text {
      &__main {
        font-size: 58px !important;
        margin-top: 0.25rem;
      }
      &__sub {
        font-size: 20px;
        margin-top: 1rem;
      }
      &__action {
        margin-top: 3.5rem;
      }
    }
  }
}
</style>
