// (function () {
//     'use strict';

function loginServices($http, $rootScope) {
  var service = {};

  service.login = Login;
  service.logout = Logout;

  return service;

  function Login(username, password, callback) {
    $http
      .post($rootScope.urlLogin, { username: username, password: password })
      .success(function(response) {
        // login successful if there's a token in the response
        if (response.token) {
 
          // viene aggiornato il token che è trasmesso nelle chiamate http  
          // viene aggiornato il token che è trasmesso nelle chiamate http  
          sessionStorage.setItem("token", response.token);

          $rootScope.immagineUtente = response.immagineUtente;
          $rootScope.cognome = response.cognome;
          $rootScope.nome = response.nome;
          $rootScope.ruolo = response.ruolo;
          $rootScope.token = response.token;

          // add jwt token to auth header for all requests made by the $http service
          // $http.defaults.headers.common.Authorization = 'Bearer ' + response.token;

          // execute callback with true to indicate successful login
          callback(true);
        } else {
          // execute callback with false to indicate failed login
          callback(false);
        }
      });
  }

  function Logout() {
    $rootScope.resetUser();
  }
}

angular
  .module("inciso")
  .factory("loginServices", loginServices);

// })();
