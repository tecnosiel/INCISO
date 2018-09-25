/**
 * anagrafeCtrl - controller
 * Controller Principale di gestione delle anagrafiche
 *
 */
function associazioniCtrl(
  $rootScope,
  $scope,
  httpServices,
  $uibModal,
  DTOptionsBuilder,
  DTColumnDefBuilder
) {
  // https://www.datatables.net/reference/option/
  $rootScope.dtOptions = DTOptionsBuilder.newOptions()
    .withOption("pageLength", 5)
    .withOption("lengthChange", false);

  $rootScope.colonneTabAssociazioni = [
    DTColumnDefBuilder.newColumnDef(3).notSortable(),
    DTColumnDefBuilder.newColumnDef(4).notSortable()
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
