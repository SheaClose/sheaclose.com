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
})
