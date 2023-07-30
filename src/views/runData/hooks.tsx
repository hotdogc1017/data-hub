import type { SetupContext } from 'vue'
import { State } from '@/views/runData/utils'
export const UploadResult = (props: { successOrFail: boolean }, { emit }: SetupContext) => {
  return props.successOrFail ? (
    <el-result
      onclick={() => emit('jump', State.finish)}
      icon="success"
      title="上传成功"
      sub-title="点击下方按钮查看上传的任务"
    >
      {{ extra: () => <el-button type="primary">查看任务</el-button> }}
    </el-result>
  ) : (
    <el-result
      onclick={() => emit('jump', State.failed)}
      icon="error"
      title="上传失败"
      sub-title="检查文件格式或者内容是否符合规范"
    >
      {{ extra: () => <el-button type="primary">重新上传</el-button> }}
    </el-result>
  )
}
UploadResult.emits = {
  jump: (_: State) => null
}

export const BodyBaseLayout = (_: { class: string }, { slots }: SetupContext) => (
  <div class="container-fluid" style="margin-top: 50px">
    <div class="row justify-content-center align-item-center">
      <div class="col-12 col-sm-8 col-md-6 col-xl-4">{slots.default?.()}</div>
    </div>
  </div>
)
