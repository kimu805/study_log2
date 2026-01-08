<script setup>
import { useTasksStore } from '@/stores/tasks';
import { ref } from 'vue';

  const tasksStore = useTasksStore()
  const title = ref("")
  const submit = () => {
    tasksStore.createTask(title.value)
    title.value = ""
  }
  
</script>

<template>
  <h2>新規作成</h2>
  <input v-model="title" type="text" placeholder="新規タスク">
  <button @click="submit">登録</button>
</template>