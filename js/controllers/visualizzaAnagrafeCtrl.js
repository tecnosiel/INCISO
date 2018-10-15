/**
 * visualizzaAnagrafeCtrl - controller
 * Controller per la gestione dell' anagrafica
 *
 */
// https://www.codelord.net/2015/06/02/angularjs-pitfalls-using-ui-routers-resolve/

function visualizzaAnagrafeCtrl(
  $scope,
  $uibModal,
  runMode,
  $state,
  $stateParams
) {
  // $scope.state = $state.current;
  // $scope.params = $stateParams;

  if (runMode == "NUOVOINSERIMENTO") {
    $scope.visDatiAssistito = false;
    $scope.inserimentoAnagrafe = true;
    $scope.datiAssistito = $stateParams.datiAssistito;
    // $scope.datiAssistito = [];
  } else {
    $scope.visDatiAssistito = true;
    $scope.inserimentoAnagrafe = false;
    $scope.datiAssistito = $stateParams.datiAssistito;
    $scope.visShowPulsanti = $stateParams.visShowPulsanti;
  }
  if ($state.current.name == "anagrafica.visualizza_anagrafica") {
    $scope.visShowPulsanti = true;
  }

  $scope.visDatiAssistitoToggle = function() {
    $scope.visDatiAssistito = !$scope.visDatiAssistito;
  };

  // serve per le modali
  self = this;

  $scope.creaNuovoIndirizzo = function($index) {
    $scope.Indirizzi = null;
    if ($scope.datiAssistito && $scope.datiAssistito.Indirizzi) {
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

    // Math.random() genera un numero casuale compreso fra 0 e 1,
    // quindi è sufficiente moltiplicarlo per il massimo numero che si vuole ottenere
    // e poi arrotondarne il risultato.
    this.randomMove = function() {
      let risultato = null;

      // clsPopup
      switch (Math.round(5 * Math.random())) {
        case 0:
          risultato = "clsPopup";
          break;
        case 1:
          risultato = "animated flipInX";
          break;
        case 2:
          risultato = "animated flipInY";
          break;
        case 3:
          risultato = "animated fadeInLeftBig";
          break;
        case 4:
          risultato = "animated fadeInRightBig";
          break;
        case 5:
          risultato = "animated rotateIn";
          break;
      }
      return risultato;
    };

    // http://www.marcorpsa.com/ee/t1891.html
    self.modalInstance = $uibModal.open({
      templateUrl: "./../views/modal_gestione_indirizzi.html",
      controller: "modalIndirizziCtrl",
      size: "lg",
      scope: $scope,
      windowClass: this.randomMove()
    });
  };

  $scope.creaNuovoReddito = function($index) {
    
    if ($index) {
      $scope.tmpRedditiAssistito = $scope.datiAssistito.Redditi[$index];
    }else{
      $scope.tmpRedditiAssistito = null
    }

    // Math.random() genera un numero casuale compreso fra 0 e 1,
    // quindi è sufficiente moltiplicarlo per il massimo numero che si vuole ottenere
    // e poi arrotondarne il risultato.
    this.randomMove = function() {
      let risultato = null;

      // clsPopup
      switch (Math.round(5 * Math.random())) {
        case 0:
          risultato = "clsPopup";
          break;
        case 1:
          risultato = "animated flipInX";
          break;
        case 2:
          risultato = "animated flipInY";
          break;
        case 3:
          risultato = "animated fadeInLeftBig";
          break;
        case 4:
          risultato = "animated fadeInRightBig";
          break;
        case 5:
          risultato = "animated rotateIn";
          break;
      }
      return risultato;
    };

    self.modalInstance = $uibModal.open({
      templateUrl: "./../views/modal_gestione_redditi.html",
      controller: "modalRedditiCtrl",
      size: "lg",
      scope: $scope,
      windowClass: this.randomMove()
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

  $scope.cancellaIndirizzo = function() {
    swal({
      title: "Sei sicuro?",
      text: "Una volta cancellato, non sarà possibile recuperarlo!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(function(willDelete) {
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

  $scope.permessi = [
    { nome: "Permesso tipo 1341355", code: "AF" },
    { nome: "Permesso tipo 22434452322", code: "AX" },
    { nome: "Permesso tipo 3333433", code: "AL" },
    { nome: "Permesso tipo 4444", code: "DZ" },
    { nome: "Permesso tipo 12341", code: "AS" },
    { nome: "Permesso tipo 23432312", code: "AD" },
    { nome: "Permesso tipo 23423", code: "AO" },
    { nome: "Permesso tipo 3242333", code: "AI" },
    { nome: "Permesso tipo 3242323", code: "AQ" },
    { nome: "Permesso tipo 3333333", code: "AG" },
    { nome: "Permesso tipo 234234213", code: "AR" }
  ];

  $scope.cittadinanze = [
    { nome: "Cittadinanza tipo 1341355", code: "AF" },
    { nome: "Cittadinanza tipo 22434452322", code: "AX" },
    { nome: "Cittadinanza tipo 3333433", code: "AL" },
    { nome: "Cittadinanza tipo 4444", code: "DZ" },
    { nome: "Cittadinanza tipo 12341", code: "AS" },
    { nome: "Cittadinanza tipo 23432312", code: "AD" },
    { nome: "Cittadinanza tipo 23423", code: "AO" },
    { nome: "Cittadinanza tipo 3242333", code: "AI" },
    { nome: "Cittadinanza tipo 3242323", code: "AQ" },
    { nome: "Cittadinanza tipo 3333333", code: "AG" },
    { nome: "Cittadinanza tipo 234234213", code: "AR" }
  ];

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
