/**
 * modifica_importo_da_recuperareCtrl - controller
 * Controller per la finestra modale di gestioneindirizzi
 *
 */
function modifica_importo_da_recuperareCtrl(
  $scope,
  $rootScope,
  $http,
  $state,
  $stateParams
) {
  $scope.Tmp = {
    CalcoloInteressi: "No",
    Rateizzazione: "No",
    RinunciaAllaRiscossioneCoattiva: "No",
    ImportoRataMensile: null,
    NumeroDecreto: null,
    ImportoCapitaleDaRecuperare: null,
    ImportoInteressiLegaliDaRecuperare: null,
    ImportoInteressiDiRateizzazione: null,
    ImportoTotaleDaRecuperare: null,
    Annullato: "No",
    DataDecretoRateizzazione: null,
    DataDecretoRinunciaAllaRiscossione: null
  };

  $scope.datiAssistito = $stateParams.datiAssistito;
  $scope.salvaModulo = function() {
    swal({
      title: "Salvataggio Dati!",
      text: "I dati saranno controllati e salvati!",
      icon: "success",
      button: "conferma!"
    });
  };
}

/**
 * Collega il controller al modulo inciso
 **/
angular
  .module("inciso")
  .controller(
    "modifica_importo_da_recuperareCtrl",
    modifica_importo_da_recuperareCtrl
  );
