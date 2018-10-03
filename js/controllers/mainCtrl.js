/**
 * MainCtrl - controller
 * Contiene dati globali usati in differenti view
 *
 */
function MainCtrl(
  $scope,
  $rootScope,
  $translate,
  httpServices,
  $http,
  httpServices,
  DTOptionsBuilder,
  DTColumnDefBuilder
) {
  /**
   * Lingua partenza applicativo
   */

  this.$onInit = function() {
    $translate.use("it");
  };

  /**
   * variabili da sostituire con chiamate http
   */
  $scope.provinces = [
    { name: "Milano", area: "Nord", disabled: false },
    { name: "Torino", area: "Nord", disabled: false },
    { name: "Roma", area: "Centro", disabled: true },
    { name: "Bologna", area: "Centro", disabled: false },
    { name: "Napoli", area: "Sud", disabled: false },
    { name: "Palermo", area: "Sud", disabled: false }
  ];

  $scope.comuni = [
    { name: "Comune1", area: "Nord", disabled: false },
    { name: "Comune2", area: "Nord", disabled: false },
    { name: "Comune3", area: "Centro", disabled: true },
    { name: "Comune4", area: "Centro", disabled: false },
    { name: "Comune5", area: "Sud", disabled: false },
    { name: "Comune6", area: "Sud", disabled: false }
  ];

  $scope.nazioni = [
    { name: "Italia", area: "Nord", disabled: false },
    { name: "Germania", area: "Nord", disabled: false },
    { name: "Finlandia", area: "Centro", disabled: true },
    { name: "Inghilterra", area: "Centro", disabled: false },
    { name: "Francia", area: "Sud", disabled: false },
    { name: "Belgio", area: "Sud", disabled: false }
  ];

  $scope.cittadinanze = [
    { name: "Cittadinanza 1", area: "Nord", disabled: false },
    { name: "Cittadinanza 2", area: "Nord", disabled: false },
    { name: "Cittadinanza 3", area: "Centro", disabled: true },
    { name: "Cittadinanza 4", area: "Centro", disabled: false },
    { name: "Cittadinanza 5", area: "Sud", disabled: false },
    { name: "Cittadinanza 6", area: "Sud", disabled: false }
  ];

  $scope.frazioni = [
    { name: "Frazione 1", area: "Nord", disabled: false },
    { name: "Frazione 2", area: "Nord", disabled: false },
    { name: "Frazione 3", area: "Centro", disabled: true },
    { name: "Frazione 4", area: "Centro", disabled: false },
    { name: "Frazione 5", area: "Sud", disabled: false },
    { name: "Frazione 6", area: "Sud", disabled: false }
  ];

  $scope.vie = [
    { name: "Via tal dei tali 1", area: "Nord", disabled: false },
    { name: "Via tal dei tali 2", area: "Nord", disabled: false },
    { name: "Via tal dei tali 3", area: "Centro", disabled: true },
    { name: "Via tal dei tali 4", area: "Centro", disabled: false },
    { name: "Via tal dei tali 5", area: "Sud", disabled: false },
    { name: "Via tal dei tali 6", area: "Sud", disabled: false }
  ];

  $scope.località = [
    { name: "Località 1", area: "Nord", disabled: false },
    { name: "Località 2", area: "Nord", disabled: false },
    { name: "Località 3", area: "Centro", disabled: true },
    { name: "Località 4", area: "Centro", disabled: false },
    { name: "Località 5", area: "Sud", disabled: false },
    { name: "Località 6", area: "Sud", disabled: false }
  ];

  // impostiamo la provincia selezionata
  $scope.currentProvince = $scope.provinces[0];

  $scope.findCodFis = function(cCodFis) {
    $scope.datiAssistito = httpServices._ricercaAnagraficaRicerca.findCodFis(
      "mockUrl",
      cCodFis
    );
  };

}

/**
 * Collega il controller al modulo inciso
 **/
angular.module("inciso").controller("MainCtrl", MainCtrl);
