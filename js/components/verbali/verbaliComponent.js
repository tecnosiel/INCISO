/**
 * verbaliComponent - component
 * Componente usato per visualizzare l'elenco verbali
 *
 */

function verbaliComponent() {
  return {
    templateUrl: "/js/components/verbali/verbaliComponent.html",
    // bindings: {
    //   name: "@"
    // },
    controller: verbaliController
  };
}

/**
 * Collega il componente al modulo inciso
 **/

angular.module("inciso").component("verbaliComponent", verbaliComponent());
