/**
 * modalVisualizzaLiquidazioneCtrl - controller
 * Controller per la finestra modale di modalVisualizzaLiquidazione
 *
 */
function modalVisualizzaLiquidazioneCtrl($scope, $state, $stateParams) {
  $scope.modalSave = function(cTitolo, cSottoTitolo) {
    swal(cTitolo, cSottoTitolo, "success");
  };

  $scope.modalClose = function() {
    self.modalInstance.close();
  };

  $scope.Tmp = {
    CodiceFiscale: "LFNCLL60D03E026T"
  };
  // -----------------------------------------------------------
}

/**
 * Collega il controller al modulo inciso
 **/
angular
  .module("inciso")
  .controller(
    "modalVisualizzaLiquidazioneCtrl",
    modalVisualizzaLiquidazioneCtrl
  );
