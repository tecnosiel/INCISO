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

  this.findSort = "-1";
  this.findCurrentPage = "";
  this.findTotalPage = "";
  this.findCognome = "";
  this.findNome = "";
  this.findCodiceFiscale = "";
  this.findDataDiNascita = "";
  this.findNumeroFaldoneArchiviazione = "";
  this.findAnnoDiScarto = "";
  this.elencoAssistiti = [];

  this.find = function() {
    if (this.tipoRicerca == "Anagrafe") {
      // https://datatables.net/forums/discussion/11390/how-to-get-values-of-the-current-sort-column-index-and-direction-from-aodata

      // var table = angular
      //   .element(document.querySelector("#resultRicercaDataTable"))
      //   .dataTable();

      var tableSort = $("#resultRicercaDataTable").dataTable();
      var tablePage = $("#resultRicercaDataTable").DataTable();

      this.info = {
        sort: {
          column: tableSort.fnSettings().aaSorting[0][0],
          direction: tableSort.fnSettings().aaSorting[0][1],
          titleColumn: tableSort.fnSettings().aoColumns[
            tableSort.fnSettings().aaSorting[0][0]
          ].sTitle
        },

        page: tablePage.page.info(),

        find: {
          findCognome: this.findCognome,
          findNome: this.findNome,
          findCodiceFiscale: this.findCodiceFiscale,
          findDataDiNascita: this.findDataDiNascita,
          findNumeroFaldoneArchiviazione: this.findNumeroFaldoneArchiviazione,
          findAnnoDiScarto: this.findAnnoDiScarto
        }
      };

      this.elencoAssistiti = [];

      anagrafeServices.find(this.info, resultData => {
        this.elencoAssistiti = resultData;
      });

      debugger;
    } else {
      this.elencoAssistiti = httpServices._ricercaPosizioniRicerca.get(
        "mockUrl"
      );
    }
  };

  this.findCodFis = function(cCodFis) {
    alert("posizione")
    // this.datiAssistito = httpServices._ricercaAnagraficaRicerca.findCodFis(
    //   "mockUrl",
    //   cCodFis
    // );
    anagrafeServices.findCodFis(cCodFis, resultData => {
      this.datiAssistito = resultData;
    });
  };

  this.findPosizione = function(cCodFis) {
    // this.datiAssistito = httpServices._ricercaAnagraficaRicerca.findCodFis(
    //   "mockUrl",
    //   cCodFis
    // );

    anagrafeServices.findCodFis(cCodFis, resultData => {
      this.datiAssistito = resultData;
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
