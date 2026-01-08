<script setup>
  defineProps({
    task: {
      type: Object,
      required: true
    }
  })
</script>

<template>
  <li>
    <label>
      <input type="checkbox" v-model="task.isCompleted">
      <RouterLink :to="{ name: 'detail', params: {id: task.id } }">
        {{ task.title }}
      </RouterLink>
    </label>
  </li>
</template>