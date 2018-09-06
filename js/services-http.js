/**
 * INSPINIA - Responsive Admin Theme
 *
 * httpServices.js file
 * Define http services  used in Inspinia theme
 *
 *
 * Functions (services)
 *
 *  - _ricercaAnagraficaRicerca
 *
 */

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
        //dati mock attesi
        let response = [
          {
            CodiceFiscale: "RSSARO70A10F2052",
            Cognome: "Alfano",
            Nome: "Camillo",
            DataDiNascita: "01/01/1930",
            DataDiDecesso: "-"
          },
          {
            CodiceFiscale: "QTGSRO60A11Q2055",
            Cognome: "Hammond",
            Nome: "John",
            DataDiNascita: "01/01/1970",
            DataDiDecesso: "-"
          },
          {
            CodiceFiscale: "RTSDRO70A10W2056",
            Cognome: "Mudassar",
            Nome: "Khan",
            DataDiNascita: "01/02/1650",
            DataDiDecesso: "01/01/1930"
          },
          {
            CodiceFiscale: "VSYFRO70A10E2652",
            Cognome: "Mathews",
            Nome: "Suzanne",
            DataDiNascita: "01/01/1966",
            DataDiDecesso: "-"
          },
          {
            CodiceFiscale: "WSSGRO70A10T2066",
            Cognome: "Schidner",
            Nome: "Robert",
            DataDiNascita: "01/04/1950",
            DataDiDecesso: "01/01/1930"
          }
        ];

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
    }
  };
};

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
