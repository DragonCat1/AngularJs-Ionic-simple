window.bm.factory('PageService', ['$ionicHistory', '$window', function ($ionicHistory, $window) {
  this.navigate = function (target) {
    $window.location.href = '#/' + target
  }
  return this
}])
