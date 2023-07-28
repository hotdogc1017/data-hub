import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      // component: () => import("@/layouts/DataHubBody.vue"),
      redirect: { name: 'upload' },
    },
    {
      path: "/runData/updateByBrand",
      children: [
        {
          path: "upload",
          name: "upload",
          component: () => import('@/views/runData/updateByBrand/upload/index.vue'),
          children: [
            {
              path: "precheckFail",
              component: () => import('@/views/runData/updateByBrand/upload/precheckFail/index.vue'),
            }
          ]
        }
      ]
    }
  ]
})

export default router
