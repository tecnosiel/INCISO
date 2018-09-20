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
