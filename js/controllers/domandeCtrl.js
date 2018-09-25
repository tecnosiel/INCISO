/**
 * domandeCtrl - controller
 * Controller Principale di gestione delle domande
 *
 */
function domandeCtrl(
  $scope,
  $rootScope,
  $stateParams,
  httpServices,
  $uibModal,
  $filter,
  DTOptionsBuilder,
  DTColumnDefBuilder
) {
  $scope.findIncludiDeceduti = "Si";
  $scope.findTipoAssistenzaRichiesta = null;
  $scope.findCognome = null;
  $scope.findNome = null;
  $scope.findCodiceFiscale = null;
  $scope.findDataDiNascita = null;

  this.DomandaVuota = {
    OperazioneInCorso: "NUOVA_DOMANDA",
    // ----
    NroDomanda: "123456-12",
    // ----
    Posizione: "12345",
    Fascicolo: "12345",
    StatoDomanda: "Inserita",
    // ----
    TipoDomanda: "99",
    DataDomanda: "01/01/1111",
    EmailDomanda: "tecnosiel@live.it",
    NumeroProtocollo: "11111",
    DataProtocollo: "11/11/1111",
    Provenienza: "4",
    DelegaPatronato: "ACLI Merano",
    Provenienza: "Presentata direttamente (2)",

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
    ModalitaDiPagamento: {
      Selezionata: "Banca",
      Banca: {
        IBAN: "IBAN",
        BICSWIFT: "BICSWIFT",
        Note: "note banca"
      },

      Posta: {
        CodiceFiscale: "LFNCLL60D03E026T",
        DelegatoIncasso: "DELEGATO INCASSO",
        Note: "note POSTA"
      }
    },

    AssociazioniDiCategoria: [
      {
        TipoAssociazione: "xxx-ANMIC-xxx",
        DataInizioIscrizione: "10/04/1986",
        DataFineIscrizione: "",
        QuotaMensile: "103.32"
      },
      {
        TipoAssociazione: "yyy-ANMIC-yyy",
        DataInizioIscrizione: "10/04/1999",
        DataFineIscrizione: "",
        QuotaMensile: "303.00"
      }
    ],

    Note: "queste sono le note generali o almno credo tali.....",

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

  $scope.aggiungiIscrizione = function() {
    swal("Qui va inserita la procedura di iscrizione!");
  };

  this.findDomande = function() {
    debugger;
    this.elencoDomande = httpServices.domande.find("mockUrl");
  };

  this.inserisciNuovaDomanda = function(cCodFis) {

    $rootScope.findCodFis(cCodFis);
    $rootScope.domanda = this.DomandaVuota;
    $rootScope.domanda.OperazioneInCorso = "NUOVA_DOMANDA";
    debugger;
  };
}

/**
 * Collega il controller al modulo inciso
 **/
angular
  .module("inciso")
  .controller("domandeCtrl", domandeCtrl);
