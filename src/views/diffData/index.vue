<script lang="ts" setup>
import { ref, onBeforeMount, computed } from 'vue'
import { namedAxios } from '@/utils/request'
import { useRouter } from 'vue-router'

import MonacoDiffEditor from '@/components/globals/MonacoDiffEditor.vue'

let index = ref(1)
const router = useRouter()
let oldData = ref('')
let newData = ref('')
const showOld = ref(false)
const showNew = ref(false)
const request = namedAxios('runData')

const parsedData = computed(() => {
  return {
    oldData: tryJSONParse(oldData.value),
    newData: tryJSONParse(newData.value)
  }
})

async function getNext() {
  const { data } = await request.post(
    '/verify',
    new URLSearchParams({ index: String(index.value) })
  )
  index.value++
  console.log(data)
}

const tryJSONParse = (str: string) => {
  try {
    return JSON.parse(str)
  } catch (e) {
    console.error(`${str}无法解析为 JSON 格式`)
    return str
  }
}

async function clear() {
  await request.post('/clearVerify')
}

onBeforeMount(async () => {
  // await getNext()
})
</script>

<template>
  <div class="h-full">
    <div class="my-4 flex gap-2">
      <el-button @click="router.push({ name: 'list' })" type="primary" round>任务列表</el-button>
      <el-button @click="showOld = true" :type="oldData ? 'success' : 'primary'" link>{{
        oldData ? '左侧已填充' : '填充左侧'
      }}</el-button>
      <el-button link :type="newData ? 'success' : 'primary'" @click="showNew = true">{{
        newData ? '右侧已填充' : '填充右侧'
      }}</el-button>
    </div>
    <MonacoDiffEditor :original="parsedData.oldData" :modified="parsedData.newData" />

    <el-dialog v-model="showOld" title="">
      <el-input v-model="oldData" :row="50" type="textarea"></el-input>
    </el-dialog>
    <el-dialog v-model="showNew" title="">
      <el-input v-model="newData" :row="50" type="textarea"></el-input>
    </el-dialog>
  </div>
</template>

<style scoped></style>
