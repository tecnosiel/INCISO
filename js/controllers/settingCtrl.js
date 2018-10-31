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
    color:"rgb(51, 51, 51)"
  };

  $scope.resetStyle = function(){
    
  }

  $scope.setStyle = function() {
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
      $rootScope.CustomStyle["color"] =$scope.tmp.color;
    }

    // $scope.$apply();
  };
}

/**
 * Collega il controller al modulo inciso
 **/
angular.module("inciso").controller("settingCtrl", settingCtrl);
