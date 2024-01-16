<template>
  <nav>
    <ul>
      <li>
        <div class="total-task">
          Task <span class="total">{{ totalTasks }}</span>
        </div>
      </li>
      <li>
        <div class="total-task">
          Task Done <span class="total">{{ totalTasksDone }}</span>
        </div>
      </li>
      <li v-if="showDeleteDoneButton">
        <button class="icon-button" id="delete-done-task" @click="deleteDoneTasks">
          <span class="icon">
            <v-icon x-large>mdi-delete</v-icon>
          </span>
          Tasks Done
        </button>
      </li>
      <li>
        <button class="icon-button" id="delete-all-done-task" @click="confirmDeleteAllTasks">
          <span class="icon">
            <v-icon x-large>mdi-delete</v-icon>
          </span>
          Tasks
        </button>
      </li>
    </ul>
  </nav>
</template>
  
<script>
  export default {
    computed: {
      totalTasks() { return this.$store.getters.getTasks.length; },
      totalTasksDone() { return this.$store.getters.getTasks.filter(task => task.status.done).length; },
      showDeleteDoneButton() { return this.totalTasksDone > 0; },
    },

    methods: {
      deleteDoneTasks() {
        try {
          const doneTasks = this.$store.getters.getTasks.filter(task => task.status.done);
          doneTasks.forEach(task => {
            const index = this.$store.getters.getTasks.findIndex(t => t.id === task.id);
            if (index !== -1) { this.$store.dispatch('removeTask', index); }
          });
          alert('Done tasks deleted successfully!');
        } catch (error) {
          console.error('Error deleting done tasks:', error);
          alert('An error occurred while deleting done tasks. Please try again.');
        }
      },

      confirmDeleteAllTasks() {
        const tasks = this.$store.getters.getTasks;
        if (tasks.length === 0) { alert('Task list is empty. No tasks to delete.'); return; }
        const shouldDeleteAll = window.confirm('Are you sure you want to delete all tasks?');
        if (shouldDeleteAll) { this.deleteAllTasks(); }
      },

      deleteAllTasks() {
        try {
          this.$store.dispatch('removeAllTasks');
          alert('All tasks deleted successfully!');
        } catch (error) {
          console.error('Error deleting all tasks:', error);
          alert('An error occurred while deleting all tasks. Please try again.');
        }
      },
    },
  };
</script>
  