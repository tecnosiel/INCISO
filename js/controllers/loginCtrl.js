/**
 * LoginCtrl - controller
 * Contiene dati globali usati in differenti view
 *
 */
function loginCtrl(
  $scope,
  $state,
  httpServices,
) {
  /**
   * Lingua partenza applicativo
   */

  this.$onInit = function() {
    // $translate.use("it");
  };

  
  $scope.login = function() {

    if (($scope.password.toUpperCase() === "12345") && ($scope.password.toUpperCase() === "12345")){
      $state.go("home");
    }

  };
  
}

/**
 * Collega il controller al modulo inciso
 **/
angular.module("inciso").controller("loginCtrl", loginCtrl);
