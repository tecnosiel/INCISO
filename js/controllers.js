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
  this.find = function() {
    self.elencoDomande = httpServices.domande.find("mockUrl");
  };
}

/**
 * anagrafeCtrl - controller
 * Controller Principale di gestione delle anagrafiche
 *
 */
function anagrafeCtrl(
  $scope,
  $rootScope,
  httpServices,
  $uibModal,
  $filter,
  NgTableParams,
  DTOptionsBuilder
) {
  self = this;

  // https://www.datatables.net/reference/option/
  $rootScope.dtOptions = DTOptionsBuilder.newOptions()
    .withOption("paging", true)
    .withOption("searching", true)
    .withOption("info", true)
    .withOption("lengthChange", false);

  this.find = function() {
    self.elencoAssistiti = httpServices._ricercaAnagraficaRicerca.get(
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
  httpServices,
  $uibModal,
  $filter,
  NgTableParams,
  runMode,
  DTOptionsBuilder
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
