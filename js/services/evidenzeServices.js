function evidenzeServices($http, $rootScope) {
  var service = {};

  service.find = find;
  service.findPosizioni = findPosizioni;
  service.findCodFis = findCodFis;
  service.save = save;

  return service;

  function find(dataFind, callBack) {
    $http
      .get($rootScope.urlEvidenze + "/find", { data: dataFind })
      .success(function(data, status, headers, config) {
        //formattazione dei dati secondo mock
        alert("successo nella chiamata ");
        debugger;
        callBack(data);
      })
      .error(function(data, status, header, config) {
        //messaggio di errore per questo get
        alert("errore nella chiamata : " + status);
        debugger;
      });
  }

  function findCodFis(cCodFis, callBack) {
    $http
      .get($rootScope.urlEvidenze + "/findcodfis", { data: cCodFis }, config)
      .success(function(data, status, headers, config) {
        //formattazione dei dati secondo mock
        alert("successo nella chiamata ");
        callBack(data);
      })
      .error(function(data, status, header, config) {
        //messaggio di errore per questo post
        alert("errore nella chiamata : " + status);
        debugger;
      });
  }

  function findPosizioni(dataFind, callBack) {
    $http
      .get($rootScope.urlEvidenze + "/findPosizioni", { data: dataFind })
      .success(function(data, status, headers, config) {
        //formattazione dei dati secondo mock
        alert("successo nella chiamata ");
        debugger;
        callBack(data);
      })
      .error(function(data, status, header, config) {
        //messaggio di errore per questo get
        alert("errore nella chiamata : " + status);
        debugger;
      });
  }



  function save(dataSave, callBack) {
    $http
      .post($rootScope.urlEvidenze + "/save", { data: dataSave })
      .success(function(data, status, headers, config) {
        //formattazione dei dati secondo mock
        alert("successo nella chiamata ");
        debugger;
        callBack(data);
      })
      .error(function(data, status, header, config) {
        //messaggio di errore per questo get
        alert("errore nella chiamata : " + status);
        debugger;
      });
  }

}

angular.module("inciso").factory("evidenzeServices", evidenzeServices);
