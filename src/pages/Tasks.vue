<script setup>
import TaskForm from '@/components/TaskForm.vue';
import TaskList from '@/components/TaskList.vue';
import { useTasksStore } from '@/stores/tasks';

  const tasksStore = useTasksStore()
</script>

<template>
  <h1>Tasks</h1>
  <RouterLink :to="{ name: 'dashboard' }">ダッシュボードへ</RouterLink>

  <div>
    <TaskForm />
  </div>

  <h2>未完了</h2>
  <TaskList :tasks="tasksStore.activeTasks" />

  <h2>完了</h2>
  <TaskList :tasks="tasksStore.completedTasks" />
</template>