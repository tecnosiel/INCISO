/**
 * modalPensioneCtrl - controller
 * Controller per la finestra modale di gestionePensione
 *
 */
function modalPensioneCtrl($scope, $rootScope, $http) {
  $scope.modalSave = function(cTitolo, cSottoTitolo) {
    swal(cTitolo, cSottoTitolo, "success");
  };

  $scope.modalClose = function() {
    self.modalInstance.close();
  };

  $scope.Tmp = {
    Tipo: null,
    TipoAssistenza: null,
    DataFineCompatibilita: null,
    Note: null
  };
  $scope.tipoPensioni = [
    {
      descrizione: "Pensione 1 - Invalidi Civili",
      code: "AF"
    },
    {
      descrizione: "Pensione 2 - Invalidi di Guerra",
      code: "AF"
    },
    { descrizione: "Pensione 3 - kdfàalòkàalkàò", code: "AF" },
    { descrizione: "Pensione 4", code: "AF" },
  ];
}

/**
 * Collega il controller al modulo inciso
 **/
angular.module("inciso").controller("modalPensioneCtrl", modalPensioneCtrl);
