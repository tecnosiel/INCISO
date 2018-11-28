function anagrafeServices($http, $rootScope, $timeout) {
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
        .get($rootScope.urlAnagrafe + "/GetByAnagFilter", {
          data: dataFind
        })
        .success(function (data, status, headers, config) {
          //formattazione dei dati secondo mock
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
        .get($rootScope.urlAnagrafe + "/findcodfis", {
          data: cCodFis
        }, config)
        .success(function (data, status, headers, config) {
          //formattazione dei dati secondo mock
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
    debugger;
    $rootScope.showSpinner = true;
    $timeout(function () {
      $http
        .get($rootScope.urlAnagrafe + "/findPosizioni", {
          data: dataFind
        })
        .success(function (data, status, headers, config) {
          //formattazione dei dati secondo mock
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
        })
        .success(function (data, status, headers, config) {
          //formattazione dei dati secondo mock
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