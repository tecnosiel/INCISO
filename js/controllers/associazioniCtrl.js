/**
 * anagrafeCtrl - controller
 * Controller Principale di gestione delle anagrafiche
 *
 */
function associazioniCtrl(
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
    $scope.elencoAssociazioni = httpServices.associazioni.find("mockUrl");
  };

  $scope.findCodFis = function(cCodFis) {
    $scope.datiAssociazione = httpServices.associazioni.findCodFis(
      "mockUrl",
      cCodFis
    );
  };

}

/**
 * Collega il controller al modulo inciso
 **/
angular.module("inciso").controller("associazioniCtrl", associazioniCtrl);
