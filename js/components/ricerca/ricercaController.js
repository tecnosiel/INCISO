/**
 * baseController - controller
 * Controller del componente
 *
 */

function ricercaController(
  $scope,
  $uibModal,
  DTOptionsBuilder,
  httpServices,
  anagrafeServices,
  $state,
  $timeout
) {
  $scope.dtInstanceTabResultRicerca = {};
  debugger;

  this.elencoAssistiti = [];
  this.datiAssistito = [];
  this.info = {};
  this.info.find = {};

  this.find = function() {
    var tableSort = $("#resultRicercaDataTable").dataTable();
    var tablePage = $("#resultRicercaDataTable").DataTable();

    // informazioni ordinamento
    this.info.sort = {
      column: tableSort.fnSettings().aaSorting[0][0],
      direction: tableSort.fnSettings().aaSorting[0][1],
      titleColumn: tableSort.fnSettings().aoColumns[
        tableSort.fnSettings().aaSorting[0][0]
      ].sTitle
    };

    // informazioni pagina
    this.info.page = tablePage.page.info();

    // ------------------

    if (this.tipoRicerca == "Anagrafe") {
      anagrafeServices.find(this.info, result => {
        this.elencoAssistiti = result;
      });
    } else {
      anagrafeServices.findPosizioni(this.info, result => {
        this.elencoAssistiti = result;
      });
    }
    // ------------------
  };

  this.findCodFis = function(cCodFis) {
    anagrafeServices.findCodFis(cCodFis, result => {
      this.datiAssistito = result;
    });
  };

  this.findPosizione = function(cCodFis) {
    anagrafeServices.findCodFis(cCodFis, result => {
      $state.go("posizione.visualizza_posizione", {
        datiAssistito: result
      });
    });
  };

  this.creaNuovaAnagrafica = function($index) {
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
    .withOption("lengthChange", false);
}
