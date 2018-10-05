/**
 * documentiComponent - component
 * Componente usato gestire l'elenco documenti 
 *
 */

// per testare componente inserire :
// <documenti-component></documenti-component>


function documentiComponent() {
  return {
    templateUrl: "/js/components/documenti/documentiComponent.html",
    bindings: {
      name: "@"
    },
    controller: documentiController
  };
}

/**
 * Collega il componente al modulo inciso
 **/

angular.module("inciso").component("documentiComponent", documentiComponent());
