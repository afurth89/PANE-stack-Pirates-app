(function() {
  angular
    .module('piratesApp', ['ngRoute'])
    .config(config);

  function config($routeProvider, $locationProvider) {
    $routeProvider
      .when('/pirates', {
        templateUrl: '../views/pirates/index.html',
        controller: "PiratesController",
        controllerAs: 'vm'
      })
      .when('/pirates/new', {
        templateUrl: '../views/pirates/new.html',
        controller: "NewPirateController",
        controllerAs: 'vm'
      })
      .when('/pirates/:id', {
        templateUrl: '../views/pirates/show.html',
        controller: "PirateController",
        controllerAs: 'pirate'
      })
      .when('/pirates/:id/edit', {
        templateUrl: '../views/pirates/edit.html',
        controller: "EditPirateController",
        controllerAs: 'vm'
      })
      .otherwise({redirectTo: '/pirates'})
    $locationProvider.html5Mode(true);
  }

  config.$inject = ['$routeProvider', '$locationProvider']

})()