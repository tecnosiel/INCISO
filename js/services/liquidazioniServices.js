function liquidazioniServices($http, $rootScope) {
  var service = {};

  service.find = find;
  service.findPosizioni = findPosizioni;
  service.findCodFis = findCodFis;
  service.save = save;

  return service;

  function find(dataFind, callBack) {
    $http
      .get($rootScope.urlLiquidazioni + "/find", { data: dataFind })
      .success(function(data, status, headers, config) {
        //formattazione dei dati secondo mock
        alert("successo nella chiamata ");
        debugger;
        callBack(data);
      })
      .error(function(data, status, header, config) {
        //messaggio di errore per questo get
        alert("errore nella chiamata ");
        debugger;
      });
  }

  function findCodFis(cCodFis, callBack) {
    $http
      .get($rootScope.urlLiquidazioni + "/findcodfis", { data: cCodFis }, config)
      .success(function(data, status, headers, config) {
        //formattazione dei dati secondo mock
        alert("successo nella chiamata ");
        callBack(data);
      })
      .error(function(data, status, header, config) {
        //messaggio di errore per questo post
        alert("errore nella chiamata ");
        debugger;
      });
  }

  function findPosizioni(dataFind, callBack) {
    $http
      .get($rootScope.urlLiquidazioni + "/findPosizioni", { data: dataFind })
      .success(function(data, status, headers, config) {
        //formattazione dei dati secondo mock
        alert("successo nella chiamata ");
        debugger;
        callBack(data);
      })
      .error(function(data, status, header, config) {
        //messaggio di errore per questo get
        alert("errore nella chiamata ");
        debugger;
      });
  }



  function save(dataSave, callBack) {
    $http
      .post($rootScope.urlLiquidazioni + "/save", { data: dataSave })
      .success(function(data, status, headers, config) {
        //formattazione dei dati secondo mock
        alert("successo nella chiamata ");
        debugger;
        callBack(data);
      })
      .error(function(data, status, header, config) {
        //messaggio di errore per questo get
        alert("errore nella chiamata ");
        debugger;
      });
  }



}

angular.module("inciso").factory("liquidazioniServices", liquidazioniServices);
