function anagrafeServices($http, $rootScope) {
  var service = {};

  service.find = find;
  service.findCodFis = findCodFis;

  return service;

  //----------------------------------
  // Ricerca in Base Dati per Codice Fiscale
  //----------------------------------
  function find(dataFind, callBack) {
    $http
      .get($rootScope.urlAnagrafe + "/find", { data: dataFind })
      .success(function(data, status, headers, config) {
        //formattazione dei dati secondo mock
        alert("successo nella chiamata ");
        debugger;
        callBack(data);
      })
      .error(function(data, status, header, config) {
        //messaggio di errore per questo post
        alert("errore nella chiamata ");
        debugger;
      });
  }

  function findCodFis(cCodFis) {
    $http
      .get($rootScope.urlAnagrafe + "/findCodFis", { cCodFis: cCodFis }, config)
      .success(function(data, status, headers, config) {
        //formattazione dei dati secondo mock
        alert("successo nella chiamata ");
      })
      .error(function(data, status, header, config) {
        //messaggio di errore per questo post
        alert("errore nella chiamata ");
        debugger;
      });
  }
}

angular.module("inciso").factory("anagrafeServices", anagrafeServices);
