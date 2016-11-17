angular.module("app")
.controller("homeCtrl", function($scope, homeService){
$scope.selectedPhotos = {};
$scope.selectedPhotos = [];
	$scope.modal = function(num, collection) {
		if (collection) {
			$scope.selectedObject = homeService.selectedPhotos(collection)
			$scope.selectedPhotos = $scope.selectedObject.url.reverse();
		}
		$(`#modal${num}`).modal('open')

	}

	$scope.photos = homeService.photos();

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
