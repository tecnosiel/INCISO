/**
 * visualizzaPosizioneCtrl - controller
 * Controller per la gestione della singola posizione
 *
 */
// https://www.codelord.net/2015/06/02/angularjs-pitfalls-using-ui-routers-resolve/

function visualizzaPosizioneCtrl($scope, $uibModal, runMode, $state, $stateParams) {
  
  // https://stackoverflow.com/questions/25647454/how-to-pass-parameters-using-ui-sref-in-ui-router-to-controller/25647714

  $scope.state = $state.current
  $scope.params = $stateParams; 

  if (runMode == "NUOVOINSERIMENTO") {
    $scope.visDatiAssistito = false;
    $scope.inserimentoPosizione = true;
    $scope.datiAssistito = [];
  } else {
    $scope.visDatiAssistito = true;
    $scope.inserimentoPosizione = false;
    $scope.datiAssistito = $stateParams.datiAssistito;
  }
  

  $scope.cancellaPosizione = function() {
    swal({
      title: "Desideri cancellare la posizione?",
      text: "Ricorda: potrà sempre essere recuperata!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        $scope.domanda.StatoDomanda = "Cancellata";
        $scope.$apply();
        swal("La posizione è stata cancellata!", {
          icon: "success"
        });
      } else {
        swal("La posizione non è stata modificata!");
      }
    });
  };

  $scope.visDatiAssistitoToggle = function() {
    $scope.visDatiAssistito = !$scope.visDatiAssistito;
  };

  // serve per le modali
  self = this;

  // function to submit the form after all validation has occurred
  $scope.submitForm = function(isValid) {
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
  .controller("visualizzaPosizioneCtrl", visualizzaPosizioneCtrl);
