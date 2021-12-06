<template>
  <div class="app">
    <div class="container">
      <div class="row flex-column justify-content-center align-items-center mh">
        <h2 class="align-self-center">Página en construcción</h2>
        <h1 class="text-center align-self-center">DevZatokio</h1>
        <div class="d-flex jus-content-center align-items-center">
          <div class="spinner-border text-primary mr-4" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-border text-info" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-border text-primary mx-4" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-border text-info" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style lang="css" scoped>
.app {
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: #000;
  font-size: 0.9rem;
  color: #fff;
  font-family: "Times New Roman", Times, serif;
}
.mh {
  min-height: 100vh;
}
</style>