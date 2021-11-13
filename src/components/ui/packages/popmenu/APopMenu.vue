<template>
  <a-popper ref="popper" :placement="placement" :offset="offset">
    <slot></slot>
    <template v-slot:popup>
      <div class="a-popup-menu" :style="menuStyle">
        <div
          class="a-popup-menu__item"
          v-for="item in items"
          :key="getItemKey(item)"
          @click="handleItemClick(getItemKey(item))"
        >
          <span>{{ typeof item === 'string' ? item : item.name }}</span>
        </div>
      </div>
    </template>
  </a-popper>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { formatStyleSize } from '../../utils';
import type { APopper } from '../popper';

interface AnyUIPopMenuItem {
  name: string;
  key?: string;
}

export default defineComponent({
  props: {
    placement: {
      type: String,
      default: 'bottom',
    },
    offset: {
      type: Number,
      default: 12,
    },
    items: {
      type: Array,
      default: () => [],
    },
    width: {
      type: Number,
      default: 180,
    },
    hideAfterClick: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    menuStyle() {
      return {
        width: formatStyleSize(this.width),
      };
    },
  },
  methods: {
    getItemKey(item: string | AnyUIPopMenuItem) {
      if (typeof item === 'string') {
        return item;
      }
      return item.key || item.name;
    },
    handleItemClick(key: string) {
      if (this.$refs.popper && this.hideAfterClick) {
        const popper = this.$refs.popper as APopper;
        popper.hide();
      }
      this.$emit('command', key);
    },
  },
});
</script>

<style lang="scss">
.a-popup-menu {
  border-radius: 12px;
  background: var(--bg-alter);
  box-sizing: border-box;
  padding: 8px 0;
  box-shadow: 0 4px 12px var(--shadow-10);
  &__item {
    padding: 6px 14px;
    font-size: 14px;
    user-select: none;
    transition: all 100ms ease;
  }
  &__item:hover {
    background: var(--bg);
  }
}
</style>