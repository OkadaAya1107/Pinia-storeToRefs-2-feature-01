import { defineStore } from 'pinia';

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [],
    newTask: '',
  }),
  getters: {
    activeTasks(state) {
      return state.tasks.filter(task => !task.completed);
    },
    completedTasks(state) {
      return state.tasks.filter(task => task.completed);
    },
  },
  actions: {
    addTask() {
      if (this.newTask.trim()) {
        this.tasks.push({
          name: this.newTask,
          completed: false,
        });
        this.newTask = '';
      }
    },
    toggleTask(task) {
      const taskUpdate = this.tasks.find(t => t === task);
      taskUpdate.completed = !taskUpdate.completed;
    },
    deleteTask(task) {
      this.tasks = this.tasks.filter(t => t !== task);
    },
  },
});