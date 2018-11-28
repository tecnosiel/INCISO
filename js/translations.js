/**
 * INNCISO - Comune Bolzano
 *
 */
function config($translateProvider) {
  $translateProvider
    .translations("it", {

      TEST_SERVER:"Test server",
      SERVER_BACKEND:"Server backend ( http://localhost:53061 )",
      INDIRIZZO_HTTP_SERVER_BACKEND_IN_USO:"Indirizzo http server backend da adoperare (vuoto: fake-backend) ",

      ENDPOINT_ANAGRAFE : "Endpoint anagrafiche e posizioni ( /api/persona )",
      ENDPOINT_ANAGRAFE_IN_USO : "Path relativo accesso anagrafe e posizioni (vuoto: /api/persona )",

      ENDPOINT_DOMANDE  : "Endpoint domande",
      ENDPOINT_DOMANDE_IN_USO  : "Path relativo accesso domande (vuoto: /api/domande)",

      ENDPOINT_AUTENTIFICAZIONE  : "Endpoint autentificazione",
      ENDPOINT_AUTENTIFICAZIONE_IN_USO  : "Path relativo accesso autentificazione (vuoto: /api/autenticazione)",


      END_POINTS:"EndPoints",
      INDICARE_INDIRIZZI_RESTFUL_DA_ADOPERARE:"Indicare indirizzi RestFul da adoperare",
      INSERISCI_NUOVA_EVIDENZA:"Inserisci nuova evidenza",
      SALVA_EVIDENZA :"Salva evidenza",
      // -------------------------------------------------------------------------------
      ANNULLAMENTO_ULTIMA_LIQUIDAZIONE_MENSILE:
        "Annullamento ultima liquidazione mensile",
      ASSISTITO: "Assistito",
      PRESTAZIONI_DA_LIQUIDARE: "Prestazioni da liquidare",

      IMPORTI_DA_LIQUIDARE: "Importi da liquidare",

      ESEGUI_LIQUIDAZIONE_MENSILE: "Esegui liquidazione mensile",

      INSERIRE_IL_MESE_DI_RIFERIMENTO_PER_ELABORAZIONE_DELLA_LIQUIDAZIONE:
        "Inserire il mese di riferimento per elaborazione della liquidazione",

      PERIODO_DI_RIFERIMENTO_PER_ELABORARE_LA_LIQUIDAZIONE_MENSILE:
        "Periodo di riferimento per elaborare la liquidazione mensile",

      IMPORTO_MENSILE_SPETTANTE_GIA_LIQUIDATO:
        "Importo mensile spettante già liquidato",
      IMPORTO_MENSILE_CONGUAGLIO: "Importo mensile conguaglio",
      NUOVO_IMPORTO_MENSILE_TREDICESIMA_MATURATA:
        "Nuovo importo mensile tredicesima maturata",

      ESEGUI_CONGUAGLIO: "Esegui conguaglio",
      DAL_AL: "Dal, al",
      CONGUAGLIO_PER_LE_POSIZIONI_ESTRATTE:
        "Conguaglio per le posizioni estratte",
      ELENCO_POSIZIONI_ESTRATTE: "Elenco posizioni estratte",
      SELEZIONA_UN_PERIODO_DI_RIFERIMENTO_PER_ELABORARE_IL_CONGUAGLIO:
        "Seleziona un periodo di riferimento per elaborare il conguaglio",
      PERIODO_DI_RIFERIMENTO_PER_ELABORARE_IL_CONGUAGLIO:
        "Periodo di riferimento per elaborare il conguaglio",
      ELABORA_CONGUAGLIO: "Elabora conguaglio",
      MESE_DI_RIFERIMENTO_PER_SBLOCCO_LIQUIDAZIONE:
        "Mese di riferimento per sblocco liquidazione",
      RICERCA_LIQUIDAZIONE: "Ricerca liquidazione",
      LIQUIDATO: "Liquidato",
      ARRETRATI: "Arretrati",
      CONGUAGLIO: "Conguaglio",
      INVALIDI_CIVILI: "Invalidi civili",
      SORDI: "Sordi",
      CIECHI: "Ciechi",
      RECUPERI_DA_COMPENSAZIONE: "Recuperi da compensazione",
      RIACCREDITI: "Riaccrediti",

      MESE: "Mese",
      IMPORTO_PRESTAZIONI: "Importo prestazioni",
      LIQUIDAZIONE: "Liquidazione",
      DETTAGLIO_IMPORTO_LIQUIDATO: "Dettaglio importo liquidato",
      VISUALIZZA_DATI_ANAGRAFICI: "Visualizza dati anagrafici",
      TOTALE_IMPORTO_LIQUIDATO: "Totale importo liquidato",
      DELL_ASSISTITO_O_DI_EVENTUALE_DELEGATO:
        "dell'assistito o di eventuale delegato",

      ARRETRATI_LIQUIDATI_NEL_MESE_DI_RIFERIMENTO:
        "Arretrati liquidati nel mese di riferimento",

      DETTAGLIO_ARRETRATI: "Dettaglio arretrati",

      DATI_DECRETO: "DATI DECRETO",
      PREDISPONI_MODIFICA_IMPORTO_DA_RECUPERARE:
        "Predisponi/modifica importo da recuperare",
      DATA_SCADENZA_RESTITUZIONE: "Data scadenza restituzione",
      CALCOLO_INTERESSI: "Calcolo interessi",
      RATEIZZAZIONE: "Rateizzazione",
      IMPORTO_RATA_MENSILE: "Importo rata mensile",
      TIPO_DECRETO: "Tipo decreto",
      NUMERO_DECRETO: "Numero decreto",
      DATA_DECRETO: "Data decreto",
      IMPORTO_CAPITALE_DA_RECUPERARE: "Importo capitale da recuperare",
      IMPORTO_INTERESSI_LEGALI_DA_RECUPERARE:
        "Importo interessi legali da recuperare",
      IMPORTO_INTERESSI_DI_RATEIZZAZIONE: "Importo interessi di rateizzazione",

      CAPITALE: "Capitale",
      INTERESSI_LEGALI: "Interessi legali",
      INTERESSI_DI_RATEIZZAZIONE: "interessi di rateizzazione",

      IMPORTO_TOTALE_DA_RECUPERARE: "Importo totale da recuperare",

      ELABORA_LIQUIDAZIONE_MENSILE: "Elabora liquidazione mensile",

      PREDISPONI_MODIFICA_IMPORTO_RIACCREDITATO:
        "Predisponi/modifica importo riaccreditato",
      ESTREMI_DEL_RIACCREDITO: "Estremi del riaccredito",
      IMPORTO_TOTALE_RIACCREDITATO: "Importo totale riaccreditato",
      SI_LIQUIDA_QUALE_ARRETRATO: "Si liquida quale arretrato",

      PREDISPONI_IMPORTO_DA_RECUPERARE: "Predisponi importo da recuperare",
      PREDISPONI_IMPORTO_RESTITUITO: "Predisponi importo restituito",
      PREDISPONI_IMPORTO_RIACCREDITATO: "Predisponi importo riaccreditato",
      RINUNCIA_ALLA_RISCOSSIONE_COATTIVA: "Rinuncia alla riscossione coattiva",
      ANNULLATO: "Annullato",
      MOTIVO_ANNULLAMENTO: "Motivo annullamento",
      TIPO_DECRETO: "Tipo decreto",

      PREDISPONI_MODIFICA_IMPORTO_RESTITUITO:
        "Predisponi/modifica importo restituito",

      ESTREMI_RESTITUZIONE: "Estremi restituzione",
      IMPORTO_CAPITALE_RESTITUITO: "Importo capitale restituito",
      IMPORTO_INTERESSI_RESTITUITO: "Importo interessi restituito",

      TOTALE_IMPORTO_RESTITUITO: "Totale importo restituito",

      DATA_ULTIMA_MODIFICA: " Data(ultima modifica)",
      TIPO_DI_RECUPERO: "Tipo di recupero",
      TOT_DA_RECUPERARE: "Tot. da recuperare",
      RECUPERATO: "Recuperato",
      RESTITUTO: "Restituito",
      RIMANENTE_DA_RECUPERARE: "Rimanente da recuperare",
      IMPORTO_RIACCREDITATO: "Importo riaccreditato",
      DATA_LIQUIDAZIONE_ARRETRATO: "Data liquidazione arretrato",

      PROFILO: "Profilo",
      CONTATTI: "Contatti",
      MAIL: "Mail",
      LOGOUT: "Logout",

      SET_NEW_PARAMETERS: "Applica nuovi parametri",
      RESET_DEFAULT_PARAMETERS: "Reset parametri di default",

      TEXT_COLOR: "Colore testo",

      DIMENSIONE_CARATTERE: "Dimensione fonts",
      ALTEZZA_INTERLINEA: "Altezza interlinea",
      OPZIONE_1: "Opzione 1",
      TIPOGRAFIA: "Tipografia",

      SELEZIONARE_I_SETTAGGI_TIPOGRAFICI_DESIDERATI:
        "Selezionare i settaggi tipografici desiderati",

      SETTING: "Setting",

      BENVENUTI_IN_INCISO: "Benvenuti in INCISO",
      BENVENUTI_IN_INCISO_SOTTOTITOLO:
        "Informatizzazione della procedura degli assistiti: invalidi civili, ciechi civili e sordi.",
      ENTRA_NELLA_PROCEDURA: "Entra nella procedura",

      CODICE_FISCALE_DA_RICERCARE: "Codice fiscale da ricercare",
      COGNOME_DA_RICERCARE: "Cognome da ricercare",
      NOME_DA_RICERCARE: "Nome da ricercare",
      DATA_NASCITA_DA_RICERCARE: "Data nascita da ricercare",

      LETTERA_INVIATA: "Lettera inviata",
      UTENTE: "Utente",
      NOTE_DI_CHIUSURA: "Note di chiusura",

      CANCELLA_EVIDENZA: "Cancella evidenza",
      DATI_EVIDENZA: "Dati evidenza",
      ELIMINA_POSIZIONE: "Elimina posizione",

      VISUALIZZA_EVIDENZA: "Visualizza evidenza",
      INSERIMENTO_EVIDENZA:"Inserimento evidenza",
     
      DAL: "dal",
      AL: "al",

      TIPO_PRESTAZIONE: "Tipo prestazione",
      DATA_CHIUSURA: "Data chiusura",
      TIPO_EVIDENZA: "Tipo evidenza",
      DETTAGLIO: "Dettaglio",

      PRESTAZIONE_DI_RIFERIMENTO: "Prestazione di riferimento",
      DATA_DOMANDA_DI_RIFERIMENTO: "Data domanda di riferimento",
      DATA_SCADENZA_EVIDENZA: "Data scadenza evidenza",
      DATA_CHIUSURA_EVIDENZA: "Data chiusura evidenza",

      INFORMAZIONI_GENERALI: "Informazioni generali",
      MODIFICA_RICORSO_UPPER: "MODIFICA RICORSO",
      DATA_DECORRENZA_PAGAMENTO: "Data decorrenza pagamento",
      DATA_CHIUSURA_UFFICIO: "Data chiusura ufficio",
      NUMERO_E_DATA_PROTOCOLLO: " Numero e data protocollo",
      LEGALI_RAPPRESENTANTI: "Legali rappresentanti",
      MODALITA_PAGAMENTO: "Modalita pagamento",
      INTESTATARIO_CONTO: "Intestatario conto",
      RITENUTA_DI_CATEGORIA: "Ritenuta di categoria",
      RICORSO: "Ricorso",
      DATA_RICORSO: "Data Ricorso",
      MOTIVO_RICORSO: "Motivo ricorso",
      ESITO_RICORSO: "Esito ricorso",

      DATI: "Dati",

      REVOCA_PRESTAZIONE: "Revoca prestazione",
      SOSPENSIONE_PRESTAZIONE: "Sospensione prestazione",
      NEGAZIONE_PRESTAZIONE: "Negazione prestazione",

      PREDISPONI_NEGAZIONE_PRESTAZIONE: "Predisponi negazione prestazione",
      PREDISPONI_REVOCA_PRESTAZIONE: "Predisponi revoca prestazione",
      MODIFICA_NEGAZIONE_PRESTAZIONE: "Modifica negazione prestazione",
      MODIFICA_SOSPENSIONE_PRESTAZIONE: "Modifica sospensione prestazione",

      LIQUIDAZIONI_ANTECEDENTI_INCISO: "Liquidazioni antecedenti IN-CI-SO",
      STORICO_DECRETI: "Storico decreti",
      ELENCO_DOCUMENTAZIONE: "Elenco documentazione",
      ELENCO_DOMANDE: "Elenco domande",

      DECORRENZA_ASSEGNO_DI_CURA: "Decorrenza assegno di cura",
      DECORRENZA_PERMANENZA_CASA_DI_LUNGODEGENZA:
        "Decorrenza permanenza casa di lungodegenza",

      IMPORTO_RITENUTA_DI_CATEGORIA_QUOTA_MENSILE:
        "Importo ritenuta di categoria (quota mensile)",
      ELENCO_RITENUTE_SULLE_LIQUIDAZIONI_MENSILI:
        "Elenco ritenute sulle liquidazioni mensili",
      RESPONSABILE: "Responsabile",
      INDIRIZZO: "Indirizzo",
      VALIDITA: "Validità",

      GESTIONE_PENSIONE: "Gestione Pensione",
      CREA_NUOVA_PENSIONE: "Crea nuova pensione",

      TIPO_ASSISTENZA: "Tipo assistenza",
      DATA_FINE_COMPATIBILITA: "Data fine compatibilità",

      RICALCOLA_PRESTAZIONI: "Ricalcola Prestazioni",

      NOME_PRESTAZIONE: "Nome prestazione",

      DATA_DECORRENZA: "Data decorrenza",
      DATA_SCADENZA: "Data scadenza",
      MODIFICA_PRESTAZIONE: "Modifica prestazione",

      PREDISPONI_SOSPENSIONE_PRESTAZIONE: "Predisponi sospensione prestazione",
      PREDISPONI_NEGAZIONE_PRESTAZIONE: "Predisponi negazione prestazione",
      MODIFICA_REVOCA_PRESTAZIONE: "Modifica revoca prestazione",

      IMPORTI_SPETTANTI: "Importi spettanti",
      STATO_PRESTAZIONE: "Stato prestazione",
      ELENCO_DATI_RELATIVI_AL_REDDITO: "Elenco dati relativi al reddito",
      ELENCO_SOSPENSIONI: "Elenco sospensioni",

      TOTALE_PER_ANNO_LIQUIDATO: "Totale per anno liquidato",
      TOTALE_SPETTANTE_PER_ANNO_NON_ANCORA_LIQUIDATO:
        "Totale spettante per anno non ancora liquidato",

      REVOCATA: "Revocata",
      INSERITA: "Inserita",
      CONCESSA: "Concessa",
      NEGATA: "Negata",
      SOSPESA: "Sospesa",
      CANCELLATA: "Cancellata",

      DATA_REVOCA: "Data revoca",
      DATA_INSERIMENTO: "Data inserimento",
      DATA_CONCESSIONE: "Data concessione",
      DATA_NEGAZIONE: "Data negazione",
      DATA_SOSPENSIONE: "Data sospensione",
      DATA_CANCELLAZIONE: "Data cancellazione",

      MOTIVO_REVOCA: "Motivo revoca",
      MOTIVO_INSERIMENTO: "Motivo inserimento",
      MOTIVO_CONCESSIONE: "Motivo concessione",
      MOTIVO_NEGAZIONE: "Motivo negazione",
      MOTIVO_SOSPENSIONE: "Motivo sospensione",
      MOTIVO_CANCELLAZIONE: "Motivo cancellazione",
      MOTIVO: "Motivo",

      IMPORTO_DA_RECUPERARE: "Importo da recuperare",
      IMPORTO_RICHIESTO: "Importo richiesto",
      IMPORTO_DA_PAGARE: "Importo da pagare",
      IMPORTO_NEGATO: "Importo negato",
      IMPORTO_SOSPESO: "Importo sospeso",
      IMPORTO_CANCELLATO: "Importo cancellato",
      IMPORTO: "Importo",

      TOTALE_DELLE_PRESTAZIONI_LIQUIDATE_PER_ANNO:
        "Totale delle prestazioni liquidate per anno",
      TOTALE_PRESTAZIONI_LIQUIDATE: "Totale prestazioni liquidate",
      ELENCO_DELLE_PRESTAZIONI: "Elenco delle prestazioni",

      PRESTAZIONI: "Prestazioni",
      EMAIL: "Email",
      PROVENIENZA: "Provenienza",

      EMAIL_NON_VALIDA: "Email non valida",
      DELEGA_PATRONATO: "Delega patronato",

      NUMERO_FASCICOLO_DA_RICERCARE: "Numero fascicolo da ricercare",
      SOSPENDI_DOMANDA: "Sospendi domanda",
      ANNULLA_REVOCA_DOMANDA: "Annulla revoca domanda",
      ANNULLA_NEGAZIONE_DOMANDA: "Annulla negazione domanda",
      CANCELLA_DOMANDA: "Cancella domanda",
      DATI_ANAGRAFICI_DELL_ASSISTITO: "Dati anagrafici dell'assistito",
      DATI_DOMANDA: "Dati domanda",
      ELENCO_VERBALI: "Elenco verbali",

      ELENCO_EVIDENZE: "Elenco evidenze",
      ELENCO_EVIDENZE_UPPERCASE: "ELENCO EVIDENZE",

      ELENCO_DOCUMENTAZIONE: "Elenco documentazione",
      ELENCO_SOSPENSIONI_DELLA_DOMANDA: "Elenco sospensioni della domanda",

      LOG_DI_SISTEMA: "Log di sistema",

      DATI_ASSISTITO: "Dati Assistito",
      NUMERO_POSIZIONE: "Numero Posizione",
      NUMERO_FASCICOLO: "Numero Fascicolo",
      NAZIONALITA: "Nazionalità",

      DATI_ANAGRAFICI_ASSISTITO: "Dati anagrafici assistito",

      PROTOCOLLO_AZIENDA_SANITARIA: "Protocollo azienda sanitaria",
      NUMERO_PROTOCOLLO: "Numero protocollo",
      PERCENTUALE_DI_INVALIDITA: "Percentuale di invalidità",
      NOTE_VERBALE: "Note verbale",

      LEGALE_RAPPRESENTANTE: "Legale rappresentante",
      ALTRO_LEGALE_RAPPRESENTANTE: "Altro legale rappresentante",
      TIPO_DECRETO: "Tipo decreto",
      NUMERO_DECRETO: "Numero decreto",
      DATA_DECRETO: "Data decreto",
      PROVVISORIO: "Provvisorio",
      DEFINITIVO: "Definitivo",
      SCADENZA_DECRETO: "Scadenza decreto",
      DDMMYYYY: "dd/MM/yyyy",
      CERCA_ANAGRAFICA: "cerca anagrafica",
      MODALITA_DI_PAGAMENTO: "Modalità di pagamento",
      CURATORE: "Curatore",
      BONIFICO_BANCARIO: "Bonifico bancario",
      BONIFICO_DOMICILIATO_ALLA_POSTA: "Bonifico domiciliato alla posta",
      IBAN: "IBAN",
      CODICE_BIC_SWIFT: "Codice BIC/SWIFT",
      DELEGATO_DELL_INCASSO: "Delegato dell'incasso",
      ASSOCIAZIONI_DI_CATEGORIA: "Associazioni di categoria",
      DATA_INIZIO_ISCRIZIONE: "Data inizio iscrizione",
      DATA_FINE_ISCRIZIONE: "Data fine iscrizione",
      RITENUTA_DI_CATEGORIA_QUOTA_MENSILE:
        "Ritenuta di categoria (quota mensile)",
      DATA_DECORRENZA_DEL_DIRITTO_AL_PAGAMENTO:
        "Data decorrenza del diritto al pagamento",
      DATI_VERBALE: "Dati verbale",
      INSERISCI_I_DATI_E_AVVIA_LA_RICERCA:
        "Inserisci i dati e avvia la ricerca",
      CLOSE: "Close",
      COMUNICAZIONI: "Comunicazioni",

      ELENCO_DOCUMENTI_PER_FASCICOLO: "Elenco documenti per fascicolo",
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
      CITTADINANZA: "Cittadinanza",
      EXTRACOMUNITARIO: "Extracomunitario",
      TIPO_PERMESSO: "Tipo permesso",
      PERMESSO_DI_SOGGIORNO: "Permesso di soggiorno",

      SELEZIONA_UN_COMUNE: "Seleziona un comune",
      SELEZIONA_UNA_PROVINCIA: "Seleziona una provincia",
      SELEZIONA_UNA_NAZIONE: "Seleziona una nazione",
      SELEZIONA_CITTADINANZA: "Seleziona cittadinanza",
      SELEZIONA_UN_ELEMENTO_NELL_ELENCO: "Seleziona un elemento dall'elenco",
      SELEZIONA_UN_PERMESSO_DALL_ELENCO: "Seleziona un permesso dall'elenco",
      SI: "Si",
      NO: "No",
      DATA_RILASCIO: "Data rilascio",
      VALIDO_FINO_AL: "Valido fino al",
      RESIDENZA: "Residenza",
      DOMICILIO: "Domicilio",
      ALTRI_INDIRIZZI: "Altri indirizzi",
      RIFERIMENTI_DI_CONTATTO: "Riferimenti di contatto",
      TELEFONO_PRINCIPALE: "Telefono principale",
      TELEFONO_SECONDARIO: "Telefono secondario",
      ANNO_DI_SCARTO_INCISO: "Anno di scarto IN-CI-SO",
      SIMULAZIONE_LIQUIDAZIONE_EREDI: "Simulazione liquidazione eredi",
      DATA_CALCOLO_SIMULAZIONE: "Data calcolo simulazione",
      IMPORTO_SPETTANTE: "Importo spettante",
      VISUALIZZA_DETTAGLIO_SIMULAZIONE: "Visualizzattaglio simulazione",
      PERC_DI_EREDITA: "% di eredità",
      LIQUIDATO_IN_BASE_ALLA_PERC_DI_EREDITA:
        "Liquidato in base alla % di eredità",
      ELENCO_EREDI: "Elenco eredi",
      COGNOME_NOME: "Cognome Nome",
      LIQUIDAZIONE: "Liquidazione",
      VISUALIZZA_DETTAGLIO_IMPORTO_LIQUIDATO:
        "Visualizzattaglio importo liquidato",
      AGGIUNGI_EREDE: "Aggiungi erede",

      ELENCO_LIQUIDAZIONI: "Elenco liquidazioni",
      ELENCO_IMPORTI_RIACCREDITATI: "Elenco importi riaccreditati",
      ELENCO_IMPORTI_DA_RECUPERARE: "Elenco importi da recuperare",

      ENTITA: "Entita",

      CORRENZA_ASSEGNO_DI_CURA: "Decorrenza assegno di cura",
      TERMINE_DECORRENZA_ASSEGNO_DI_CURA: "Terminecorrenza assegno di cura",
      CORRENZA_PERMANENZA_CASA_DI_LUNGODEGENZA:
        "Decorrenza permanenza casa di lungodegenza",
      TERMINE_PERMANENZA_CASA_DI_LUNGODEGENZA:
        "Termine permanenza casa di lungodegenza",

      ELENCO_RITENUTE_DI_CATEGORIA_RECUPERATE:
        "Elenco ritenute di categoria recuperate",

      NUM_POSIZIONE: "Num. posizione",
      DATA_DOMANDA: "Data domanda",
      TIPO_ASSOCIAZIONE: "Tipo associazione",
      INIZIO_ISCRIZIONE: "Inizio iscrizione",
      FINE_ISCRIZIONE: "Fine iscrizione",

      DATA_CALCOLO: "Data calcolo",
      LIQUIDATO: "Liquidato",
      RIACCREDITO: "Riaccredito",
      TRATTENUTA_DI_CATEGORIA: "Trattenuta di categoria",
      IMPORTO_RECUPERATO_PER_COMPENSAZIONE:
        "Importo recuperato per compensazione",
      NR_TRASFERIMENTO_FLUMO: "Nr. trasferimento Flumo",
      TOT_MESE: "Tot. mese",
      TOT_ANNO: "Tot. anno",
      TTAGLIO: "Dettaglio",
      NR_MANDATO: "Nr. mandato",
      GENERA_COMUNICAZIONE: "genera comunicazione",
      INSERISCI_NUOVA_EVIDENZA: "inserisci nuova evidenza",
      ALTRE_PENSIONI: "Altre pensioni",

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
      POSIZIONE_ESPRO: "POSIZIONE ESPRO",
      STORICO_OPERAZIONI: "STORICO OPERAZIONI",

      INSERISCI_NUOVA_POSIZIONE: "Inserisci nuova posizione",
      INSERISCI_NUOVA_ANAGRAFICA: "Inserisci nuova anagrafica",

      INSERIMENTO_DATI_ANAGRAFICI: "Inserimento dati anagrafici",

      VISUALIZZA_DATI_ANAGRAFICI: "Visualizza dati anagrafici",

      GESTIONE_INDIRIZZI: "Gestione Indirizzi",

      // Label elementi menu
      NUOVA_DOMANDA: "Nuova domanda",

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
      TEST_SERVER:"Test server DE",

      SERVER_BACKEND:"Server backend DE ( http://localhost:53061 )",
      INDIRIZZO_HTTP_SERVER_BACKEND_IN_USO:"Indirizzo http server backend da adoperare (vuoto per fake-backend) DE",
   
      ENDPOINT_ANAGRAFE : "Endpoint anagrafiche e posizioni DE ( /api/persona )",
      ENDPOINT_ANAGRAFE_IN_USO : "Path relativo accesso anagrafe e posizioni DE (vuoto: /api/persona )",

      ENDPOINT_DOMANDE  : "Endpoint domande DE",
      ENDPOINT_DOMANDE_IN_USO  : "Path relativo accesso domande DE (vuoto: /api/domande)",

      ENDPOINT_AUTENTIFICAZIONE  : "Endpoint autentificazione DE",
      ENDPOINT_AUTENTIFICAZIONE_IN_USO  : "Path relativo accesso autentificazione DE (vuoto: /api/autenticazione)",
    
      END_POINTS:"EndPoints DE",
      INDICARE_INDIRIZZI_RESTFUL_DA_ADOPERARE:"Indicare indirizzi RestFul da adoperare DE",

      INSERISCI_NUOVA_EVIDENZA:"Inserisci nuova evidenza DE",

      SALVA_EVIDENZA :"Salva evidenza DE",


      ANNULLAMENTO_ULTIMA_LIQUIDAZIONE_MENSILE:
        "Annullamento ultima liquidazione mensile DE",

      ASSISTITO: "Assistito DE",
      PRESTAZIONI_DA_LIQUIDARE: "Prestazioni da liquidare DE",

      IMPORTI_DA_LIQUIDARE: "Importi da liquidare DE",

      ESEGUI_LIQUIDAZIONE_MENSILE: "Esegui liquidazione mensile DE",
      INSERIRE_IL_MESE_DI_RIFERIMENTO_PER_ELABORAZIONE_DELLA_LIQUIDAZIONE:
        "Inserire il mese di riferimento per elaborazione della liquidazione DE",

      PERIODO_DI_RIFERIMENTO_PER_ELABORARE_LA_LIQUIDAZIONE_MENSILE:
        "Periodo di riferimento per elaborare la liquidazione mensile DE",

      IMPORTO_MENSILE_SPETTANTE_GIA_LIQUIDATO:
        "Importo mensile spettante già liquidato DE",
      IMPORTO_MENSILE_CONGUAGLIO: "Importo mensile conguaglio DE",
      NUOVO_IMPORTO_MENSILE_TREDICESIMA_MATURATA:
        "Nuovo importo mensile tredicesima maturata DE",

      ESEGUI_CONGUAGLIO: "Esegui conguaglio DE",
      DAL_AL: "Dal, al DE",
      CONGUAGLIO_PER_LE_POSIZIONI_ESTRATTE:
        "Conguaglio per le posizioni estratte DE",
      ELENCO_POSIZIONI_ESTRATTE: "Elenco posizioni estratte DE",
      SELEZIONA_UN_PERIODO_DI_RIFERIMENTO_PER_ELABORARE_IL_CONGUAGLIO:
        "Seleziona un periodo di riferimento per elaborare il conguaglio DE",
      PERIODO_DI_RIFERIMENTO_PER_ELABORARE_IL_CONGUAGLIO:
        "Periodo di riferimento per elaborare il conguaglio DE",
      ELABORA_CONGUAGLIO: "Elabora conguaglio DE",
      MESE_DI_RIFERIMENTO_PER_SBLOCCO_LIQUIDAZIONE:
        "Mese di riferimento per sblocco liquidazione DE",
      RICERCA_LIQUIDAZIONE: "Ricerca liquidazione DE",
      LIQUIDATO: "Liquidato DE",
      ARRETRATI: "Arretrati DE",
      CONGUAGLIO: "Conguaglio DE",
      INVALIDI_CIVILI: "Invalidi civili DE",
      SORDI: "Sordi DE",
      CIECHI: "Ciechi DE",
      RECUPERI_DA_COMPENSAZIONE: "Recuperi da compensazione DE",
      RIACCREDITI: "Riaccrediti DE",

      MESE: "Mese DE",
      IMPORTO_PRESTAZIONI: "Importo prestazioni DE",
      LIQUIDAZIONE: "Liquidazione DE",
      DETTAGLIO_IMPORTO_LIQUIDATO: "Dettaglio importo liquidato DE",
      VISUALIZZA_DATI_ANAGRAFICI: "Visualizza dati anagrafici DE",
      TOTALE_IMPORTO_LIQUIDATO: "Totale importo liquidato DE",
      DELL_ASSISTITO_O_DI_EVENTUALE_DELEGATO:
        "dell'assistito o di eventuale delegato DE",

      ARRETRATI_LIQUIDATI_NEL_MESE_DI_RIFERIMENTO:
        "Arretrati liquidati nel mese di riferimento DE",

      DETTAGLIO_ARRETRATI: "Dettaglio arretrati DE",

      DATI_DECRETO: "DATI DECRETO DE",
      PREDISPONI_MODIFICA_IMPORTO_DA_RECUPERARE:
        "Predisponi/modifica importo da recuperare DE",
      DATA_SCADENZA_RESTITUZIONE: "Data scadenza restituzione DE",
      CALCOLO_INTERESSI: "Calcolo interessi DE",
      RATEIZZAZIONE: "Rateizzazione DE",
      IMPORTO_RATA_MENSILE: "Importo rata mensile DE",
      TIPO_DECRETO: "Tipo decreto DE",
      NUMERO_DECRETO: "Numero decreto DE",
      DATA_DECRETO: "Data decreto DE",
      IMPORTO_CAPITALE_DA_RECUPERARE: "Importo capitale da recuperare DE",
      IMPORTO_INTERESSI_LEGALI_DA_RECUPERARE:
        "Importo interessi legali da recuperare DE",
      IMPORTO_INTERESSI_DI_RATEIZZAZIONE:
        "Importo interessi di rateizzazione DE",

      CAPITALE: "Capitale DE",
      INTERESSI_LEGALI: "Interessi legali DE",
      INTERESSI_DI_RATEIZZAZIONE: "interessi di rateizzazione DE",

      IMPORTO_TOTALE_DA_RECUPERARE: "Importo totale da recuperare DE",

      ELABORA_LIQUIDAZIONE_MENSILE: "Elabora liquidazione mensile DE",

      PREDISPONI_MODIFICA_IMPORTO_RIACCREDITATO:
        "Predisponi/modifica importo riaccreditato DE",
      ESTREMI_DEL_RIACCREDITO: "Estremi del riaccredito DE",
      IMPORTO_TOTALE_RIACCREDITATO: "Importo totale riaccreditato DE",
      SI_LIQUIDA_QUALE_ARRETRATO: "Si liquida quale arretrato DE",

      PREDISPONI_IMPORTO_DA_RECUPERARE: "Predisponi importo da recuperare DE",
      PREDISPONI_IMPORTO_RESTITUITO: "Predisponi importo restituito DE",
      PREDISPONI_IMPORTO_RIACCREDITATO: "Predisponi importo riaccreditato DE",
      RINUNCIA_ALLA_RISCOSSIONE_COATTIVA:
        "Rinuncia alla riscossione coattiva DE",
      ANNULLATO: "Annullato DE",
      MOTIVO_ANNULLAMENTO: "Motivo annullamento DE",
      TIPO_DECRETO: "Tipo decreto DE",

      PREDISPONI_MODIFICA_IMPORTO_RESTITUITO:
        "Predisponi/modifica importo restituito DE",

      ESTREMI_RESTITUZIONE: "Estremi restituzione  DE",
      IMPORTO_CAPITALE_RESTITUITO: "Importo capitale restituito DE",
      IMPORTO_INTERESSI_RESTITUITO: "Importo interessi restituito DE",

      TOTALE_IMPORTO_RESTITUITO: "Totale importo restituito DE ",

      DATA_ULTIMA_MODIFICA: " Data(ultima modifica) DE",
      TIPO_DI_RECUPERO: "Tipo di recupero DE",
      TOT_DA_RECUPERARE: "Tot. da recuperare DE",
      RECUPERATO: "Recuperato DE",
      RESTITUTO: "Restituito DE",
      RIMANENTE_DA_RECUPERARE: "Rimanente da recuperare DE",

      RIMANENTE_DA_RECUPERARE: "Rimanente da recuperare DE",
      IMPORTO_RIACCREDITATO: "Importo riaccreditato DE",
      DATA_LIQUIDAZIONE_ARRETRATO: "Data liquidazione arretrato DE",

      PROFILO: "Profilo DE",
      CONTATTI: "Contatti DE",
      MAIL: "Mail DE",
      LOGOUT: "Logout DE",

      SET_NEW_PARAMETERS: "Applica nuovi parametri DE",
      RESET_DEFAULT_PARAMETERS: "Reset parametri di default DE",
      
      TEXT_COLOR: "Colore testo DE",

      DIMENSIONE_CARATTERE: "Dimensione fonts DE",
      ALTEZZA_INTERLINEA: "Altezza interlinea DE",
      OPZIONE_1: "Opzione 1 DE",
      TIPOGRAFIA: "Tipografia DE",

      SELEZIONARE_I_SETTAGGI_TIPOGRAFICI_DESIDERATI:
        "Selezionare i settaggi tipografici desiderati DE",

      SETTING: "Setting DE",

      BENVENUTI_IN_INCISO: "Benvenuti in INCISO DE",
      BENVENUTI_IN_INCISO_SOTTOTITOLO:
        "Informatizzazione della procedura degli assistiti: invalidi civili, ciechi civili e sordi DE.",
      ENTRA_NELLA_PROCEDURA: "Entra nella procedura DE",

      CODICE_FISCALE_DA_RICERCARE: "Codice fiscale da ricercare DE",
      COGNOME_DA_RICERCARE: "Cognome da ricercare DE",
      NOME_DA_RICERCARE: "Nome da ricercare DE",
      DATA_NASCITA_DA_RICERCARE: "Data nascita da ricercare DE",

      LETTERA_INVIATA: "Lettera inviata DE",

      UTENTE: "Utente DE",
      NOTE_DI_CHIUSURA: "Note di chiusura DE",

      CANCELLA_EVIDENZA: "Cancella evidenza DE",

      DATI_EVIDENZA: "Dati evidenza DE",
      ELIMINA_POSIZIONE: "Elimina posizione DE",
      VISUALIZZA_EVIDENZA: "Visualizza evidenza DE",
      INSERIMENTO_EVIDENZA:"Inserimento evidenza DE",

      DAL: "dal DE",
      AL: "al DE",

      TIPO_PRESTAZIONE: "Tipo prestazione DE",
      DATA_CHIUSURA: "Data chiusura DE",
      TIPO_EVIDENZA: "Tipo evidenza DE",
      DETTAGLIO: "Dettaglio DE",

      PRESTAZIONE_DI_RIFERIMENTO: "Prestazione di riferimento DE",
      DATA_DOMANDA_DI_RIFERIMENTO: "Data domanda di riferimento DE",
      DATA_SCADENZA_EVIDENZA: "Data scadenza evidenza DE",
      DATA_CHIUSURA_EVIDENZA: "Data chiusura evidenza DE",

      INFORMAZIONI_GENERALI: "Informazioni generali DE",
      MODIFICA_RICORSO_UPPER: "MODIFICA RICORSO DE",
      DATA_DECORRENZA_PAGAMENTO: "Data decorrenza pagamento DE",
      DATA_CHIUSURA_UFFICIO: "Data chiusura ufficio DE",
      NUMERO_E_DATA_PROTOCOLLO: " Numero e data protocollo DE",
      LEGALI_RAPPRESENTANTI: "Legali rappresentanti DE",
      MODALITA_PAGAMENTO: "Modalita pagamento DE",
      INTESTATARIO_CONTO: "Intestatario conto DE",
      RITENUTA_DI_CATEGORIA: "Ritenuta di categoria DE",
      RICORSO: "Ricorso DE",
      DATA_RICORSO: "Data Ricorso DE",
      MOTIVO_RICORSO: "Motivo ricorso DE",
      ESITO_RICORSO: "Esito ricorso DE",

      DATI: "Dati DE",

      REVOCA_PRESTAZIONE: "Revoca prestazione DE",
      SOSPENSIONE_PRESTAZIONE: "Sospensione prestazione DE",
      NEGAZIONE_PRESTAZIONE: "Negazione prestazione DE",

      PREDISPONI_NEGAZIONE_PRESTAZIONE: "Predisponi negazione prestazione DE",
      PREDISPONI_REVOCA_PRESTAZIONE: "Predisponi revoca prestazione DE",
      MODIFICA_NEGAZIONE_PRESTAZIONE: "Modifica negazione prestazione DE",
      MODIFICA_SOSPENSIONE_PRESTAZIONE: "Modifica sospensione prestazione DE",

      LIQUIDAZIONI_ANTECEDENTI_INCISO: "Liquidazioni antecedenti IN-CI-SO DE",
      STORICO_DECRETI: "Storico decreti DE",
      ELENCO_DOCUMENTAZIONE: "Elenco documentazione DE",
      ELENCO_DOMANDE: "Elenco domande DE",

      DECORRENZA_ASSEGNO_DI_CURA: "Decorrenza assegno di cura DE",
      DECORRENZA_PERMANENZA_CASA_DI_LUNGODEGENZA:
        "Decorrenza permanenza casa di lungodegenza DE",

      IMPORTO_RITENUTA_DI_CATEGORIA_QUOTA_MENSILE:
        "Importo ritenuta di categoria (quota mensile) DE",
      ELENCO_RITENUTE_SULLE_LIQUIDAZIONI_MENSILI:
        "Elenco ritenute sulle liquidazioni mensili DE",
      RESPONSABILE: "Responsabile DE",
      INDIRIZZO: "Indirizzo DE",
      VALIDITA: "Validità DE",

      GESTIONE_PENSIONE: "Gestione Pensione DE",
      CREA_NUOVA_PENSIONE: "Crea nuova pensione DE",

      TIPO_ASSISTENZA: "Tipo assistenza DE",
      DATA_FINE_COMPATIBILITA: "Data fine compatibilità DE",

      RICALCOLA_PRESTAZIONI: "Ricalcola Prestazioni DE",

      NOME_PRESTAZIONE: "Nome prestazione DE",

      DATA_DECORRENZA: "Data decorrenza DE",
      DATA_SCADENZA: "Data scadenza DE",
      MODIFICA_PRESTAZIONE: "Modifica prestazione DE",

      PREDISPONI_SOSPENSIONE_PRESTAZIONE:
        "Predisponi sospensione prestazione DE",
      PREDISPONI_NEGAZIONE_PRESTAZIONE: "Predisponi negazione prestazione DE",
      MODIFICA_REVOCA_PRESTAZIONE: "Modifica revoca prestazione DE",

      IMPORTI_SPETTANTI: "Importi spettanti DE",
      STATO_PRESTAZIONE: "Stato prestazione DE",
      ELENCO_DATI_RELATIVI_AL_REDDITO: "Elenco dati relativi al reddito DE",
      ELENCO_SOSPENSIONI: "Elenco sospensioni DE",

      TOTALE_PER_ANNO_LIQUIDATO: "Totale per anno liquidato DE",
      TOTALE_SPETTANTE_PER_ANNO_NON_ANCORA_LIQUIDATO:
        "Totale spettante per anno non ancora liquidato DE",

      REVOCATA: "Revocata DE",
      INSERITA: "Inserita DE",
      CONCESSA: "Concessa DE",
      NEGATA: "Negata DE",
      SOSPESA: "Sospesa DE",
      CANCELLATA: "Cancellata DE",

      DATA_REVOCA: "Data revoca DE",
      DATA_INSERIMENTO: "Data inserimento DE",
      DATA_CONCESSIONE: "Data concessione DE",
      DATA_NEGAZIONE: "Data negazione DE",
      DATA_SOSPENSIONE: "Data sospensione DE",
      DATA_CANCELLAZIONE: "Data cancellazione DE",

      MOTIVO_REVOCA: "Motivo revoca DE",
      MOTIVO_INSERIMENTO: "Motivo inserimento DE",
      MOTIVO_CONCESSIONE: "Motivo concessione DE",
      MOTIVO_NEGAZIONE: "Motivo negazione DE",
      MOTIVO_SOSPENSIONE: "Motivo sospensione DE",
      MOTIVO_CANCELLAZIONE: "Motivo cancellazione DE",
      MOTIVO: "Motivo DE",

      IMPORTO_DA_RECUPERARE: "Importo da recuperare DE",
      IMPORTO_RICHIESTO: "Importo richiesto DE",
      IMPORTO_DA_PAGARE: "Importo da pagare DE",
      IMPORTO_NEGATO: "Importo negato DE",
      IMPORTO_SOSPESO: "Importo sospeso DE",
      IMPORTO_CANCELLATO: "Importo cancellato DE",
      IMPORTO: "Importo DE",

      TOTALE_DELLE_PRESTAZIONI_LIQUIDATE_PER_ANNO:
        "Totale delle prestazioni liquidate per anno DE",
      TOTALE_PRESTAZIONI_LIQUIDATE: "Totale prestazioni liquidate DE",
      ELENCO_DELLE_PRESTAZIONI: "Elenco delle prestazioni DE",

      PRESTAZIONI: "Prestazioni DE",

      EMAIL: "Email DE",
      PROVENIENZA: "Provenienza DE",

      EMAIL_NON_VALIDA: "Email non valida DE",
      DELEGA_PATRONATO: "Delega patronato DE",

      NUMERO_FASCICOLO_DA_RICERCARE: "Numero fascicolo da ricercare DE",

      SOSPENDI_DOMANDA: "Sospendi domanda DE",
      ANNULLA_REVOCA_DOMANDA: "Annulla revoca domanda DE",
      ANNULLA_NEGAZIONE_DOMANDA: "Annulla negazione domanda DE",
      CANCELLA_DOMANDA: "Cancella domanda DE",
      DATI_ANAGRAFICI_DELL_ASSISTITO: "Dati anagrafici dell'assistito DE",
      DATI_DOMANDA: "Dati domanda DE",
      ELENCO_VERBALI: "Elenco verbali DE",

      ELENCO_EVIDENZE: "Elenco evidenze DE",
      ELENCO_EVIDENZE_UPPERCASE: "ELENCO EVIDENZE DE",

      ELENCO_DOCUMENTAZIONE: "Elenco documentazione DE",
      ELENCO_SOSPENSIONI_DELLA_DOMANDA: "Elenco sospensioni della domanda DE",

      LOG_DI_SISTEMA: "Log di sistema DE",

      DATI_ASSISTITO: "Dati Assistito DE",
      NUMERO_POSIZIONE: "Numero Posizione DE",
      NUMERO_FASCICOLO: "Numero Fascicolo DE",
      NAZIONALITA: "Nazionalità DE",

      DATI_ANAGRAFICI_ASSISTITO: "Dati anagrafici assistito DE",

      PROTOCOLLO_AZIENDA_SANITARIA: "Protocollo azienda sanitaria DE",
      NUMERO_PROTOCOLLO: "Numero protocollo DE",
      PERCENTUALE_DI_INVALIDITA: "Percentuale di invalidità DE",
      NOTE_VERBALE: "Note verbale DE",

      LEGALE_RAPPRESENTANTE: "Legale rappresentante DE",
      ALTRO_LEGALE_RAPPRESENTANTE: "Altro legale rappresentante DE",
      TIPO_DECRETO: "Tipo decreto DE",
      NUMERO_DECRETO: "Numero decreto DE",
      DATA_DECRETO: "Data decreto DE",
      PROVVISORIO: "Provvisorio DE",
      DEFINITIVO: "Definitivo DE",
      SCADENZA_DECRETO: "Scadenza decreto DE",
      DDMMYYYY: "dd/MM/yyyy DE",
      CERCA_ANAGRAFICA: "cerca anagrafica DE",
      MODALITA_DI_PAGAMENTO: "Modalità di pagamento DE",
      CURATORE: "Curatore DE",
      BONIFICO_BANCARIO: "Bonifico bancario DE",
      BONIFICO_DOMICILIATO_ALLA_POSTA: "Bonifico domiciliato alla posta DE",
      IBAN: "IBAN DE",
      CODICE_BIC_SWIFT: "Codice BIC/SWIFT DE",
      DELEGATO_DELL_INCASSO: "Delegato dell'incasso DE",
      ASSOCIAZIONI_DI_CATEGORIA: "Associazioni di categoria DE",
      DATA_INIZIO_ISCRIZIONE: "Data inizio iscrizione DE",
      DATA_FINE_ISCRIZIONE: "Data fine iscrizione DE",
      RITENUTA_DI_CATEGORIA_QUOTA_MENSILE:
        "Ritenuta di categoria (quota mensile) DE",
      DATA_DECORRENZA_DEL_DIRITTO_AL_PAGAMENTO:
        "Data decorrenza del diritto al pagamento DE",
      DATI_VERBALE: "Dati verbale DE",
      INSERISCI_I_DATI_E_AVVIA_LA_RICERCA:
        "Inserisci i dati e avvia la ricerca DE",
      CLOSE: "Close DE",
      COMUNICAZIONI: "Comunicazioni DE",
      INSERISCI: "Inserisci DE",

      ELENCO_DOCUMENTI_PER_FASCICOLO: "Elenco documenti per fascicolo DE",

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
      ALTRI_INDIRIZZI: "Altri indirizzi DE",
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

      ENTITA: "Entita DE",

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
      IMPORTO_RECUPERATO_PER_COMPENSAZIONE:
        "Importo recuperato per compensazione DE",
      NR_TRASFERIMENTO_FLUMO: "Nr. trasferimento Flumo DE",
      TOT_MESE: "Tot. mese DE",
      TOT_ANNO: "Tot. anno DE",
      DETTAGLIO: "Dettaglio DE",
      NR_MANDATO: "Nr. mandato DE",
      GENERA_COMUNICAZIONE: "genera comunicazione DE",
      INSERISCI_NUOVA_EVIDENZA: "inserisci nuova evidenza DE",
      ALTRE_PENSIONI: "Altre pensioni DE",

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
      POSIZIONE_ESPRO: "POSIZIONE ESPRO DE",
      STORICO_OPERAZIONI: "STORICO OPERAZIONI DE",

      INSERISCI_NUOVA_POSIZIONE: "Inserisci nuova posizione DE",
      INSERISCI_NUOVA_ANAGRAFICA: "Inserisci nuova anagrafica DE",

      INSERIMENTO_DATI_ANAGRAFICI: "Inserimento dati anagrafici DE",

      VISUALIZZA_DATI_ANAGRAFICI: "Visualizza dati anagrafici DE",

      GESTIONE_INDIRIZZI: "Gestione Indirizzi DE",

      // Label elementi menu
      NUOVA_DOMANDA: "Nuova domanda DE",
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

  $translateProvider.preferredLanguage("it");
}

angular.module("inciso").config(config);
