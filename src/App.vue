<script setup lang="ts">
import DataHubHeader from '@/layouts/DataHubHeader.vue'
</script>

<template>
  <div>
    <nav class="nav">
      <DataHubHeader></DataHubHeader>
    </nav>
    <div class="body">
      <RouterView to="/"></RouterView>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  z-index: 999;
  background-color: var(--bs-body-bg);
}
.body {
  height: 500px;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
