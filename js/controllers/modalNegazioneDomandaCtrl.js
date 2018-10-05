/**
 * modalNegazioneDomandaCtrl - controller
 * Controller per la finestra modale di Negazione domade
 *
 */
function modalNegazioneDomandaCtrl($scope) {

  $scope.modalSave = function(cTitolo, cSottoTitolo) {
    swal(cTitolo, cSottoTitolo, "success");
  };

  $scope.modalClose = function() {
    self.modalInstance.close();
  };

  $scope.motivi = [
    { nome: "Motivo  1 kjwjrqweporèpe", code: "AF" },
    { nome: "Motivo  2 xvdfgdf", code: "AX" },
    { nome: "Motivo  3 t54g5eteeb", code: "AL" },
    { nome: "Motivo  4 ged mnwjk23r", code: "DZ" },
    { nome: "Motivo  5 a34jrhm ", code: "AS" },
    { nome: "Motivo  6 fggq", code: "AD" },
    { nome: "Motivo  7 wiinei", code: "AO" },
    { nome: "Motivo  8 hydirj", code: "AI" },
    { nome: "Motivo  9 mjuf", code: "AQ" },
    { nome: "Motivo 10 jyudarej", code: "AG" },
    { nome: "Motivo 11 htgb", code: "AR" },
    { nome: "Motivo 12 uqguygh9", code: "AM" },
    { nome: "Motivo 13 eu098ud", code: "AW" },
    { nome: "Motivo 14 yteoirutyweoiu", code: "AU" },
    { nome: "Motivo 15 uuuuuuuuuu", code: "AT" },
    { nome: "Motivo 16 zzzzzz", code: "AZ" },
    { nome: "Motivo 17   uuuu ", code: "BS" },
    { nome: "Motivo 18 gggg ", code: "BH" },
    { nome: "Motivo 19 mmm", code: "BD" },
  ];
 
  $scope.Tmp = {
    DataNegazione:"",
    MotivoNegazione:"",
    Note:""

  };

}

/**
 * Collega il controller al modulo inciso
 **/
angular.module("inciso").controller("modalNegazioneDomandaCtrl", modalNegazioneDomandaCtrl);
