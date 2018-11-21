//==========================================================
// camilloelviraVERO
//==========================================================
this.server = "wwwroot-dev/inciso.prov.bz.it/api";
//==========================================================

/**
 * Tabelle BASE DATI MOCK
 *
 */
mochDbTable = function(table) {
  // // ---------------------------------------------------
  // LIQUIDAZIONI
  // ---------------------------------------------------
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
    }
  ];

  // ---------------------------------------------------
  // EVIDENZE
  // ---------------------------------------------------
  let tabEvidenze = [
    {
      DataDecorrenza: "12/05/2015",
      TipoEvidenza: "Controllo reddito - xxxxxx",
      Descrizione: "Controllo reddito – anno successivo - xxxxxxx",
      DataScadenza: "12/07/2013",
      Posizione: "8798548",
      Cognome: "Rossi",
      Nome: "Mario",
      CodiceFiscale: "RSSMRA70A41F2052",
      Dettaglio:
        "<div><label>Tipo prestazione:</label> Lorem ipsum</div><div><label>Data chiusure:</label> 05/12/2010</div><div><label>Note:</label> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>",
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
      Dettaglio:
        "<div><label>Tipo prestazione:</label> Lorem ipsum</div><div><label>Data chiusure:</label> 05/12/2010</div><div><label>Note:</label> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>",
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
      Dettaglio:
        "<div><label>Tipo prestazione:</label> Lorem ipsum</div><div><label>Data chiusure:</label> 05/12/2010</div><div><label>Note:</label> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>",
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
      Dettaglio:
        "<div><label>Tipo prestazione:</label> Lorem ipsum</div><div><label>Data chiusure:</label> 05/12/2010</div><div><label>Note:</label> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>",
      PrestazioneDiRiferimento: "",
      DataDellaDomandaDiRiferimento: "",
      DataChiusura: "",
      Utente: "yyyyyyyy",
      NoteDiChiusura: "io sono una nota di chiusura",
      LetteraInviata: "",
      Note: "11111111144444444444411111111111"
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
      Email: "mrossi555@gmail.com",
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
      Email: "giovanni6666@tin.it",
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
      Email: "ggaribaldi444@gmail.com",
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
      Email: "ttali444@gmail.com",
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
      Email: "gimondi444@gmail.com",
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
      Email: "vemanuele555@gmail.com",
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

      Verbali: [
        {
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
      Verbali: [
        {
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
      Verbali: [
        {
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
      Verbali: [
        {
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

      Verbali: [
        {
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
      Verbali: [
        {
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
      Verbali: [
        {
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
      Verbali: [
        {
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
    case "evidenze":
      return tabEvidenze;
      break;
    case "liquidazioni":
      return tabLiquidazioni;
      break;
    case "posizioni":
      return tabPosizioni;
      break;
    default:
      alert("Tabella In MochDb HTTP inesistente");
      break;
  }
};

/**
 * evidenze - i servizi http per la gestione delle evidenze
 *
 */

// evidenze = function($http) {
//   return {
//     //----------------------------------
//     // Chiamata Get Standard
//     //----------------------------------
//     find: function(url, data) {
//       if (url == "mockUrl") {
//         let response = mochDbTable("evidenze");
//         return response;
//       }

//       $http
//         .get(url, data, config)
//         .success(function(data, status, headers, config) {
//           //formattazione dei dati secondo mock
//           alert("CallBack su successo di chiamata ");
//         })
//         .error(function(data, status, header, config) {
//           //messaggio di errore per questo post
//           alert("CallBack su errore di chiamata ");
//         });
//     },

//     //----------------------------------
//     // Ricerca in Base Dati per Codice Fiscale
//     //----------------------------------
//     findCodFis: function(url, cCodFis) {
//       if (url == "mockUrl") {
//         let response = mochDbTable("evidenze");

//         return response.find(function(obj) {
//           return obj.CodiceFiscale === cCodFis;
//         });
//       }

//       $http
//         .get(url, cCodFis, config)
//         .success(function(data, status, headers, config) {
//           //formattazione dei dati secondo mock
//           alert("CallBack su successo di chiamata ");
//         })
//         .error(function(data, status, header, config) {
//           //messaggio di errore per questo post
//           alert("CallBack su errore di chiamata ");
//         });
//     }
//   };
// };

/**
 * liquidazioni - i servizi http per la gestione delle liquidazioni
 *
 */

// liquidazioni = function($http) {
//   return {
//     //----------------------------------
//     // Chiamata Get Standard
//     //----------------------------------
//     find: function(url, data) {
//       if (url == "mockUrl") {
//         let response = mochDbTable("liquidazioni");
//         return response;
//       }

//       $http
//         .get(url, data, config)
//         .success(function(data, status, headers, config) {
//           //formattazione dei dati secondo mock
//           alert("CallBack su successo di chiamata ");
//         })
//         .error(function(data, status, header, config) {
//           //messaggio di errore per questo post
//           alert("CallBack su errore di chiamata ");
//         });
//     },

//     //----------------------------------
//     // Ricerca in Base Dati per Codice Fiscale
//     //----------------------------------
//     findCodFis: function(url, cCodFis) {
//       if (url == "mockUrl") {
//         let response = mochDbTable("associazioni");

//         return response.find(function(obj) {
//           return obj.CodiceFiscale === cCodFis;
//         });
//       }

//       $http
//         .get(url, cCodFis, config)
//         .success(function(data, status, headers, config) {
//           //formattazione dei dati secondo mock
//           alert("CallBack su successo di chiamata ");
//         })
//         .error(function(data, status, header, config) {
//           //messaggio di errore per questo post
//           alert("CallBack su errore di chiamata ");
//         });
//     }
//   };
// };

/**
 * associazioni - i servizi http per la gestione delle associazioni
 *
 */

// associazioni = function($http) {
//   return {
//     //----------------------------------
//     // Chiamata Get Standard
//     //----------------------------------
//     find: function(url, data) {
//       if (url == "mockUrl") {
//         let response = mochDbTable("associazioni");
//         return response;
//       }

//       $http
//         .get(url, data, config)
//         .success(function(data, status, headers, config) {
//           //formattazione dei dati secondo mock
//           alert("CallBack su successo di chiamata ");
//         })
//         .error(function(data, status, header, config) {
//           //messaggio di errore per questo post
//           alert("CallBack su errore di chiamata ");
//         });
//     },

//     //----------------------------------
//     // Ricerca in Base Dati per Codice Fiscale
//     //----------------------------------
//     findCodFis: function(url, cCodFis) {
//       if (url == "mockUrl") {
//         let response = mochDbTable("associazioni");

//         return response.find(function(obj) {
//           return obj.CodiceFiscale === cCodFis;
//         });
//       }

//       $http
//         .get(url, cCodFis, config)
//         .success(function(data, status, headers, config) {
//           //formattazione dei dati secondo mock
//           alert("CallBack su successo di chiamata ");
//         })
//         .error(function(data, status, header, config) {
//           //messaggio di errore per questo post
//           alert("CallBack su errore di chiamata ");
//         });
//     }
//   };
// };

/**
 * domande - i servizi http per la gestione delle domande
 *
 */

// domande = function($http) {
//   return {
//     //----------------------------------
//     // Chiamata Get Standard
//     //----------------------------------
//     find: function(url, data) {
//       if (url == "mockUrl") {
//         let response = mochDbTable("domande");
//         return response;
//       }

//       $http
//         .get(url, data, config)
//         .success(function(data, status, headers, config) {
//           //formattazione dei dati secondo mock
//           alert("CallBack su successo di chiamata ");
//         })
//         .error(function(data, status, header, config) {
//           //messaggio di errore per questo post
//           alert("CallBack su errore di chiamata ");
//         });
//     },
//     //----------------------------------
//     // Ricerca in Base Dati per Codice Fiscale
//     //----------------------------------
//     findCodFis: function(url, cCodFis) {
//       if (url == "mockUrl") {
//         let response = mochDbTable("domande");

//         return response.find(function(obj) {
//           return obj.CodiceFiscale === cCodFis;
//         });
//       }

//       $http
//         .get(url, cCodFis, config)
//         .success(function(data, status, headers, config) {
//           //formattazione dei dati secondo mock
//           alert("CallBack su successo di chiamata ");
//         })
//         .error(function(data, status, header, config) {
//           //messaggio di errore per questo post
//           alert("CallBack su errore di chiamata ");
//         });
//     }
//   };
// };
/**
 * anagrafica - i servizi http per l'anagrafe
 *
 */

// _ricercaAnagraficaRicerca = function($http) {
//   return {
//     //----------------------------------
//     // Chiamata Get Standard
//     //----------------------------------
//     get: function(url, data) {
//       if (url == "mockUrl") {
//         let response = mochDbTable("anagrafe");
//         return response;
//       }

//       $http
//         .post(url, data, config)
//         .success(function(data, status, headers, config) {
//           //formattazione dei dati secondo mock
//           alert("CallBack su successo di chiamata ");
//         })
//         .error(function(data, status, header, config) {
//           //messaggio di errore per questo post
//           alert("CallBack su errore di chiamata ");
//         });
//     },

//     //----------------------------------
//     // Chiamata Post Standard
//     //----------------------------------
//     post: function(url, data) {
//       if (url == "mockUrl") {
//         //dati mock attesi
//         alert("Post Mock 1111111111111");
//         return;
//       }

//       $http
//         .post(url, data, config)
//         .success(function(data, status, headers, config) {
//           //formattazione dei dati secondo mock
//           alert("Post Regular 2222222222");
//         })
//         .error(function(data, status, header, config) {
//           //messaggio di errore per questo post
//           alert("Post Regular 3333333333333");
//         });
//     },

//     //----------------------------------
//     // Chiamata Put Standard
//     //----------------------------------
//     put: function(url, data, mock) {
//       if (url == "mockUrl") {
//         //dati mock attesi
//         alert("Put Mock 1111111111111");
//         return;
//       }

//       $http
//         .put(url, data, config)
//         .success(function(data, status, headers, config) {
//           //formattazione dei dati secondo mock
//           alert("Put Regular 2222222222");
//         })
//         .error(function(data, status, header, config) {
//           //messaggio di errore per questo post
//           alert("Put Regular 3333333333333");
//         });
//     },

//     //----------------------------------
//     // Chiamata Put Standard
//     //----------------------------------
//     delete: function(url, data, mock) {
//       if (url == "mockUrl") {
//         //dati mock attesi
//         alert("Delete Mock 1111111111111");
//         return;
//       }

//       $http
//         .delete(url, data, config)
//         .success(function(data, status, headers, config) {
//           //formattazione dei dati secondo mock
//           alert("Delete Regular 2222222222");
//         })
//         .error(function(data, status, header, config) {
//           //messaggio di errore per questo post
//           alert("Delete Regular 3333333333333");
//         });
//     },

//     //----------------------------------
//     // Ricerca in Base Dati per Codice Fiscale
//     //----------------------------------
//     findCodFis: function(url, cCodFis) {
//       if (url == "mockUrl") {
//         let response = mochDbTable("anagrafe");

//         return response.find(function(obj) {
//           return obj.CodiceFiscale === cCodFis;
//         });
//       }

//       $http
//         .get(url, cCodFis, config)
//         .success(function(data, status, headers, config) {
//           //formattazione dei dati secondo mock
//           alert("CallBack su successo di chiamata ");
//         })
//         .error(function(data, status, header, config) {
//           //messaggio di errore per questo post
//           alert("CallBack su errore di chiamata ");
//         });
//     }
//   };
// };

// -----------------------------------------------------

function httpServices($http) {
  return {
    // associazioni: associazioni($http),
  };
}

/**
 *
 * Collega tutte le funzioni al modulo
 */
angular.module("inciso").factory("httpServices", httpServices);
