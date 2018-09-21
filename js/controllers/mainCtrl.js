/**
 * MainCtrl - controller
 * Contiene dati globali usati in differenti view
 *
 */
function MainCtrl($scope, $rootScope, $translate, httpServices, $http) {
  /**
   * language - Setta la lingua di partenza ad Italiano. In caso contrario verrebbe settata ad
   * Inglese
   */
  $rootScope.datiAssistito = [];

  $rootScope.findCodFis = function(cCodFis) {
    $rootScope.datiAssistito = httpServices._ricercaAnagraficaRicerca.findCodFis(
      "mockUrl",
      cCodFis
    );
    debugger;
  };

  this.$onInit = function() {
    $translate.use("it");
  };
}
