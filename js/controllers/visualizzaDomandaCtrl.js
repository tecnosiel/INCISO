/**
 * visualizzaDomandaCtrl - controller
 * Controller per la gestione della visualizzazione delle Domande presentate dagli assistiti
 *
 */

function visualizzaDomandaCtrl($scope, $uibModal) {
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
    $scope.domanda.OperazioneInCorso = "MODIFICA_DOMANDA";
    swal({
      title: "Desideri modificare la domanda?",
      // text:
      //   "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        $scope.$state.go("domande.domanda");
      } else {
      }
    });
  };

  self = this;

  $scope.showModal = function(win) {

    this.randomMove = function() {
      let risultato = null;
      // clsPopup
      switch (Math.round(3 * Math.random())) {
        case 0:
          risultato = "animated fadeInDownBig";
          break;
        case 1:
          risultato = "animated flipInX";
          break;
        case 2:
          risultato = "animated flipInY";
          break;
        case 3:
          risultato = "animated bounceInLeft";
          break;
      }
      return risultato;
    };

    // http://www.marcorpsa.com/ee/t1891.html

    self.modalInstance = $uibModal.open({
      templateUrl: win.template,
      controller: win.controller,
      size: win.size,
      scope: $scope,
      windowClass: this.randomMove()
    });
  };

  // ------------------------
  $scope.sospendiDomanda = function() {

    $scope.domanda.StatoDomanda = "Sospesa";

    swal({
      title: "Desideri sospendere la domanda?",
      // text:
      //   "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        this.showModal({
          template: "./../views/modal_sospensione_domanda.html",
          controller: "modalSospensioneDomandaCtrl",
          size: "lg"
        });
        // $scope.domanda.StatoDomanda = "Sospesa";
        // $scope.$apply();
        // swal("La domanda è stata sospesa!", {
        //   icon: "success"
        // });
      } else {
        swal("La domanda non è stata sospesa!");
      }
    });
  };
  // ------------------------
  $scope.revocaDomanda = function(cType) {

    $scope.Type = cType;

    $scope.domanda.StatoDomanda = "Revocata";

    swal({
      title: "Desideri revocare la domanda?",
      // text:
      //   "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        this.showModal({
          template: "./../views/modal_revoca_domanda.html",
          controller: "modalRevocaDomandaCtrl",
          size: "lg"
        });
        // $scope.domanda.StatoDomanda = "Revocata";
        // $scope.$apply();
        // swal("La domanda è stata revocata!", {
        //   icon: "success"
        // });
      } else {
        swal("La domanda non è stata revocata!");
      }
    });
  };

  $scope.negaDomanda = function(cType) {

    $scope.Type = cType;

    $scope.domanda.StatoDomanda = "Negata";

    swal({
      title: "Desideri negare la domanda?",
      // text:
      //   "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
  
        this.showModal({
          template: "./../views/modal_negazione_domanda.html",
          controller: "modalNegazioneDomandaCtrl",
          size: "lg"
        });
  
        // $scope.domanda.StatoDomanda = "Negata";
        // $scope.$apply();
        // swal("La domanda è stata negata!", {
        //   icon: "success"
        // });
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
    swal(
      "Creazione nuova sospensione!",
      "...individuare procedura da chiamare!"
    );
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
        $scope.domanda.StatoDomanda = "Cancellata";
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

/**
 * Collega il controller al modulo inciso
 **/
angular
  .module("inciso")
  .controller("visualizzaDomandaCtrl", visualizzaDomandaCtrl);
