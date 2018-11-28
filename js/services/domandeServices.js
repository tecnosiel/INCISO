function domandeServices($http, $rootScope, $timeout) {
  var service = {};

  service.find = find;
  service.findPosizioni = findPosizioni;
  service.findCodFis = findCodFis;
  service.save = save;

  return service;

  function find(dataFind, callBack) {
    $rootScope.showSpinner = true;
    $timeout(function () {
      $http
        .get($rootScope.urlDomande + "/find", {
          data: dataFind
        })
        .success(function (data, status, headers, config) {
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

  function findCodFis(cCodFis, callBack) {
    $rootScope.showSpinner = true;
    $timeout(function () {
      $http
        .get($rootScope.urlDomande + "/findcodfis", {
          data: cCodFis
        }, config)
        .success(function (data, status, headers, config) {
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
        .get($rootScope.urlDomande + "/findPosizioni", {
          data: dataFind
        })
        .success(function (data, status, headers, config) {
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

  function save(dataSave, callBack) {
    $rootScope.showSpinner = true;
    $timeout(function () {
      $http
        .post($rootScope.urlDomande + "/save", {
          data: dataSave
        })
        .success(function (data, status, headers, config) {
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

angular.module("inciso").factory("domandeServices", domandeServices);