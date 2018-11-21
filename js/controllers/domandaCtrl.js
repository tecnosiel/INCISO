/**
 * domandeCtrl - controller
 * Controller Principale di gestione delle domande
 *
 */
function domandaCtrl(
  $scope,
  $state,
  httpServices,
  domandeServices,
  $stateParams
) {
  // ----
  $scope.elencoDomande = [];
  $scope.visualizzaDomanda = function() {
    domandeServices.find(this.info, result => {
      $scope.elencoDomande = result;
      $state.go("domande.visualizza_domanda", {
        datiAssistito: $scope.datiAssistito,
        domanda: $scope.elencoDomande[1].DomandePresentate[1]
      });
    });
  };
}

/**
 * Collega il controller al modulo inciso
 **/
angular.module("inciso").controller("domandaCtrl", domandaCtrl);
