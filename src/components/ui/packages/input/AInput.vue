<template>
  <div
    :class="{
      'a-input': true,
      'a-input--large': size === 'large',
      'a-input--round': round,
      'a-input--has-prefix': hasPrefix,
    }"
    :style="style"
  >
    <input
      class="a-input__inner"
      :placeholder="placeholder"
      v-model="storedValue"
      @input="handleInput"
      @keydown.enter="handleEnterDown"
    />
    <div class="a-input__prefix" v-if="hasPrefix"><slot name="prefix"></slot></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useSlots } from 'vue';

export default defineComponent({
  props: {
    width: {
      type: [String, Number],
      default: '100%',
    },
    size: {
      type: String,
      default: 'medium',
    },
    round: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [String, Number],
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      storedValue: this.value,
    };
  },
  watch: {
    value(val) {
      this.storedValue = val;
    },
  },
  computed: {
    style() {
      return {
        width: typeof this.width === 'number' ? `${this.width}px` : this.width,
      };
    },
    hasPrefix() {
      return !!useSlots().prefix;
    },
  },
  methods: {
    handleInput(e: Event) {
      const target = e.target as HTMLInputElement;
      this.$emit('input', target.value);
    },
    handleEnterDown() {
      this.$emit('submit', this.storedValue);
    },
  },
});
</script>

<style lang="scss">
.a-input {
  height: 40px;
  position: relative;
  box-sizing: border-box;
  &__inner {
    width: 100%;
    height: 100%;
    line-height: 32px;
    padding: 4px 14px;
    border: 1px solid var(--border);
    border-radius: 4px;
    box-sizing: border-box;
    background: var(--bg-alter);
    font-size: 14px;
    letter-spacing: 0.025rem;
    box-shadow: 2px 8px 16px var(--shadow-10);
  }
  &__inner:focus {
    outline: 0;
  }
  &__inner::placeholder {
    color: var(--placeholder);
  }
}
.a-input.a-input--round {
  .a-input__inner {
    border-radius: 20px;
    padding: 4px 18px;
  }
}
.a-input.a-input--has-prefix {
  .a-input__prefix {
    position: absolute;
    top: 0;
    left: 0;
    line-height: 40px;
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: 8px;
    svg {
      width: 22px;
      height: 22px;
      path {
        stroke: var(--placeholder);
      }
    }
  }
  .a-input__inner {
    padding-left: 32px;
  }
}
.a-input--large {
  height: 48px;
  .a-input__inner {
    line-height: 40px;
    font-size: 16px;
    padding: 4px 18px;
    box-shadow: 0px 8px 20px var(--shadow-10);
  }
}
.a-input.a-input--round.a-input--large {
  .a-input__inner {
    border-radius: 24px;
    padding: 4px 22px;
  }
}
.a-input.a-input--large.a-input--has-prefix {
  .a-input__prefix {
    svg {
      width: 26px;
      height: 26px;
    }
  }
  .a-input__inner {
    padding-left: 36px;
  }
}
.a-input.a-input--round.a-input--large.a-input--has-prefix {
  .a-input__prefix {
    padding-left: 12px;
  }
  .a-input__inner {
    padding-left: 40px;
  }
}
</style>