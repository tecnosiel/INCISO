/**
 * baseController - controller
 * Controller del componente
 *
 */

function ricercaController($scope, DTOptionsBuilder, httpServices, $timeout) {
  this.findCognome = "";
  this.findNome = "";
  this.findCodiceFiscale = "";
  this.findDataDiNascita = "";
  this.findNumeroFaldoneArchiviazione = "";
  this.findAnnoDiScarto = "";
  this.elencoAssistiti = [];

  this.find = function() {
    this.elencoAssistiti = httpServices._ricercaAnagraficaRicerca.get(
      "mockUrl"
    );
  };

  this.findCodFis = function(cCodFis) {
debugger;
    this.datiAssistito = httpServices._ricercaAnagraficaRicerca.findCodFis(
      "mockUrl",
      cCodFis
    );
   
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
