<script lang="ts" setup>
import ZDropDown from '@/components/globals/ZDropDown.vue'
import ZDropDownItem from '@/components/globals/ZDropDownItem.vue'
</script>

<template>
  <div class="container-fluid body-container stain">
    <ZDropDown>
      <span style="font-size: 14px">text</span>
      <template #dropdown>
        <ZDropDownItem><span>12212</span></ZDropDownItem>
        <ZDropDownItem><span>42424</span></ZDropDownItem>
      </template>
    </ZDropDown>
  </div>
</template>
