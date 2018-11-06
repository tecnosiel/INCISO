/**
 * modifica_importo_restituitoCtrl - controller
 * Controller per la finestra modale di gestioneindirizzi
 *
 */
function modifica_importo_restituitoCtrl(
  $scope,
  $rootScope,
  $http,
  $state,
  $stateParams
) {
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
    "modifica_importo_restituitoCtrl",
    modifica_importo_restituitoCtrl
  );
