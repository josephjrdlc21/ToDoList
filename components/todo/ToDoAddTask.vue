<template>
    <div class="addtask">
      <form @submit.prevent="addNewTask">
        <div class="input-container">
          <input v-model="newTaskName" type="text" placeholder="New Task"/>
          <span class="input-icon"  @click="addNewTask">
            <v-icon x-large>mdi-plus</v-icon>
          </span>
        </div>
      </form>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        newTaskName: ''
      };
    },

    methods: {
      scrollToBottom(id) {
        const element = document.getElementById(id);
        if (element) { element.scrollTop = element.scrollHeight; } 
      },

      addNewTask() {
        try {
          const trimmedTaskName = this.newTaskName.trim();
          const taskExists = this.$store.getters.getTasks.some(task => task.name.toLowerCase() === trimmedTaskName.toLowerCase());
          
          if (trimmedTaskName !== '') {
            if (/^\d+$/.test(trimmedTaskName)) { alert('Task name should not consist of all numbers.'); this.newTaskName = ''; return;}
            if (trimmedTaskName.length > 50) { alert('Task name should be at a maximum of 50 characters.'); this.newTaskName = ''; return; }
            if (taskExists) { alert('Task with the same name already exists.'); this.newTaskName = ''; return; }

            this.$store.dispatch('addNewTask', trimmedTaskName);
            this.scrollToBottom('task_scroll');
            this.newTaskName = '';
            alert('Task added successfully!');
          }
        } catch (error) {
          console.error('Error adding new task:', error);
          alert('An error occurred while adding the task. Please try again.');
        }
      }
    }
  };
</script>  