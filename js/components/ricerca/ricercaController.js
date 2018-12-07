/**
 * baseController - controller
 * Controller del componente
 *
 */

function ricercaController(
  $rootScope,
  $scope,
  $uibModal,
  DTOptionsBuilder,
  httpServices,
  anagrafeServices,
  $state,
  $timeout
) {
  $scope.dtInstanceTabResultRicerca = {};

  this.elencoAssistiti = [];
  this.datiAssistito = [];
  self = this;

  this.info = {};
  this.info.find = {};

  this.table = {};
  this.table.page = 1;
  this.table.pageSize = 5;
  this.table.totalRecord = 0;

  this.findStart = function () {
    anagrafeServices.getTotalRows(this.info.find, result => {
      this.table.totalRecord = result;
      this.find(window.infoDataTable('resultRicercaDataTable', self.info.find));
    });
  }

  this.findPaginazione = function (pageClicked) {
    this.table.page = pageClicked - 1;
    // let buffer = window.infoDataTable('resultRicercaDataTable', self.info.find, self.table);
    // window.infoDataTable('resultRicercaDataTable', self.info.find, self.table)
    this.find(window.infoDataTable('resultRicercaDataTable', self.info.find, self.table));
  }

  this.find = function (infoTable) {
    if (this.tipoRicerca == "Anagrafe") {
      anagrafeServices.find(infoTable, result => {
        this.elencoAssistiti = httpServices.arrayFromDb(result, 'anagrafe')
      });
    } else {
      anagrafeServices.findPosizioni(infoTable, result => {
        this.elencoAssistiti = httpServices.arrayFromDb(result, 'posizione')
      });
    }
    // ------------------
  };

  this.findCodFis = function (cCodFis) {
    anagrafeServices.findCodFis(cCodFis, result => {
      this.datiAssistito = httpServices.jsonFromDb(result, 'anagrafe')
    });
  };

  this.findPosizione = function (cCodFis) {
    anagrafeServices.findCodFis(cCodFis, result => {
      $state.go("posizione.visualizza_posizione", {
        datiAssistito: result
      });
    });
  };

  this.creaNuovaAnagrafica = function ($index) {
    $scope.NuovaAnagrafica = null;

    // http://www.marcorpsa.com/ee/t1891.html
    self.modalInstance = $uibModal.open({
      templateUrl: "./../views/modal_crea_nuova_anagrafica.html",
      controller: "modalCreaNuovaAnagraficaCtrl",
      // size: "lg",
      scope: $scope,
      windowClass: "animated fadeInRightBig"
    });
  };

  // https://www.datatables.net/reference/option/
  this.dtOptions = DTOptionsBuilder.newOptions()
    .withOption("pageLength", 5)
    .withOption("bInfo", false)
    .withOption("paging", false)
  // .withOption("lengthMenu", [
  //   [5, 10, 20, 30, -1],
  //   [5, 10, 20, 30, 'Tutti']
  // ])
  // .withOption("drawCallback", function (settings) {
  //   debugger;
  //   let buffer = window.infoDataTable('resultRicercaDataTable', self.info.find);
  //   alert(JSON.stringify(buffer));
  // })
  // .withOption("lengthChange", false);




  // https://www.datatables.net/reference/option/
  // http://www.dotnetawesome.com/2016/01/datatables-server-side-paging-sorting-filtering-angularjs.html
  // this.dtOptions = DTOptionsBuilder.newOptions()
  //   .withOption('ajax', {
  //     dataSrc: "data",
  //     url: $rootScope.urlAnagrafe + "/GetByAnagFilter" + $rootScope.testquerystring,
  //     type: "GET"
  //   })
  //   .withOption("pageLength", 5)
  //   .withOption("lengthMenu", [[5, 10, 20, 30, -1], [5, 10, 20, 30, 'Tutti']])
  //   .withOption("serverSide", true)
  //   .withPaginationType("full_numbers")
  //   .withOption('aaSorting',[0,'asc']) 
  //   .withOption('processing', false);
  //   // .withDisplayLength(10)
  //   // .withOption("lengthChange", false);


}