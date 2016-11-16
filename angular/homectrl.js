angular.module("app")
.controller("homeCtrl", function($scope, homeService){
	let init = () => {
		  $('.carousel.carousel-slider').carousel({full_width: true});
	}
	init();
})
