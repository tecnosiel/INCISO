/**
 * domandeCtrl - controller
 * Controller Principale di gestione delle domande
 *
 */
function domandeCtrl(
  $scope,
  DTOptionsBuilder,
  DTColumnDefBuilder,
  httpServices
) {
  // https://www.datatables.net/reference/option/
  $scope.dtOptionsTabElencoEvidenze = DTOptionsBuilder.newOptions()
    .withOption("pageLength", 5)
    .withOption("lengthChange", false);

  $scope.colonneTabElencoEvidenze = [
    DTColumnDefBuilder.newColumnDef(7).notSortable()
  ];

  //----

  $scope.findIncludiDeceduti = "Si";
  $scope.findTipoAssistenzaRichiesta = null;
  $scope.findCognome = null;
  $scope.findNome = null;
  $scope.findCodiceFiscale = null;
  $scope.findDataDiNascita = null;
  $scope.domanda = { OperazioneInCorso: "NUOVA_DOMANDA" };

  $scope.findCodFis = function(cCodFis) {
    $scope.datiAssistito = httpServices._ricercaAnagraficaRicerca.findCodFis(
      "mockUrl",
      cCodFis
    );
    debugger;
  };

  $scope.DomandaVuota = {
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
    Evidenze: [
      {
        Decorrenza: "01/01/2020",
        Scadenza: "01/01/2017",
        Tipo: "Domanda sospesa",
        Descrizione:
          "Domanda sospesa, assistito percepisce già l’assegno di cura",
        Posizione: "777232",
        Prestazione: "Pensione per invalidi civili parziali",
        Chiusura: "",
        Note: ""
      },
      {
        Decorrenza: "01/01/2022",
        Scadenza: "01/01/2018",
        Tipo: "Importo da recuperare",
        Descrizione: "Importo da recuperare",
        Posizione: "777232",
        Prestazione: "Pensione per invalidi civili parziali",
        Chiusura: "",
        Note:
          "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
      },
      {
        Decorrenza: "01/01/2022",
        Scadenza: "01/01/2018",
        Tipo: "Trasferimento – cambio residenza",
        Descrizione:
          "Trasferimento fuori provincia – revocare domande assistito",
        Posizione: "777232",
        Prestazione: "Pensione per invalidi civili parziali",
        Chiusura: "",
        Note:
          "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
      },
      {
        Decorrenza: "01/01/2022",
        Scadenza: "01/01/2018",
        Tipo: "Recupero da annullare",
        Descrizione: "Recupero già liquidato da annullare – fare riaccredito",
        Posizione: "777232",
        Prestazione: "Pensione per invalidi civili parziali",
        Chiusura: "",
        Note:
          "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
      },
      {
        Decorrenza: "01/01/2022",
        Scadenza: "01/01/2018",
        Tipo: "Importo da recuperare",
        Descrizione: "Importo da recuperare",
        Posizione: "777232",
        Prestazione: "Pensione per invalidi civili parziali",
        Chiusura: "",
        Note:
          "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
      }
    ],

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

  $scope.ordinamentoSelezionatoElencoDomande = "Cognome";
  $scope.reverse = false;
  // http://www.javascriptkit.com/javatutors/arraysort2.shtml

  $scope.ordinamento = {
    Campo: "Cognome",
    Descrizione: "Cognome",
    Reverse: false
  };

  $scope.ordinaElencoDomande = function(cCampo, cDescrizione) {
    $scope.ordinamento.Campo = cCampo;
    $scope.ordinamento.Descrizione = cDescrizione;
  };

  $scope.setReverse = function() {
    $scope.ordinamento.Reverse = !$scope.ordinamento.Reverse;
  };

  $scope.aggiungiIscrizione = function() {
    swal("Qui va inserita la procedura di iscrizione!");
  };

  $scope.datiDomandaCerca = function() {
    swal("Qui va inserita una ricerca ma non ho capito cosa cercare!");
  };

  $scope.findDomande = function() {
    debugger;
    $scope.elencoDomande = httpServices.domande.find("mockUrl");
  };

  $scope.inserisciNuovaDomanda = function(cCodFis) {
    $scope.findCodFis(cCodFis);
    $scope.domanda = Object.assign({}, this.DomandaVuota);
    $scope.domanda.OperazioneInCorso = "NUOVA_DOMANDA";
  };

  $scope.myObj = {
    a: 1,
    b: 2
  };

}

/**
 * Collega il controller al modulo inciso
 **/
angular.module("inciso").controller("domandeCtrl", domandeCtrl);
