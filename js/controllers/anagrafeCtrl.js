/**
 * anagrafeCtrl - controller
 * Controller Principale di gestione delle anagrafiche
 *
 */
function anagrafeCtrl(
  $scope,
  httpServices,
  DTOptionsBuilder,
  DTColumnDefBuilder
) {
  /**
   * campi e funzioni adoperati per la ricerca
   */
  // $scope.findCognome = "";
  // $scope.findNome = "";
  // $scope.findCodiceFiscale = "";
  // $scope.findDataDiNascita = "";
  // $scope.findNumeroFaldoneArchiviazione = "";
  // $scope.findAnnoDiScarto = "";

  // $scope.find = function() {
  //   $scope.elencoAssistiti = httpServices._ricercaAnagraficaRicerca.get(
  //     "mockUrl"
  //   );
  // };

  /**
   * variabile contenente i dati dell'assistito in esame
   */

  // $scope.datiAssistito = [];

  // $scope.findCodFis = function(cCodFis) {
  //   $scope.datiAssistito = httpServices._ricercaAnagraficaRicerca.findCodFis(
  //     "mockUrl",
  //     cCodFis
  //   );
  // };
 

}

/**
 * Collega il controller al modulo inciso
 **/
angular.module("inciso").controller("anagrafeCtrl", anagrafeCtrl);
