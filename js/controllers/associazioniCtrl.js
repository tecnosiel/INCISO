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


}

/**
 * Collega il controller al modulo inciso
 **/
angular.module("inciso").controller("associazioniCtrl", associazioniCtrl);
