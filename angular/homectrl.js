angular.module("app")
.controller("homeCtrl", function($scope, homeService){
	let init = () => {
		$(document).ready(function(){
			$('.modal').modal();
		});
	}
	$scope.modal = (src) => {
		$scope.pictureSource = src;
		$("modal1").modal('open');
	}

	init();
})
