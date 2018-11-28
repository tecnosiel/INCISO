/**
 * visualizzaEvidenzaCtrl - controller
 * Controller per la gestione della singola Evidenza
 *
 */
// https://www.codelord.net/2015/06/02/angularjs-pitfalls-using-ui-routers-resolve/

function visualizzaEvidenzaCtrl(
  $scope,
  $uibModal,
  runMode,
  $state,
  httpServices,
  domandeServices,
  $stateParams
) {

  // https://stackoverflow.com/questions/25647454/how-to-pass-parameters-using-ui-sref-in-ui-router-to-controller/25647714

  if (runMode == "NUOVOINSERIMENTO") {
    $scope.editEvidenza = true;
    $scope.inserimentoEvidenza = true;
    $scope.datiAssistito = [];
    $scope.evidenza = null;
  } else {
    $scope.editEvidenza = false;
    $scope.inserimentoEvidenza = false;
    $scope.datiAssistito = $stateParams.datiAssistito;
    $scope.evidenza = $stateParams.evidenza;
  }

  $scope.editEvidenzaToggle = function () {
    $scope.editEvidenza = !$scope.editEvidenza;
  };

  // serve per le modali
  $scope.self = this;


  // function to submit the form after all validation has occurred
  $scope.submitForm = function (isValid) {
    // check to make sure the form is completely valid
    if (isValid) {
      // alert("la tua Form è valida");
    }
  };


}

/**
 * Collega il controller al modulo inciso
 **/
angular
  .module("inciso")
  .controller("visualizzaEvidenzaCtrl", visualizzaEvidenzaCtrl);