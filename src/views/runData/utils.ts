export interface OperationType {
  title: string
  operationType: string
  isGroup: boolean
}
export interface TaskState {
  state: string
  description: string
}
export interface PrecheckFail extends TaskMode {
  brand: string
}
export interface TaskMode {
  brand: string
  handleType: OperationType
  mappingHandleType: OperationType
  state: TaskState
  createTime: string
  startDateTime: string
  endDateTime: string
  description: string
}
export enum State {
  running,
  finish,
  failed,
  repeated,
  preCheckFailed
}
const StateInfoMap = new Map<string, Omit<TaskState & { isNormal: boolean }, 'state'>>()
StateInfoMap.set(State[State.running], {
  description: '进行中',
  isNormal: true
})
StateInfoMap.set(State[State.finish], {
  description: '完成',
  isNormal: true
})
StateInfoMap.set(State[State.failed], {
  description: '失败',
  isNormal: true
})
StateInfoMap.set(State[State.repeated], {
  description: '品牌重复',
  isNormal: false
})
StateInfoMap.set(State[State.preCheckFailed], {
  description: '预检失败',
  isNormal: false
})
export function getStateInfo(state: State) {
  return StateInfoMap.get(State[state])
}
