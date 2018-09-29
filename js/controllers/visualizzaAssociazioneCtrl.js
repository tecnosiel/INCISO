/**
 * visualizzaAnagrafeCtrl - controller
 * Controller per la gestione dell' anagrafica
 *
 */
// https://www.codelord.net/2015/06/02/angularjs-pitfalls-using-ui-routers-resolve/

function visualizzaAssociazioneCtrl($scope, $uibModal, runMode) {
  
  if (runMode == "NUOVOINSERIMENTO") {
    $scope.visDatiAssociazione = false;
    $scope.inserimentoAssociazione = true;
    $scope.datiAssociazione = {};
  } else {
    $scope.inserimentoAssociazione = false;
    $scope.visDatiAssociazione = true;
  }

  $scope.creaNuovoIndirizzo = function($index) {
  
    $scope.Indirizzi = null;
  
    if ($scope.datiAssociazione && $scope.datiAssociazione.Indirizzi) {
      if ($index > -1) {
        $scope.datiAssociazione.Indirizzi[$index].UsaIndirizzo = "Si";
      } else {
        $scope.datiAssociazione.Indirizzi.forEach(function(element) {
          element.UsaIndirizzo = "No";
        });
      }

      // nella modale gli Indirizzi sono in Indirizzi
      $scope.Indirizzi = Object.assign({}, $scope.datiAssociazione.Indirizzi);
    }
    // http://www.marcorpsa.com/ee/t1891.html
    self.modalInstance = $uibModal.open({
      templateUrl: "./../views/gestione_indirizzi.html",
      controller: "modalIndirizziCtrl",
      size: "lg",
      scope: $scope,
      windowClass: "animated flipInY"
    });
  };

  $scope.visDatiAssociazioneToggle = function() {
    $scope.visDatiAssociazione = !$scope.visDatiAssociazione;
  };

  // serve per le modali
  self = this;

  $scope.salvaModulo = function() {
    swal({
      title: "Salvataggio Dati!",
      text: "I dati saranno controllati e salvati!",
      icon: "success",
      button: "conferma!"
    });
  };

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
  .controller("visualizzaAssociazioneCtrl", visualizzaAssociazioneCtrl);
