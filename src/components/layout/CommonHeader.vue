<template>
  <div class="page-header">
    <div class="logo">
      <Logo @click="handleLogoClick" />
    </div>
    <div class="search">
      <a-input
        v-model="searchKeyword"
        size="large"
        :placeholder="$t('common.search.placeholder')"
        round
      >
        <template v-slot:prefix>
          <Search />
        </template>
      </a-input>
    </div>
    <div class="user"></div>
    <div class="connect">
      <a-button class="connect-btn" type="primary" round anim @click="showConnectFloat">{{
        $t('common.wallet.connect')
      }}</a-button>
    </div>
    <ConnectFloat ref="connect" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Logo from '@/components/icon/Logo.vue';
import Search from '@/components/icon/Search.vue';
import ConnectFloat from '@/components/common/ConnectFloat.vue';

export default defineComponent({
  components: {
    Logo,
    Search,
    ConnectFloat,
  },
  data() {
    return {
      searchKeyword: '',
    };
  },
  methods: {
    handleLogoClick() {
      this.$router.push('/');
    },
    showConnectFloat() {
      if (!this.$refs.connect) {
        return;
      }
      const floatComp = this.$refs.connect as typeof ConnectFloat;
      floatComp.show();
    },
  },
});
</script>

<style lang="scss" scoped>
.page-header {
  height: 54px;
  margin: 20px 0 8px 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  user-select: none;
  .logo {
    width: 54px;
    height: 54px;
    opacity: 0.8;
    filter: drop-shadow(4px 4px 2px var(--shadow-10));
    transform: translateY(-2px);
    margin-right: 22px;
    cursor: pointer;
    transition: opacity 0.2s;
    &:deep(.a-button) {
      box-shadow: 0px 4px 16px var(--shadow-10);
    }
  }
  .logo:hover {
    opacity: 0.95;
  }
  .search {
    flex: 1;
    &:deep(.a-input__inner) {
      box-shadow: 0px 4px 16px var(--shadow-10);
    }
  }
  .connect {
    margin-left: 20px;
    &-btn {
      font-size: 15px;
      font-weight: bold;
    }
  }
}

@media screen and (max-width: 767px) {
  .page-header {
    margin: 20px 0 4px 0;
  }
}
</style>
