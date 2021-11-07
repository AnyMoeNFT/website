<template>
  <div class="a-upload">
    <slot></slot>
    <slot name="dragging" v-if="dragging"></slot>
    <slot name="uploading" v-if="status === 'uploading'"></slot>
    <slot name="error" v-if="status === 'error'"></slot>
    <slot name="success" v-if="status === 'success'"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    status: {
      type: String,
      default: '',
    },
  },
  watch: {
    status(val) {
      this.compStatus = val;
    },
  },
  data() {
    return {
      dragging: false,
      compStatus: 'default',
    };
  },
  computed: {
    showDefault() {
      return this.status === 'default' && !this.dragging;
    },
  },
});
</script>


<style lang="scss">
.a-upload {
  width: 100%;
  height: 100%;
  border-radius: 24px;
  filter: drop-shadow(2px 2px 4px var(--shadow-10));
  border: 2px dashed vaR(--border);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
