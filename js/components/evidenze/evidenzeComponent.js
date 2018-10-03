/**
 * evidenzeComponent - component
 * Componente di esempio usato per costruire facilmente altri componenti 
 *
 */

// per testare componente inserire :
// <evidenze-component></evidenze-component>


function evidenzeComponent() {
  return {
    templateUrl: "/js/components/evidenze/evidenzeComponent.html",
    bindings: {
      name: "@"
    },
    controller: evidenzeController
  };
}

/**
 * Collega il componente al modulo inciso
 **/

angular.module("inciso").component("evidenzeComponent", evidenzeComponent());
