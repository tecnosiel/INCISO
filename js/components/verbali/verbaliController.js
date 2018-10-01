/**
 * verbaliController - controller
 * Controller del componente
 *
 */

function verbaliController($scope, verbaliServices, $uibModal) {
  // per prima cosa legge i verbali
  this.elencoVerbali = verbaliServices.verbali.find("mockUrl");

  debugger;

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
      windowClass: "animated flipInY"
    });

 
  };

  this.cancellaVerbale = function($index) {
    alert("cancella verbale " + $index);
  };
}
