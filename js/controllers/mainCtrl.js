/**
 * MainCtrl - controller
 * Contiene dati globali usati in differenti view
 *
 */
function MainCtrl($scope, $rootScope, $translate, httpServices, $http) {

  /**
   * Lingua partenza applicativo
   */

  this.$onInit = function() {
    $translate.use("it");
  };
}

/**
 * Collega il controller al modulo inciso
 **/
angular
  .module("inciso")
  .controller("MainCtrl", MainCtrl);
