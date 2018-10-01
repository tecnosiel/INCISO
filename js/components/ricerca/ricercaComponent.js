/**
 * ricercaComponent - component
 * Componente usato per la ricerca anagrafica   
 *
 */

// per testare componente inserire :
// <ricerca-component></ricerca-component>


function ricercaComponent() {
  return {
    templateUrl: "/js/components/ricerca/ricercaComponent.html",
    bindings: {
      datiAssistito:"=",
      onSave: '&'
    },
    controller: ricercaController
  };
}

/**
 * Collega il componente al modulo inciso
 **/

angular.module("inciso").component("ricercaComponent", ricercaComponent());
