/**
 * modalRedditiCtrl - controller
 * Controller per la finestra modale di gestioneRedditi
 *
 */
function modalRedditiCtrl($scope) {
  $scope.modalSave = function(cTitolo, cSottoTitolo) {
    swal(cTitolo, cSottoTitolo, "success");
  };

  $scope.modalClose = function() {
    self.modalInstance.close();
  };

  $scope.tipoRedditi = [
    {
      descrizione: "Reddito da lavoro dipendente,lavoro autonomo,di impresa",
      code: "AF"
    },
    {
      descrizione:
        "Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
      code: "AF"
    },
    { descrizione: "Altri redditi da fabbricati", code: "AF" },
    { descrizione: "Questi valori verranno caricati dal BackEnd", code: "AF" },
    { descrizione: "aaaaaaaaaaaeeee ee1", code: "AF" },
    { descrizione: "ffff fff1", code: "AF" },
    { descrizione: "eklfàl òkwàlfk Comune 1", code: "AF" }
  ];
}
/**
 * Collega il controller al modulo inciso
 **/
angular.module("inciso").controller("modalRedditiCtrl", modalRedditiCtrl);
