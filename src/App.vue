<template>
  <div id="app">
    <CoreButton type="primary" value="click me" />
  </div>
</template>

<script>
import CoreButton from "./components/CoreButton.vue";

export default {
  name: "App",
  components: {
    CoreButton,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
