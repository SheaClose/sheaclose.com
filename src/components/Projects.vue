<template>
  <div>
    <div :key="project.url" v-for="project of projects" class="projects p-grid p-align-center">
      <div class="p-col-12 p-lg-6">
        <img class="p-col-6 p-lg-10 p-xl-8" :src="project.imgUrl" aria-disabled />
      </div>
      <div class="p-col-12 p-lg-6 desc">
        <p class="p-col-12">
          <a :href="project.url">
            <h3 class="title">{{ project.title }}</h3>
          </a>
          <span v-html="project.desc"></span>
        </p>
        <h4 class="title">Technology</h4>
        <div class="p-col-12 p-offset-1">
          <span v-html="project.technology"></span>
        </div>
      </div>
      <div class="p-col-12 button">
        <Button
          label="Launch App"
          class="p-button-raised p-button-success p-col-4"
          @click="goTo(project.url)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import projects from "../assets/projects.json";
import Button from "primevue/button";

export default {
  components: { Button },
  data() {
    return {
      projects
    };
  },
  methods: {
    goTo(url) {
      window.open(url, "_blank");
    }
  }
};
</script>

<style lang="scss" scoped>
.projects {
  margin: 0px;
  padding: 0;
  .desc {
    padding: 0 10vh;
    font-size: 1.25em;
    text-align: left;
    .title {
      margin-left: -10px;
    }
  }
  .button {
    margin: 50px 0;
  }
}
.projects:nth-child(odd) {
  padding: 5% 0;
  clip-path: polygon(0 5%, 100% 0, 100% 100%, 0 95%);
  background: lightgrey;
}
</style>
