funzione1 = function() {
  swal({
    type: "error",
    title: "Oops...",
    text: "Funzionalità non implementata!",
    footer: "<a href>La implementeremo a breve...</a>"
  });
};
faiQualcosa = function(){
}
funzionalitaNonImplementata = function() {
  swal({
    type: "error",
    title: "Oops...",
    text: "Funzionalità non implementata!",
    footer: "<a href>La implementeremo a breve...</a>"
  });
};

// -----------------------------------------------------

function logServices($http) {
  return {
    funzione1: funzione1,
    faiQualcosa: faiQualcosa,
    funzionalitaNonImplementata: funzionalitaNonImplementata
  };
}

/**
 *
 * Collega tutte le funzioni al modulo
 */
angular.module("inciso").factory("logServices", logServices);
