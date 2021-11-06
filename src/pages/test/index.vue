<template>
  <div class="testground">
    <div class="testground-title">
      <span>Anymoe UI Component TestGround</span>
    </div>
    <div class="testground-content">
      <div class="testground-content__item">
        <p class="testground-content-title">Button</p>
        <div class="testground-flex">
          <a-button>Default</a-button>
          <a-button type="primary">Primary</a-button>
          <a-button type="primary" round>Round</a-button>
          <a-button type="primary" round anim>Anim</a-button>
        </div>
      </div>
      <div class="testground-content__item">
        <p class="testground-content-title">Clickable Text</p>
        <div class="testground-flex">
          <a-clickable-text>Default</a-clickable-text>
          <a-clickable-text type="primary">Primary</a-clickable-text>
          <a-clickable-text type="secondary">Secondary</a-clickable-text>
        </div>
      </div>
      <div class="testground-content__item">
        <p class="testground-content-title">Input</p>
        <div class="testground-flex">
          <a-input placeholder="Default"></a-input>
          <a-input placeholder="Round" round></a-input>
          <a-input placeholder="With Icon">
            <template v-slot:prefix>
              <SearchIcon />
            </template>
          </a-input>
          <a-input placeholder="Large" size="large"></a-input>
          <a-input placeholder="Large round" size="large" round></a-input>
          <a-input placeholder="Large with icon" size="large">
            <template v-slot:prefix>
              <SearchIcon />
            </template>
          </a-input>
        </div>
      </div>
      <div class="testground-content__item">
        <p class="testground-content-title">Card</p>
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
      <div class="testground-content__item">
        <p class="testground-content-title">Split</p>
        <div class="testground-flex">
          <a-split></a-split>
          <a-split height="4px" round></a-split>
        </div>
      </div>
      <div class="testground-content__item">
        <p class="testground-content-title">Float</p>
        <div class="testground-flex">
          <a-button type="primary" @click="() => (floatVisible = true)">Show</a-button>
          <a-float v-model:visible="floatVisible">
            <p>This is a float.</p>
          </a-float>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SearchIcon from '@/components/icon/Search.vue';
import ASplit from '@/components/ui/packages/split/ASplit.vue';
import AButton from '@/components/ui/packages/button/AButton.vue';

export default defineComponent({
  components: {
    SearchIcon,
    AButton,
  },
  data() {
    return {
      floatVisible: false,
    };
  },
});
ASplit;
</script>


<style lang="scss" scoped>
.testground {
  user-select: none;
  &-title {
    height: 56px;
    line-height: 56px;
    font-size: 24px;
    letter-spacing: 0.05rem;
    font-weight: 600;
  }
  &-content {
    &-title {
      font-weight: 600;
      font-size: 18px;
      margin: 12px 0;
    }
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
