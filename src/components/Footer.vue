<template>
  <div class="footer">
    <hr />
    <h3 class="p-col-12">Programming Languages</h3>
    <div class="p-grid p-col-10 p-offset-1">
      <div class="p-col-4" v-for="tech in techs" :key="tech">
        <div class="p-align-center">{{ tech }}</div>
      </div>
    </div>

    <h3 class="p-col-12">Tools I Use</h3>
    <div class="p-grid p-col-10 p-offset-1">
      <div class="p-col-4" v-for="tool in tools" :key="tool">
        <div class="p-align-center">{{ tool }}</div>
      </div>
    </div>
    <div class="p-col-6 p-offset-6 p-md-4 p-md-offset-8 icons">
      <a :href="icon.linkUrl" v-for="icon in iconUrls" :key="icon.linkUrl">
        <img :src="icon.iconUrl" aria-disabled />
      </a>
    </div>
    <i class="fa fa-home" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      techs: ["Javascript", "Bash", "Python"],
      tools: [
        "AngularJs/7",
        "ReactJs",
        "ReactNative",
        "VueJs",
        "ExpressJs",
        "Loopback",
        "Sql",
        "MongoDb",
        "Sass",
        "Bootstrap",
        "Jquery",
        "Git",
        "Digital Ocean",
        "AWS Cloud Services",
        "Terraform"
      ],
      iconUrls: [
        {
          iconUrl:
            "https://s3.ca-central-1.amazonaws.com/assets.sheaclose.com/img_122647.svg",
          linkUrl: "/resume"
        },
        {
          iconUrl:
            "https://s3.ca-central-1.amazonaws.com/assets.sheaclose.com/email.svg",
          linkUrl: "mailto:sheaclose@gmail.com"
        },
        {
          iconUrl:
            "https://s3.ca-central-1.amazonaws.com/assets.sheaclose.com/linkedin-logo.svg",
          linkUrl: "https://www.linkedin.com/in/sheaclose/"
        },
        {
          iconUrl:
            "https://s3.ca-central-1.amazonaws.com/assets.sheaclose.com/github-logo.svg",
          linkUrl: "https://github.com/sheaclose"
        },
        {
          iconUrl:
            "https://s3.ca-central-1.amazonaws.com/assets.sheaclose.com/twitter-logo.svg",
          linkUrl: "https://twitter.com/sheaclose"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.footer {
  background: lightgray;
  hr {
    color: red;
  }
  h3 {
    margin-top: 25px;
  }
  .icons {
    margin-top: 25px;
    display: flex;
    justify-content: space-evenly;
    img {
      width: 25px;
      height: 25px;
    }
  }
}
</style>
