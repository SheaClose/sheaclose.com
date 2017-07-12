import angular from '../angular.js';

angular.module("app", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/");
  $stateProvider
  .state("home", {
      url: "/"
    , templateUrl: "../views/home.html"
		, controller: "homeCtrl"
  })
  .state("about", {
      url: "/about"
    , templateUrl: "../views/about.html"
		, controller: "homeCtrl"
  })
  .state("contact", {
      url: "/contact"
    , templateUrl: "../views/contact.html"
    , controller: "homeCtrl"
  })
  .state("personal", {
      url: "/personal"
    , templateUrl: "../views/personal.html"
		, controller: "homeCtrl"
  })
  .state("projects", {
      url: "/projects"
    , templateUrl: "../views/projects.html"
    , controller: "homeCtrl"
  })
  .state( "blog", {
      url: "/dev_dev"
    , templateUrl: "../views/blog.html"
    , controller : function(){
      initReact();
    }
  } )
})
.directive('myNav', function() {
	return {
template: `<div class="page-footer light-green darken-3">
						<div class="row">
							<a class="col s2 m2 l2 green-text text-lighten-3 center-align" ui-sref="home">home</a>
							<a class="col s2 m2 l2 green-text text-lighten-3 center-align" ui-sref="about">about</a>
							<a class="col s2 m2 l2 green-text text-lighten-3 center-align" ui-sref="projects">projects</a>
							<a class="col s2 m2 l2 green-text text-lighten-3 center-align" ui-sref="personal">personal</a>
              <a class="col s2 m2 l2 green-text text-lighten-3 center-align" ui-sref="blog">blog</a>
							<div class="col s2 m2 l2 grey-text text-lighten-4 center-align soc_logo_container" href="#!">
								<a class="" href="https://twitter.com/SheaClose"><img class="soc-logo" src="Assets/icons/twitter-logo copy.png"/></a>
								<a class="" href="https://www.linkedin.com/in/sheaclose"><img class="soc-logo" src="Assets/icons/linkedin-logo copy.png"/></a>
								<a class="" href="https://github.com/SheaClose"><img class="soc-logo" src="Assets/icons/github-logo copy.png"/></a>
							</div>
						</div>
					</div>`
	}
})
