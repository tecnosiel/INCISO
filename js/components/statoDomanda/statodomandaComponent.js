/**
 * statoDomandaComponent - component
 * Componente di esempio usato per costruire facilmente altri componenti 
 *
 */

// per testare componente inserire :
// <statoDomanda-component></statoDomanda-component>


function statoDomandaComponent() {
  return {
    templateUrl: "/js/components/statodomanda/statodomandaComponent.html",
    bindings: {
      statoDomanda: "@"
    },
    controller: statoDomandaController
  };
}

/**
 * Collega il componente al modulo inciso
 **/

angular.module("inciso").component("statoDomandaComponent", statoDomandaComponent());
