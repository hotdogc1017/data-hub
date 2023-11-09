<script lang="ts" setup>
import { ref, onBeforeMount, computed } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessageBox as msgBox, ElMessage as msg } from 'element-plus'
import { Refresh, Search, Delete, CloseBold, VideoPlay, VideoPause } from '@element-plus/icons-vue'
import { type TaskMode, getStateInfo } from '@/views/runData/utils'
import { namedAxios } from '@/utils/request'
import { useLoading } from '@/stores/loading'

const loading = useLoading()
const router = useRouter()
const axios = namedAxios('runData')
let list = ref<TaskMode[]>([])
let pointerIndex = ref<number | null>()
const stateInfo = ref(getStateInfo())
let started = ref<boolean>()
let timeout: number | undefined

let successOfPercentage = computed(() => {
  return (list.value.filter(({ state }) => !!state).length / list.value.length) * 100 || 1
})

function flush(showTip: boolean = false) {
  loading.load()
  axios
    .post<TaskMode[]>('getTask')
    .then(({ data }) => {
      showTip &&
        msg({
          type: 'success',
          grouping: true,
          message: `刷新成功，共 ${data.length} 条任务`
        })
      list.value = data
    })
    .finally(loading.unload)
}

function removeOne(task: TaskMode) {
  msgBox
    .alert('确定要移除该任务吗？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      showCancelButton: true,
      type: 'warning'
    })
    .then(() => {
      axios
        .post('remove', new URLSearchParams({ brand: task.brand }))
        .then(() => msg.success(`品牌：${task.brand}所关联的任务已被移除`))
        .then(() => flush())
    })
}

function removeAll() {
  msgBox
    .confirm('这将会移除所有[等待中]的任务，要继续吗？', '提示')
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
      <el-button @click="flush(true)" :icon="Refresh" circle />
      <el-badge class="mx-4" value="⏳" type="primary">
        <el-button :icon="Search" disabled="" circle />
      </el-badge>
      <el-button @click="removeAll()" :icon="Delete" circle />
      <el-button
        @click="startOrPause(true)"
        :type="started ? 'danger' : 'success'"
        :icon="started ? VideoPause : VideoPlay"
        circle
      />
      <el-button @click="router.push({ name: 'upload' })" round>创建任务</el-button>
    </div>
    <el-progress
      v-if="started !== void 0"
      class="pb-6"
      :percentage="successOfPercentage"
      :stroke-width="15"
      status="success"
      :show-text="successOfPercentage === 100"
      :striped="successOfPercentage !== 100"
      :text-inside="successOfPercentage === 100"
      striped-flow
      :duration="10"
    />
    <el-empty v-if="list.length === 0" description="没有任务" />
    <ul v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-4">
      <el-backtop :right="50" :bottom="100" />
      <el-card
        shadow="never"
        :body-class="'relative !py-1 !px-2'"
        class="group !overflow-visible h-fit bg-white !rounded-lg flex flex-col justify-between hover:border-primary hover:cursor-pointer"
        v-for="(
          { brand, state, handleType, mappingHandleType, createTime, startDateTime, endDateTime },
          index
        ) in list"
        @mouseenter="pointerIndex = index"
        @mouseleave="pointerIndex = null"
      >
        <el-button
          class="absolute -top-2 -right-2 invisible"
          :class="{ 'group-hover:visible': !state }"
          @click="removeOne(list[index])"
          type="danger"
          size="small"
          :icon="CloseBold"
          circle
        ></el-button>
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
