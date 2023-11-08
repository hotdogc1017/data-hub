<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})

interface Props {
  // width: string
}

const props = withDefaults(defineProps<Props>(), {
  // width: "100px"
})
</script>

<template>
  <div>
    <el-popover v-bind="$attrs" placement="bottom-end" :hide-after="150" trigger="hover"
                :show-arrow="false"
                transition="popover">
      <template #reference>
        <slot></slot>
      </template>
      <div class="popover-body">
        <slot name="dropdown"></slot>
      </div>
    </el-popover>
  </div>
</template>

<style lang="scss">
@use "@/styles/animation/index";

.el-popover.el-popper {
  padding: 5px 12px;
  background-color: var(--bs-body-bg);
  border: 1px solid var(--datahub-menu-popover-line);
}

.popover-body {
  display: inline-block;
  width: 100%;
}
</style>