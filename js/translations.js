/**
 * INNCISO - Comune Bolzano
 *
 */
function config($translateProvider) {
  $translateProvider
    .translations("it", {
      CODICE_FISCALE_TROPPO_CORTO: "Codice fiscale troppo corto",
      CODICE_FISCALE_TROPPO_LUNGO: "Codice fiscale troppo lungo",
      CAMPO_OBBLIGATORIO: "Campo obbligatorio",
      COGNOME_ACQUISITO: "Cognome acquisito",
      STATO_CIVILE: "Stato civile",
      MASCHILE: "Maschile",
      FEMMINILE: "Femminile",
      SESSO: "Sesso",
      LUOGO_DI_NASCITA: "Luogo di nascita",
      PROVINCIA: "Provincia",
      NAZIONE: "Nazione",

      // Label prestazioni
      SOGLIA: "Soglia",
      REDDITO: "Reddito",
      ESITO_REDDITO: "Esito",
      SOGLIA_INCREMENTO: "Soglia incremento",
      ESITO_SOGLIA: "Esito",
      IMPORTO_ANNUALE_DI_TUTTE_LE_PENSIONI:
        "Importo annuale di tutte le pensioni",
      IMPORTO_ANNUALE_DELL_ASSEGNO_INTEGRATIVO_CIECHI:
        "importo annuale dell'assegno integrativo ciechi",
      DATA: "Data",
      MOTIVO: "Motivo",
      FINE: "Fine",

      NUMERO_FASCICOLO: "Numero fascicolo",
      // Sospensione Revoca Negazione Domanda

      MOTIVO_SOSPENSIONE: "Motivo sospensione",

      SOSPENSIONE_DOMANDA: "Sospensione domanda",
      DATA_SOSPENSIONE: "Data sospensione",
      SELEZIONA_MOTIVO: "Seleziona motivo",
      DATA_SCADENZA_SOSPENSIONE: "Data scadenza sospensione",
      DATA_FINE_SOSPENSIONE: "Data fine sospensione",

      REVOCA_DOMANDA: "Revoca domanda",
      DATA_REVOCA: "Data revoca",
      MOTIVO_REVOCA: "Motivo revoca",
      DATA_FINE_REVOCA: "Data fine revoca",

      NEGAZIONE_DOMANDA: "Negazione domanda",
      DATA_NEGAZIONE: "Data negazione",
      MOTIVO_NEGAZIONE: "Motivo negazione",
      DATA_FINE_NEGAZIONE: "Data fine negazione",

      // Label Crea Anagrafica
      CODICE_FISCALE: "Codice Fiscale",
      CERCA_NEL_CONSORZIO: "Cerca nel Consorzio",
      CREA_NUOVA: "Crea nuova",
      ANNULLA: "Annulla",

      // Label Elenco Posizioni
      VISUALIZZA_POSIZIONE: "Visualizza posizione",
      RICERCA_POSIZIONE: "Ricerca posizione",

      // Label Elenco Verbali
      GESTIONE_VERBALI: "Gestione verbali",
      DATA_PROTOCOLLO: "Data protocollo",
      NRO_PROTOCOLLO: "N. protocollo",
      INVALIDITA: "% invalidità",
      INDENNITA_DI_ACCOMPAGNAMENTO: "Indennità di accompagnamento",
      PATOLOGIA_UDITIVA: "Patologia uditiva",
      RIDUZIONE_DEL_VISUS: "Riduzione del visus",
      NOTE: "Note",
      INSERISCI_NUOVO_VERBALE: "Inserisci nuovo verbale",

      // Label Logs
      DATA_ORA: "Data/Ora",
      NOME_UTENTE: "Nome utente",
      NOME: "Nome",
      COGNOME: "Cognome",
      ACCESSO: "Accesso",
      ID_ENTITA: "ID Entità",
      TIPO_OPERAZIONE: "Tipo operazione",
      UTENTE_DB: "Utente DB",

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

      // Label Liquidazioni
      NOMINATIVO_ASSISTITO: "Nominativo assistito",
      IMPORTO_PRESTAZIONI_LIQUIDATO: "Importo prestazioni liquidato",
      TREDICESIMA: "Tredicesima",
      IMPORTO_CONGUAGLIO: "Importo conquaglio",
      RITENUTE_DI_CATEGORIA: "Ritenute di categoria",
      RIACCREDITI: "Riaccrediti",
      RECUPERI_DA_COMPENSAZIONE: "Recuperi da compensazione",
      TOTALE_MENSILE_DA_LIQUIDARE: "Totale mensile da liquidare",

      // Label Associazioni
      RICERCA_ASSOCIAZIONE: "Ricerca associazione",

      VISUALIZZA_DATI_ANAGRAFICI_ASSOCIAZIONE:
        "Visualizza dati anagrafici associazione",
      INSERIMENTO_DATI_ANAGRAFICI_ASSOCIAZIONE:
        "Inserimento dati anagrafici associazione",

      NOME_ASSOCIAZIONE: "Nome associazione",
      TIPOLOGIA_DI_ASSISTENZA: "Tipologia di assistenza",
      INSERISCI_NUOVA_ASSOCIAZIONE: "Inserisci nuova associazione",

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

      INSERISCI_I_DATI_DELL_ASSISTITO_PER_VEDERE_SE_ESISTE_GIA_UNA_POSIZIONE_APERTA:
        "Inserisci i dati dell'assistito per vedere se esiste già una posizione aperta",
      COGNOME_DA_RICERCARE: "Cognome da ricercare",
      NOME_DA_RICERCARE: "Nome da ricercare",
      CODICE_FISCALE_DA_RICERCARE: "Codice fiscale da ricercare",
      DATA_NASCITA_DA_RICERCARE_FORMATO_DDMMYYY:
        "Data nascita da ricercare formato dd/MM/yyyy",
      CODICE_FISCALE_DUPLICATO_VERIFICARE_ANOMALIA:
        "Codice fiscale duplicato, verificare anomalia.",
      DECEDUTO_IL: "Deceduto il",
      NUMERO_FALDONE: "Numero faldone",
      ANNO_DI_SCARTO: "Anno di scarto",
      ANNO_DI_SCARTO_DA_RICERCARE: "Anno di scarto da ricercare",

      DATA_DI_NASCITA: "Data di nascita",
      POSIZIONE: "Posizione",
      FASCICOLO: "Fascicolo",
      STATO_DOMANDA: "Stato domanda",
      Concessa: "Concessa",
      Revocata: "Revocata",
      Negata: "Negata",
      NUMERO_FALDONE_ARCHIVIAZIONE_DA_RICERCARE:
        "Numero faldone archiviazione da ricercare",

      // Label Domanda Tabella Evidenze
      DECORRENZA: "Decorrenza",
      SCADENZA: "Scadenza",
      TIPO: "Tipo",
      DESCRIZIONE: "Descrizione",
      POSIZIONE: "Posizione",
      PRESTAZIONE: "Prestazione",
      CHIUSURA: "Chiusura",
      NOTE: "Note",

      // Label Redditi
      GESTIONE_REDDITI: "Gestione Redditi",
      VALIDO_PER_ANNI_SUCCESSIVI: "Valido per anni successivi",
      REDDITI_PERCEPITI_ASSISTITO: "Redditi percepiti dall'assistito",
      REDDITI_PERCEPITI_CONIUGE: "Redditi percepiti dal coniuge",
      ESTREMI_PENSIONE: "Estremi pensione",

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
      STORICO_OPERAZIONI: "STORICO OPERAZIONI",

      INSERISCI_NUOVA_POSIZIONE: "Inserisci nuova posizione",
      INSERISCI_NUOVA_ANAGRAFICA: "Inserisci nuova anagrafica",

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
      AMMINISTRAZIONE: "Amministrazione",
      CONFIGURAZIONE_REGOLE_VS_PRESTAZIONI:
        "Configurazione regole vs. prestazioni",

      // -------
      // Define some custom text
      WELCOME: "Benvenuto Camillo",
      MESSAGEINFO: "hai 42 messaggi e 6 notifiche.",
      SEARCH: "Ricerca qualcosa...",
      DEMO:
        "Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-Italiano-"
    })

    .translations("de", {
      CODICE_FISCALE_TROPPO_CORTO: "Codice fiscale troppo corto DE",
      CODICE_FISCALE_TROPPO_LUNGO: "Codice fiscale troppo lungo DE",
      CAMPO_OBBLIGATORIO: "Campo obbligatorio DE",
      COGNOME_ACQUISITO: "Cognome acquisito DE",
      STATO_CIVILE: "Stato civile DE",
      MASCHILE: "Maschile DE",
      FEMMINILE: "Femminile DE",
      SESSO: "Sesso DE",
      LUOGO_DI_NASCITA: "Luogo di nascita DE",
      PROVINCIA: "Provincia DE",
      NAZIONE: "Nazione DE",
      CITTADINANZA: "Cittadinanza DE",
      EXTRACOMUNITARIO: "Extracomunitario DE",
      TIPO_PERMESSO: "Tipo permesso DE",
      PERMESSO_DI_SOGGIORNO: "Permesso di soggiorno DE",

      SELEZIONA_UN_COMUNE: "Seleziona un comune DE",
      SELEZIONA_UNA_PROVINCIA: "Seleziona una provincia DE",
      SELEZIONA_UNA_NAZIONE: "Seleziona una nazione DE",
      SELEZIONA_CITTADINANZA: "Seleziona cittadinanza DE",
      SELEZIONA_UN_ELEMENTO_NELL_ELENCO: "Seleziona un elemento dall'elenco DE",
      SELEZIONA_UN_PERMESSO_DALL_ELENCO: "Seleziona un permesso dall'elenco DE",
      SI: "Si DE",
      NO: "No DE",
      DATA_RILASCIO: "Data rilascio DE",
      VALIDO_FINO_AL: "Valido fino al DE",
      RESIDENZA: "Residenza DE",
      DOMICILIO: "Domicilio DE",
      ALTRI_INDIRIZZI: "Altri indirizi DE",
      RIFERIMENTI_DI_CONTATTO: "Riferimenti di contatto DE",
      TELEFONO_PRNCIPALE: "Telefono principale DE",
      TELEFONO_SECONDARIO: "Telefono secondario DE",
      ANNO_DI_SCARTO_INCISO: "Anno di scarto IN-CI-SO DE",
      SIMULAZIONE_LIQUIDAZIONE_EREDI: "Simulazione liquidazione eredi DE",
      DATA_CALCOLO_SIMULAZIONE: "Data calcolo simulazione DE",
      IMPORTO_SPETTANTE: "Importo spettante DE",
      VISUALIZZA_DETTAGLIO_SIMULAZIONE: "Visualizza dettaglio simulazione DE",
      PERC_DI_EREDITA: "% di eredità DE",
      LIQUIDATO_IN_BASE_ALLA_PERC_DI_EREDITA:
        "Liquidato in base alla % di eredità DE",
      ELENCO_EREDI: "Elenco eredi DE",
      COGNOME_NOME: "Cognome Nome DE",
      LIQUIDAZIONE: "Liquidazione DE",
      VISUALIZZA_DETTAGLIO_IMPORTO_LIQUIDATO:
        "Visualizza dettaglio importo liquidato DE",
      AGGIUNGI_EREDE: "Aggiungi erede DE",

      ELENCO_LIQUIDAZIONI: "Elenco liquidazioni DE",
      ELENCO_IMPORTI_RIACCREDITATI: "Elenco importi riaccreditati DE",
      ELENCO_IMPORTI_DA_RECUPERARE: "Elenco importi da recuperare DE",

      ENTITA: "Entita",

      DECORRENZA_ASSEGNO_DI_CURA: "Decorrenza assegno di cura DE",
      TERMINE_DECORRENZA_ASSEGNO_DI_CURA:
        "Termine decorrenza assegno di cura DE",
      DECORRENZA_PERMANENZA_CASA_DI_LUNGODEGENZA:
        "Decorrenza permanenza casa di lungodegenza DE",
      TERMINE_PERMANENZA_CASA_DI_LUNGODEGENZA:
        "Termine permanenza casa di lungodegenza DE",

      ELENCO_RITENUTE_DI_CATEGORIA_RECUPERATE:
        "Elenco ritenute di categoria recuperate DE",

      NUM_POSIZIONE: "Num. posizione DE",
      DATA_DOMANDA: "Data domanda DE",
      TIPO_ASSOCIAZIONE: "Tipo associazione DE",
      INIZIO_ISCRIZIONE: "Inizio iscrizione DE",
      FINE_ISCRIZIONE: "Fine iscrizione DE",

      DATA_CALCOLO: "Data calcolo DE",
      LIQUIDATO: "Liquidato DE",
      RIACCREDITO: "Riaccredito DE",
      TRATTENUTA_DI_CATEGORIA: "Trattenuta di categoria DE",
      IMPORTO_RECUPERATO_PER_COMPENSAZIONE: "Importo recuperato per compensazione DE",
      NR_TRASFERIMENTO_FLUMO: "Nr. trasferimento Flumo DE",
      TOT_MESE: "Tot. mese DE",
      TOT_ANNO: "Tot. anno DE",
      DETTAGLIO:"Dettaglio DE",
      NR_MANDATO:"Nr. mandato DE",
      GENERA_COMUNICAZIONE : "genera comunicazione DE",
      INSERISCI_NUOVA_EVIDENZA : "inserisci nuova evidenza DE",


// hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh

      // Label prestazioni
      SOGLIA: "Soglia DE",
      REDDITO: "Reddito DE",
      ESITO_REDDITO: "Esito DE",
      SOGLIA_INCREMENTO: "Soglia incremento DE",
      ESITO_SOGLIA: "Esito DE",
      IMPORTO_ANNUALE_DI_TUTTE_LE_PENSIONI:
        "Importo annuale di tutte le pensioni DE",
      IMPORTO_ANNUALE_DELL_ASSEGNO_INTEGRATIVO_CIECHI:
        "importo annuale dell'assegno integrativo ciechi DE",
      DATA: "Data DE",
      MOTIVO: "Motivo DE",
      FINE: "Fine DE",

      NUMERO_FASCICOLO: "Numero fascicolo DE",

      // Sospensione Revoca Negazione Domanda

      MOTIVO_SOSPENSIONE: "Motivo sospensione DE",

      SOSPENSIONE_DOMANDA: "Sospensione domanda DE",
      DATA_SOSPENSIONE: "Data sospensione DE",
      SELEZIONA_MOTIVO: "Seleziona motivo DE",
      DATA_SCADENZA_SOSPENSIONE: "Data scadenza sospensione DE",
      DATA_FINE_SOSPENSIONE: "Data fine sospensione DE",

      REVOCA_DOMANDA: "Revoca domanda DE",
      DATA_REVOCA: "Data revoca DE",
      MOTIVO_REVOCA: "Motivo revoca DE",
      DATA_FINE_REVOCA: "Data fine revoca DE",

      NEGAZIONE_DOMANDA: "Negazione domanda DE",
      DATA_NEGAZIONE: "Data negazione DE",
      MOTIVO_NEGAZIONE: "Motivo negazione DE",
      DATA_FINE_NEGAZIONE: "Data fine negazione DE",

      // Label Crea Anagrafica
      CODICE_FISCALE: "Codice Fiscale DE",
      CERCA_NEL_CONSORZIO: "Cerca nel Consorzio DE",
      CREA_NUOVA: "Crea nuova DE",
      ANNULLA: "Annulla DE",

      // Label Elenco Posizioni
      VISUALIZZA_POSIZIONE: "Visualizza posizione DE",
      RICERCA_POSIZIONE: "Ricerca posizione DE",

      // Label Elenco Verbali
      GESTIONE_VERBALI: "Gestione verbali DE",
      DATA_PROTOCOLLO: "Data protocollo DE",
      NRO_PROTOCOLLO: "N. protocollo DE",
      INVALIDITA: "% invalidità DE",
      INDENNITA_DI_ACCOMPAGNAMENTO: "Indennità di accompagnamento DE",
      PATOLOGIA_UDITIVA: "Patologia uditiva DE",
      RIDUZIONE_DEL_VISUS: "Riduzione del visus DE",
      NOTE: "Note DE",
      INSERISCI_NUOVO_VERBALE: "Inserisci nuovo verbale DE",

      // Label Logs
      DATA_ORA: "Data/Ora DE",
      NOME_UTENTE: "Nome utente DE",
      NOME: "Nome DE",
      COGNOME: "Cognome DE",
      ACCESSO: "Accesso DE",
      ID_ENTITA: "ID Entità DE",
      TIPO_OPERAZIONE: "Tipo operazione DE",
      UTENTE_DB: "Utente DB DE",

      // Label Generali
      SALVA: "Salva DE",
      CHIUDI: "Chiudi DE",
      HOME: "Home DE",
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

      // Label Liquidazioni
      NOMINATIVO_ASSISTITO: "Nominativo assistito DE",
      IMPORTO_PRESTAZIONI_LIQUIDATO: "Importo prestazioni liquidato DE",
      TREDICESIMA: "Tredicesima DE",
      IMPORTO_CONGUAGLIO: "Importo conquaglio DE",
      RITENUTE_DI_CATEGORIA: "Ritenute di categoria DE",
      RIACCREDITI: "Riaccrediti DE",
      RECUPERI_DA_COMPENSAZIONE: "Recuperi da compensazione DE",
      TOTALE_MENSILE_DA_LIQUIDARE: "Totale mensile da liquidare DE",

      // Label Associazioni
      RICERCA_ASSOCIAZIONE: "Ricerca associazione DE",

      VISUALIZZA_DATI_ANAGRAFICI_ASSOCIAZIONE:
        "Visualizza dati anagrafici associazione DE",
      INSERIMENTO_DATI_ANAGRAFICI_ASSOCIAZIONE:
        "Inserimento dati anagrafici associazione",

      NOME_ASSOCIAZIONE: "Nome associazione DE",
      TIPOLOGIA_DI_ASSISTENZA: "Tipologia di assistenza DE",
      INSERISCI_NUOVA_ASSOCIAZIONE: "Inserisci nuova associazione DE",

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

      INSERISCI_I_DATI_DELL_ASSISTITO_PER_VEDERE_SE_ESISTE_GIA_UNA_POSIZIONE_APERTA:
        "Inserisci i dati dell'assistito per vedere se esiste già una posizione aperta DE",
      COGNOME_DA_RICERCARE: "Cognome da ricercare DE",
      NOME_DA_RICERCARE: "Nome da ricercare DE",
      CODICE_FISCALE_DA_RICERCARE: "Codice fiscale da ricercare DE",
      DATA_NASCITA_DA_RICERCARE_FORMATO_DDMMYYY:
        "Data nascita da ricercare formato dd/MM/yyyy DE",
      CODICE_FISCALE_DUPLICATO_VERIFICARE_ANOMALIA:
        "Codice fiscale duplicato, verificare anomalia DE.",
      DECEDUTO_IL: "Deceduto il DE",
      NUMERO_FALDONE: "Numero faldone DE",
      ANNO_DI_SCARTO: "Anno di scarto DE",
      DATA_DI_NASCITA: "Data di nascita DE",
      POSIZIONE: "Posizione DE",
      FASCICOLO: "Fascicolo DE",
      STATO_DOMANDA: "Stato domanda DE",
      Concessa: "Concessa DE",
      Revocata: "Revocata DE",
      Negata: "Negata DE",
      NUMERO_FALDONE_ARCHIVIAZIONE_DA_RICERCARE:
        "Numero faldone archiviazione da ricercare DE",

      // Label Domanda Tabella Evidenze
      DECORRENZA: "Decorrenza DE",
      SCADENZA: "Scadenza DE",
      TIPO: "Tipo DE",
      DESCRIZIONE: "Descrizione DE",
      POSIZIONE: "Posizione DE",
      PRESTAZIONE: "Prestazione DE",
      CHIUSURA: "Chiusura DE",
      NOTE: "Note DE",

      // Label Redditi
      GESTIONE_REDDITI: "Gestione Redditi DE",
      VALIDO_PER_ANNI_SUCCESSIVI: "Valido per anni successivi DE",
      REDDITI_PERCEPITI_ASSISTITO: "Redditi percepiti dall'assistito DE",
      REDDITI_PERCEPITI_CONIUGE: "Redditi percepiti dal coniuge DE",
      ESTREMI_PENSIONE: "Estremi pensione DE",

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
      ANNO_DI_SCARTO_DA_RICERCARE: "Anno di scarto da ricercare DE",
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
      STORICO_OPERAZIONI: "STORICO OPERAZIONI DE",

      INSERISCI_NUOVA_POSIZIONE: "Inserisci nuova posizione DE",
      INSERISCI_NUOVA_ANAGRAFICA: "Inserisci nuova anagrafica DE",

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
      GENERA_COMUNICAZIONE: "Genera comunicazione DE",
      // -------
      ASSOCIAZIONI: "Associazioni DE",
      RICERCA_ASSOCIAZIONE: "Ricerca associazione DE",
      NUOVA_ASSOCIAZIONE: "Nuova associazione DE",
      // -------
      PROCEDURE: "Procedure DE",
      PROCEDURA_CONTROLLO_6: "Procedura controllo 6% DE",
      PROCEDURA_INVIO_CASELLARIO: "Procedura invio casellario DE",
      PROCEDURA_DI_SCARTO: "Procedura di scarto (skartierung) DE",

      // -------
      AMMINISTRAZIONE: "Amministrazione DE",
      CONFIGURAZIONE_REGOLE_VS_PRESTAZIONI:
        "Configurazione regole vs. prestazioni DE",

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
