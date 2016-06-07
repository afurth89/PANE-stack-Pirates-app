(function() {
  
  angular
    .module('piratesApp')
    .controller('PiratesController', PiratesController)

    PiratesController.$inject = ['$http'];

    function PiratesController($http) {

      var vm = this;

      $http.get('/api/pirates').then(function(res) {
        vm.pirates = res.data
      })
    }

})()