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

  this.findCognome = "";
  this.findNome = "";
  this.findCodiceFiscale = "";
  this.findDataDiNascita = "";
  this.findNumeroFascicolo = "";
  this.findNumeroFaldoneArchiviazione = "";
  this.findAnnoDiScarto = "";

  this.elencoAssistiti = [];

  this.find = function() {
    var tableSort = $("#resultRicercaDataTable").dataTable();
    var tablePage = $("#resultRicercaDataTable").DataTable();

    this.info = {
      // informazioni ordinamento
      sort: {
        column: tableSort.fnSettings().aaSorting[0][0],
        direction: tableSort.fnSettings().aaSorting[0][1],
        titleColumn: tableSort.fnSettings().aoColumns[
          tableSort.fnSettings().aaSorting[0][0]
        ].sTitle
      },

      // informazioni pagina
      page: tablePage.page.info(),

      // informazioni ricerca
      find: {
        findCognome: this.findCognome,
        findNome: this.findNome,
        findCodiceFiscale: this.findCodiceFiscale,
        findDataDiNascita: this.findDataDiNascita,
        findNumeroFascicolo: this.findNumeroFascicolo,
        findNumeroFaldoneArchiviazione: this.findNumeroFaldoneArchiviazione,
        findAnnoDiScarto: this.findAnnoDiScarto
      }
    };

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
    anagrafeServices.findCodFis(cCodFis, resultData => {
      this.datiAssistito = resultData;
    });
  };

  this.findPosizione = function(cCodFis) {
    anagrafeServices.findCodFis(cCodFis, result => {
      this.datiAssistito = result;
    });

    $state.go("posizione.visualizza_posizione", {
      datiAssistito: this.datiAssistito
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
