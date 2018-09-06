/**
 * INSPINIA - Responsive Admin Theme
 *
 */
function config($translateProvider) {
  $translateProvider
    .translations("en", {
      // Define all menu elements
      NUOVA_DOMANDA: "Nuova Domanda",
      // -------
      POSIZIONE: "Posizione",
      RICERCA_POSIZIONE: "Ricerca Posizione",
      // -------
      ANAGRAFICA: "Anagrafica",
      RICERCA_ANAGRAFICA: "Ricerca anagrafica",
      NUOVA_ANAGRAFICA: "Nuova anagrafica",
      // -------
      LIQUIDAZIONE: "Liquidazione",
      RICERCA_LIQUIDAZIONE: "Ricerca liquidazione",
      ELABORA_LIQUIDAZIONE_MENSILE: "Elabora liquidazione mensile",
      ELABORA_CONGUAGLIO: "Elabora conguaglio",
      ELABORA_LIQUIDAZIONE_EREDI: "Elabora liquidazione eredi",
      // -------
      EVIDENZE: "Evidenze",
      RICERCA_EVIDENZA: "Ricerca evidenza",
      NUOVA_EVIDENZA: "Nuova evidenza",
      // -------
      DOCUMENTI: "Documenti",
      RICERCA_DOCUMENTI: "Ricerca documenti",
      // -------
      GENERA_COMUNICAZIONE: "Genera comunicazione",
      // -------
      ASSOCIAZIONI: "Associazioni",
      RICERCA_ASSOCIAZIONE: "Ricerca associazione",
      NUOVA_ASSOCIAZIONE: "Nuova associazione",
      // -------
      // Define some custom text
      WELCOME: "Welcome Amelia",
      MESSAGEINFO: "You have 42 messages and 6 notifications.",
      SEARCH: "Search for something...",
      DEMO: 'Internationalization (sometimes shortened to "I18N , meaning "I - eighteen letters -N") is the process of planning and implementing products and services so that they can easily be adapted to specific local languages and cultures, a process called localization . The internationalization process is sometimes called translation or localization enablement .'
    })
    .translations("es", {
      // Define all menu elements
      NUOVA_DOMANDA: "Nuova Domanda es",
      // -------
      POSIZIONE: "Posizione es",
      // -------
      RICERCA_POSIZIONE: "Ricerca Posizione es",
      ANAGRAFICA: "Anagrafica es",
      RICERCA_ANAGRAFICA: "Ricerca anagrafica es",
      NUOVA_ANAGRAFICA: "Nuova anagrafica es",
      // -------
      LIQUIDAZIONE: "Liquidazione es",
      RICERCA_LIQUIDAZIONE: "Ricerca liquidazione es",
      ELABORA_LIQUIDAZIONE_MENSILE: "Elabora liquidazione mensile es",
      ELABORA_CONGUAGLIO: "Elabora conguaglio es",
      ELABORA_LIQUIDAZIONE_EREDI: "Elabora liquidazione eredi es",
      // -------
      EVIDENZE: "Evidenze es",
      RICERCA_EVIDENZA: "Ricerca evidenza es",
      NUOVA_EVIDENZA: "Nuova evidenza es",
      // -------
      DOCUMENTI: "Documenti es",
      RICERCA_DOCUMENTI: "Ricerca documenti es",
      // -------
      GENERA_COMUNICAZIONE: "Genera comunicazione es",
      // -------
      ASSOCIAZIONI: "Associazioni es",
      RICERCA_ASSOCIAZIONE: "Ricerca associazione es",
      NUOVA_ASSOCIAZIONE: "Nuova associazione es",
      // -------
     
      // Define some custom text
      WELCOME: "Bienvenido Amelia",
      MESSAGEINFO: "Usted tiene 42 mensajes y 6 notificaciones.",
      SEARCH: "Busca algo ...",
      DEMO:
        'Internacionalización (a veces abreviado como "I18N, que significa" I - dieciocho letras N ") es el proceso de planificación e implementación de productos y servicios de manera que se pueden adaptar fácilmente a las lenguas y culturas locales específicas, un proceso llamado localización El proceso de internacionalización. a veces se llama la traducción o la habilitación de localización.'
    });

  $translateProvider.preferredLanguage("en");
}

angular.module("inspinia").config(config);
