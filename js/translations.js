/**
 * INNCISO - Comune Bolzano
 *
 */
function config($translateProvider) {
  $translateProvider
    .translations("it", {
      // Label Generali
      SALVA: "Salva",
      CHIUDI: "Chiudi",
      HOME: "Home",
      CERCA: "Cerca",
      SBLOCCA_CAMPI: "Sblocca Campi",
      BLOCCA_CAMPI: "Blocca Campi",
      INIZIO_VALIDITA: "Inizio validità",
      FINE_VALIDITA: "Fine validità",
      ANNO: "Anno",

      // Label Top Nav Bar
      CAMBIA_LINGUA: "Cambia lingua",
      ITALIANO: "Italiano",
      TEDESCO: "Tedesco",
      LOG_OUT: "Esci",
      VEDI_TUTTI_GLI_AVVISI: "Vedi tutti gli avvisi",
      LEGGI_TUTTI_I_MESSAGGI: "Leggi tutti i messaggi",

      // Label Domanda
      NUOVA_DOMANDA: "Nuova domanda",
      RICERCA_ASSISTITO: "Ricerca assistito",
      TIPOLOGIA_DI_ASSISTENZA_RICHIESTA: "Tipologia di assistenza richiesta",
      CERCA_ASSISTITO: "Cerca assistito",
      ORDINAMENTO: "Ordinamento",
      ORDINA_PER: "Ordina per",
      RISULTATI_DELLA_RICERCA: "Risultati della ricerca",
      INCLUDI_DECEDUTI: "Includi deceduti",
      INSERISCI_DOMANDA: "Inserisci domanda",
      VISUALIZZA_DOMANDA: "Visualizza domanda",
      MODIFICA_DOMANDA: "Modifica domanda",
      INSERISCI_ASSISTITO: "Inserisci assistito",
      AGGIUNGI_ISCRIZIONE: "Aggiungi iscrizione",
      RICERCA_ASSISTITO: "Ricerca assistito",

      // Label Redditi
      GESTIONE_REDDITI: "Gestione Redditi Lavori in Corso",
      VALIDO_PER_ANNI_SUCCESSIVI: "Valido per anni successivi",
      REDDITI_PERCEPITI_ASSISTITO: "Redditi percepiti dall'assistito",
      REDDITI_PERCEPITI_CONIUGE: "Redditi percepiti dal coniuge",

      REDDITO_ASSISTITO: "Reddito assistito",
      REDDITO_CONIUGE: "Reddito coniuge",
      VALIDO_PER_GLI_ANNI_SUCCESSIVI: "Valido per gli anni successivi",

      TIPOLOGIA_DI_REDDITO: "Tipologia di reddito",
      VALORE_REDDITO: "Valore reddito",

      NESSUN_REDDITO_PERCEPITO: "Nessun reddito percepito",
      TOTALE: "Totale",

      // Label Indirizzi
      TIPO_INDIRIZZO: "Tipo indirizzo",
      ATTUALE: "Attuale",
      ATTIVO: "Attivo",
      INDIRIZZO_CODIFICATO: "Indirizzo codificato",
      INDIRIZZO_NON_CODIFICATO: "Indirizzo non codificato",
      NAZIONE: "Nazione",
      COMUNE: "Comune",
      CAP: "C.A.P.",
      FRAZIONE: "Frazione",
      VIA: "Via",
      LOCALITA: "Località",
      MASO: "Maso",
      INDIRIZZO_COMPLETO: "Indirizzo completo",
      N_CIVICO: "N.Civico",
      USA_INDIRIZZO: "Usa indirizzo",

      // Label Anagrafiche
      CODICE_FISCALE: "Codice fiscale",
      COGNOME: "Cognome",
      NOME: "Nome",
      DATA_DI_NASCITA: "Data di nascita",
      DATA_DECESSO: "Data decesso",
      DATA_DI_DECESSO: "Data decesso",
      NUMERO_FALDONE_ARCHIVIAZIONE: "Numero faldone archiviazione",
      ANNO_DI_SCARTO: "Anno di scarto",
      RICERCA_DATI_ANAGRAFICI: "Ricerca dati anagrafici",
      INSERISCI_NUOVA_ANAGRAFICA: "Inserisci nuova anagrafica",
      CREA_NUOVO_INDIRIZZO: "Crea nuovo indirizzo",
      INSERISCI_REDDITO: "Inserisci reddito",
      DATI_GENERALI: "DATI GENERALI",
      DATI_DI_NASCITA: "DATI DI NASCITA",
      ALTRI_DATI: "ALTRI DATI",
      ELENCO_INDIRIZZI: "ELENCO INDIRIZZI",
      ELENCO_POSIZIONI: "ELENCO POSIZIONI",
      PENSIONI: "PENSIONI",
      DECESSO: "DECESSO",
      ELENCO_REDDITI: "ELENCO REDDITI",
      ELENCO_ISCRIZIONI_ALLE_ASSOCIAZIONI_DI_CATEGORIA:
        "ELENCO ISCRIZIONI ALLE ASSOCIAZIONI DI CATEGORIA",
      POSIZIONI_CONTABILI: "POSIZIONI CONTABILI",
      ELENCO_EVIDENZE: "ELENCO EVIDENZE",
      POSIZIONE_ESPRO: "POSIZIONE ESPRO",
      INSERIMENTO_DATI_ANAGRAFICI: "Inserimento dati anagrafici",

      VISUALIZZA_DATI_ANAGRAFICI: "Visualizza dati anagrafici",

      GESTIONE_INDIRIZZI: "Gestione Indirizzi",

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
      PROCEDURE: "Procedure",
      PROCEDURA_CONTROLLO_6: "Procedura controllo 6%",
      PROCEDURA_INVIO_CASELLARIO: "Procedura invio casellario",
      PROCEDURA_DI_SCARTO: "Procedura di scarto (skartierung)",

      // -------
      // Define some custom text
      WELCOME: "Benvenuto Camillo",
      MESSAGEINFO: "hai 42 messaggi e 6 notifiche.",
      SEARCH: "Ricerca qualcosa...",
      DEMO:
        "Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-"
    })

    .translations("de", {
      SALVA: "Salva DE",
      CHIUDI: "Chiudi DE",
      HOME: "Home DE",
      // Label Generali
      CERCA: "Cerca DE",
      SBLOCCA_CAMPI: "Sblocca Campi DE",
      BLOCCA_CAMPI: "Blocca Campi DE",
      INIZIO_VALIDITA: "Inizio validità DE",
      FINE_VALIDITA: "Fine validità DE",
      ANNO: "Anno DE",

      // Label Top Nav Bar
      CAMBIA_LINGUA: "Cambia lingua DE",
      ITALIANO: "Italiano DE",
      TEDESCO: "Tedesco DE",
      LOG_OUT: "Esci DE",
      VEDI_TUTTI_GLI_AVVISI: "Vedi tutti gli avvisi DE",
      LEGGI_TUTTI_I_MESSAGGI: "Leggi tutti i messaggi DE",

      // Label Domanda
      NUOVA_DOMANDA: "Nuova domanda DE",
      RICERCA_ASSISTITO: "Ricerca assistito DE",
      TIPOLOGIA_DI_ASSISTENZA_RICHIESTA: "Tipologia di assistenza richiesta DE",
      CERCA_ASSISTITO: "Cerca assistito DE",
      ORDINAMENTO: "Ordinamento DE",
      ORDINA_PER: "Ordina per DE",
      RISULTATI_DELLA_RICERCA: "Risultati della ricerca DE",
      INCLUDI_DECEDUTI: "Includi deceduti DE",
      INSERISCI_DOMANDA: "Inserisci domanda DE",
      VISUALIZZA_DOMANDA: "Visualizza domanda DE",
      MODIFICA_DOMANDA: "Modifica domanda DE ",
    
      INSERISCI_ASSISTITO: "Inserisci assistito DE",
      AGGIUNGI_ISCRIZIONE: "Aggiungi iscrizione DE",
      RICERCA_ASSISTITO: "Ricerca assistito DE",


      // Label Redditi
      GESTIONE_REDDITI: "Gestione Redditi Lavori in Corso DE",
      VALIDO_PER_ANNI_SUCCESSIVI: "Valido per anni successivi DE",
      REDDITI_PERCEPITI_ASSISTITO: "Redditi percepiti dall'assistito DE",
      REDDITI_PERCEPITI_CONIUGE: "Redditi percepiti dal coniuge DE",

      REDDITO_ASSISTITO: "Reddito assistito DE",
      REDDITO_CONIUGE: "Reddito coniuge DE",
      VALIDO_PER_GLI_ANNI_SUCCESSIVI: "Valido per gli anni successivi DE",

      TIPOLOGIA_DI_REDDITO: "Tipologia di reddito DE",
      VALORE_REDDITO: "Valore reddito DE",

      NESSUN_REDDITO_PERCEPITO: "Nessun reddito percepito DE",
      TOTALE: "Totale DE",

      // Label Indirizzi
      TIPO_INDIRIZZO: "Tipo indirizzo DE",
      ATTUALE: "Attuale DE",
      ATTIVO: "Attivo DE",
      INDIRIZZO_CODIFICATO: "Indirizzo codificato DE",
      INDIRIZZO_NON_CODIFICATO: "Indirizzo non codificato DE",
      NAZIONE: "Nazione DE",
      COMUNE: "Comune DE",
      CAP: "C.A.P. DE",
      FRAZIONE: "Frazione DE",
      VIA: "Via DE",
      LOCALITA: "Località DE",
      MASO: "Maso DE",
      INDIRIZZO_COMPLETO: "Indirizzo completo DE",
      N_CIVICO: "N.Civico DE",
      USA_INDIRIZZO: "Usa indirizzo DE",

      // Label Anagrafiche
      CODICE_FISCALE: "Codice fiscale DE",
      COGNOME: "Cognome DE",
      NOME: "Nome DE",
      DATA_DI_NASCITA: "Data di nascita DE",
      DATA_DECESSO: "Data decesso DE",
      DATA_DI_DECESSO: "Data decesso DE",
      NUMERO_FALDONE_ARCHIVIAZIONE: "Numero faldone archiviazione DE",
      ANNO_DI_SCARTO: "Anno di scarto DE",
      RICERCA_DATI_ANAGRAFICI: "Ricerca dati anagrafici DE",
      INSERISCI_NUOVA_ANAGRAFICA: "Inserisci nuova anagrafica DE",
      CREA_NUOVO_INDIRIZZO: "Crea nuovo indirizzo DE",
      INSERISCI_REDDITO: "Inserisci reddito DE",
      DATI_GENERALI: "DATI GENERALI DE",
      DATI_DI_NASCITA: "DATI DI NASCITA DE",
      ALTRI_DATI: "ALTRI DATI DE",
      ELENCO_INDIRIZZI: "ELENCO INDIRIZZI DE",
      ELENCO_POSIZIONI: "ELENCO POSIZIONI DE",
      PENSIONI: "PENSIONI DE",
      DECESSO: "DECESSO DE",
      ELENCO_REDDITI: "ELENCO REDDITI DE",
      ELENCO_ISCRIZIONI_ALLE_ASSOCIAZIONI_DI_CATEGORIA:
        "ELENCO ISCRIZIONI ALLE ASSOCIAZIONI DI CATEGORIA DE",
      POSIZIONI_CONTABILI: "POSIZIONI CONTABILI DE",
      ELENCO_EVIDENZE: "ELENCO EVIDENZE DE",
      POSIZIONE_ESPRO: "POSIZIONE ESPRO DE",
      INSERIMENTO_DATI_ANAGRAFICI: "Inserimento dati anagrafici DE",

      VISUALIZZA_DATI_ANAGRAFICI: "Visualizza dati anagrafici DE",

      GESTIONE_INDIRIZZI: "Gestione Indirizzi DE",

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
      PROCEDURE: "Procedure DE",
      PROCEDURA_CONTROLLO_6: "Procedura controllo 6% DE",
      PROCEDURA_INVIO_CASELLARIO: "Procedura invio casellario DE",
      PROCEDURA_DI_SCARTO: "Procedura di scarto (skartierung) DE",

      // Define some custom text
      WELCOME: "Benvenuto Camillo DE",
      MESSAGEINFO: "hai 42 messaggi e 6 notifiche DE.",
      SEARCH: "Ricerca qualcosa... DE",
      DEMO:
        "Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-Tedesco-"
    });

  $translateProvider.preferredLanguage("en");
}

angular.module("inciso").config(config);
