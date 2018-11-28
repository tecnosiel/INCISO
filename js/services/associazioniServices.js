function associazioniServices($http, $rootScope, $timeout) {
  var service = {};

  service.find = find;
  service.findPosizioni = findPosizioni;
  service.findCodFis = findCodFis;
  service.save = save;

  return service;

  function find(dataFind, callBack) {
    $rootScope.showSpinner = true;
    $timeout(function() {
      $http
        .get($rootScope.urlAssociazioni + "/find", { data: dataFind })
        .success(function(data, status, headers, config) {
          callBack(data);
          $rootScope.showSpinner = false;
        })
        .error(function(data, status, header, config) {
          alert("errore nella chiamata : " + status);
          $rootScope.showSpinner = false;
        });
    }, 300);
  }

  function findCodFis(cCodFis, callBack) {
    $rootScope.showSpinner = true;
    $timeout(function() {
      $http
        .get(
          $rootScope.urlAssociazioni + "/findcodfis",
          { data: cCodFis },
          config
        )
        .success(function(data, status, headers, config) {
          callBack(data);
          $rootScope.showSpinner = false;
        })
        .error(function(data, status, header, config) {
          alert("errore nella chiamata : " + status);
          $rootScope.showSpinner = true;
        });
    }, 300);
  }

  function findPosizioni(dataFind, callBack) {
    $rootScope.showSpinner = true;
    $timeout(function() {
      $http
        .get($rootScope.urlAssociazioni + "/findPosizioni", { data: dataFind })
        .success(function(data, status, headers, config) {
          callBack(data);
          $rootScope.showSpinner = false;
        })
        .error(function(data, status, header, config) {
          alert("errore nella chiamata : " + status);
          $rootScope.showSpinner = false;
        });
    }, 300);
  }

  function save(dataSave, callBack) {
    $rootScope.showSpinner = true;
    $timeout(function() {
      $http
        .post($rootScope.urlAssociazioni + "/save", { data: dataSave })
        .success(function(data, status, headers, config) {
          callBack(data);
          $rootScope.showSpinner = false;
        })
        .error(function(data, status, header, config) {
          alert("errore nella chiamata : " + status);
          $rootScope.showSpinner = false;
        });
    }, 300);
  }
}

angular.module("inciso").factory("associazioniServices", associazioniServices);