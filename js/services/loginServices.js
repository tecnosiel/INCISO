function loginServices($http, $rootScope, $timeout) {
  var service = {};
  var config = {
    headers: {
      'Content-Type': 'application/json;'
    }
  }


  service.login = Login;
  service.logout = Logout;


  var x = this;
  var xx = EGovJSBase;
  var xxx = EGovJSUI;
  var xxxx = EgovauthModule;

  var userwidget = new EGovJSUI.EgovUserwidget(document.getElementById('js-userwidget'), {
    allowDelegationChange: true,
    environment: 'test',
    //environment: '', // for PROD
    httpLibrary: $http //for example
  });

  userwidget.render();


  // https://git.services.siag.it/siag/js-egov-authentication/blob/master/docs/index.md
  EGovJSBase.Authentication.configure({
    // the endpoint where to fetch the current user
    userUrl: '/api/v1/user/current',

    // the ajax library to be used, i.e. $http for Angular 1.x or $.ajax when
    // used with jQuery.ajax
    httpLibrary: $http,

    // OPTIONAL: defaults to 'prod' (when left away)
    // Either: 'dev', 'test', 'demo' o 'prod
    environment: 'dev',

    // OPTIONAL: defaults to https
    isHttps: true,

    // OPTIONAL: the options, see below for details
    options: theOptions
  });

  var theOptions = {
    // OPTIONAL: regex for specifying which endpoints should be ignored for inspecting session response headers
    //urlExclusionRegex ? : RegExp,

    // OPTIONAL: minutes to warn user before the session times out. Warning is done
    // by invoking the askConfirmation callback
    warnMinutesBeforeSessionExpiration: 3,

    // OPTIONAL: endpoint for polling
    //sessionChangePollUrl: '/....',

    callbacks: {
      askConfirmation: function () {

        alert("askConfirmation")
        /*
        return a Promise

        Resolve it when you want to
        confirm, reject it when you
        want to reject.
        Example: show popup to user
        */
      },
      sessionExpired: function () {
        alert("sessionExpired")
        /*
        return a Promise

        session has expired. Show it to the
        user. Resolve the promise if you
        wanna do a login, reject it
        if the user wants to stay (note, the next
        ajax request will force a relogin, except
        when anonymous auth is activated.
        */
      },
      sessionMinutesLeft: function (minutes) {

        alert("sessionMinutesLess")

        // display the minutes somewhere on the
        // UI
      },
      closeSessionExpiringDialogIfAny: function () {
        alert("closeSessionExpiringDialogIfAny")
        // close any modals you've visualized
      }
    }

  };



  return service;

  function Login(username, password, callback) {

    $rootScope.showSpinner = true;

    // 
    // var xxx = EGovJSBase.AuthenticationUrls.getLoginPageUrl('backUrl')
    // 

    $timeout(function () {
      $http
        .post($rootScope.urlLogin + "/login", {
          username: username,
          password: password
        })
        .success(function (response) {
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