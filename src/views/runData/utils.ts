export enum State {
  running,
  finish,
  failed,
  repeated,
  preCheckFailed
}
export interface OperationType {
  title: string
  operationType: string
  isGroup?: boolean
}
export interface TaskState {
  state: keyof typeof State
  description: string
}
export interface PrecheckFail extends TaskState {
  brand: string
}
export interface TaskMode {
  brand: string
  handleType: OperationType
  mappingHandleType: OperationType
  state?: TaskState
  createTime: string
  startDateTime: string
  endDateTime: string
  description?: string
}

export type StateInfo = {
  [property in keyof typeof State as `${string & property}`]: Omit<
    TaskState & { isNormal: boolean; topic?: string },
    'state'
  >
} & { readonly waiting: Omit<TaskState & { isNormal: boolean; topic?: string }, 'state'> }
export function getStateInfo(): StateInfo {
  let obj: StateInfo | {} = {}
  Object.assign(obj, {
    [State[State.running]]: {
      description: '进行中',
      isNormal: true,
      topic: 'warning'
    }
  })
  Object.assign(obj, {
    [State[State.finish]]: {
      description: '完成',
      isNormal: true,
      topic: 'success'
    }
  })
  Object.assign(obj, {
    [State[State.failed]]: {
      description: '失败',
      isNormal: true,
      topic: 'danger'
    }
  })
  Object.assign(obj, {
    [State[State.repeated]]: {
      description: '品牌重复',
      isNormal: false
    }
  })
  Object.assign(obj, {
    [State[State.preCheckFailed]]: {
      description: '预检失败',
      isNormal: false
    }
  })
  Object.assign(obj, {
    waiting: {
      description: '等待中',
      isNormal: true,
      topic: 'info'
    }
  })
  return obj as StateInfo
}
