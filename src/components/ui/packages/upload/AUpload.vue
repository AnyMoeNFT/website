<template>
  <div
    class="a-upload"
    ref="upload"
    @dragenter="handleDragEnter"
    @dragover="handleDragOver"
    @dragleave="handleDragLeave"
    @drop="handleDrop"
  >
    <slot v-if="showDefault"></slot>
    <slot name="dragging" v-if="dragging"></slot>
    <slot name="uploading" v-if="compStatus === 'uploading'"></slot>
    <slot name="error" v-if="compStatus === 'error'"></slot>
    <slot name="success" v-if="compStatus === 'success'"></slot>
  </div>
</template>

<script lang="ts">
// This component itself doesn't trigger or handle any upload operation.
// It's just a template and supports exposing dropped files to its parent.
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
      return (this.compStatus === 'default' || !this.compStatus) && !this.dragging;
    },
  },
  methods: {
    handleDragEnter(e: DragEvent) {
      this.dragging = true;
      e.preventDefault();
    },
    handleDragOver(e: DragEvent) {
      e.preventDefault();
    },
    handleDragLeave(e: DragEvent) {
      const currentTarget = e.currentTarget as HTMLElement;
      if (currentTarget && currentTarget.contains(e.relatedTarget as HTMLElement)) {
        return;
      }
      this.dragging = false;
    },
    handleDrop(e: DragEvent) {
      if (!e.dataTransfer) {
        return;
      }
      const files = e.dataTransfer.files;
      if (files && files.length) {
        this.$emit('upload', files[0]);
      }
      this.dragging = false;
      e.preventDefault();
      e.stopPropagation();
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
