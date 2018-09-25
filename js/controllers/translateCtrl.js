/**
 * translateCtrl - Controller for translate
 */
function translateCtrl($translate, $scope) {
  $scope.changeLanguage = function(langKey) {
    $translate.use(langKey);
    $scope.language = langKey;
  };
}

/**
 * Collega il controller al modulo inciso
 **/
angular
  .module("inciso")
  .controller("translateCtrl", translateCtrl);
