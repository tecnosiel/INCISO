/**
 * anagrafeCtrl - controller
 * Controller Principale di gestione delle anagrafiche
 *
 */
function liquidazioniCtrl(
  $scope,
  httpServices,
  DTOptionsBuilder,
  DTColumnDefBuilder
) {
  // https://www.datatables.net/reference/option/
  $scope.dtOptionsTabRicercaAssociazioni = DTOptionsBuilder.newOptions()
    .withOption("pageLength", 5)
    .withOption("lengthChange", false);

  $scope.colonneTabRicercaAssociazioni = [
    DTColumnDefBuilder.newColumnDef(3).notSortable()
  ];

  $scope.find = function() {
    debugger;
    $scope.elencoLiquidazioni = httpServices.liquidazioni.find("mockUrl");
  };

  $scope.findCodFis = function(cCodFis) {
    $scope.datiAssociazione = httpServices.liquidazioni.findCodFis(
      "mockUrl",
      cCodFis
    );
  };

}

/**
 * Collega il controller al modulo inciso
 **/
angular.module("inciso").controller("liquidazioniCtrl", liquidazioniCtrl);
