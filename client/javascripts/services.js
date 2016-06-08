(function() {
  
  angular
    .module('piratesApp')
    .service('PirateService', PirateService)

    PirateService.$inject = ['$http']

    function PirateService($http) {
      const BASE_URL = '/api/pirates/';

      this.getPirates = function() {
        return $http.get(BASE_URL)
      }

      this.createPirate = function(newPirate) {
        return $http.post(BASE_URL, newPirate)
      }

      // For Edit Page
      this.getPirate = function(id) {
        return $http.get(BASE_URL+id)
      }

      // For Edit Page
      this.deletePirate = function(id) {
        
      }

      // For Edit Page
      this.updatePirate = function(pirate) {
        debugger
        return $http.put(BASE_URL+pirate.id, pirate)
      }
    }


})()