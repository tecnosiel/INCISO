/**
 * anagrafeCtrl - controller
 * Controller Principale di gestione delle anagrafiche
 *
 */
function evidenzeCtrl(
  $scope,
  httpServices,
  anagrafeServices,
  evidenzeServices,
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

  $scope.elencoEvidenze = [];
  $scope.datiAssistito = [];
  $scope.info = {};
  $scope.info.find = {};

  $scope.find = function() {
    var tableSort = $("#resultRicercaEvidenzeDataTable").dataTable();
    var tablePage = $("#resultRicercaEvidenzeDataTable").DataTable();
    $scope.elencoLiquidazioni = [];

    debugger;
    // informazioni ordinamento
    $scope.info.sort = {
      column: tableSort.fnSettings().aaSorting[0][0],
      direction: tableSort.fnSettings().aaSorting[0][1],
      titleColumn: tableSort.fnSettings().aoColumns[
        tableSort.fnSettings().aaSorting[0][0]
      ].sTitle
    };
    // informazioni paginazione
    $scope.info.page = tablePage.page.info();

    // ------------------

    evidenzeServices.find($scope.info, result => {
      $scope.elencoEvidenze = result;
    });
  };

  $scope.datiAssistito = [];
  $scope.evidenza = [];
  $scope.visualizzaEvidenza = function(cCodFis) {
    anagrafeServices.findCodFis(cCodFis, result => {
      $scope.datiAssistito = result;
      evidenzeServices.findCodFis(cCodFis, result => {
        $scope.evidenza = result;
        $state.go("evidenze.visualizza_evidenza", {
          datiAssistito: $scope.datiAssistito,
          evidenza: $scope.evidenza
        });
      });
    });
  };
}

/**
 * Collega il controller al modulo inciso
 **/
angular.module("inciso").controller("evidenzeCtrl", evidenzeCtrl);
