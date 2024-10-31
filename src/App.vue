<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import DataHubHeader from '@/layouts/DataHubHeader.vue'
import * as LottiePlayer from '@lottiefiles/lottie-player'
import type { LottiePlayer as LottiePlayerType } from '@lottiefiles/lottie-player'
import { useLoadingAnimationUrl } from '@/stores/localStorage/loadingAnimationUrl'
import { useLoading } from '@/stores/loading'

const lottiePlayer = ref<LottiePlayerType | null>()
const loading = useLoading()
const animationUrl = useLoadingAnimationUrl()

watchEffect(() => {
  if (loading.state) {
    lottiePlayer.value?.load(animationUrl.url.value)
  }
})
</script>

<template>
  <Teleport to="body">
    <div
      v-show="loading.state"
      class="fixed flex justify-center items-center bg-slate-800/50 inset-0 w-full h-full z-[9998]"
    >
      <lottie-player ref="lottiePlayer" class="h-[100px] w-[100px]" autoplay loop mode="normal">
      </lottie-player>
    </div>
  </Teleport>
  <div>
    <DataHubHeader></DataHubHeader>
    <div class="h-body px-5 lg:px-40 w-full lg:xl:flex lg:xl:justify-center">
      <div class="h-full lg:xl:w-3/4">
        <RouterView to="/"></RouterView>
      </div>
    </div>
  </div>
</template>
