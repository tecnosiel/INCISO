/**
 * headerComponent - component
 * Componente di esempio usato per costruire facilmente altri componenti
 *
 */

// per testare componente inserire :
// <header-component></header-component>

function headerComponent() {
  return {
    templateUrl: "/js/components/header/headerComponent.html",
    bindings: {
      tipo: "<",
      titolo: "<",
      paths: "<",
      active: "@"
    },
    controller: headerController
  };
}

/**
 * Collega il componente al modulo inciso
 **/

angular.module("inciso").component("headerComponent", headerComponent());
