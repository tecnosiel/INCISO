function loginServices($http, $rootScope, $timeout) {
  var service = {};

  service.login = Login;
  service.logout = Logout;

  return service;

  function Login(username, password, callback) {
    
    $rootScope.showSpinner = true;

    $timeout(function() {
      $http
        .post($rootScope.urlLogin + "/login", {
          username: username,
          password: password
        })
        .success(function(response) {
          $rootScope.showSpinner = false;

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
            $rootScope.showSpinner = false;
          } else {
            // execute callback with false to indicate failed login
            callback(false);
            $rootScope.showSpinner = false;
          }
        });
    }, 3000);
  }

  function Logout() {
    
    $rootScope.showSpinner = true;

    $rootScope.resetUser();
  
  }
}

angular.module("inciso").factory("loginServices", loginServices);
