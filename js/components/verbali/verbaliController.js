/**
 * verbaliController - controller
 * Controller del componente
 *
 */

function verbaliController($scope, verbaliServices, $uibModal) {
  debugger;
  // per prima cosa legge i verbali
  this.elencoVerbali = verbaliServices.verbali.find("mockUrl");
  this.name = "Word";
  alert("here");

  // serve per le modali
  self = this;

  this.inserisciNuovoVerbale = function($index) {
    alert("inserisci nuovo verbale " + $index);

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

    this.modalSave = function(cTitolo, cSottoTitolo) {
      swal(cTitolo, cSottoTitolo, "success");
    };
  
    this.modalClose = function() {
      alert("1111111111111111111");
      debugger;
      self.modalInstance.close();
      self.$uibModalInstance.close();
    };
  

  };
}
