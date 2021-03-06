/**
 * visualizzaPosizioneCtrl - controller
 * Controller per la gestione della singola posizione
 *
 */
// https://www.codelord.net/2015/06/02/angularjs-pitfalls-using-ui-routers-resolve/

function visualizzaPosizioneCtrl(
  $scope,
  $uibModal,
  runMode,
  $state,
  httpServices,
  domandeServices,
  $stateParams
) {
  // https://stackoverflow.com/questions/25647454/how-to-pass-parameters-using-ui-sref-in-ui-router-to-controller/25647714

  // $scope.state = $state.current;
  // $scope.params = $stateParams;

  if (runMode == "NUOVOINSERIMENTO") {
    $scope.visDatiAssistito = false;
    $scope.inserimentoPosizione = true;
    $scope.datiAssistito = [];
  } else {
    $scope.visDatiAssistito = true;
    $scope.inserimentoPosizione = false;
    $scope.datiAssistito = $stateParams.datiAssistito;
  }

  $scope.indietro = function() {
    $state.go("posizione.visualizza_anagrafica", {
      datiAssistito: $scope.datiAssistito,
      visShowPulsanti: true
    });
  };
  $scope.cancellaPosizione = function() {
    swal({
      title: "Desideri cancellare la posizione?",
      text: "Ricorda: potrà sempre essere recuperata!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(function(willDelete) {
      if (willDelete) {
        // $scope.domanda.StatoDomanda = "Cancellata";
        // $scope.$apply();
        swal("La posizione è stata cancellata!", {
          icon: "success"
        }).then(function() {
          $state.go("posizione.visualizza_anagrafica", {
            datiAssistito: $scope.datiAssistito
          });
        });
      } else {
        swal("La posizione non è stata modificata!");
      }
    });
  };

  $scope.cancellaDomanda = function(nItem) {
    swal({
      title: "Desideri cancellare la domanda n.ro " + nItem + " ?",
      text: "Ricorda: potrà sempre essere recuperata!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(function(willDelete) {
      if (willDelete) {
        // $scope.domanda.StatoDomanda = "Cancellata";
        // $scope.$apply();
        swal("La domanda è stata cancellata!", {
          icon: "success"
        }).then(function() {
          // $state.go("posizione.visualizza_anagrafica", {
          //   datiAssistito: $scope.datiAssistito
          // });
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

  $scope.visualizzaDomanda = function(nDomanda) {
    domandeServices.find(this.info, result => {
      $scope.elencoDomande = result;
      
      $state.go("domande.visualizza_domanda", {
        datiAssistito: $scope.datiAssistito,
        domanda: $scope.elencoDomande[1].DomandePresentate[nDomanda]
      });
    });
  };
}

/**
 * Collega il controller al modulo inciso
 **/
angular
  .module("inciso")
  .controller("visualizzaPosizioneCtrl", visualizzaPosizioneCtrl);
