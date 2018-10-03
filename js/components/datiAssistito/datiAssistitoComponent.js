/**
 * datiAssistitoComponent - component
 * Componente per la gestione dei dati dell'assistito 
 *
 */

// per testare componente inserire :
// <dati-assistito-component></dati-assistito-component>


function datiAssistitoComponent() {
  return {
    templateUrl: "/js/components/datiAssistito/datiAssistitoComponent.html",
    bindings: {
      datiAssistito: "=",
    },
    controller: datiAssistitoController
  };
}

/**
 * Collega il componente al modulo inciso
 **/

angular.module("inciso").component("datiAssistitoComponent", datiAssistitoComponent());
