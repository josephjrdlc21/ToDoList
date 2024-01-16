<template>
  <div v-if="showAlert" class="short-msg-alert">
    <div>
      This application uses the browser's Local Storage to store data
      <span class="short-msg-alert-icon" @click="hideAlert">
        <v-icon x-large>mdi-close</v-icon>
      </span>
    </div>
  </div>
  <div v-if="!showAlert" class="btn-short-msg-alert">
    <button @click="toggleAlert">Show Info</button>
  </div>
</template>
  
<script>
  export default {
    data() {
      return {
          showAlert: true,
      };
    },

    methods: {
      hideAlert() { this.showAlert = false; },
      toggleAlert() { this.showAlert = !this.showAlert; },   
    },
  };
</script>  
