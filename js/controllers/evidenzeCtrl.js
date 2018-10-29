/**
 * anagrafeCtrl - controller
 * Controller Principale di gestione delle anagrafiche
 *
 */
function evidenzeCtrl(
  $scope,
  httpServices,
  DTOptionsBuilder,
  DTColumnDefBuilder
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

  $scope.findCodFis = function(cCodFis) {
    $scope.datiAssociazione = httpServices.evidenze.findCodFis(
      "mockUrl",
      cCodFis
    );
  };

}

/**
 * Collega il controller al modulo inciso
 **/
angular.module("inciso").controller("evidenzeCtrl", evidenzeCtrl);
