/**
 * visualizzaAnagrafeCtrl - controller
 * Controller per la gestione dell' anagrafica
 *
 */
// https://www.codelord.net/2015/06/02/angularjs-pitfalls-using-ui-routers-resolve/

function visualizzaAssociazioneCtrl($scope, $rootScope, runMode) {

  if (runMode == "NUOVOINSERIMENTO") {
    alert("NUOVO INSERIMENTO");
    this.visDatiAssociazione = false;
    this.datiAssociazione = {};
  } else {
    this.visDatiAssociazione = true;
  }

  this.find = function() {
    this.elencoAssociazioni = httpServices.associazioni.find("mockUrl");
  };

  this.findCodFis = function(cCodFis) {
    this.datiAssociazione = httpServices.associazioni.findCodFis(
      "mockUrl",
      cCodFis
    );
    debugger;
  };

  this.editIndirizzo = function() {
    swal({
      title: "Edit Indirizzo!",
      text: "Qui ci sarà una maschera di edit!",
      icon: "success",
      button: "conferma!"
    });
  };

  this.deleteIndirizzo = function() {
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

  this.editReddito = function() {
    swal({
      title: "Edit Reddito!",
      text: "Qui ci sarà una maschera di edit!",
      icon: "success",
      button: "conferma!"
    });
  };

  this.editLiquidazione = function() {
    swal({
      title: "Edit Liquidazione!",
      text: "Qui ci sarà una maschera di edit!",
      icon: "success",
      button: "conferma!"
    });
  };

  $rootScope.modalSave = function(cTitolo, cSottoTitolo) {
    swal(cTitolo, cSottoTitolo, "success");
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
