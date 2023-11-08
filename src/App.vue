<script setup lang="ts">
import DataHubHeader from '@/layouts/DataHubHeader.vue'
// import * as LottiePlayer from '@lottiefiles/lottie-player'
// import A1 from '@/assets/animations/compeletable.json'
</script>

<template>
  <!-- <Teleport to="body">
    <div class="loading">
      <lottie-player :src="A1" autoplay loop mode="normal" style="width: 320px"> </lottie-player>
    </div>
  </Teleport> -->
  <div>
    <DataHubHeader></DataHubHeader>
    <div class="h-body px-2 sm:px-5 lg:px-40 w-full lg:xl:flex lg:xl:justify-center">
      <div class="h-full lg:xl:w-3/4">
        <RouterView to="/"></RouterView>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loading {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style>
