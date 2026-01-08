import Dashboard from "@/pages/Dashboard.vue";
import Tasks from "@/pages/Tasks.vue";
import TasksDetail from "@/pages/TasksDetail.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/tasks",
      name: "tasks",
      component: Tasks
    },
    {
      path: "/tasks/:id",
      name: "detail",
      component: TasksDetail
    }
  ]
})

export default router