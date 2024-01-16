<template>
  <div class="wrapper">
    <div class="main">
      <h1 class="title">Vue ToDo List</h1>
      <ToDoCard />
    </div>
    <ToDoMsg />
  </div>
</template>
  
<script>
  import ToDoCard from '~/components/todo/ToDoCard.vue';
  import ToDoMsg from '~/components/todo/ToDoMsg.vue';

  export default {
    components: {
      ToDoCard,
      ToDoMsg,
    },
  };
</script>