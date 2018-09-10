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
  let tabAnagrafe = [
    {
      CodiceFiscale: "RSSARO70A10F2052",
      Cognome: "Alfano",
      Nome: "Camillo",
      DataDiNascita: "01/01/1930",
      DataDiDecesso: "-",
      LuogoDiNascita: "Bolzano",
      Nazionalita: "Ungherese",

      Indirizzi: [
        {
          Tipo: "Indirizzo abitazione",
          Indirizzo: "viale Giusti Antonia, 53 - 39100 Milano MI",
          Validida: "dal 01/01/2010 al 02/02/2011",
          Note: "fkjsaòldfkjasòkdfjaòkjòaldskjf"
        },
        {
          Tipo: "Indirizzo lavoro",
          Indirizzo: "viale Lavoro, 53 - 39100 Lavoro MI",
          Validida: "dal 01/01/2010 al 02/02/2014",
          Note: "fkjsaòldfkjasòkdfjaòkjòaldskjf"
        },
        {
          Tipo: "Indirizzo secondario",
          Indirizzo: "viale Secondario, 53 - 39100 Secondo MI",
          Validida: "dal 01/01/2010 al 02/02/2011",
          Note: "fkjsaòldfkjasòkdfjaòkjòaldskjf"
        }
      ],

      CognomeAcquisito: "Alfano Acquisito",
      StatoCivile: "Coniugata",
      ProvinciaDiNascita: "Milano",
      NazioneDiNascita: "Italia",
      Cittadinanza: "Italiana",
      Extracomunitario: true,

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

      Indirizzi: [
        {
          Tipo: "Indirizzo abitazione",
          Indirizzo: "viale Giusti Antonia, 53 - 39100 Milano MI",
          Validita: "dal 01/01/2010 al 02/02/2011",
          Note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
          Tipo: "Indirizzo lavoro",
          Indirizzo: "viale Lavoro, 53 - 39100 Lavoro MI",
          Validita: "dal 01/01/2010 al 02/02/2014",
          Note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
          Tipo: "Indirizzo secondario",
          Indirizzo: "viale Secondario, 53 - 39100 Secondo MI",
          Validita: "dal 01/01/2010 al 02/02/2011",
          Note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        }
      ],

      CognomeAcquisito: "Alfano Acquisito",
      StatoCivile: "Coniugata",
      ProvinciaDiNascita: "Milano",
      NazioneDiNascita: "Italia",
      Cittadinanza: "Italiana",
      Extracomunitario: true,

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
      LuogoDiNascita: "Bolzano",
      Nazionalita: "Inglese",
      Residenza: "via Carlo Alberto della Chiesa, 53 - 39100 Milano BZ",
      Domicilio: "via Giocchino Diaz, 2 - 39100 Bolzano BZ",

      Indirizzi: [
        {
          Tipo: "Indirizzo abitazione",
          Indirizzo: "viale Giusti Antonia, 53 - 39100 Milano MI",
          Validida: "dal 01/01/2010 al 02/02/2011",
          Note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
          Tipo: "Indirizzo lavoro",
          Indirizzo: "viale Lavoro, 53 - 39100 Lavoro MI",
          Validita: "dal 01/01/2010 al 02/02/2014",
          Note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
          Tipo: "Indirizzo secondario",
          Indirizzo: "viale Secondario, 53 - 39100 Secondo MI",
          Validita: "dal 01/01/2010 al 02/02/2011",
          Note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        }
      ],

      CognomeAcquisito: "Alfano Acquisito",
      StatoCivile: "Coniugata",
      ProvinciaDiNascita: "Milano",
      NazioneDiNascita: "Italia",
      Cittadinanza: "Italiana",
      Extracomunitario: true,

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
      DataDiDecesso: "-",
      LuogoDiNascita: "Bologna",
      Nazionalita: "Italiana",
      Residenza: "via Luigi Venezia, 53 - 39100 Bolzano CT",
      Domicilio: "via Venezia Diaz, 2 - 39100 Bolzano VE",

      Indirizzi: [
        {
          Tipo: "Indirizzo abitazione",
          Indirizzo: "viale Giusti Antonia, 53 - 39100 Milano MI",
          Validita: "dal 01/01/2010 al 02/02/2011",
          Note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
          Tipo: "Indirizzo lavoro",
          Indirizzo: "viale Lavoro, 53 - 39100 Lavoro MI",
          Validita: "dal 01/01/2010 al 02/02/2014",
          Note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
          Tipo: "Indirizzo secondario",
          Indirizzo: "viale Secondario, 53 - 39100 Secondo MI",
          Validita: "dal 01/01/2010 al 02/02/2011",
          Note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        }
      ],

      CognomeAcquisito: "Alfano Acquisito",
      StatoCivile: "Coniugata",
      ProvinciaDiNascita: "Milano",
      NazioneDiNascita: "Italia",
      Cittadinanza: "Italiana",
      Extracomunitario: true,

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
      DataDiDecesso: "01/01/1930",
      LuogoDiNascita: "Roma",
      Nazionalita: "Italiana",
      Residenza: "via Giocchino Murat, 53 - 89112 Roma RM",
      Domicilio: "via Armando Diaz, 2 - 84094 Roma RM",

      Indirizzi: [
        {
          Tipo: "Indirizzo abitazione",
          Indirizzo: "viale Giusti Antonia, 53 - 39100 Milano MI",
          Validita: "dal 01/01/2010 al 02/02/2011",
          Note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
          Tipo: "Indirizzo lavoro",
          Indirizzo: "viale Lavoro, 53 - 39100 Lavoro MI",
          Validita: "dal 01/01/2010 al 02/02/2014",
          Note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
          Tipo: "Indirizzo secondario",
          Indirizzo: "viale Secondario, 53 - 39100 Secondo MI",
          Validita: "dal 01/01/2010 al 02/02/2011",
          Note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        }
      ],

      CognomeAcquisito: "Alfano Acquisito",
      StatoCivile: "Coniugata",
      ProvinciaDiNascita: "Milano",
      NazioneDiNascita: "Italia",
      Cittadinanza: "Italiana",
      Extracomunitario: true,

      PermessoDiSoggiornoTipoPermesso: "Lorem ipsum dolor",
      PermessoDiSoggiornoDataRilascio: "01/01/2020",
      PermessoDiSoggiornoValidoFinoAl: "01/01/2020",
      TelefonoPrincipale: "0461 912585",
      TelefonoSecondario: "0123 456789",
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
    default:
      alert("Tabella In MochDb inesistente");
      break;
  }
};

/**
 * _ricercaAnagraficaRicerca - all services http for _ricercaAnagraficaRicerca
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

// -----------------------------------------------------

function httpServices($http) {
  return {
    _ricercaAnagraficaRicerca: _ricercaAnagraficaRicerca($http)
  };
}

/**
 *
 * Pass all functions into module
 */
angular.module("inspinia").factory("httpServices", httpServices);
