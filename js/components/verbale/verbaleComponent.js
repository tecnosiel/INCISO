/**
 * verbaleComponent - component
 * Componente di esempio usato per costruire facilmente altri componenti
 *
 */

// per testare componente inserire :
// <verbale-component></verbale-component>

// https://stackoverflow.com/questions/37440727/angularjs-1-5-how-can-a-parent-controller-pass-data-to-a-component-controller
function verbaleComponent() {
  return {
    templateUrl: "/js/components/verbale/verbaleComponent.html",
    bindings: {
      verbale: "=",
      name: "@",
      value: "=",
    },
    controller: verbaleController
  };
}

/**
 * Collega il componente al modulo inciso
 **/

angular.module("inciso").component("verbaleComponent", verbaleComponent());
