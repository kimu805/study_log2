<script setup>
import { useTasksStore } from '@/stores/tasks';
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

  const route = useRoute()
  const tasksStore = useTasksStore()
  const taskId = route.params.id
  const task = computed(() => {
    return tasksStore.tasks.find(task => task.id === taskId)
  })

  const isEditing = ref(false)
  const editTitle = ref("")

  watch(task, (newTask) => {
    if (newTask) {
      editTitle.value = newTask.title
    }
  }, { immediate: true })

  const save = () => {
    tasksStore.updateTaskTitle(taskId, editTitle.value)
    isEditing.value = false
  }
</script>

<template>
  <h1>TasksDetail</h1>
  <RouterLink :to="{ name: 'tasks' }">タスク一覧へ</RouterLink>

  <div v-if="task">
    <div v-if="!isEditing">
      <p><strong>タイトル：</strong>{{ task.title }}</p>
      <p><strong>状態：</strong>
        {{ task.isCompleted ? "完了" : "未完了" }}
      </p>
      <button @click="isEditing = true">編集</button>
    </div>

    <div v-else>
      <input type="text" v-model="editTitle" >
      <button @click="save">更新</button>
      <button @click="isEditing = false">キャンセル</button>
    </div>
  </div>

  <div v-else>
    <p>404 Not Found</p>
  </div>
</template>