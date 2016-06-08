(function() {
  
  angular
    .module('piratesApp')
    .controller('PiratesController', PiratesController)
    .controller('NewPirateController', NewPirateController)
    .controller('EditPirateController', EditPirateController)

    PiratesController.$inject = ['pirates'];

    function PiratesController(pirates) {

      var vm = this;
      vm.pirates = pirates.data // 'pirates' comes from 'config' resolve object

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

    EditPirateController.$inject = ['PirateService', '$location', 'pirate']

    function EditPirateController(PirateService, $location, pirate) {

      var vm = this;

      vm.pirate = pirate.data

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