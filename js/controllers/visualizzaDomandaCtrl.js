/**
 * visualizzaDomandaCtrl - controller
 * Controller per la gestione della visualizzazione delle Domande presentate dagli assistiti
 *
 */

function visualizzaDomandaCtrl($scope, $rootScope, $stateParams) {
  $scope.camillo =
    "<div>Stato: <label class='text-warning'>Revocata</label></div><div>Data revoca: <label>01/01/2006</label><br>Importo da recuperare: <label>549,00 €</label></div>";

  // gestione tabs
  $scope.tab = 1;
  $scope.setTab = function(newTab) {
    $scope.tab = newTab;
  };

  $scope.isSet = function(tabNum) {
    return $scope.tab === tabNum;
  };

  //----

  $scope.modificaDomanda = function() {
    debugger;
    $rootScope.domanda.OperazioneInCorso = "MODIFICA_DOMANDA";
    debugger;
    self = this;
    swal({
      title: "Desideri modificare la domanda?",
      // text:
      //   "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        self.$rootScope.$state.go("domande.domanda");
      } else {
      }
    });
  };
  sospendi = () => {
    debugger;
    $rootScope.domanda.StatoDomanda = "Sospesa";
  };
  $scope.sospendiDomanda = function() {
    swal({
      title: "Desideri sospendere la domanda?",
      // text:
      //   "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        $rootScope.domanda.StatoDomanda = "Sospesa";
        $scope.$apply();
        swal("La domanda è stata sospesa!", {
          icon: "success"
        });
      } else {
        swal("La domanda non è stata sospesa!");
      }
    });
  };

  $scope.revocaDomanda = function() {
    $rootScope.domanda.StatoDomanda = "Revocata";

    swal({
      title: "Desideri revocare la domanda?",
      // text:
      //   "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        $rootScope.domanda.StatoDomanda = "Revocata";
        $scope.$apply();
        swal("La domanda è stata revocata!", {
          icon: "success"
        });
      } else {
        swal("La domanda non è stata modificata!");
      }
    });
  };

  $scope.negaDomanda = function() {
    swal({
      title: "Desideri negare la domanda?",
      // text:
      //   "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        $rootScope.domanda.StatoDomanda = "Negata";
        $scope.$apply();
        swal("La domanda è stata negata!", {
          icon: "success"
        });
      } else {
        swal("La domanda non è stata modificata!");
      }
    });
  };
  $scope.inserisciNuovoVerbale = function() {
    swal("Inserimento verbale!", "...individuare procedura da chiamare!");
  };
  $scope.inserisciNuovaEvidenza = function() {
    swal("Inserimento evidenza!", "...individuare procedura da chiamare!");
  };

  $scope.creaSospensione = function() {
    swal("Creazione nuova sospensione!", "...individuare procedura da chiamare!");
  };
  $scope.cancellaDomanda = function() {
    swal({
      title: "Desideri cancellare la domanda?",
      text: "Ricorda: potrà sempre essere recuperata!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        $rootScope.domanda.StatoDomanda = "Cancellata";
        $scope.$apply();
        swal("La domanda è stata cancellata!", {
          icon: "success"
        });
      } else {
        swal("La domanda non è stata modificata!");
      }
    });
  };
}
