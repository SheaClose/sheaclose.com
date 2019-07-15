<template>
  <div class="resume-background">
    <router-link to="/" class="back">&#60; BACK</router-link>
    <div class="resume">
      <div class="header">
        <h1>Shea Close</h1>
        <h4>WEB DEVELOPER/DEVOPS - DALLAS, TX</h4>
        <p>
          (817) 201-9261 |
          <a href="mailto:sheaclose@gmail.com">SheaClose@gmail.com</a> |
          <a href="https://github.com/sheaclose">github.com/SheaClose</a> |
          <a href="https://sheaclose.com">SheaClose.com</a>
        </p>
      </div>
      <div class="profile box">
        <h4>PROFILE</h4>
        <p>
          I am driven by a need to create. I have worked professionally as a pastry chef, home
          renovator, and web developer. Even my hobbies (which include brewing beer, refinishing
          musical instruments, and making movie prop replicas) are focused on creation. There is
          little I enjoy more than starting with an idea and seeing it through to a completed product.
        </p>
        <br />
        <p>
          It was that drive to create that led me to a career in programming. It has been a perfect
          match of creativity and technology. I began as a student at DevMountain. I returned to the
          school as a student mentor. I intended to complete a single session before moving on to a
          more standard web development career, but found that helping students was supremely
          satisfying. Since then I have moved into a position as Instructor for the school.
        </p>
      </div>
      <div class="listicles box">
        <h4>WORK EXPERIENCE</h4>
        <div>
          <h5>Eventology Solutions • Web Development | DevOps • 2018 - Present</h5>
          <ul>
            <li>Lead Devops in move to AWS Cloud Services lowering monthly costs by 60%.</li>
            <li>Automated deployment process of of all apps using Travis-ci.</li>
            <li>Developed and implemented security protcols.</li>
          </ul>
          <h5>DevMountain • Instructor | Web Development • 2018</h5>
          <ul>
            <li>Teaching DevMountain's web development curriculum.</li>
            <li>Improving, updating, and re-writing lessons and projects.</li>
            <li>Managing mentors and students.</li>
            <li>Overseeing the maintenance, creation, and improvement of DevMountain web applications.</li>
          </ul>
          <h5>DevMountain • Lead Mentor | Junior Developer • 2017 - 2018</h5>
          <ul>
            <li>Supervised team of student mentors.</li>
            <li>Led mentors on school software applications by assigning tasks, reviewing code, etc.</li>
            <li>
              Maintained code-base of DevMountain sub-domain, support lead instructor with Web
              Development curriculum concepts.
            </li>
          </ul>
          <h5>DevMountain • Student Mentor | Junior Developer • 2017</h5>
          <ul>
            <li>
              Ensured student success with Web Development curriculum by helping students debug
              their practice problems, projects, and other challenges.
            </li>
            <li>Provide one-on-one or small group tutoring to review lectures from the lead instructor.</li>
            <li>
              Build/enhance DevMountain proprietary software applications using HTML, Git, React,
              Javascript, Node, SQL, etc.
            </li>
            <li>Migrated subdomain from AngularJS to Angular2.</li>
          </ul>
        </div>
      </div>
      <div class="skills box p-grid">
        <h4>SKILLS</h4>
        <div class="p-col-6 p-md-4 p-lg-3" v-for="skill in skills" :key="skill">{{skill}}</div>
      </div>
      <div class="listicles box">
        <h4>PROJECTS</h4>
        <div>
          <h5>
            <a href="https://bender.sheaclose.com">Bender</a> - Craft beer & Brewery locator -
            <a href="https://youtu.be/MNMDMmt2QbE">walkthrough</a>
          </h5>
          <ul>
            <li>Used REST Db queries to obtain brewery and craft beer information to display on a map showing user's location</li>
            <li>Created using AngularJs, Angular-google-maps, and Bootstrap.</li>
          </ul>
          <h5>
            <a href="https://dogcompanydtx.com">Dog Company</a> - Band portfolio & E-commerce
          </h5>
          <ul>
            <li>Band website which provides contact for booking agents, media for fans, and a store for purchasing Merchandise.</li>
            <li>Created using MEAN Stack, WebPack, MaterializeCss, ES6, Jquery.</li>
          </ul>
          <h5>
            <a href="https://alienhunt.sheaclose.com">Alien-Hunt</a> - 8-bit web based video game
          </h5>
          <ul>
            <li>Video game inspired by the game play of Duck Hunt.</li>
            <li>Created using MEAN Stack, WebPack, PixiJs, ES6, Jquery, Facebook-Passport.</li>
          </ul>
          <h5>
            <a href="https://sheaclose.github.io">Portfolio</a>
          </h5>
          <ul>
            <li>Original portfolio website created using AngularJs over the course of 3 days.</li>
          </ul>
        </div>
      </div>
      <div class="listicles box">
        <h4>EDUCATION</h4>
        <div>
          <a href="https://devmountain.com">DevMountain</a> - Aug-Nov 2016
          <ul>
            <li>12 week, immersive, web-development program focused on MEAN stack.</li>
            <li>Gained working knowledge of JavaScript, HTML/CSS, Jquery, Angular, Mongo, Node, Express, and Git/Github.</li>
            <li>Through class projects, gained working knowledge of Materialize CSS/Bootstrap, WebPack, OAuth.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      skills: [
        "JavaScript",
        "HTML/CSS",
        "Sass",
        "Bootstrap",
        "Git",
        "Jquery",
        "Angular",
        "React ",
        "ReactNative",
        "VueJs ",
        "Node.js",
        "Express",
        "Loopback",
        "MongoDb",
        "SQL",
        "WebPack",
        "Parcel",
        "Digital Ocean",
        "AWS Cloud Services",
        "Terraform"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.resume-background {
  padding-bottom: 100px;
  background: lightgrey;
  .resume {
    background: #fff;
    width: 80vw;
    margin: auto;
    text-align: left;
    padding: 3em;
    .header {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 85%;
      margin: auto;
      p {
        padding: 12px 0px;
      }
    }
    .box {
      border: 5px solid #000;
      position: relative;
      margin: 2em 0;
      padding: 2em 1em 1em;
      h4 {
        color: #fff;
        background: #000;
        padding: 6px 0;
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(25%, -50%);
        width: 200px;
        text-align: center;
      }
    }
    .listicles {
      h5 {
        font-weight: 700;
        font-style: italic;
        font-size: 1.05em;
        margin-top: 12px;
      }

      ul {
        padding: 0 0 0 2em;
      }
    }
  }
}
.back {
  font-weight: 700;
  text-align: left;
  width: 80vw;
  margin: auto;
  padding: 12px 0;
  display: block;
  color: #000;
}
</style>
