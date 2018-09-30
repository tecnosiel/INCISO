/**
 * modalIndirizziCtrl - controller
 * Controller per la finestra modale di gestioneindirizzi
 *
 */
function modalGestioneVerbaleCtrl($scope, $uibModalInstance, item) {
  alert("qui va gestito il verbale .......");

  // this.modalSave = function(cTitolo, cSottoTitolo) {
  //   swal(cTitolo, cSottoTitolo, "success");
  // };

  // this.modalClose = function() {
  //   alert("1111111111111111111");
  //   debugger;
  //   self.modalInstance.close();
  //   self.$uibModalInstance.close();
  // };


 
}

/**
 * Collega il controller al modulo inciso
 **/
angular
  .module("inciso")
  .controller("modalGestioneVerbaleCtrl", modalGestioneVerbaleCtrl);
