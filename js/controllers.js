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

/**
 * anagrafeCtrl - controller
 * Controller Principale di gestione delle anagrafiche
 *
 */
function anagrafeCtrl(
  $rootScope,
  $scope,
  httpServices,
  $uibModal,
  DTOptionsBuilder,
  DTColumnDefBuilder
) {
  $rootScope.datiAssistito = [];

  // https://www.datatables.net/reference/option/
  $rootScope.dtOptions = DTOptionsBuilder.newOptions()
    .withOption("pageLength", 5)
    .withOption("lengthChange", false);

  $rootScope.colonneTabElencoRedditi = [
    DTColumnDefBuilder.newColumnDef(3).notSortable(),
    DTColumnDefBuilder.newColumnDef(4).notSortable()
  ];

  $rootScope.provinces = [
    { name: "Milano", area: "Nord", disabled: false },
    { name: "Torino", area: "Nord", disabled: false },
    { name: "Roma", area: "Centro", disabled: true },
    { name: "Bologna", area: "Centro", disabled: false },
    { name: "Napoli", area: "Sud", disabled: false },
    { name: "Palermo", area: "Sud", disabled: false }
  ];

  $rootScope.comuni = [
    { name: "Comune1", area: "Nord", disabled: false },
    { name: "Comune2", area: "Nord", disabled: false },
    { name: "Comune3", area: "Centro", disabled: true },
    { name: "Comune4", area: "Centro", disabled: false },
    { name: "Comune5", area: "Sud", disabled: false },
    { name: "Comune6", area: "Sud", disabled: false }
  ];

  $rootScope.nazioni = [
    { name: "Italia", area: "Nord", disabled: false },
    { name: "Germania", area: "Nord", disabled: false },
    { name: "Finlandia", area: "Centro", disabled: true },
    { name: "Inghilterra", area: "Centro", disabled: false },
    { name: "Francia", area: "Sud", disabled: false },
    { name: "Belgio", area: "Sud", disabled: false }
  ];

  $rootScope.cittadinanze = [
    { name: "Cittadinanza 1", area: "Nord", disabled: false },
    { name: "Cittadinanza 2", area: "Nord", disabled: false },
    { name: "Cittadinanza 3", area: "Centro", disabled: true },
    { name: "Cittadinanza 4", area: "Centro", disabled: false },
    { name: "Cittadinanza 5", area: "Sud", disabled: false },
    { name: "Cittadinanza 6", area: "Sud", disabled: false }
  ];

  $rootScope.frazioni = [
    { name: "Frazione 1", area: "Nord", disabled: false },
    { name: "Frazione 2", area: "Nord", disabled: false },
    { name: "Frazione 3", area: "Centro", disabled: true },
    { name: "Frazione 4", area: "Centro", disabled: false },
    { name: "Frazione 5", area: "Sud", disabled: false },
    { name: "Frazione 6", area: "Sud", disabled: false }
  ];

  $rootScope.vie = [
    { name: "Via tal dei tali 1", area: "Nord", disabled: false },
    { name: "Via tal dei tali 2", area: "Nord", disabled: false },
    { name: "Via tal dei tali 3", area: "Centro", disabled: true },
    { name: "Via tal dei tali 4", area: "Centro", disabled: false },
    { name: "Via tal dei tali 5", area: "Sud", disabled: false },
    { name: "Via tal dei tali 6", area: "Sud", disabled: false }
  ];

  $rootScope.località = [
    { name: "Località 1", area: "Nord", disabled: false },
    { name: "Località 2", area: "Nord", disabled: false },
    { name: "Località 3", area: "Centro", disabled: true },
    { name: "Località 4", area: "Centro", disabled: false },
    { name: "Località 5", area: "Sud", disabled: false },
    { name: "Località 6", area: "Sud", disabled: false }
  ];

  // impostiamo la provincia selezionata
  $rootScope.currentProvince = $rootScope.provinces[0];

  this.find = function() {
    this.elencoAssistiti = httpServices._ricercaAnagraficaRicerca.get(
      "mockUrl"
    );
  };

  // tutte le modali sono aperte in una variabile globale denominata $rootScope.modalInstance
  // per la chiusura è sufficiente invocare il comando modalInstance.close() che è un metodo
  // del plugin come specificato nella documentazione
  // https://github.com/angular-ui/bootstrap/tree/master/src/modal/docs

  this.findCodFis = function(cCodFis) {
    $rootScope.datiAssistito = httpServices._ricercaAnagraficaRicerca.findCodFis(
      "mockUrl",
      cCodFis
    );
  };

  $rootScope.creaNuovoIndirizzo = function() {
    $rootScope.modalInstance = $uibModal.open({
      templateUrl: "./../views/gestione_indirizzi.html",
      controller: "modalIndirizziCtrl",
      windowClass: "animated flipInY"
    });
  };

  $rootScope.creaNuovoReddito = function() {
    $rootScope.modalInstance = $uibModal.open({
      templateUrl: "./../views/gestione_redditi.html",
      controller: "modalRedditiCtrl",
      windowClass: "animated flipInY"
    });
    debugger;
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

function visualizzaAnagrafeCtrl($scope, $rootScope, runMode) {
  if (runMode == "NUOVOINSERIMENTO") {
    this.editDatiAssistito = false;
    this.inserimentoAnagrafe = true;
    $rootScope.datiAssistito = [];
  } else {
    this.editDatiAssistito = true;
    this.inserimentoAnagrafe = false;
  }

  this.editIndirizzo = function() {
    swal({
      title: "Edit Indirizzo!",
      text: "Qui ci sarà una maschera di edit!",
      icon: "success",
      button: "conferma!"
    });
  };

  this.deleteIndirizzo = function() {
    swal({
      title: "Sei sicuro?",
      text: "Una volta cancellato, non sarà possibile recuperarlo!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        swal("cancellato!", {
          icon: "success"
        });
      } else {
        swal("L' indirizzo è stato salvato!");
      }
    });
  };

  this.editReddito = function() {
    swal({
      title: "Edit Reddito!",
      text: "Qui ci sarà una maschera di edit!",
      icon: "success",
      button: "conferma!"
    });
  };

  this.editLiquidazione = function() {
    swal({
      title: "Edit Liquidazione!",
      text: "Qui ci sarà una maschera di edit!",
      icon: "success",
      button: "conferma!"
    });
  };

  $rootScope.modalSave = function(cTitolo, cSottoTitolo) {
    swal(cTitolo, cSottoTitolo, "success");
  };

  // function to submit the form after all validation has occurred
  $scope.submitForm = function(isValid) {
    // check to make sure the form is completely valid
    if (isValid) {
      // alert("la tua Form è valida");
    }
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

function modalIndirizziCtrl($scope, $rootScope, $http) {
  $scope.Tmp = {
    IndirizzoCodificato: {
      Nazione: "",
      Comune: "",
      Cap: "",
      Frazione: "",
      Via: ""
    },
    IndirizzoNonCodificato: {
      Localita: "",
      Cap: "",
      Maso: "",
      Via: "",
      IndirizzoCompleto: ""
    }
  };

  $scope.usaIndirizzo = function() {
    var xxx = $rootScope.datiAssistito.Indirizzi.find(item => {
      return item.UsaIndirizzo === "Si";
    });
    debugger;
    if (xxx) {
      $scope.Tmp.IndirizzoCodificato.Nazione = xxx.Nazione;
      $scope.Tmp.IndirizzoCodificato.Comune = xxx.Comune;
      $scope.Tmp.IndirizzoCodificato.Cap = xxx.Cap;
      $scope.Tmp.IndirizzoCodificato.Frazione = xxx.Frazione;
      $scope.Tmp.IndirizzoCodificato.Via = xxx.Via;

      $scope.Tmp.IndirizzoNonCodificato.Localita = xxx.Comune;
      $scope.Tmp.IndirizzoNonCodificato.Cap = xxx.Cap;
      $scope.Tmp.IndirizzoNonCodificato.Maso = "";
      $scope.Tmp.IndirizzoNonCodificato.Via = xxx.Via;
      $scope.Tmp.IndirizzoNonCodificato.IndirizzoCompleto = xxx.Via + " " + xxx.Comune + " " + xxx.Cap + " " + xxx.Nazione ;

      $scope.Tmp.NroCivico = xxx.Civico;

      swal("Indirizzo correttamente copiato! Per verificare osservare il Cap dell'indirizzo codificato e l'indirizzo completo del non codifcato. Non viene copiato correttamente perche solo i valori delle options sono ammessi nelle select! ");

    }
  };
}

function modalRedditiCtrl($scope, $rootScope, $http) {}

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
  .controller("modalIndirizziCtrl", modalIndirizziCtrl)
  .controller("modalRedditiCtrl", modalRedditiCtrl)
  .controller("domandeCtrl", domandeCtrl);
