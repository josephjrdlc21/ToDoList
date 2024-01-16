<template>
  <div class="tasklist" id="task_scroll">
    <ToDoTask />
  </div>
</template>
  
<script>
  import ToDoTask from './ToDoTask.vue';
  export default {
    components: {
      ToDoTask,
    },
  };
</script>