<template>
  <div class="page-footer">
    <a-split round :margin="12"></a-split>
    <div class="page-footer__content">
      <div class="logo">
        <Logo />
      </div>
      <div class="public-files">
        <a-clickable-text type="secondary">{{ $t('common.footer.tos') }}</a-clickable-text>
        <a-clickable-text type="secondary">{{ $t('common.footer.privacy') }}</a-clickable-text>
      </div>
      <div class="links">
        <a-clickable-text type="secondary">{{ $t('common.footer.explore') }}</a-clickable-text>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Logo from '../icon/Logo.vue';

export default defineComponent({
  components: {
    Logo,
  },
});
</script>

<style lang="scss" scoped>
.page-footer {
  width: 100%;
  position: relative;
  user-select: none;
  padding-bottom: 16px;
  &__content {
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;
    .logo {
      width: 40px;
      height: 40px;
      opacity: 0.2;
      margin-right: 20px;
    }
    .public-files {
      flex: 1;
      .a-clickable-text {
        margin-right: 20px;
      }
    }
  }
}
</style>