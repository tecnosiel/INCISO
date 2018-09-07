/**
 * INSPINIA - Responsive Admin Theme
 *
 */
function config($translateProvider) {
  $translateProvider
    .translations("it", {
      // Label Ricerca Anagrafica
      CODICE_FISCALE: "Codice fiscale",
      COGNOME: "Cognome",
      NOME: "Nome",
      DATA_DI_NASCITA: "Data di nascita",
      DATA_DECESSO: "Data decesso",
      NUMERO_FALDONE_ARCHIVIAZIONE: "Numero faldone archiviazione",
      ANNO_DI_SCARTO: "Anno di scarto",

      // Label elementi menu
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
      WELCOME: "Benvenuto Camillo",
      MESSAGEINFO: "hai 42 messaggi e 6 notifiche.",
      SEARCH: "Ricerca qualcosa...",
      DEMO:
        "Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-"
    })
    .translations("de", {
      // Label Ricerca Anagrafica
      CODICE_FISCALE: "Codice fiscale DE",
      COGNOME: "Cognome DE",
      NOME: "Nome DE",
      DATA_DI_NASCITA: "Data di nascita DE",
      DATA_DECESSO: "Data decesso DE",
      NUMERO_FALDONE_ARCHIVIAZIONE: "Numero faldone archiviazione DE",
      ANNO_DI_SCARTO: "Anno di scarto DE",

      // Label elementi menu
      NUOVA_DOMANDA: "Nuova Domanda DE",
      // -------
      POSIZIONE: "Posizione DE",
      // -------
      RICERCA_POSIZIONE: "Ricerca Posizione DE",
      ANAGRAFICA: "Anagrafica DE",
      RICERCA_ANAGRAFICA: "Ricerca anagrafica DE",
      NUOVA_ANAGRAFICA: "Nuova anagrafica DE",
      // -------
      LIQUIDAZIONE: "Liquidazione DE",
      RICERCA_LIQUIDAZIONE: "Ricerca liquidazione DE",
      ELABORA_LIQUIDAZIONE_MENSILE: "Elabora liquidazione mensile DE",
      ELABORA_CONGUAGLIO: "Elabora conguaglio DE",
      ELABORA_LIQUIDAZIONE_EREDI: "Elabora liquidazione eredi DE",
      // -------
      EVIDENZE: "Evidenze DE",
      RICERCA_EVIDENZA: "Ricerca evidenza DE",
      NUOVA_EVIDENZA: "Nuova evidenza DE",
      // -------
      DOCUMENTI: "Documenti DE",
      RICERCA_DOCUMENTI: "Ricerca documenti DE",
      // -------
      GENERA_COMUNICAZIONE: "Genera comunicazione es",
      // -------
      ASSOCIAZIONI: "Associazioni es",
      RICERCA_ASSOCIAZIONE: "Ricerca associazione DE",
      NUOVA_ASSOCIAZIONE: "Nuova associazione DE",
      // -------

      // Define some custom text
      WELCOME: "Benvenuto Camillo DE",
      MESSAGEINFO: "hai 42 messaggi e 6 notifiche DE.",
      SEARCH: "Ricerca qualcosa... DE",
      DEMO:
        "Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-"
    });

  $translateProvider.preferredLanguage("en");
}

angular.module("inspinia").config(config);
