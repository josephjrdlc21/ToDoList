<template>
  <div>
    <div class="task" v-for="(task, index) in tasks" :key="index" @mouseover="showDeleteButton(index)" @mouseout="hideDeleteButton(index)" >
      <div class="single-task">
        <v-btn icon small rounded="xl" :color="task.status.done ? 'grey' : 'success'" density="compact" id="icon-point" @click="toggleTaskStatus(task.id)">
          <v-icon x-large color="white">mdi-check</v-icon>
        </v-btn>
        <p :class="{ 'crossed-out': task.status.done }"><b>{{ task.name }}</b></p>
      </div>
      <div class="button-del" v-show="showDelete[index] === true">
        <v-icon x-large color="red" class="delete-icon" @click="confirmDelete(index)">mdi-delete</v-icon>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      tasks() { return this.$store.getters.getTasks; },
    },

    data() {
      return {
        showDelete: {},
      };
    },

    methods: {
      showDeleteButton(index) { this.showDelete[index] = true; },
      hideDeleteButton(index) { this.showDelete[index] = false; },

      async toggleTaskStatus(taskId) {
        try {
          await this.$store.dispatch('toggleTaskStatus', taskId);
        } catch (error) {
          console.error('Error toggling task status:', error);
          alert('An error occurred while toggling the task status. Please try again.');
        }
      },

      confirmDelete(index) {
        const shouldDelete = window.confirm('Are you sure you want to delete this task?');
        if (shouldDelete) { this.removeTask(index); }
      },

      async removeTask(index) {
        try {
          await this.$store.dispatch('removeTask', index);
          alert('Task deleted successfully!');
          delete this.showDelete[index];
        } catch (error) {
          console.error('Error deleting task:', error);
          alert('An error occurred while deleting the task. Please try again.');
        }
      },
    },
  };
</script>

  