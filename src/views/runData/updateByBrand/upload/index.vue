<script lang="ts" setup>
import { ref } from 'vue'
import { State } from '@/views/runData/utils'
import { UploadFilled } from '@element-plus/icons-vue'
import { UploadResult } from '@/views/runData/hooks'

let isSuccess = ref<boolean | undefined>()

function handleResult(result: State) {
  console.log(result)
}
</script>

<template>
  <div class="upload container-fluid">
    <div class="row justify-content-center align-item-center">
      <div class="col-12 col-sm-8 col-md-6 col-xl-4">
        <template v-if="typeof isSuccess === 'undefined'">
          <el-upload
            drag
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            multiple
          >
            <el-icon color="#999" size="50"><upload-filled /></el-icon>
            <div>点击或者拖动文件上传</div>
            <template #tip>
              <div style="margin-top: 20px">文件大小不能超过500kb</div>
            </template>
          </el-upload>
        </template>
        <template v-else>
          <upload-result
            :success-or-fail="isSuccess"
            @jump="(result) => handleResult(result)"
          ></upload-result>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-upload-dragger) {
  background-color: var(--bs-body-bg);
}
.upload-container {
  height: 100px;
  //   box-shadow: var(--datahub-box-shadow);
  .upload__text {
    font-size: 50px;
    color: var(--datahub-text-grey);
  }
}
</style>
