/**
 * anagrafeCtrl - controller
 * Controller Principale di gestione delle anagrafiche
 *
 */
function evidenzeCtrl(
  $scope,
  anagrafeServices,
  evidenzeServices,
  $uibModal,
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

  $scope.find = function () {
    var tableSort = $("#resultRicercaEvidenzeDataTable").dataTable();
    var tablePage = $("#resultRicercaEvidenzeDataTable").DataTable();

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

    evidenzeServices.find($scope.info, result => {
      $scope.elencoEvidenze = result;
    });
  };

  $scope.datiAssistito = [];
  $scope.evidenza = [];
  $scope.tipoEvidenza = [
    {
      descrizione: "Tipo Evidenza 1",
      code: "AF"
    },
    {
      descrizione:
        "Tipo Evidenza 2",
      code: "AF"
    },
    { descrizione: "Tipo Evidenza 3", code: "AF" },
    { descrizione: "Tipo Evidenza 4", code: "AF" },
    { descrizione: "Tipo Evidenza 5", code: "AF" },
    { descrizione: "Tipo Evidenza 6", code: "AF" },
    { descrizione: "Tipo Evidenza 7", code: "AF" }
  ];

  $scope.salvaEvidenza = function (bCloseModal, self) {
    swal("Evidenza Salvata", "tutti i campi sono stati salvati correttamente", "success");
    if (bCloseModal) {
      $scope.modalInstance.close();
    }
  }

  $scope.visualizzaEvidenza = function (item) {
    debugger;
    $scope.modale = false;
    anagrafeServices.findCodFis(item.CodiceFiscale, result => {
      evidenzeServices.findCodFis(item.CodiceFiscale, result2 => {
        $state.go("evidenze.visualizza_evidenza", {
          datiAssistito: result,
          evidenza: result2
        });
      });
    });

  }


  $scope.cancellaEvidenza = function () {
    swal({
      title: "Desideri cancellare l'evidenza?",
      text: "Ricorda: potrà sempre essere recuperata!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(function (willDelete) {
      if (willDelete) {
        swal("L' evidenza è stata cancellata!", {
          icon: "success"
        }).then(function () {
          $state.go("evidenze.ricerca_evidenza", {
            datiAssistito: $scope.datiAssistito
          });
        });
      } else {
        swal("L' evidenza non è stata modificata!");
      }
    });
  };

}

/**
 * Collega il controller al modulo inciso
 **/
angular.module("inciso").controller("evidenzeCtrl", evidenzeCtrl);