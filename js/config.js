/**
 * INCISO - Gestione invalidi civili, ciechi civili e sordi
 *
 * INCISO usa AngularUI Router per gestione routing e views
 * Ciascuna view viene stata definita come stato.
 *
 */
function config(
  $stateProvider,
  $urlRouterProvider,
  $ocLazyLoadProvider,
  IdleProvider,
  KeepaliveProvider,
  $locationProvider
) {
  // Elimina # da Url ma da problemi su reload page
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
      templateUrl: "views/home"
    })
    // domanda --------------------------------------------------------------
    .state("XXXdomande", {
      abstract: true,
      url: "/domande",
      templateUrl: "views/common/content.html"
    })
    .state("XXXdomande.nuova_domanda", {
      url: "/nuova_domanda",
      templateUrl: "views/nuova_domanda.html",
      data: { pageTitle: "Nuova Domanda" },

      resolve: {
        loadPlugin: function($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: [
                "css/plugins/iCheck/custom.css",
                "js/plugins/iCheck/icheck.min.js"
              ]
            }
          ]);
        }
      }
    })
    .state("XXXdomande.domanda", {
      url: "/domanda",
      templateUrl: "views/domanda.html",
      data: { pageTitle: "Domanda" }
    })
    // posizione --------------------------------------------------------------
    .state("XXXposizione", {
      abstract: true,
      url: "/posizione",
      templateUrl: "views/common/content.html"
    })
    .state("XXXposizione.ricerca_posizione", {
      url: "/ricerca_posizione",
      templateUrl: "views/ricerca_posizione.html"
    })

    // anagrafica --------------------------------------------------------------
    .state("anagrafica", {
      abstract: true,
      url: "/anagrafica",
      templateUrl: "views/common/content.html"
    })
    .state("anagrafica.ricerca_anagrafica", {
      url: "/ricerca_anagrafica",
      templateUrl: "views/ricerca_anagrafica.html"
    })
    .state("anagrafica.inserimento_anagrafica", {
      url: "/inserimento_anagrafica",
      templateUrl: "views/inserimento_anagrafica.html"
    })
    .state("anagrafica.visualizza_anagrafica", {
      url: "/visualizza_anagrafica",
      templateUrl: "views/visualizza_anagrafica.html"
    })
    // liquidazione ------------------------------------------------------------
    .state("XXXliquidazione", {
      abstract: true,
      url: "/liquidazione",
      templateUrl: "views/common/content.html"
    })
    .state("XXXliquidazione.ricerca_liquidazione", {
      url: "/ricerca_liquidazione",
      templateUrl: "views/ricerca_liquidazione.html"
    })
    .state("XXXliquidazione.elabora_liquidazione_mensile", {
      url: "/elabora_liquidazione_mensile",
      templateUrl: "views/elabora_liquidazione_mensile.html"
    })
    .state("XXXliquidazione.elabora_conguaglio", {
      url: "/elabora_conguaglio",
      templateUrl: "views/elabora_conguaglio.html"
    })
    .state("XXXliquidazione.elabora_liquidazione_eredi", {
      url: "/elabora_liquidazione_eredi",
      templateUrl: "views/elabora_liquidazione_eredi.html"
    })
    // evidenze --------------------------------------------------------------
    .state("XXXevidenze", {
      abstract: true,
      url: "/evidenze",
      templateUrl: "views/common/content.html"
    })
    .state("XXXevidenze.ricerca_evidenza", {
      url: "/ricerca_evidenza",
      templateUrl: "views/ricerca_evidenza.html"
    })
    .state("XXXevidenze.nuova_evidenza", {
      url: "/nuova_evidenza",
      templateUrl: "views/nuova_evidenza.html"
    })

    // documenti --------------------------------------------------------------
    .state("XXXdocumenti", {
      abstract: true,
      url: "/documenti",
      templateUrl: "views/common/content.html"
    })
    .state("XXXdocumenti.ricerca_documenti", {
      url: "/ricerca_documenti",
      templateUrl: "views/ricerca_documenti.html"
    })
    // genera comunicazione ----------------------------------------------------
    .state("XXXcomunicazione", {
      abstract: true,
      url: "/comunicazione",
      templateUrl: "views/common/content.html"
    })
    .state("XXXcomunicazione.genera_comunicazione", {
      url: "/genera_comunicazione",
      templateUrl: "views/genera_comunicazione.html"
    })
    // associazioni ------------------------------------------------------------
    .state("XXXassociazioni", {
      abstract: true,
      url: "/associazioni",
      templateUrl: "views/common/content.html"
    })
    .state("XXXassociazioni.ricerca_associazione", {
      url: "/ricerca_associazione",
      templateUrl: "views/ricerca_associazione.html"
    })
    .state("XXXassociazioni.visualizza_associazione", {
      url: "/visualizza_associazione",
      templateUrl: "views/visualizza_associazione.html"
    })
    .state("XXXassociazioni.nuova_associazione", {
      url: "/nuova_associazione",
      templateUrl: "views/nuova_associazione.html"
    })
    // liquidazioni ------------------------------------------------------------
    .state("XXXliquidazioni", {
      abstract: true,
      url: "/liquidazioni",
      templateUrl: "views/common/content.html"
    })
    .state("XXXliquidazioni.visualizza_liquidazione", {
      url: "/visualizza_liquidazione",
      templateUrl: "views/visualizza_liquidazione.html"
    })
    .state("XXXliquidazioni.visualizza_posizione", {
      url: "/visualizza_posizione",
      templateUrl: "views/visualizza_posizione.html"
    })
    .state("XXXliquidazioni.visualizza_domanda", {
      url: "/visualizza_domanda",
      templateUrl: "views/visualizza_domanda.html"
    })
    // camillo --------------------------------------------------------------
    .state("app", {
      abstract: true,
      url: "/app",
      templateUrl: "views/common/content.html"
    })
    .state("app.contacts", {
      url: "/contacts",
      templateUrl: "views/contacts.html",
      data: { pageTitle: "Contacts" }
    })
    .state("app.contacts_2", {
      url: "/contacts_2",
      templateUrl: "views/contacts_2.html",
      data: { pageTitle: "Contacts 2" }
    })
    .state("app.profile", {
      url: "/profile",
      templateUrl: "views/profile.html",
      data: { pageTitle: "Profile" }
    })
    .state("app.profile_2", {
      url: "/profile_2",
      templateUrl: "views/profile_2.html",
      data: { pageTitle: "Profile_2" },
      resolve: {
        loadPlugin: function($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ["js/plugins/sparkline/jquery.sparkline.min.js"]
            }
          ]);
        }
      }
    })

    .state("logins", {
      url: "/logins",
      templateUrl: "views/login.html",
      data: { pageTitle: "Login", specialClass: "gray-bg" }
    })
    .state("login_two_columns", {
      url: "/login_two_columns",
      templateUrl: "views/login_two_columns.html",
      data: { pageTitle: "Login two columns", specialClass: "gray-bg" }
    })
    .state("lockscreen", {
      url: "/lockscreen",
      templateUrl: "views/lockscreen.html",
      data: { pageTitle: "Lockscreen", specialClass: "gray-bg" }
    });
}
angular
  .module("inspinia")
  .config(config)
  .run(function($rootScope, $state) {
    $rootScope.$state = $state;
  });
