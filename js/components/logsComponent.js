/**
 * LogsComponent - component
 * Componente di usato per la visualizzazione dei Logs
 *
 */

function logsComponent() {
  return {
    templateUrl: "/js/components/logsComponent.html",
    // bindings: {
    //   name: "@"
    // },
    controller: logsController
  };
}

/**
 * logsController - controller
 * Controller del componente
 *
 */

function logsController(
  httpServices,
  DTOptionsBuilder,
  DTColumnDefBuilder,
  logsServices
) {
  // legge i logs
  this.elencoLogs = logsServices.logs.find("mockUrl");
  this.dtOptionsTabLogs = DTOptionsBuilder.newOptions()
    .withOption("pageLength", 5)
    .withOption("lengthChange", false);

  this.colonneTabLogs = [
    // DTColumnDefBuilder.newColumnDef(3).notSortable()
  ];

  this.count = 0
  this.reloadLogs = function() {
    this.count++;
    let xxx = {
      DataOra: "11/06/2018 11:02:47",
      NomeUtente: "MTEST - " + this.count,
      Nome: "TEST - " + this.count,
      Cognome: "TEST - " + this.count,
      Accesso: "TEST - " + this.count,
      Entita: "TEST TEST - " + this.count,
      IdEntita: "TEST - " + this.count,
      TipoOperazione: "Modifica Dati TEST - " + this.count,
      UtenteDB: "INCISO_USR"
    };
    this.elencoLogs.unshift(xxx);
  };
}

/**
 * Collega il componente al modulo inciso
 **/

angular.module("inciso").component("logsComponent", logsComponent());
