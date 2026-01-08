<script setup>
import { useTasksStore } from '@/stores/tasks';

  const tasksStore = useTasksStore()
</script>

<template>
  <h1>Tasks</h1>
  <RouterLink :to="{ name: 'dashboard' }">ダッシュボードへ</RouterLink>

  <ul>
    <li v-for="task in tasksStore.tasks" :key="task">{{ task.title }}</li>
  </ul>
</template>