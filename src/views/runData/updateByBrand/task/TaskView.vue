<script setup lang="ts">
import { ref, computed } from 'vue'
import { type TaskMode, getStateInfo } from '@/views/runData/utils'

const prop = defineProps<{
  task: TaskMode
}>()

const stateInfo = ref()
const state = computed(() => {
  const stateInfo = getStateInfo()
  return stateInfo[prop.task.state?.state ?? 'waiting']
})
</script>

<template>
  <ul class="">
    <li class="flex justify-between">
      <p class="truncate">{{ prop.task.brand }}</p>
      <el-tag :type="state.topic">{{ state.description }}</el-tag>
    </li>
    <li class="py-1 text-xs text-slate-500">
      <span>开始时间：{{ prop.task.startDateTime || '未开始' }}</span>
    </li>
    <li class="py-1 text-xs text-slate-500">
      <span>结束时间：{{ prop.task.endDateTime || '未结束' }}</span>
    </li>
    <li class="py-1 text-xs text-slate-500">
      <span>es处理方式: {{ prop.task.handleType?.title || '忽略' }}</span>
    </li>
    <li class="pt-1 text-xs text-slate-500">
      <span>映射处理方式：{{ prop.task.mappingHandleType?.title || '忽略' }}</span>
    </li>
  </ul>
</template>
