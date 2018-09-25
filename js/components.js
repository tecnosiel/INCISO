/**
 * INCISO - Gestione invalidi civili, ciechi civili e sordi
 *
 * Main components.js file
 * Define components for used plugin
 *
 *
 * Functions (directives)
 *  - helloWord
 *
 */

/**
 * sideNavigation - Directive for run metsiMenu on sidebar navigation
 */

function helloWord() {
  return {
    template: "Hello {{$ctrl.name}}!",
    bindings: { name: "@" }
  };
}

/**
 *
 * Collega tutte le funzioni al modulo principale
 */
// angular.module("inciso").component("helloWord", helloWord);
angular.module("inciso").component("helloWorld", helloWord());
