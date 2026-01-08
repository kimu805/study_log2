<script setup>
import { useTasksStore } from '@/stores/tasks';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

  const route = useRoute()
  const tasksStore = useTasksStore()
  const task = computed(() => {
    return tasksStore.tasks.find(task => task.id === route.params.id)
  })

</script>

<template>
  <h1>TasksDetail</h1>
  <RouterLink :to="{ name: 'tasks' }">タスク一覧へ</RouterLink>

  <div v-if="task">
    <p><strong>タイトル：</strong>{{ task.title }}</p>
    <p><strong>状態：</strong>
      {{ task.isCompleted ? "完了" : "未完了" }}
    </p>
  </div>

  <div v-else>
    <p>404 Not Found</p>
  </div>
</template>