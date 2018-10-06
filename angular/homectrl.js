export default function($scope, homeService) {
  $scope.selectedObjects = {};
  $scope.selectedPhotos = [];
  let photosArr = homeService.photos();
  $scope.photos = [];
  $scope.photos2 = [];
  $scope.photos3 = [];
  let counter = 1;
  $scope.modal = function(num, collection) {
    if (collection) {
      $scope.selectedObject = homeService.selectedPhotos(collection);
      $scope.selectedPhotos = $scope.selectedObject.url.reverse();
    }
    $(`#modal${num}`).modal("open");
  };
  photosArr.map((cv, i) => {
    if (counter === 1) {
      counter++;
      $scope.photos.push(cv);
    } else if (counter === 2) {
      counter++;
      $scope.photos2.push(cv);
    } else {
      counter = 1;
      $scope.photos3.push(cv);
    }
  });

  $(document).ready(function() {
    $(".modal").modal();
  });

  $scope.alienHunt = false;
  $scope.todos = true;
  $scope.dogCompany = false;
  $scope.bender = false;

  $scope.changePage = page => {
    $scope.alienHunt = false;
    $scope.dogCompany = false;
    $scope.bender = false;
    $scope.todos = false;
    $scope[page] = true;
    console.log(`$scope[${page}]: `, $scope[page]);
  };
}
