<template>
  <MainLayout />
</template>

<script>
  import MainLayout from '~/components/layout/MainLayout.vue';

  export default {

    async created() {
      await this.$store.dispatch('loadTasks');
    },

    components: {
      MainLayout,
    },
  };
</script>