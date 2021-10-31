<template>
  <div class="testground">
    <div class="testground-title">
      <span>Anymoe UI Component TestGround</span>
    </div>
    <div class="testground-content">
      <div class="testground-content__item">
        <p class="testgroud-content-title">Button</p>
        <div class="testground-flex">
          <a-button>Default</a-button>
          <a-button type="primary">Primary</a-button>
          <a-button type="primary" round>Round</a-button>
          <a-button type="primary" round anim>Anim</a-button>
        </div>
      </div>
      <div class="testground-content__item">
        <p class="testgroud-content-title">Clickable Text</p>
        <div class="testground-flex">
          <a-clickable-text>Default</a-clickable-text>
          <a-clickable-text type="primary">Primary</a-clickable-text>
          <a-clickable-text type="secondary">Secondary</a-clickable-text>
        </div>
      </div>
      <div class="testground-content__item">
        <p class="testgroud-content-title">Card</p>
        <div class="testground-flex">
          <a-card>
            <p>No Header</p>
          </a-card>
          <a-card title="Title">
            <p>With header</p>
          </a-card>
          <a-card>
            <p>With footer</p>
            <template v-slot:footer>
              <p>This is a footer</p>
            </template>
          </a-card>
          <a-card title="Title">
            <p>With header and footer</p>
            <template v-slot:footer>
              <p>This is a footer</p>
            </template>
          </a-card>
          <a-card fulfill>
            <p>This is a fulfill body</p>
            <template v-slot:footer>
              <p>This is a footer</p>
            </template>
          </a-card>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.testground {
  user-select: none;
  &-title {
    height: 56px;
    line-height: 56px;
    font-size: 24px;
    letter-spacing: 0.05rem;
    margin-bottom: 12px;
  }
  &-content {
    &:deep(.testgroud-content-title) {
      margin-bottom: 16px;
    }
    &__item {
      margin-bottom: 24px;
    }
  }
  &:deep(.testground-flex) {
    display: flex;
    * {
      margin-right: 18px;
    }
    *:last-child {
      margin-right: 0;
    }
  }
}
</style>
