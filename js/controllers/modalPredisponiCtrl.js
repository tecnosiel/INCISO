/**
 * modalPredisponiCtrl - controller
 * Controller per la finestra modale di modalPredisponi
 *
 */
function modalPredisponiCtrl($scope, $state, $stateParams) {
  $scope.modalSave = function(cTitolo, cSottoTitolo) {
    swal(cTitolo, cSottoTitolo, "success");
  };

  $scope.camillo = function() {
    alert("aaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  };

  $scope.modalClose = function() {
    self.modalInstance.close();
  };
}

/**
 * Collega il controller al modulo inciso
 **/
angular.module("inciso").controller("modalPredisponiCtrl", modalPredisponiCtrl);
