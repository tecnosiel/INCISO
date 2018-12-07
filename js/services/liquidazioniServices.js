function liquidazioniServices($http, $rootScope, $timeout) {
  var service = {};
  var config = {
    headers: {
      'Content-Type': 'application/json;'
    }
  }


  service.getTotalRows = getTotalRows;
  service.find = find;
  service.findPosizioni = findPosizioni;
  service.findCodFis = findCodFis;
  service.save = save;

  return service;

  function getTotalRows(dataFind, callBack) {

    $rootScope.showSpinner = true;

    $timeout(function () {
      $http
        .post($rootScope.urlLiquidazioni + "/GetTotalsByAnagFilter" + $rootScope.testquerystring, {
          data: dataFind
        }, config)
        .success(function (data, status, headers, config) {
          //formattazione dei dati secondo mock
          if ($rootScope.isJsonString)
            callBack(data);
        })
        .error(function (data, status, header, config) {
          //messaggio di errore per questo get
          $rootScope.showSpinner = false;
          alert("errore nella chiamata : " + status);
        })
        .finally(function () {
          // $rootScope.showSpinner = false;
        });
    }, 300);
  }

  function find(dataFind, callBack) {
    $rootScope.showSpinner = true;
    $timeout(function () {
      $http
        .post($rootScope.urlLiquidazioni + "/find" + $rootScope.testquerystring, {
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
        .post(
          $rootScope.urlLiquidazioni + "/findcodfis" + $rootScope.testquerystring, {
            data: cCodFis
          }, config)
        .success(function (data, status, headers, config) {
          if ($rootScope.isJsonString)
            callBack(data);
        })
        .error(function (data, status, header, config) {
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
        .post($rootScope.urlLiquidazioni + "/findPosizioni" + $rootScope.testquerystring, {
          data: dataFind
        }, config)
        .success(function (data, status, headers, config) {
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
        .post($rootScope.urlLiquidazioni + "/save", {
          data: dataSave
        })
        .success(function (data, status, headers, config) {
          if ($rootScope.isJsonString)
            callBack(data);
        })
        .error(function (data, status, header, config) {
          alert("errore nella chiamata : " + status);
        })
        .finally(function () {
          $rootScope.showSpinner = false;
        });
    }, 300);
  }
}

angular.module("inciso").factory("liquidazioniServices", liquidazioniServices);