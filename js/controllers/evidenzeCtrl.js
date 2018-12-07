/**
 * anagrafeCtrl - controller
 * Controller Principale di gestione delle anagrafiche
 *
 */
function evidenzeCtrl(
  $scope,
  anagrafeServices,
  evidenzeServices,
  httpServices,
  DTOptionsBuilder,
  DTColumnDefBuilder,
  $state
) {

  // https://www.datatables.net/reference/option/
  $scope.dtOptionsTabRicercaEvidenze = DTOptionsBuilder.newOptions()
    .withOption("pageLength", 5)
    .withOption("bInfo", false)
    .withOption("paging", false)
    .withOption("lengthChange", false);

  $scope.colonneTabRicercaEvidenze = [
    DTColumnDefBuilder.newColumnDef(9).notSortable(),
    DTColumnDefBuilder.newColumnDef(10).notSortable()
  ];

  $scope.elencoEvidenze = [];
  $scope.datiAssistito = [];

  // -----------------------

  $scope.info = {};
  $scope.info.find = {};

  $scope.table = {};
  $scope.table.page = 1;
  $scope.table.pageSize = 5;
  $scope.table.totalRecord = 0;

  $scope.findStart = function () {
    evidenzeServices.getTotalRows($scope.info.find, result => {
      $scope.table.totalRecord = result;
      $scope.find(window.infoDataTable('resultRicercaEvidenzeDataTable', $scope.info.find));
    });
  }

  $scope.findPaginazione = function (pageClicked) {
    $scope.table.page = pageClicked - 1;
    $scope.find(window.infoDataTable('resultRicercaEvidenzeDataTable', $scope.info.find, $scope.table));
  }

  $scope.find = function (infoTable) {
    evidenzeServices.find(infoTable, result => {
      $scope.elencoEvidenze = httpServices.arrayFromDb(result, 'evidenze')
    });
  };

  // -----------------------

  $scope.datiAssistito = [];
  $scope.evidenza = [];
  $scope.tipoEvidenza = [{
      descrizione: "Tipo Evidenza 1",
      code: "AF"
    },
    {
      descrizione: "Tipo Evidenza 2",
      code: "AF"
    },
    {
      descrizione: "Tipo Evidenza 3",
      code: "AF"
    },
    {
      descrizione: "Tipo Evidenza 4",
      code: "AF"
    },
    {
      descrizione: "Tipo Evidenza 5",
      code: "AF"
    },
    {
      descrizione: "Tipo Evidenza 6",
      code: "AF"
    },
    {
      descrizione: "Tipo Evidenza 7",
      code: "AF"
    }
  ];

  $scope.salvaEvidenza = function (bCloseModal, self) {
    swal("Evidenza Salvata", "tutti i campi sono stati salvati correttamente", "success");
    if (bCloseModal) {
      $scope.modalInstance.close();
    }
  }

  $scope.visualizzaEvidenza = function (item) {

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