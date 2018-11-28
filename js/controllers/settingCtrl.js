/**
 * settingCtrl - controller
 * Contiene dati globali usati in differenti view
 *
 */
function settingCtrl($scope, $rootScope) {

  $scope.tmp = {
    fontfamily: "open sans",
    fontsize: 13,
    lineheight: 18.57,
    color: "rgb(51, 51, 51)",
    serverbackend:""

  };

  $scope.resetParameters = function () {
    $scope.tmp = {
      fontfamily: "open sans",
      fontsize: 13,
      lineheight: 18.57,
      color: "rgb(51, 51, 51)",
      serverbackend:""
    };
    localStorage.setItem('fontfamily', 'open sans');
    localStorage.setItem('fontsize', '13');
    localStorage.setItem('lineheight', '18.57');
    localStorage.setItem('color', 'rgb(51, 51, 51)');
    localStorage.setItem('serverbackend', '');
    $scope.setParameters();
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
    }else{
      $rootScope.serverbackend = "";
    }
    if (cTipo == "memorizza") {

      localStorage.setItem('fontfamily', $scope.tmp.fontfamily);
      localStorage.setItem('fontsize', $scope.tmp.fontsize);
      localStorage.setItem('lineheight', $scope.tmp.lineheight);
      localStorage.setItem('color', $scope.tmp.color);
      localStorage.setItem('serverbackend', $scope.tmp.serverbackend);
    }
  };

  debugger;
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

  debugger;

  $scope.setParameters();

}

/**
 * Collega il controller al modulo inciso
 **/
angular.module("inciso").controller("settingCtrl", settingCtrl);