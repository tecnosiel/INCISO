/**
 * visualizzaAnagrafeCtrl - controller
 * Controller per la gestione dell' anagrafica
 *
 */
// https://www.codelord.net/2015/06/02/angularjs-pitfalls-using-ui-routers-resolve/

function visualizzaAnagrafeCtrl($scope, $uibModal, runMode) {
  if (runMode == "NUOVOINSERIMENTO") {
    $scope.visDatiAssistito = false;
    $scope.inserimentoAnagrafe = true;
    $scope.datiAssistito = [];
  } else {
    $scope.visDatiAssistito = true;
    $scope.inserimentoAnagrafe = false;
  }

  $scope.visDatiAssistitoToggle = function() {
    $scope.visDatiAssistito = !$scope.visDatiAssistito;
  };

  // serve per le modali
  self = this;

  $scope.creaNuovoIndirizzo = function($index) {

    if ($scope.datiAssistito.Indirizzi) {
      if ($index > -1) {
        $scope.datiAssistito.Indirizzi[$index].UsaIndirizzo = "Si";
      } else {
        $scope.datiAssistito.Indirizzi.forEach(function(element) {
          element.UsaIndirizzo = "No";
        });
      }

      // nella modale gli Indirizzi sono in Indirizzi
      $scope.Indirizzi = Object.assign({}, $scope.datiAssistito.Indirizzi);
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

  $scope.creaNuovoReddito = function($index) {
    $scope.$index = $index;
    self.modalInstance = $uibModal.open({
      templateUrl: "./../views/gestione_redditi.html",
      controller: "modalRedditiCtrl",
      size: "lg",
      scope: $scope,
      windowClass: "animated flipInY"
    });
  };

  $scope.editIndirizzo = function() {
    swal({
      title: "Edit Indirizzo!",
      text: "Qui ci sarà una maschera di edit!",
      icon: "success",
      button: "conferma!"
    });
  };

  $scope.salvaModulo = function() {
    swal({
      title: "Salvataggio Dati!",
      text: "I dati saranno controllati e salvati!",
      icon: "success",
      button: "conferma!"
    });
  };

  $scope.deleteIndirizzo = function() {
    swal({
      title: "Sei sicuro?",
      text: "Una volta cancellato, non sarà possibile recuperarlo!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        swal("cancellato!", {
          icon: "success"
        });
      } else {
        swal("L' indirizzo è stato salvato!");
      }
    });
  };

  $scope.editReddito = function() {
    swal({
      title: "Edit Reddito!",
      text: "Qui ci sarà una maschera di edit!",
      icon: "success",
      button: "conferma!"
    });
  };

  $scope.editLiquidazione = function() {
    swal({
      title: "Edit Liquidazione!",
      text: "Qui ci sarà una maschera di edit!",
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
  .controller("visualizzaAnagrafeCtrl", visualizzaAnagrafeCtrl);
