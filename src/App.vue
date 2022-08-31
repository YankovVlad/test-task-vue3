
<template>
  <div class="app">
    <router-view name="layout" />
  </div>
</template>

<script>
import MainView from "./views/MainView.vue";
export default {
  name: "App",
  components: {
    MainView,
  },
};
</script>

<style scoped>
.app {
  height: 100%;
  width: 100%;
  min-height: 100vh;
}
</style>
