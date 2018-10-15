/**
 * visualizzaDomandaCtrl - controller
 * Controller per la gestione della visualizzazione delle Domande presentate dagli assistiti
 *
 */

function visualizzaDomandaCtrl(
  $scope,
  $uibModal,
  DTOptionsBuilder,
  DTColumnDefBuilder,
  $compile
) {
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

  $scope.visualizzaLiquidazione = function($index) {
    alert("aaaaaaaaaaaaaaaaaaaa");
    // if ($index) {
    //   $scope.tmpRedditiAssistito = $scope.datiAssistito.Redditi[$index];
    // }else{
    //   $scope.tmpRedditiAssistito = null
    // }

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
      templateUrl: "./../views/modal_visualizza_liquidazione.html",
      controller: "modalVisualizzaLiquidazioneCtrl",
      size: "lg",
      scope: $scope,
      windowClass: this.randomMove()
    });
  };

  //--------- prestazioni start

  $scope.prestazioniLiquidate = [
    {
      Anno: "2014",
      TotalePrestazioniLiquidate: "15150.55"
    },
    {
      Anno: "2015",
      TotalePrestazioniLiquidate: "17999.55"
    },
    {
      Anno: "2016",
      TotalePrestazioniLiquidate: "13999.55"
    }
  ];

  $scope.dtOptionsTabPrestazioniLiquidate = DTOptionsBuilder.newOptions()
    .withOption("order", [1, "desc"])
    .withOption("pageLength", 5)
    .withOption("lengthChange", false);

  $scope.dtColumnTabPrestazioniLiquidate = [
    DTColumnDefBuilder.newColumnDef(0).notSortable()
  ];

  $scope.vm = {};
  $scope.vm.dtInstance = {};


  $scope.detailInfoPrestazioniLiquidate = function(anno, event) {
    var scope = $scope.$new(true);
    scope.anno = anno;
    debugger;
    var link = angular.element(event.currentTarget),
      icon = link.find(".fa"),
      tr = link.parent().parent(),
      table = $scope.vm.dtInstance.DataTable,
      row = table.row(tr);

    if (row.child.isShown()) {
      // This row is already open - close it
      icon.removeClass("fa-chevron-up").addClass("fa-chevron-down");
      row.child.hide();
      tr.removeClass("shown");
    } else {
      // Open this row
      icon.removeClass("fa-chevron-down").addClass("fa-chevron-up");
      row.child($compile("<div dettaglio-prestazioni ></div>")(scope)).show();
      tr.addClass("shown");
    }
  };

  //--------- prestazioni end

  $scope.modificaDomanda = function() {
    $scope.domanda.OperazioneInCorso = "MODIFICA_DOMANDA";
    swal({
      title: "Desideri modificare la domanda?",
      // text:
      //   "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(function(willDelete) {
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
    var self = this;
    swal({
      title: "Desideri sospendere la domanda?",
      // text:
      //   "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(function(willDelete) {
      if (willDelete) {
        self.showModal({
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

    var self = this;

    swal({
      title: "Desideri revocare la domanda?",
      // text:
      //   "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(function(willDelete) {
      if (willDelete) {
        self.showModal({
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

    var self = this;

    swal({
      title: "Desideri negare la domanda?",
      // text:
      //   "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(function(willDelete) {
      if (willDelete) {
        self.showModal({
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
    }).then(function(willDelete) {
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
