/**
 * anagrafeCtrl - controller
 * Controller Principale di gestione delle anagrafiche
 *
 */
function associazioniCtrl(
  $scope,
  httpServices,
  associazioniServices,
  DTOptionsBuilder,
  DTColumnDefBuilder
) {


  // https://www.datatables.net/reference/option/
  $scope.dtOptionsTabRicercaAssociazioni = DTOptionsBuilder.newOptions()
    .withOption("pageLength", 5)
    .withOption("bInfo", false)
    .withOption("paging", false)
    .withOption("lengthChange", false);

  $scope.colonneTabRicercaAssociazioni = [
    DTColumnDefBuilder.newColumnDef(3).notSortable()
  ];
  $scope.elencoAssociazioni = [];
  $scope.datiAssociazione = [];
  // ----------------------
  $scope.info = {};
  $scope.info.find = {};

  $scope.table = {};
  $scope.table.page = 1;
  $scope.table.pageSize = 5;
  $scope.table.totalRecord = 0;

  $scope.findStart = function () {
    associazioniServices.getTotalRows($scope.info.find, result => {
      $scope.table.totalRecord = result;
      $scope.find(window.infoDataTable('resultRicercaAssociazioniDataTable', $scope.info.find));
    });
  }

  $scope.findPaginazione = function (pageClicked) {
    $scope.table.page = pageClicked - 1;
    $scope.find(window.infoDataTable('resultRicercaAssociazioniDataTable', $scope.info.find, $scope.table));
  }

  $scope.find = function (infoTable) {
    associazioniServices.find(infoTable, result => {
      $scope.elencoAssociazioni = httpServices.arrayFromDb(result, 'associazioni')
    });
  };

  // ----------------------

  // $scope.find = function () {
  //   $scope.info = window.infoDataTable('resultRicercaAssociazioniDataTable', $scope.info.find);

  //   associazioniServices.find($scope.info, result => {
  //     $scope.elencoAssociazioni = result;
  //   });
  // };

  $scope.findCodFis = function (cCodFis) {
    associazioniServices.findCodFis(cCodFis, result => {
      $scope.datiAssociazione = result;
    });
  };
}

/**
 * Collega il controller al modulo inciso
 **/
angular.module("inciso").controller("associazioniCtrl", associazioniCtrl);