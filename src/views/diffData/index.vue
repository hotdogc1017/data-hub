<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue'
import { namedAxios } from '@/utils/request.ts'
import { useRouter } from 'vue-router'

import MonacoDiffEditor from '@/components/globals/MonacoDiffEditor.vue'

let index = ref(1)
const router = useRouter()
let oldData = ref({
  id: 6,
  name: 'Student 6',
  score: 95,
  age: 20,
  major: 'Computer Science',
  year: 'Junior',
  email: 'student6@example.com'
})
let newData = ref({
  id: 7,
  name: 'Student 7',
  score: 89,
  age: 21,
  major: 'Mathematics',
  year: 'Senior',
  email: 'student7@example.com'
})
const request = namedAxios('runData')

async function getNext() {
  const { data } = await request.post(
    '/verify',
    new URLSearchParams({ index: String(index.value) })
  )
  index.value++
  console.log(data)
}

async function clear() {
  await request.post('/clearVerify')
}

onBeforeMount(async () => {
  await getNext()
})
</script>

<template>
  <div class="h-full">
    <div class="my-4">
      <el-button @click="getNext" type="primary" round>下一个</el-button>
      <el-button @click="clear" type="primary" round>清空</el-button>
      <el-button @click="router.push({ name: 'list' })" type="primary" round>任务列表</el-button>
    </div>
    <MonacoDiffEditor :original="oldData" :modified="newData" />
  </div>
</template>

<style scoped></style>
