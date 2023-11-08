<script lang="ts" setup>
import { ref } from 'vue'
import logo from '@/assets/logo.svg'
import { toggle } from '@/utils/Theme'
import { Sunny, Moon } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

let isLight = ref(true)

function doTest() {
  ElMessage({
    type: 'success',
    message: '恭喜你，这是一条成功消息'
  })
}
</script>

<template>
  <div
    class="h-header sticky top-0 z-[999] bg-white dark:bg-[#121212] px-4 lg:px-16 w-full flex items-center border-b-slate dark:border-b-primary-dark border-b"
  >
    <el-image class="h-header w-[50px]" :src="logo" fit="cover"></el-image>
    <div class="ml-auto">
      <el-button @click="doTest()" text>测试</el-button>
      <el-switch
        @change="toggle"
        v-model="isLight"
        inline-prompt
        :active-icon="Sunny"
        :inactive-icon="Moon"
      />
    </div>
  </div>
</template>
