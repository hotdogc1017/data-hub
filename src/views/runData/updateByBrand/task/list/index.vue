<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessageBox as msgBox, ElMessage as msg } from 'element-plus'
import { Refresh, Search, Delete, CloseBold, VideoPlay, VideoPause } from '@element-plus/icons-vue'
import { type TaskMode, getStateInfo } from '@/views/runData/utils'
import { namedAxios } from '@/utils/request'

const router = useRouter()
const axios = namedAxios('runData')
let list = ref<TaskMode[]>([])
let pointerIndex = ref<number | null>()
const stateInfo = ref(getStateInfo())
let started = ref<boolean>()
let timeout: number | undefined

async function flush() {
  const { data } = await axios.post<TaskMode[]>('getTask')
  return (list.value = data)
}

function removeOne(task: TaskMode) {
  axios
    .post('remove', new URLSearchParams({ brand: task.brand }))
    .then(() => msg.success(`品牌：${task.brand}所关联的任务已被移除`))
    .then(() => flush())
}

function removeAll() {
  msgBox
    .confirm('这将会移除所有[等待中]的任务，要继续吗？', 'Warning')
    .then(() => axios.post('removeAll'))
    .then(() => flush())
    .then(() => msg.success('移除成功'))
    .catch(() => {})
}

function startOrPause(shutdown?: boolean) {
  if (!started.value) {
    ;(started.value === void 0 ? axios.post('doTest') : Promise.resolve())
      .then(() => (started.value = !started.value))
      .then(() => startOrPause(false))
  } else {
    if (shutdown) {
      started.value = !started.value
      clearTimeout(timeout)
    } else {
      timeout = setTimeout(async () => {
        await flush()
        startOrPause(false)
      }, 1000 * 60 * 5)
    }
  }
}

onBeforeMount(() => {
  flush()
})
</script>

<template>
  <div>
    <div class="py-6">
      <el-button @click="flush()" :icon="Refresh" circle />
      <el-button :icon="Search" disabled="" circle />
      <el-button @click="removeAll()" :icon="Delete" circle />
      <el-button
        @click="startOrPause(true)"
        :type="started ? 'danger' : 'success'"
        :icon="started ? VideoPause : VideoPlay"
        circle
      />
      <el-button @click="router.push({ name: 'upload' })" round>创建任务</el-button>
    </div>
    <ul class="flex flex-wrap">
      <el-backtop :right="50" :bottom="100" />
      <el-card
        shadow="never"
        :body-class="'!py-1 !px-2'"
        class="h-fit w-2/5 sm:w-1/3 md:w-1/5 lg:w-1/4 xl:w-1/4 bg-white !rounded-lg flex flex-col justify-between hover:border-primary hover:cursor-pointer"
        v-for="(
          { brand, state, handleType, mappingHandleType, createTime, startDateTime, endDateTime },
          index
        ) in list"
        @mouseenter="pointerIndex = index"
        @mouseleave="pointerIndex = null"
      >
        <!-- <Transition name="el-fade-in" :duration="500">
          <el-button
            @click="removeOne(list[index])"
            v-if="(pointerIndex || pointerIndex === 0) && pointerIndex === index && !state"
            type="danger"
            size="small"
            :icon="CloseBold"
            circle
          ></el-button>
        </Transition> -->
        <ul class="">
          <li class="flex justify-between">
            <p class="truncate">{{ brand }}</p>
            <el-tag :type="stateInfo[state?.state ?? 'waiting'].topic">{{
              stateInfo[state?.state ?? 'waiting'].description
            }}</el-tag>
          </li>
          <li class="py-1 text-xs text-slate-500">
            <span>开始时间：{{ startDateTime || '未开始' }}</span>
          </li>
          <li class="py-1 text-xs text-slate-500">
            <span>结束时间：{{ endDateTime || '未结束' }}</span>
          </li>
          <li class="py-1 text-xs text-slate-500">
            <span>es处理方式: {{ handleType?.title || '忽略' }}</span>
          </li>
          <li class="pt-1 text-xs text-slate-500">
            <span>映射处理方式：{{ mappingHandleType?.title || '忽略' }}</span>
          </li>
        </ul>
      </el-card>
    </ul>
  </div>
</template>
