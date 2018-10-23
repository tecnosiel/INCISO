/**
 * INCISO - Gestione invalidi civili, ciechi civili e sordi
 *
 * INCISO usa AngularUI Router per gestione routing e views
 * Ciascuna view viene stata definita come stato.
 *
 */

(function() {
  function config(
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
          runMode: function() {
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
          visShowPulsanti:null
        },
        resolve: {
          runMode: function() {
            return "VISUALIZZA";
          }
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
          runMode: function() {
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
          visShowPulsanti:null
        },
        resolve: {
          runMode: function() {
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
          runMode: function() {
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
          runMode: function() {
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
        data: { pageTitle: "Nuova Domanda" },
        resolve: {
          loadPlugin: function($ocLazyLoad) {
            // da verificare
            return $ocLazyLoad.load([
              {
                files: [
                  "/css/plugins/iCheck/custom.css",
                  "/js/plugins/iCheck/icheck.min.js"
                ]
              }
            ]);
          }
        }
      })

      .state("domande.visualizza_domanda", {
        url: "/visualizza_domanda",
        templateUrl: "/views/visualizza_domanda.html",
        controller: "visualizzaDomandaCtrl",
        data: { pageTitle: "Visualizza Domanda" },
        params: {
          datiAssistito: null,
          domanda: null
        },
        resolve: {
          loadPlugin: function($ocLazyLoad) {
            // da verificare
            return $ocLazyLoad.load([
              {
                files: [
                  "/css/plugins/iCheck/custom.css",
                  "/js/plugins/iCheck/icheck.min.js"
                ]
              }
            ]);
          }
        }
      })
      .state("domande.domanda", {
        url: "/domanda",
        templateUrl: "/views/domanda.html",
        controller: "domandaCtrl",
        data: { pageTitle: "Domanda" }
      })
      // evidenze --------------------------------------------------------------
      .state("evidenze", {
        abstract: true,
        url: "/evidenze",
        templateUrl: "/views/common/content.html"
      })
      .state("evidenze.ricerca_evidenza", {
        url: "/ricerca_evidenza",
        templateUrl: "/views/ricerca_evidenza.html"
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
        resolve: {
          runMode: function() {
            return "VISUALIZZA";
          }
        }
      })
      .state("associazioni.inserimento_associazione", {
        url: "/inserimento_associazione",
        templateUrl: "/views/visualizza_associazione.html",
        controller: "visualizzaAssociazioneCtrl",
        resolve: {
          runMode: function() {
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
      .state("liquidazioni.visualizza_posizione", {
        url: "/visualizza_posizione",
        templateUrl: "/views/visualizza_posizione.html"
      })
      .state("liquidazioni.visualizza_domanda", {
        url: "/visualizza_domanda",
        templateUrl: "/views/visualizza_domanda.html"
      })

      .state("liquidazione.elabora_liquidazione_mensile", {
        url: "/elabora_liquidazione_mensile",
        templateUrl: "/views/elabora_liquidazione_mensile.html"
      })
      .state("liquidazione.elabora_conguaglio", {
        url: "/elabora_conguaglio",
        templateUrl: "/views/elabora_conguaglio.html"
      })
      .state("liquidazione.elabora_liquidazione_eredi", {
        url: "/elabora_liquidazione_eredi",
        templateUrl: "/views/elabora_liquidazione_eredi.html"
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
        data: { pageTitle: "Contacts" }
      })
      .state("app.contacts_2", {
        url: "/contacts_2",
        templateUrl: "/views/contacts_2.html",
        data: { pageTitle: "Contacts 2" }
      })
      .state("app.profile", {
        url: "/profile",
        templateUrl: "/views/profile.html",
        data: { pageTitle: "Profile" }
      })
      .state("app.profile_2", {
        url: "/profile_2",
        templateUrl: "/views/profile_2.html",
        data: { pageTitle: "Profile_2" },
        resolve: {
          loadPlugin: function($ocLazyLoad) {
            return $ocLazyLoad.load([
              {
                files: ["/js/plugins/sparkline/jquery.sparkline.min.js"]
              }
            ]);
          }
        }
      })

      .state("logins", {
        url: "/logins",
        templateUrl: "/views/login.html",
        data: { pageTitle: "Login", specialClass: "gray-bg" }
      })
      .state("login_two_columns", {
        url: "/login_two_columns",
        templateUrl: "/views/login_two_columns.html",
        data: { pageTitle: "Login two columns", specialClass: "gray-bg" }
      })
      .state("lockscreen", {
        url: "/lockscreen",
        templateUrl: "/views/lockscreen.html",
        data: { pageTitle: "Lockscreen", specialClass: "gray-bg" }
      });
  }
  angular
    .module("inciso")
    .config(config)
    .run(function($rootScope, $state) {
      $rootScope.$state = $state;
    });
})();
