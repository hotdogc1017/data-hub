<script lang="ts" setup>
import {} from 'vue'
import { type PrecheckFail } from '@/views/runData/utils'

const props = defineProps<{
  /** 获取失败原因 */
  list: PrecheckFail[]
}>()
</script>

<template>
  <ul class="container">
    <li v-for="{ brand, description } in props.list" :key="brand">
      <el-alert :title="brand" type="error" :description="description" show-icon />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.container {
  li {
    padding: 20px 0;
  }
}
</style>
