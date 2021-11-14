<template>
  <a-float v-model:visible="visible" className="connect" roundRadius="36" padding="40" width="420">
    <div class="connect-title">
      {{ $t('common.wallet.float_title') }}
    </div>
    <div class="connect-desc">
      {{ $t('common.wallet.float_desc') }}
    </div>
    <div class="connect-providers">
      <div class="connect-provider connect-provider--metamask">
        <span>MetaMask</span>
        <MetaMask />
      </div>
      <div class="connect-provider connect-provider--wc">
        <span>WalletConnect</span>
        <WalletConnect />
      </div>
    </div>
    <div class="connect-footer">
      <span>{{ $t('common.wallet.float_agree.agree') }}</span>
      <br />
      <a-clickable-text>{{ $t('common.wallet.float_agree.tos') }}</a-clickable-text>
      <span class="and">{{ $t('common.wallet.float_agree.and') }}</span>
      <a-clickable-text>{{ $t('common.wallet.float_agree.privacy') }}</a-clickable-text>
      <span>{{ $t('common.wallet.float_agree.end') }}</span>
    </div>
  </a-float>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MetaMask from '../icon/MetaMask.vue';
import WalletConnect from '../icon/WalletConnect.vue';

export default defineComponent({
  components: {
    MetaMask,
    WalletConnect,
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    show() {
      this.visible = true;
    },
  },
});
</script>

<style lang="scss" scoped>
.connect {
  user-select: none;
  &-title {
    user-select: none;
    text-align: center;
    font-size: 22px;
    font-weight: bold;
  }
  &-desc {
    font-size: 14px;
    margin-top: 8px;
    text-align: center;
    color: var(--text-secondary);
    user-select: none;
  }
  &-providers {
    user-select: none;
    margin-top: 18px;
    .connect-provider {
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 24px;
      border-radius: 28px;
      box-shadow: 0px 4px 12px var(--shadow-10);
      transition: 100ms ease;
      cursor: pointer;
      margin: 0 8px 16px 8px;
      svg {
        width: 32px;
        height: 32px;
        filter: drop-shadow(0 2px 2px var(--shadow-10));
      }
      span {
        font-weight: bold;
        font-size: 15px;
        color: #fff;
        filter: drop-shadow(0 2px 2px var(--shadow-10));
        letter-spacing: 0.05rem;
      }
    }
    .connect-provider:hover {
      opacity: 0.875;
      box-shadow: 0px 8px 20px var(--shadow-20);
      transform: translateY(-2px);
    }
    .connect-provider:active {
      opacity: 0.9375;
    }
    .connect-provider--metamask {
      background: linear-gradient(90deg, #d8701b, #f38123);
    }
    .connect-provider--wc {
      background: linear-gradient(90deg, #367bc5, #3b99fc);
    }
    .connect-provider:last-of-type {
      margin-bottom: 0;
    }
  }
  &-footer {
    margin-top: 20px;
    text-align: center;
    font-size: 14px;
    user-select: none;
    .and {
      margin: 0 4px;
    }
    span {
      color: var(--text-secondary);
      line-height: 20px;
    }
  }
}
</style>