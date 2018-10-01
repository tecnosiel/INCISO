/**
 * verbaleController - controller
 * Controller del componente
 *
 */

function verbaleController($scope, $timeout) {
  this.modalSave = function(cTitolo, cSottoTitolo) {
    swal(cTitolo, cSottoTitolo, "success");
  };

  this.modalClose = function() {
    self.modalInstance.close();
    self.$uibModalInstance.close();
  };

  this.address = {
    street: "ssss",
    city: "ssss"
  };
}
