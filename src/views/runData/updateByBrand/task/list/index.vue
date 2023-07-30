<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue'
import { BodyBaseLayout } from '@/views/runData/hooks'
import { type TaskMode, getStateInfo } from '@/views/runData/utils'
import { Refresh, Search, Delete } from '@element-plus/icons-vue'

let list = ref<TaskMode[]>([])
const stateInfo = ref(getStateInfo())

onBeforeMount(() => {
  // 在这里发起请求，给list赋值
  list.value.push({
    brand: 'TEeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    handleType: {
      title: '更新',
      operationType: 'update'
    },
    mappingHandleType: {
      title: '更新',
      operationType: 'update'
    },
    createTime: '2023-07-29 10:10:00',
    startDateTime: '2023-07-29 10:10:00',
    endDateTime: ''
  })
  list.value.push({
    brand: 'TEeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    handleType: {
      title: '更新',
      operationType: 'update'
    },
    mappingHandleType: {
      title: '更新',
      operationType: 'update'
    },
    createTime: '2023-07-29 10:10:00',
    startDateTime: '2023-07-29 10:10:00',
    endDateTime: ''
  })
  list.value.push({
    brand: 'TEeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    handleType: {
      title: '更新',
      operationType: 'update'
    },
    mappingHandleType: {
      title: '更新',
      operationType: 'update'
    },
    createTime: '2023-07-29 10:10:00',
    startDateTime: '2023-07-29 10:10:00',
    endDateTime: ''
  })
  list.value.push({
    brand: 'TEeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    handleType: {
      title: '更新',
      operationType: 'update'
    },
    mappingHandleType: {
      title: '更新',
      operationType: 'update'
    },
    createTime: '2023-07-29 10:10:00',
    startDateTime: '2023-07-29 10:10:00',
    endDateTime: ''
  })
  list.value.push({
    brand: 'TEeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    handleType: {
      title: '更新',
      operationType: 'update'
    },
    mappingHandleType: {
      title: '更新',
      operationType: 'update'
    },
    createTime: '2023-07-29 10:10:00',
    startDateTime: '2023-07-29 10:10:00',
    endDateTime: ''
  })
  list.value.push({
    brand: 'TEeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    handleType: {
      title: '更新',
      operationType: 'update'
    },
    mappingHandleType: {
      title: '更新',
      operationType: 'update'
    },
    createTime: '2023-07-29 10:10:00',
    startDateTime: '2023-07-29 10:10:00',
    endDateTime: ''
  })
  list.value.push({
    brand: 'TEeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    handleType: {
      title: '更新',
      operationType: 'update'
    },
    mappingHandleType: {
      title: '更新',
      operationType: 'update'
    },
    createTime: '2023-07-29 10:10:00',
    startDateTime: '2023-07-29 10:10:00',
    endDateTime: ''
  })
  list.value.push({
    brand: 'TEeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    handleType: {
      title: '更新',
      operationType: 'update'
    },
    mappingHandleType: {
      title: '更新',
      operationType: 'update'
    },
    createTime: '2023-07-29 10:10:00',
    startDateTime: '2023-07-29 10:10:00',
    endDateTime: ''
  })
  list.value.push({
    brand: 'TEeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    handleType: {
      title: '更新',
      operationType: 'update'
    },
    mappingHandleType: {
      title: '更新',
      operationType: 'update'
    },
    createTime: '2023-07-29 10:10:00',
    startDateTime: '2023-07-29 10:10:00',
    endDateTime: ''
  })
  list.value.push({
    brand: 'TEeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    handleType: {
      title: '更新',
      operationType: 'update'
    },
    mappingHandleType: {
      title: '更新',
      operationType: 'update'
    },
    createTime: '2023-07-29 10:10:00',
    startDateTime: '2023-07-29 10:10:00',
    endDateTime: ''
  })
  list.value.push({
    brand: 'TEeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    handleType: {
      title: '更新',
      operationType: 'update'
    },
    mappingHandleType: {
      title: '更新',
      operationType: 'update'
    },
    createTime: '2023-07-29 10:10:00',
    startDateTime: '2023-07-29 10:10:00',
    endDateTime: ''
  })
  list.value.push({
    brand: 'TEeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    handleType: {
      title: '更新',
      operationType: 'update'
    },
    mappingHandleType: {
      title: '更新',
      operationType: 'update'
    },
    createTime: '2023-07-29 10:10:00',
    startDateTime: '2023-07-29 10:10:00',
    endDateTime: ''
  })
  list.value.push({
    brand: 'TEeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    handleType: {
      title: '更新',
      operationType: 'update'
    },
    mappingHandleType: {
      title: '更新',
      operationType: 'update'
    },
    createTime: '2023-07-29 10:10:00',
    startDateTime: '2023-07-29 10:10:00',
    endDateTime: ''
  })
  list.value.push({
    brand: 'TEeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    handleType: {
      title: '更新',
      operationType: 'update'
    },
    mappingHandleType: {
      title: '更新',
      operationType: 'update'
    },
    createTime: '2023-07-29 10:10:00',
    startDateTime: '2023-07-29 10:10:00',
    endDateTime: ''
  })
})
</script>

<template>
  <div class="task-list__container container-fluid">
    <div class="row justify-content-center" style="margin-top: 25px">
      <div class="col col-md-11 col-lg-10">
        <div class="task-list__header">
          <el-button :icon="Refresh" circle />
          <el-button :icon="Search" circle />
          <el-button :icon="Delete" circle />
          <el-button round>创建任务</el-button>
        </div>
        <ul class="row">
          <el-backtop :right="50" :bottom="100" />
          <li
            class="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2"
            v-for="{
              brand,
              state,
              handleType,
              mappingHandleType,
              createTime,
              startDateTime,
              endDateTime
            } in list"
          >
            <div class="task-list__content">
              <div class="task-list__content--head">
                <div class="task-list__content--head-title">
                  <h6>{{ brand }}</h6>
                </div>
                <el-tag :type="stateInfo[state?.state ?? 'waiting'].topic">{{
                  stateInfo[state?.state ?? 'waiting'].description
                }}</el-tag>
              </div>
              <div>
                <ul class="task-list__content--body">
                  <li>
                    <span>开始时间：{{ startDateTime || '未开始' }}</span>
                  </li>
                  <li>
                    <span>结束时间：{{ endDateTime || '未结束' }}</span>
                  </li>
                  <li>
                    <span>es处理方式：{{ handleType?.title || '忽略' }}</span>
                  </li>
                  <li>
                    <span>映射处理方式：{{ mappingHandleType?.title || '忽略' }}</span>
                  </li>
                  <!-- <li>
                  <span>创建时间：{{ createTime }}</span>
                </li> -->
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.task-list__container {
  height: 100%;
  width: 100%;
}
.task-list__header {
}
.task-list__content:hover {
  border-color: var(--datahub-color);
  cursor: pointer;
  transition: border-color 0.3s ease;
}
.task-list__content {
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: var(--datahub-box-shadow);
  border: 1px solid var(--datahub-line-color);
  transition: border-color 0.3s ease;
  .task-list__content--body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
    li {
      padding: 5px 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      span {
        font-size: 12px;
        color: var(nav-text-color);
      }
    }
  }
  .task-list__content--head {
    display: flex;
    padding: 0 10px;
    padding-top: 5px;
    .el-tag {
      margin-left: 10px;
    }
    .task-list__content--head-title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      h6 {
        display: inline;
      }
    }
  }
}
</style>
