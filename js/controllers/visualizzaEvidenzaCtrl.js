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
  $stateParams
) {
  // https://stackoverflow.com/questions/25647454/how-to-pass-parameters-using-ui-sref-in-ui-router-to-controller/25647714

  if (runMode == "NUOVOINSERIMENTO") {
    $scope.editEvidenza = false;
    $scope.inserimentoEvidenza = true;
    $scope.datiAssistito = [];
    $scope.evidenza = null;
  } else {
    $scope.editEvidenza = true;
    $scope.inserimentoEvidenza = false;
    $scope.datiAssistito = $stateParams.datiAssistito;
    $scope.evidenza = $stateParams.evidenza;
  }

  $scope.indietro = function() {
    $state.go("evidenza.visualizza_anagrafica", {
      datiAssistito: $scope.datiAssistito,
      visShowPulsanti: true
    });
  };
  $scope.cancellaEvidenza = function() {
    swal({
      title: "Desideri cancellare l'evidenza?",
      text: "Ricorda: potrà sempre essere recuperata!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(function(willDelete) {
      if (willDelete) {
        // $scope.domanda.StatoDomanda = "Cancellata";
        // $scope.$apply();
        swal("L' evidenza è stata cancellata!", {
          icon: "success"
        }).then(function() {
          $state.go("evidenza.visualizza_evidenza", {
            datiAssistito: $scope.datiAssistito
          });
        });
      } else {
        swal("L' evidenza non è stata modificata!");
      }
    });
  };

  $scope.editEvidenzaToggle = function() {
    $scope.editEvidenza = !$scope.editEvidenza;
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

  // $scope.findDomande = function() {
  //   $scope.elencoDomande = httpServices.domande.find("mockUrl");
  // };

  $scope.visualizzaDomanda = function() {
    $scope.elencoDomande = httpServices.domande.find("mockUrl");
    debugger;
    $state.go("domande.visualizza_domanda", {
      datiAssistito: $scope.datiAssistito,
      
      domanda:$scope.elencoDomande[1].DomandePresentate[1]
    });
  };
}

/**
 * Collega il controller al modulo inciso
 **/
angular
  .module("inciso")
  .controller("visualizzaEvidenzaCtrl", visualizzaEvidenzaCtrl);
