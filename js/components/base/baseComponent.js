/**
 * baseComponent - component
 * Componente di esempio usato per costruire facilmente altri componenti 
 *
 */

// per testare componente inserire :
// <base-component></base-component>


function baseComponent() {
  return {
    templateUrl: "/js/components/base/baseComponent.html",
    bindings: {
      name: "@"
    },
    controller: baseController
  };
}

/**
 * Collega il componente al modulo inciso
 **/

angular.module("inciso").component("baseComponent", baseComponent());
