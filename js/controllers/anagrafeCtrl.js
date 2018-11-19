/**
 * anagrafeCtrl - controller
 * Controller Principale di gestione delle anagrafiche
 *
 */
function anagrafeCtrl(
  $scope,
  httpServices,
  anagrafeServices,
  DTOptionsBuilder,
  DTColumnDefBuilder
) {

  $scope.datiAssistito = [];
  $scope.findCodFis = function(cCodFis) {
    anagrafeServices.findCodFis(cCodFis, result => {
      $scope.datiAssistito = result;
    });
  };


  $scope.onSaveCar = function(childDatiAssistito) {
    $scope.datiAssistito = childDatiAssistito;
  };

  $scope.dtOptions = DTOptionsBuilder.newOptions()
    .withOption("pageLength", 5)
    .withOption("lengthChange", false);

  $scope.colonneTabElencoRedditi = [
    DTColumnDefBuilder.newColumnDef(3).notSortable(),
    DTColumnDefBuilder.newColumnDef(4).notSortable()
  ];
}

/**
 * Collega il controller al modulo inciso
 **/
angular.module("inciso").controller("anagrafeCtrl", anagrafeCtrl);
