/**
 * INCISO - Gestione invalidi civili, ciechi civili e sordi
 *
 * Controller.js file
 * Definisce tutti i controllers usati in Inciso
 *
 *
 * Elenco Controllers adoperati:
 *
 *  - MainCtrl
 *  - anagrafeCtrl
 *  - modalGestioneIndirizziCtrl
 *  - modalGestioneRedditiCtrl
 *  - translateCtrl
 *
 */

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
  NgTableParams,
  DTOptionsBuilder
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

/**
 * anagrafeCtrl - controller
 * Controller Principale di gestione delle anagrafiche
 *
 */
function anagrafeCtrl($rootScope, httpServices, $uibModal, DTOptionsBuilder, DTColumnDefBuilder) {
  $rootScope.datiAssistito = [];

  // https://www.datatables.net/reference/option/
  $rootScope.dtOptions = DTOptionsBuilder.newOptions()
    .withOption("pageLength", 5)
    .withOption("paging", true)
    .withOption("searching", true)
    .withOption("info", true)
    .withOption("lengthChange", false);

  this.find = function() {
    this.elencoAssistiti = httpServices._ricercaAnagraficaRicerca.get(
      "mockUrl"
    );
  };

  this.findCodFis = function(cCodFis) {
    $rootScope.datiAssistito = httpServices._ricercaAnagraficaRicerca.findCodFis(
      "mockUrl",
      cCodFis
    );
  };

  $rootScope.creaNuovoIndirizzo = function() {
    var modalInstance = $uibModal.open({
      templateUrl: "./../views/gestione_indirizzi.html",
      controller: modalGestioneIndirizziCtrl,
      windowClass: "animated flipInY"
    });
  };

  $rootScope.creaNuovoReddito = function() {
    alert("creaNuovoReddito");
    var modalInstance = $uibModal.open({
      templateUrl: "./../views/gestione_redditi.html",
      controller: modalGestioneRedditiCtrl,
      windowClass: "animated flipInY"
    });
  };

  /**
   * campi adoperati per la ricerca
   */
  this.findCognome = "";
  this.findNome = "";
  this.findCodiceFiscale = "";
  this.findDataDiNascita = "";
  this.findNumeroFaldoneArchiviazione = "";
  this.findAnnoDiScarto = "";
}

/**
 * visualizzaAnagrafeCtrl - controller
 * Controller per la gestione dell' anagrafica
 *
 */
// https://www.codelord.net/2015/06/02/angularjs-pitfalls-using-ui-routers-resolve/

function visualizzaAnagrafeCtrl(
  $scope,
  $rootScope,
  runMode,
  DTOptionsBuilder,
  DTColumnDefBuilder
) {
  // https://www.datatables.net/reference/option/
  $rootScope.dtOptions = DTOptionsBuilder.newOptions()
    .withOption("paging", true)
    .withOption("searching", true)
    .withOption("info", true)
    .withOption("lengthChange", false);

  if (runMode == "NUOVOINSERIMENTO") {
    this.editDatiAssistito = false;
    this.inserimentoAnagrafe = true;
    $rootScope.datiAssistito = [];
  } else {
    this.editDatiAssistito = true;
    this.inserimentoAnagrafe = false;
  }

  // function to submit the form after all validation has occurred
  $scope.submitForm = function(isValid) {
    // check to make sure the form is completely valid
    if (isValid) {
      alert("la tua Form è valida");
    }
  };
}

/**
 * modalGestioneIndirizziCtrl - controller
 * Controller per la gestione della modale degli indirizzi
 *
 */
function modalGestioneIndirizziCtrl($scope, $uibModalInstance) {
  $scope.ok = function() {
    $uibModalInstance.close();
  };

  $scope.cancel = function() {
    $uibModalInstance.dismiss("cancel");
  };
}

/**
 * modalGestioneRedditiCtrl - controller
 * Controller per la gestione della modale dei redditi
 *
 */
function modalGestioneRedditiCtrl($scope, $uibModalInstance) {
  $scope.ok = function() {
    $uibModalInstance.close();
  };

  $scope.cancel = function() {
    $uibModalInstance.dismiss("cancel");
  };
}

/**
 * translateCtrl - Controller for translate
 */
function translateCtrl($translate, $scope) {
  $scope.changeLanguage = function(langKey) {
    $translate.use(langKey);
    $scope.language = langKey;
  };
}

/**
 * MainCtrl - controller
 * Contiene dati globali usati in differenti view
 *
 */
function MainCtrl($scope, $rootScope, $translate, $http) {
  /**
   * language - Setta la lingua di partenza ad Italiano. In caso contrario verrebbe settata ad
   * Inglese
   */

  this.$onInit = function() {
    $translate.use("it");
  };
}

/**
 *
 * Collega tutte le funzioni al modulo
 */
angular
  .module("inciso")
  .controller("MainCtrl", MainCtrl)
  .controller("translateCtrl", translateCtrl)
  .controller("visualizzaAnagrafeCtrl", visualizzaAnagrafeCtrl)
  .controller("anagrafeCtrl", anagrafeCtrl)
  .controller("domandeCtrl", domandeCtrl);
