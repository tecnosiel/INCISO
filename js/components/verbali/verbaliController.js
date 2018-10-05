/**
 * verbaliController - controller
 * Controller del componente
 *
 */

function verbaliController($scope, verbaliServices, $uibModal) {
  // per prima cosa legge i verbali
  this.elencoVerbali = verbaliServices.verbali.find("mockUrl");

  // serve per le modali
  self = this;

  this.inserisciVerbale = function($index) {
    if ($index == -1) {
      $scope.verbale = {
        // NumeroProtocollo: "12345",
        // DataProtocollo: "12/34/5678",
        // PercentualeDiInvalidita: "66%",
        // IndennitaDiAccompagnamento: "No",
        // PatologiaUditiva: "No",
        // RiduzioneDelVisus: "No",
        // NoteVerbale: "Io sono la nota a verbale",
        // DataDecorrenzaPagamento: "11/11/1234"
      };
    } else {
      $scope.verbale = this.elencoVerbali[$index];
    }

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
      templateUrl: "/js/components/verbali/modals/modalGestioneVerbale.html",
      controller: "modalGestioneVerbaleCtrl",
      size: "lg",
      scope: $scope,
      resolve: {
        item: function() {
          return this.modalInstance;
        }
      },
      // scope: $scope,
      windowClass: this.randomMove()
    });
  };

  this.cancellaVerbale = function($index) {
    swal({
      title: "Cancellare il verbale " + $index + "?",
      text: "",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        // $scope.domanda.StatoDomanda = "Cancellata";
        // $scope.$apply();
        swal("Il verbale è stato cancellato!", {
          icon: "success"
        }).then(() => {
          // $state.go("posizione.visualizza_anagrafica", {
          //   datiAssistito: $scope.datiAssistito
          // });
        });
      } else {
        swal("Il verbale non è stato modificato!");
      }
    });
  };
}
