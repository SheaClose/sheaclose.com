angular.module("app")
.controller("homeCtrl", function($scope, homeService){

	$scope.modal = function(num) {
		$(`#modal${num}`).modal('open');
	}

	$(document).ready(function(){
		$('.modal').modal();
	});

	$scope.alienHunt = true;
	$scope.dogCompany = false;
	$scope.bender = false;

	$scope.changePage = (page) => {
		$scope.alienHunt = false;
		$scope.dogCompany = false;
		$scope.bender = false;
		if (page === "alienHunt") {
			$scope.alienHunt = true;
		}
		else if (page === "dogCompany") {
			$scope.dogCompany = true;
		}
		else if (page === "bender") {
			$scope.bender = true;
		}
	}
})
