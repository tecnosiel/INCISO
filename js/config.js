/**
 * INCISO - Gestione invalidi civili, ciechi civili e sordi
 *
 * INCISO usa AngularUI Router per gestione routing e views
 * Ciascuna view viene stata definita come stato.
 *
 */


// -------------------------------------------------------------------------
//  FUNZIONE DI CONFIGURAZIONE DEGLI STATI
// -------------------------------------------------------------------------

(function () {
  function configStates(
    $stateProvider,
    $urlRouterProvider,
    $ocLazyLoadProvider,
    IdleProvider,
    KeepaliveProvider,
    $locationProvider
  ) {
    // L'istruzione sottostante elimina # dall' Url ma mi sembra dia problemi su reload page
    // $locationProvider.html5Mode(true);

    // Configure Idle settings
    IdleProvider.idle(5); // in seconds
    IdleProvider.timeout(120); // in seconds

    // $urlRouterProvider.otherwise("/dashboards/dashboard_1");
    $urlRouterProvider.otherwise("home");

    $ocLazyLoadProvider.config({
      // Set to true if you want to see what and when is dynamically loaded
      debug: false
    });

    $stateProvider

      // login --------------------------------------------------------------

      .state("login", {
        url: "/login",
        controller: "loginCtrl",
        templateUrl: "/views/login.html",
        data: {
          pageTitle: "Login",
          specialClass: "gray-bg"
        }
      })

      // lockscreen --------------------------------------------------------------
      .state("lockscreen", {
        url: "/lockscreen",
        templateUrl: "/views/lockscreen.html",
        data: {
          pageTitle: "Lockscreen",
          specialClass: "gray-bg"
        }
      })

      // home --------------------------------------------------------------
      .state("home", {
        url: "/home",
        templateUrl: "/views/home"
      })

      // anagrafica --------------------------------------------------------------
      .state("anagrafica", {
        abstract: true,
        url: "/anagrafica",
        controller: "anagrafeCtrl",
        templateUrl: "/views/common/content.html"
      })

      .state("anagrafica.ricerca_anagrafica", {
        url: "/ricerca_anagrafica",
        templateUrl: "/views/ricerca_anagrafica.html"
      })

      .state("anagrafica.inserimento_anagrafica", {
        url: "/inserimento_anagrafica",
        templateUrl: "/views/visualizza_anagrafica.html",
        controller: "visualizzaAnagrafeCtrl",
        params: {
          datiAssistito: null
        },
        resolve: {
          runMode: function () {
            return "NUOVOINSERIMENTO";
          }
        }
      })

      .state("anagrafica.visualizza_anagrafica", {
        url: "/visualizza_anagrafica",
        templateUrl: "/views/visualizza_anagrafica.html",
        controller: "visualizzaAnagrafeCtrl",
        params: {
          datiAssistito: null,
          visShowPulsanti: null
        },
        resolve: {
          runMode: function () {
            return "VISUALIZZA";
          }
        }
      })

      .state("anagrafica.modifica_importo_riaccreditato", {
        url: "/modifica_importo_riaccreditato",
        templateUrl: "/views/modifica_importo_riaccreditato.html",
        controller: "modifica_importo_riaccreditatoCtrl",
        params: {
          datiAssistito: null
        }
      })
      .state("anagrafica.modifica_importo_da_recuperare", {
        url: "/modifica_importo_da_recuperare",
        templateUrl: "/views/modifica_importo_da_recuperare.html",
        controller: "modifica_importo_da_recuperareCtrl",
        params: {
          datiAssistito: null
        }
      })
      .state("anagrafica.modifica_importo_restituito", {
        url: "/modifica_importo_restituito",
        templateUrl: "/views/modifica_importo_restituito.html",
        controller: "modifica_importo_restituitoCtrl",
        params: {
          datiAssistito: null
        }
      })

      // posizione --------------------------------------------------------------
      .state("posizione", {
        abstract: true,
        url: "/posizione",
        templateUrl: "/views/common/content.html"
      })

      .state("posizione.ricerca_anagrafica", {
        url: "/ricerca_posizione",
        templateUrl: "/views/ricerca_posizione.html"
      })

      .state("posizione.inserimento_anagrafica", {
        url: "/inserimento_posizione",
        templateUrl: "/views/visualizza_anagrafica.html",
        controller: "visualizzaAnagrafeCtrl",
        resolve: {
          runMode: function () {
            return "NUOVOINSERIMENTO";
          }
        }
      })

      .state("posizione.visualizza_anagrafica", {
        url: "/visualizza_anagrafica_posizione",
        templateUrl: "/views/visualizza_anagrafica.html",
        controller: "visualizzaAnagrafeCtrl",
        params: {
          datiAssistito: null,
          visShowPulsanti: null
        },
        resolve: {
          runMode: function () {
            return "VISUALIZZA";
          }
        }
      })

      // -------------------------------
      .state("posizione.inserimento_posizione", {
        url: "/inserimento_posizione",
        templateUrl: "/views/visualizza_posizione.html",
        controller: "visualizzaPosizioneCtrl",
        resolve: {
          runMode: function () {
            return "NUOVOINSERIMENTO";
          }
        }
      })
      .state("posizione.visualizza_posizione", {
        url: "/visualizza_posizione",
        templateUrl: "/views/visualizza_posizione.html",
        controller: "visualizzaPosizioneCtrl",
        params: {
          datiAssistito: null
        },
        resolve: {
          runMode: function () {
            return "VISUALIZZA";
          }
        }
      })

      // domanda --------------------------------------------------------------
      .state("domande", {
        abstract: true,
        url: "/domande",
        controller: "domandeCtrl",
        templateUrl: "/views/common/content.html"
      })
      .state("domande.nuova_domanda", {
        url: "/nuova_domanda",
        templateUrl: "/views/nuova_domanda.html",
        data: {
          pageTitle: "Nuova domanda"
        },
        resolve: {
          loadPlugin: function ($ocLazyLoad) {
            // da verificare
            return $ocLazyLoad.load([{
              files: [
                "/css/plugins/iCheck/custom.css",
                "/js/plugins/iCheck/icheck.min.js"
              ]
            }]);
          }
        }
      })

      .state("domande.visualizza_domanda", {
        url: "/visualizza_domanda",
        templateUrl: "/views/visualizza_domanda.html",
        controller: "visualizzaDomandaCtrl",
        data: {
          pageTitle: "Visualizza Domanda"
        },
        params: {
          datiAssistito: null,
          domanda: null
        },
        resolve: {
          loadPlugin: function ($ocLazyLoad) {
            // da verificare
            return $ocLazyLoad.load([{
              files: [
                "/css/plugins/iCheck/custom.css",
                "/js/plugins/iCheck/icheck.min.js"
              ]
            }]);
          }
        }
      })
      .state("domande.domanda", {
        url: "/domanda",
        templateUrl: "/views/domanda.html",
        controller: "domandaCtrl",
        data: {
          pageTitle: "Domanda"
        }
      })
      // evidenze --------------------------------------------------------------
      .state("evidenze", {
        abstract: true,
        url: "/evidenze",
        templateUrl: "/views/common/content.html",
        controller: "evidenzeCtrl"
      })
      .state("evidenze.ricerca_evidenza", {
        url: "/ricerca_evidenza",
        templateUrl: "/views/ricerca_evidenza.html"
      })
      .state("evidenze.visualizza_evidenza", {
        url: "/visualizza_evidenza",
        templateUrl: "/views/visualizza_evidenza.html",
        controller: "visualizzaEvidenzaCtrl",
        params: {
          datiAssistito: null,
          evidenza: null
        },
        resolve: {
          runMode: function () {
            return "VISUALIZZA";
          }
        }
      })
      .state("evidenze.inserimento_evidenza", {
        url: "/inserimento_posizione",
        templateUrl: "/views/visualizza_evidenza.html",
        controller: "visualizzaEvidenzaCtrl",
        resolve: {
          runMode: function () {
            return "NUOVOINSERIMENTO";
          }
        }
      })
      .state("evidenze.nuova_evidenza", {
        url: "/nuova_evidenza",
        templateUrl: "/views/nuova_evidenza.html"
      })

      // documenti --------------------------------------------------------------
      .state("documenti", {
        abstract: true,
        url: "/documenti",
        templateUrl: "/views/common/content.html"
      })
      .state("documenti.ricerca_documenti", {
        url: "/ricerca_documenti",
        templateUrl: "/views/ricerca_documenti.html"
      })
      // genera comunicazione ----------------------------------------------------
      .state("comunicazione", {
        abstract: true,
        url: "/comunicazione",
        templateUrl: "/views/common/content.html"
      })
      .state("comunicazione.genera_comunicazione", {
        url: "/genera_comunicazione",
        templateUrl: "/views/genera_comunicazione.html"
      })
      // associazioni ------------------------------------------------------------
      .state("associazioni", {
        abstract: true,
        controller: "associazioniCtrl",
        url: "/associazioni",
        templateUrl: "/views/common/content.html"
      })
      .state("associazioni.ricerca_associazione", {
        url: "/ricerca_associazione",
        templateUrl: "/views/ricerca_associazione.html"
      })
      .state("associazioni.visualizza_associazione", {
        url: "/visualizza_associazione",
        templateUrl: "/views/visualizza_associazione.html",
        controller: "visualizzaAssociazioneCtrl",
        params: {
          datiAssistito: null
        },
        resolve: {
          runMode: function () {
            return "VISUALIZZA";
          }
        }
      })
      .state("associazioni.inserimento_associazione", {
        url: "/inserimento_associazione",
        templateUrl: "/views/visualizza_associazione.html",
        controller: "visualizzaAssociazioneCtrl",
        resolve: {
          runMode: function () {
            return "NUOVOINSERIMENTO";
          }
        }
      })

      // liquidazioni ------------------------------------------------------------
      .state("liquidazioni", {
        abstract: true,
        url: "/liquidazioni",
        controller: "liquidazioniCtrl",
        templateUrl: "/views/common/content.html"
      })

      .state("liquidazioni.ricerca_liquidazione", {
        url: "/ricerca_liquidazione",
        templateUrl: "/views/ricerca_liquidazione.html"
      })

      .state("liquidazioni.visualizza_liquidazione", {
        url: "/visualizza_liquidazione",
        templateUrl: "/views/visualizza_liquidazione.html"
      })
      .state("liquidazioni.elabora_conguaglio", {
        url: "/elabora_conguaglio",
        templateUrl: "/views/elabora_conguaglio.html"
      })
      .state("liquidazioni.elabora_liquidazione_eredi", {
        url: "/elabora_liquidazione_eredi",
        templateUrl: "/views/elabora_liquidazione_eredi.html"
      })

      .state("liquidazioni.elabora_liquidazione_mensile", {
        url: "/elabora_liquidazione_mensile",
        templateUrl: "/views/elabora_liquidazione_mensile.html"
      })

      // settings --------------------------------------------------------------
      .state("settings", {
        abstract: true,
        url: "/settings",
        templateUrl: "/views/common/content.html"
      })

      .state("settings.setting", {
        url: "/setting",
        templateUrl: "/views/setting.html"
      })

      // camillo --------------------------------------------------------------
      .state("app", {
        abstract: true,
        url: "/app",
        templateUrl: "/views/common/content.html"
      })
      .state("app.contacts", {
        url: "/contacts",
        templateUrl: "/views/contacts.html",
        data: {
          pageTitle: "Contacts"
        }
      })
      .state("app.contacts_2", {
        url: "/contacts_2",
        templateUrl: "/views/contacts_2.html",
        data: {
          pageTitle: "Contacts 2"
        }
      })
      .state("app.profile", {
        url: "/profile",
        templateUrl: "/views/profile.html",
        data: {
          pageTitle: "Profile"
        }
      })
      .state("app.profile_2", {
        url: "/profile_2",
        templateUrl: "/views/profile_2.html",
        data: {
          pageTitle: "Profile_2"
        },
        resolve: {
          loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
              files: ["/js/plugins/sparkline/jquery.sparkline.min.js"]
            }]);
          }
        }
      });
  }

  // -------------------------------------------------------------------------
  //  FUNZIONE DI CONFIGURAZIONE DEGLI INTERCETTORI
  // -------------------------------------------------------------------------
  // function configIntercetors($httpProvider, jwtOptionsProvider) {
  //   // Please note we're annotating the function so that the $injector works when the file is minified
  //   jwtOptionsProvider.config({
  //     tokenGetter: [
  //       "logServices",
  //       function (logServices) {
  //         logServices.faiQualcosa();
  //         return sessionStorage.getItem("token");
  //       }
  //     ],
  //     whiteListedDomains: [
  //       "api.myapp.com",
  //       "api/authenticate",
  //       "localhost",
  //       "127.0.0.1"
  //     ]
  //   });

  //   $httpProvider.interceptors.push("jwtInterceptor");
  // }

  // https://git.services.siag.it/siag/js-egov-authentication/blob/master/docs/index.md

  angular
    .module("inciso")
    .factory('httpInterceptor', function ($q) {
      return {
        response: function (response) {

          if (EGovJSBase.Authentication.authSession) {
            EGovJSBase.Authentication.authSession.handleAjaxResponse({
                status: response.status,
                getResponseHeader: function (headerName) {
                  return response.headers(headerName);
                }
              },
              response.config.url
            );
          }


          return response;
        },
        responseError: function (response) {

          if (EGovJSBase.Authentication.authSession) {
            EGovJSBase.Authentication.authSession.handleAjaxResponse({
                status: response.status,
                getResponseHeader: function (headerName) {
                  return response.headers(headerName);
                }
              },
              response.config.url
            );
          }

          return $q.reject(response);
        }
      }
    })
    .config(function ($httpProvider) {
      $httpProvider.interceptors.push('httpInterceptor');
    })
    .config(configStates)
    // .config(configIntercetors)
    .run(setupFakeBackend)
    .run(function ($rootScope, $state) {
      $rootScope.$state = $state;
    });

})();