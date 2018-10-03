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
  $scope.dtOptionsTabRicercaLiquidazioni = DTOptionsBuilder.newOptions()
    .withOption("pageLength", 5)
    .withOption("lengthChange", false);

  $scope.colonneTabRicercaLiquidazioni = [
    DTColumnDefBuilder.newColumnDef(8).notSortable()
  ];

  $scope.find = function() {
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
