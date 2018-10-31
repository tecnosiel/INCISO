/**
 * anagrafeCtrl - controller
 * Controller Principale di gestione delle anagrafiche
 *
 */
function evidenzeCtrl(
  $scope,
  httpServices,
  DTOptionsBuilder,
  DTColumnDefBuilder,
  $state
) {
  // https://www.datatables.net/reference/option/
  $scope.dtOptionsTabRicercaEvidenze = DTOptionsBuilder.newOptions()
    .withOption("pageLength", 5)
    .withOption("lengthChange", false);

  $scope.colonneTabRicercaEvidenze = [
    DTColumnDefBuilder.newColumnDef(9).notSortable(),
    DTColumnDefBuilder.newColumnDef(10).notSortable()
  ];

  $scope.find = function() {
    debugger;
    $scope.elencoEvidenze = httpServices.evidenze.find("mockUrl");
    debugger;
  };

  $scope.visualizzaEvidenza = function(cCodFis) {
    $scope.datiAssistito = httpServices._ricercaAnagraficaRicerca.findCodFis(
      "mockUrl",
      cCodFis
    );

    $scope.evidenza = httpServices.evidenze.findCodFis("mockUrl", cCodFis);

    $state.go("evidenze.visualizza_evidenza", {
      datiAssistito: $scope.datiAssistito,
      evidenza: $scope.evidenza
    });
  };
}

/**
 * Collega il controller al modulo inciso
 **/
angular.module("inciso").controller("evidenzeCtrl", evidenzeCtrl);
