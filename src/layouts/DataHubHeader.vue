<script lang="ts" setup>
import { ref } from 'vue'
import logo from '@/assets/logo.svg'
import { toggle } from '@/utils/Theme'
import { Sunny, Moon } from '@element-plus/icons-vue'
import { ElMessage, ClickOutside as vClickOutside } from 'element-plus'
import { useLoadingAnimationUrl } from '@/stores/localStorage/loadingAnimationUrl'
import * as LottiePlayer from '@lottiefiles/lottie-player'
import { useLoading } from '@/stores/loading'

const loading = useLoading()
let isLight = ref(true)
let visiblePopover = ref(false)
const animationUrl = useLoadingAnimationUrl()
const allLoadingAnimation = import.meta.glob('@/assets/animations/loading_*.json')

function switchLoadingAnimation(url: string) {
  visiblePopover.value = false
  animationUrl.setUrl(url)
  ElMessage({
    type: 'success',
    message: '设置成功',
    showClose: true
  })
}
</script>

<template>
  <div
    class="h-header sticky top-0 z-[999] bg-white dark:bg-[#121212] px-4 lg:px-16 w-full flex items-center border-b-slate dark:border-b-primary-dark border-b"
  >
    <el-image class="h-header w-[50px]" :src="logo" fit="cover"></el-image>
    <div class="ml-auto">
      <el-button @click="loading.load(200, 5000)" text>莫名其妙加载5秒</el-button>
      <el-popover
        :visible="visiblePopover"
        :popper-class="'w-fit'"
        placement="bottom"
        trigger="click"
      >
        <template #reference>
          <el-button
            @click="() => (visiblePopover = true)"
            v-click-outside="() => (visiblePopover = false)"
            ref="popoverRef"
            class="!px-4 !m-0"
            link
            >选择加载动画</el-button
          >
        </template>
        <ul>
          <li
            :class="{ 'bg-primary-bg': animationUrl.url.value === url }"
            @click="switchLoadingAnimation(url)"
            class="px-4 flex justify-center hover:bg-primary-bg hover:cursor-pointer rounded-lg"
            v-for="(_, url) in allLoadingAnimation"
            :key="url"
          >
            <lottie-player class="h-10 w-10" :src="url" autoplay loop mode="normal">
            </lottie-player>
          </li>
        </ul>
      </el-popover>
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
