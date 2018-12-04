function setupFakeBackend($httpBackend) {

  // i file statici verranno serviti senza elaborazione
  $httpBackend.whenGET(/^\w+.*/).passThrough();
  // le views verranno servite senza elaborazione. Se i elimina la riga si hanno interferenze con gli stati di UI-ROUTER
  $httpBackend.whenGET(/views\/.*/).passThrough();
  $httpBackend.whenGET(/js\/.*/).passThrough();

  $httpBackend.whenGET('http://www.omdbapi.com/?s=terminator').passThrough();

  $httpBackend.whenGET('/iamauth/user/current').passThrough();
  $httpBackend.whenPOST('http://www.omdbapi.com/?s=terminator').passThrough();
  $httpBackend.whenPOST('/iamauth/user/current').passThrough();

  $httpBackend.whenPOST('http://www.omdbapi.com/?s=terminator').passThrough();

  $httpBackend.whenPOST('http://www.omdbapi.com/?s=terminator').passThrough();

  // ------------------------- LOGIN
  $httpBackend
    .whenPOST("/api/autenticazione/login")
    .respond(function (method, url, data, headers) {
      // get parameters from post request
      var params = angular.fromJson(data);

      if (params.username === "camillo" && params.password === "camillo") {
        return [
          200,
          {
            immagineUtente: "profile1",
            DbNome: "Camillo",
            DbCognome: "Alfano",
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
            DbNome: "Mario",
            DbCognome: "Petta",
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
            DbNome: "Danilo",
            DbCognome: "Romano",
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
    .respond(function (method, url, data, headers) {
      // get parameters from post request
      var params = angular.fromJson(data);

      // da implementare
      return [200, {}, {}];
    });

  // ------------------------- INDIRIZZI
  $httpBackend
    .whenGET("/api/Nazione/getAll?enabled=true")
    .respond(function (method, url, data, headers) {
      var params = angular.fromJson(data);
      var response = tabella("NAZIONI");
      return [200, response, {}];
    });
  $httpBackend
    .whenGET("/api/Provincia/getAll?enabled=true")
    .respond(function (method, url, data, headers) {
      var params = angular.fromJson(data);
      var response = tabella("PROVINCE");
      return [200, response, {}];
    });
  $httpBackend
    .whenGET("/api/Comune/getAll?enabled=true")
    .respond(function (method, url, data, headers) {
      var params = angular.fromJson(data);
      var response = tabella("COMUNI");
      return [200, response, {}];
    });
  $httpBackend
    .whenGET("/api/Strada/getAll?enabled=true")
    .respond(function (method, url, data, headers) {
      var params = angular.fromJson(data);
      var response = tabella("VIE");
      return [200, response, {}];
    });
  $httpBackend
    .whenGET("/api/Frazione/getAll?enabled=true")
    .respond(function (method, url, data, headers) {
      var params = angular.fromJson(data);
      var response = tabella("FRAZIONI");
      return [200, response, {}];
    });
  $httpBackend
    .whenGET("/api/Cap/getAll?enabled=true")
    .respond(function (method, url, data, headers) {
      var params = angular.fromJson(data);
      var response = tabella("CAP");
      return [200, response, {}];
    });
  $httpBackend
    .whenGET("/api/StatoCivile/getAll?enabled=true")
    .respond(function (method, url, data, headers) {
      var params = angular.fromJson(data);
      var response = tabella("STATOCIVILE");
      return [200, response, {}];
    });
  $httpBackend
    .whenGET("/api/TipoIndirizzo/getAll?enabled=true")
    .respond(function (method, url, data, headers) {
      var params = angular.fromJson(data);
      var response = tabella("TIPOINDIRIZZO");
      return [200, response, {}];
    });
  // ------------------------- ANAGRAFE e POSIZIONI
  // data = {
  //   Cognome: "text",
  //   Nome: "text",
  //   CodiceFiscale: "text",
  //   DataDiNascita: "gg/mm/aaaa",
  //   NumeroFascicolo:"text"
  //   NumeroFaldoneArchiviazione:"text"
  //   AnnoDiScarto:""text"
  // }
  $httpBackend
    .whenGET("/api/persona/GetByAnagFilter")
    .respond(function (method, url, data, headers) {
      var params = angular.fromJson(data);
      var response = tabella("ANAGRAFE");
      return [200, response, {}];
    });

  $httpBackend
    .whenGET("/api/persona/findPosizioni")
    .respond(function (method, url, data, headers) {
      var params = angular.fromJson(data);
      var response = tabella("POSIZIONI");
      return [200, response, {}];
    });
  $httpBackend
    .whenGET("/api/persona/findcodfis")
    .respond(function (method, url, data, headers) {
      var response = tabella("ANAGRAFE");
      var response2 = response.find(obj => {
        return obj.CodiceFiscale === data;
      });
      return [200, response2, {}];
    });

  $httpBackend
    .whenPOST("/api/persona/save")
    .respond(function (method, url, data, headers) {
      var params = angular.fromJson(data);
      var response = tabella("ANAGRAFE");
      return [200, response, {}];
    });

  // ------------------------- DOMANDE

  // data = {
  //   TipoAssistenzaRichiesta:"text 77/88/99"
  //   DbCognome: "text",
  //   DbNome: "text",
  //   DbCodiceFiscale: "text",
  //   DbDataDiNascita: "gg/mm/aaaa",
  //   IncludiDeceduti:"text Si/No "
  // }
  $httpBackend
    .whenGET("/api/domande/find")
    .respond(function (method, url, data, headers) {
      var params = angular.fromJson(data);
      var response = tabella("DOMANDE");
      return [200, response, {}];
    });

  // ------------------------- LIQUIDAZIONI
  // data = {
  //   MeseDiRiferimentoLiquidazione: "nome-mese-in italiano o tedesco anno",
  // }

  $httpBackend
    .whenGET("/api/liquidazioni/find")
    .respond(function (method, url, data, headers) {
      var params = angular.fromJson(data);
      var response = tabella("LIQUIDAZIONI");
      return [200, response, {}];
    });

  // data = {
  //   DbCodiceFiscale: "text",
  // }
  $httpBackend
    .whenGET("/api/liquidazioni/findcodfis")
    .respond(function (method, url, data, headers) {
      var response = tabella("LIQUIDAZIONI");
      var response2 = response.find(obj => {
        return obj.CodiceFiscale === data;
      });
      return [200, response2, {}];
    });

  $httpBackend
    .whenPOST("/api/liquidazioni/save")
    .respond(function (method, url, data, headers) {
      var params = angular.fromJson(data);
      var response = tabella("LIQUIDAZIONI");
      return [200, response, {}];
    });

  // ------------------------- EVIDENZE

  // data = {
  //   TipoEvidenza: "text",
  //   Posizione: "text"
  //   TipoPrestazione:"text"
  //   DataDecorrenzaDal:"dd/MM/yyyy"
  //   DataDecorrenzaAl :"dd/MM/yyyy"
  //   DataScadenzaDal:"dd/MM/yyyy"
  //   DataScadenzaAl :"dd/MM/yyyy"
  //   DataChiusuraDal:"dd/MM/yyyy"
  //   DataChiusuraAl :"dd/MM/yyyy"
  //   Cognome "text",
  //   Nome: "text",
  //   CodiceFiscale: "text",
  //   DataDiNascita: "gg/mm/aaaa",
  // }
  $httpBackend
    .whenGET("/api/evidenze/find")
    .respond(function (method, url, data, headers) {
      var params = angular.fromJson(data);
      var response = tabella("EVIDENZE");
      return [200, response, {}];
    });

  // data = {
  //   DbCodiceFiscale: "text",
  // }
  $httpBackend
    .whenGET("/api/evidenze/findcodfis")
    .respond(function (method, url, data, headers) {
      var response = tabella("EVIDENZE");
      var response2 = response.find(obj => {
        return obj.CodiceFiscale === data;
      });
      return [200, response2, {}];
    });

  $httpBackend
    .whenPOST("/api/evidenze/save")
    .respond(function (method, url, data, headers) {
      var params = angular.fromJson(data);
      var response = tabella("EVIDENZE");
      return [200, response, {}];
    });

  // ------------------------- ASSOCIAZIONI
  // data = {
  //   DbCodiceFiscale: "text",
  //   NomeAssociazione: "text",
  //   DbTipologiaDiAssistenza: "text"
  // }
  $httpBackend
    .whenGET("/api/associazioni/find")
    .respond(function (method, url, data, headers) {
      var params = angular.fromJson(data);
      var response = tabella("ASSOCIAZIONI");
      return [200, response, {}];
    });

  // data = {
  //   DbCodiceFiscale: "text",
  // }
  $httpBackend
    .whenGET("/api/associazioni/findcodfis")
    .respond(function (method, url, data, headers) {
      var response = tabella("ASSOCIAZIONI");
      var response2 = response.find(obj => {
        return obj.CodiceFiscale === data;
      });
      return [200, response2, {}];
    });

  $httpBackend
    .whenPOST("/api/associazioni/save")
    .respond(function (method, url, data, headers) {
      var params = angular.fromJson(data);
      var response = tabella("ASSOCIAZIONI");
      return [200, response, {}];
    });

  // ------------------------- TUTTO QELLO CHE NON é STATO INTERCETTATO VIENE FATTO PASSARE

  $httpBackend.whenGET(/[\s\S]*/).passThrough();


  // ------------------------- TABELLE

  function tabella(cTipoTabella) {
    if (cTipoTabella.toUpperCase() === "ANAGRAFE") {
      var tabAnagrafe = [{
          Id: "1",
          CodiceFiscale: "LFNCLL60D03E026T",
          Cognome: "Alfano",
          Nome: "Camillo",
          DataNascita: "01/01/1930",
          Sesso: "F",
          IdComuneNascita: "Bologna",
          DbNazionalita: "Italiana",
          DbResidenza: "via Luigi Cadorna, 53 - 39100 Bolzano BZ",
          DbDomicilio: "via Armando Diaz, 2 - 39100 Bolzano BZ",
          DbAltriIndirizzi: "atro indirizzo qòlwekrjòlqwekjròlqwkjer",

          DataDecesso: "01/01/2010",
          DbEredita: {
            DbNumeroFaldone: "3333333",
            DbAnnoDiScartoINCISO: "2018",
            DbDataCalcoloSimulazione: "01/01/2020",
            DbImportoSpettante: "580000.39",
            DbEredi: [{
                DbCognomeNome: "Paolo Bianchi",
                DbCodiceFiscale: "RSSMRA53A36Q2357",
                DbPercDiEredita: "50%",
                DbLiquidatoInBaseAllaPercDiEredita: "28400.00",
                DbLiquidazione: "30/06/2016"
              },
              {
                DbCognomeNome: "Marco Bianchi",
                DbCodiceFiscale: "RSSMRA53A36Q2357",
                DbPercDiEredita: "25%",
                DbLiquidatoInBaseAllaPercDiEredita: "14200.00",
                DbLiquidazione: "30/06/2016"
              },
              {
                DbCognomeNome: "Sara Bianchi",
                DbCodiceFiscale: "RSSMRA53A36Q5372",
                DbPercDiEredita: "15%",
                DbLiquidatoInBaseAllaPercDiEredita: "14200.00",
                DbLiquidazione: "30/06/2016"
              }
            ]
          },
          PersonaRedditi: [{
              IdPersona: 7,
              Anno: "2018",
              DbRedditoAssistito: "111111.45",
              DbRedditoConiuge: "6578.88",
              DbValidoPerGliAnniSuccessivi: true,
              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "111Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "88268.00"
                },
                {
                  DbTipologia: "111Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "112000.00"
                },
                {
                  DbTipologia: "111Altri redditi da fabbricati",
                  DbValore: "2763.00"
                }
              ]
            },
            {
              Anno: "2017",
              DbRedditoAssistito: "22222225.45",
              DbRedditoConiuge: "222222228.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "222Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "88628.00"
                },
                {
                  DbTipologia: "222Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "112000.00"
                },
                {
                  DbTipologia: "2222Altri redditi da fabbricati",
                  DbValore: "2763.00"
                }
              ]
            },
            {
              Anno: "2016",
              DbRedditoAssistito: "33333333.45",
              DbRedditoConiuge: "33333333.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "333Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "333Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "333Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2015",
              DbRedditoAssistito: "44444444.45",
              DbRedditoConiuge: "44444444.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "4444Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "4444Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "4444Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2014",
              DbRedditoAssistito: "555555555.45",
              DbRedditoConiuge: "5555555.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "5555Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "5555Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "5555Altri redditi da fabbricati",
                  DbValore: "555763.00"
                }
              ]
            },
            {
              Anno: "2013",
              DbRedditoAssistito: "666666666.45",
              DbRedditoConiuge: "6666666.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2012",
              DbRedditoAssistito: "77777777.45",
              DbRedditoConiuge: "7777777.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "66666Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "666666Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "66666Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2011",
              DbRedditoAssistito: "88888888.45",
              DbRedditoConiuge: "88888888.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "77777Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "77777Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "7777Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2010",
              DbRedditoAssistito: "9999999.45",
              DbRedditoConiuge: "999999.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "88888Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "88888Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "88888Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            }
          ],
          DbPensioni: [{
              DbTipo: "xxxxx xxxxxxx",
              DbTipologiaDiAssistenza: "77",
              DbDataFineCompatibilita: "01/01/01",
              DbNote: "eeqrtwtyre"
            },
            {
              DbTipo: "yyyyy xxxxx xxxxxxx",
              DbTipologiaDiAssistenza: "77",
              DbDataFineCompatibilita: "01/01/01",
              DbNote: "eeqrtwtyre"
            },
            {
              DbTipo: "yyyy xxxxx xxxxxxx",
              DbTipologiaDiAssistenza: "77",
              DbDataFineCompatibilita: "01/01/01",
              DbNote: "eeqrtwtyre"
            }
          ],

          PersonaIndirizzi: [{
              DbTipo: "Indirizzo abitazione",
              DbIndirizzo: "viale Giusti Antonia, 53 - 39100 Milano MI",
              DbValidita: "dal 01/01/2010 al 02/02/2011",

              DbNazione: "Italia",
              DbComune: "Napoli",
              DbCap: "84092",
              DbFrazione: "aaaaa",
              DbVia: "aaaaaxxxxxxxxxx",
              DbCivico: "6",
              DbUsaIndirizzo: "No",
              DbNote: "fkjsaòldfkjasòkdfjaòkjòaldskjf"
            },
            {
              DbTipo: "Indirizzo lavoro",
              DbIndirizzo: "viale Lavoro, 53 - 39100 Lavoro MI",
              DbValidita: "dal 01/01/2010 al 02/02/2014",

              DbNazione: "Italia",
              DbComune: "Napoli",
              DbCap: "84092",
              DbFrazione: "aaaaa",
              DbVia: "aaaaaaaaaaxxxx",
              DbCivico: "6",
              DbUsaIndirizzo: "No",
              DbNote: "fkjsaòldfkjasòkdfjaòkjòaldskjf"
            },
            {
              DbTipo: "Indirizzo secondario",
              DbIndirizzo: "viale Secondario, 53 - 39100 Secondo MI",
              DbValidita: "dal 01/01/2010 al 02/02/2011",

              DbNazione: "Italia",
              DbComune: "Napoli",
              DbCap: "84092",
              DbFrazione: "xxxxxx",
              DbVia: "aaaaaxxxxxddxxxxx",
              DbCivico: "6",
              DbUsaIndirizzo: "No",
              DbNote: "fkjsaòldfkjasòkdfjaòkjòaldskjf"
            }
          ],
          DbAssociazioni: [{
              DbNumPosizione: "111-778767",
              DbDataDomanda: "05/03/2011",
              DbTipoAssociazione: "ANMIC",
              DbInizioIscrizione: "02/04/2013",
              DbFineIscrizione: "",
              DbElencoRitenuteDiCategoriaRecuperate: []
            },
            {
              DbNumPosizione: "111-993423",
              DbDataDomanda: "07/08/2012",
              DbTipoAssociazione: "UICI",
              DbInizioIscrizione: "07/08/2012",
              DbFineIscrizione: "07/08/2016",
              DbElencoRitenuteDiCategoriaRecuperate: [{
                DbDataRecupero: "15/03/2014",
                DbImportoRecuperato: "12349.00",
                DbNote: "1111111111111-Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
              }]
            },
            {
              DbNumPosizione: "1111-376899",
              DbDataDomanda: "07/08/2011",
              DbTipoAssociazione: "ULMM",
              DbInizioIscrizione: "07/08/2014",
              DbFineIscrizione: "07/08/2017",
              DbElencoRitenuteDiCategoriaRecuperate: [{
                DbDataRecupero: "01/03/2015",
                DbImportoRecuperato: "1111111.00",
                DbNote: "111111111111111111 Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
              }]
            }
          ],
          DbLiquidazioni: [{
              DbDataCalcolo: "01/01/2016",
              DbLiquidato: "864.00",
              DbRiaccredito: "864.00",
              DbTrattenutaDiCategoria: "6.00",
              DbImportoRecuperatoPerCompensazione: null,
              DbNrTrasferimentoFlumo: {
                DbNrMandato: "32985432",
                DbData: "12/07/2013"
              },
              DbTotMese: "1728.00",
              DbTotAnno: "1728.00"
            },
            {
              DbDataCalcolo: "01/02/2016",
              DbLiquidato: "864.00",
              DbRiaccredito: null,
              DbTrattenutaDiCategoria: "6.00",
              DbImportoRecuperatoPerCompensazione: null,
              DbNrTrasferimentoFlumo: {
                DbNrMandato: "32985432",
                DbData: "12/07/2013"
              },
              DbTotMese: "864.00",
              DbTotAnno: "2592.00"
            },
            {
              DbDataCalcolo: "01/03/2016",
              DbLiquidato: "320.25",
              DbRiaccredito: null,
              DbTrattenutaDiCategoria: "6.00",
              DbImportoRecuperatoPerCompensazione: "108.75",
              DbNrTrasferimentoFlumo: {
                DbNrMandato: "32985432",
                DbData: "12/07/2013"
              },
              DbTotMese: "320.25",
              DbTotAnno: "2912.25"
            }
          ],

          DbElencoImportiRiaccreditati: [{
              DbDataRiaccredito: "18/11/2015",
              DbImportoRiaccreditato: "864",
              DbDataLiquidazioneArretrato: "01/01/2016"
            },
            {
              DbDataRiaccredito: "18/11/2015",
              DbImportoRiaccreditato: "111",
              DbDataLiquidazioneArretrato: "01/01/2016"
            }
          ],
          DbElencoImportiDaRecuperare: [{
            DbDataUltimaModifica: "23/02/2016",
            DbTipoDiRecupero: "compensazione",
            DbTotDaRecuperare: {
              DbCapitale: "435.00",
              DbInteressiLegali: "8.7",
              DbInteressiDiRateizzazione: "4.35"
            },
            DbRecuperato: "108.75",
            DbRestituito: null,
            DbRimanenteDaRecuperare: "339.30",
            DbNote: "sda kpopoi pèoipèo dfhaklsdj lasdòlaf"
          }],

          CognomeAcquisito: "Alfano Acquisito",
          IdIdStatoCivile: "Coniugata",
          IdProvinciaNascita: "Milano",
          IdNazioneNascita: "Italia",
          IdCittadinanza: "Italiana",
          DbExtracomunitario: "Si",

          DbPermessoDiSoggiornoTipoPermesso: "Lorem ipsum dolor",
          DbDbPermessoDiSoggiornoDataRilascio: "01/01/2020",
          DbPermessoDiSoggiornoValidoFinoAl: "01/01/2020",
          TelefonoPrincipale: "0461 912585",
          TelefonoSecondario: "0461 923452",
          Email: "mrossi@gmail.com",
          Pec: "mrossi@gmail.com",
          DbNote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius purus tellus, ac auctor nibh dictum consequat"
        },
        {
          Id: "2",
          CodiceFiscale: "RSSARO70A10F2052",
          Cognome: "Alfano",
          Nome: "Camillo",
          DataNascita: "01/01/1930",
          Sesso: "F",
          IdComuneNascita: "Bologna",
          DbNazionalita: "Italiana",
          DbResidenza: "via Luigi Cadorna, 53 - 39100 Bolzano BZ",
          DbDomicilio: "via Armando Diaz, 2 - 39100 Bolzano BZ",
          DbAltriIndirizzi: "atro indirizzo qòlwekrjòlqwekjròlqwkjer",

          DataDecesso: "-",
          DbEredita: null,

          PersonaRedditi: [{
              IdPersona: 7,
              Anno: "2018",
              DbRedditoAssistito: "111111.45",
              DbRedditoConiuge: "6578.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "111Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "88268.00"
                },
                {
                  DbTipologia: "111Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "112000.00"
                },
                {
                  DbTipologia: "111Altri redditi da fabbricati",
                  DbValore: "2763.00"
                }
              ]
            },
            {
              Anno: "2017",
              DbRedditoAssistito: "22222225.45",
              DbRedditoConiuge: "222222228.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "222Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "88628.00"
                },
                {
                  DbTipologia: "222Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "112000.00"
                },
                {
                  DbTipologia: "2222Altri redditi da fabbricati",
                  DbValore: "2763.00"
                }
              ]
            },
            {
              Anno: "2016",
              DbRedditoAssistito: "33333333.45",
              DbRedditoConiuge: "33333333.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "333Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "333Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "333Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2015",
              DbRedditoAssistito: "44444444.45",
              DbRedditoConiuge: "44444444.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "4444Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "4444Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "4444Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2014",
              DbRedditoAssistito: "555555555.45",
              DbRedditoConiuge: "5555555.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "5555Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "5555Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "5555Altri redditi da fabbricati",
                  DbValore: "555763.00"
                }
              ]
            },
            {
              Anno: "2013",
              DbRedditoAssistito: "666666666.45",
              DbRedditoConiuge: "6666666.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2012",
              DbRedditoAssistito: "77777777.45",
              DbRedditoConiuge: "7777777.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "66666Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "666666Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "66666Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2011",
              DbRedditoAssistito: "88888888.45",
              DbRedditoConiuge: "88888888.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "77777Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "77777Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "7777Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2010",
              DbRedditoAssistito: "9999999.45",
              DbRedditoConiuge: "999999.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "88888Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "88888Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "88888Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            }
          ],

          DbPensioni: [{
              DbTipo: "xxxxx xxxxxxx",
              DbTipologiaDiAssistenza: "77",
              DbDataFineCompatibilita: "01/01/01",
              DbNote: "eeqrtwtyre"
            },
            {
              DbTipo: "yyyyy xxxxx xxxxxxx",
              DbTipologiaDiAssistenza: "77",
              DbDataFineCompatibilita: "01/01/01",
              DbNote: "eeqrtwtyre"
            },
            {
              DbTipo: "yyyy xxxxx xxxxxxx",
              DbTipologiaDiAssistenza: "77",
              DbDataFineCompatibilita: "01/01/01",
              DbNote: "eeqrtwtyre"
            }
          ],

          PersonaIndirizzi: [{
              DbTipo: "Indirizzo abitazione",
              DbIndirizzo: "viale Giusti Antonia, 53 - 39100 Milano MI",
              DbValidita: "dal 01/01/2010 al 02/02/2011",

              DbNazione: "Italia",
              DbComune: "Napoli",
              DbCap: "84092",
              DbFrazione: "aaaaa",
              DbVia: "aaaaaxxxxxxxxxx",
              DbCivico: "6",
              DbUsaIndirizzo: "No",
              DbNote: "fkjsaòldfkjasòkdfjaòkjòaldskjf"
            },
            {
              DbTipo: "Indirizzo lavoro",
              DbIndirizzo: "viale Lavoro, 53 - 39100 Lavoro MI",
              DbValidita: "dal 01/01/2010 al 02/02/2014",

              DbNazione: "Italia",
              DbComune: "Napoli",
              DbCap: "84092",
              DbFrazione: "aaaaa",
              DbVia: "aaaaaaaaaaxxxx",
              DbCivico: "6",
              DbUsaIndirizzo: "No",
              DbNote: "fkjsaòldfkjasòkdfjaòkjòaldskjf"
            },
            {
              DbTipo: "Indirizzo secondario",
              DbIndirizzo: "viale Secondario, 53 - 39100 Secondo MI",
              DbValidita: "dal 01/01/2010 al 02/02/2011",

              DbNazione: "Italia",
              DbComune: "Napoli",
              DbCap: "84092",
              DbFrazione: "xxxxxx",
              DbVia: "aaaaaxxxxxddxxxxx",
              DbCivico: "6",
              DbUsaIndirizzo: "No",
              DbNote: "fkjsaòldfkjasòkdfjaòkjòaldskjf"
            }
          ],
          DbAssociazioni: [{
              DbNumPosizione: "222-778767",
              DbDataDomanda: "22/03/2011",
              DbTipoAssociazione: "222-ANMIC",
              DbInizioIscrizione: "22/04/2013",
              DbFineIscrizione: "",
              DbElencoRitenuteDiCategoriaRecuperate: []
            },
            {
              DbNumPosizione: "2222-993423",
              DbDataDomanda: "22/08/2012",
              DbTipoAssociazione: "222-UICI",
              DbInizioIscrizione: "07/08/2012",
              DbFineIscrizione: "07/08/2016",
              DbElencoRitenuteDiCategoriaRecuperate: [{
                DbDataRecupero: "22/03/2014",
                DbImportoRecuperato: "22222.00",
                DbNote: "22222222222222222a quam venenatis vestibulum."
              }]
            },
            {
              DbNumPosizione: "222222",
              DbDataDomanda: "07/08/2011",
              DbTipoAssociazione: "2-2ULMM",
              DbInizioIscrizione: "27/08/2014",
              DbFineIscrizione: "07/08/2017",
              DbElencoRitenuteDiCategoriaRecuperate: [{
                DbDataRecupero: "01/03/2015",
                DbImportoRecuperato: "12349.00",
                DbNote: "222222222lòkjòkljòlkjS leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
              }]
            }
          ],
          DbLiquidazioni: [{
              DbDataCalcolo: "01/01/2016",
              DbLiquidato: "864.00",
              DbRiaccredito: "864.00",
              DbTrattenutaDiCategoria: "6.00",
              DbImportoRecuperatoPerCompensazione: null,
              DbNrTrasferimentoFlumo: {
                DbNrMandato: "32985432",
                DbData: "12/07/2013"
              },
              DbTotMese: "1728.00",
              DbTotAnno: "1728.00"
            },
            {
              DbDataCalcolo: "01/02/2016",
              DbLiquidato: "864.00",
              DbRiaccredito: null,
              DbTrattenutaDiCategoria: "6.00",
              DbImportoRecuperatoPerCompensazione: null,
              DbNrTrasferimentoFlumo: {
                DbNrMandato: "32985432",
                DbData: "12/07/2013"
              },
              DbTotMese: "864.00",
              DbTotAnno: "2592.00"
            },
            {
              DbDataCalcolo: "01/03/2016",
              DbLiquidato: "320.25",
              DbRiaccredito: null,
              DbTrattenutaDiCategoria: "6.00",
              DbImportoRecuperatoPerCompensazione: "108.75",
              DbNrTrasferimentoFlumo: {
                DbNrMandato: "32985432",
                DbData: "12/07/2013"
              },
              DbTotMese: "320.25",
              DbTotAnno: "2912.25"
            }
          ],

          DbElencoImportiRiaccreditati: [{
              DbDataRiaccredito: "18/11/2015",
              DbImportoRiaccreditato: "864",
              DbDataLiquidazioneArretrato: "01/01/2016"
            },

            {
              DbDataRiaccredito: "18/11/2015",
              DbImportoRiaccreditato: "111",
              DbDataLiquidazioneArretrato: "01/01/2016"
            }
          ],
          DbElencoImportiDaRecuperare: [{
            DbDataUltimaModifica: "23/02/2016",
            DbTipoDiRecupero: "compensazione",
            DbTotDaRecuperare: {
              DbCapitale: "435.00",
              DbInteressiLegali: "8.7",
              DbInteressiDiRateizzazione: "4.35"
            },
            DbRecuperato: "108.75",
            DbRestituito: null,
            DbRimanenteDaRecuperare: "339.30",
            DbNote: "sda kpopoi pèoipèo dfhaklsdj lasdòlaf"
          }],

          CognomeAcquisito: "Alfano Acquisito",
          IdStatoCivile: "Coniugata",
          IdProvinciaNascita: "Milano",
          IdNazioneNascita: "Italia",
          IdCittadinanza: "Italiana",
          DbExtracomunitario: "Si",

          DbPermessoDiSoggiornoTipoPermesso: "Lorem ipsum dolor",
          DbPermessoDiSoggiornoDataRilascio: "01/01/2020",
          DbPermessoDiSoggiornoValidoFinoAl: "01/01/2020",
          TelefonoPrincipale: "0461 912585",
          TelefonoSecondario: "0461 923452",
          Email: "mrossi@gmail.com",
          Pec: "mrossi@gmail.com",
          DbNote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius purus tellus, ac auctor nibh dictum consequat"
        },
        {
          Id: "3",
          CodiceFiscale: "QTGSRO60A11Q2055",
          Cognome: "Hammond",
          Nome: "John",
          DataNascita: "01/01/1970",

          Sesso: "F",
          IdComuneNascita: "Bologna",
          DbNazionalita: "Italiana",
          DbResidenza: "via Luigi Cadorna, 53 - 39100 Bolzano BZ",
          DbDomicilio: "via Armando Diaz, 2 - 39100 Bolzano BZ",
          DbAltriIndirizzi: "indirizzo di prova qòlwekrjòlqwekjròlqwkjer",

          DataDecesso: "01/01/1990",
          DbEredita: {
            DbNumeroFaldone: "3333333",
            DbAnnoDiScartoINCISO: "2018",

            DbDataCalcoloSimulazione: "01/01/2020",
            ImportoSpettante: "580000.39",
            DbEredi: [{
                DbCognomeNome: "Paolo Bianchi",
                DbCodiceFiscale: "RSSMRA53A36Q2357",
                DbPercDiEredita: "50%",
                DbLiquidatoInBaseAllaPercDiEredita: "28400.00",
                DbLiquidazione: "30/06/2016"
              },
              {
                DbCognomeNome: "Marco Bianchi",
                DbCodiceFiscale: "RSSMRA53A36Q2357",
                DbPercDiEredita: "25%",
                DbLiquidatoInBaseAllaPercDiEredita: "14200.00",
                DbLiquidazione: "30/06/2016"
              },
              {
                DbCognomeNome: "Sara Bianchi",
                DbCodiceFiscale: "RSSMRA53A36Q5372",
                DbPercDiEredita: "15%",
                DbLiquidatoInBaseAllaPercDiEredita: "14200.00",
                DbLiquidazione: "30/06/2016"
              }
            ]
          },

          PersonaRedditi: [{
              IdPersona: 7,
              Anno: "2018",
              DbRedditoAssistito: "111111.45",
              DbRedditoConiuge: "6578.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "111Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "88268.00"
                },
                {
                  DbTipologia: "111Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "112000.00"
                },
                {
                  DbTipologia: "111Altri redditi da fabbricati",
                  DbValore: "2763.00"
                }
              ]
            },
            {
              Anno: "2017",
              DbRedditoAssistito: "22222225.45",
              DbRedditoConiuge: "222222228.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "222Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "88628.00"
                },
                {
                  DbTipologia: "222Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "112000.00"
                },
                {
                  DbTipologia: "2222Altri redditi da fabbricati",
                  DbValore: "2763.00"
                }
              ]
            },
            {
              Anno: "2016",
              DbRedditoAssistito: "33333333.45",
              DbRedditoConiuge: "33333333.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "333Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "333Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "333Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2015",
              DbRedditoAssistito: "44444444.45",
              DbRedditoConiuge: "44444444.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "4444Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "4444Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "4444Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2014",
              DbRedditoAssistito: "555555555.45",
              DbRedditoConiuge: "5555555.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "5555Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "5555Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "5555Altri redditi da fabbricati",
                  DbValore: "555763.00"
                }
              ]
            },
            {
              Anno: "2013",
              DbRedditoAssistito: "666666666.45",
              DbRedditoConiuge: "6666666.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2012",
              DbRedditoAssistito: "77777777.45",
              DbRedditoConiuge: "7777777.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "66666Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "666666Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "66666Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2011",
              DbRedditoAssistito: "88888888.45",
              DbRedditoConiuge: "88888888.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "77777Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "77777Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "7777Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2010",
              DbRedditoAssistito: "9999999.45",
              DbRedditoConiuge: "999999.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "88888Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "88888Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "88888Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            }
          ],

          DbPensioni: [{
              Tipo: "xxxxx xxxxxxx",
              DbTipologiaDiAssistenza: "77",
              DbDataFineCompatibilita: "01/01/01",
              DbNote: "eeqrtwtyre"
            },
            {
              DbTipo: "yyyyy xxxxx xxxxxxx",
              DbTipologiaDiAssistenza: "77",
              DbDataFineCompatibilita: "01/01/01",
              DbNote: "eeqrtwtyre"
            },
            {
              DbTipo: "yyyy xxxxx xxxxxxx",
              DbTipologiaDiAssistenza: "77",
              DbDataFineCompatibilita: "01/01/01",
              DbNote: "eeqrtwtyre"
            }
          ],

          PersonaIndirizzi: [{
              DbTipo: "Indirizzo abitazione",
              DbIndirizo: "viale Giusti Antonia, 53 - 39100 Milano MI",
              DbValidita: "dal 01/01/2010 al 02/02/2011",

              DbNazione: "Italia",
              DbComune: "Napoli",
              DbCap: "84092",
              DbFrazione: "11111111",
              DbVia: "111111111111",
              DbCivico: "6",
              DbUsaIndirizzo: "No",
              DbNote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              DbTipo: "Indirizzo lavoro",
              DbIndirizo: "viale Lavoro, 53 - 39100 Lavoro MI",
              DbValidita: "dal 01/01/2010 al 02/02/2014",

              DbNazione: "Italia",
              DbComune: "Napoli",
              DbCap: "84092",
              DbFrazione: "2222222",
              DbVia: "22222222222222",
              DbCivico: "6",
              DbUsaIndirizzo: "No",
              DbNote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              DbTipo: "Indirizzo secondario",
              DbIndirizo: "viale Secondario, 53 - 39100 Secondo MI",
              DbValidita: "dal 01/01/2010 al 02/02/2011",

              DbNazione: "Italia",
              DbComune: "Napoli",
              DbCap: "84092",
              DbFrazione: "3333333",
              DbVia: "3333333333333333",
              DbCivico: "6",
              DbUsaIndirizzo: "No",
              DbNote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            }
          ],
          DbAssociazioni: [{
              DbNumPosizione: "333333",
              DbDataDomanda: "05/03/2011",
              DbTipoAssociazione: "3333ANMIC",
              DbInizioIscrizione: "02/04/2013",
              DbFineIscrizione: "",
              DbElencoRitenuteDiCategoriaRecuperate: []
            },
            {
              DbNumPosizione: "333333",
              DbDataDomanda: "07/08/2012",
              DbTipoAssociazione: "33333UICI",
              DbInizioIscrizione: "07/08/2012",
              DbFineIscrizione: "07/08/2016",
              DbElencoRitenuteDiCategoriaRecuperate: [{
                DbDataRecupero: "15/03/2014",
                DbImportoRecuperato: "33333.00",
                DbNote: "3333333333333hlkjhlkjhlkjhlkjh. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
              }]
            },
            {
              DbNumPosizione: "345467",
              DbDataDomanda: "07/09/2019",
              DbTipoAssociazione: "ULMM",
              DbInizioIscrizione: "07/08/2014",
              DbFineIscrizione: "07/08/2017",
              DbElencoRitenuteDiCategoriaRecuperate: [{
                DbDataRecupero: "01/03/2015",
                DbImportoRecuperato: "33312349.00",
                DbNote: "3333333333333333acinia quam venenatis vestibulum."
              }]
            }
          ],
          DbLiquidazioni: [{
              DbDataCalcolo: "01/01/2016",
              DbLiquidato: "864.00",
              DbRiaccredito: "864.00",
              DbTrattenutaDiCategoria: "6.00",
              DbImportoRecuperatoPerCompensazione: null,
              DbNrTrasferimentoFlumo: {
                DbNrMandato: "32985432",
                DbData: "12/07/2013"
              },
              DbTotMese: "1728.00",
              DbTotAnno: "1728.00"
            },
            {
              DbDataCalcolo: "01/02/2016",
              DbLiquidato: "864.00",
              DbRiaccredito: null,
              DbTrattenutaDiCategoria: "6.00",
              DbImportoRecuperatoPerCompensazione: null,
              DbNrTrasferimentoFlumo: {
                DbNrMandato: "32985432",
                DbData: "12/07/2013"
              },
              DbTotMese: "864.00",
              DbTotAnno: "2592.00"
            },
            {
              DbDataCalcolo: "01/03/2016",
              DbLiquidato: "320.25",
              DbRiaccredito: null,
              DbTrattenutaDiCategoria: "6.00",
              DbImportoRecuperatoPerCompensazione: "108.75",
              DbNrTrasferimentoFlumo: {
                DbNrMandato: "32985432",
                DbData: "12/07/2013"
              },
              DbTotMese: "320.25",
              DbTotAnno: "2912.25"
            }
          ],

          DbElencoImportiRiaccreditati: [{
              DbDataRiaccredito: "18/11/2015",
              DbImportoRiaccreditato: "864",
              DbDataLiquidazioneArretrato: "01/01/2016"
            },

            {
              DbDataRiaccredito: "18/11/2015",
              DbImportoRiaccreditato: "111",
              DbDataLiquidazioneArretrato: "01/01/2016"
            }
          ],
          DbElencoImportiDaRecuperare: [{
            DbDataUltimaModifica: "23/02/2016",
            DbTipoDiRecupero: "compensazione",
            DbTotDaRecuperare: {
              DbCapitale: "435.00",
              DbInteressiLegali: "8.7",
              DbInteressiDiRateizzazione: "4.35"
            },
            DbRecuperato: "108.75",
            DbRestituito: null,
            DbRimanenteDaRecuperare: "339.30",
            DbNote: "sda kpopoi pèoipèo dfhaklsdj lasdòlaf"
          }],

          CognomeAcquisito: "Alfano Acquisito",
          IdStatoCivile: "Coniugata",
          IdProvinciaNascita: "Milano",
          IdNazioneNascita: "Italia",
          IdCittadinanza: "Italiana",
          DbExtracomunitario: "Si",

          DbPermessoDiSoggiornoTipoPermesso: "Lorem ipsum dolor",
          DbPermessoDiSoggiornoDataRilascio: "01/01/2020",
          DbPermessoDiSoggiornoValidoFinoAl: "01/01/2020",
          TelefonoPrincipale: "0461 912585",
          TelefonoSecondario: "0461 923452",
          Email: "mrossi@gmail.com",
          Pec: "mrossi@gmail.com",
          DbNote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius purus tellus, ac auctor nibh dictum consequat"
        },
        {
          Id: "4",
          CodiceFiscale: "RTSDRO70A10W2056",
          Cognome: "Mudassar",
          Nome: "Khan",
          DataNascita: "01/02/1650",
          Sesso: "F",
          IdComuneNascita: "Bolzano",
          DbNazionalita: "Inglese",
          DbResidenza: "via Carlo Alberto della Chiesa, 53 - 39100 Milano BZ",
          DbDomicilio: "via Giocchino Diaz, 2 - 39100 Bolzano BZ",
          DbAltriIndirizzi: "qò lwe k rj ò lqwekjròlqwkjer",

          DataDecesso: "01/01/1930",
          DbEredita: {
            DbNumeroFaldone: "333313454",
            DbAnnoDiScartoINCISO: "2015",

            DbDataCalcoloSimulazione: "11/11/2021",
            ImportoSpettante: "580000.39",
            DbEredi: [{
                DbCognomeNome: "gIUSEPPE Bianchi-4444",
                DbCodiceFiscale: "RSSMRA53A36Q2357",
                DbPercDiEredita: "50%",
                DbLiquidatoInBaseAllaPercDiEredita: "28400.00",
                DbLiquidazione: "30/06/2017"
              },
              {
                DbCognomeNome: "Marco Bianchi",
                DbCodiceFiscale: "RSSMRA53A36Q2357",
                DbPercDiEredita: "5%",
                DbLiquidatoInBaseAllaPercDiEredita: "14200.00",
                DbLiquidazione: "30/06/2016"
              },
              {
                DbCognomeNome: "SaSSSSra Bianchi",
                DbCodiceFiscale: "RSSMRA53A36Q5372",
                DbPercDiEredita: "5%",
                DbLiquidatoInBaseAllaPercDiEredita: "14200.00",
                DbLiquidazione: "30/06/2016"
              }
            ]
          },

          PersonaRedditi: [{
              IdPersona: 7,
              Anno: "2018",
              DbRedditoAssistito: "111111.45",
              DbRedditoConiuge: "6578.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "111Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "88268.00"
                },
                {
                  DbTipologia: "111Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "112000.00"
                },
                {
                  DbTipologia: "111Altri redditi da fabbricati",
                  DbValore: "2763.00"
                }
              ]
            },
            {
              Anno: "2017",
              DbRedditoAssistito: "22222225.45",
              DbRedditoConiuge: "222222228.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "222Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "88628.00"
                },
                {
                  DbTipologia: "222Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "112000.00"
                },
                {
                  DbTipologia: "2222Altri redditi da fabbricati",
                  DbValore: "2763.00"
                }
              ]
            },
            {
              Anno: "2016",
              DbRedditoAssistito: "33333333.45",
              DbRedditoConiuge: "33333333.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "333Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "333Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "333Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2015",
              DbRedditoAssistito: "44444444.45",
              DbRedditoConiuge: "44444444.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "4444Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "4444Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "4444Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2014",
              DbRedditoAssistito: "555555555.45",
              DbRedditoConiuge: "5555555.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "5555Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "5555Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "5555Altri redditi da fabbricati",
                  DbValore: "555763.00"
                }
              ]
            },
            {
              Anno: "2013",
              DbRedditoAssistito: "666666666.45",
              DbRedditoConiuge: "6666666.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2012",
              DbRedditoAssistito: "77777777.45",
              DbRedditoConiuge: "7777777.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "66666Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "666666Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "66666Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2011",
              DbRedditoAssistito: "88888888.45",
              DbRedditoConiuge: "88888888.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "77777Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "77777Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "7777Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2010",
              DbRedditoAssistito: "9999999.45",
              DbRedditoConiuge: "999999.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "88888Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "88888Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "88888Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            }
          ],

          DbPensioni: [{
              DbTipo: "xxxxx xxxxxxx",
              DbTipologiaDiAssistenza: "77",
              DbDataFineCompatibilita: "01/01/01",
              DbNote: "eeqrtwtyre"
            },
            {
              DbTipo: "yyyyy xxxxx xxxxxxx",
              DbTipologiaDiAssistenza: "77",
              DbDataFineCompatibilita: "01/01/01",
              DbNote: "eeqrtwtyre"
            },
            {
              DbTipo: "yyyy xxxxx xxxxxxx",
              DbTipologiaDiAssistenza: "77",
              DbDataFineCompatibilita: "01/01/01",
              DbNote: "eeqrtwtyre"
            }
          ],

          PersonaIndirizzi: [{
              DbTipo: "Indirizzo abitazione",
              DbIndirizo: "viale Giusti Antonia, 53 - 39100 Milano MI",
              DbValidita: "dal 01/01/2010 al 02/02/2011",

              DbNazione: "Italia",
              DbComune: "Napoli",
              DbCap: "84092",
              DbFrazione: "12132",
              DbVia: "41234232",
              DbCivico: "6",
              DbUsaIndirizzo: "No",
              DbNote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              DbTipo: "Indirizzo lavoro",
              DbIndirizo: "viale Lavoro, 53 - 39100 Lavoro MI",
              DbValidita: "dal 01/01/2010 al 02/02/2014",

              DbNazione: "Italia",
              DbComune: "Napoli",
              DbCap: "84092",
              DbFrazione: "333333",
              DbVia: "12313413",
              DbCivico: "6",
              DbUsaIndirizzo: "No",
              DbNote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              DbTipo: "Indirizzo secondario",
              DbIndirizo: "viale Secondario, 53 - 39100 Secondo MI",
              DbValidita: "dal 01/01/2010 al 02/02/2011",

              DbNazione: "Italia",
              DbComune: "Napoli",
              DbCap: "84092",
              DbFrazione: "xxx222",
              DbVia: "xxx223242121x",
              DbCivico: "6",
              DbUsaIndirizzo: "No",
              DbNote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            }
          ],
          DbAssociazioni: [{
              DbNumPosizione: "778767",
              DbDataDomanda: "05/03/2011",
              DbTipoAssociazione: "ANMIC",
              DbInizioIscrizione: "02/04/2013",
              DbFineIscrizione: "",
              DbElencoRitenuteDiCategoriaRecuperate: []
            },
            {
              DbNumPosizione: "993423",
              DbDataDomanda: "07/08/2012",
              DbTipoAssociazione: "UICI",
              DbInizioIscrizione: "07/08/2012",
              DbFineIscrizione: "07/08/2016",
              DbElencoRitenuteDiCategoriaRecuperate: [{
                DbDataRecupero: "15/03/2014",
                DbImportoRecuperato: "12349.00",
                DbNote: "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
              }]
            },
            {
              DbNumPosizione: "444444444",
              DbDataDomanda: "04/08/2014",
              DbTipoAssociazione: "ULMM",
              DbInizioIscrizione: "04/08/2014",
              DbFineIscrizione: "04/08/2014",
              DbElencoRitenuteDiCategoriaRecuperate: [{
                DbDataRecupero: "01/03/2015",
                DbImportoRecuperato: "444444.00",
                DbNote: "44444444 kjòlkjòlkjòlkjl   u leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
              }]
            }
          ],
          DbLiquidazioni: [{
              DbDataCalcolo: "01/01/2016",
              DbLiquidato: "864.00",
              DbRiaccredito: "864.00",
              DbTrattenutaDiCategoria: "6.00",
              DbImportoRecuperatoPerCompensazione: null,
              DbNrTrasferimentoFlumo: {
                DbNrMandato: "32985432",
                DbData: "12/07/2013"
              },
              DbTotMese: "1728.00",
              DbTotAnno: "1728.00"
            },
            {
              DbDataCalcolo: "01/02/2016",
              DbLiquidato: "864.00",
              DbRiaccredito: null,
              DbTrattenutaDiCategoria: "6.00",
              DbImportoRecuperatoPerCompensazione: null,
              DbNrTrasferimentoFlumo: {
                DbNrMandato: "32985432",
                DbData: "12/07/2013"
              },
              DbTotMese: "864.00",
              DbTotAnno: "2592.00"
            },
            {
              DbDataCalcolo: "01/03/2016",
              DbLiquidato: "320.25",
              DbRiaccredito: null,
              DbTrattenutaDiCategoria: "6.00",
              DbImportoRecuperatoPerCompensazione: "108.75",
              DbNrTrasferimentoFlumo: {
                DbNrMandato: "32985432",
                DbData: "12/07/2013"
              },
              DbTotMese: "320.25",
              DbTotAnno: "2912.25"
            }
          ],

          DbElencoImportiRiaccreditati: [{
              DbDataRiaccredito: "18/11/2015",
              DbImportoRiaccreditato: "864",
              DbDataLiquidazioneArretrato: "01/01/2016"
            },

            {
              DbDataRiaccredito: "18/11/2015",
              DbImportoRiaccreditato: "111",
              DbDataLiquidazioneArretrato: "01/01/2016"
            }
          ],
          DbElencoImportiDaRecuperare: [{
            DbDataUltimaModifica: "23/02/2016",
            DbTipoDiRecupero: "compensazione",
            DbTotDaRecuperare: {
              DbCapitale: "435.00",
              DbInteressiLegali: "8.7",
              DbInteressiDiRateizzazione: "4.35"
            },
            DbRecuperato: "108.75",
            DbRestituito: null,
            DbRimanenteDaRecuperare: "339.30",
            DbNote: "sda kpopoi pèoipèo dfhaklsdj lasdòlaf"
          }],

          CognomeAcquisito: "Alfano Acquisito",
          IdStatoCivile: "Coniugata",
          IdProvinciaNascita: "Milano",
          IdNazioneNascita: "Italia",
          IdCittadinanza: "Italiana",
          DbExtracomunitario: "Si",

          DbPermessoDiSoggiornoTipoPermesso: "Lorem ipsum dolor",
          DbPermessoDiSoggiornoDataRilascio: "01/01/2020",
          DbPermessoDiSoggiornoValidoFinoAl: "01/01/2020",
          TelefonoPrincipale: "0461 912585",
          TelefonoSecondario: "0461 923452",
          Email: "mrossi111@gmail.com",
          Pec: "mrossi@gmail.com",
          DbNote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius purus tellus, ac auctor nibh dictum consequat"
        },
        {
          Id: "5",
          CodiceFiscale: "VSYFRO70A10E2652",
          Cognome: "Mathews",
          Nome: "Suzanne",
          DataNascita: "01/01/1966",
          Sesso: "F",
          IdComuneNascita: "Bologna",
          DbNazionalita: "Italiana",
          DbResidenza: "via Luigi Venezia, 53 - 39100 Bolzano CT",
          DbDomicilio: "via Venezia Diaz, 2 - 39100 Bolzano VE",
          DbAltriIndirizzi: "qòlwek rjòlq wekjròlqwkjer",

          DataDecesso: "-",
          Eredita: null,

          PersonaRedditi: [{
              IdPersona: 7,

              Anno: "2018",
              DbRedditoAssistito: "111111.45",
              DbRedditoConiuge: "6578.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "111Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "88268.00"
                },
                {
                  DbTipologia: "111Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "112000.00"
                },
                {
                  DbTipologia: "111Altri redditi da fabbricati",
                  DbValore: "2763.00"
                }
              ]
            },
            {
              Anno: "2017",
              DbRedditoAssistito: "22222225.45",
              DbRedditoConiuge: "222222228.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "222Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "88628.00"
                },
                {
                  DbTipologia: "222Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "112000.00"
                },
                {
                  DbTipologia: "2222Altri redditi da fabbricati",
                  DbValore: "2763.00"
                }
              ]
            },
            {
              Anno: "2016",
              DbRedditoAssistito: "33333333.45",
              DbRedditoConiuge: "33333333.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "333Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "333Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "333Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2015",
              DbRedditoAssistito: "44444444.45",
              DbRedditoConiuge: "44444444.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "4444Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "4444Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "4444Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2014",
              DbRedditoAssistito: "555555555.45",
              DbRedditoConiuge: "5555555.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "5555Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "5555Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "5555Altri redditi da fabbricati",
                  DbValore: "555763.00"
                }
              ]
            },
            {
              Anno: "2013",
              DbRedditoAssistito: "666666666.45",
              DbRedditoConiuge: "6666666.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2012",
              DbRedditoAssistito: "77777777.45",
              DbRedditoConiuge: "7777777.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "66666Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "666666Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "66666Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2011",
              DbRedditoAssistito: "88888888.45",
              DbRedditoConiuge: "88888888.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "77777Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "77777Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "7777Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2010",
              DbRedditoAssistito: "9999999.45",
              DbRedditoConiuge: "999999.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "88888Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "88888Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "88888Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            }
          ],

          DbPensioni: [{
              DbTipo: "xxxxx xxxxxxx",
              DbTipologiaDiAssistenza: "77",
              DbDataFineCompatibilita: "01/01/01",
              DbNote: "eeqrtwtyre"
            },
            {
              DbTipo: "yyyyy xxxxx xxxxxxx",
              DbTipologiaDiAssistenza: "77",
              DbDataFineCompatibilita: "01/01/01",
              DbNote: "eeqrtwtyre"
            },
            {
              DbTipo: "yyyy xxxxx xxxxxxx",
              DbTipologiaDiAssistenza: "77",
              DbDataFineCompatibilita: "01/01/01",
              DbNote: "eeqrtwtyre"
            }
          ],

          PersonaIndirizzi: [{
              DbTipo: "Indirizzo abitazione",
              DbIndirizo: "viale Giusti Antonia, 53 - 39100 Milano MI",
              DbValidita: "dal 01/01/2010 al 02/02/2011",

              DbNazione: "Italia",
              DbComune: "Napoli",
              DbCap: "84092",
              DbFrazione: "33333333",
              DbVia: "33xxxxxxxxx",
              DbCivico: "6",
              DbUsaIndirizzo: "No",
              DbNote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              DbTipo: "Indirizzo lavoro",
              DbIndirizo: "viale Lavoro, 53 - 39100 Lavoro MI",
              DbValidita: "dal 01/01/2010 al 02/02/2014",

              DbNazione: "Italia",
              DbComune: "Napoli",
              DbCap: "84092",
              DbFrazione: "x23421xxxxx",
              DbVia: "x241342xxx",
              DbCivico: "6",
              DbUsaIndirizzo: "No",
              DbNote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              DbTipo: "Indirizzo secondario",
              DbIndirizo: "viale Secondario, 53 - 39100 Secondo MI",
              DbValidita: "dal 01/01/2010 al 02/02/2011",

              DbNazione: "Italia",
              DbComune: "Napoli",
              DbCap: "84092",
              DbFrazione: "x212xxxxx",
              DbVia: "2232xxxxxxx",
              DbCivico: "6",
              DbUsaIndirizzo: "No",
              DbNote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            }
          ],
          DbAssociazioni: [{
              DbNumPosizione: "555767",
              DbDataDomanda: "05/03/2011",
              DbTipoAssociazione: "ANMIC",
              DbInizioIscrizione: "02/04/2013",
              DbFineIscrizione: "",
              DbElencoRitenuteDiCategoriaRecuperate: []
            },
            {
              DbNumPosizione: "993555",
              DbDataDomanda: "07/08/2012",
              DbTipoAssociazione: "UICI",
              DbInizioIscrizione: "07/08/2012",
              DbFineIscrizione: "07/08/2016",
              DbElencoRitenuteDiCategoriaRecuperate: [{
                DbDataRecupero: "15/03/2014",
                DbImportoRecuperato: "12349.00",
                DbNote: "Sed posuere co5555555555555        esque ornare sem lacinia quam venenatis vestibulum."
              }]
            },
            {
              DbNumPosizione: "555555",
              DbDataDomanda: "07/08/2015",
              DbTipoAssociazione: "5555-ULMM",
              DbInizioIscrizione: "05/05/2014",
              DbFineIscrizione: "05/05/2017",
              DbElencoRitenuteDiCategoriaRecuperate: [{
                DbDataRecupero: "05/05/2015",
                DbImportoRecuperato: "12349.00",
                DbNote: "Sed posuere co5555555555555 nsectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
              }]
            }
          ],
          DbLiquidazioni: [{
              DbDataCalcolo: "01/01/2016",
              DbLiquidato: "864.00",
              DbRiaccredito: "864.00",
              DbTrattenutaDiCategoria: "6.00",
              DbImportoRecuperatoPerCompensazione: null,
              DbNrTrasferimentoFlumo: {
                DbNrMandato: "32985432",
                DbData: "12/07/2013"
              },
              DbTotMese: "1728.00",
              DbTotAnno: "1728.00"
            },
            {
              DbDataCalcolo: "01/02/2016",
              DbLiquidato: "864.00",
              DbRiaccredito: null,
              DbTrattenutaDiCategoria: "6.00",
              DbImportoRecuperatoPerCompensazione: null,
              DbNrTrasferimentoFlumo: {
                DbNrMandato: "32985432",
                DbData: "12/07/2013"
              },
              DbTotMese: "864.00",
              DbTotAnno: "2592.00"
            },
            {
              DbDataCalcolo: "01/03/2016",
              DbLiquidato: "320.25",
              DbRiaccredito: null,
              DbTrattenutaDiCategoria: "6.00",
              DbImportoRecuperatoPerCompensazione: "108.75",
              DbNrTrasferimentoFlumo: {
                DbNrMandato: "32985432",
                DbData: "12/07/2013"
              },
              DbTotMese: "320.25",
              DbTotAnno: "2912.25"
            }
          ],

          DbElencoImportiRiaccreditati: [{
              DbDataRiaccredito: "18/11/2015",
              DbImportoRiaccreditato: "864",
              DbDataLiquidazioneArretrato: "01/01/2016"
            },

            {
              DbDataRiaccredito: "18/11/2015",
              DbImportoRiaccreditato: "111",
              DbDataLiquidazioneArretrato: "01/01/2016"
            }
          ],
          DbElencoImportiDaRecuperare: [{
            DbDataUltimaModifica: "23/02/2016",
            DbTipoDiRecupero: "compensazione",
            DbTotDaRecuperare: {
              DbCapitale: "435.00",
              DbInteressiLegali: "8.7",
              DbInteressiDiRateizzazione: "4.35"
            },
            DbRecuperato: "108.75",
            DbRestituito: null,
            DbRimanenteDaRecuperare: "339.30",
            DbNote: "sda kpopoi pèoipèo dfhaklsdj lasdòlaf"
          }],

          CognomeAcquisito: "Alfano Acquisito",
          IdStatoCivile: "Coniugata",
          IdProvinciaNascita: "Milano",
          IdNazioneNascita: "Italia",
          IdCittadinanza: "Italiana",
          DbExtracomunitario: "Si",

          DbPermessoDiSoggiornoTipoPermesso: "Lorem ipsum dolor",
          DbPermessoDiSoggiornoDataRilascio: "01/01/2020",
          DbPermessoDiSoggiornoValidoFinoAl: "01/01/2020",
          TelefonoPrincipale: "0461 912585",
          TelefonoSecondario: "0461 923452",
          Email: "mrossi111@gmail.com",
          Pec: "mrossi@gmail.com",
          DbNote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius purus tellus, ac auctor nibh dictum consequat"
        },
        {
          Id: "6",
          CodiceFiscale: "WSSGRO70A10T2066",
          Cognome: "Schidner",
          Nome: "Robert",
          DataNascita: "01/04/1950",
          Sesso: "M",
          IdComuneNascita: "Roma",
          DbNazionalita: "Italiana",
          DbResidenza: "via dell'Albergo Murat, 53 - 89112 Roma RM",
          DbDomicilio: "via Bellini Diaz, 2 - 84094 Roma RM",
          DbAltriIndirizzi: "qòlwekrjòlqw ekjròl qwkjer",

          DataDecesso: "01/01/1930",
          DbEredita: {
            DbNumeroFaldone: "3345333333",
            DbAnnoDiScartoINCISO: "2016",

            DbDataCalcoloSimulazione: "01/01/2020",
            DbImportoSpettanteEredita: "480000.39",
            DbEredi: [{
                DbCognomeNome: "Paolo Bianchi-1111",
                DbCodiceFiscale: "RSSMRA53A36Q2357",
                DbPercDiEredita: "5%",
                DbLiquidatoInBaseAllaPercDiEredita: "2118400.00",
                DbLiquidazione: "30/06/2014"
              },
              {
                DbCognomeNome: "Marc00o Bianchi",
                DbCodiceFiscale: "RSSMRA53A36Q2357",
                DbPercDiEredita: "5%",
                DbLiquidatoInBaseAllaPercDiEredita: "14200.00",
                DbLiquidazione: "30/06/2016"
              },
              {
                DbCognomeNome: "SaAAAra Bianchi",
                DbCodiceFiscale: "RSSMRA53A36Q5372",
                DbPercDiEredita: "15%",
                DbLiquidatoInBaseAllaPercDiEredita: "114200.00",
                DbLiquidazione: "30/06/2016"
              }
            ]
          },

          PersonaRedditi: [{
              IdPersona: 7,
              Anno: "2018",
              DbRedditoAssistito: "111111.45",
              DbRedditoConiuge: "6578.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "111Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "88268.00"
                },
                {
                  DbTipologia: "111Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "112000.00"
                },
                {
                  DbTipologia: "111Altri redditi da fabbricati",
                  DbValore: "2763.00"
                }
              ]
            },
            {
              Anno: "2017",
              DbRedditoAssistito: "22222225.45",
              DbRedditoConiuge: "222222228.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "222Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "88628.00"
                },
                {
                  DbTipologia: "222Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "112000.00"
                },
                {
                  DbTipologia: "2222Altri redditi da fabbricati",
                  DbValore: "2763.00"
                }
              ]
            },
            {
              Anno: "2016",
              DbRedditoAssistito: "33333333.45",
              DbRedditoConiuge: "33333333.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "333Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "333Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "333Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2015",
              DbRedditoAssistito: "44444444.45",
              DbRedditoConiuge: "44444444.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "4444Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "4444Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "4444Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2014",
              DbRedditoAssistito: "555555555.45",
              DbRedditoConiuge: "5555555.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "5555Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "5555Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "5555Altri redditi da fabbricati",
                  DbValore: "555763.00"
                }
              ]
            },
            {
              Anno: "2013",
              DbRedditoAssistito: "666666666.45",
              DbRedditoConiuge: "6666666.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2012",
              DbRedditoAssistito: "77777777.45",
              DbRedditoConiuge: "7777777.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "66666Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "666666Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "66666Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2011",
              DbRedditoAssistito: "88888888.45",
              DbRedditoConiuge: "88888888.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "77777Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "77777Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "7777Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2010",
              DbRedditoAssistito: "9999999.45",
              DbRedditoConiuge: "999999.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "88888Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "88888Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "88888Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            }
          ],

          DbPensioni: [{
              DbTipo: "xxxxx xxxxxxx",
              DbTipologiaDiAssistenza: "77",
              DbDataFineCompatibilita: "01/01/01",
              DbNote: "eeqrtwtyre"
            },
            {
              DbTipo: "yyyyy xxxxx xxxxxxx",
              DbTipologiaDiAssistenza: "77",
              DbDataFineCompatibilita: "01/01/01",
              DbNote: "eeqrtwtyre"
            },
            {
              DbTipo: "yyyy xxxxx xxxxxxx",
              DbTipologiaDiAssistenza: "77",
              DbDataFineCompatibilita: "01/01/01",
              DbNote: "eeqrtwtyre"
            }
          ],

          PersonaIndirizzi: [{
              DbTipo: "Indirizzo abitazione",
              DbIndirizo: "viale Giusti Antonia, 53 - 39100 Milano MI",
              DbValidita: "dal 01/01/2010 al 02/02/2011",

              DbNazione: "Italia",
              DbComune: "Napoli",
              DbCap: "84092",
              DbFrazione: "11111",
              DbVia: "2222222222",
              DbCivico: "6",
              DbUsaIndirizzo: "No",
              DbNote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              DbTipo: "Indirizzo lavoro",
              DbIndirizo: "viale Lavoro, 53 - 39100 Lavoro MI",
              DbValidita: "dal 01/01/2010 al 02/02/2014",

              DbNazione: "Italia",
              DbComune: "Napoli",
              DbCap: "84092",
              DbFrazione: "444444",
              DbVia: "xxxxx444444444",
              DbCivico: "6",
              DbUsaIndirizzo: "No",
              DbNote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              DbTipo: "Indirizzo secondario",
              DbIndirizo: "viale Secondario, 53 - 39100 Secondo MI",
              DbValidita: "dal 01/01/2010 al 02/02/2011",

              DbNazione: "Italia",
              DbComune: "Napoli",
              DbCap: "84092",
              DbFrazione: "xx5555x",
              DbVia: "xx555555555",
              DbCivico: "6",
              DbUsaIndirizzo: "No",
              DbNote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            }
          ],
          DbAssociazioni: [{
              DbNumPosizione: "666666778767",
              DbDataDomanda: "05/03/2011",
              DbTipoAssociazione: "ANMIC",
              DbInizioIscrizione: "02/04/2013",
              DbFineIscrizione: "",
              DbElencoRitenuteDiCategoriaRecuperate: []
            },
            {
              DbNumPosizione: "99366666423",
              DbDataDomanda: "07/08/2012",
              DbTipoAssociazione: "UICI",
              DbInizioIscrizione: "07/08/2012",
              DbFineIscrizione: "07/08/2016",
              DbElencoRitenuteDiCategoriaRecuperate: [{
                DbDataRecupero: "15/03/2014",
                DbImportoRecuperato: "12349.00",
                DbNote: "Sed posuere cons6666666666ectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
              }]
            },
            {
              DbNumPosizione: "376899",
              DbDataDomanda: "07/08/2011",
              DbTipoAssociazione: "ULMM",
              DbInizioIscrizione: "07/08/2014",
              DbFineIscrizione: "07/08/2017",
              DbElencoRitenuteDiCategoriaRecuperate: [{
                DbDataRecupero: "01/03/2015",
                DbImportoRecuperato: "12666666.00",
                DbNote: "Sed posuere consectetur e6666 66666 66666 66666 6666 inia quam venenatis vestibulum."
              }]
            }
          ],
          DbLiquidazioni: [{
              DbDataCalcolo: "01/01/2016",
              DbLiquidato: "864.00",
              DbRiaccredito: "864.00",
              DbTrattenutaDiCategoria: "6.00",
              DbImportoRecuperatoPerCompensazione: null,
              DbNrTrasferimentoFlumo: {
                DbNrMandato: "32985432",
                DbData: "12/07/2013"
              },
              DbTotMese: "1728.00",
              DbTotAnno: "1728.00"
            },
            {
              DbDataCalcolo: "01/02/2016",
              DbLiquidato: "864.00",
              DbRiaccredito: null,
              DbTrattenutaDiCategoria: "6.00",
              DbImportoRecuperatoPerCompensazione: null,
              DbNrTrasferimentoFlumo: {
                DbNrMandato: "32985432",
                DbData: "12/07/2013"
              },
              DbTotMese: "864.00",
              DbTotAnno: "2592.00"
            },
            {
              DbDataCalcolo: "01/03/2016",
              DbLiquidato: "320.25",
              DbRiaccredito: null,
              DbTrattenutaDiCategoria: "6.00",
              DbImportoRecuperatoPerCompensazione: "108.75",
              DbNrTrasferimentoFlumo: {
                DbNrMandato: "32985432",
                DbData: "12/07/2013"
              },
              DbTotMese: "320.25",
              DbTotAnno: "2912.25"
            }
          ],

          DbElencoImportiRiaccreditati: [{
              DbDataRiaccredito: "18/11/2015",
              DbImportoRiaccreditato: "864",
              DbDataLiquidazioneArretrato: "01/01/2016"
            },

            {
              DbDataRiaccredito: "18/11/2015",
              DbImportoRiaccreditato: "111",
              DbDataLiquidazioneArretrato: "01/01/2016"
            }
          ],
          DbElencoImportiDaRecuperare: [{
            DbDataUltimaModifica: "23/02/2016",
            DbTipoDiRecupero: "compensazione",
            DbTotDaRecuperare: {
              DbCapitale: "435.00",
              DbInteressiLegali: "8.7",
              DbInteressiDiRateizzazione: "4.35"
            },
            DbRecuperato: "108.75",
            DbRestituito: null,
            DbRimanenteDaRecuperare: "339.30",
            DbNote: "sda kpopoi pèoipèo dfhaklsdj lasdòlaf"
          }],

          CognomeAcquisito: "Alfano Acquisito",
          IdStatoCivile: "Coniugata",
          IdProvinciaNascita: "Milano",
          IdNazioneNascita: "Italia",
          IdCittadinanza: "Italiana",
          DbExtracomunitario: "Si",

          DbPermessoDiSoggiornoTipoPermesso: "Lorem ipsum dolor",
          DbPermessoDiSoggiornoDataRilascio: "01/01/2020",
          DbPermessoDiSoggiornoValidoFinoAl: "01/01/2020",
          TelefonoPrincipale: "0461 912585",
          TelefonoSecondario: "0123 456789",
          Email: "mrossi222@gmail.com",
          Pec: "mrossi@gmail.com",
          DbNote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius purus tellus, ac auctor nibh dictum consequat"
        },
        {
          Id: "7",
          CodiceFiscale: "1234567890123456",
          Cognome: "Alfano-1111",
          Nome: "Camillo-1111",
          DataNascita: "01/01/1930",
          Sesso: "F",
          IdComuneNascita: "Bolzano-11",
          DbNazionalita: "Italiana",
          DbResidenza: "via Giocchino Murat, 53 - 89112 Roma RM",
          DbDomicilio: "via Armando Diaz, 2 - 84094 Roma RM",
          DbAltriIndirizzi: "indirizzo straniero 1 wekjròlqwkjer",
          DataDecesso: "-",
          Eredita: null,

          PersonaRedditi: [{
              IdPersona: 7,
              Anno: "2018",
              DbRedditoAssistito: "111111.45",
              DbRedditoConiuge: "6578.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "111Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "88268.00"
                },
                {
                  DbTipologia: "111Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "112000.00"
                },
                {
                  DbTipologia: "111Altri redditi da fabbricati",
                  DbValore: "2763.00"
                }
              ]
            },
            {
              Anno: "2017",
              DbRedditoAssistito: "22222225.45",
              DbRedditoConiuge: "222222228.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "222Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "88628.00"
                },
                {
                  DbTipologia: "222Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "112000.00"
                },
                {
                  DbTipologia: "2222Altri redditi da fabbricati",
                  DbValore: "2763.00"
                }
              ]
            },
            {
              Anno: "2016",
              DbRedditoAssistito: "33333333.45",
              DbRedditoConiuge: "33333333.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "333Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "333Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "333Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2015",
              DbRedditoAssistito: "44444444.45",
              DbRedditoConiuge: "44444444.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "4444Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "4444Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "4444Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2014",
              DbRedditoAssistito: "555555555.45",
              DbRedditoConiuge: "5555555.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "5555Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "5555Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "5555Altri redditi da fabbricati",
                  DbValore: "555763.00"
                }
              ]
            },
            {
              Anno: "2013",
              DbRedditoAssistito: "666666666.45",
              DbRedditoConiuge: "6666666.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2012",
              DbRedditoAssistito: "77777777.45",
              DbRedditoConiuge: "7777777.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "66666Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "666666Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "66666Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2011",
              DbRedditoAssistito: "88888888.45",
              DbRedditoConiuge: "88888888.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "77777Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "77777Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "7777Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2010",
              DbRedditoAssistito: "9999999.45",
              DbRedditoConiuge: "999999.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "88888Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "88888Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "88888Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            }
          ],

          DbPensioni: [{
              DbTipo: "xxxxx xxxxxxx",
              DbTipologiaDiAssistenza: "77",
              DbDataFineCompatibilita: "01/01/01",
              DbNote: "eeqrtwtyre"
            },
            {
              DbTipo: "yyyyy xxxxx xxxxxxx",
              DbTipologiaDiAssistenza: "77",
              DbDataFineCompatibilita: "01/01/01",
              DbNote: "eeqrtwtyre"
            },
            {
              DbTipo: "yyyy xxxxx xxxxxxx",
              DbTipologiaDiAssistenza: "77",
              DbDataFineCompatibilita: "01/01/01",
              DbNote: "eeqrtwtyre"
            }
          ],

          PersonaIndirizzi: [{
              DbTipo: "Indirizzo abitazione",
              DbIndirizo: "viale Giusti Antonia, 53 - 39100 Milano MI",
              DbValidita: "dal 01/01/2010 al 02/02/2011",

              DbNazione: "Italia",
              DbComune: "Napoli",
              DbCap: "84092",
              DbFrazione: "aaaaa",
              DbVia: "xxxxxxxxxxxxxxxx",
              DbCivico: "6",
              DbUsaIndirizzo: "No",
              DbNote: "fkjsaòldfkjasòkdfjaòkjòaldskjf"
            },
            {
              DbTipo: "Indirizzo lavoro",
              DbIndirizo: "viale Lavoro, 53 - 39100 Lavoro MI",
              DbValidita: "dal 01/01/2010 al 02/02/2014",

              DbNazione: "Italia",
              DbComune: "Napoli",
              DbCap: "84092",
              DbFrazione: "xxxxxx",
              DbVia: "xxxxxxaaaaaxxxx",
              DbCivico: "6",
              DbUsaIndirizzo: "No",
              DbNote: "fkjsaòldfkjasòkdfjaòkjòaldskjf"
            },
            {
              DbTipo: "Indirizzo secondario",
              DbIndirizo: "viale Secondario, 53 - 39100 Secondo MI",
              DbValidita: "dal 01/01/2010 al 02/02/2011",

              DbNazione: "Italia",
              DbComune: "Napoli",
              DbCap: "84092",
              DbFrazione: "aaaaa",
              DbVia: "xxxxxxxxxxxxxxxx",
              DbCivico: "6",
              DbUsaIndirizzo: "No",
              DbNote: "fkjsaòldfkjasòkdfjaòkjòaldskjf"
            }
          ],
          DbAssociazioni: [{
              DbNumPosizione: "778767",
              DbDataDomanda: "05/03/2011",
              DbTipoAssociazione: "ANMIC",
              DbInizioIscrizione: "02/04/2013",
              DbFineIscrizione: "",
              DbElencoRitenuteDiCategoriaRecuperate: []
            },
            {
              DbNumPosizione: "993423",
              DbDataDomanda: "07/08/2012",
              DbTipoAssociazione: "UICI",
              DbInizioIscrizione: "07/08/2012",
              DbFineIscrizione: "07/08/2016",
              DbElencoRitenuteDiCategoriaRecuperate: [{
                DbDataRecupero: "15/03/2014",
                DbImportoRecuperato: "12349.00",
                DbNote: "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
              }]
            },
            {
              DbNumPosizione: "376899",
              DbDataDomanda: "07/08/2011",
              DbTipoAssociazione: "ULMM",
              DbInizioIscrizione: "07/08/2014",
              DbFineIscrizione: "07/08/2017",
              DbElencoRitenuteDiCategoriaRecuperate: [{
                DbDataRecupero: "01/03/2015",
                DbImportoRecuperato: "12349.00",
                DbNote: "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
              }]
            }
          ],
          DbLiquidazioni: [{
              DbDataCalcolo: "01/01/2016",
              DbLiquidato: "864.00",
              DbRiaccredito: "864.00",
              DbTrattenutaDiCategoria: "6.00",
              DbImportoRecuperatoPerCompensazione: null,
              DbNrTrasferimentoFlumo: {
                DbNrMandato: "32985432",
                DbData: "12/07/2013"
              },
              DbTotMese: "1728.00",
              DbTotAnno: "1728.00"
            },
            {
              DbDataCalcolo: "01/02/2016",
              DbLiquidato: "864.00",
              DbRiaccredito: null,
              DbTrattenutaDiCategoria: "6.00",
              DbImportoRecuperatoPerCompensazione: null,
              DbNrTrasferimentoFlumo: {
                DbNrMandato: "32985432",
                DbData: "12/07/2013"
              },
              DbTotMese: "864.00",
              DbTotAnno: "2592.00"
            },
            {
              DbDataCalcolo: "01/03/2016",
              DbLiquidato: "320.25",
              DbRiaccredito: null,
              DbTrattenutaDiCategoria: "6.00",
              DbImportoRecuperatoPerCompensazione: "108.75",
              DbNrTrasferimentoFlumo: {
                DbNrMandato: "32985432",
                DbData: "12/07/2013"
              },
              DbTotMese: "320.25",
              DbTotAnno: "2912.25"
            }
          ],

          DbElencoImportiRiaccreditati: [{
              DbDataRiaccredito: "18/11/2015",
              DbImportoRiaccreditato: "864",
              DbDataLiquidazioneArretrato: "01/01/2016"
            },

            {
              DbDataRiaccredito: "18/11/2015",
              DbImportoRiaccreditato: "111",
              DbDataLiquidazioneArretrato: "01/01/2016"
            }
          ],
          DbElencoImportiDaRecuperare: [{
            DbDataUltimaModifica: "23/02/2016",
            DbTipoDiRecupero: "compensazione",
            DbTotDaRecuperare: {
              DbCapitale: "435.00",
              DbInteressiLegali: "8.7",
              DbInteressiDiRateizzazione: "4.35"
            },
            DbRecuperato: "108.75",
            DbRestituito: null,
            DbRimanenteDaRecuperare: "339.30",
            DbNote: "sda kpopoi pèoipèo dfhaklsdj lasdòlaf"
          }],

          CognomeAcquisito: "Alfano Acquisito",
          IdStatoCivile: "Coniugata",
          IdProvinciaNascita: "Milano",
          IdNazioneNascita: "Italia",
          IdCittadinanza: "Italiana",
          DbExtracomunitario: "Si",

          DbPermessoDiSoggiornoTipoPermesso: "Lorem ipsum dolor",
          DbPermessoDiSoggiornoDataRilascio: "01/01/2020",
          DbPermessoDiSoggiornoValidoFinoAl: "01/01/2020",
          TelefonoPrincipale: "0461 912585",
          TelefonoSecondario: "0461 923452",
          Email: "mrossi333@gmail.com",
          Pec: "mrossi@gmail.com",
          DbNote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius purus tellus, ac auctor nibh dictum consequat"
        },
        {
          Id: "8",
          CodiceFiscale: "RSSMRA70A41F2052",
          Cognome: "Hammond",
          Nome: "John22",
          DataNascita: "01/01/1970",
          Sesso: "F",
          IdComuneNascita: "Bologna 2",
          DbNazionalita: "Italiana",
          DbResidenza: "via Luigi Belli, 53 - 39100 Bolzano BZ",
          DbDomicilio: "via Diaz Armandino, 2 - 39100 Bolzano BZ",
          DbAltriIndirizzi: "indirizzo belga qòlwekrjòlqwekjròlqwkjer",

          DataDecesso: "-",
          Eredita: null,

          PersonaRedditi: [{
              IdPersona: 7,
              Anno: "2018",
              DbRedditoAssistito: "111111.45",
              DbRedditoConiuge: "6578.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "111Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "88268.00"
                },
                {
                  DbTipologia: "111Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "112000.00"
                },
                {
                  DbTipologia: "111Altri redditi da fabbricati",
                  DbValore: "2763.00"
                }
              ]
            },
            {
              Anno: "2017",
              DbRedditoAssistito: "22222225.45",
              DbRedditoConiuge: "222222228.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "222Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "88628.00"
                },
                {
                  DbTipologia: "222Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "112000.00"
                },
                {
                  DbTipologia: "2222Altri redditi da fabbricati",
                  DbValore: "2763.00"
                }
              ]
            },
            {
              Anno: "2016",
              DbRedditoAssistito: "33333333.45",
              DbRedditoConiuge: "33333333.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "333Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "333Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "333Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2015",
              DbRedditoAssistito: "44444444.45",
              DbRedditoConiuge: "44444444.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "4444Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "4444Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "4444Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2014",
              DbRedditoAssistito: "555555555.45",
              DbRedditoConiuge: "5555555.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "5555Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "5555Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "5555Altri redditi da fabbricati",
                  DbValore: "555763.00"
                }
              ]
            },
            {
              Anno: "2013",
              DbRedditoAssistito: "666666666.45",
              DbRedditoConiuge: "6666666.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2012",
              DbRedditoAssistito: "77777777.45",
              DbRedditoConiuge: "7777777.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "66666Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "666666Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "66666Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2011",
              DbRedditoAssistito: "88888888.45",
              DbRedditoConiuge: "88888888.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "77777Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "77777Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "7777Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2010",
              DbRedditoAssistito: "9999999.45",
              DbRedditoConiuge: "999999.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "88888Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "88888Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "88888Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            }
          ],

          DbPensioni: [{
              DbTipo: "xxxxx xxxxxxx",
              DbTipologiaDiAssistenza: "77",
              DbDataFineCompatibilita: "01/01/01",
              DbNote: "eeqrtwtyre"
            },
            {
              DbTipo: "yyyyy xxxxx xxxxxxx",
              DbTipologiaDiAssistenza: "77",
              DbDataFineCompatibilita: "01/01/01",
              DbNote: "eeqrtwtyre"
            },
            {
              DbTipo: "yyyy xxxxx xxxxxxx",
              DbTipologiaDiAssistenza: "77",
              DbDataFineCompatibilita: "01/01/01",
              DbNote: "eeqrtwtyre"
            }
          ],

          PersonaIndirizzi: [{
              DbTipo: "Indirizzo abitazione",
              DbIndirizo: "viale Giusti Antonia, 53 - 39100 Milano MI",
              DbValidita: "dal 01/01/2010 al 02/02/2011",

              DbNazione: "Italia",
              DbComune: "Napoli",
              DbCap: "84092",
              DbFrazione: "11111111",
              DbVia: "111111111111",
              DbCivico: "6",
              DbUsaIndirizzo: "No",
              DbNote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              DbTipo: "Indirizzo lavoro",
              DbIndirizo: "viale Lavoro, 53 - 39100 Lavoro MI",
              DbValidita: "dal 01/01/2010 al 02/02/2014",

              DbNazione: "Italia",
              DbComune: "Napoli",
              DbCap: "84092",
              DbFrazione: "2222222",
              DbVia: "22222222222222",
              DbCivico: "6",
              DbUsaIndirizzo: "No",
              DbNote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              DbTipo: "Indirizzo secondario",
              DbIndirizo: "viale Secondario, 53 - 39100 Secondo MI",
              DbValidita: "dal 01/01/2010 al 02/02/2011",

              DbNazione: "Italia",
              DbComune: "Napoli",
              DbCap: "84092",
              DbFrazione: "3333333",
              DbVia: "3333333333333333",
              DbCivico: "6",
              DbUsaIndirizzo: "No",
              DbNote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            }
          ],
          DbAssociazioni: [{
              DbNumPosizione: "778767",
              DbDataDomanda: "05/03/2011",
              DbTipoAssociazione: "ANMIC",
              DbInizioIscrizione: "02/04/2013",
              DbFineIscrizione: "",
              DbElencoRitenuteDiCategoriaRecuperate: []
            },
            {
              DbNumPosizione: "993423",
              DbDataDomanda: "07/08/2012",
              DbTipoAssociazione: "UICI",
              DbInizioIscrizione: "07/08/2012",
              DbFineIscrizione: "07/08/2016",
              DbElencoRitenuteDiCategoriaRecuperate: [{
                DbDataRecupero: "15/03/2014",
                DbImportoRecuperato: "12349.00",
                DbNote: "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
              }]
            },
            {
              DbNumPosizione: "376899",
              DbDataDomanda: "07/08/2011",
              DbTipoAssociazione: "ULMM",
              DbInizioIscrizione: "07/08/2014",
              DbFineIscrizione: "07/08/2017",
              DbElencoRitenuteDiCategoriaRecuperate: [{
                DbDataRecupero: "01/03/2015",
                DbImportoRecuperato: "12349.00",
                DbNote: "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
              }]
            }
          ],
          DbLiquidazioni: [{
              DbDataCalcolo: "01/01/2016",
              DbLiquidato: "864.00",
              DbRiaccredito: "864.00",
              DbTrattenutaDiCategoria: "6.00",
              DbImportoRecuperatoPerCompensazione: null,
              DbNrTrasferimentoFlumo: {
                DbNrMandato: "32985432",
                DbData: "12/07/2013"
              },
              DbTotMese: "1728.00",
              DbTotAnno: "1728.00"
            },
            {
              DbDataCalcolo: "01/02/2016",
              DbLiquidato: "864.00",
              DbRiaccredito: null,
              DbTrattenutaDiCategoria: "6.00",
              DbImportoRecuperatoPerCompensazione: null,
              DbNrTrasferimentoFlumo: {
                DbNrMandato: "32985432",
                DbData: "12/07/2013"
              },
              DbTotMese: "864.00",
              DbTotAnno: "2592.00"
            },
            {
              DbDataCalcolo: "01/03/2016",
              DbLiquidato: "320.25",
              DbRiaccredito: null,
              DbTrattenutaDiCategoria: "6.00",
              DbImportoRecuperatoPerCompensazione: "108.75",
              DbNrTrasferimentoFlumo: {
                DbNrMandato: "32985432",
                DbData: "12/07/2013"
              },
              DbTotMese: "320.25",
              DbTotAnno: "2912.25"
            }
          ],

          DbElencoImportiRiaccreditati: [{
              DbDataRiaccredito: "18/11/2015",
              DbImportoRiaccreditato: "864",
              DbDataLiquidazioneArretrato: "01/01/2016"
            },

            {
              DbDataRiaccredito: "18/11/2015",
              DbImportoRiaccreditato: "111",
              DbDataLiquidazioneArretrato: "01/01/2016"
            }
          ],
          DbElencoImportiDaRecuperare: [{
            DbDataUltimaModifica: "23/02/2016",
            DbTipoDiRecupero: "compensazione",
            DbTotDaRecuperare: {
              DbCapitale: "435.00",
              DbInteressiLegali: "8.7",
              DbInteressiDiRateizzazione: "4.35"
            },
            DbRecuperato: "108.75",
            DbRestituito: null,
            DbRimanenteDaRecuperare: "339.30",
            DbNote: "sda kpopoi pèoipèo dfhaklsdj lasdòlaf"
          }],

          CognomeAcquisito: "Alfano Acquisito",
          IdStatoCivile: "Coniugata",
          IdProvinciaNascita: "Milano",
          IdNazioneNascita: "Italia",
          IdCittadinanza: "Italiana",
          DbExtracomunitario: "Si",

          DbPermessoDiSoggiornoTipoPermesso: "Lorem ipsum dolor",
          DbPermessoDiSoggiornoDataRilascio: "01/01/2020",
          DbPermessoDiSoggiornoValidoFinoAl: "01/01/2020",
          TelefonoPrincipale: "0461 912585",
          TelefonoSecondario: "0461 923452",
          Email: "mrossi444@gmail.com",
          Pec: "mrossi@gmail.com",
          DbNote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius purus tellus, ac auctor nibh dictum consequat"
        },
        {
          Id: "9",
          CodiceFiscale: "RTSDRO70A10W2056",
          Cognome: "Mudassar",
          Nome: "Khan",
          DataNascita: "01/02/1650",
          Sesso: "F",
          IdComuneNascita: "Bolzano",
          DbNazionalita: "Inglese",
          DbResidenza: "via Carlo Alberto della Chiesa, 53 - 39100 Milano BZ",
          DbDomicilio: "via Giocchino Diaz, 2 - 39100 Bolzano BZ",
          DbAltriIndirizzi: "indirizzo austriaco qòlwekrjòlqwekjròlqwkjer",

          DataDecesso: "01/01/1930",
          DbEredita: [{
              DbCognomeNome: "Paolwwwo Biawdjkònchi",
              DbCodiceFiscale: "RSSMRA53A36Q2357",
              DbPercDiEredita: "50%",
              DbLiquidatoInBaseAllaPercDiEredita: "28400.00",
              DbLiquidazione: "30/06/2016"
            },
            {
              DbCognomeNome: "Marcwwwo Biancwwwhi",
              DbCodiceFiscale: "RSSMRA53A36Q2357",
              DbPercDiEredita: "25%",
              DbLiquidatoInBaseAllaPercDiEredita: "14200.00",
              DbLiquidazione: "30/06/2016"
            },
            {
              DbCognomeNome: "Sarwa Biancwi",
              DbCodiceFiscale: "RSSMRA53A36Q5372",
              DbPercDiEredita: "15%",
              DbLiquidatoInBaseAllaPercDiEredita: "14200.00",
              DbLiquidazione: "30/06/2016"
            },
            {
              DbCognomeNome: "Sarwa Biancwi",
              DbCodiceFiscale: "RSSMRA53A36Q5372",
              DbPercDiEredita: "15%",
              DbLiquidatoInBaseAllaPercDiEredita: "14200.00",
              DbLiquidazione: "30/06/2016"
            }
          ],

          PersonaRedditi: [{
              IdPersona: 7,
              Anno: "2018",
              DbRedditoAssistito: "111111.45",
              DbRedditoConiuge: "6578.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "111Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "88268.00"
                },
                {
                  DbTipologia: "111Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "112000.00"
                },
                {
                  DbTipologia: "111Altri redditi da fabbricati",
                  DbValore: "2763.00"
                }
              ]
            },
            {
              Anno: "2017",
              DbRedditoAssistito: "22222225.45",
              DbRedditoConiuge: "222222228.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "222Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "88628.00"
                },
                {
                  DbTipologia: "222Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "112000.00"
                },
                {
                  DbTipologia: "2222Altri redditi da fabbricati",
                  DbValore: "2763.00"
                }
              ]
            },
            {
              Anno: "2016",
              DbRedditoAssistito: "33333333.45",
              DbRedditoConiuge: "33333333.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "333Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "333Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "333Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2015",
              DbRedditoAssistito: "44444444.45",
              DbRedditoConiuge: "44444444.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "4444Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "4444Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "4444Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2014",
              DbRedditoAssistito: "555555555.45",
              DbRedditoConiuge: "5555555.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "5555Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "5555Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "5555Altri redditi da fabbricati",
                  DbValore: "555763.00"
                }
              ]
            },
            {
              Anno: "2013",
              DbRedditoAssistito: "666666666.45",
              DbRedditoConiuge: "6666666.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2012",
              DbRedditoAssistito: "77777777.45",
              DbRedditoConiuge: "7777777.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "66666Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "666666Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "66666Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2011",
              DbRedditoAssistito: "88888888.45",
              DbRedditoConiuge: "88888888.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "77777Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "77777Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "7777Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            },
            {
              Anno: "2010",
              DbRedditoAssistito: "9999999.45",
              DbRedditoConiuge: "999999.88",
              DbValidoPerGliAnniSuccessivi: true,

              NessunReddito: 0,
              DbTotaleValoreRedditoAssistito: "999999.00",
              EstremiPensione: "qqqqqqqqqqqq",
              Note: "note anno 2018 bla bla bla",

              DbDettagliConiuge: [],
              DbDettagliAssistito: [{
                  DbTipologia: "88888Reddito da lavoro dipendente,lavoro autonomo,di impresa",
                  DbValore: "8868.00"
                },
                {
                  DbTipologia: "88888Rendita catastale da fabbricati relativa alla prima casa d'abitazione",
                  DbValore: "11000.00"
                },
                {
                  DbTipologia: "88888Altri redditi da fabbricati",
                  DbValore: "763.00"
                }
              ]
            }
          ],

          DbPensioni: [{
              DbTipo: "xxxxx xxxxxxx",
              DbTipologiaDiAssistenza: "77",
              DbDataFineCompatibilita: "01/01/01",
              DbNote: "eeqrtwtyre"
            },
            {
              DbTipo: "yyyyy xxxxx xxxxxxx",
              DbTipologiaDiAssistenza: "77",
              DbDataFineCompatibilita: "01/01/01",
              DbNote: "eeqrtwtyre"
            },
            {
              DbTipo: "yyyy xxxxx xxxxxxx",
              DbTipologiaDiAssistenza: "77",
              DbDataFineCompatibilita: "01/01/01",
              DbNote: "eeqrtwtyre"
            }
          ],

          PersonaIndirizzi: [{
              DbTipo: "Indirizzo abitazione",
              DbIndirizo: "viale Giusti Antonia, 53 - 39100 Milano MI",
              DbValidita: "dal 01/01/2010 al 02/02/2011",

              DbNazione: "Italia",
              DbComune: "Napoli",
              DbCap: "84092",
              DbFrazione: "12132",
              DbVia: "41234232",
              DbCivico: "6",
              DbUsaIndirizzo: "No",
              DbNote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              DbTipo: "Indirizzo lavoro",
              DbIndirizo: "viale Lavoro, 53 - 39100 Lavoro MI",
              DbValidita: "dal 01/01/2010 al 02/02/2014",

              DbNazione: "Italia",
              DbComune: "Napoli",
              DbCap: "84092",
              DbFrazione: "333333",
              DbVia: "12313413",
              DbCivico: "6",
              DbUsaIndirizzo: "No",
              DbNote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              DbTipo: "Indirizzo secondario",
              DbIndirizo: "viale Secondario, 53 - 39100 Secondo MI",
              DbValidita: "dal 01/01/2010 al 02/02/2011",

              DbNazione: "Italia",
              DbComune: "Napoli",
              DbCap: "84092",
              DbFrazione: "xxx222",
              DbVia: "xxx223242121x",
              DbCivico: "6",
              DbUsaIndirizzo: "No",
              DbNote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            }
          ],
          DbAssociazioni: [{
              DbNumPosizione: "778767",
              DbDataDomanda: "05/03/2011",
              DbTipoAssociazione: "ANMIC",
              DbInizioIscrizione: "02/04/2013",
              DbFineIscrizione: "",
              DbElencoRitenuteDiCategoriaRecuperate: []
            },
            {
              DbNumPosizione: "993423",
              DbDataDomanda: "07/08/2012",
              DbTipoAssociazione: "UICI",
              DbInizioIscrizione: "07/08/2012",
              DbFineIscrizione: "07/08/2016",
              DbElencoRitenuteDiCategoriaRecuperate: [{
                DbDataRecupero: "15/03/2014",
                DbImportoRecuperato: "12349.00",
                DbNote: "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
              }]
            },
            {
              DbNumPosizione: "376899",
              DbDataDomanda: "07/08/2011",
              DbTipoAssociazione: "ULMM",
              DbInizioIscrizione: "07/08/2014",
              DbFineIscrizione: "07/08/2017",
              DbElencoRitenuteDiCategoriaRecuperate: [{
                DbDataRecupero: "01/03/2015",
                DbImportoRecuperato: "12349.00",
                DbNote: "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
              }]
            }
          ],
          DbLiquidazioni: [{
              DbDataCalcolo: "01/01/2016",
              DbLiquidato: "864.00",
              DbRiaccredito: "864.00",
              DbTrattenutaDiCategoria: "6.00",
              DbImportoRecuperatoPerCompensazione: null,
              DbNrTrasferimentoFlumo: {
                DbNrMandato: "32985432",
                DbData: "12/07/2013"
              },
              DbTotMese: "1728.00",
              DbTotAnno: "1728.00"
            },
            {
              DbDataCalcolo: "01/02/2016",
              DbLiquidato: "864.00",
              DbRiaccredito: null,
              DbTrattenutaDiCategoria: "6.00",
              DbImportoRecuperatoPerCompensazione: null,
              DbNrTrasferimentoFlumo: {
                DbNrMandato: "32985432",
                DbData: "12/07/2013"
              },
              DbTotMese: "864.00",
              DbTotAnno: "2592.00"
            },
            {
              DbDataCalcolo: "01/03/2016",
              DbLiquidato: "320.25",
              DbRiaccredito: null,
              DbTrattenutaDiCategoria: "6.00",
              DbImportoRecuperatoPerCompensazione: "108.75",
              DbNrTrasferimentoFlumo: {
                DbNrMandato: "32985432",
                DbData: "12/07/2013"
              },
              DbTotMese: "320.25",
              DbTotAnno: "2912.25"
            }
          ],

          DbElencoImportiRiaccreditati: [{
              DbDataRiaccredito: "18/11/2015",
              DbImportoRiaccreditato: "864",
              DbDataLiquidazioneArretrato: "01/01/2016"
            },

            {
              DbDataRiaccredito: "18/11/2015",
              DbImportoRiaccreditato: "111",
              DbDataLiquidazioneArretrato: "01/01/2016"
            }
          ],
          DbElencoImportiDaRecuperare: [{
            DbDataUltimaModifica: "23/02/2016",
            DbTipoDiRecupero: "compensazione",
            DbTotDaRecuperare: {
              DbCapitale: "435.00",
              DbInteressiLegali: "8.7",
              DbInteressiDiRateizzazione: "4.35"
            },
            DbRecuperato: "108.75",
            DbRestituito: null,
            DbRimanenteDaRecuperare: "339.30",
            DbNote: "sda kpopoi pèoipèo dfhaklsdj lasdòlaf"
          }],

          CognomeAcquisito: "Alfano Acquisito",
          IdStatoCivile: "Coniugata",
          IdProvinciaNascita: "Milano",
          IdNazioneNascita: "Italia",
          IdCittadinanza: "Italiana",
          DbExtracomunitario: "Si",

          DbPermessoDiSoggiornoTipoPermesso: "Lorem ipsum dolor",
          DbPermessoDiSoggiornoDataRilascio: "01/01/2020",
          DbPermessoDiSoggiornoValidoFinoAl: "01/01/2020",
          TelefonoPrincipale: "0461 912585",
          TelefonoSecondario: "0461 923452",
          Email: "mrossi555@gmail.com",
          Pec: "mrossi@gmail.com",
          DbNote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius purus tellus, ac auctor nibh dictum consequat"
        }
      ];

      return tabAnagrafe;
    }
    // ----------------------------

    if (cTipoTabella.toUpperCase() === "POSIZIONI") {
      let tabPosizioni = [{
          DbPosizione: "123456",
          DbCodiceFiscale: "LFNCLL60D03E026T",
          DbCognome: "Alfano",
          DbNome: "Camillo",
          DbDataDiNascita: "03/04/1960",
          DbDataDiDecesso: "03/01/2014",
          DbAnnoDiScarto: "1234",
          DbNumeroFaldone: "1111",
          DbFascicolo: "634",
          DbStatoDomanda: "Revocata"
        },
        {
          DbPosizione: "345765",
          DbCodiceFiscale: "LFNCLL60D03E026T",
          DbCognome: "Alfano",
          DbNome: "Camillo",
          DbDataDiNascita: "03/04/1960",
          DbDataDiDecesso: "03/01/2014",
          DbAnnoDiScarto: "12534",
          DbNumeroFaldone: "1111",
          DbFascicolo: "123",
          DbStatoDomanda: "Negata"
        },
        {
          DbPosizione: "771723",
          DbCodiceFiscale: "QTGSRO60A11Q2055",
          DbCognome: "Hammond",
          DbNome: "John",
          DbDataDiNascita: "01/01/1970",
          DbDataDiDecesso: "-",
          DbAnnoDiScarto: "127534",
          DbNumeroFaldone: "2222222",
          DbFascicolo: "236",
          DbStatoDomanda: "Concessa"
        },
        {
          DbPosizione: "125688",
          DbCodiceFiscale: "QTGSRO60A11Q2055",
          DbCognome: "Hammond",
          DbNome: "John",
          DbDataDiNascita: "01/01/1970",
          DbDataDiDecesso: "-",
          DbAnnoDiScarto: "1267634",
          DbNumeroFaldone: "2222222",
          DbFascicolo: "634",
          DbStatoDomanda: "Revocata"
        },
        {
          DbPosizione: "345765",
          DbCodiceFiscale: "QTGSRO60A11Q2055",
          DbCognome: "Hammond",
          DbNome: "John",
          DbDataDiNascita: "01/01/1970",
          DbDataDiDecesso: "-",
          DbAnnoDiScarto: "123664",
          DbNumeroFaldone: "2222222",
          DbFascicolo: "123",
          DbStatoDomanda: "Negata"
        },
        {
          DbPosizione: "771723",
          DbCodiceFiscale: "RTSDRO70A10W2056",
          DbCognome: "Mudassar",
          DbNome: "Khan",
          DbDataDiNascita: "01/02/1650",
          DbDataDiDecesso: "01/01/1930",
          DbAnnoDiScarto: "16234",
          DbNumeroFaldone: "3333333",
          DbFascicolo: "236",
          DbStatoDomanda: "Concessa"
        },
        {
          DbPosizione: "12366",
          DbCodiceFiscale: "RTSDRO70A10W2056",
          DbCognome: "Mudassar",
          DbNome: "Khan",
          DbDataDiNascita: "01/02/1650",
          DbDataDiDecesso: "01/01/1930",
          DbAnnoDiScarto: "1234",
          DbNumeroFaldone: "3333333",
          DbFascicolo: "634",
          DbStatoDomanda: "Revocata"
        },
        {
          DbPosizione: "5765",
          DbCodiceFiscale: "RTSDRO70A10W2056",
          DbCognome: "Mudassar",
          DbNome: "Khan",
          DbDataDiNascita: "01/02/1650",
          DbDataDiDecesso: "01/01/1930",
          DbAnnoDiScarto: "1234",
          DbNumeroFaldone: "3333333",
          DbFascicolo: "123",
          DbStatoDomanda: "Negata"
        },

        {
          DbPosizione: "771723",
          DbCodiceFiscale: "VSYFRO70A10E2652",
          DbCognome: "Mathews",
          DbNome: "Suzanne",
          DbDataDiNascita: "01/01/1966",
          DbDataDiDecesso: "-",
          DbAnnoDiScarto: "1994",
          DbNumeroFaldone: "444444",
          DbFascicolo: "236"
        },

        {
          DbPosizione: "771723",
          DbCodiceFiscale: "VSYFRO70A10E2652",
          DbCognome: "Mathews",
          DbNome: "Suzanne",
          DbDataDiNascita: "01/01/1966",
          DbDataDiDecesso: "-",
          DbFascicolo: "236",
          DbStatoDomanda: "Concessa"
        },

        {
          DbPosizione: "771723",
          DbCodiceFiscale: "RTSDRO70A10W2056",
          DbCognome: "Mudassar",
          DbNome: "Khan",
          DbDataDiNascita: "01/02/1650",
          DbDataDiDecesso: "01/01/1930",
          DbAnnoDiScarto: "12246",
          DbNumeroFaldone: "1113451",
          DbFascicolo: "236",
          DbStatoDomanda: "Concessa"
        },
        {
          DbPosizione: "673456",
          DbCodiceFiscale: "RTSDRO70A10W2056",
          DbCognome: "Mudassar",
          DbNome: "Khan",
          DbDataDiNascita: "01/02/1650",
          DbDataDiDecesso: "01/01/1930",
          DbAnnoDiScarto: "775634",
          DbNumeroFaldone: "1113451",
          DbFascicolo: "634",
          DbStatoDomanda: "Revocata"
        },
        {
          DbPosizione: "345765",
          DbCodiceFiscale: "RTSDRO70A10W2056",
          DbCognome: "Mudassar",
          DbNome: "Khan",
          DbDataDiNascita: "01/02/1650",
          DbDataDiDecesso: "01/01/1930",
          DbAnnoDiScarto: "7464",
          DbNumeroFaldone: "1113451",
          DbFascicolo: "123",
          DbStatoDomanda: "Negata"
        }
      ];

      return tabPosizioni;
    }
    // ----------------------------

    if (cTipoTabella.toUpperCase() === "DOMANDE") {
      let tabDomande = [{
          CodiceFiscale: "LFNCLL60D03E026T",
          Cognome: "Alfano",
          Nome: "Camillo",
          DataDiNascita: "03/04/1960",
          DataDiDecesso: "03/01/2014",
          AnnoDiScarto: "1234",
          NumeroFaldone: "1111",

          DomandePresentate: [{
              Posizione: "771723",
              Fascicolo: "236",
              StatoDomanda: "Concessa",
              // ----
              TipoDomanda: "77",
              DataDomanda: "",
              EmailDomanda: "",
              NumeroProtocollo: "",
              DataProtocollo: "",
              Provenienza: "",
              DelegaPatronato: "",

              Comunicazioni: "",
              ModalitaDiPagamento: "",
              AssociazioniDiCategoria: [{
                TipoAssociazione: "ANMIC",
                DataInizioIscrizione: "10/04/1986",
                DataFineIscrizione: "",
                QuotaMensile: "103.32"
              }],
              Note: "",
              AziendaSanitaria: {
                NumeroProtocollo: "",
                DataProtocollo: "",
                PercentualeDiInvalidita: "",
                IndennitaDiAccompagnamento: "",
                PatologiaUditiva: "",
                RiduzioneDelVisus: "",
                NoteVerbale: "",
                DataDecorenzaDelDirittoAlPagamento: ""
              }
            },
            {
              Posizione: "123456",
              Fascicolo: "634",
              StatoDomanda: "Revocata"
              // ----
            },
            {
              Posizione: "345765",
              Fascicolo: "123",
              StatoDomanda: "Negata"
              // ----
            }
          ],

          LegaleRappresentante: {
            Nome: "Mario-1",
            Cognome: "Rossi-1",
            CodiceFiscale: "RSSMRO70A10F2052",
            NumeroDecreto: "",
            DataDecreto: "",
            TipoDecreto: "",
            ScadenzaDecreto: ""
          },
          AltroLegaleRappresentante: {
            Nome: "Mario-2",
            Cognome: "Rossi-2",
            CodiceFiscale: "RSSMRO70A10F2052",
            NumeroDecreto: "",
            DataDecreto: "",
            TipoDecreto: "",
            ScadenzaDecreto: ""
          },
          Curatore: {
            Nome: "Mario-3",
            Cognome: "Rossi-3",
            CodiceFiscale: "RSSMRO70A10F2052",
            NumeroDecreto: "",
            DataDecreto: "",
            TipoDecreto: "",
            ScadenzaDecreto: ""
          },

          Verbali: [{
              NumeroProtocollo: "442524223",
              DataProtocollo: "01/01/2010",
              PercentualeDiInvalidita: "60",
              IndennitaDiAccompagnamento: "Si",
              PatologiaUditiva: "Si",
              RiduzioneDelVisus: "Si",
              Note: "11111111111111111"

              //   NumeroProtocollo: "12345",
              //   DataProtocollo: "12/34/5678",
              //   PercentualeDiInvalidita: "66%",
              //   IndennitaDiAccompagnamento: "No",
              //   PatologiaUditiva: "No",
              //   RiduzioneDelVisus: "No",
              //   NoteVerbale: "Io sono la nota a verbale",
              //   DataDecorrenzaPagamento: "11/11/1234"
            },
            {
              DataProtocollo: "01/01/2011",
              NumeroProtocollo: "2345223211",
              PercentualeDiInvalidita: "100",
              IndennitaDiAccompagnamento: "Si",
              PatologiaUditiva: "Si",
              RiduzioneDelVisus: "Si",
              Note: "2222222222222222222222222 11111111111111111"
            },
            {
              DataProtocollo: "01/01/2012",
              NumeroProtocollo: "2345223211",
              PercentualeDiInvalidita: "100",
              IndennitaDiAccompagnamento: "Si",
              PatologiaUditiva: "Si",
              RiduzioneDelVisus: "Si",
              Note: "2222222222222222222222222 11111111111111111"
            }
          ],

          Duplicato: true
        },
        {
          CodiceFiscale: "QTGSRO60A11Q2055",
          Cognome: "Hammond",
          Nome: "John",
          DataDiNascita: "01/01/1970",
          DataDiDecesso: "-",
          AnnoDiScarto: "1234",
          NumeroFaldone: "2222222",
          DomandePresentate: [{
              Posizione: "771723",
              Fascicolo: "236",
              StatoDomanda: "Concessa"
            },
            {
              Posizione: "123456",
              Fascicolo: "634",
              StatoDomanda: "Revocata"
            },
            {
              Posizione: "345765",
              Fascicolo: "123",
              StatoDomanda: "Negata"
            }
          ],
          Verbali: [{
              DataProtocollo: "01/01/2010",
              NumeroProtocollo: "222-442524223",
              PercentualeDiInvalidita: "60",
              IndennitaDiAccompagnamento: "Si",
              PatologiaUditiva: "Si",
              RiduzioneDelVisus: "Si",
              Note: "11111111111111111"
            },
            {
              DataProtocollo: "01/01/2011",
              NumeroProtocollo: "222-2345223211",
              PercentualeDiInvalidita: "100",
              IndennitaDiAccompagnamento: "Si",
              PatologiaUditiva: "Si",
              RiduzioneDelVisus: "Si",
              Note: "2222222222222222222222222 11111111111111111"
            },
            {
              DataProtocollo: "01/01/2012",
              NumeroProtocollo: "222-2345223211",
              PercentualeDiInvalidita: "100",
              IndennitaDiAccompagnamento: "Si",
              PatologiaUditiva: "Si",
              RiduzioneDelVisus: "Si",
              Note: "2222222222222222222222222 11111111111111111"
            }
          ],

          Duplicato: true
        },
        {
          CodiceFiscale: "RTSDRO70A10W2056",
          Cognome: "Mudassar",
          Nome: "Khan",
          DataDiNascita: "01/02/1650",
          DataDiDecesso: "01/01/1930",
          AnnoDiScarto: "1234",
          NumeroFaldone: "3333333",
          DomandePresentate: [{
              Posizione: "771723",
              Fascicolo: "236",
              StatoDomanda: "Concessa"
            },
            {
              Posizione: "123456",
              Fascicolo: "634",
              StatoDomanda: "Revocata"
            },
            {
              Posizione: "345765",
              Fascicolo: "123",
              StatoDomanda: "Negata"
            }
          ],
          Verbali: [{
              DataProtocollo: "01/01/2010",
              NumeroProtocollo: "333-442524223",
              PercentualeDiInvalidita: "60",
              IndennitaDiAccompagnamento: "Si",
              PatologiaUditiva: "Si",
              RiduzioneDelVisus: "Si",
              Note: "11111111111111111"
            },
            {
              DataProtocollo: "01/01/2011",
              NumeroProtocollo: "333-2345223211",
              PercentualeDiInvalidita: "100",
              IndennitaDiAccompagnamento: "Si",
              PatologiaUditiva: "Si",
              RiduzioneDelVisus: "Si",
              Note: "2222222222222222222222222 11111111111111111"
            },
            {
              DataProtocollo: "01/01/2012",
              NumeroProtocollo: "333-2345223211",
              PercentualeDiInvalidita: "100",
              IndennitaDiAccompagnamento: "Si",
              PatologiaUditiva: "Si",
              RiduzioneDelVisus: "Si",
              Note: "2222222222222222222222222 11111111111111111"
            }
          ],

          Duplicato: false
        },
        {
          CodiceFiscale: "VSYFRO70A10E2652",
          Cognome: "Mathews",
          Nome: "Suzanne",
          DataDiNascita: "01/01/1966",
          DataDiDecesso: "-",
          AnnoDiScarto: "1234",
          NumeroFaldone: "444444",
          DomandePresentate: [{
              Posizione: "771723",
              Fascicolo: "236",
              StatoDomanda: "Concessa"
            },
            {
              Posizione: "123456",
              Fascicolo: "634",
              StatoDomanda: "Revocata"
            },
            {
              Posizione: "345765",
              Fascicolo: "123",
              StatoDomanda: "Negata"
            }
          ],
          Verbali: [{
              DataProtocollo: "01/01/2010",
              NumeroProtocollo: "444-442524223",
              PercentualeDiInvalidita: "60",
              IndennitaDiAccompagnamento: "Si",
              PatologiaUditiva: "Si",
              RiduzioneDelVisus: "Si",
              Note: "11111111111111111"
            },
            {
              DataProtocollo: "01/01/2011",
              NumeroProtocollo: "444-2345223211",
              PercentualeDiInvalidita: "100",
              IndennitaDiAccompagnamento: "Si",
              PatologiaUditiva: "Si",
              RiduzioneDelVisus: "Si",
              Note: "2222222222222222222222222 11111111111111111"
            },
            {
              DataProtocollo: "01/01/2012",
              NumeroProtocollo: "444-2345223211",
              PercentualeDiInvalidita: "100",
              IndennitaDiAccompagnamento: "Si",
              PatologiaUditiva: "Si",
              RiduzioneDelVisus: "Si",
              Note: "2222222222222222222222222 11111111111111111"
            }
          ],

          Duplicato: false
        },
        {
          CodiceFiscale: "WSSGRO70A10T2066",
          Cognome: "Schidner",
          Nome: "Robert",
          DataDiNascita: "01/04/1950",
          DataDiDecesso: "01/01/1930",
          AnnoDiScarto: "1234",
          NumeroFaldone: "567890",
          DomandePresentate: [{
              Posizione: "771723",
              Fascicolo: "236",
              StatoDomanda: "Concessa"
            },
            {
              Posizione: "123456",
              Fascicolo: "634",
              StatoDomanda: "Revocata"
            },
            {
              Posizione: "345765",
              Fascicolo: "123",
              StatoDomanda: "Negata"
            }
          ],

          Verbali: [{
              DataProtocollo: "01/01/2010",
              NumeroProtocollo: "555-442524223",
              PercentualeDiInvalidita: "60",
              IndennitaDiAccompagnamento: "Si",
              PatologiaUditiva: "Si",
              RiduzioneDelVisus: "Si",
              Note: "11111111111111111"
            },
            {
              DataProtocollo: "01/01/2011",
              NumeroProtocollo: "555-2345223211",
              PercentualeDiInvalidita: "100",
              IndennitaDiAccompagnamento: "Si",
              PatologiaUditiva: "Si",
              RiduzioneDelVisus: "Si",
              Note: "2222222222222222222222222 11111111111111111"
            },
            {
              DataProtocollo: "01/01/2012",
              NumeroProtocollo: "555-2345223211",
              PercentualeDiInvalidita: "100",
              IndennitaDiAccompagnamento: "Si",
              PatologiaUditiva: "Si",
              RiduzioneDelVisus: "Si",
              Note: "2222222222222222222222222 11111111111111111"
            }
          ],

          Duplicato: false
        },

        {
          CodiceFiscale: "1234567890123456",
          Cognome: "Alfano-1111",
          Nome: "Camillo-1111",
          DataDiNascita: "01/01/1930",
          DataDiDecesso: "-",
          AnnoDiScarto: "1234",
          NumeroFaldone: "43170238",
          DomandePresentate: [{
              Posizione: "771723",
              Fascicolo: "236",
              StatoDomanda: "Concessa"
            },
            {
              Posizione: "123456",
              Fascicolo: "634",
              StatoDomanda: "Revocata"
            },
            {
              Posizione: "345765",
              Fascicolo: "123",
              StatoDomanda: "Negata"
            }
          ],
          Verbali: [{
              DataProtocollo: "01/01/2010",
              NumeroProtocollo: "666-442524223",
              PercentualeDiInvalidita: "60",
              IndennitaDiAccompagnamento: "Si",
              PatologiaUditiva: "Si",
              RiduzioneDelVisus: "Si",
              Note: "11111111111111111"
            },
            {
              DataProtocollo: "01/01/2011",
              NumeroProtocollo: "666-2345223211",
              PercentualeDiInvalidita: "100",
              IndennitaDiAccompagnamento: "Si",
              PatologiaUditiva: "Si",
              RiduzioneDelVisus: "Si",
              Note: "2222222222222222222222222 11111111111111111"
            },
            {
              DataProtocollo: "01/01/2012",
              NumeroProtocollo: "666-2345223211",
              PercentualeDiInvalidita: "100",
              IndennitaDiAccompagnamento: "Si",
              PatologiaUditiva: "Si",
              RiduzioneDelVisus: "Si",
              Note: "2222222222222222222222222 11111111111111111"
            }
          ],

          Duplicato: false
        },
        {
          CodiceFiscale: "3456735790GHJDAE",
          Cognome: "Hammond",
          Nome: "John22",
          DataDiNascita: "01/01/1970",
          DataDiDecesso: "-",
          AnnoDiScarto: "1234",
          NumeroFaldone: "1251161",
          DomandePresentate: [{
              Posizione: "771723",
              Fascicolo: "236",
              StatoDomanda: "Concessa"
            },
            {
              Posizione: "123456",
              Fascicolo: "634",
              StatoDomanda: "Revocata"
            },
            {
              Posizione: "345765",
              Fascicolo: "123",
              StatoDomanda: "Negata"
            }
          ],
          Verbali: [{
              DataProtocollo: "01/01/2010",
              NumeroProtocollo: "777-442524223",
              PercentualeDiInvalidita: "60",
              IndennitaDiAccompagnamento: "Si",
              PatologiaUditiva: "Si",
              RiduzioneDelVisus: "Si",
              Note: "11111111111111111"
            },
            {
              DataProtocollo: "01/01/2011",
              NumeroProtocollo: "777-2345223211",
              PercentualeDiInvalidita: "100",
              IndennitaDiAccompagnamento: "Si",
              PatologiaUditiva: "Si",
              RiduzioneDelVisus: "Si",
              Note: "2222222222222222222222222 11111111111111111"
            },
            {
              DataProtocollo: "01/01/2012",
              NumeroProtocollo: "777-2345223211",
              PercentualeDiInvalidita: "100",
              IndennitaDiAccompagnamento: "Si",
              PatologiaUditiva: "Si",
              RiduzioneDelVisus: "Si",
              Note: "2222222222222222222222222 11111111111111111"
            }
          ],

          Duplicato: false
        },
        {
          CodiceFiscale: "RTSDRO70A10W2056",
          Cognome: "Mudassar",
          Nome: "Khan",
          DataDiNascita: "01/02/1650",
          DataDiDecesso: "01/01/1930",
          AnnoDiScarto: "1234",
          NumeroFaldone: "1113451",
          DomandePresentate: [{
              Posizione: "771723",
              Fascicolo: "236",
              StatoDomanda: "Concessa"
            },
            {
              Posizione: "123456",
              Fascicolo: "634",
              StatoDomanda: "Revocata"
            },
            {
              Posizione: "345765",
              Fascicolo: "123",
              StatoDomanda: "Negata"
            }
          ],
          Verbali: [{
              DataProtocollo: "01/01/2010",
              NumeroProtocollo: "888-442524223",
              PercentualeDiInvalidita: "60",
              IndennitaDiAccompagnamento: "Si",
              PatologiaUditiva: "Si",
              RiduzioneDelVisus: "Si",
              Note: "11111111111111111"
            },
            {
              DataProtocollo: "01/01/2011",
              NumeroProtocollo: "888-2345223211",
              PercentualeDiInvalidita: "100",
              IndennitaDiAccompagnamento: "Si",
              PatologiaUditiva: "Si",
              RiduzioneDelVisus: "Si",
              Note: "2222222222222222222222222 11111111111111111"
            },
            {
              DataProtocollo: "01/01/2012",
              NumeroProtocollo: "888-2345223211",
              PercentualeDiInvalidita: "100",
              IndennitaDiAccompagnamento: "Si",
              PatologiaUditiva: "Si",
              RiduzioneDelVisus: "Si",
              Note: "2222222222222222222222222 11111111111111111"
            }
          ],

          Duplicato: false
        }
      ];

      return tabDomande;
    }
    // ----------------------------

    if (cTipoTabella.toUpperCase() === "LIQUIDAZIONI") {
      let tabLiquidazioni = [{
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

    if (cTipoTabella.toUpperCase() === "EVIDENZE") {
      let tabEvidenze = [{
          DataDecorrenza: "12/05/2015",
          TipoEvidenza: "Controllo reddito - xxxxxx",
          Descrizione: "Controllo reddito – anno successivo - xxxxxxx",
          DataScadenza: "12/07/2013",
          Posizione: "8798548",
          Cognome: "Rossi",
          Nome: "Mario",
          CodiceFiscale: "RSSMRA70A41F2052",
          Dettaglio: "<div><label>Tipo prestazione:</label> Lorem ipsum</div><div><label>Data chiusure:</label> 05/12/2010</div><div><label>Note:</label> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>",
          PrestazioneDiRiferimento: "xxxxx",
          DataDomandaDiRiferimento: "xxx",
          DataChiusura: "01/03/2001",
          Utente: "",
          NoteDiChiusura: "eqflkqwòelkòlqekqòàl",
          LetteraInviata: "Si",
          Note: "ek qwlòekàq  òlwkeòlqweòàlkq àòwlkeàòq lkweòàl"
        },
        {
          DataDecorrenza: "30/06/2015",
          TipoEvidenza: "Importo da recuperare-xxxxx",
          Descrizione: "Importo da recuperare – liquidazione-xxxxxxx",
          DataScadenza: "31/12/2015",
          Posizione: "1258745",
          Cognome: "Verde",
          Nome: "Mario",
          CodiceFiscale: "RSSMRA70A41F2052",
          Dettaglio: "<div><label>Tipo prestazione:</label> Lorem ipsum</div><div><label>Data chiusure:</label> 05/12/2010</div><div><label>Note:</label> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>",
          PrestazioneDiRiferimento: "",
          DataDellaDomandaDiRiferimento: "",
          DataChiusura: "01/03/2011",
          Utente: "",
          NoteDiChiusura: "welkràqwelkàl 02/02/2002",
          LetteraInviata: "Si",
          Note: "gkkggkgkgkgkgkgkkgkgkgkg"
        },
        {
          DataDecorrenza: "03/07/2018",
          TipoEvidenza: "Importo da recuperare",
          Descrizione: "Importo da recuperare – liquidazione",
          DataScadenza: "31/12/2015",
          Posizione: "1258745",
          Cognome: "Alfano",
          Nome: "Camillo",
          CodiceFiscale: "LFNCLL60D03E026T",
          Dettaglio: "<div><label>Tipo prestazione:</label> Lorem ipsum</div><div><label>Data chiusure:</label> 05/12/2010</div><div><label>Note:</label> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>",
          PrestazioneDiRiferimento: "",
          DataDellaDomandaDiRiferimento: "",
          DataChiusura: "",
          Utente: "xxxxxxx",
          NoteDiChiusura: "wlwqkràqòwelrkàòqelrà",
          LetteraInviata: "Si",
          Note: "11111111111111111111"
        },
        {
          DataDecorrenza: "03/07/2018",
          TipoEvidenza: "Importo da recuperare",
          Descrizione: "Importo da recuperare – liquidazione",
          DataScadenza: "31/12/2015",
          Posizione: "1258745",
          Cognome: "Alfano",
          Nome: "Camillo",
          CodiceFiscale: "LFNCLL60D03E026T",
          Dettaglio: "<div><label>Tipo prestazione:</label> Lorem ipsum</div><div><label>Data chiusure:</label> 05/12/2010</div><div><label>Note:</label> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>",
          PrestazioneDiRiferimento: "",
          DataDellaDomandaDiRiferimento: "",
          DataChiusura: "",
          Utente: "yyyyyyyy",
          NoteDiChiusura: "io sono una nota di chiusura",
          LetteraInviata: "",
          Note: "11111111144444444444411111111111"
        }
      ];

      return tabEvidenze;
    }

    if (cTipoTabella.toUpperCase() === "ASSOCIAZIONI") {
      let tabAssociazioni = [{
          NomeAssociazione: "Confartigianato",
          CodiceFiscale: "012345678955",
          TipologiaDiAssistenza: "77",

          Responsabile: "Mario Rossi",
          TelefonoPrincipale: "0461 912585",
          TelefonoSecondario: "0461 923452",
          IBAN: "IT40 S054 2811 1010 0000 0123 456",
          Email: "mrossi555@gmail.com",
          Pec: "mrossi@gmail.com",
          Note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius purus tellus, ac auctor nibh dictum consequat",

          Indirizzi: [{
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

          ImportoRitenutaDiCategoria: "100.15",

          LiquidazioniMensili: [{
              DataPagamento: "12/04/2014",
              ImportoTotale: "238.00",
              NroAssistiti: "15"
            },
            {
              DataPagamento: "12/05/2014",
              ImportoTotale: "258.00",
              NroAssistiti: "17"
            },
            {
              DataPagamento: "12/06/2014",
              ImportoTotale: "338.00",
              NroAssistiti: "18"
            },
            {
              DataPagamento: "12/07/2014",
              ImportoTotale: "438.00",
              NroAssistiti: "16"
            },
            {
              DataPagamento: "12/08/2014",
              ImportoTotale: "38.00",
              NroAssistiti: "10"
            },
            {
              DataPagamento: "12/09/2014",
              ImportoTotale: "278.00",
              NroAssistiti: "17"
            },
            {
              DataPagamento: "12/10/2014",
              ImportoTotale: "299.00",
              NroAssistiti: "19"
            }
          ]
        },

        {
          NomeAssociazione: "Confcommercio",
          CodiceFiscale: "123450089022",
          TipologiaDiAssistenza: "99",

          Responsabile: "Giovanni Moscato",
          TelefonoPrincipale: "0366 768798",
          TelefonoSecondario: "0433 922451",
          IBAN: "IT40 S054 2811 1010 0000 0123 456",
          Email: "giovanni6666@tin.it",
          Pec: "mgiovanni@gmail.com",
          Note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius purus tellus, ac auctor nibh dictum consequat",

          Indirizzi: [{
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

          ImportoRitenutaDiCategoria: "234.15"
        },

        {
          NomeAssociazione: "Cral",
          CodiceFiscale: "122226789011",
          TipologiaDiAssistenza: "99",

          Responsabile: "Giuseppe Garibaldi",
          TelefonoPrincipale: "0461 912585",
          TelefonoSecondario: "0461 923452",
          IBAN: "IT40 S054 2811 1010 0000 0123 456",
          Email: "ggaribaldi444@gmail.com",
          Pec: "ggaribaldi@gmail.com",
          Note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius purus tellus, ac auctor nibh dictum consequat",

          Indirizzi: [{
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

          ImportoRitenutaDiCategoria: "222.15",

          LiquidazioniMensili: [{
              DataPagamento: "12/04/2014",
              ImportoTotale: "238.00",
              NroAssistiti: "15"
            },
            {
              DataPagamento: "12/05/2014",
              ImportoTotale: "258.00",
              NroAssistiti: "17"
            },
            {
              DataPagamento: "12/06/2014",
              ImportoTotale: "338.00",
              NroAssistiti: "18"
            },
            {
              DataPagamento: "12/07/2014",
              ImportoTotale: "438.00",
              NroAssistiti: "16"
            },
            {
              DataPagamento: "12/08/2014",
              ImportoTotale: "38.00",
              NroAssistiti: "10"
            },
            {
              DataPagamento: "12/09/2014",
              ImportoTotale: "278.00",
              NroAssistiti: "17"
            },
            {
              DataPagamento: "12/10/2014",
              ImportoTotale: "299.00",
              NroAssistiti: "19"
            }
          ]
        },

        {
          NomeAssociazione: "AICS",
          CodiceFiscale: "123345324890",
          TipologiaDiAssistenza: "88",

          Responsabile: "Tal dei tali ",
          TelefonoPrincipale: "0461 912585",
          TelefonoSecondario: "0461 923452",
          IBAN: "IT40 S054 2811 1010 0000 0123 456",
          Email: "ttali444@gmail.com",
          Pec: "ttali@gmail.com",
          Note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius purus tellus, ac auctor nibh dictum consequat",

          Indirizzi: [{
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

          ImportoRitenutaDiCategoria: "122.15",

          LiquidazioniMensili: [{
              DataPagamento: "12/04/2014",
              ImportoTotale: "238.00",
              NroAssistiti: "15"
            },
            {
              DataPagamento: "12/05/2014",
              ImportoTotale: "258.00",
              NroAssistiti: "17"
            },
            {
              DataPagamento: "12/06/2014",
              ImportoTotale: "338.00",
              NroAssistiti: "18"
            },
            {
              DataPagamento: "12/07/2014",
              ImportoTotale: "438.00",
              NroAssistiti: "16"
            },
            {
              DataPagamento: "12/08/2014",
              ImportoTotale: "38.00",
              NroAssistiti: "10"
            },
            {
              DataPagamento: "12/09/2014",
              ImportoTotale: "278.00",
              NroAssistiti: "17"
            },
            {
              DataPagamento: "12/10/2014",
              ImportoTotale: "299.00",
              NroAssistiti: "19"
            }
          ]
        },

        {
          NomeAssociazione: "UIL",
          CodiceFiscale: "123456789078",
          TipologiaDiAssistenza: "77",

          Responsabile: "Carlo Gimondi",
          TelefonoPrincipale: "0461 912585",
          TelefonoSecondario: "0461 923452",
          IBAN: "IT40 S054 2811 1010 0000 0123 456",
          Email: "gimondi444@gmail.com",
          Pec: "gimondi@gmail.com",
          Note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius purus tellus, ac auctor nibh dictum consequat",

          Indirizzi: [{
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

          ImportoRitenutaDiCategoria: "130.15",

          LiquidazioniMensili: [{
              DataPagamento: "12/04/2014",
              ImportoTotale: "238.00",
              NroAssistiti: "15"
            },
            {
              DataPagamento: "12/05/2014",
              ImportoTotale: "258.00",
              NroAssistiti: "17"
            },
            {
              DataPagamento: "12/06/2014",
              ImportoTotale: "338.00",
              NroAssistiti: "18"
            },
            {
              DataPagamento: "12/07/2014",
              ImportoTotale: "438.00",
              NroAssistiti: "16"
            },
            {
              DataPagamento: "12/08/2014",
              ImportoTotale: "38.00",
              NroAssistiti: "10"
            },
            {
              DataPagamento: "12/09/2014",
              ImportoTotale: "278.00",
              NroAssistiti: "17"
            },
            {
              DataPagamento: "12/10/2014",
              ImportoTotale: "299.00",
              NroAssistiti: "19"
            }
          ]
        },

        {
          NomeAssociazione: "CGHL",
          CodiceFiscale: "123456789087",
          TipologiaDiAssistenza: "88",

          Responsabile: "Vittorio Emanuele",
          TelefonoPrincipale: "0461 912585",
          TelefonoSecondario: "0461 923452",
          IBAN: "IT40 S054 2811 1010 0000 0123 456",
          Email: "vemanuele555@gmail.com",
          Pec: "vemanuele@gmail.com",
          Note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius purus tellus, ac auctor nibh dictum consequat",

          Indirizzi: [{
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

          ImportoRitenutaDiCategoria: "200.15",

          LiquidazioniMensili: [{
              DataPagamento: "12/04/2014",
              ImportoTotale: "238.00",
              NroAssistiti: "15"
            },
            {
              DataPagamento: "12/05/2014",
              ImportoTotale: "258.00",
              NroAssistiti: "17"
            },
            {
              DataPagamento: "12/06/2014",
              ImportoTotale: "338.00",
              NroAssistiti: "18"
            },
            {
              DataPagamento: "12/07/2014",
              ImportoTotale: "438.00",
              NroAssistiti: "16"
            },
            {
              DataPagamento: "12/08/2014",
              ImportoTotale: "38.00",
              NroAssistiti: "10"
            },
            {
              DataPagamento: "12/09/2014",
              ImportoTotale: "278.00",
              NroAssistiti: "17"
            },
            {
              DataPagamento: "12/10/2014",
              ImportoTotale: "299.00",
              NroAssistiti: "19"
            }
          ]
        }
      ];

      return tabAssociazioni;
    }

    if (cTipoTabella.toUpperCase() === "NAZIONI") {
      let tabNazioni = [{
          Id: 1,
          Description: "Afghanistan",
          Code: "AF"
        },
        {
          Id: 1,
          Description: "Åland Islands",
          Code: "AX"
        },
        {
          Id: 1,
          Description: "Albania",
          Code: "AL"
        },
        {
          Id: 1,
          Description: "Algeria",
          Code: "DZ"
        },
        {
          Id: 1,
          Description: "American Samoa",
          Code: "AS"
        },
        {
          Id: 1,
          Description: "Andorra",
          Code: "AD"
        },
        {
          Id: 1,
          Description: "Angola",
          Code: "AO"
        },
        {
          Id: 1,
          Description: "Anguilla",
          Code: "AI"
        },
        {
          Id: 1,
          Description: "Antarctica",
          Code: "AQ"
        },
        {
          Id: 1,
          Description: "Antigua and Barbuda",
          Code: "AG"
        },
        {
          Id: 1,
          Description: "Argentina",
          Code: "AR"
        },
        {
          Id: 1,
          Description: "Armenia",
          Code: "AM"
        },
        {
          Id: 1,
          Description: "Aruba",
          Code: "AW"
        },
        {
          Id: 1,
          Description: "Australia",
          Code: "AU"
        },
        {
          Id: 1,
          Description: "Austria",
          Code: "AT"
        },
        {
          Id: 1,
          Description: "Azerbaijan",
          Code: "AZ"
        },
        {
          Id: 1,
          Description: "Bahamas",
          Code: "BS"
        },
        {
          Id: 1,
          Description: "Bahrain",
          Code: "BH"
        },
        {
          Id: 1,
          Description: "Bangladesh",
          Code: "BD"
        },
        {
          Id: 1,
          Description: "Barbados",
          Code: "BB"
        },
        {
          Id: 1,
          Description: "Belarus",
          Code: "BY"
        },
        {
          Id: 1,
          Description: "Belgium",
          Code: "BE"
        },
        {
          Id: 1,
          Description: "Belize",
          Code: "BZ"
        },
        {
          Id: 1,
          Description: "Benin",
          Code: "BJ"
        },
        {
          Id: 1,
          Description: "Bermuda",
          Code: "BM"
        },
        {
          Id: 1,
          Description: "Bhutan",
          Code: "BT"
        },
        {
          Id: 1,
          Description: "Bolivia",
          Code: "BO"
        },
        {
          Id: 1,
          Description: "Bosnia and Herzegovina",
          Code: "BA"
        },
        {
          Id: 1,
          Description: "Botswana",
          Code: "BW"
        },
        {
          Id: 1,
          Description: "Bouvet Island",
          Code: "BV"
        },
        {
          Id: 1,
          Description: "Brazil",
          Code: "BR"
        },
        {
          Id: 1,
          Description: "British Indian Ocean Territory",
          Code: "IO"
        },
        {
          Id: 1,
          Description: "Brunei Darussalam",
          Code: "BN"
        },
        {
          Id: 1,
          Description: "Bulgaria",
          Code: "BG"
        },
        {
          Id: 1,
          Description: "Burkina Faso",
          Code: "BF"
        },
        {
          Id: 1,
          Description: "Burundi",
          Code: "BI"
        },
        {
          Id: 1,
          Description: "Cambodia",
          Code: "KH"
        },
        {
          Id: 1,
          Description: "Cameroon",
          Code: "CM"
        },
        {
          Id: 1,
          Description: "Canada",
          Code: "CA"
        },
        {
          Id: 1,
          Description: "Cape Verde",
          Code: "CV"
        },
        {
          Id: 1,
          Description: "Cayman Islands",
          Code: "KY"
        },
        {
          Id: 1,
          Description: "Central African Republic",
          Code: "CF"
        },
        {
          Id: 1,
          Description: "Chad",
          Code: "TD"
        },
        {
          Id: 1,
          Description: "Chile",
          Code: "CL"
        },
        {
          Id: 1,
          Description: "China",
          Code: "CN"
        },
        {
          Id: 1,
          Description: "Christmas Island",
          Code: "CX"
        },
        {
          Id: 1,
          Description: "Cocos (Keeling) Islands",
          Code: "CC"
        },
        {
          Id: 1,
          Description: "Colombia",
          Code: "CO"
        },
        {
          Id: 1,
          Description: "Comoros",
          Code: "KM"
        },
        {
          Id: 1,
          Description: "Congo",
          Code: "CG"
        },
        {
          Id: 1,
          Description: "Congo, The Democratic Republic of the",
          Code: "CD"
        },
        {
          Id: 1,
          Description: "Cook Islands",
          Code: "CK"
        },
        {
          Id: 1,
          Description: "Costa Rica",
          Code: "CR"
        },
        {
          Id: 1,
          Description: "Cote D'Ivoire",
          Code: "CI"
        },
        {
          Id: 1,
          Description: "Croatia",
          Code: "HR"
        },
        {
          Id: 1,
          Description: "Cuba",
          Code: "CU"
        },
        {
          Id: 1,
          Description: "Cyprus",
          Code: "CY"
        },
        {
          Id: 1,
          Description: "Czech Republic",
          Code: "CZ"
        },
        {
          Id: 1,
          Description: "Denmark",
          Code: "DK"
        },
        {
          Id: 1,
          Description: "Djibouti",
          Code: "DJ"
        },
        {
          Id: 1,
          Description: "Dominica",
          Code: "DM"
        },
        {
          Id: 1,
          Description: "Dominican Republic",
          Code: "DO"
        },
        {
          Id: 1,
          Description: "Ecuador",
          Code: "EC"
        },
        {
          Id: 1,
          Description: "Egypt",
          Code: "EG"
        },
        {
          Id: 1,
          Description: "El Salvador",
          Code: "SV"
        },
        {
          Id: 1,
          Description: "Equatorial Guinea",
          Code: "GQ"
        },
        {
          Id: 1,
          Description: "Eritrea",
          Code: "ER"
        },
        {
          Id: 1,
          Description: "Estonia",
          Code: "EE"
        },
        {
          Id: 1,
          Description: "Ethiopia",
          Code: "ET"
        },
        {
          Id: 1,
          Description: "Falkland Islands (Malvinas)",
          Code: "FK"
        },
        {
          Id: 1,
          Description: "Faroe Islands",
          Code: "FO"
        },
        {
          Id: 1,
          Description: "Fiji",
          Code: "FJ"
        },
        {
          Id: 1,
          Description: "Finland",
          Code: "FI"
        },
        {
          Id: 1,
          Description: "France",
          Code: "FR"
        },
        {
          Id: 1,
          Description: "French Guiana",
          Code: "GF"
        },
        {
          Id: 1,
          Description: "French Polynesia",
          Code: "PF"
        },
        {
          Id: 1,
          Description: "French Southern Territories",
          Code: "TF"
        },
        {
          Id: 1,
          Description: "Gabon",
          Code: "GA"
        },
        {
          Id: 1,
          Description: "Gambia",
          Code: "GM"
        },
        {
          Id: 1,
          Description: "Georgia",
          Code: "GE"
        },
        {
          Id: 1,
          Description: "Germany",
          Code: "DE"
        },
        {
          Id: 1,
          Description: "Ghana",
          Code: "GH"
        },
        {
          Id: 1,
          Description: "Gibraltar",
          Code: "GI"
        },
        {
          Id: 1,
          Description: "Greece",
          Code: "GR"
        },
        {
          Id: 1,
          Description: "Greenland",
          Code: "GL"
        },
        {
          Id: 1,
          Description: "Grenada",
          Code: "GD"
        },
        {
          Id: 1,
          Description: "Guadeloupe",
          Code: "GP"
        },
        {
          Id: 1,
          Description: "Guam",
          Code: "GU"
        },
        {
          Id: 1,
          Description: "Guatemala",
          Code: "GT"
        },
        {
          Id: 1,
          Description: "Guernsey",
          Code: "GG"
        },
        {
          Id: 1,
          Description: "Guinea",
          Code: "GN"
        },
        {
          Id: 1,
          Description: "Guinea-Bissau",
          Code: "GW"
        },
        {
          Id: 1,
          Description: "Guyana",
          Code: "GY"
        },
        {
          Id: 1,
          Description: "Haiti",
          Code: "HT"
        },
        {
          Id: 1,
          Description: "Heard Island and Mcdonald Islands",
          Code: "HM"
        },
        {
          Id: 1,
          Description: "Holy See (Vatican City State)",
          Code: "VA"
        },
        {
          Id: 1,
          Description: "Honduras",
          Code: "HN"
        },
        {
          Id: 1,
          Description: "Hong Kong",
          Code: "HK"
        },
        {
          Id: 1,
          Description: "Hungary",
          Code: "HU"
        },
        {
          Id: 1,
          Description: "Iceland",
          Code: "IS"
        },
        {
          Id: 1,
          Description: "India",
          Code: "IN"
        },
        {
          Id: 1,
          Description: "Indonesia",
          Code: "ID"
        },
        {
          Id: 1,
          Description: "Iran, Islamic Republic Of",
          Code: "IR"
        },
        {
          Id: 1,
          Description: "Iraq",
          Code: "IQ"
        },
        {
          Id: 1,
          Description: "Ireland",
          Code: "IE"
        },
        {
          Id: 1,
          Description: "Isle of Man",
          Code: "IM"
        },
        {
          Id: 1,
          Description: "Israel",
          Code: "IL"
        },
        {
          Id: 1,
          Description: "Italy",
          Code: "IT"
        },
        {
          Id: 1,
          Description: "Jamaica",
          Code: "JM"
        },
        {
          Id: 1,
          Description: "Japan",
          Code: "JP"
        },
        {
          Id: 1,
          Description: "Jersey",
          Code: "JE"
        },
        {
          Id: 1,
          Description: "Jordan",
          Code: "JO"
        },
        {
          Id: 1,
          Description: "Kazakhstan",
          Code: "KZ"
        },
        {
          Id: 1,
          Description: "Kenya",
          Code: "KE"
        },
        {
          Id: 1,
          Description: "Kiribati",
          Code: "KI"
        },
        {
          Id: 1,
          Description: "Korea, Democratic People's Republic of",
          Code: "KP"
        },
        {
          Id: 1,
          Description: "Korea, Republic of",
          Code: "KR"
        },
        {
          Id: 1,
          Description: "Kuwait",
          Code: "KW"
        },
        {
          Id: 1,
          Description: "Kyrgyzstan",
          Code: "KG"
        },
        {
          Id: 1,
          Description: "Lao People's Democratic Republic",
          Code: "LA"
        },
        {
          Id: 1,
          Description: "Latvia",
          Code: "LV"
        },
        {
          Id: 1,
          Description: "Lebanon",
          Code: "LB"
        },
        {
          Id: 1,
          Description: "Lesotho",
          Code: "LS"
        },
        {
          Id: 1,
          Description: "Liberia",
          Code: "LR"
        },
        {
          Id: 1,
          Description: "Libyan Arab Jamahiriya",
          Code: "LY"
        },
        {
          Id: 1,
          Description: "Liechtenstein",
          Code: "LI"
        },
        {
          Id: 1,
          Description: "Lithuania",
          Code: "LT"
        },
        {
          Id: 1,
          Description: "Luxembourg",
          Code: "LU"
        },
        {
          Id: 1,
          Description: "Macao",
          Code: "MO"
        },
        {
          Id: 1,
          Description: "Macedonia, The Former Yugoslav Republic of",
          Code: "MK"
        },
        {
          Id: 1,
          Description: "Madagascar",
          Code: "MG"
        },
        {
          Id: 1,
          Description: "Malawi",
          Code: "MW"
        },
        {
          Id: 1,
          Description: "Malaysia",
          Code: "MY"
        },
        {
          Id: 1,
          Description: "Maldives",
          Code: "MV"
        },
        {
          Id: 1,
          Description: "Mali",
          Code: "ML"
        },
        {
          Id: 1,
          Description: "Malta",
          Code: "MT"
        },
        {
          Id: 1,
          Description: "Marshall Islands",
          Code: "MH"
        },
        {
          Id: 1,
          Description: "Martinique",
          Code: "MQ"
        },
        {
          Id: 1,
          Description: "Mauritania",
          Code: "MR"
        },
        {
          Id: 1,
          Description: "Mauritius",
          Code: "MU"
        },
        {
          Id: 1,
          Description: "Mayotte",
          Code: "YT"
        },
        {
          Id: 1,
          Description: "Mexico",
          Code: "MX"
        },
        {
          Id: 1,
          Description: "Micronesia, Federated States of",
          Code: "FM"
        },
        {
          Id: 1,
          Description: "Moldova, Republic of",
          Code: "MD"
        },
        {
          Id: 1,
          Description: "Monaco",
          Code: "MC"
        },
        {
          Id: 1,
          Description: "Mongolia",
          Code: "MN"
        },
        {
          Id: 1,
          Description: "Montserrat",
          Code: "MS"
        },
        {
          Id: 1,
          Description: "Morocco",
          Code: "MA"
        },
        {
          Id: 1,
          Description: "Mozambique",
          Code: "MZ"
        },
        {
          Id: 1,
          Description: "Myanmar",
          Code: "MM"
        },
        {
          Id: 1,
          Description: "Namibia",
          Code: "NA"
        },
        {
          Id: 1,
          Description: "Nauru",
          Code: "NR"
        },
        {
          Id: 1,
          Description: "Nepal",
          Code: "NP"
        },
        {
          Id: 1,
          Description: "Netherlands",
          Code: "NL"
        },
        {
          Id: 1,
          Description: "Netherlands Antilles",
          Code: "AN"
        },
        {
          Id: 1,
          Description: "New Caledonia",
          Code: "NC"
        },
        {
          Id: 1,
          Description: "New Zealand",
          Code: "NZ"
        },
        {
          Id: 1,
          Description: "Nicaragua",
          Code: "NI"
        },
        {
          Id: 1,
          Description: "Niger",
          Code: "NE"
        },
        {
          Id: 1,
          Description: "Nigeria",
          Code: "NG"
        },
        {
          Id: 1,
          Description: "Niue",
          Code: "NU"
        },
        {
          Id: 1,
          Description: "Norfolk Island",
          Code: "NF"
        },
        {
          Id: 1,
          Description: "Northern Mariana Islands",
          Code: "MP"
        },
        {
          Id: 1,
          Description: "Norway",
          Code: "NO"
        },
        {
          Id: 1,
          Description: "Oman",
          Code: "OM"
        },
        {
          Id: 1,
          Description: "Pakistan",
          Code: "PK"
        },
        {
          Id: 1,
          Description: "Palau",
          Code: "PW"
        },
        {
          Id: 1,
          Description: "Palestinian Territory, Occupied",
          Code: "PS"
        },
        {
          Id: 1,
          Description: "Panama",
          Code: "PA"
        },
        {
          Id: 1,
          Description: "Papua New Guinea",
          Code: "PG"
        },
        {
          Id: 1,
          Description: "Paraguay",
          Code: "PY"
        },
        {
          Id: 1,
          Description: "Peru",
          Code: "PE"
        },
        {
          Id: 1,
          Description: "Philippines",
          Code: "PH"
        },
        {
          Id: 1,
          Description: "Pitcairn",
          Code: "PN"
        },
        {
          Id: 1,
          Description: "Poland",
          Code: "PL"
        },
        {
          Id: 1,
          Description: "Portugal",
          Code: "PT"
        },
        {
          Id: 1,
          Description: "Puerto Rico",
          Code: "PR"
        },
        {
          Id: 1,
          Description: "Qatar",
          Code: "QA"
        },
        {
          Id: 1,
          Description: "Reunion",
          Code: "RE"
        },
        {
          Id: 1,
          Description: "Romania",
          Code: "RO"
        },
        {
          Id: 1,
          Description: "Russian Federation",
          Code: "RU"
        },
        {
          Id: 1,
          Description: "Rwanda",
          Code: "RW"
        },
        {
          Id: 1,
          Description: "Saint Helena",
          Code: "SH"
        },
        {
          Id: 1,
          Description: "Saint Kitts and Nevis",
          Code: "KN"
        },
        {
          Id: 1,
          Description: "Saint Lucia",
          Code: "LC"
        },
        {
          Id: 1,
          Description: "Saint Pierre and Miquelon",
          Code: "PM"
        },
        {
          Id: 1,
          Description: "Saint Vincent and the Grenadines",
          Code: "VC"
        },
        {
          Id: 1,
          Description: "Samoa",
          Code: "WS"
        },
        {
          Id: 1,
          Description: "San Marino",
          Code: "SM"
        },
        {
          Id: 1,
          Description: "Sao Tome and Principe",
          Code: "ST"
        },
        {
          Id: 1,
          Description: "Saudi Arabia",
          Code: "SA"
        },
        {
          Id: 1,
          Description: "Senegal",
          Code: "SN"
        },
        {
          Id: 1,
          Description: "Serbia and Montenegro",
          Code: "CS"
        },
        {
          Id: 1,
          Description: "Seychelles",
          Code: "SC"
        },
        {
          Id: 1,
          Description: "Sierra Leone",
          Code: "SL"
        },
        {
          Id: 1,
          Description: "Singapore",
          Code: "SG"
        },
        {
          Id: 1,
          Description: "Slovakia",
          Code: "SK"
        },
        {
          Id: 1,
          Description: "Slovenia",
          Code: "SI"
        },
        {
          Id: 1,
          Description: "Solomon Islands",
          Code: "SB"
        },
        {
          Id: 1,
          Description: "Somalia",
          Code: "SO"
        },
        {
          Id: 1,
          Description: "South Africa",
          Code: "ZA"
        },
        {
          Id: 1,
          Description: "South Georgia and the South Sandwich Islands",
          Code: "GS"
        },
        {
          Id: 1,
          Description: "Spain",
          Code: "ES"
        },
        {
          Id: 1,
          Description: "Sri Lanka",
          Code: "LK"
        },
        {
          Id: 1,
          Description: "Sudan",
          Code: "SD"
        },
        {
          Id: 1,
          Description: "Surinome",
          Code: "SR"
        },
        {
          Id: 1,
          Description: "Svalbard and Jan Mayen",
          Code: "SJ"
        },
        {
          Id: 1,
          Description: "Swaziland",
          Code: "SZ"
        },
        {
          Id: 1,
          Description: "Sweden",
          Code: "SE"
        },
        {
          Id: 1,
          Description: "Switzerland",
          Code: "CH"
        },
        {
          Id: 1,
          Description: "Syrian Arab Republic",
          Code: "SY"
        },
        {
          Id: 1,
          Description: "Taiwan, Province of China",
          Code: "TW"
        },
        {
          Id: 1,
          Description: "Tajikistan",
          Code: "TJ"
        },
        {
          Id: 1,
          Description: "Tanzania, United Republic of",
          Code: "TZ"
        },
        {
          Id: 1,
          Description: "Thailand",
          Code: "TH"
        },
        {
          Id: 1,
          Description: "Timor-Leste",
          Code: "TL"
        },
        {
          Id: 1,
          Description: "Togo",
          Code: "TG"
        },
        {
          Id: 1,
          Description: "Tokelau",
          Code: "TK"
        },
        {
          Id: 1,
          Description: "Tonga",
          Code: "TO"
        },
        {
          Id: 1,
          Description: "Trinidad and Tobago",
          Code: "TT"
        },
        {
          Id: 1,
          Description: "Tunisia",
          Code: "TN"
        },
        {
          Id: 1,
          Description: "Turkey",
          Code: "TR"
        },
        {
          Id: 1,
          Description: "Turkmenistan",
          Code: "TM"
        },
        {
          Id: 1,
          Description: "Turks and Caicos Islands",
          Code: "TC"
        },
        {
          Id: 1,
          Description: "Tuvalu",
          Code: "TV"
        },
        {
          Id: 1,
          Description: "Uganda",
          Code: "UG"
        },
        {
          Id: 1,
          Description: "Ukraine",
          Code: "UA"
        },
        {
          Id: 1,
          Description: "United Arab Emirates",
          Code: "AE"
        },
        {
          Id: 1,
          Description: "United Kingdom",
          Code: "GB"
        },
        {
          Id: 1,
          Description: "United States",
          Code: "US"
        },
        {
          Id: 1,
          Description: "United States Minor Outlying Islands",
          Code: "UM"
        },
        {
          Id: 1,
          Description: "Uruguay",
          Code: "UY"
        },
        {
          Id: 1,
          Description: "Uzbekistan",
          Code: "UZ"
        },
        {
          Id: 1,
          Description: "Vanuatu",
          Code: "VU"
        },
        {
          Id: 1,
          Description: "Venezuela",
          Code: "VE"
        },
        {
          Id: 1,
          Description: "Vietnam",
          Code: "VN"
        },
        {
          Id: 1,
          Description: "Virgin Islands, British",
          Code: "VG"
        },
        {
          Id: 1,
          Description: "Virgin Islands, U.S.",
          Code: "VI"
        },
        {
          Id: 1,
          Description: "Wallis and Futuna",
          Code: "WF"
        },
        {
          Id: 1,
          Description: "Western Sahara",
          Code: "EH"
        },
        {
          Id: 1,
          Description: "Yemen",
          Code: "YE"
        },
        {
          Id: 1,
          Description: "Zambia",
          Code: "ZM"
        },
        {
          Id: 1,
          Description: "Zimbabwe",
          Code: "ZW"
        }
      ];

      return tabNazioni;
    }
    if (cTipoTabella.toUpperCase() === "PROVINCE") {
      let tabProvince =

        [{
            Id: 1,
            Description: "Milano",
            Area: "Nord",
            IdNazione: 1,
            IdRegione: 1,
            Code: "01",
            Disabled: false
          },
          {
            Id: 1,
            Description: "Torino",
            Area: "Nord",
            IdNazione: 1,
            IdRegione: 1,
            Code: "01",
            Disabled: false
          },
          {
            Id: 1,
            Description: "Roma",
            Area: "Nord",
            IdNazione: 1,
            IdRegione: 1,
            Code: "01",
            Disabled: true
          },
          {
            Id: 1,
            Description: "Bologna",
            Area: "Centro",
            IdNazione: 1,
            IdRegione: 1,
            Code: "01",
            Disabled: false
          },
          {
            Id: 1,
            Description: "Napoli",
            Area: "Sud",
            IdNazione: 1,
            IdRegione: 1,
            Code: "01",
            Disabled: false
          },
          {
            Id: 1,
            Description: "Palermo",
            Area: "Sud",
            IdNazione: 1,
            IdRegione: 1,
            Code: "01",
            Disabled: false
          }
        ];

      return tabProvince;
    }
    if (cTipoTabella.toUpperCase() === "COMUNI") {
      let tabComuni = [{
          Id: 1,
          Description: "Comune pippoqw",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "wefewfefw1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune ccccccc1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune dddddd1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune eeeeee1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune fffffff1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "eklfàlòkwàlfkComune 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune eee1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comuneee 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune eee1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comeeeeune 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comuneeeee 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        },
        {
          Id: 1,
          Description: "Comune 1",
          Code: "AF",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1
        }
      ];
      return tabComuni;
    }
    if (cTipoTabella.toUpperCase() === "FRAZIONI") {
      let tabFrazioni = [{
          Id: 1,
          Description: "Frazione gdkqhgkjqw",
          Code: "AF",
          IdComune: 1
        },
        {
          Id: 1,
          Description: "Frazione wefewfefw1",
          Code: "AF",
          IdComune: 1
        },
        {
          Id: 1,
          Description: "Frazione ccccccc1",
          Code: "AF",
          IdComune: 1
        },
        {
          Id: 1,
          Description: "ddddd d1",
          Code: "AF",
          IdComune: 1
        },
        {
          Id: 1,
          Description: "eeee ee1",
          Code: "AF",
          IdComune: 1
        },
        {
          Id: 1,
          Description: "ffff fff1",
          Code: "AF",
          IdComune: 1
        },
        {
          Id: 1,
          Description: "eklfàl òkwàlfk Comune 1",
          Code: "AF",
          IdComune: 1
        },
        {
          Id: 1,
          Description: "Frazione eee1",
          Code: "AF",
          IdComune: 1
        },
        {
          Id: 1,
          Description: "Frazione 1",
          Code: "AF",
          IdComune: 1
        },
        {
          Id: 1,
          Description: "Frazione tal dei tali eee1",
          Code: "AF",
          IdComune: 1
        },
        {
          Id: 1,
          Description: "Frazione tal dei tali",
          Code: "AF",
          IdComune: 1
        },
        {
          Id: 1,
          Description: "Frazione  aa a a a e rrrr eeeee 1",
          Code: "AF",
          IdComune: 1
        }
      ];
      return tabFrazioni;
    }
    if (cTipoTabella.toUpperCase() === "VIE") {
      let tabVie = [{
          Id: 1,
          Description: "Via gdkqhgkjqw",
          Code: "AF",
          IdComune: 1
        },
        {
          Id: 1,
          Description: "Via wefewfefw1",
          Code: "AF",
          IdComune: 1
        },
        {
          Id: 1,
          Description: "Via  ccccccc1",
          Code: "AF",
          IdComune: 1
        },
        {
          Id: 1,
          Description: "ddddd d1",
          Code: "AF",
          IdComune: 1
        },
        {
          Id: 1,
          Description: "eeee ee1",
          Code: "AF",
          IdComune: 1
        },
        {
          Id: 1,
          Description: "ffff fff1",
          Code: "AF",
          IdComune: 1
        },
        {
          Id: 1,
          Description: "eklfàl òkwàlfk Via 1",
          Code: "AF",
          IdComune: 1
        },
        {
          Id: 1,
          Description: "Piazza  eee1",
          Code: "AF",
          IdComune: 1
        },
        {
          Id: 1,
          Description: "Viale 1",
          Code: "AF",
          IdComune: 1
        },
        {
          Id: 1,
          Description: "Via tal dei tali eee1",
          Code: "AF",
          IdComune: 1
        },
        {
          Id: 1,
          Description: "Via tal dei tali",
          Code: "AF",
          IdComune: 1
        },
        {
          Id: 1,
          Description: "Via  aa a a a e rrrr eeeee 1",
          Code: "AF",
          IdComune: 1
        }
      ];

      return tabVie;
    }
    if (cTipoTabella.toUpperCase() === "STATOCIVILE") {
      let tabStatoCivile = [{
          Id: 1,
          Description: "Coniugato",
          Code: "01"
        },
        {
          Id: 2,
          Description: "Separato",
          Code: "02"
        },
        {
          Id: 3,
          Description: "Celibe",
          Code: "03"
        }, {
          Id: 4,
          Description: "Nubile",
          Code: "04"
        },
        {
          Id: 5,
          Description: "Vedovo/a",
          Code: "05"
        },
        {
          Id: 6,
          Description: "Convivente",
          Code: "06"
        },
      ];

      return tabStatoCivile;
    }
    if (cTipoTabella.toUpperCase() === "CAP") {
      let tabCAP = [{
          Id: 1,
          CapValue: "84100",
          Code: "84100",
          Principale: 1,
          IdComune: 1,
          IdFrazione: 1
        },
        {
          Id: 2,
          CapValue: "84110",
          Code: "84110",
          Principale: 1,
          IdComune: 1,
          IdFrazione: 1
        },
        {
          Id: 3,
          CapValue: "85100",
          Code: "85100",
          Principale: 1,
          IdComune: 1,
          IdFrazione: 1
        },
      ];

      return tabCAP;
    }
    if (cTipoTabella.toUpperCase() === "TIPOINDIRIZZO") {
      let tabTipoIndirizzo = [{
          Id: 1,
          Description: "Domicilio",
          Code: "DO",
        },
        {
          Id: 2,
          Description: "Residenza",
          Code: "RE",
        },
        {
          Id: 3,
          Description: "Indirizzo Principale",
          Code: "IP",
        },
        {
          Id: 4,
          Description: "Indirizzo Secondario",
          Code: "IS",
        },
        {
          Id: 5,
          Description: "Altro Indirizzo",
          Code: "AI",
        },
      ];

      return tabTipoIndirizzo;
    }

    // -----------------------------------------------

  }
}