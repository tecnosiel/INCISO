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
  $state,
  $timeout
) {
  this.findCognome = "";
  this.findNome = "";
  this.findCodiceFiscale = "";
  this.findDataDiNascita = "";
  this.findNumeroFaldoneArchiviazione = "";
  this.findAnnoDiScarto = "";
  this.elencoAssistiti = [];

  this.find = function() {
    if (this.tipoRicerca == "Anagrafe") {
      this.elencoAssistiti = httpServices._ricercaAnagraficaRicerca.get(
        "mockUrl"
      );
    } else {
      this.elencoAssistiti = httpServices._ricercaPosizioniRicerca.get(
        "mockUrl"
      );
    }
  };

  this.findCodFis = function(cCodFis) {
    this.datiAssistito = httpServices._ricercaAnagraficaRicerca.findCodFis(
      "mockUrl",
      cCodFis
    );
  };

  this.findPosizione = function(cCodFis) {
    this.datiAssistito = httpServices._ricercaAnagraficaRicerca.findCodFis(
      "mockUrl",
      cCodFis
    );

    $state.go('posizione.visualizza_posizione', {datiAssistito: this.datiAssistito});

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

//da verificare
// .withOption("responsive", true)
// .withOption("scrollX", "auto")
// .withOption("scrollCollapse", true)
// .withOption("autoWidth", false);
