var bm = window.angular.module('bm', ['ionic'])

bm.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('Tabs', {
    url: '/Tabs',
    abstract: true,
    templateUrl: 'src/views/Tabs/Tabs.html',
    controller: 'TabsController'
  }).state('Tabs.Main', {
    url: '/Main',
    views: {
      'Main': {
        templateUrl: 'src/views/Main/Main.html',
        controller: 'MainController'
      }
    }
  })
  $urlRouterProvider.otherwise('/Tabs/Main')
})
