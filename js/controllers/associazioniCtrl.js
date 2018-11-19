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
    .withOption("lengthChange", false);

  $scope.colonneTabRicercaAssociazioni = [
    DTColumnDefBuilder.newColumnDef(3).notSortable()
  ];

  // $scope.find = function() {
  //   $scope.elencoAssociazioni = httpServices.associazioni.find("mockUrl");
  // };

  // $scope.findCodFis = function(cCodFis) {
  //   $scope.datiAssociazione = httpServices.associazioni.findCodFis(
  //     "mockUrl",
  //     cCodFis
  //   );
  // };

  $scope.info = {};
  $scope.info.find = {};

  $scope.elencoAssociazioni = [];
  $scope.find = function() {
    var tableSort = $("#resultRicercaAssociazioniDataTable").dataTable();
    var tablePage = $("#resultRicercaAssociazioniDataTable").DataTable();

    // informazioni ordinamento
    $scope.info.sort = {
      column: tableSort.fnSettings().aaSorting[0][0],
      direction: tableSort.fnSettings().aaSorting[0][1],
      titleColumn: tableSort.fnSettings().aoColumns[
        tableSort.fnSettings().aaSorting[0][0]
      ].sTitle
    };

    // informazioni pagina
    $scope.info.page = tablePage.page.info();

    // ------------------

    associazioniServices.find($scope.info, result => {
      $scope.elencoAssociazioni = result;
    });
  };

  $scope.datiAssociazione = [];
  $scope.findCodFis = function(cCodFis) {
    associazioniServices.findCodFis(cCodFis, result => {
      $scope.datiAssociazione = result;
    });
  };
}

/**
 * Collega il controller al modulo inciso
 **/
angular.module("inciso").controller("associazioniCtrl", associazioniCtrl);
