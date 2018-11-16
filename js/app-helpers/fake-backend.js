function setupFakeBackend($httpBackend) {
  // i file statici verranno serviti senza elaborazione
  $httpBackend.whenGET(/^\w+.*/).passThrough();
  // le views verranno servite senza elaborazione. Se i elimina la riga si hanno interferenze con gli stati di UI-ROUTER
  $httpBackend.whenGET(/views\/.*/).passThrough();
  $httpBackend.whenGET(/js\/.*/).passThrough();

  // ------------------------- LOGIN
  $httpBackend
    .whenPOST("/api/autenticazione/login")
    .respond(function(method, url, data, headers) {
      debugger;
      // get parameters from post request
      var params = angular.fromJson(data);

      if (params.username === "camillo" && params.password === "camillo") {
        return [
          200,
          {
            immagineUtente: "profile1",
            nome: "Camillo",
            cognome: "Alfano",
            ruolo: "Consulente",
            token: "token-di-Camillo"
          },
          {}
        ];
      } else if (params.username === "mario" && params.password === "mario") {
        return [
          200,
          {
            immagineUtente: "profile2",
            nome: "Mario",
            cognome: "Petta",
            ruolo: "Capo Progetto",
            token: "token-di-Mario"
          },
          {}
        ];
      } else if (params.username === "danilo" && params.password === "danilo") {
        return [
          200,
          {
            immagineUtente: "profile3",
            nome: "Danilo",
            cognome: "Romano",
            ruolo: "Analista",
            token: "token-di-Danilo"
          },
          {}
        ];
      } else {
        return [200, {}, {}];
      }
    });

  $httpBackend
    .whenPOST("/api/autenticazione/logout")
    .respond(function(method, url, data, headers) {
      debugger;
      // get parameters from post request
      var params = angular.fromJson(data);

      // da implementare
      return [200, {}, {}];
    });

  // ------------------------- ANAGRAFE

  $httpBackend
    .whenGET("/api/anagrafe/find")
    .respond(function(method, url, data, headers) {
      alert(data);
      debugger;
      // legge parametri
      var params = angular.fromJson(data);
      var response = tabella("ANAGRAFE");
      alert("find");
      debugger;
      return [200, response, {}];
    });

  $httpBackend
    .whenGET("/api/anagrafe/findPosizioni")
    .respond(function(method, url, data, headers) {
      alert(data);
      debugger;
      // legge parametri
      var params = angular.fromJson(data);
      var response = tabella("POSIZIONI");
      alert("find");
      debugger;
      return [200, response, {}];
    });

  $httpBackend
    .whenGET("/api/anagrafe/findcodfis")
    .respond(function(method, url, data, headers) {
      alert(data);
      debugger;
      // legge parametri
      var response = tabella("ANAGRAFE");
      var response2 = response.find(obj => {
        return obj.CodiceFiscale === data;
      });

      alert("findCodFis");
      debugger;
      return [200, response2, {}];
    });

  $httpBackend
    .whenPOST("/api/anagrafe/save")
    .respond(function(method, url, data, headers) {
      debugger;
      // get parameters from post request
      var params = angular.fromJson(data);

      var params = angular.fromJson(data);
      var response = tabella("ANAGRAFE");
      alert("save");
      debugger;
      return [200, response, {}];
    });

  // ------------------------- LIQUIDAZIONI

  $httpBackend
    .whenGET("/api/liquidazioni/find")
    .respond(function(method, url, data, headers) {
      alert(data);
      debugger;
      // legge parametri
      var params = angular.fromJson(data);
      var response = tabella("LIQUIDAZIONI");
      alert("find");
      debugger;
      return [200, response, {}];
    });

  $httpBackend
    .whenGET("/api/liquidazioni/findPosizioni")
    .respond(function(method, url, data, headers) {
      alert(data);
      debugger;
      // legge parametri
      var params = angular.fromJson(data);
      var response = tabella("POSIZIONI");
      alert("find");
      debugger;
      return [200, response, {}];
    });

  $httpBackend
    .whenGET("/api/liquidazioni/findcodfis")
    .respond(function(method, url, data, headers) {
      alert(data);
      debugger;
      // legge parametri
      var response = tabella("LIQUIDAZIONI");
      var response2 = response.find(obj => {
        return obj.CodiceFiscale === data;
      });

      alert("findCodFis");
      debugger;
      return [200, response2, {}];
    });

  $httpBackend
    .whenPOST("/api/liquidazioni/save")
    .respond(function(method, url, data, headers) {
      debugger;
      // get parameters from post request
      var params = angular.fromJson(data);

      var params = angular.fromJson(data);
      var response = tabella("LIQUIDAZIONI");
      alert("save");
      debugger;
      return [200, response, {}];
    });

  // ------------------------- TABELLE

  function tabella(cTipoTabella) {
    if (cTipoTabella.toUpperCase() === "ANAGRAFE") {
      var tabAnagrafe = [
        {
          CodiceFiscale: "LFNCLL60D03E026T",
          Cognome: "Alfano",
          Nome: "Camillo",
          DataDiNascita: "01/01/1930",
          Sesso: "F",
          LuogoDiNascita: "Bologna",
          Nazionalita: "Italiana",
          Residenza: "via Luigi Cadorna, 53 - 39100 Bolzano BZ",
          Domicilio: "via Armando Diaz, 2 - 39100 Bolzano BZ",
          AntriIndirizzi: "atro indirizzo qòlwekrjòlqwekjròlqwkjer",

          DataDiDecesso: "01/01/2010",
          Eredita: {
            NumeroFaldone: "3333333",
            AnnoDiScartoINCISO: "2018",
            DataCalcoloSimulazione: "01/01/2020",
            ImportoSpettante: "580000.39",
            Eredi: [
              {
                CognomeNome: "Paolo Bianchi",
                CodiceFiscale: "RSSMRA53A36Q2357",
                PercDiEredita: "50%",
                LiquidatoInBaseAllaPercDiEredita: "28400.00",
                Liquidazione: "30/06/2016"
              },
              {
                CognomeNome: "Marco Bianchi",
                CodiceFiscale: "RSSMRA53A36Q2357",
                PercDiEredita: "25%",
                LiquidatoInBaseAllaPercDiEredita: "14200.00",
                Liquidazione: "30/06/2016"
              },
              {
                CognomeNome: "Sara Bianchi",
                CodiceFiscale: "RSSMRA53A36Q5372",
                PercDiEredita: "15%",
                LiquidatoInBaseAllaPercDiEredita: "14200.00",
                Liquidazione: "30/06/2016"
              }
            ]
          },
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
          Pensioni: [
            {
              Tipo: "xxxxx xxxxxxx",
              TipologiaDiAssistenza: "77",
              DataFineCompatibilita: "01/01/01",
              Note: "eeqrtwtyre"
            },
            {
              Tipo: "yyyyy xxxxx xxxxxxx",
              TipologiaDiAssistenza: "77",
              DataFineCompatibilita: "01/01/01",
              Note: "eeqrtwtyre"
            },
            {
              Tipo: "yyyy xxxxx xxxxxxx",
              TipologiaDiAssistenza: "77",
              DataFineCompatibilita: "01/01/01",
              Note: "eeqrtwtyre"
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
          Liquidazioni: [
            {
              DataCalcolo: "01/01/2016",
              Liquidato: "864.00",
              Riaccredito: "864.00",
              TrattenutaDiCategoria: "6.00",
              ImportoRecuperatoPerCompensazione: null,
              NrTrasferimentoFlumo: {
                NrMandato: "32985432",
                Data: "12/07/2013"
              },
              TotMese: "1728.00",
              TotAnno: "1728.00"
            },
            {
              DataCalcolo: "01/02/2016",
              Liquidato: "864.00",
              Riaccredito: null,
              TrattenutaDiCategoria: "6.00",
              ImportoRecuperatoPerCompensazione: null,
              NrTrasferimentoFlumo: {
                NrMandato: "32985432",
                Data: "12/07/2013"
              },
              TotMese: "864.00",
              TotAnno: "2592.00"
            },
            {
              DataCalcolo: "01/03/2016",
              Liquidato: "320.25",
              Riaccredito: null,
              TrattenutaDiCategoria: "6.00",
              ImportoRecuperatoPerCompensazione: "108.75",
              NrTrasferimentoFlumo: {
                NrMandato: "32985432",
                Data: "12/07/2013"
              },
              TotMese: "320.25",
              TotAnno: "2912.25"
            }
          ],

          ElencoImportiRiaccreditati: [
            {
              DataRiaccredito: "18/11/2015",
              ImportoRiaccreditato: "864",
              DataLiquidazioneArretrato: "01/01/2016"
            },

            {
              DataRiaccredito: "18/11/2015",
              ImportoRiaccreditato: "111",
              DataLiquidazioneArretrato: "01/01/2016"
            }
          ],
          ElencoImportiDaRecuperare: [
            {
              DataUltimaModifica: "23/02/2016",
              TipoDiRecupero: "compensazione",
              TotDaRecuperare: {
                Capitale: "435.00",
                InteressiLegali: "8.7",
                InteressiDiRateizzazione: "4.35"
              },
              Recuperato: "108.75",
              Restituito: null,
              RimanenteDaRecuperare: "339.30",
              Note: "sda kpopoi pèoipèo dfhaklsdj lasdòlaf"
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
        },
        {
          CodiceFiscale: "RSSARO70A10F2052",
          Cognome: "Alfano",
          Nome: "Camillo",
          DataDiNascita: "01/01/1930",
          Sesso: "F",
          LuogoDiNascita: "Bologna",
          Nazionalita: "Italiana",
          Residenza: "via Luigi Cadorna, 53 - 39100 Bolzano BZ",
          Domicilio: "via Armando Diaz, 2 - 39100 Bolzano BZ",
          AntriIndirizzi: "atro indirizzo qòlwekrjòlqwekjròlqwkjer",

          DataDiDecesso: "-",
          Eredita: null,

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

          Pensioni: [
            {
              Tipo: "xxxxx xxxxxxx",
              TipologiaDiAssistenza: "77",
              DataFineCompatibilita: "01/01/01",
              Note: "eeqrtwtyre"
            },
            {
              Tipo: "yyyyy xxxxx xxxxxxx",
              TipologiaDiAssistenza: "77",
              DataFineCompatibilita: "01/01/01",
              Note: "eeqrtwtyre"
            },
            {
              Tipo: "yyyy xxxxx xxxxxxx",
              TipologiaDiAssistenza: "77",
              DataFineCompatibilita: "01/01/01",
              Note: "eeqrtwtyre"
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
              NumPosizione: "222-778767",
              DataDomanda: "22/03/2011",
              TipoAssociazione: "222-ANMIC",
              InizioIscrizione: "22/04/2013",
              FineIscrizione: "",
              ElencoRitenuteDiCategoriaRecuperate: []
            },
            {
              NumPosizione: "2222-993423",
              DataDomanda: "22/08/2012",
              TipoAssociazione: "222-UICI",
              InizioIscrizione: "07/08/2012",
              FineIscrizione: "07/08/2016",
              ElencoRitenuteDiCategoriaRecuperate: [
                {
                  DataRecupero: "22/03/2014",
                  ImportoRecuperato: "22222.00",
                  Note: "22222222222222222a quam venenatis vestibulum."
                }
              ]
            },
            {
              NumPosizione: "222222",
              DataDomanda: "07/08/2011",
              TipoAssociazione: "2-2ULMM",
              InizioIscrizione: "27/08/2014",
              FineIscrizione: "07/08/2017",
              ElencoRitenuteDiCategoriaRecuperate: [
                {
                  DataRecupero: "01/03/2015",
                  ImportoRecuperato: "12349.00",
                  Note:
                    "222222222lòkjòkljòlkjS leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
                }
              ]
            }
          ],
          Liquidazioni: [
            {
              DataCalcolo: "01/01/2016",
              Liquidato: "864.00",
              Riaccredito: "864.00",
              TrattenutaDiCategoria: "6.00",
              ImportoRecuperatoPerCompensazione: null,
              NrTrasferimentoFlumo: {
                NrMandato: "32985432",
                Data: "12/07/2013"
              },
              TotMese: "1728.00",
              TotAnno: "1728.00"
            },
            {
              DataCalcolo: "01/02/2016",
              Liquidato: "864.00",
              Riaccredito: null,
              TrattenutaDiCategoria: "6.00",
              ImportoRecuperatoPerCompensazione: null,
              NrTrasferimentoFlumo: {
                NrMandato: "32985432",
                Data: "12/07/2013"
              },
              TotMese: "864.00",
              TotAnno: "2592.00"
            },
            {
              DataCalcolo: "01/03/2016",
              Liquidato: "320.25",
              Riaccredito: null,
              TrattenutaDiCategoria: "6.00",
              ImportoRecuperatoPerCompensazione: "108.75",
              NrTrasferimentoFlumo: {
                NrMandato: "32985432",
                Data: "12/07/2013"
              },
              TotMese: "320.25",
              TotAnno: "2912.25"
            }
          ],

          ElencoImportiRiaccreditati: [
            {
              DataRiaccredito: "18/11/2015",
              ImportoRiaccreditato: "864",
              DataLiquidazioneArretrato: "01/01/2016"
            },

            {
              DataRiaccredito: "18/11/2015",
              ImportoRiaccreditato: "111",
              DataLiquidazioneArretrato: "01/01/2016"
            }
          ],
          ElencoImportiDaRecuperare: [
            {
              DataUltimaModifica: "23/02/2016",
              TipoDiRecupero: "compensazione",
              TotDaRecuperare: {
                Capitale: "435.00",
                InteressiLegali: "8.7",
                InteressiDiRateizzazione: "4.35"
              },
              Recuperato: "108.75",
              Restituito: null,
              RimanenteDaRecuperare: "339.30",
              Note: "sda kpopoi pèoipèo dfhaklsdj lasdòlaf"
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
        },
        {
          CodiceFiscale: "QTGSRO60A11Q2055",
          Cognome: "Hammond",
          Nome: "John",
          DataDiNascita: "01/01/1970",

          Sesso: "F",
          LuogoDiNascita: "Bologna",
          Nazionalita: "Italiana",
          Residenza: "via Luigi Cadorna, 53 - 39100 Bolzano BZ",
          Domicilio: "via Armando Diaz, 2 - 39100 Bolzano BZ",
          AntriIndirizzi: "indirizzo di prova qòlwekrjòlqwekjròlqwkjer",

          DataDiDecesso: "01/01/1990",
          Eredita: {
            NumeroFaldone: "3333333",
            AnnoDiScartoINCISO: "2018",

            DataCalcoloSimulazione: "01/01/2020",
            ImportoSpettante: "580000.39",
            Eredi: [
              {
                CognomeNome: "Paolo Bianchi",
                CodiceFiscale: "RSSMRA53A36Q2357",
                PercDiEredita: "50%",
                LiquidatoInBaseAllaPercDiEredita: "28400.00",
                Liquidazione: "30/06/2016"
              },
              {
                CognomeNome: "Marco Bianchi",
                CodiceFiscale: "RSSMRA53A36Q2357",
                PercDiEredita: "25%",
                LiquidatoInBaseAllaPercDiEredita: "14200.00",
                Liquidazione: "30/06/2016"
              },
              {
                CognomeNome: "Sara Bianchi",
                CodiceFiscale: "RSSMRA53A36Q5372",
                PercDiEredita: "15%",
                LiquidatoInBaseAllaPercDiEredita: "14200.00",
                Liquidazione: "30/06/2016"
              }
            ]
          },

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

          Pensioni: [
            {
              Tipo: "xxxxx xxxxxxx",
              TipologiaDiAssistenza: "77",
              DataFineCompatibilita: "01/01/01",
              Note: "eeqrtwtyre"
            },
            {
              Tipo: "yyyyy xxxxx xxxxxxx",
              TipologiaDiAssistenza: "77",
              DataFineCompatibilita: "01/01/01",
              Note: "eeqrtwtyre"
            },
            {
              Tipo: "yyyy xxxxx xxxxxxx",
              TipologiaDiAssistenza: "77",
              DataFineCompatibilita: "01/01/01",
              Note: "eeqrtwtyre"
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
              Frazione: "11111111",
              Via: "111111111111",
              Civico: "6",
              UsaIndirizzo: "No",
              Note:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              Tipo: "Indirizzo lavoro",
              Indirizzo: "viale Lavoro, 53 - 39100 Lavoro MI",
              Validita: "dal 01/01/2010 al 02/02/2014",

              Nazione: "Italia",
              Comune: "Napoli",
              Cap: "84092",
              Frazione: "2222222",
              Via: "22222222222222",
              Civico: "6",
              UsaIndirizzo: "No",
              Note:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              Tipo: "Indirizzo secondario",
              Indirizzo: "viale Secondario, 53 - 39100 Secondo MI",
              Validita: "dal 01/01/2010 al 02/02/2011",

              Nazione: "Italia",
              Comune: "Napoli",
              Cap: "84092",
              Frazione: "3333333",
              Via: "3333333333333333",
              Civico: "6",
              UsaIndirizzo: "No",
              Note:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            }
          ],
          Associazioni: [
            {
              NumPosizione: "333333",
              DataDomanda: "05/03/2011",
              TipoAssociazione: "3333ANMIC",
              InizioIscrizione: "02/04/2013",
              FineIscrizione: "",
              ElencoRitenuteDiCategoriaRecuperate: []
            },
            {
              NumPosizione: "333333",
              DataDomanda: "07/08/2012",
              TipoAssociazione: "33333UICI",
              InizioIscrizione: "07/08/2012",
              FineIscrizione: "07/08/2016",
              ElencoRitenuteDiCategoriaRecuperate: [
                {
                  DataRecupero: "15/03/2014",
                  ImportoRecuperato: "33333.00",
                  Note:
                    "3333333333333hlkjhlkjhlkjhlkjh. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
                }
              ]
            },
            {
              NumPosizione: "345467",
              DataDomanda: "07/09/2019",
              TipoAssociazione: "ULMM",
              InizioIscrizione: "07/08/2014",
              FineIscrizione: "07/08/2017",
              ElencoRitenuteDiCategoriaRecuperate: [
                {
                  DataRecupero: "01/03/2015",
                  ImportoRecuperato: "33312349.00",
                  Note: "3333333333333333acinia quam venenatis vestibulum."
                }
              ]
            }
          ],
          Liquidazioni: [
            {
              DataCalcolo: "01/01/2016",
              Liquidato: "864.00",
              Riaccredito: "864.00",
              TrattenutaDiCategoria: "6.00",
              ImportoRecuperatoPerCompensazione: null,
              NrTrasferimentoFlumo: {
                NrMandato: "32985432",
                Data: "12/07/2013"
              },
              TotMese: "1728.00",
              TotAnno: "1728.00"
            },
            {
              DataCalcolo: "01/02/2016",
              Liquidato: "864.00",
              Riaccredito: null,
              TrattenutaDiCategoria: "6.00",
              ImportoRecuperatoPerCompensazione: null,
              NrTrasferimentoFlumo: {
                NrMandato: "32985432",
                Data: "12/07/2013"
              },
              TotMese: "864.00",
              TotAnno: "2592.00"
            },
            {
              DataCalcolo: "01/03/2016",
              Liquidato: "320.25",
              Riaccredito: null,
              TrattenutaDiCategoria: "6.00",
              ImportoRecuperatoPerCompensazione: "108.75",
              NrTrasferimentoFlumo: {
                NrMandato: "32985432",
                Data: "12/07/2013"
              },
              TotMese: "320.25",
              TotAnno: "2912.25"
            }
          ],

          ElencoImportiRiaccreditati: [
            {
              DataRiaccredito: "18/11/2015",
              ImportoRiaccreditato: "864",
              DataLiquidazioneArretrato: "01/01/2016"
            },

            {
              DataRiaccredito: "18/11/2015",
              ImportoRiaccreditato: "111",
              DataLiquidazioneArretrato: "01/01/2016"
            }
          ],
          ElencoImportiDaRecuperare: [
            {
              DataUltimaModifica: "23/02/2016",
              TipoDiRecupero: "compensazione",
              TotDaRecuperare: {
                Capitale: "435.00",
                InteressiLegali: "8.7",
                InteressiDiRateizzazione: "4.35"
              },
              Recuperato: "108.75",
              Restituito: null,
              RimanenteDaRecuperare: "339.30",
              Note: "sda kpopoi pèoipèo dfhaklsdj lasdòlaf"
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
        },
        {
          CodiceFiscale: "RTSDRO70A10W2056",
          Cognome: "Mudassar",
          Nome: "Khan",
          DataDiNascita: "01/02/1650",
          Sesso: "F",
          LuogoDiNascita: "Bolzano",
          Nazionalita: "Inglese",
          Residenza: "via Carlo Alberto della Chiesa, 53 - 39100 Milano BZ",
          Domicilio: "via Giocchino Diaz, 2 - 39100 Bolzano BZ",
          AntriIndirizzi: "qò lwe k rj ò lqwekjròlqwkjer",

          DataDiDecesso: "01/01/1930",
          Eredita: {
            NumeroFaldone: "333313454",
            AnnoDiScartoINCISO: "2015",

            DataCalcoloSimulazione: "11/11/2021",
            ImportoSpettante: "580000.39",
            Eredi: [
              {
                CognomeNome: "gIUSEPPE Bianchi-4444",
                CodiceFiscale: "RSSMRA53A36Q2357",
                PercDiEredita: "50%",
                LiquidatoInBaseAllaPercDiEredita: "28400.00",
                Liquidazione: "30/06/2017"
              },
              {
                CognomeNome: "Marco Bianchi",
                CodiceFiscale: "RSSMRA53A36Q2357",
                PercDiEredita: "5%",
                LiquidatoInBaseAllaPercDiEredita: "14200.00",
                Liquidazione: "30/06/2016"
              },
              {
                CognomeNome: "SaSSSSra Bianchi",
                CodiceFiscale: "RSSMRA53A36Q5372",
                PercDiEredita: "5%",
                LiquidatoInBaseAllaPercDiEredita: "14200.00",
                Liquidazione: "30/06/2016"
              }
            ]
          },

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

          Pensioni: [
            {
              Tipo: "xxxxx xxxxxxx",
              TipologiaDiAssistenza: "77",
              DataFineCompatibilita: "01/01/01",
              Note: "eeqrtwtyre"
            },
            {
              Tipo: "yyyyy xxxxx xxxxxxx",
              TipologiaDiAssistenza: "77",
              DataFineCompatibilita: "01/01/01",
              Note: "eeqrtwtyre"
            },
            {
              Tipo: "yyyy xxxxx xxxxxxx",
              TipologiaDiAssistenza: "77",
              DataFineCompatibilita: "01/01/01",
              Note: "eeqrtwtyre"
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
              Frazione: "12132",
              Via: "41234232",
              Civico: "6",
              UsaIndirizzo: "No",
              Note:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              Tipo: "Indirizzo lavoro",
              Indirizzo: "viale Lavoro, 53 - 39100 Lavoro MI",
              Validita: "dal 01/01/2010 al 02/02/2014",

              Nazione: "Italia",
              Comune: "Napoli",
              Cap: "84092",
              Frazione: "333333",
              Via: "12313413",
              Civico: "6",
              UsaIndirizzo: "No",
              Note:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              Tipo: "Indirizzo secondario",
              Indirizzo: "viale Secondario, 53 - 39100 Secondo MI",
              Validita: "dal 01/01/2010 al 02/02/2011",

              Nazione: "Italia",
              Comune: "Napoli",
              Cap: "84092",
              Frazione: "xxx222",
              Via: "xxx223242121x",
              Civico: "6",
              UsaIndirizzo: "No",
              Note:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            }
          ],
          Associazioni: [
            {
              NumPosizione: "778767",
              DataDomanda: "05/03/2011",
              TipoAssociazione: "ANMIC",
              InizioIscrizione: "02/04/2013",
              FineIscrizione: "",
              ElencoRitenuteDiCategoriaRecuperate: []
            },
            {
              NumPosizione: "993423",
              DataDomanda: "07/08/2012",
              TipoAssociazione: "UICI",
              InizioIscrizione: "07/08/2012",
              FineIscrizione: "07/08/2016",
              ElencoRitenuteDiCategoriaRecuperate: [
                {
                  DataRecupero: "15/03/2014",
                  ImportoRecuperato: "12349.00",
                  Note:
                    "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
                }
              ]
            },
            {
              NumPosizione: "444444444",
              DataDomanda: "04/08/2014",
              TipoAssociazione: "ULMM",
              InizioIscrizione: "04/08/2014",
              FineIscrizione: "04/08/2014",
              ElencoRitenuteDiCategoriaRecuperate: [
                {
                  DataRecupero: "01/03/2015",
                  ImportoRecuperato: "444444.00",
                  Note:
                    "44444444 kjòlkjòlkjòlkjl   u leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
                }
              ]
            }
          ],
          Liquidazioni: [
            {
              DataCalcolo: "01/01/2016",
              Liquidato: "864.00",
              Riaccredito: "864.00",
              TrattenutaDiCategoria: "6.00",
              ImportoRecuperatoPerCompensazione: null,
              NrTrasferimentoFlumo: {
                NrMandato: "32985432",
                Data: "12/07/2013"
              },
              TotMese: "1728.00",
              TotAnno: "1728.00"
            },
            {
              DataCalcolo: "01/02/2016",
              Liquidato: "864.00",
              Riaccredito: null,
              TrattenutaDiCategoria: "6.00",
              ImportoRecuperatoPerCompensazione: null,
              NrTrasferimentoFlumo: {
                NrMandato: "32985432",
                Data: "12/07/2013"
              },
              TotMese: "864.00",
              TotAnno: "2592.00"
            },
            {
              DataCalcolo: "01/03/2016",
              Liquidato: "320.25",
              Riaccredito: null,
              TrattenutaDiCategoria: "6.00",
              ImportoRecuperatoPerCompensazione: "108.75",
              NrTrasferimentoFlumo: {
                NrMandato: "32985432",
                Data: "12/07/2013"
              },
              TotMese: "320.25",
              TotAnno: "2912.25"
            }
          ],

          ElencoImportiRiaccreditati: [
            {
              DataRiaccredito: "18/11/2015",
              ImportoRiaccreditato: "864",
              DataLiquidazioneArretrato: "01/01/2016"
            },

            {
              DataRiaccredito: "18/11/2015",
              ImportoRiaccreditato: "111",
              DataLiquidazioneArretrato: "01/01/2016"
            }
          ],
          ElencoImportiDaRecuperare: [
            {
              DataUltimaModifica: "23/02/2016",
              TipoDiRecupero: "compensazione",
              TotDaRecuperare: {
                Capitale: "435.00",
                InteressiLegali: "8.7",
                InteressiDiRateizzazione: "4.35"
              },
              Recuperato: "108.75",
              Restituito: null,
              RimanenteDaRecuperare: "339.30",
              Note: "sda kpopoi pèoipèo dfhaklsdj lasdòlaf"
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
          Email: "mrossi111@gmail.com",
          Pec: "mrossi@gmail.com",
          Note:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius purus tellus, ac auctor nibh dictum consequat"
        },
        {
          CodiceFiscale: "VSYFRO70A10E2652",
          Cognome: "Mathews",
          Nome: "Suzanne",
          DataDiNascita: "01/01/1966",
          Sesso: "F",
          LuogoDiNascita: "Bologna",
          Nazionalita: "Italiana",
          Residenza: "via Luigi Venezia, 53 - 39100 Bolzano CT",
          Domicilio: "via Venezia Diaz, 2 - 39100 Bolzano VE",
          AntriIndirizzi: "qòlwek rjòlq wekjròlqwkjer",

          DataDiDecesso: "-",
          Eredita: null,

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

          Pensioni: [
            {
              Tipo: "xxxxx xxxxxxx",
              TipologiaDiAssistenza: "77",
              DataFineCompatibilita: "01/01/01",
              Note: "eeqrtwtyre"
            },
            {
              Tipo: "yyyyy xxxxx xxxxxxx",
              TipologiaDiAssistenza: "77",
              DataFineCompatibilita: "01/01/01",
              Note: "eeqrtwtyre"
            },
            {
              Tipo: "yyyy xxxxx xxxxxxx",
              TipologiaDiAssistenza: "77",
              DataFineCompatibilita: "01/01/01",
              Note: "eeqrtwtyre"
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
              Frazione: "33333333",
              Via: "33xxxxxxxxx",
              Civico: "6",
              UsaIndirizzo: "No",
              Note:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              Tipo: "Indirizzo lavoro",
              Indirizzo: "viale Lavoro, 53 - 39100 Lavoro MI",
              Validita: "dal 01/01/2010 al 02/02/2014",

              Nazione: "Italia",
              Comune: "Napoli",
              Cap: "84092",
              Frazione: "x23421xxxxx",
              Via: "x241342xxx",
              Civico: "6",
              UsaIndirizzo: "No",
              Note:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              Tipo: "Indirizzo secondario",
              Indirizzo: "viale Secondario, 53 - 39100 Secondo MI",
              Validita: "dal 01/01/2010 al 02/02/2011",

              Nazione: "Italia",
              Comune: "Napoli",
              Cap: "84092",
              Frazione: "x212xxxxx",
              Via: "2232xxxxxxx",
              Civico: "6",
              UsaIndirizzo: "No",
              Note:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            }
          ],
          Associazioni: [
            {
              NumPosizione: "555767",
              DataDomanda: "05/03/2011",
              TipoAssociazione: "ANMIC",
              InizioIscrizione: "02/04/2013",
              FineIscrizione: "",
              ElencoRitenuteDiCategoriaRecuperate: []
            },
            {
              NumPosizione: "993555",
              DataDomanda: "07/08/2012",
              TipoAssociazione: "UICI",
              InizioIscrizione: "07/08/2012",
              FineIscrizione: "07/08/2016",
              ElencoRitenuteDiCategoriaRecuperate: [
                {
                  DataRecupero: "15/03/2014",
                  ImportoRecuperato: "12349.00",
                  Note:
                    "Sed posuere co5555555555555        esque ornare sem lacinia quam venenatis vestibulum."
                }
              ]
            },
            {
              NumPosizione: "555555",
              DataDomanda: "07/08/2015",
              TipoAssociazione: "5555-ULMM",
              InizioIscrizione: "05/05/2014",
              FineIscrizione: "05/05/2017",
              ElencoRitenuteDiCategoriaRecuperate: [
                {
                  DataRecupero: "05/05/2015",
                  ImportoRecuperato: "12349.00",
                  Note:
                    "Sed posuere co5555555555555 nsectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
                }
              ]
            }
          ],
          Liquidazioni: [
            {
              DataCalcolo: "01/01/2016",
              Liquidato: "864.00",
              Riaccredito: "864.00",
              TrattenutaDiCategoria: "6.00",
              ImportoRecuperatoPerCompensazione: null,
              NrTrasferimentoFlumo: {
                NrMandato: "32985432",
                Data: "12/07/2013"
              },
              TotMese: "1728.00",
              TotAnno: "1728.00"
            },
            {
              DataCalcolo: "01/02/2016",
              Liquidato: "864.00",
              Riaccredito: null,
              TrattenutaDiCategoria: "6.00",
              ImportoRecuperatoPerCompensazione: null,
              NrTrasferimentoFlumo: {
                NrMandato: "32985432",
                Data: "12/07/2013"
              },
              TotMese: "864.00",
              TotAnno: "2592.00"
            },
            {
              DataCalcolo: "01/03/2016",
              Liquidato: "320.25",
              Riaccredito: null,
              TrattenutaDiCategoria: "6.00",
              ImportoRecuperatoPerCompensazione: "108.75",
              NrTrasferimentoFlumo: {
                NrMandato: "32985432",
                Data: "12/07/2013"
              },
              TotMese: "320.25",
              TotAnno: "2912.25"
            }
          ],

          ElencoImportiRiaccreditati: [
            {
              DataRiaccredito: "18/11/2015",
              ImportoRiaccreditato: "864",
              DataLiquidazioneArretrato: "01/01/2016"
            },

            {
              DataRiaccredito: "18/11/2015",
              ImportoRiaccreditato: "111",
              DataLiquidazioneArretrato: "01/01/2016"
            }
          ],
          ElencoImportiDaRecuperare: [
            {
              DataUltimaModifica: "23/02/2016",
              TipoDiRecupero: "compensazione",
              TotDaRecuperare: {
                Capitale: "435.00",
                InteressiLegali: "8.7",
                InteressiDiRateizzazione: "4.35"
              },
              Recuperato: "108.75",
              Restituito: null,
              RimanenteDaRecuperare: "339.30",
              Note: "sda kpopoi pèoipèo dfhaklsdj lasdòlaf"
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
          Email: "mrossi111@gmail.com",
          Pec: "mrossi@gmail.com",
          Note:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius purus tellus, ac auctor nibh dictum consequat"
        },
        {
          CodiceFiscale: "WSSGRO70A10T2066",
          Cognome: "Schidner",
          Nome: "Robert",
          DataDiNascita: "01/04/1950",
          Sesso: "M",
          LuogoDiNascita: "Roma",
          Nazionalita: "Italiana",
          Residenza: "via dell'Albergo Murat, 53 - 89112 Roma RM",
          Domicilio: "via Bellini Diaz, 2 - 84094 Roma RM",
          AntriIndirizzi: "qòlwekrjòlqw ekjròl qwkjer",

          DataDiDecesso: "01/01/1930",
          Eredita: {
            NumeroFaldone: "3345333333",
            AnnoDiScartoINCISO: "2016",

            DataCalcoloSimulazione: "01/01/2020",
            ImportoSpettanteEredita: "480000.39",
            Eredi: [
              {
                CognomeNome: "Paolo Bianchi-1111",
                CodiceFiscale: "RSSMRA53A36Q2357",
                PercDiEredita: "5%",
                LiquidatoInBaseAllaPercDiEredita: "2118400.00",
                Liquidazione: "30/06/2014"
              },
              {
                CognomeNome: "Marc00o Bianchi",
                CodiceFiscale: "RSSMRA53A36Q2357",
                PercDiEredita: "5%",
                LiquidatoInBaseAllaPercDiEredita: "14200.00",
                Liquidazione: "30/06/2016"
              },
              {
                CognomeNome: "SaAAAra Bianchi",
                CodiceFiscale: "RSSMRA53A36Q5372",
                PercDiEredita: "15%",
                LiquidatoInBaseAllaPercDiEredita: "114200.00",
                Liquidazione: "30/06/2016"
              }
            ]
          },

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

          Pensioni: [
            {
              Tipo: "xxxxx xxxxxxx",
              TipologiaDiAssistenza: "77",
              DataFineCompatibilita: "01/01/01",
              Note: "eeqrtwtyre"
            },
            {
              Tipo: "yyyyy xxxxx xxxxxxx",
              TipologiaDiAssistenza: "77",
              DataFineCompatibilita: "01/01/01",
              Note: "eeqrtwtyre"
            },
            {
              Tipo: "yyyy xxxxx xxxxxxx",
              TipologiaDiAssistenza: "77",
              DataFineCompatibilita: "01/01/01",
              Note: "eeqrtwtyre"
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
              Frazione: "11111",
              Via: "2222222222",
              Civico: "6",
              UsaIndirizzo: "No",
              Note:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              Tipo: "Indirizzo lavoro",
              Indirizzo: "viale Lavoro, 53 - 39100 Lavoro MI",
              Validita: "dal 01/01/2010 al 02/02/2014",

              Nazione: "Italia",
              Comune: "Napoli",
              Cap: "84092",
              Frazione: "444444",
              Via: "xxxxx444444444",
              Civico: "6",
              UsaIndirizzo: "No",
              Note:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              Tipo: "Indirizzo secondario",
              Indirizzo: "viale Secondario, 53 - 39100 Secondo MI",
              Validita: "dal 01/01/2010 al 02/02/2011",

              Nazione: "Italia",
              Comune: "Napoli",
              Cap: "84092",
              Frazione: "xx5555x",
              Via: "xx555555555",
              Civico: "6",
              UsaIndirizzo: "No",
              Note:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            }
          ],
          Associazioni: [
            {
              NumPosizione: "666666778767",
              DataDomanda: "05/03/2011",
              TipoAssociazione: "ANMIC",
              InizioIscrizione: "02/04/2013",
              FineIscrizione: "",
              ElencoRitenuteDiCategoriaRecuperate: []
            },
            {
              NumPosizione: "99366666423",
              DataDomanda: "07/08/2012",
              TipoAssociazione: "UICI",
              InizioIscrizione: "07/08/2012",
              FineIscrizione: "07/08/2016",
              ElencoRitenuteDiCategoriaRecuperate: [
                {
                  DataRecupero: "15/03/2014",
                  ImportoRecuperato: "12349.00",
                  Note:
                    "Sed posuere cons6666666666ectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
                }
              ]
            },
            {
              NumPosizione: "376899",
              DataDomanda: "07/08/2011",
              TipoAssociazione: "ULMM",
              InizioIscrizione: "07/08/2014",
              FineIscrizione: "07/08/2017",
              ElencoRitenuteDiCategoriaRecuperate: [
                {
                  DataRecupero: "01/03/2015",
                  ImportoRecuperato: "12666666.00",
                  Note:
                    "Sed posuere consectetur e6666 66666 66666 66666 6666 inia quam venenatis vestibulum."
                }
              ]
            }
          ],
          Liquidazioni: [
            {
              DataCalcolo: "01/01/2016",
              Liquidato: "864.00",
              Riaccredito: "864.00",
              TrattenutaDiCategoria: "6.00",
              ImportoRecuperatoPerCompensazione: null,
              NrTrasferimentoFlumo: {
                NrMandato: "32985432",
                Data: "12/07/2013"
              },
              TotMese: "1728.00",
              TotAnno: "1728.00"
            },
            {
              DataCalcolo: "01/02/2016",
              Liquidato: "864.00",
              Riaccredito: null,
              TrattenutaDiCategoria: "6.00",
              ImportoRecuperatoPerCompensazione: null,
              NrTrasferimentoFlumo: {
                NrMandato: "32985432",
                Data: "12/07/2013"
              },
              TotMese: "864.00",
              TotAnno: "2592.00"
            },
            {
              DataCalcolo: "01/03/2016",
              Liquidato: "320.25",
              Riaccredito: null,
              TrattenutaDiCategoria: "6.00",
              ImportoRecuperatoPerCompensazione: "108.75",
              NrTrasferimentoFlumo: {
                NrMandato: "32985432",
                Data: "12/07/2013"
              },
              TotMese: "320.25",
              TotAnno: "2912.25"
            }
          ],

          ElencoImportiRiaccreditati: [
            {
              DataRiaccredito: "18/11/2015",
              ImportoRiaccreditato: "864",
              DataLiquidazioneArretrato: "01/01/2016"
            },

            {
              DataRiaccredito: "18/11/2015",
              ImportoRiaccreditato: "111",
              DataLiquidazioneArretrato: "01/01/2016"
            }
          ],
          ElencoImportiDaRecuperare: [
            {
              DataUltimaModifica: "23/02/2016",
              TipoDiRecupero: "compensazione",
              TotDaRecuperare: {
                Capitale: "435.00",
                InteressiLegali: "8.7",
                InteressiDiRateizzazione: "4.35"
              },
              Recuperato: "108.75",
              Restituito: null,
              RimanenteDaRecuperare: "339.30",
              Note: "sda kpopoi pèoipèo dfhaklsdj lasdòlaf"
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
          TelefonoSecondario: "0123 456789",
          Email: "mrossi222@gmail.com",
          Pec: "mrossi@gmail.com",
          Note:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius purus tellus, ac auctor nibh dictum consequat"
        },
        {
          CodiceFiscale: "1234567890123456",
          Cognome: "Alfano-1111",
          Nome: "Camillo-1111",
          DataDiNascita: "01/01/1930",
          Sesso: "F",
          LuogoDiNascita: "Bolzano-11",
          Nazionalita: "Italiana",
          Residenza: "via Giocchino Murat, 53 - 89112 Roma RM",
          Domicilio: "via Armando Diaz, 2 - 84094 Roma RM",
          AntriIndirizzi: "indirizzo straniero 1 wekjròlqwkjer",
          DataDiDecesso: "-",
          Eredita: null,

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

          Pensioni: [
            {
              Tipo: "xxxxx xxxxxxx",
              TipologiaDiAssistenza: "77",
              DataFineCompatibilita: "01/01/01",
              Note: "eeqrtwtyre"
            },
            {
              Tipo: "yyyyy xxxxx xxxxxxx",
              TipologiaDiAssistenza: "77",
              DataFineCompatibilita: "01/01/01",
              Note: "eeqrtwtyre"
            },
            {
              Tipo: "yyyy xxxxx xxxxxxx",
              TipologiaDiAssistenza: "77",
              DataFineCompatibilita: "01/01/01",
              Note: "eeqrtwtyre"
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
              Via: "xxxxxxxxxxxxxxxx",
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
              Frazione: "xxxxxx",
              Via: "xxxxxxaaaaaxxxx",
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
              Frazione: "aaaaa",
              Via: "xxxxxxxxxxxxxxxx",
              Civico: "6",
              UsaIndirizzo: "No",
              Note: "fkjsaòldfkjasòkdfjaòkjòaldskjf"
            }
          ],
          Associazioni: [
            {
              NumPosizione: "778767",
              DataDomanda: "05/03/2011",
              TipoAssociazione: "ANMIC",
              InizioIscrizione: "02/04/2013",
              FineIscrizione: "",
              ElencoRitenuteDiCategoriaRecuperate: []
            },
            {
              NumPosizione: "993423",
              DataDomanda: "07/08/2012",
              TipoAssociazione: "UICI",
              InizioIscrizione: "07/08/2012",
              FineIscrizione: "07/08/2016",
              ElencoRitenuteDiCategoriaRecuperate: [
                {
                  DataRecupero: "15/03/2014",
                  ImportoRecuperato: "12349.00",
                  Note:
                    "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
                }
              ]
            },
            {
              NumPosizione: "376899",
              DataDomanda: "07/08/2011",
              TipoAssociazione: "ULMM",
              InizioIscrizione: "07/08/2014",
              FineIscrizione: "07/08/2017",
              ElencoRitenuteDiCategoriaRecuperate: [
                {
                  DataRecupero: "01/03/2015",
                  ImportoRecuperato: "12349.00",
                  Note:
                    "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
                }
              ]
            }
          ],
          Liquidazioni: [
            {
              DataCalcolo: "01/01/2016",
              Liquidato: "864.00",
              Riaccredito: "864.00",
              TrattenutaDiCategoria: "6.00",
              ImportoRecuperatoPerCompensazione: null,
              NrTrasferimentoFlumo: {
                NrMandato: "32985432",
                Data: "12/07/2013"
              },
              TotMese: "1728.00",
              TotAnno: "1728.00"
            },
            {
              DataCalcolo: "01/02/2016",
              Liquidato: "864.00",
              Riaccredito: null,
              TrattenutaDiCategoria: "6.00",
              ImportoRecuperatoPerCompensazione: null,
              NrTrasferimentoFlumo: {
                NrMandato: "32985432",
                Data: "12/07/2013"
              },
              TotMese: "864.00",
              TotAnno: "2592.00"
            },
            {
              DataCalcolo: "01/03/2016",
              Liquidato: "320.25",
              Riaccredito: null,
              TrattenutaDiCategoria: "6.00",
              ImportoRecuperatoPerCompensazione: "108.75",
              NrTrasferimentoFlumo: {
                NrMandato: "32985432",
                Data: "12/07/2013"
              },
              TotMese: "320.25",
              TotAnno: "2912.25"
            }
          ],

          ElencoImportiRiaccreditati: [
            {
              DataRiaccredito: "18/11/2015",
              ImportoRiaccreditato: "864",
              DataLiquidazioneArretrato: "01/01/2016"
            },

            {
              DataRiaccredito: "18/11/2015",
              ImportoRiaccreditato: "111",
              DataLiquidazioneArretrato: "01/01/2016"
            }
          ],
          ElencoImportiDaRecuperare: [
            {
              DataUltimaModifica: "23/02/2016",
              TipoDiRecupero: "compensazione",
              TotDaRecuperare: {
                Capitale: "435.00",
                InteressiLegali: "8.7",
                InteressiDiRateizzazione: "4.35"
              },
              Recuperato: "108.75",
              Restituito: null,
              RimanenteDaRecuperare: "339.30",
              Note: "sda kpopoi pèoipèo dfhaklsdj lasdòlaf"
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
          Email: "mrossi333@gmail.com",
          Pec: "mrossi@gmail.com",
          Note:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius purus tellus, ac auctor nibh dictum consequat"
        },
        {
          CodiceFiscale: "3456735790GHJDAE",
          Cognome: "Hammond222222",
          Nome: "John22",
          DataDiNascita: "01/01/1970",
          Sesso: "F",
          LuogoDiNascita: "Bologna 2",
          Nazionalita: "Italiana",
          Residenza: "via Luigi Belli, 53 - 39100 Bolzano BZ",
          Domicilio: "via Diaz Armandino, 2 - 39100 Bolzano BZ",
          AntriIndirizzi: "indirizzo belga qòlwekrjòlqwekjròlqwkjer",

          DataDiDecesso: "-",
          Eredita: null,

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

          Pensioni: [
            {
              Tipo: "xxxxx xxxxxxx",
              TipologiaDiAssistenza: "77",
              DataFineCompatibilita: "01/01/01",
              Note: "eeqrtwtyre"
            },
            {
              Tipo: "yyyyy xxxxx xxxxxxx",
              TipologiaDiAssistenza: "77",
              DataFineCompatibilita: "01/01/01",
              Note: "eeqrtwtyre"
            },
            {
              Tipo: "yyyy xxxxx xxxxxxx",
              TipologiaDiAssistenza: "77",
              DataFineCompatibilita: "01/01/01",
              Note: "eeqrtwtyre"
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
              Frazione: "11111111",
              Via: "111111111111",
              Civico: "6",
              UsaIndirizzo: "No",
              Note:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              Tipo: "Indirizzo lavoro",
              Indirizzo: "viale Lavoro, 53 - 39100 Lavoro MI",
              Validita: "dal 01/01/2010 al 02/02/2014",

              Nazione: "Italia",
              Comune: "Napoli",
              Cap: "84092",
              Frazione: "2222222",
              Via: "22222222222222",
              Civico: "6",
              UsaIndirizzo: "No",
              Note:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              Tipo: "Indirizzo secondario",
              Indirizzo: "viale Secondario, 53 - 39100 Secondo MI",
              Validita: "dal 01/01/2010 al 02/02/2011",

              Nazione: "Italia",
              Comune: "Napoli",
              Cap: "84092",
              Frazione: "3333333",
              Via: "3333333333333333",
              Civico: "6",
              UsaIndirizzo: "No",
              Note:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            }
          ],
          Associazioni: [
            {
              NumPosizione: "778767",
              DataDomanda: "05/03/2011",
              TipoAssociazione: "ANMIC",
              InizioIscrizione: "02/04/2013",
              FineIscrizione: "",
              ElencoRitenuteDiCategoriaRecuperate: []
            },
            {
              NumPosizione: "993423",
              DataDomanda: "07/08/2012",
              TipoAssociazione: "UICI",
              InizioIscrizione: "07/08/2012",
              FineIscrizione: "07/08/2016",
              ElencoRitenuteDiCategoriaRecuperate: [
                {
                  DataRecupero: "15/03/2014",
                  ImportoRecuperato: "12349.00",
                  Note:
                    "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
                }
              ]
            },
            {
              NumPosizione: "376899",
              DataDomanda: "07/08/2011",
              TipoAssociazione: "ULMM",
              InizioIscrizione: "07/08/2014",
              FineIscrizione: "07/08/2017",
              ElencoRitenuteDiCategoriaRecuperate: [
                {
                  DataRecupero: "01/03/2015",
                  ImportoRecuperato: "12349.00",
                  Note:
                    "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
                }
              ]
            }
          ],
          Liquidazioni: [
            {
              DataCalcolo: "01/01/2016",
              Liquidato: "864.00",
              Riaccredito: "864.00",
              TrattenutaDiCategoria: "6.00",
              ImportoRecuperatoPerCompensazione: null,
              NrTrasferimentoFlumo: {
                NrMandato: "32985432",
                Data: "12/07/2013"
              },
              TotMese: "1728.00",
              TotAnno: "1728.00"
            },
            {
              DataCalcolo: "01/02/2016",
              Liquidato: "864.00",
              Riaccredito: null,
              TrattenutaDiCategoria: "6.00",
              ImportoRecuperatoPerCompensazione: null,
              NrTrasferimentoFlumo: {
                NrMandato: "32985432",
                Data: "12/07/2013"
              },
              TotMese: "864.00",
              TotAnno: "2592.00"
            },
            {
              DataCalcolo: "01/03/2016",
              Liquidato: "320.25",
              Riaccredito: null,
              TrattenutaDiCategoria: "6.00",
              ImportoRecuperatoPerCompensazione: "108.75",
              NrTrasferimentoFlumo: {
                NrMandato: "32985432",
                Data: "12/07/2013"
              },
              TotMese: "320.25",
              TotAnno: "2912.25"
            }
          ],

          ElencoImportiRiaccreditati: [
            {
              DataRiaccredito: "18/11/2015",
              ImportoRiaccreditato: "864",
              DataLiquidazioneArretrato: "01/01/2016"
            },

            {
              DataRiaccredito: "18/11/2015",
              ImportoRiaccreditato: "111",
              DataLiquidazioneArretrato: "01/01/2016"
            }
          ],
          ElencoImportiDaRecuperare: [
            {
              DataUltimaModifica: "23/02/2016",
              TipoDiRecupero: "compensazione",
              TotDaRecuperare: {
                Capitale: "435.00",
                InteressiLegali: "8.7",
                InteressiDiRateizzazione: "4.35"
              },
              Recuperato: "108.75",
              Restituito: null,
              RimanenteDaRecuperare: "339.30",
              Note: "sda kpopoi pèoipèo dfhaklsdj lasdòlaf"
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
          Email: "mrossi444@gmail.com",
          Pec: "mrossi@gmail.com",
          Note:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius purus tellus, ac auctor nibh dictum consequat"
        },
        {
          CodiceFiscale: "RTSDRO70A10W2056",
          Cognome: "Mudassar",
          Nome: "Khan",
          DataDiNascita: "01/02/1650",
          Sesso: "F",
          LuogoDiNascita: "Bolzano",
          Nazionalita: "Inglese",
          Residenza: "via Carlo Alberto della Chiesa, 53 - 39100 Milano BZ",
          Domicilio: "via Giocchino Diaz, 2 - 39100 Bolzano BZ",
          AntriIndirizzi: "indirizzo austriaco qòlwekrjòlqwekjròlqwkjer",

          DataDiDecesso: "01/01/1930",
          Eredita: [
            {
              CognomeNome: "Paolwwwo Biawdjkònchi",
              CodiceFiscale: "RSSMRA53A36Q2357",
              PercDiEredita: "50%",
              LiquidatoInBaseAllaPercDiEredita: "28400.00",
              Liquidazione: "30/06/2016"
            },
            {
              CognomeNome: "Marcwwwo Biancwwwhi",
              CodiceFiscale: "RSSMRA53A36Q2357",
              PercDiEredita: "25%",
              LiquidatoInBaseAllaPercDiEredita: "14200.00",
              Liquidazione: "30/06/2016"
            },
            {
              CognomeNome: "Sarwa Biancwi",
              CodiceFiscale: "RSSMRA53A36Q5372",
              PercDiEredita: "15%",
              LiquidatoInBaseAllaPercDiEredita: "14200.00",
              Liquidazione: "30/06/2016"
            },
            {
              CognomeNome: "Sarwa Biancwi",
              CodiceFiscale: "RSSMRA53A36Q5372",
              PercDiEredita: "15%",
              LiquidatoInBaseAllaPercDiEredita: "14200.00",
              Liquidazione: "30/06/2016"
            }
          ],

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

          Pensioni: [
            {
              Tipo: "xxxxx xxxxxxx",
              TipologiaDiAssistenza: "77",
              DataFineCompatibilita: "01/01/01",
              Note: "eeqrtwtyre"
            },
            {
              Tipo: "yyyyy xxxxx xxxxxxx",
              TipologiaDiAssistenza: "77",
              DataFineCompatibilita: "01/01/01",
              Note: "eeqrtwtyre"
            },
            {
              Tipo: "yyyy xxxxx xxxxxxx",
              TipologiaDiAssistenza: "77",
              DataFineCompatibilita: "01/01/01",
              Note: "eeqrtwtyre"
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
              Frazione: "12132",
              Via: "41234232",
              Civico: "6",
              UsaIndirizzo: "No",
              Note:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              Tipo: "Indirizzo lavoro",
              Indirizzo: "viale Lavoro, 53 - 39100 Lavoro MI",
              Validita: "dal 01/01/2010 al 02/02/2014",

              Nazione: "Italia",
              Comune: "Napoli",
              Cap: "84092",
              Frazione: "333333",
              Via: "12313413",
              Civico: "6",
              UsaIndirizzo: "No",
              Note:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              Tipo: "Indirizzo secondario",
              Indirizzo: "viale Secondario, 53 - 39100 Secondo MI",
              Validita: "dal 01/01/2010 al 02/02/2011",

              Nazione: "Italia",
              Comune: "Napoli",
              Cap: "84092",
              Frazione: "xxx222",
              Via: "xxx223242121x",
              Civico: "6",
              UsaIndirizzo: "No",
              Note:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            }
          ],
          Associazioni: [
            {
              NumPosizione: "778767",
              DataDomanda: "05/03/2011",
              TipoAssociazione: "ANMIC",
              InizioIscrizione: "02/04/2013",
              FineIscrizione: "",
              ElencoRitenuteDiCategoriaRecuperate: []
            },
            {
              NumPosizione: "993423",
              DataDomanda: "07/08/2012",
              TipoAssociazione: "UICI",
              InizioIscrizione: "07/08/2012",
              FineIscrizione: "07/08/2016",
              ElencoRitenuteDiCategoriaRecuperate: [
                {
                  DataRecupero: "15/03/2014",
                  ImportoRecuperato: "12349.00",
                  Note:
                    "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
                }
              ]
            },
            {
              NumPosizione: "376899",
              DataDomanda: "07/08/2011",
              TipoAssociazione: "ULMM",
              InizioIscrizione: "07/08/2014",
              FineIscrizione: "07/08/2017",
              ElencoRitenuteDiCategoriaRecuperate: [
                {
                  DataRecupero: "01/03/2015",
                  ImportoRecuperato: "12349.00",
                  Note:
                    "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
                }
              ]
            }
          ],
          Liquidazioni: [
            {
              DataCalcolo: "01/01/2016",
              Liquidato: "864.00",
              Riaccredito: "864.00",
              TrattenutaDiCategoria: "6.00",
              ImportoRecuperatoPerCompensazione: null,
              NrTrasferimentoFlumo: {
                NrMandato: "32985432",
                Data: "12/07/2013"
              },
              TotMese: "1728.00",
              TotAnno: "1728.00"
            },
            {
              DataCalcolo: "01/02/2016",
              Liquidato: "864.00",
              Riaccredito: null,
              TrattenutaDiCategoria: "6.00",
              ImportoRecuperatoPerCompensazione: null,
              NrTrasferimentoFlumo: {
                NrMandato: "32985432",
                Data: "12/07/2013"
              },
              TotMese: "864.00",
              TotAnno: "2592.00"
            },
            {
              DataCalcolo: "01/03/2016",
              Liquidato: "320.25",
              Riaccredito: null,
              TrattenutaDiCategoria: "6.00",
              ImportoRecuperatoPerCompensazione: "108.75",
              NrTrasferimentoFlumo: {
                NrMandato: "32985432",
                Data: "12/07/2013"
              },
              TotMese: "320.25",
              TotAnno: "2912.25"
            }
          ],

          ElencoImportiRiaccreditati: [
            {
              DataRiaccredito: "18/11/2015",
              ImportoRiaccreditato: "864",
              DataLiquidazioneArretrato: "01/01/2016"
            },

            {
              DataRiaccredito: "18/11/2015",
              ImportoRiaccreditato: "111",
              DataLiquidazioneArretrato: "01/01/2016"
            }
          ],
          ElencoImportiDaRecuperare: [
            {
              DataUltimaModifica: "23/02/2016",
              TipoDiRecupero: "compensazione",
              TotDaRecuperare: {
                Capitale: "435.00",
                InteressiLegali: "8.7",
                InteressiDiRateizzazione: "4.35"
              },
              Recuperato: "108.75",
              Restituito: null,
              RimanenteDaRecuperare: "339.30",
              Note: "sda kpopoi pèoipèo dfhaklsdj lasdòlaf"
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
          Email: "mrossi555@gmail.com",
          Pec: "mrossi@gmail.com",
          Note:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius purus tellus, ac auctor nibh dictum consequat"
        }
      ];

      return tabAnagrafe;
    }
    // ----------------------------

    if (cTipoTabella.toUpperCase() === "POSIZIONI") {
      let tabPosizioni = [
        {
          Posizione: "123456",
          CodiceFiscale: "LFNCLL60D03E026T",
          Cognome: "Alfano",
          Nome: "Camillo",
          DataDiNascita: "03/04/1960",
          DataDiDecesso: "03/01/2014",
          AnnoDiScarto: "1234",
          NumeroFaldone: "1111",
          Fascicolo: "634",
          StatoDomanda: "Revocata"
        },
        {
          Posizione: "345765",
          CodiceFiscale: "LFNCLL60D03E026T",
          Cognome: "Alfano",
          Nome: "Camillo",
          DataDiNascita: "03/04/1960",
          DataDiDecesso: "03/01/2014",
          AnnoDiScarto: "12534",
          NumeroFaldone: "1111",
          Fascicolo: "123",
          StatoDomanda: "Negata"
        },
        {
          Posizione: "771723",
          CodiceFiscale: "QTGSRO60A11Q2055",
          Cognome: "Hammond",
          Nome: "John",
          DataDiNascita: "01/01/1970",
          DataDiDecesso: "-",
          AnnoDiScarto: "127534",
          NumeroFaldone: "2222222",
          Fascicolo: "236",
          StatoDomanda: "Concessa"
        },
        {
          Posizione: "125688",
          CodiceFiscale: "QTGSRO60A11Q2055",
          Cognome: "Hammond",
          Nome: "John",
          DataDiNascita: "01/01/1970",
          DataDiDecesso: "-",
          AnnoDiScarto: "1267634",
          NumeroFaldone: "2222222",
          Fascicolo: "634",
          StatoDomanda: "Revocata"
        },
        {
          Posizione: "345765",
          CodiceFiscale: "QTGSRO60A11Q2055",
          Cognome: "Hammond",
          Nome: "John",
          DataDiNascita: "01/01/1970",
          DataDiDecesso: "-",
          AnnoDiScarto: "123664",
          NumeroFaldone: "2222222",
          Fascicolo: "123",
          StatoDomanda: "Negata"
        },
        {
          Posizione: "771723",
          CodiceFiscale: "RTSDRO70A10W2056",
          Cognome: "Mudassar",
          Nome: "Khan",
          DataDiNascita: "01/02/1650",
          DataDiDecesso: "01/01/1930",
          AnnoDiScarto: "16234",
          NumeroFaldone: "3333333",
          Fascicolo: "236",
          StatoDomanda: "Concessa"
        },
        {
          Posizione: "12366",
          CodiceFiscale: "RTSDRO70A10W2056",
          Cognome: "Mudassar",
          Nome: "Khan",
          DataDiNascita: "01/02/1650",
          DataDiDecesso: "01/01/1930",
          AnnoDiScarto: "1234",
          NumeroFaldone: "3333333",
          Fascicolo: "634",
          StatoDomanda: "Revocata"
        },
        {
          Posizione: "5765",
          CodiceFiscale: "RTSDRO70A10W2056",
          Cognome: "Mudassar",
          Nome: "Khan",
          DataDiNascita: "01/02/1650",
          DataDiDecesso: "01/01/1930",
          AnnoDiScarto: "1234",
          NumeroFaldone: "3333333",
          Fascicolo: "123",
          StatoDomanda: "Negata"
        },

        {
          Posizione: "771723",
          CodiceFiscale: "VSYFRO70A10E2652",
          Cognome: "Mathews",
          Nome: "Suzanne",
          DataDiNascita: "01/01/1966",
          DataDiDecesso: "-",
          AnnoDiScarto: "1994",
          NumeroFaldone: "444444",
          Fascicolo: "236"
        },

        {
          Posizione: "771723",
          CodiceFiscale: "VSYFRO70A10E2652",
          Cognome: "Mathews",
          Nome: "Suzanne",
          DataDiNascita: "01/01/1966",
          DataDiDecesso: "-",
          Fascicolo: "236",
          StatoDomanda: "Concessa"
        },

        {
          Posizione: "771723",
          CodiceFiscale: "RTSDRO70A10W2056",
          Cognome: "Mudassar",
          Nome: "Khan",
          DataDiNascita: "01/02/1650",
          DataDiDecesso: "01/01/1930",
          AnnoDiScarto: "12246",
          NumeroFaldone: "1113451",
          Fascicolo: "236",
          StatoDomanda: "Concessa"
        },
        {
          Posizione: "673456",
          CodiceFiscale: "RTSDRO70A10W2056",
          Cognome: "Mudassar",
          Nome: "Khan",
          DataDiNascita: "01/02/1650",
          DataDiDecesso: "01/01/1930",
          AnnoDiScarto: "775634",
          NumeroFaldone: "1113451",
          Fascicolo: "634",
          StatoDomanda: "Revocata"
        },
        {
          Posizione: "345765",
          CodiceFiscale: "RTSDRO70A10W2056",
          Cognome: "Mudassar",
          Nome: "Khan",
          DataDiNascita: "01/02/1650",
          DataDiDecesso: "01/01/1930",
          AnnoDiScarto: "7464",
          NumeroFaldone: "1113451",
          Fascicolo: "123",
          StatoDomanda: "Negata"
        }
      ];

      return tabPosizioni;
    }
    // ----------------------------

    if (cTipoTabella.toUpperCase() === "LIQUIDAZIONI") {
      let tabLiquidazioni = [
        {
          CodiceFiscale: "1111111111111111",
          NominativoAssistito: "111-Mario Rossi",
          ImportoPrestazioniLiquidato: "232.00",
          Tredicesima: "1325.00",
          ImportoConguaglio: "2188.00",
          RitenuteDiCategoria: "562.00",
          Riaccrediti: "",
          RecuperiDaCompensazione: "512.00",
          TotaleMensileDaLiquidare: "1232.00"
        },
        {
          CodiceFiscale: "2222222222222222",
          NominativoAssistito: "2222-Andrea Ramilii",
          ImportoPrestazioniLiquidato: "132.00",
          Tredicesima: "1115.00",
          ImportoConguaglio: "2000.00",
          RitenuteDiCategoria: "",
          Riaccrediti: "",
          RecuperiDaCompensazione: "512.00",
          TotaleMensileDaLiquidare: "1232.00"
        },
        {
          CodiceFiscale: "3333333333333333",
          NominativoAssistito: "3333-Pino Amabile",
          ImportoPrestazioniLiquidato: "2.00",
          Tredicesima: "325.00",
          ImportoConguaglio: "17.00",
          RitenuteDiCategoria: "",
          Riaccrediti: "",
          RecuperiDaCompensazione: "512.00",
          TotaleMensileDaLiquidare: "1232.00"
        },
        {
          CodiceFiscale: "4444444444444444",
          NominativoAssistito: "4444-Karin Biondi",
          ImportoPrestazioniLiquidato: "23.00",
          Tredicesima: "25.00",
          ImportoConguaglio: "42.53",
          RitenuteDiCategoria: "430.00",
          Riaccrediti: "",
          RecuperiDaCompensazione: "52.00",
          TotaleMensileDaLiquidare: "12.00"
        },
        {
          CodiceFiscale: "5555555555555555",
          NominativoAssistito: "55555-Ighli Vanoni",
          ImportoPrestazioniLiquidato: "176.00",
          Tredicesima: "725.00",
          ImportoConguaglio: "18.53",
          RitenuteDiCategoria: "",
          Riaccrediti: "",
          RecuperiDaCompensazione: "112.00",
          TotaleMensileDaLiquidare: "2.00"
        },
        {
          CodiceFiscale: "666666666666666666",
          NominativoAssistito: "55555-Ighli Vanoni",
          ImportoPrestazioniLiquidato: "176.00",
          Tredicesima: "725.00",
          ImportoConguaglio: "18.53",
          RitenuteDiCategoria: "",
          Riaccrediti: "",
          RecuperiDaCompensazione: "112.00",
          TotaleMensileDaLiquidare: "2.00"
        }
      ];

      return tabLiquidazioni;
    }
  }
}
