<template>
  <div class="card">
    <ToDoNav />
    <ToDoTaskList />
    <ToDoAddTask />
  </div>
</template>

<script>
  import ToDoNav from './ToDoNav.vue';
  import ToDoTaskList from './ToDoTaskList.vue';
  import ToDoAddTask from './ToDoAddTask.vue';

  export default {
    components: {
      ToDoNav,
      ToDoTaskList,
      ToDoAddTask,
    },
  };
</script>