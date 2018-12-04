function startUpServices($http, $rootScope, $timeout) {
  var service = {};
  var config = {
    headers: {
      'Content-Type': 'application/json;'
    }
  }

  if ($rootScope.httpautenticazione) {
    config.withCredentials = true;
  }

  service.findNazione = findNazione;
  service.findRegione = findRegione;
  service.findProvincia = findProvincia;
  service.findComune = findComune;
  service.findFrazione = findFrazione;
  service.findVie = findVie;
  service.findCAP = findCAP;
  service.findStatoCivile = findStatoCivile;
  service.findTipoIndirizzo = findTipoIndirizzo;

  return service;

  function findNazione(dataFind, callBack) {

    $rootScope.showSpinner = true;

    $timeout(function () {
      $http
        .get($rootScope.urlNazione + $rootScope.testquerystring.replace("?","&"), {
          data: dataFind
        }, config)
        .success(function (data, status, headers, config) {
          //formattazione dei dati secondo mock
          if ($rootScope.isJsonString)
            callBack(data);
        })
        .error(function (data, status, header, config) {
          debugger;
          //messaggio di errore per questo get
          alert("errore nella chiamata : " + status);
        })
        .finally(function () {
          $rootScope.showSpinner = false;
        });
    }, 300);
  }

  function findRegione(dataFind, callBack) {

    $rootScope.showSpinner = true;

    $timeout(function () {
      $http
        .get($rootScope.urlRegione + $rootScope.testquerystring.replace("?","&"), {
          data: dataFind
        }, config)
        .success(function (data, status, headers, config) {
          //formattazione dei dati secondo mock
          if ($rootScope.isJsonString)
            callBack(data);
        })
        .error(function (data, status, header, config) {
          debugger;
          //messaggio di errore per questo get
          alert("errore nella chiamata : " + status);
        })
        .finally(function () {
          $rootScope.showSpinner = false;
        });
    }, 300);
  }

  function findProvincia(dataFind, callBack) {

    $rootScope.showSpinner = true;

    $timeout(function () {
      $http
        .get($rootScope.urlProvincia + $rootScope.testquerystring.replace("?","&"), {
          data: dataFind
        }, config)
        .success(function (data, status, headers, config) {
          //formattazione dei dati secondo mock
          if ($rootScope.isJsonString)
            callBack(data);
        })
        .error(function (data, status, header, config) {
          debugger;
          //messaggio di errore per questo get
          alert("errore nella chiamata : " + status);
        })
        .finally(function () {
          $rootScope.showSpinner = false;
        });
    }, 300);
  }

  function findComune(dataFind, callBack) {

    $rootScope.showSpinner = true;

    $timeout(function () {
      $http
        .get($rootScope.urlComune + $rootScope.testquerystring.replace("?","&"), {
          data: dataFind
        }, config)
        .success(function (data, status, headers, config) {
          //formattazione dei dati secondo mock
          if ($rootScope.isJsonString)
            callBack(data);
        })
        .error(function (data, status, header, config) {
          debugger;
          //messaggio di errore per questo get
          alert("errore nella chiamata : " + status);
        })
        .finally(function () {
          $rootScope.showSpinner = false;
        });
    }, 300);
  }

  function findFrazione(dataFind, callBack) {

    $rootScope.showSpinner = true;

    $timeout(function () {
      $http
        .get($rootScope.urlFrazione + $rootScope.testquerystring.replace("?","&"), {
          data: dataFind
        }, config)
        .success(function (data, status, headers, config) {
          //formattazione dei dati secondo mock
          if ($rootScope.isJsonString)
            callBack(data);
        })
        .error(function (data, status, header, config) {
          debugger;
          //messaggio di errore per questo get
          alert("errore nella chiamata : " + status);
        })
        .finally(function () {
          $rootScope.showSpinner = false;
        });
    }, 300);
  }

  function findVie(dataFind, callBack) {

    $rootScope.showSpinner = true;

    $timeout(function () {
      $http
        .get($rootScope.urlVie + $rootScope.testquerystring.replace("?","&"), {
          data: dataFind
        }, config)
        .success(function (data, status, headers, config) {
          //formattazione dei dati secondo mock
          if ($rootScope.isJsonString)
            callBack(data);
        })
        .error(function (data, status, header, config) {
          debugger;
          //messaggio di errore per questo get
          alert("errore nella chiamata : " + status);
        })
        .finally(function () {
          $rootScope.showSpinner = false;
        });
    }, 300);
  }

  function findCAP(dataFind, callBack) {

    $rootScope.showSpinner = true;

    $timeout(function () {
      $http
        .get($rootScope.urlCAP + $rootScope.testquerystring.replace("?","&"), {
          data: dataFind
        }, config)
        .success(function (data, status, headers, config) {
          //formattazione dei dati secondo mock
          if ($rootScope.isJsonString)
            callBack(data);
        })
        .error(function (data, status, header, config) {
          debugger;
          //messaggio di errore per questo get
          alert("errore nella chiamata : " + status);
        })
        .finally(function () {
          $rootScope.showSpinner = false;
        });
    }, 300);
  }

  function findStatoCivile(dataFind, callBack) {

    $rootScope.showSpinner = true;

    $timeout(function () {
      $http
        .get($rootScope.urlStatoCivile + $rootScope.testquerystring.replace("?","&"), {
          data: dataFind
        }, config)
        .success(function (data, status, headers, config) {
          //formattazione dei dati secondo mock
          if ($rootScope.isJsonString)
            callBack(data);
        })
        .error(function (data, status, header, config) {
          debugger;
          //messaggio di errore per questo get
          alert("errore nella chiamata : " + status);
        })
        .finally(function () {
          $rootScope.showSpinner = false;
        });
    }, 300);
  }

  function findTipoIndirizzo(dataFind, callBack) {

    $rootScope.showSpinner = true;

    $timeout(function () {
      $http
        .get($rootScope.urlTipoIndirizzo + $rootScope.testquerystring.replace("?","&"), {
          data: dataFind
        }, config)
        .success(function (data, status, headers, config) {
          //formattazione dei dati secondo mock
          if ($rootScope.isJsonString)
            callBack(data);
        })
        .error(function (data, status, header, config) {
          debugger;
          //messaggio di errore per questo get
          alert("errore nella chiamata : " + status);
        })
        .finally(function () {
          $rootScope.showSpinner = false;
        });
    }, 300);
  }


}

angular.module("inciso").factory("startUpServices", startUpServices);