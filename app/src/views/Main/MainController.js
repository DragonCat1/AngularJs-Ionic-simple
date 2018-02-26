window.bm.controller('MainController', ['$scope', '$window', 'MainModel', 'PageService', function ($scope, $window, MainModel, PageService) {
  $scope.banners = MainModel.banners
  $scope.recommends = MainModel.recommends
  $scope.navigate = function (target) {
    PageService.navigate(target)
  }
}])
