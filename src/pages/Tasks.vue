<script setup>
import { useTasksStore } from '@/stores/tasks';

  const tasksStore = useTasksStore()
</script>

<template>
  <h1>Tasks</h1>
  <RouterLink :to="{ name: 'dashboard' }">ダッシュボードへ</RouterLink>

  <h2>未完了</h2>
  <ul>
    <li v-for="task in tasksStore.activeTasks" :key="task.id">
      <label>
        <input type="checkbox" v-model="task.isCompleted">
        {{ task.title }}
      </label>
    </li>
  </ul>

  <h2>完了</h2>
  <ul>
    <li v-for="task in tasksStore.completedTasks" :key="task.id">
      <label>
        <input type="checkbox" v-model="task.isCompleted">
        {{ task.title }}
      </label>
    </li>
  </ul>
</template>