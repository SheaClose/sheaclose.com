<template>
  <div id="app">
    <Landing></Landing>
    <Projects></Projects>
    <Footer></Footer>
  </div>
</template>

<script>
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default {
  components: { Landing, Projects, Footer }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  overflow-x: hidden;
}
* {
  margin: 0;
  padding: 0;
}
.text-align-center {
  text-align: center;
}
</style>
