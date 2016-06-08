(function() {
  
  angular
    .module('piratesApp')
    .directive('gsPirateShow', function() {
      return {
        scope: {
          pirate: '<pirateAttr'
        },
        templateUrl: '../views/pirates/show.html'
      }
    })
})()