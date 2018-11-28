/**
 * settingCtrl - controller
 * Contiene dati globali usati in differenti view
 *
 */
function settingCtrl($scope, $rootScope, $http) {

  // ------------------------------------
  // Copiamo in scope i parametri in uso
  // ------------------------------------

  $scope.tmp = {
    fontfamily: "open sans",
    fontsize: 13,
    lineheight: 18.57,
    color: "rgb(51, 51, 51)",
    serverbackend: "",
    endpointanagrafe: "",
    endpointdomande: "",
    endpointautentificazione: ""
  };

  buffer = localStorage.getItem('fontfamily');
  if (buffer) {
    $scope.tmp.fontfamily = buffer;
  }
  // ---
  buffer = localStorage.getItem('fontsize');
  if (buffer) {
    $scope.tmp.fontsize = buffer;
  }
  // ---
  buffer = localStorage.getItem('lineheight');
  if (buffer) {
    $scope.tmp.lineheight = buffer;
  }
  // ---
  buffer = localStorage.getItem('color');
  if (buffer) {
    $scope.tmp.color = buffer;
  }
  // ---
  buffer = localStorage.getItem('serverbackend');
  if (buffer) {
    $scope.tmp.serverbackend = buffer;
  }

  // ---
  buffer = localStorage.getItem('endpointanagrafe');
  if (buffer) {
    $scope.tmp.endpointanagrafe = buffer;
  }
  // ---
  buffer = localStorage.getItem('endpointdomande');
  if (buffer) {
    $scope.tmp.endpointdomande = buffer;
  }
  // ---
  buffer = localStorage.getItem('endpointautentificazione');
  if (buffer) {
    $scope.tmp.endpointautentificazione = buffer;
  }

  // ------------------------------------
  // Funzioni del controller
  // ------------------------------------

  $scope.resetParameters = function () {
    $scope.tmp = {
      fontfamily: "open sans",
      fontsize: 13,
      lineheight: 18.57,
      color: "rgb(51, 51, 51)",
      serverbackend: "",
      endpointanagrafe: "",
      endpointdomande: "",
      endpointautentificazione: ""
    };
    localStorage.setItem('fontfamily', 'open sans');
    localStorage.setItem('fontsize', '13');
    localStorage.setItem('lineheight', '18.57');
    localStorage.setItem('color', 'rgb(51, 51, 51)');
    localStorage.setItem('serverbackend', '');
    localStorage.setItem('endpointanagrafe', '');
    localStorage.setItem('endpointdomande', '');
    localStorage.setItem('endpointautentificazione', '');
    $scope.setParameters();
    swal("Parametri Ripristinati Correttamente", "tutti i parametri sono stati ripristinati ai loro default", "success");

  };

  $scope.setParameters = function (cTipo) {
    if ($scope.tmp.fontfamily) {
      $rootScope.CustomStyle["font-family"] = $scope.tmp.fontfamily;
    }
    if ($scope.tmp.fontsize) {
      $rootScope.CustomStyle["font-size"] = $scope.tmp.fontsize + "px";
    }
    if ($scope.tmp.lineheight) {
      $rootScope.CustomStyle["line-height"] =
        ($scope.tmp.lineheight * 1).toFixed(2) + "px";
    }
    if ($scope.tmp.color) {
      $rootScope.CustomStyle["color"] = $scope.tmp.color;
    }
    if ($scope.tmp.serverbackend) {
      $rootScope.serverbackend = $scope.tmp.serverbackend;
    } else {
      $rootScope.serverbackend = "";
    }
    if ($scope.tmp.endpointanagrafe) {
      $rootScope.urlAnagrafe = $scope.tmp.serverbackend + $scope.tmp.endpointanagrafe.toLowerCase();
    } else {
      $rootScope.urlAnagrafe = $scope.tmp.serverbackend + "/api/persona";
    }
    if ($scope.tmp.endpointdomande) {
      $rootScope.urlDomande = $scope.tmp.serverbackend + $scope.tmp.endpointdomande.toLowerCase();
    } else {
      $rootScope.urlDomande = $scope.tmp.serverbackend + "/api/domande"
    }
    if ($scope.tmp.endpointdomande) {
      $rootScope.urlLogin = $scope.tmp.serverbackend + $scope.tmp.endpointautenticazione.toLowerCase();
    } else {
      $rootScope.urlLogin = $scope.tmp.serverbackend + "/api/autenticazione"
    }


    if (cTipo == "memorizza") {

      localStorage.setItem('fontfamily', $scope.tmp.fontfamily);
      localStorage.setItem('fontsize', $scope.tmp.fontsize);
      localStorage.setItem('lineheight', $scope.tmp.lineheight);
      localStorage.setItem('color', $scope.tmp.color);
      localStorage.setItem('serverbackend', $scope.tmp.serverbackend.toLowerCase());
      localStorage.setItem('endpointanagrafe', $scope.tmp.endpointanagrafe.toLowerCase());
      localStorage.setItem('endpointdomande', $scope.tmp.endpointdomande.toLowerCase());
      localStorage.setItem('endpointautentificazione', $scope.tmp.endpointautentificazione.toLowerCase());
      swal("Parametri Applicati Correttamente", "tutti i parametri sono stati applicati e memorizzati correttamente", "success");
    }
  };

  $scope.testInternet = function () {
    $rootScope.showSpinner = true;

    $http.get('https://api.github.com/users/peterbe/gists')
      .success(function (data) {
        $scope.gists = data;
        swal("Rete OK", "Accedo correttamente ad internet e a ricevere dati", "success")
      })
      .error(function (data, status) {
        console.error('Repos error', status, data);
        swal("Errore", "Problemi sulla rete! Status:" + status, "error");
      })
      .finally(function () {
        $rootScope.showSpinner = false;
      });
  }
}

/**
 * Collega il controller al modulo inciso
 **/
angular.module("inciso").controller("settingCtrl", settingCtrl);