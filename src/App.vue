<script setup lang="ts">
import DataHubHeader from '@/layouts/DataHubHeader.vue'
import DataHubBody from '@/layouts/DataHubBody.vue'
</script>

<template>
  <div>
    <nav class="nav">
      <DataHubHeader></DataHubHeader>
    </nav>
    <div class="body">
      <DataHubBody></DataHubBody>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$height: 50px;
.nav {
  width: 100%;
  height: $height;
  position: fixed;
  top: 0;
  z-index: 999;
  background-color: var(--bs-body-bg);
}

.body {
  padding: $height 0;
}
</style>
