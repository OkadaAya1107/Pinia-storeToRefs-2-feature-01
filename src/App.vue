<template>
  <div>

    <h2>タスク管理</h2>
    <div>
      <input v-model="newTask" type="text" placeholder="タスクを入力" />
      <button @click="taskStore.addTask">追加</button>
    </div>

    <h2>アクティブタスク</h2>
    <ul>
      <li v-for="task in activeTasks" :key="task.name">
        {{ task.name }}
        <button @click="taskStore.toggleTask(task)">完了</button>
        <button @click="taskStore.deleteTask(task)">削除</button>
      </li>
    </ul>

    <h2>完了済みタスク</h2>
    <ul>
      <li v-for="task in completedTasks" :key="task.name">
        {{ task.name }}
        <button @click="taskStore.toggleTask(task)">戻す</button>
        <button @click="taskStore.deleteTask(task)">削除</button>
      </li>
    </ul>

  </div>
</template>

<!-- Composition API -->
<script setup>
import { useTaskStore } from '@/stores/task';
import { storeToRefs } from 'pinia';

const taskStore = useTaskStore();
const { tasks, newTask, activeTasks, completedTasks } = storeToRefs(taskStore);
</script>

<!-- Options API -->
<!-- 書き換え不可のため、なし -->