/**
 * INCISO - Gestione invalidi civili, ciechi civili e sordi
 *
 * Main controller.js file
 * Definisce tutti i controllers usati in Inciso divisi per view
 *
 *
 * Functions (controllers)
 *  - MainCtrl
 *  - _ricercaAnagraficaCtrl
 *  - modalGestioneIndirizziCtrl
 *  - modalGestioneRedditiCtrl
 *  - translateCtrl
 */

/**
 * _ricerca_anagrafica - controller
 * Contiene i dati usati nella view _ricerca_anagrafica
 *
 */
function _ricercaAnagraficaCtrl(
  $scope,
  $rootScope,
  httpServices,
  $uibModal,
  $filter,
  NgTableParams
) {
  var self = this;
  self.tableParams = new NgTableParams(
    {
      count: 5,
      // initial sort order
      sorting: { cognome: "desc" }
    },
    {
      counts: [5, 10, 20],
      dataset: httpServices._ricercaAnagraficaRicerca.get("mockUrl")
    }
  );

  this.find = function() {
    self.tableParams.data = httpServices._ricercaAnagraficaRicerca.get(
      "mockUrl"
    );

    debugger;
  };

  this.findCodFis = function(cCodFis) {
    $rootScope.datiAssistito = httpServices._ricercaAnagraficaRicerca.findCodFis(
      "mockUrl",
      cCodFis
    );
    debugger;
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

  debugger;
}

/**
 * visualizzaAnagraficaCtrl - controller
 * Controller per la gestione dell' anagrafica
 *
 */
// https://www.codelord.net/2015/06/02/angularjs-pitfalls-using-ui-routers-resolve/

function visualizzaAnagraficaCtrl(
  $scope,
  $rootScope,
  httpServices,
  $uibModal,
  $filter,
  NgTableParams,
  runMode
) {
  if (runMode == "NUOVOINSERIMENTO") {
    this.editDatiAssistito = false;
    $rootScope.inserimentoAnagrafe = true;
  }else{
    this.editDatiAssistito = true;
    $rootScope.inserimentoAnagrafe = false;

  }
  debugger;
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
  .controller("visualizzaAnagraficaCtrl", visualizzaAnagraficaCtrl)
  .controller("_ricercaAnagraficaCtrl", _ricercaAnagraficaCtrl);
