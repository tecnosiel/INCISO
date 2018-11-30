function anagrafeServices($http, $rootScope, $timeout) {
  var service = {};
  var config = {
    headers: {
      'Content-Type': 'application/json;'
    }
  }

  if ($rootScope.httpautenticazione) {
    config.withCredentials = true;
  }

  service.find = find;
  service.findPosizioni = findPosizioni;
  service.findCodFis = findCodFis;
  service.save = save;

  return service;

  function find(dataFind, callBack) {

    $rootScope.showSpinner = true;

    $timeout(function () {
      $http
        .get($rootScope.urlAnagrafe + "/GetByAnagFilter" + $rootScope.testquerystring, {
          data: dataFind
        }, config)
        .success(function (data, status, headers, config) {
          //formattazione dei dati secondo mock
          if ($rootScope.isJsonString)
            callBack(data);
        })
        .error(function (data, status, header, config) {
          //messaggio di errore per questo get
          alert("errore nella chiamata : " + status);
        })
        .finally(function () {
          $rootScope.showSpinner = false;
        });
    }, 300);
  }

  function findCodFis(cCodFis, callBack) {
    $rootScope.showSpinner = true;
    $timeout(function () {
      $http
        .get($rootScope.urlAnagrafe + "/findcodfis" + $rootScope.testquerystring, {
          data: cCodFis
        }, config)
        .success(function (data, status, headers, config) {
          //formattazione dei dati secondo mock
          if ($rootScope.isJsonString)
            callBack(data);
        })
        .error(function (data, status, header, config) {
          //messaggio di errore per questo post
          alert("errore nella chiamata : " + status);
        })
        .finally(function () {
          $rootScope.showSpinner = false;
        });
    }, 300);
  }

  function findPosizioni(dataFind, callBack) {
    $rootScope.showSpinner = true;
    $timeout(function () {
      $http
        .get($rootScope.urlAnagrafe + "/findPosizioni" + $rootScope.testquerystring, {
          data: dataFind
        }, config)
        .success(function (data, status, headers, config) {
          //formattazione dei dati secondo mock
          if ($rootScope.isJsonString)
            callBack(data);
        })
        .error(function (data, status, header, config) {
          //messaggio di errore per questo get
          alert("errore nella chiamata : " + status);
        })
        .finally(function () {
          $rootScope.showSpinner = false;
        });
    }, 300);
  }

  function save(dataSave, callBack) {
    $rootScope.showSpinner = true;
    $timeout(function () {
      $http
        .post($rootScope.urlAnagrafe + "/save", {
          data: dataSave
        }, config)
        .success(function (data, status, headers, config) {
          //formattazione dei dati secondo mock
          if ($rootScope.isJsonString)
            callBack(data);
        })
        .error(function (data, status, header, config) {
          //messaggio di errore per questo get
          alert("errore nella chiamata : " + status);
        })
        .finally(function () {
          $rootScope.showSpinner = false;
        });
    }, 300);
  }
}

angular.module("inciso").factory("anagrafeServices", anagrafeServices);