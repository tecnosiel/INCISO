/**
 * INCISO - Gestione invalidi civili, ciechi civili e sordi
 *
 * httpServices.js file
 * Definisce tutti i servizi http usati in Inciso
 *
 * Functions (services)
 *
 *  - _ricercaAnagraficaRicerca
 *
 */

/**
 * Tabelle BASE DATI MOCK
 *
 */
mochDbTable = function(table) {
  // ---------------------------------------------------
  // LIQUIDAZIONI
  // ---------------------------------------------------
  let tabLiquidazioni = [
    {
      CodiceFiscale:"1111111111111111",
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
      CodiceFiscale:"2222222222222222",
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
      CodiceFiscale:"3333333333333333",
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
      CodiceFiscale:"4444444444444444",
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
      CodiceFiscale:"5555555555555555",
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

  // ---------------------------------------------------
  // ASSOCIAZIONI
  // ---------------------------------------------------

  let tabAssociazioni = [
    {
      NomeAssociazione: "Confartigianato",
      CodiceFiscale: "012345678955",
      TipologiaDiAssistenza: "77",

      Responsabile: "Mario Rossi",
      TelefonoPrincipale: "0461 912585",
      TelefonoSecondario: "0461 923452",
      IBAN: "IT40 S054 2811 1010 0000 0123 456",
      Email: "mrossi@gmail.com",
      PEC: "mrossi@gmail.com",
      Note:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius purus tellus, ac auctor nibh dictum consequat",

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

      ImportoRitenutaDiCategoria: "100.15",

      LiquidazioniMensili: [
        {
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
      Email: "giovanni@tin.it",
      PEC: "mgiovanni@gmail.com",
      Note:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius purus tellus, ac auctor nibh dictum consequat",

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
      Email: "ggaribaldi@gmail.com",
      PEC: "ggaribaldi@gmail.com",
      Note:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius purus tellus, ac auctor nibh dictum consequat",

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

      ImportoRitenutaDiCategoria: "222.15",

      LiquidazioniMensili: [
        {
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
      Email: "ttali@gmail.com",
      PEC: "ttali@gmail.com",
      Note:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius purus tellus, ac auctor nibh dictum consequat",

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

      ImportoRitenutaDiCategoria: "122.15",

      LiquidazioniMensili: [
        {
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
      Email: "gimondi@gmail.com",
      PEC: "gimondi@gmail.com",
      Note:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius purus tellus, ac auctor nibh dictum consequat",

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

      ImportoRitenutaDiCategoria: "130.15",

      LiquidazioniMensili: [
        {
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
      Email: "vemanuele@gmail.com",
      PEC: "vemanuele@gmail.com",
      Note:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius purus tellus, ac auctor nibh dictum consequat",

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

      ImportoRitenutaDiCategoria: "200.15",

      LiquidazioniMensili: [
        {
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
  // ---------------------------------------------------
  // DOMANDE
  // ---------------------------------------------------

  let tabDomande = [
    {
      CodiceFiscale: "LFNCLL60D03E026T",
      Cognome: "Alfano",
      Nome: "Camillo",
      DataDiNascita: "03/04/1960",
      DataDiDecesso: "03/01/2014",
      AnnoDiScarto: "1234",
      NumeroFaldone: "1111",

      DomandePresentate: [
        {
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

          LegaliRappresentanti: [
            {
              LegaleRappresentanteNome: "Mario",
              LegaleRappresentanteCognome: "Rossi",
              LegaleRappresentanteCodiceFiscale: "RSSMRO70A10F2052",
              LegaleRappresentanteNumeroDecreto: "",
              LegaleRappresentanteDataDecreto: "",
              LegaleRappresentanteTipoDecreto: "",
              LegaleRappresentanteScadenzaDecreto: ""
            },
            {
              Nome: "",
              Cognome: "",
              CodiceFiscale: "",
              NumeroDecreto: "",
              DataDecreto: "",
              TipoDecreto: "",
              ScadenzaDecreto: ""
            }
          ],
          Curatore: "",
          Comunicazioni: "",
          ModalitaDiPagamento: "",
          AssociazioniDiCategoria: [
            {
              TipoAssociazione: "ANMIC",
              DataInizioIscrizione: "10/04/1986",
              DataFineIscrizione: "",
              QuotaMensile: "103.32"
            }
          ],
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
      DomandePresentate: [
        {
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
      DomandePresentate: [
        {
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
      DomandePresentate: [
        {
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
      DomandePresentate: [
        {
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
      DomandePresentate: [
        {
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

      Duplicato: false
    },
    {
      CodiceFiscale: "3456735790GHJDAE",
      Cognome: "Hammond222222",
      Nome: "John22",
      DataDiNascita: "01/01/1970",
      DataDiDecesso: "-",
      AnnoDiScarto: "1234",
      NumeroFaldone: "1251161",
      DomandePresentate: [
        {
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
      DomandePresentate: [
        {
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

      Duplicato: false
    }
  ];

  // ---------------------------------------------------
  // ANAGRAFE
  // ---------------------------------------------------

  let tabAnagrafe = [
    {
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
      AntriIndirizzi: "atro indirizzo qòlwekrjòlqwekjròlqwkjer",
      Redditi: [
        {
          Anno: "2018",
          RedditoAssistito: "111111.45",
          RedditoConiuge: "6578.88",
          ValidoPerGliAnniSuccessivi: true,
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
    },
    {
      CodiceFiscale: "RSSARO70A10F2052",
      Cognome: "Alfano",
      Nome: "Camillo",
      DataDiNascita: "01/01/1930",
      DataDiDecesso: "-",
      Sesso: "F",
      LuogoDiNascita: "Bologna",
      Nazionalita: "Italiana",
      Residenza: "via Luigi Cadorna, 53 - 39100 Bolzano BZ",
      Domicilio: "via Armando Diaz, 2 - 39100 Bolzano BZ",
      AntriIndirizzi: "atro indirizzo qòlwekrjòlqwekjròlqwkjer",
      Redditi: [
        {
          Anno: "2018",
          RedditoAssistito: "111111.45",
          RedditoConiuge: "6578.88",
          ValidoPerGliAnniSuccessivi: true,
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
      DataDiDecesso: "-",
      Sesso: "F",
      LuogoDiNascita: "Bologna",
      Nazionalita: "Italiana",
      Residenza: "via Luigi Cadorna, 53 - 39100 Bolzano BZ",
      Domicilio: "via Armando Diaz, 2 - 39100 Bolzano BZ",
      AntriIndirizzi: "indirizzo di prova qòlwekrjòlqwekjròlqwkjer",
      Redditi: [
        {
          Anno: "2018",
          RedditoAssistito: "111111.45",
          RedditoConiuge: "6578.88",
          ValidoPerGliAnniSuccessivi: true,
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
      DataDiDecesso: "01/01/1930",
      Sesso: "F",
      LuogoDiNascita: "Bolzano",
      Nazionalita: "Inglese",
      Residenza: "via Carlo Alberto della Chiesa, 53 - 39100 Milano BZ",
      Domicilio: "via Giocchino Diaz, 2 - 39100 Bolzano BZ",
      AntriIndirizzi: "qò lwe k rj ò lqwekjròlqwkjer",
      Redditi: [
        {
          Anno: "2018",
          RedditoAssistito: "111111.45",
          RedditoConiuge: "6578.88",
          ValidoPerGliAnniSuccessivi: true,
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
      CodiceFiscale: "VSYFRO70A10E2652",
      Cognome: "Mathews",
      Nome: "Suzanne",
      DataDiNascita: "01/01/1966",
      Sesso: "F",
      DataDiDecesso: "-",
      LuogoDiNascita: "Bologna",
      Nazionalita: "Italiana",
      Residenza: "via Luigi Venezia, 53 - 39100 Bolzano CT",
      Domicilio: "via Venezia Diaz, 2 - 39100 Bolzano VE",
      AntriIndirizzi: "qòlwek rjòlq wekjròlqwkjer",
      Redditi: [
        {
          Anno: "2018",
          RedditoAssistito: "111111.45",
          RedditoConiuge: "6578.88",
          ValidoPerGliAnniSuccessivi: true,
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
      CodiceFiscale: "WSSGRO70A10T2066",
      Cognome: "Schidner",
      Nome: "Robert",
      DataDiNascita: "01/04/1950",
      Sesso: "M",
      DataDiDecesso: "01/01/1930",
      LuogoDiNascita: "Roma",
      Nazionalita: "Italiana",
      Residenza: "via dell'Albergo Murat, 53 - 89112 Roma RM",
      Domicilio: "via Bellini Diaz, 2 - 84094 Roma RM",
      AntriIndirizzi: "qòlwekrjòlqw ekjròl qwkjer",
      Redditi: [
        {
          Anno: "2018",
          RedditoAssistito: "111111.45",
          RedditoConiuge: "6578.88",
          ValidoPerGliAnniSuccessivi: true,
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
      Email: "mrossi@gmail.com",
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
      DataDiDecesso: "-",
      LuogoDiNascita: "Bolzano-11",
      Nazionalita: "Italiana",
      Residenza: "via Giocchino Murat, 53 - 89112 Roma RM",
      Domicilio: "via Armando Diaz, 2 - 84094 Roma RM",
      AntriIndirizzi: "indirizzo straniero 1 wekjròlqwkjer",
      Redditi: [
        {
          Anno: "2018",
          RedditoAssistito: "111111.45",
          RedditoConiuge: "6578.88",
          ValidoPerGliAnniSuccessivi: true,
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
      CodiceFiscale: "3456735790GHJDAE",
      Cognome: "Hammond222222",
      Nome: "John22",
      DataDiNascita: "01/01/1970",
      Sesso: "F",
      DataDiDecesso: "-",
      LuogoDiNascita: "Bologna 2",
      Nazionalita: "Italiana",
      Residenza: "via Luigi Belli, 53 - 39100 Bolzano BZ",
      Domicilio: "via Diaz Armandino, 2 - 39100 Bolzano BZ",
      AntriIndirizzi: "indirizzo belga qòlwekrjòlqwekjròlqwkjer",
      Redditi: [
        {
          Anno: "2018",
          RedditoAssistito: "111111.45",
          RedditoConiuge: "6578.88",
          ValidoPerGliAnniSuccessivi: true,
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
      DataDiDecesso: "01/01/1930",
      LuogoDiNascita: "Bolzano",
      Nazionalita: "Inglese",
      Residenza: "via Carlo Alberto della Chiesa, 53 - 39100 Milano BZ",
      Domicilio: "via Giocchino Diaz, 2 - 39100 Bolzano BZ",
      AntriIndirizzi: "indirizzo austriaco qòlwekrjòlqwekjròlqwkjer",
      Redditi: [
        {
          Anno: "2018",
          RedditoAssistito: "111111.45",
          RedditoConiuge: "6578.88",
          ValidoPerGliAnniSuccessivi: true,
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
    }
  ];

  switch (table) {
    case "anagrafe":
      return tabAnagrafe;
      break;
    case "domande":
      return tabDomande;
      break;
    case "associazioni":
      return tabAssociazioni;
      break;
    case "liquidazioni":
      return tabLiquidazioni;
      break;
    default:
      alert("Tabella In MochDb HTTP inesistente");
      break;
  }
};

/**
 * liquidazioni - i servizi http per la gestione delle liquidazioni
 *
 */

liquidazioni = function($http) {
  return {
    //----------------------------------
    // Chiamata Get Standard
    //----------------------------------
    find: function(url, data) {
      if (url == "mockUrl") {
        let response = mochDbTable("liquidazioni");
        return response;
      }

      $http
        .get(url, data, config)
        .success(function(data, status, headers, config) {
          //formattazione dei dati secondo mock
          alert("Get Regular 2222222222");
        })
        .error(function(data, status, header, config) {
          //messaggio di errore per questo post
          alert("Get Regular 3333333333333");
        });
    },

    //----------------------------------
    // Ricerca in Base Dati per Codice Fiscale
    //----------------------------------
    findCodFis: function(url, cCodFis) {
      if (url == "mockUrl") {
        let response = mochDbTable("associazioni");

        return response.find(function(obj) {
          return obj.CodiceFiscale === cCodFis;
        });
      }

      $http
        .get(url, cCodFis, config)
        .success(function(data, status, headers, config) {
          //formattazione dei dati secondo mock
          alert("Get Regular 2222222222");
        })
        .error(function(data, status, header, config) {
          //messaggio di errore per questo post
          alert("Get Regular 3333333333333");
        });
    }
  };
};

/**
 * associazioni - i servizi http per la gestione delle associazioni
 *
 */

associazioni = function($http) {
  return {
    //----------------------------------
    // Chiamata Get Standard
    //----------------------------------
    find: function(url, data) {
      if (url == "mockUrl") {
        let response = mochDbTable("associazioni");
        return response;
      }

      $http
        .get(url, data, config)
        .success(function(data, status, headers, config) {
          //formattazione dei dati secondo mock
          alert("Get Regular 2222222222");
        })
        .error(function(data, status, header, config) {
          //messaggio di errore per questo post
          alert("Get Regular 3333333333333");
        });
    },

    //----------------------------------
    // Ricerca in Base Dati per Codice Fiscale
    //----------------------------------
    findCodFis: function(url, cCodFis) {
      if (url == "mockUrl") {
        let response = mochDbTable("associazioni");

        return response.find(function(obj) {
          return obj.CodiceFiscale === cCodFis;
        });
      }

      $http
        .get(url, cCodFis, config)
        .success(function(data, status, headers, config) {
          //formattazione dei dati secondo mock
          alert("Get Regular 2222222222");
        })
        .error(function(data, status, header, config) {
          //messaggio di errore per questo post
          alert("Get Regular 3333333333333");
        });
    }
  };
};

/**
 * domande - i servizi http per la gestione delle domande
 *
 */

domande = function($http) {
  return {
    //----------------------------------
    // Chiamata Get Standard
    //----------------------------------
    find: function(url, data) {
      if (url == "mockUrl") {
        let response = mochDbTable("domande");
        return response;
      }

      $http
        .get(url, data, config)
        .success(function(data, status, headers, config) {
          //formattazione dei dati secondo mock
          alert("Get Regular 2222222222");
        })
        .error(function(data, status, header, config) {
          //messaggio di errore per questo post
          alert("Get Regular 3333333333333");
        });
    },
    //----------------------------------
    // Ricerca in Base Dati per Codice Fiscale
    //----------------------------------
    findCodFis: function(url, cCodFis) {
      if (url == "mockUrl") {
        let response = mochDbTable("domande");

        return response.find(function(obj) {
          return obj.CodiceFiscale === cCodFis;
        });
      }

      $http
        .get(url, cCodFis, config)
        .success(function(data, status, headers, config) {
          //formattazione dei dati secondo mock
          alert("Get Regular 2222222222");
        })
        .error(function(data, status, header, config) {
          //messaggio di errore per questo post
          alert("Get Regular 3333333333333");
        });
    }
  };
};
/**
 * anagrafica - i servizi http per l'anagrafe
 *
 */

_ricercaAnagraficaRicerca = function($http) {
  return {
    //----------------------------------
    // Chiamata Get Standard
    //----------------------------------
    get: function(url, data) {
      if (url == "mockUrl") {
        let response = mochDbTable("anagrafe");
        return response;
      }

      $http
        .post(url, data, config)
        .success(function(data, status, headers, config) {
          //formattazione dei dati secondo mock
          alert("Get Regular 2222222222");
        })
        .error(function(data, status, header, config) {
          //messaggio di errore per questo post
          alert("Get Regular 3333333333333");
        });
    },

    //----------------------------------
    // Chiamata Post Standard
    //----------------------------------
    post: function(url, data) {
      if (url == "mockUrl") {
        //dati mock attesi
        alert("Post Mock 1111111111111");
        return;
      }

      $http
        .post(url, data, config)
        .success(function(data, status, headers, config) {
          //formattazione dei dati secondo mock
          alert("Post Regular 2222222222");
        })
        .error(function(data, status, header, config) {
          //messaggio di errore per questo post
          alert("Post Regular 3333333333333");
        });
    },

    //----------------------------------
    // Chiamata Put Standard
    //----------------------------------
    put: function(url, data, mock) {
      if (url == "mockUrl") {
        //dati mock attesi
        alert("Put Mock 1111111111111");
        return;
      }

      $http
        .put(url, data, config)
        .success(function(data, status, headers, config) {
          //formattazione dei dati secondo mock
          alert("Put Regular 2222222222");
        })
        .error(function(data, status, header, config) {
          //messaggio di errore per questo post
          alert("Put Regular 3333333333333");
        });
    },

    //----------------------------------
    // Chiamata Put Standard
    //----------------------------------
    delete: function(url, data, mock) {
      if (url == "mockUrl") {
        //dati mock attesi
        alert("Delete Mock 1111111111111");
        return;
      }

      $http
        .delete(url, data, config)
        .success(function(data, status, headers, config) {
          //formattazione dei dati secondo mock
          alert("Delete Regular 2222222222");
        })
        .error(function(data, status, header, config) {
          //messaggio di errore per questo post
          alert("Delete Regular 3333333333333");
        });
    },

    //----------------------------------
    // Ricerca in Base Dati per Codice Fiscale
    //----------------------------------
    findCodFis: function(url, cCodFis) {
      if (url == "mockUrl") {
        let response = mochDbTable("anagrafe");

        return response.find(function(obj) {
          return obj.CodiceFiscale === cCodFis;
        });
      }

      $http
        .get(url, cCodFis, config)
        .success(function(data, status, headers, config) {
          //formattazione dei dati secondo mock
          alert("Get Regular 2222222222");
        })
        .error(function(data, status, header, config) {
          //messaggio di errore per questo post
          alert("Get Regular 3333333333333");
        });
    }
  };
};

funzionalitaNonImplementata = function() {
  swal({
    type: "error",
    title: "Oops...",
    text: "Funzionalità non implementata!",
    footer: "<a href>La implementeremo a breve...</a>"
  });
};

// -----------------------------------------------------

function httpServices($http) {
  return {
    liquidazioni: liquidazioni($http),
    associazioni: associazioni($http),
    domande: domande($http),
    _ricercaAnagraficaRicerca: _ricercaAnagraficaRicerca($http),
    funzionalitaNonImplementata: funzionalitaNonImplementata
  };
}

/**
 *
 * Collega tutte le funzioni al modulo
 */
angular.module("inciso").factory("httpServices", httpServices);