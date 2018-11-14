/**
 * LoginCtrl - controller
 * Contiene dati globali usati in differenti view
 *
 */
function loginCtrl($scope, $state, authenticationService) {
  /**
   * Lingua partenza applicativo 
   */

  this.$onInit = function() {
    // $translate.use("it");
    $scope.username = "";
    $scope.password = "";
  };

  $scope.onFormLoginSubmit = function() {
    if ($scope.loginForm.$valid) {
      authenticationService.login(
        $scope.username,
        $scope.password,
        CallBackVerificaToken
      );
    }
  };

  function CallBackVerificaToken(onOff) {
    debugger;
    if (onOff) {
      $state.go("home");
    } else {
      alert("La risposta del Login ha un token errato");
    }
  }
}

/**
 * Collega il controller al modulo inciso
 **/
angular.module("inciso").controller("loginCtrl", loginCtrl);
