/**
 * Tabelle BASE VERBALI
 *
 */
mochTableVerbali = function(table) {

  let tabVerbali = [
    {
      DataProtocollo: "01/01/2010",
      NumeroProtocollo: "111-442524223",
      PercentualeDiInvalidita: "60",
      IndennitaDiAccompagnamento: "Si",
      PatologiaUditiva: "Si",
      RiduzioneDelVisus: "Si",
      Note: "11111111111111111"
    },
    {
      DataProtocollo: "01/01/2011",
      NumeroProtocollo: "111-2345223211",
      PercentualeDiInvalidita: "100",
      IndennitaDiAccompagnamento: "Si",
      PatologiaUditiva: "Si",
      RiduzioneDelVisus: "Si",
      Note: "2222222222222222222222222 11111111111111111"
    },
    {
      DataProtocollo: "01/01/2012",
      NumeroProtocollo: "111-2345223211",
      PercentualeDiInvalidita: "100",
      IndennitaDiAccompagnamento: "Si",
      PatologiaUditiva: "Si",
      RiduzioneDelVisus: "Si",
      Note: "2222222222222222222222222 11111111111111111"
    }
  ];

  switch (table) {
    case "Verbali":
      return tabVerbali;
      break;
    default:
      alert("Tabella MochDb di Verbali assente");
      break;
  }
};

/**
 * Verbali - i servizi http per la gestione dei verbali
 *
 */

verbali = function($http) {

  return {
    //----------------------------------
    // Ricerca i Verbali
    //----------------------------------
    find: function(url, data) {
      if (url == "mockUrl") {
        let response = mochTableVerbali("Verbali");
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
        let response = mochTableVerbali("Verbali");
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
        let response = mochTableVerbali("Verbali");
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

function verbaliServices($http) {
  return {
    verbali: verbali($http)
  };
}

/**
 *
 * Collega tutte le funzioni al modulo
 */
angular.module("inciso").factory("verbaliServices", verbaliServices);
