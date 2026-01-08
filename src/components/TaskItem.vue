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
      {{ task.title }}
    </label>
  </li>
</template>