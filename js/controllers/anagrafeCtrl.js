/**
 * anagrafeCtrl - controller
 * Controller Principale di gestione delle anagrafiche
 *
 */
function anagrafeCtrl(
  $rootScope,
  $scope,
  httpServices,
  $uibModal,
  DTOptionsBuilder,
  DTColumnDefBuilder
) {
  // https://www.datatables.net/reference/option/
  $rootScope.dtOptions = DTOptionsBuilder.newOptions()
    .withOption("pageLength", 5)
    .withOption("lengthChange", false);

  $rootScope.colonneTabElencoRedditi = [
    DTColumnDefBuilder.newColumnDef(3).notSortable(),
    DTColumnDefBuilder.newColumnDef(4).notSortable()
  ];

  $rootScope.provinces = [
    { name: "Milano", area: "Nord", disabled: false },
    { name: "Torino", area: "Nord", disabled: false },
    { name: "Roma", area: "Centro", disabled: true },
    { name: "Bologna", area: "Centro", disabled: false },
    { name: "Napoli", area: "Sud", disabled: false },
    { name: "Palermo", area: "Sud", disabled: false }
  ];

  $rootScope.comuni = [
    { name: "Comune1", area: "Nord", disabled: false },
    { name: "Comune2", area: "Nord", disabled: false },
    { name: "Comune3", area: "Centro", disabled: true },
    { name: "Comune4", area: "Centro", disabled: false },
    { name: "Comune5", area: "Sud", disabled: false },
    { name: "Comune6", area: "Sud", disabled: false }
  ];

  $rootScope.nazioni = [
    { name: "Italia", area: "Nord", disabled: false },
    { name: "Germania", area: "Nord", disabled: false },
    { name: "Finlandia", area: "Centro", disabled: true },
    { name: "Inghilterra", area: "Centro", disabled: false },
    { name: "Francia", area: "Sud", disabled: false },
    { name: "Belgio", area: "Sud", disabled: false }
  ];

  $rootScope.cittadinanze = [
    { name: "Cittadinanza 1", area: "Nord", disabled: false },
    { name: "Cittadinanza 2", area: "Nord", disabled: false },
    { name: "Cittadinanza 3", area: "Centro", disabled: true },
    { name: "Cittadinanza 4", area: "Centro", disabled: false },
    { name: "Cittadinanza 5", area: "Sud", disabled: false },
    { name: "Cittadinanza 6", area: "Sud", disabled: false }
  ];

  $rootScope.frazioni = [
    { name: "Frazione 1", area: "Nord", disabled: false },
    { name: "Frazione 2", area: "Nord", disabled: false },
    { name: "Frazione 3", area: "Centro", disabled: true },
    { name: "Frazione 4", area: "Centro", disabled: false },
    { name: "Frazione 5", area: "Sud", disabled: false },
    { name: "Frazione 6", area: "Sud", disabled: false }
  ];

  $rootScope.vie = [
    { name: "Via tal dei tali 1", area: "Nord", disabled: false },
    { name: "Via tal dei tali 2", area: "Nord", disabled: false },
    { name: "Via tal dei tali 3", area: "Centro", disabled: true },
    { name: "Via tal dei tali 4", area: "Centro", disabled: false },
    { name: "Via tal dei tali 5", area: "Sud", disabled: false },
    { name: "Via tal dei tali 6", area: "Sud", disabled: false }
  ];

  $rootScope.località = [
    { name: "Località 1", area: "Nord", disabled: false },
    { name: "Località 2", area: "Nord", disabled: false },
    { name: "Località 3", area: "Centro", disabled: true },
    { name: "Località 4", area: "Centro", disabled: false },
    { name: "Località 5", area: "Sud", disabled: false },
    { name: "Località 6", area: "Sud", disabled: false }
  ];

  // impostiamo la provincia selezionata
  $rootScope.currentProvince = $rootScope.provinces[0];

  this.find = function() {
    this.elencoAssistiti = httpServices._ricercaAnagraficaRicerca.get(
      "mockUrl"
    );
  };

  // tutte le modali sono aperte in una variabile globale denominata $rootScope.modalInstance
  // per la chiusura è sufficiente invocare il comando modalInstance.close() che è un metodo
  // del plugin come specificato nella documentazione
  // https://github.com/angular-ui/bootstrap/tree/master/src/modal/docs

  $rootScope.creaNuovoIndirizzo = function($index) {
    if ($index > -1) {
      $rootScope.datiAssistito.Indirizzi[$index].UsaIndirizzo = "Si";
    } else {
      $rootScope.datiAssistito.Indirizzi.forEach(function(element) {
        element.UsaIndirizzo = "No";
      });
    }

    $rootScope.modalInstance = $uibModal.open({
      templateUrl: "./../views/gestione_indirizzi.html",
      controller: "modalIndirizziCtrl",
      windowClass: "animated flipInY"
    });
  };

  $rootScope.creaNuovoReddito = function($index) {
    $rootScope.$index = $index;
    $rootScope.modalInstance = $uibModal.open({
      templateUrl: "./../views/gestione_redditi.html",
      controller: "modalRedditiCtrl",
      windowClass: "animated flipInY"
    });
    debugger;
  };

  /**
   * campi adoperati per la ricerca
   */
  this.findCognome = "";
  this.findNome = "";
  this.findCodiceFiscale = "";
  this.findDataDiNascita = "";
  this.findNumeroFaldoneArchiviazione = "";
  this.findAnnoDiScarto = "";
}
