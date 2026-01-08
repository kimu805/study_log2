<script setup>
import TaskItem from './TaskItem.vue';

defineProps({
  tasks: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <ul>
    <TaskItem v-for="task in tasks" :task="task" :key="task.id" />
  </ul>
</template>