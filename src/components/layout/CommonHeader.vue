<template>
  <div class="page-header">
    <div class="logo">
      <Logo />
    </div>
    <div class="search">
      <a-input size="large" placeholder="Search any moe things..." v-model="searchKeyword" round>
        <template v-slot:prefix>
          <Search />
        </template>
      </a-input>
    </div>
    <div class="user"></div>
    <div class="connect">
      <a-button class="connect-btn" type="primary" round anim>Connect Wallet</a-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Logo from '@/components/icon/Logo.vue';
import Search from '@/components/icon/Search.vue';

export default defineComponent({
  components: {
    Logo,
    Search,
  },
  data() {
    return {
      searchKeyword: '',
    };
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
  .logo {
    width: 54px;
    height: 54px;
    opacity: 0.8;
    filter: drop-shadow(4px 4px 2px var(--shadow-10));
    transform: translateY(-2px);
    margin-right: 22px;
  }
  .search {
    flex: 1;
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
