/**
 * baseComponent - component
 * Componente di esempio usato per costruire facilmente altri componenti 
 *
 */


function baseComponent() {
  return {
    templateUrl: "/js/components/baseComponent.html",
    bindings: {
      name: "@"
    },
    controller: function() {
      alert("here");
    }
  };
}

/**
 * Collega il componente al modulo inciso
 **/

angular.module("inciso").component("baseComponent", baseComponent());
