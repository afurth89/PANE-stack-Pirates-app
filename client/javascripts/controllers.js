(function() {
  
  angular
    .module('piratesApp')
    .controller('PiratesController', PiratesController)
    .controller('NewPirateController', NewPirateController)
    .controller('EditPirateController', EditPirateController)

    PiratesController.$inject = ['PirateService', '$location'];

    function PiratesController(PirateService, $location) {

      var vm = this;

      PirateService.getPirates().then(function(res) {
        vm.pirates = res.data
      })

    }

    NewPirateController.$inject = ['PirateService', '$location']

    function NewPirateController(PirateService, $location) {

      var vm = this;

      vm.pirate = {};

      vm.addPirate = function(newPirate) {
        var req = { pirate: newPirate}
        PirateService.createPirate(req).then(function(res) {
          $location.path('/pirates')
        })
      }
    }

    EditPirateController.$inject = ['PirateService', '$location', '$routeParams']

    function EditPirateController(PirateService, $location, $routeParams) {

      var vm = this;

      var id = $routeParams.id;

      PirateService.getPirate(id).then(function(res) {
        console.log(res)
        vm.pirate = res.data[0];
      })

      vm.editPirate = function(editedPirate) {
        var req = { pirate: editedPirate}
        req.pirate.id = id;
        PirateService.updatePirate(req).then(function(res) {
          $location.path('/pirates')
        })
      }

      vm.deletePirate = function() {
        PirateService.deletePirate(id).then(function(res) {
          $location.path('/pirates')
        })
      }


    }

})()