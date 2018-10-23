/**
 * domandeCtrl - controller
 * Controller Principale di gestione delle domande
 *
 */
function domandaCtrl($scope, $state, httpServices, $stateParams) {
  // ----

  $scope.visualizzaDomanda = function() {
    $scope.elencoDomande = httpServices.domande.find("mockUrl");
    debugger;
    $state.go("domande.visualizza_domanda", {
      datiAssistito: $scope.datiAssistito,

      domanda: $scope.elencoDomande[1].DomandePresentate[1]
    });
  };
}

/**
 * Collega il controller al modulo inciso
 **/
angular.module("inciso").controller("domandaCtrl", domandaCtrl);
