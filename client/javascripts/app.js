(function() {
  angular
    .module('pirateApp', ['ngRoute'])
    .config(config);

  function config($routeProvider, $locationProvider) {
    $routeProvider
      .when('/pirates', {
        templateUrl: '../views/pirates/index.html'
      })
      .when('/pirates/new', {
        templateUrl: '../views/pirates/new.html'
      })
      .when('/pirates/:id', {
        templateUrl: '../views/pirates/show.html'
      })
      .when('/pirates/:id/edit', {
        templateUrl: '../views/pirates/edit.html'
      })
      .otherwise({redirectTo: '/pirates'})
    $locationProvider.html5Mode(true);
  }

  config.$inject = ['$routeProvider', '$locationProvider']

})()