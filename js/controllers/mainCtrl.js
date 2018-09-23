/**
 * MainCtrl - controller
 * Contiene dati globali usati in differenti view
 *
 */
function MainCtrl($scope, $rootScope, $translate, httpServices, $http) {
  /**
   * Anagrafe
   */
  $rootScope.datiAssistito = [];
  $rootScope.findCodFis = function(cCodFis) {
    $rootScope.datiAssistito = httpServices._ricercaAnagraficaRicerca.findCodFis(
      "mockUrl",
      cCodFis
    );
    debugger;
  };

  /**
   * Domande
   */
  $rootScope.domanda = {};
  $rootScope.inizializzaDomanda = function() {
    $rootScope.domanda.OperazioneInCorso = "NUOVA_DOMANDA";
  };

  /**
   * Lingua partenza applicativo
   */

  this.$onInit = function() {
    $translate.use("it");
  };
}
