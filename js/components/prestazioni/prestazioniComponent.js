/**
 * prestazioniComponent - component
 * Componente di esempio usato per costruire facilmente altri componenti 
 *
 */

// per testare componente inserire :
// <prestazioni-component></prestazioni-component>


function prestazioniComponent() {
  return {
    templateUrl: "/js/components/prestazioni/prestazioniComponent.html",
    bindings: {
      name: "@",
      index: "@",
      prestazione: "<"
    },
    controller: prestazioniController
  };
}

/**
 * Collega il componente al modulo inciso
 **/

angular.module("inciso").component("prestazioniComponent", prestazioniComponent());
