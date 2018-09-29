/**
 * LogsComponent - component
 * Componente di usato per la visualizzazione dei Logs
 *
 */

function logsComponent() {
  return {
    templateUrl: "/js/components/logs/logsComponent.html",
    // bindings: {
    //   name: "@"
    // },
    controller: logsController
  };
}

/**
 * Collega il componente al modulo inciso
 **/

angular.module("inciso").component("logsComponent", logsComponent());
