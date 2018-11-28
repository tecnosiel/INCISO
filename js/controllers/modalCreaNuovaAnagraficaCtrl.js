/**
 * modalCreaNuovaAnagraficaCtrl - controller
 * Controller per la finestra modale di modalCreaNuovaAnagrafica
 *
 */
function modalCreaNuovaAnagraficaCtrl($scope, $state, $stateParams) {
  $scope.modalSave = function(cTitolo, cSottoTitolo) {
    swal(cTitolo, cSottoTitolo, "success");
  };

  $scope.modalClose = function() {
    self.modalInstance.close();
  };

  $scope.Tmp = {
    CodiceFiscale: "LFNCLL60D03E026T"
  };
  $scope.creaNuovaAnagrafica = function(cf) {
    $state.go("anagrafica.inserimento_anagrafica", {
      datiAssistito: { CodiceFiscale: cf }
    });
  };

  $scope.controllaCF = function(cf) {
    if (cf.length < 12) {
      swal(
        "Errore",
        "La lunghezza del codice fiscale non è\n" +
          "corretta: il codice fiscale dovrebbe essere lungo\n" +
          "esattamente 16 caratteri.\n",
        "error"
      );
      return;

      // codice da sostituire per controllare partita iva
      // return controllaPIVA(cf);
    } else {
      var validi, i, s, set1, set2, setpari, setdisp;
      if (cf == "") return "";
      cf = cf.toUpperCase();
      if (cf.length != 16) {
        swal(
          "Errore",
          "La lunghezza del codice fiscale non è\n" +
            "corretta: il codice fiscale dovrebbe essere lungo\n" +
            "esattamente 16 caratteri.\n",
          "error"
        );
        return;
      }

      validi = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      for (i = 0; i < 16; i++) {
        if (validi.indexOf(cf.charAt(i)) == -1) {
          swal(
            "Errore",
            "Il codice fiscale contiene il carattere non valido '" +
              cf.charAt(i) +
              "'.\nI caratteri validi sono le lettere e le cifre.\n"
          );
          return;
        }
      }
      set1 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      set2 = "ABCDEFGHIJABCDEFGHIJKLMNOPQRSTUVWXYZ";
      setpari = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      setdisp = "BAKPLCQDREVOSFTGUHMINJWZYX";
      s = 0;
      for (i = 1; i <= 13; i += 2)
        s += setpari.indexOf(set2.charAt(set1.indexOf(cf.charAt(i))));
      for (i = 0; i <= 14; i += 2)
        s += setdisp.indexOf(set2.charAt(set1.indexOf(cf.charAt(i))));
      if (s % 26 != cf.charCodeAt(15) - "A".charCodeAt(0)) {
        swal(
          "Il codice fiscale non è corretto:\n" +
            "il codice di controllo non corrisponde.\n"
        );
        return;
      }

      swal({
        title: "Codice Fiscale corretto!",
        text: "Interrogazione Consorzio.....",
        icon: "warning",
        buttons: ["C.F. Non trovato!", "C.F. Trovato!"],
        dangerMode: true
      }).then(function(isConfirm) {
        if (isConfirm) {
          $state.go("anagrafica.visualizza_anagrafica", {
            datiAssistito: $scope.datiAssistitoDaCodiceFiscaleMock
          });
          // swal({
          //   title: "Trovato!",
          //   text: "Inseriti dati Mock ..............!",
          //   icon: "success"
          // }).then(function() {
          //   $state.go("anagrafica.visualizza_anagrafica", {
          //     datiAssistito: $scope.datiAssistitoDaCodiceFiscaleMock
          //   });
          // });
        } else {
          
          $scope.creaNuovaAnagrafica($scope.Tmp.CodiceFiscale)
          // swal(
          //   "Non Trovato",
          //   "Azzeramento campi e nuovo inserimento)",
          //   "error"
          // ).then(function() {
          //   $state.go("anagrafica.inserimento_anagrafica", {
          //     datiAssistito: {}
          //   });
          // });
        }
      });

      // swal("Corretto CARICATO UN MOCK", "Codice Fiscale Corretto", "success");

      // $state.go("anagrafica.visualizza_anagrafica", {
      //   datiAssistito: $scope.datiAssistitoDaCodiceFiscaleMock
      // });

      self.modalInstance.close();
    }
  };

  $scope.controllaPIVA = function(pi) {
    if (pi == "") return "";
    if (pi.length != 11)
      return (
        "La lunghezza della partita IVA non è\n" +
        "corretta: la partita IVA dovrebbe essere lunga\n" +
        "esattamente 11 caratteri.\n"
      );
    validi = "0123456789";
    for (i = 0; i < 11; i++) {
      if (validi.indexOf(pi.charAt(i)) == -1)
        return (
          "La partita IVA contiene un carattere non valido `" +
          pi.charAt(i) +
          "'.\nI caratteri validi sono le cifre.\n"
        );
    }
    s = 0;
    for (i = 0; i <= 9; i += 2) s += pi.charCodeAt(i) - "0".charCodeAt(0);
    for (i = 1; i <= 9; i += 2) {
      c = 2 * (pi.charCodeAt(i) - "0".charCodeAt(0));
      if (c > 9) c = c - 9;
      s += c;
    }
    if ((10 - (s % 10)) % 10 != pi.charCodeAt(10) - "0".charCodeAt(0))
      return (
        "La partita IVA non è valida:\n" +
        "il codice di controllo non corrisponde.\n"
      );
    return "";
  };

  // -----------------------------------------------------------

  $scope.datiAssistitoDaCodiceFiscaleMock = {
    CodiceFiscale: "LFNCLL60D03E026T",
    Cognome: "Alfano",
    Nome: "Camillo",
    DataDiNascita: "01/01/1930",
    DataDiDecesso: "-",
    Sesso: "F",
    LuogoDiNascita: "Bologna",
    Nazionalita: "Italiana",
    Residenza: "via Luigi Cadorna, 53 - 39100 Bolzano BZ",
    Domicilio: "via Armando Diaz, 2 - 39100 Bolzano BZ",
    AltriIndirizzi: "atro indirizzo qòlwekrjòlqwekjròlqwkjer",
    Redditi: [
      {
        Anno: "2018",
        RedditoAssistito: "111111.45",
        RedditoConiuge: "6578.88",
        ValidoPerGliAnniSuccessivi: true,
        NessunRedditoPercepito: "No",
        TotaleValoreRedditoAssistito: "999999.00",
        EstremiPensioneAssistito: "qqqqqqqqqqqq",
        NoteAssistito: "note anno 2018 bla bla bla",

        DettagliConiuge: [],
        DettagliAssistito: [
          {
            Tipologia:
              "111Reddito da lavoro dipendente,lavoro autonomo,di impresa",
            Valore: "88268.00"
          },
          {
            Tipologia:
              "111Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
            Valore: "112000.00"
          },
          {
            Tipologia: "111Altri redditi da fabbricati",
            Valore: "2763.00"
          }
        ]
      },
      {
        Anno: "2017",
        RedditoAssistito: "22222225.45",
        RedditoConiuge: "222222228.88",
        ValidoPerGliAnniSuccessivi: true,

        NessunRedditoPercepito: "No",
        TotaleValoreRedditoAssistito: "999999.00",
        EstremiPensioneAssistito: "qqqqqqqqqqqq",
        NoteAssistito: "note anno 2018 bla bla bla",

        DettagliConiuge: [],
        DettagliAssistito: [
          {
            Tipologia:
              "222Reddito da lavoro dipendente,lavoro autonomo,di impresa",
            Valore: "88628.00"
          },
          {
            Tipologia:
              "222Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
            Valore: "112000.00"
          },
          {
            Tipologia: "2222Altri redditi da fabbricati",
            Valore: "2763.00"
          }
        ]
      },
      {
        Anno: "2016",
        RedditoAssistito: "33333333.45",
        RedditoConiuge: "33333333.88",
        ValidoPerGliAnniSuccessivi: true,

        NessunRedditoPercepito: "No",
        TotaleValoreRedditoAssistito: "999999.00",
        EstremiPensioneAssistito: "qqqqqqqqqqqq",
        NoteAssistito: "note anno 2018 bla bla bla",

        DettagliConiuge: [],
        DettagliAssistito: [
          {
            Tipologia:
              "333Reddito da lavoro dipendente,lavoro autonomo,di impresa",
            Valore: "8868.00"
          },
          {
            Tipologia:
              "333Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
            Valore: "11000.00"
          },
          {
            Tipologia: "333Altri redditi da fabbricati",
            Valore: "763.00"
          }
        ]
      },
      {
        Anno: "2015",
        RedditoAssistito: "44444444.45",
        RedditoConiuge: "44444444.88",
        ValidoPerGliAnniSuccessivi: true,

        NessunRedditoPercepito: "No",
        TotaleValoreRedditoAssistito: "999999.00",
        EstremiPensioneAssistito: "qqqqqqqqqqqq",
        NoteAssistito: "note anno 2018 bla bla bla",

        DettagliConiuge: [],
        DettagliAssistito: [
          {
            Tipologia:
              "4444Reddito da lavoro dipendente,lavoro autonomo,di impresa",
            Valore: "8868.00"
          },
          {
            Tipologia:
              "4444Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
            Valore: "11000.00"
          },
          {
            Tipologia: "4444Altri redditi da fabbricati",
            Valore: "763.00"
          }
        ]
      },
      {
        Anno: "2014",
        RedditoAssistito: "555555555.45",
        RedditoConiuge: "5555555.88",
        ValidoPerGliAnniSuccessivi: true,

        NessunRedditoPercepito: "No",
        TotaleValoreRedditoAssistito: "999999.00",
        EstremiPensioneAssistito: "qqqqqqqqqqqq",
        NoteAssistito: "note anno 2018 bla bla bla",

        DettagliConiuge: [],
        DettagliAssistito: [
          {
            Tipologia:
              "5555Reddito da lavoro dipendente,lavoro autonomo,di impresa",
            Valore: "8868.00"
          },
          {
            Tipologia:
              "5555Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
            Valore: "11000.00"
          },
          {
            Tipologia: "5555Altri redditi da fabbricati",
            Valore: "555763.00"
          }
        ]
      },
      {
        Anno: "2013",
        RedditoAssistito: "666666666.45",
        RedditoConiuge: "6666666.88",
        ValidoPerGliAnniSuccessivi: true,

        NessunRedditoPercepito: "No",
        TotaleValoreRedditoAssistito: "999999.00",
        EstremiPensioneAssistito: "qqqqqqqqqqqq",
        NoteAssistito: "note anno 2018 bla bla bla",

        DettagliConiuge: [],
        DettagliAssistito: [
          {
            Tipologia:
              "Reddito da lavoro dipendente,lavoro autonomo,di impresa",
            Valore: "8868.00"
          },
          {
            Tipologia:
              "Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
            Valore: "11000.00"
          },
          {
            Tipologia: "Altri redditi da fabbricati",
            Valore: "763.00"
          }
        ]
      },
      {
        Anno: "2012",
        RedditoAssistito: "77777777.45",
        RedditoConiuge: "7777777.88",
        ValidoPerGliAnniSuccessivi: true,

        NessunRedditoPercepito: "No",
        TotaleValoreRedditoAssistito: "999999.00",
        EstremiPensioneAssistito: "qqqqqqqqqqqq",
        NoteAssistito: "note anno 2018 bla bla bla",

        DettagliConiuge: [],
        DettagliAssistito: [
          {
            Tipologia:
              "66666Reddito da lavoro dipendente,lavoro autonomo,di impresa",
            Valore: "8868.00"
          },
          {
            Tipologia:
              "666666Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
            Valore: "11000.00"
          },
          {
            Tipologia: "66666Altri redditi da fabbricati",
            Valore: "763.00"
          }
        ]
      },
      {
        Anno: "2011",
        RedditoAssistito: "88888888.45",
        RedditoConiuge: "88888888.88",
        ValidoPerGliAnniSuccessivi: true,

        NessunRedditoPercepito: "No",
        TotaleValoreRedditoAssistito: "999999.00",
        EstremiPensioneAssistito: "qqqqqqqqqqqq",
        NoteAssistito: "note anno 2018 bla bla bla",

        DettagliConiuge: [],
        DettagliAssistito: [
          {
            Tipologia:
              "77777Reddito da lavoro dipendente,lavoro autonomo,di impresa",
            Valore: "8868.00"
          },
          {
            Tipologia:
              "77777Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
            Valore: "11000.00"
          },
          {
            Tipologia: "7777Altri redditi da fabbricati",
            Valore: "763.00"
          }
        ]
      },
      {
        Anno: "2010",
        RedditoAssistito: "9999999.45",
        RedditoConiuge: "999999.88",
        ValidoPerGliAnniSuccessivi: true,

        NessunRedditoPercepito: "No",
        TotaleValoreRedditoAssistito: "999999.00",
        EstremiPensioneAssistito: "qqqqqqqqqqqq",
        NoteAssistito: "note anno 2018 bla bla bla",

        DettagliConiuge: [],
        DettagliAssistito: [
          {
            Tipologia:
              "88888Reddito da lavoro dipendente,lavoro autonomo,di impresa",
            Valore: "8868.00"
          },
          {
            Tipologia:
              "88888Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
            Valore: "11000.00"
          },
          {
            Tipologia: "88888Altri redditi da fabbricati",
            Valore: "763.00"
          }
        ]
      }
    ],
    Indirizzi: [
      {
        Tipo: "Indirizzo abitazione",
        Indirizzo: "viale Giusti Antonia, 53 - 39100 Milano MI",
        Validita: "dal 01/01/2010 al 02/02/2011",

        Nazione: "Italia",
        Comune: "Napoli",
        Cap: "84092",
        Frazione: "aaaaa",
        Via: "aaaaaxxxxxxxxxx",
        Civico: "6",
        UsaIndirizzo: "No",
        Note: "fkjsaòldfkjasòkdfjaòkjòaldskjf"
      },
      {
        Tipo: "Indirizzo lavoro",
        Indirizzo: "viale Lavoro, 53 - 39100 Lavoro MI",
        Validita: "dal 01/01/2010 al 02/02/2014",

        Nazione: "Italia",
        Comune: "Napoli",
        Cap: "84092",
        Frazione: "aaaaa",
        Via: "aaaaaaaaaaxxxx",
        Civico: "6",
        UsaIndirizzo: "No",
        Note: "fkjsaòldfkjasòkdfjaòkjòaldskjf"
      },
      {
        Tipo: "Indirizzo secondario",
        Indirizzo: "viale Secondario, 53 - 39100 Secondo MI",
        Validita: "dal 01/01/2010 al 02/02/2011",

        Nazione: "Italia",
        Comune: "Napoli",
        Cap: "84092",
        Frazione: "xxxxxx",
        Via: "aaaaaxxxxxddxxxxx",
        Civico: "6",
        UsaIndirizzo: "No",
        Note: "fkjsaòldfkjasòkdfjaòkjòaldskjf"
      }
    ],
    Associazioni: [
      {
        NumPosizione: "111-778767",
        DataDomanda: "05/03/2011",
        TipoAssociazione: "ANMIC",
        InizioIscrizione: "02/04/2013",
        FineIscrizione: "",
        ElencoRitenuteDiCategoriaRecuperate: []
      },
      {
        NumPosizione: "111-993423",
        DataDomanda: "07/08/2012",
        TipoAssociazione: "UICI",
        InizioIscrizione: "07/08/2012",
        FineIscrizione: "07/08/2016",
        ElencoRitenuteDiCategoriaRecuperate: [
          {
            DataRecupero: "15/03/2014",
            ImportoRecuperato: "12349.00",
            Note:
              "1111111111111-Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
          }
        ]
      },
      {
        NumPosizione: "1111-376899",
        DataDomanda: "07/08/2011",
        TipoAssociazione: "ULMM",
        InizioIscrizione: "07/08/2014",
        FineIscrizione: "07/08/2017",
        ElencoRitenuteDiCategoriaRecuperate: [
          {
            DataRecupero: "01/03/2015",
            ImportoRecuperato: "1111111.00",
            Note:
              "111111111111111111 Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
          }
        ]
      }
    ],

    CognomeAcquisito: "Alfano Acquisito",
    StatoCivile: "Coniugata",
    ProvinciaDiNascita: "Milano",
    NazioneDiNascita: "Italia",
    Cittadinanza: "Italiana",
    Extracomunitario: "Si",

    PermessoDiSoggiornoTipoPermesso: "Lorem ipsum dolor",
    PermessoDiSoggiornoDataRilascio: "01/01/2020",
    PermessoDiSoggiornoValidoFinoAl: "01/01/2020",
    TelefonoPrincipale: "0461 912585",
    TelefonoSecondario: "0461 923452",
    Email: "mrossi@gmail.com",
    Pec: "mrossi@gmail.com",
    Note:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius purus tellus, ac auctor nibh dictum consequat"
  };
}

/**
 * Collega il controller al modulo inciso
 **/
angular
  .module("inciso")
  .controller("modalCreaNuovaAnagraficaCtrl", modalCreaNuovaAnagraficaCtrl);
