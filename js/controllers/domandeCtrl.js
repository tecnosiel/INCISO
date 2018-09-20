/**
 * domandeCtrl - controller
 * Controller Principale di gestione delle domande
 *
 */
function domandeCtrl(
  $scope,
  $rootScope,
  httpServices,
  $uibModal,
  $filter,
  DTOptionsBuilder,
  DTColumnDefBuilder
) {
  this.DomandaVuota = {
    Posizione: "A Definirsi",
    Fascicolo: "A Definirsi",
    StatoDomanda: "In Itinere",
    // ----
    TipoDomanda: "99",
    DataDomanda: "01/01/1111",
    EmailDomanda: "tecnosiel@live.it",
    NumeroProtocollo: "11111",
    DataProtocollo: "11/11/1111",
    Provenienza: "4",
    DelegaPatronato: "ACLI Merano",

    LegaliRappresentanti: [
      {
        Nome: "Mario",
        Cognome: "Rossi",
        CodiceFiscale: "RSSMRO70A10F2052",
        NumeroDecreto: "1111",
        DataDecreto: "11/11/1111",
        TipoDecreto: "Provvisorio",
        ScadenzaDecreto: "11/11/1111"
      },
      {
        Nome: "22222",
        Cognome: "22222",
        CodiceFiscale: "2222",
        NumeroDecreto: "2222",
        DataDecreto: "11/11/1111",
        TipoDecreto: "Definitivo",
        ScadenzaDecreto: "11/11/1111"
      }
    ],
    Curatore: "io sono il curatore 111111",
    Comunicazioni: "Italiano",
    ModalitaDiPagamento: "1",
    AssociazioniDiCategoria: [
      {
        TipoAssociazione: "ANMIC",
        DataInizioIscrizione: "10/04/1986",
        DataFineIscrizione: "",
        QuotaMensile: "103.32"
      }
    ],

    Note: "quste sono le note generali o almno credo tali.....",

    AziendaSanitaria: {
      NumeroProtocollo: "12345",
      DataProtocollo: "12/34/5678",
      PercentualeDiInvalidita: "66%",
      IndennitaDiAccompagnamento: "No",
      PatologiaUditiva: "No",
      RiduzioneDelVisus: "No",
      NoteVerbale: "Io sono la nota a verbale",
      DataDecorrenzaPagamento: "11/11/1234"
    }
  };

  this.find = function() {
    this.elencoDomande = httpServices.domande.find("mockUrl");
  };

  this.findCodFis = function(cCodFis) {
    $rootScope.domanda = httpServices.domande.findCodFis("mockUrl", cCodFis);
    debugger;
  };

  this.inserisciDomanda = function() {
    $rootScope.domanda = this.DomandaVuota;
    debugger;
  };
}
