<template>
  <div class="landing p-grid p-justify-center p-nogutter">
    <div class="p-col-4 p-lg-4 p-xl-3">
      <img
        class="personal-image"
        src="https://s3.ca-central-1.amazonaws.com/assets.sheaclose.com/Screen+Shot+2019-07-09+at+8.12.41+PM.png"
        aria-disabled
      />
      <router-link to="/resume" class="router-link">
        <h2>Shea Close</h2>
        <h5>Web Engineer</h5>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
.landing {
  color: #4a4e69 !important;
  font-weight: 300;
  font-family: "Open Sans", sans-serif;
  padding-bottom: 100px;
}
.personal-image {
  width: 100%;
  border-radius: 50%;
  box-shadow: 3px 3px 5px 0px #999;
  margin-bottom: 12px;
}
.router-link {
  color: black;
}
</style>
