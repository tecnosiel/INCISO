/**
 * LoginCtrl - controller
 * Contiene dati globali usati in differenti view
 *
 */
function loginCtrl($scope, $state, loginServices) {
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
      loginServices.login(
        $scope.username,
        $scope.password,
        CallBackVerificaToken
      );
    }
  };

  function CallBackVerificaToken(onOff) {
    if (onOff) {
      $state.go("home");
    } else {
      swal("Errore", "Utente non riconosciuto.", "error");
    }
  }
}

/**
 * Collega il controller al modulo inciso
 **/
angular.module("inciso").controller("loginCtrl", loginCtrl);
