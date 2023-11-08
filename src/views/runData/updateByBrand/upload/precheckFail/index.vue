<script lang="ts" setup>
import {} from 'vue'
import { type PreCheckFail } from '@/views/runData/utils'

const props = defineProps<{
  list: PreCheckFail[]
}>()
const emits = defineEmits(['reupload'])
</script>

<template>
  <ul>
    <li class="py-4" v-for="{ brand, description } in props.list" :key="brand">
      <el-alert
        :closable="false"
        :title="brand"
        type="error"
        :description="description"
        show-icon
      />
    </li>
    <li class="py-4 flex justify-end">
      <el-button type="primary" round @click="$emit('reupload')">重新上传</el-button>
    </li>
  </ul>
</template>
