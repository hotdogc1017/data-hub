<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { State, type TaskMode, type PreCheckFail as Failed } from '@/views/runData/utils'
import { UploadFilled } from '@element-plus/icons-vue'
import { namedAxios } from '@/utils/request'
import PreCheckFail from '@/views/runData/updateByBrand/upload/precheckFail/index.vue'
import { ElMessage } from 'element-plus'
import { useLoading } from '@/stores/loading'

const router = useRouter()
const axios = namedAxios('runData')
const uploadBaseURL = ref(import.meta.env.VITE_REQUEST_BASE_URI)
const loading = useLoading()
let failedList = ref<Failed[]>([])
let switchUpload = ref(true)
let hasFailed = computed(() => failedList.value.length !== 0 && !switchUpload.value)

function handleSuccess(res: TaskMode[]) {
  loading.load()
  axios
    .post<Failed[]>('/preCheck', res)
    .then(({ data }) => {
      if (data && Array.isArray(data) && data.length !== 0) {
        failedList.value = data
        switchUpload.value = false
        ElMessage.error('文件内容有误，请检查后重新上传')
        throw new Error()
      } else {
        return axios.post('/upload', res)
      }
    })
    .then(() => {
      router.push({ name: 'list' })
    })
    .finally(loading.unload)
}
</script>

<template>
  <div class="h-full flex justify-center" :class="{ 'items-center': !hasFailed }">
    <template v-if="!hasFailed">
      <div class="flex flex-col">
        <el-upload
          drag
          :action="`${uploadBaseURL}/runData/readByExcel`"
          multiple
          :on-success="handleSuccess"
        >
          <el-icon color="#999" size="50"><upload-filled /></el-icon>
          <div>点击或者拖动文件上传</div>
          <template #tip>
            <div class="py-4">只能上传excel文件, 且行数最好不要超过一万行</div>
          </template>
        </el-upload>
        <div class="py-4 flex justify-end">
          <el-button type="primary" @click="router.push({ name: 'list' })" round
            >任务列表</el-button
          >
          <el-button
            v-if="failedList.length !== 0"
            type="danger"
            @click="switchUpload = false"
            round
            >查看错误</el-button
          >
        </div>
      </div>
    </template>
    <template v-else>
      <PreCheckFail :list="failedList" @reupload="switchUpload = true"></PreCheckFail>
    </template>
  </div>
</template>
