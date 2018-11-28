/**
 * anagrafeCtrl - controller
 * Controller Principale di gestione delle anagrafiche
 *
 */
function liquidazioniCtrl(
  $scope,
  httpServices,
  liquidazioniServices,
  $state,
  $stateParams,
  DTOptionsBuilder,
  DTColumnDefBuilder,
  $compile
) {
  $scope.datiAssistito = [];

  // informazioni ricerca
  $scope.info = {};
  $scope.info.find = {};

  $scope.elencoLiquidazioni = [];
  $scope.find = function() {
    var tableSort = $("#resultRicercaLiquidazioniDataTable").dataTable();
    var tablePage = $("#resultRicercaLiquidazioniDataTable").DataTable();
    
    // informazioni ordinamento
    $scope.info.sort = {
      column: tableSort.fnSettings().aaSorting[0][0],
      direction: tableSort.fnSettings().aaSorting[0][1],
      titleColumn: tableSort.fnSettings().aoColumns[
        tableSort.fnSettings().aaSorting[0][0]
      ].sTitle
    };
    
    // informazioni pagina
    $scope.info.page = tablePage.page.info();

    liquidazioniServices.find($scope.info, result => {
      $scope.elencoLiquidazioni = result;
    });
  };

  $scope.datiLiquidazione = [];
  $scope.findCodFis = function(cCodFis) {
    liquidazioniServices.findCodFis(cCodFis, result => {
      $scope.datiLiquidazione = result;
    });
  };

  $scope.liquidazione = {
    Mese: "AGOSTO",
    Anno: "2016",
    TotaleImportoPrestazioni: 435.35,
    TotaleImportoLiquidato: 320.25,
    Tredicesima: null,
    Riaccrediti: 0,
    RecuperiDaCompensazione: -108.75,
    ModalitaDiPagamento: "Posta",

    Prestazioni: {
      InvalidiCivili: {
        Liquidato: 100,
        Arretrati: 100,
        Conguaglio: 20,
        Totale: 300
      },

      Sordi: {
        Liquidato: 30,
        Arretrati: 20,
        Conguaglio: 10,
        Totale: 100
      },

      Ciechi: {
        Liquidato: 100,
        Arretrati: 50,
        Conguaglio: 100,
        Totale: 150
      }
    },

    RitenuteDiCategoria: {
      Totale: -12,
      Associazioni: [
        {
          TipoAssociazione: "prova 1",
          Importo: 6
        },
        {
          TipoAssociazione: "prova 2",
          Importo: 6
        }
      ]
    }
  };

  // --------------------------------

  $scope.tabLiquidazioneMensile = [
    {
      Posizione: "123456",
      CodiceFiscale: "LFNCLL60D03E026T",
      Cognome: "Alfano",
      Nome: "Camillo",
      DataDiNascita: "12/07/1986"
    },
    {
      Posizione: "345765",
      CodiceFiscale: "LFNCLL60D03E026T",
      Cognome: "Alfano",
      Nome: "Camillo",
      DataDiNascita: "03/04/1960"
    },
    {
      Posizione: "771723",
      CodiceFiscale: "QTGSRO60A11Q2055",
      Cognome: "Hammond",
      Nome: "John",
      DataDiNascita: "01/01/1970"
    },
    {
      Posizione: "125688",
      CodiceFiscale: "QTGSRO60A11Q2055",
      Cognome: "Hammond",
      Nome: "John",
      DataDiNascita: "01/01/1970"
    },
    {
      Posizione: "345765",
      CodiceFiscale: "QTGSRO60A11Q2055",
      Cognome: "Hammond",
      Nome: "John",
      DataDiNascita: "01/01/1970"
    },
    {
      Posizione: "771727",
      CodiceFiscale: "RTSDRO70A10W2056",
      Cognome: "Mudassar",
      Nome: "Khan",
      DataDiNascita: "01/02/1650"
    },
    {
      Posizione: "133456",
      CodiceFiscale: "LFNCLL60D03E026T",
      Cognome: "Alfano-2",
      Nome: "Camillo-2",
      DataDiNascita: "12/07/1986"
    }
  ];

  // --------------------------------
  $scope.tabLiquidazioneMensileDaCalcolare = [
    {
      Assistito: "Maria Rossi",
      PrestazioniDaLiquidare: 1300,
      Tredicesima: +800,
      Conguaglio: -703,
      RitenuteDiCategoria: -700,
      Riaccrediti: +1456,
      RecuperiDaCompensazione: -345,
      TotaleMensileDaLiquidare: 1800
    },
    {
      Assistito: "Paolo Bianchi",
      PrestazioniDaLiquidare: 1345,
      Tredicesima: 900,
      Conguaglio: 400,
      RitenuteDiCategoria: null,
      Riaccrediti: null,
      RecuperiDaCompensazione: -335,
      TotaleMensileDaLiquidare: 2455
    },
    {
      Assistito: "Alfano Camillo",
      PrestazioniDaLiquidare: 1111,
      Tredicesima: -1111,
      Conguaglio: -400,
      RitenuteDiCategoria: -1111,
      Riaccrediti: null,
      RecuperiDaCompensazione: -335,
      TotaleMensileDaLiquidare: 12455
    }
  ];

  // --------------------------------
  $scope.tabConguaglio = [
    {
      Posizione: "123456",
      CodiceFiscale: "LFNCLL60D03E026T",
      Cognome: "Alfano",
      Nome: "Camillo",
      DataDiNascita: "12/07/1986"
    },
    {
      Posizione: "345765",
      CodiceFiscale: "LFNCLL60D03E026T",
      Cognome: "Alfano",
      Nome: "Camillo",
      DataDiNascita: "03/04/1960"
    },
    {
      Posizione: "771723",
      CodiceFiscale: "QTGSRO60A11Q2055",
      Cognome: "Hammond",
      Nome: "John",
      DataDiNascita: "01/01/1970"
    },
    {
      Posizione: "125688",
      CodiceFiscale: "QTGSRO60A11Q2055",
      Cognome: "Hammond",
      Nome: "John",
      DataDiNascita: "01/01/1970"
    },
    {
      Posizione: "345765",
      CodiceFiscale: "QTGSRO60A11Q2055",
      Cognome: "Hammond",
      Nome: "John",
      DataDiNascita: "01/01/1970"
    },
    {
      Posizione: "771727",
      CodiceFiscale: "RTSDRO70A10W2056",
      Cognome: "Mudassar",
      Nome: "Khan",
      DataDiNascita: "01/02/1650"
    },
    {
      Posizione: "133456",
      CodiceFiscale: "LFNCLL60D03E026T",
      Cognome: "Alfano-2",
      Nome: "Camillo-2",
      DataDiNascita: "12/07/1986"
    }
  ];

  //  -------------
  $scope.tabConguaglioRisultati = [
    {
      Posizione: "123456",
      Cognome: "Alfano",
      Nome: "Camillo",
      Conguaglio: 1234567,
      Anni: [
        {
          Anno: 2016,
          Dettagli: [
            {
              Mese: "GENNAIO",
              ImportoMensileSpettanteGiaLiquidato: 1111,
              ImportMensileConguaglio: 111,
              NuovoImportoMensileTredicesimaMaturata: 111
            },
            {
              Mese: "FEBBRAIO",
              ImportoMensileSpettanteGiaLiquidato: 2222,
              ImportMensileConguaglio: 2222,
              NuovoImportoMensileTredicesimaMaturata: 2222
            },
            {
              Mese: "MARZO",
              ImportoMensileSpettanteGiaLiquidato: 3333,
              ImportMensileConguaglio: 3333,
              NuovoImportoMensileTredicesimaMaturata: 3333
            }
          ]
        },
        {
          Anno: 2015,
          Dettagli: [
            {
              Mese: "GENNAIO",
              ImportoMensileSpettanteGiaLiquidato: 4444,
              ImportMensileConguaglio: 444,
              NuovoImportoMensileTredicesimaMaturata: 444111
            },
            {
              Mese: "MARZO",
              ImportoMensileSpettanteGiaLiquidato: 335533,
              ImportMensileConguaglio: 3333,
              NuovoImportoMensileTredicesimaMaturata: 35333
            }
          ]
        }
      ]
    },
    {
      Posizione: "345765",
      Cognome: "Alfano",
      Nome: "Camillo",
      Conguaglio: 1234567,
      Anni: [
        {
          Anno: 2016,
          Dettagli: [
            {
              Mese: "GENNAIO",
              ImportoMensileSpettanteGiaLiquidato: 1111,
              ImportMensileConguaglio: 111,
              NuovoImportoMensileTredicesimaMaturata: 111
            },
            {
              Mese: "FEBBRAIO",
              ImportoMensileSpettanteGiaLiquidato: 2222,
              ImportMensileConguaglio: 2222,
              NuovoImportoMensileTredicesimaMaturata: 2222
            },
            {
              Mese: "MARZO",
              ImportoMensileSpettanteGiaLiquidato: 3333,
              ImportMensileConguaglio: 3333,
              NuovoImportoMensileTredicesimaMaturata: 3333
            }
          ]
        },
        {
          Anno: 2015,
          Dettagli: [
            {
              Mese: "GENNAIO",
              ImportoMensileSpettanteGiaLiquidato: 4444,
              ImportMensileConguaglio: 444,
              NuovoImportoMensileTredicesimaMaturata: 444111
            },
            {
              Mese: "MARZO",
              ImportoMensileSpettanteGiaLiquidato: 335533,
              ImportMensileConguaglio: 3333,
              NuovoImportoMensileTredicesimaMaturata: 35333
            }
          ]
        }
      ]
    },
    {
      Posizione: "771723",
      Cognome: "Hammond",
      Nome: "John",
      Conguaglio: 1234567,
      Anni: [
        {
          Anno: 2016,
          Dettagli: [
            {
              Mese: "GENNAIO",
              ImportoMensileSpettanteGiaLiquidato: 1111,
              ImportMensileConguaglio: 111,
              NuovoImportoMensileTredicesimaMaturata: 111
            },
            {
              Mese: "FEBBRAIO",
              ImportoMensileSpettanteGiaLiquidato: 2222,
              ImportMensileConguaglio: 2222,
              NuovoImportoMensileTredicesimaMaturata: 2222
            },
            {
              Mese: "MARZO",
              ImportoMensileSpettanteGiaLiquidato: 3333,
              ImportMensileConguaglio: 3333,
              NuovoImportoMensileTredicesimaMaturata: 3333
            }
          ]
        },
        {
          Anno: 2015,
          Dettagli: [
            {
              Mese: "GENNAIO",
              ImportoMensileSpettanteGiaLiquidato: 4444,
              ImportMensileConguaglio: 444,
              NuovoImportoMensileTredicesimaMaturata: 444111
            },
            {
              Mese: "MARZO",
              ImportoMensileSpettanteGiaLiquidato: 335533,
              ImportMensileConguaglio: 3333,
              NuovoImportoMensileTredicesimaMaturata: 35333
            }
          ]
        }
      ]
    },
    {
      Posizione: "125688",
      Cognome: "Hammond",
      Nome: "John",
      Conguaglio: 1234567,
      Anni: [
        {
          Anno: 2016,
          Dettagli: [
            {
              Mese: "GENNAIO",
              ImportoMensileSpettanteGiaLiquidato: 1111,
              ImportMensileConguaglio: 111,
              NuovoImportoMensileTredicesimaMaturata: 111
            },
            {
              Mese: "FEBBRAIO",
              ImportoMensileSpettanteGiaLiquidato: 2222,
              ImportMensileConguaglio: 2222,
              NuovoImportoMensileTredicesimaMaturata: 2222
            },
            {
              Mese: "MARZO",
              ImportoMensileSpettanteGiaLiquidato: 3333,
              ImportMensileConguaglio: 3333,
              NuovoImportoMensileTredicesimaMaturata: 3333
            }
          ]
        },
        {
          Anno: 2015,
          Dettagli: [
            {
              Mese: "GENNAIO",
              ImportoMensileSpettanteGiaLiquidato: 4444,
              ImportMensileConguaglio: 444,
              NuovoImportoMensileTredicesimaMaturata: 444111
            },
            {
              Mese: "MARZO",
              ImportoMensileSpettanteGiaLiquidato: 335533,
              ImportMensileConguaglio: 3333,
              NuovoImportoMensileTredicesimaMaturata: 35333
            }
          ]
        }
      ]
    },
    {
      Posizione: "345765",
      Cognome: "Hammond",
      Nome: "John",
      Conguaglio: 1234567,
      Anni: [
        {
          Anno: 2016,
          Dettagli: [
            {
              Mese: "GENNAIO",
              ImportoMensileSpettanteGiaLiquidato: 1111,
              ImportMensileConguaglio: 111,
              NuovoImportoMensileTredicesimaMaturata: 111
            },
            {
              Mese: "FEBBRAIO",
              ImportoMensileSpettanteGiaLiquidato: 2222,
              ImportMensileConguaglio: 2222,
              NuovoImportoMensileTredicesimaMaturata: 2222
            },
            {
              Mese: "MARZO",
              ImportoMensileSpettanteGiaLiquidato: 3333,
              ImportMensileConguaglio: 3333,
              NuovoImportoMensileTredicesimaMaturata: 3333
            }
          ]
        },
        {
          Anno: 2015,
          Dettagli: [
            {
              Mese: "GENNAIO",
              ImportoMensileSpettanteGiaLiquidato: 4444,
              ImportMensileConguaglio: 444,
              NuovoImportoMensileTredicesimaMaturata: 444111
            },
            {
              Mese: "MARZO",
              ImportoMensileSpettanteGiaLiquidato: 335533,
              ImportMensileConguaglio: 3333,
              NuovoImportoMensileTredicesimaMaturata: 35333
            }
          ]
        }
      ]
    },
    {
      Posizione: "771727",
      Cognome: "Mudassar",
      Nome: "Khan",
      Conguaglio: 1234567,
      Anni: [
        {
          Anno: 2016,
          Dettagli: [
            {
              Mese: "GENNAIO",
              ImportoMensileSpettanteGiaLiquidato: 1111,
              ImportMensileConguaglio: 111,
              NuovoImportoMensileTredicesimaMaturata: 111
            },
            {
              Mese: "FEBBRAIO",
              ImportoMensileSpettanteGiaLiquidato: 2222,
              ImportMensileConguaglio: 2222,
              NuovoImportoMensileTredicesimaMaturata: 2222
            },
            {
              Mese: "MARZO",
              ImportoMensileSpettanteGiaLiquidato: 3333,
              ImportMensileConguaglio: 3333,
              NuovoImportoMensileTredicesimaMaturata: 3333
            }
          ]
        },
        {
          Anno: 2015,
          Dettagli: [
            {
              Mese: "GENNAIO",
              ImportoMensileSpettanteGiaLiquidato: 4444,
              ImportMensileConguaglio: 444,
              NuovoImportoMensileTredicesimaMaturata: 444111
            },
            {
              Mese: "MARZO",
              ImportoMensileSpettanteGiaLiquidato: 335533,
              ImportMensileConguaglio: 3333,
              NuovoImportoMensileTredicesimaMaturata: 35333
            }
          ]
        }
      ]
    },
    {
      Posizione: "133456",
      Cognome: "Alfano-2",
      Nome: "Camillo-2",
      Conguaglio: 1234567,
      Anni: [
        {
          Anno: 2016,
          Dettagli: [
            {
              Mese: "GENNAIO",
              ImportoMensileSpettanteGiaLiquidato: 1111,
              ImportMensileConguaglio: 111,
              NuovoImportoMensileTredicesimaMaturata: 111
            },
            {
              Mese: "FEBBRAIO",
              ImportoMensileSpettanteGiaLiquidato: 2222,
              ImportMensileConguaglio: 2222,
              NuovoImportoMensileTredicesimaMaturata: 2222
            },
            {
              Mese: "MARZO",
              ImportoMensileSpettanteGiaLiquidato: 3333,
              ImportMensileConguaglio: 3333,
              NuovoImportoMensileTredicesimaMaturata: 3333
            }
          ]
        },
        {
          Anno: 2015,
          Dettagli: [
            {
              Mese: "GENNAIO",
              ImportoMensileSpettanteGiaLiquidato: 4444,
              ImportMensileConguaglio: 444,
              NuovoImportoMensileTredicesimaMaturata: 444111
            },
            {
              Mese: "MARZO",
              ImportoMensileSpettanteGiaLiquidato: 335533,
              ImportMensileConguaglio: 3333,
              NuovoImportoMensileTredicesimaMaturata: 35333
            }
          ]
        }
      ]
    }
  ];

  // --------------------------------

  $scope.vmAnniConguaglio = {};
  $scope.vmAnniConguaglio.dtInstance = {};

  $scope.detailInfoAnniConguaglio = function(event, anni, url) {
    //  definisce la variabile scope che verra ereditata dalla direttiva
    
    var scope = $scope.$new(true);
    scope.anni = anni;
    scope.url = url;

    scope.dtOptionsTabAnniConguaglio = DTOptionsBuilder.newOptions()
      .withOption("order", [1, "desc"])
      .withOption("pageLength", 5)
      .withOption("lengthChange", false);
    // .withOption("order", false);

    scope.dtColumnTabAnniConguaglio = [
      DTColumnDefBuilder.newColumnDef(0).notSortable(),
      DTColumnDefBuilder.newColumnDef(1).notSortable()
    ];

    scope.vmDettagliAnnoConguaglio = {};
    scope.vmDettagliAnnoConguaglio.dtInstance = {};

    scope.detailInfoDettagliAnnoConguaglio = function(event, dettagli, url) {
      //  definisce la variabile scope che verra ereditata dalla direttiva
      
      var scope2 = scope.$new(true);
      scope2.dettagli = dettagli;
      scope2.url = url;

      
      var link = angular.element(event.currentTarget),
        icon = link.find(".fa"),
        tr = link.parent().parent(),
        table = scope.vmDettagliAnnoConguaglio.dtInstance.DataTable,
        row = table.row(tr);

      if (row.child.isShown()) {
        // This row is already open - close it
        icon.removeClass("fa-chevron-up").addClass("fa-chevron-down");
        row.child.hide();
        tr.removeClass("shown");
      } else {
        // Open this row
        icon.removeClass("fa-chevron-down").addClass("fa-chevron-up");
        row.child($compile("<div ng-include='url'></div>")(scope2)).show();
        tr.addClass("shown");
      }
    };

    
    var link = angular.element(event.currentTarget),
      icon = link.find(".fa"),
      tr = link.parent().parent(),
      table = $scope.vmAnniConguaglio.dtInstance.DataTable,
      row = table.row(tr);

    if (row.child.isShown()) {
      // This row is already open - close it
      icon.removeClass("fa-chevron-up").addClass("fa-chevron-down");
      row.child.hide();
      tr.removeClass("shown");
    } else {
      // Open this row
      icon.removeClass("fa-chevron-down").addClass("fa-chevron-up");
      row.child($compile("<div ng-include='url'></div>")(scope)).show();
      tr.addClass("shown");
    }
  };

  // --------------------------------------------------------------------------
  // OPZIONI e COLONNE TABELLE
  // --------------------------------------------------------------------------

  // -------- Tabella Ricerca Liquidazione
  // https://stackoverflow.com/questions/45846039/cannot-reinitialise-datatable-angularjs-with-datatable

  $scope.dtOptionsTabRicercaLiquidazioni = DTOptionsBuilder.newOptions()
    .withOption("pageLength", 5)
    .withOption("lengthChange", false)
    .withOption("retrieve", true);

  $scope.colonneTabRicercaLiquidazioni = [
    DTColumnDefBuilder.newColumnDef(8).notSortable()
  ];

  // -------- Tabella Liquidazione Mensile
  $scope.dtOptionsTabLiquidazioneMensile = DTOptionsBuilder.newOptions()
    .withOption("order", [1, "desc"])
    .withOption("pageLength", 5)
    .withOption("lengthChange", false);

  $scope.dtColumnTabLiquidazioneMensile = [
    DTColumnDefBuilder.newColumnDef(5).notSortable()
  ];

  // -------- Tabella Liquidazione Mensile Da Calcolare
  $scope.dtOptionsTabLiquidazioneMensileDaCalcolare = DTOptionsBuilder.newOptions()
    .withOption("order", [1, "desc"])
    .withOption("pageLength", 5)
    .withOption("lengthChange", false);

  $scope.dtColumnTabLiquidazioneMensileDaCalcolare = [
    DTColumnDefBuilder.newColumnDef(5).notSortable()
  ];
  // --------- Tabella Conguaglio
  $scope.dtOptionsTabConguaglio = DTOptionsBuilder.newOptions()
    .withOption("order", [1, "desc"])
    .withOption("pageLength", 5)
    .withOption("lengthChange", false);

  $scope.dtColumnTabConguaglio = [
    DTColumnDefBuilder.newColumnDef(5).notSortable()
  ];
  // --------- Tabella Conguaglio Risultati
  $scope.dtOptionsTabConguaglioRisultati = DTOptionsBuilder.newOptions()
    .withOption("order", [1, "desc"])
    .withOption("pageLength", 5)
    .withOption("lengthChange", false);

  $scope.dtColumnTabConguaglioRisultati = [
    DTColumnDefBuilder.newColumnDef(0).notSortable()
  ];

  // --------- Tabella Dettaglio Singolo Anno Conguaglio
  $scope.dtOptionsTabDettaglioAnnoConguaglio = DTOptionsBuilder.newOptions()
    .withOption("order", [1, "desc"])
    .withOption("pageLength", 5)
    .withOption("lengthChange", false);

  $scope.dtColumnTabDettaglioAnnoConguaglio = [
    DTColumnDefBuilder.newColumnDef(0).notSortable()
  ];

  // --------------------------------------------------------------------------
  // FINE OPZIONI e COLONNE TABELLE
  // --------------------------------------------------------------------------

  $scope.findPosizione = function(cCodFis) {
    $scope.findCodFis = function(cCodFis) {
      anagrafeServices.findCodFis(cCodFis, result => {
        $scope.datiAssistito = result;
        $state.go("posizione.visualizza_posizione", {
          datiAssistito: $scope.datiAssistito
        });
      });
    };
  };
}

/**
 * Collega il controller al modulo inciso
 **/
angular.module("inciso").controller("liquidazioniCtrl", liquidazioniCtrl);
