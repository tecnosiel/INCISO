/**
 * Tabelle BASE DI LOGSK
 *
 */
mochTableLogs = function(table) {
  let tabLogs = [
    {
      DataOra: "11/06/2018 11:02:47",
      NomeUtente: "MROSSI",
      Nome: "Mario",
      Cognome: "Rossi",
      Accesso: "Lettura",
      Entita: "Assistito",
      IdEntita: "33724198",
      TipoOperazione: "-",
      UtenteDB: "INCISO_USR"
    },
    {
      DataOra: "11/06/2018 11:02:47",
      NomeUtente: "MROSSI",
      Nome: "Mario",
      Cognome: "Rossi",
      Accesso: "Scrittura",
      Entita: "Assistito",
      IdEntita: "33724198",
      TipoOperazione: "Modifica Dati Anagrafici",
      UtenteDB: "INCISO_USR"
    },
    ,
    {
      DataOra: "11/06/2018 11:02:47",
      NomeUtente: "MROSSI",
      Nome: "Mario",
      Cognome: "Rossi",
      Accesso: "Scrittura",
      Entita: "Assistitoaaaa",
      IdEntita: "33724198",
      TipoOperazione: "Modifica Dati Anagrafici",
      UtenteDB: "INCISO_USR"
    },
    {
      DataOra: "11/06/2018 11:02:47",
      NomeUtente: "MROSSI",
      Nome: "aaaaMario",
      Cognome: "Rossiaaaa",
      Accesso: "Scrittura",
      Entita: "Assistito",
      IdEntita: "33724198",
      TipoOperazione: "Modifica Dati Anagrafici",
      UtenteDB: "INCISO_USR"
    },
    {
      DataOra: "11/06/2018 11:02:47",
      NomeUtente: "MROSSIaa",
      Nome: "Giuseppe",
      Cognome: "Garibaldi",
      Accesso: "Modifica",
      Entita: "Assistito",
      IdEntita: "33724198",
      TipoOperazione: "Modifica Dati Anagrafici",
      UtenteDB: "INCISO_USR"
    },
    {
      DataOra: "11/06/2018 11:02:47",
      NomeUtente: "MROSSI",
      Nome: "Mario",
      Cognome: "Rossi",
      Accesso: "Scrittura",
      Entita: "Assistito",
      IdEntita: "33724198",
      TipoOperazione: "Modifica Dati Anagrafici",
      UtenteDB: "INCISO_USR"
    },
    {
      DataOra: "11/06/2018 11:02:47",
      NomeUtente: "MROSSI",
      Nome: "Mario",
      Cognome: "Rossi",
      Accesso: "Scrittura",
      Entita: "Assistito",
      IdEntita: "33724198",
      TipoOperazione: "Modifica Dati Anagrafici",
      UtenteDB: "INCISO_USR"
    },
    {
      DataOra: "11/06/2018 11:02:47",
      NomeUtente: "MGUGLIELMO",
      Nome: "Guglielmo",
      Cognome: "De Sio",
      Accesso: "Scrittura",
      Entita: "Nome Entità",
      IdEntita: "33724198",
      TipoOperazione: "Lettura e Modifica Dati Anagrafici",
      UtenteDB: "INCISO_USR"
    }
  ];

  switch (table) {
    case "Logs":
      return tabLogs;
      break;
    default:
      alert("Tabella MochDb di Logs assente");
      break;
  }
};

/**
 * liquidazioni - i servizi http per la gestione delle liquidazioni
 *
 */

logs = function($http) {
  return {
    //----------------------------------
    // Ricerca i Logs
    //----------------------------------
    find: function(url, data) {
      if (url == "mockUrl") {
        let response = mochTableLogs("Logs");
        return response;
      }

      $http
        .get(url, data, config)
        .success(function(data, status, headers, config) {
          //formattazione dei dati secondo mock
          alert("CallBack su successo di chiamata ");
        })
        .error(function(data, status, header, config) {
          //messaggio di errore per questo post
          alert("CallBack su errore di chiamata ");
        });
    },

    insert: function(url, data) {
      if (url == "mockUrl") {
        let response = mochTableLogs("Logs");
        return response;
      }

      $http
        .post(url, data, config)
        .success(function(data, status, headers, config) {
          //formattazione dei dati secondo mock
          alert("CallBack su successo di chiamata ");
        })
        .error(function(data, status, header, config) {
          //messaggio di errore per questo post
          alert("CallBack su errore di chiamata ");
        });
    },

    update: function(url, data) {
      if (url == "mockUrl") {
        let response = mochTableLogs("Logs");
        return response;
      }

      $http
        .put(url, data, config)
        .success(function(data, status, headers, config) {
          //formattazione dei dati secondo mock
          alert("CallBack su successo di chiamata ");
        })
        .error(function(data, status, header, config) {
          //messaggio di errore per questo post
          alert("CallBack su errore di chiamata ");
        });
    }
  };
};

// -----------------------------------------------------

function logsServices($http) {
  return {
    logs: logs($http)
  };
}

/**
 *
 * Collega tutte le funzioni al modulo
 */
angular.module("inciso").factory("logsServices", logsServices);
