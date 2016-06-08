(function() {
  angular
    .module('piratesApp', ['ngRoute'])
    .config(config);
  
  config.$inject = ['$routeProvider', '$locationProvider']

  function config($routeProvider, $locationProvider) {
    $routeProvider
      .when('/pirates', {
        templateUrl: '../views/pirates/index.html',
        controller: "PiratesController",
        controllerAs: 'vm',
        resolve: {
          pirates: getAllPirates
        }
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
        controllerAs: 'vm',
        resolve: {
          pirate: getPirateById
        }
      })
      .otherwise({redirectTo: '/pirates'})
    $locationProvider.html5Mode(true);
  }

  getAllPirates.$inject = ['PirateService']

  function getAllPirates(PirateService) {
    return PirateService.getPirates();
  }

  getPirateById.$inject = ['PirateService', '$route']

  function getPirateById(PirateService, $route) {
    return PirateService.getPirate($route.current.params.id)
  }

})()