/**
 * baseController - controller
 * Controller del componente
 *
 */

function ricercaController(DTOptionsBuilder, httpServices) {

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
    alert(cCodFis)
    this.datiAssistito = httpServices._ricercaAnagraficaRicerca.findCodFis(
      "mockUrl",
      cCodFis
    );
    debugger;
  };

  // https://www.datatables.net/reference/option/
  this.dtOptions = DTOptionsBuilder.newOptions()
    .withOption("pageLength", 5)
    .withOption("lengthChange", false);

}
