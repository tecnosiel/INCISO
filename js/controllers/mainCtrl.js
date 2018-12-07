/**
 * MainCtrl - controller
 * Contiene dati globali usati in differenti view
 *
 */
function MainCtrl($scope, $rootScope, $http, $translate, $uibModal, startUpServices, httpServices) {

  /**
   * Lettura settaggi da localStorage
   */

  $rootScope.CustomStyle = {};

  buffer = localStorage.getItem('fontfamily');
  if (buffer) {
    $rootScope.CustomStyle["font-family"] = buffer;
  }
  // ---
  buffer = localStorage.getItem('fontsize');
  if (buffer) {
    $rootScope.CustomStyle["font-size"] = buffer + "px";
  }
  // ---
  buffer = localStorage.getItem('lineheight');
  if (buffer) {
    $rootScope.CustomStyle["line-height"] = (buffer * 1).toFixed(2) + "px";;
  }

  // ---
  buffer = localStorage.getItem('httpautenticazione');
  if (buffer == "true") {
    $rootScope.httpautenticazione = true;
  } else {
    $rootScope.httpautenticazione = false;
  }
  // ---
  buffer = localStorage.getItem('testquerystring');
  if (buffer) {
    $rootScope.testquerystring = buffer;
  } else {
    $rootScope.testquerystring = "";
  }


  // ---------------------------------------
  // EndPoint
  // ---------------------------------------
  buffer = localStorage.getItem('color');
  if (buffer) {
    $rootScope.CustomStyle["color"] = buffer;
  }
  // ---
  buffer = localStorage.getItem('serverbackend');
  if (buffer) {
    $rootScope.serverbackend = buffer;
  } else {
    $rootScope.serverbackend = buffer;
  }
  // ---
  buffer = localStorage.getItem('endpointanagrafe');
  if (buffer) {
    $rootScope.urlAnagrafe = $rootScope.serverbackend + buffer;
  } else {
    $rootScope.urlAnagrafe = $rootScope.serverbackend + "/api/persona";
  }
  // ---
  buffer = localStorage.getItem('endpointdomande');
  if (buffer) {
    $rootScope.urlDomande = $rootScope.serverbackend + buffer;
  } else {
    $rootScope.urlDomande = $rootScope.serverbackend + "/api/domande"
  }
  // ---
  buffer = localStorage.getItem('endpointautentificazione');
  if (buffer) {
    $rootScope.urlLogin = $rootScope.serverbackend + buffer;
  } else {
    $rootScope.urlLogin = $rootScope.serverbackend + "/api/autenticazione"
  }

  // ---
  buffer = localStorage.getItem('endpointliquidazioni');
  if (buffer) {
    $rootScope.urlLiquidazioni = $rootScope.serverbackend + buffer;
  } else {
    $rootScope.urlLiquidazioni = $rootScope.serverbackend + "/api/liquidazioni"
  }

  buffer = localStorage.getItem('endpointevidenze');
  if (buffer) {
    $rootScope.urlEvidenze = $rootScope.serverbackend + buffer;
  } else {
    $rootScope.urlEvidenze = $rootScope.serverbackend + "/api/evidenze"
  }

  buffer = localStorage.getItem('endpointassociazioni');
  if (buffer) {
    $rootScope.urlAssociazioni = $rootScope.serverbackend + buffer;
  } else {
    $rootScope.urlAssociazioni = $rootScope.serverbackend + "/api/associazioni"
  }


  /**
   * Settaggio EndPoints RestFul
   */

  // $rootScope.server = "wwwroot-dev/inciso.prov.bz.it/api/";

  // $rootScope.urlLogin = $rootScope.serverbackend + "/api/autenticazione"
  // $rootScope.urlAnagrafe = $rootScope.serverbackend + "/api/persona";
  // $rootScope.urlDomande = $rootScope.serverbackend + "/api/domande"
  // $rootScope.urlLiquidazioni = $rootScope.serverbackend + "/api/liquidazioni"
  // $rootScope.urlEvidenze = $rootScope.serverbackend + "/api/evidenze"
  // $rootScope.urlAssociazioni = $rootScope.serverbackend + "/api/associazioni"

  $rootScope.urlNazione = $rootScope.serverbackend + "/api/Nazione/getAll?enabled=true"
  $rootScope.urlRegione = $rootScope.serverbackend + "/api/Regione/getAll?enabled=true"
  $rootScope.urlProvincia = $rootScope.serverbackend + "/api/Provincia/getAll?enabled=true"
  $rootScope.urlComune = $rootScope.serverbackend + "/api/Comune/getAll?enabled=true"
  $rootScope.urlFrazione = $rootScope.serverbackend + "/api/Frazione/getAll?enabled=true"
  $rootScope.urlVie = $rootScope.serverbackend + "/api/Strada/getAll?enabled=true"
  $rootScope.urlCAP = $rootScope.serverbackend + "/api/Cap/getAll?enabled=true"
  $rootScope.urlStatoCivile = $rootScope.serverbackend + "/api/StatoCivile/getAll?enabled=true"
  $rootScope.urlTipoIndirizzo = $rootScope.serverbackend + "/api/TipoIndirizzo/getAll?enabled=true"

  $rootScope.showSpinner = false;

  /**
   * Lingua partenza applicativo
   */

  window.language = "it"
  this.$onInit = function () {
    $translate.use("it");
  };

  /**
   * Funzoni Globali
   */
  window.infoDataTable = function (cTable, jsonFind, jsonPaginatore) {

    let tableSort = $("#" + cTable).dataTable();
    let tablePage = $("#" + cTable).DataTable();

    let info = {
      pages: {},
      sort: {},
      find: {}
    };
    if (Object.keys(jsonFind).length > 0) {
      info.find = jsonFind
    }

    // informazioni pagina
    info.pages = tablePage.page.info();

    // aggiornamentoinformazioni pagina con paginatore custom
    if (jsonPaginatore) {
      if (Object.keys(jsonPaginatore).length > 0) {
        info.pages.page = jsonPaginatore.page
        info.pages.pages = jsonPaginatore.pageSize
        info.pages.recordsTotal = jsonPaginatore.totalRecord
        // info.find = jsonPaginatore
      }
    }



    // informazioni ordinamento
    info.sort = {
      column: tableSort.fnSettings().aaSorting[0][0],
      direction: tableSort.fnSettings().aaSorting[0][1],
      titleColumn: tableSort.fnSettings().aoColumns[
        tableSort.fnSettings().aaSorting[0][0]
      ].sTitle
    };

    return info;
  }



  $rootScope.isJsonString = function (jsonString, bType) {
    try {
      var o = JSON.parse(jsonString);
      // Handle non-exception-throwing cases:
      // Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
      // but... JSON.parse(null) returns null, and typeof null === "object", 
      // so we must check for that, too. Thankfully, null is falsey, so this suffices:
      if (o && typeof o === "object") {
        if (bType) {
          return o;
        } else {
          return true;
        }
      }
    } catch (e) {
      return false;
    }

  }

  $rootScope.inserisciEvidenza = function (cCodFis) {
    $scope.modale = true;
    // http://www.marcorpsa.com/ee/t1891.html
    $scope.modalInstance = $uibModal.open({
      templateUrl: "./../views/visualizza_evidenza.html",
      controller: "evidenzeCtrl",
      size: "lg",
      scope: $scope,
      windowClass: "animated fadeInRightBig"
    });
  }


  $scope.fumetti = function () {
    if ($("body").hasClass("mini-navbar")) {
      return true;
    }
    return false;
  };

  $rootScope.resetUser = function () {
    $rootScope.immagineUtente = "profile0";
    $rootScope.cognome = "Login";
    $rootScope.nome = "Effettuare";
    $rootScope.ruolo = "Ruolo Indefinito";
    $rootScope.token = "Token Indefinito";
  };

  /**
   * variabili da sostituire con chiamate http
   */
  $scope.nazioni = [];
  startUpServices.findNazione(null, result => {
    $scope.nazioni = httpServices.arrayFromDb(result, 'nazioni')
  });

  $scope.province = [];
  startUpServices.findProvincia(null, result => {
    $scope.province = httpServices.arrayFromDb(result, 'province')
  });

  $scope.comuni = [];
  startUpServices.findComune(null, result => {
    $scope.comuni = httpServices.arrayFromDb(result, 'comuni')
  });

  $scope.vie = [];
  startUpServices.findVie(null, result => {
    $scope.vie = httpServices.arrayFromDb(result, 'vie')
  });

  $scope.frazioni = [];
  startUpServices.findFrazione(null, result => {
    $scope.frazioni = httpServices.arrayFromDb(result, 'frazioni')
  });

  $scope.CAP = [];
  startUpServices.findCAP(null, result => {
    $scope.CAP = httpServices.arrayFromDb(result, 'cap')
  });

  $scope.statoCivile = [];
  startUpServices.findStatoCivile(null, result => {
    $scope.statoCivile = httpServices.arrayFromDb(result, 'statocivile')
  });

  $scope.tipoIndirizzo = [];
  startUpServices.findTipoIndirizzo(null, result => {
    $scope.tipoIndirizzo = httpServices.arrayFromDb(result, 'tipoindirizzo')
  });


  // impostiamo la provincia selezionata
  // $scope.currentProvince = $scope.province[0];

  $scope.datiAssistito = [];
  $scope.findCodFis = function (cCodFis) {
    anagrafeServices.findCodFis(cCodFis, result => {
      $scope.datiAssistito = result;
    });
  };

  // -----------------------------------
  // camillo = function () {
  //   alert("ddddddddddddddd")
  //   return $http.get('https://api.github.com/users/peterbe/gists')
  // };

  // obs = Rx.Observable.fromPromise($http.get('https://api.github.com/users/peterbe/gists'))
  // obs.map(x =>{console.log(x.data); return x;}).subscribe(data => {debugger;console.log("dataxxxxxxxxxxxxxxxxxxxxxxxxxxxx")})

  // -----------------------------------

  $rootScope.resetUser();

}

/**
 * Collega il controller al modulo inciso
 **/
angular.module("inciso").controller("MainCtrl", MainCtrl);