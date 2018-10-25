/**
 * visualizzaDomandaCtrl - controller
 * Controller per la gestione della visualizzazione delle Domande presentate dagli assistiti
 *
 */

function visualizzaDomandaCtrl(
  $scope,
  $stateParams,
  $uibModal,
  DTOptionsBuilder,
  DTColumnDefBuilder,
  $compile
) {
  $scope.datiAssistito = $stateParams.datiAssistito;
  $scope.domanda = $stateParams.domanda;

  if (!$scope.domanda) {
    $scope.domanda = {
      Posizione: "771723",
      Fascicolo: "236",
      StatoDomanda: "Concessa",

      TipoDomanda: "77",
      DataDomanda: "",
      EmailDomanda: "",
      NumeroProtocollo: "",
      DataProtocollo: "",
      Provenienza: "",
      DelegaPatronato: "",

      DomandePresentate: [
        {
          Posizione: "771723",
          Fascicolo: "236",
          StatoDomanda: "Concessa",
          // ----
          TipoDomanda: "77",
          DataDomanda: "",
          EmailDomanda: "",
          NumeroProtocollo: "",
          DataProtocollo: "",
          Provenienza: "",
          DelegaPatronato: "",

          Comunicazioni: "",
          ModalitaDiPagamento: "",
          AssociazioniDiCategoria: [
            {
              TipoAssociazione: "ANMIC",
              DataInizioIscrizione: "10/04/1986",
              DataFineIscrizione: "",
              QuotaMensile: "103.32"
            }
          ],
          Note: "",
          AziendaSanitaria: {
            NumeroProtocollo: "",
            DataProtocollo: "",
            PercentualeDiInvalidita: "",
            IndennitaDiAccompagnamento: "",
            PatologiaUditiva: "",
            RiduzioneDelVisus: "",
            NoteVerbale: "",
            DataDecorenzaDelDirittoAlPagamento: ""
          }
        },
        {
          Posizione: "123456",
          Fascicolo: "634",
          StatoDomanda: "Revocata"
          // ----
        },
        {
          Posizione: "345765",
          Fascicolo: "123",
          StatoDomanda: "Negata"
          // ----
        }
      ],

      LegaleRappresentante: {
        Nome: "Mario-1",
        Cognome: "Rossi-1",
        CodiceFiscale: "RSSMRO70A10F2052",
        NumeroDecreto: "",
        DataDecreto: "",
        TipoDecreto: "",
        ScadenzaDecreto: ""
      },
      AltroLegaleRappresentante: {
        Nome: "Mario-2",
        Cognome: "Rossi-2",
        CodiceFiscale: "RSSMRO70A10F2052",
        NumeroDecreto: "",
        DataDecreto: "",
        TipoDecreto: "",
        ScadenzaDecreto: ""
      },
      Curatore: {
        Nome: "Mario-3",
        Cognome: "Rossi-3",
        CodiceFiscale: "RSSMRO70A10F2052",
        NumeroDecreto: "",
        DataDecreto: "",
        TipoDecreto: "",
        ScadenzaDecreto: ""
      },

      Comunicazioni: "",
      ModalitaDiPagamento: "",
      AssociazioniDiCategoria: [
        {
          TipoAssociazione: "ANMIC",
          DataInizioIscrizione: "10/04/1986",
          DataFineIscrizione: "",
          QuotaMensile: "103.32"
        }
      ],
      Note: "",
      AziendaSanitaria: {
        NumeroProtocollo: "",
        DataProtocollo: "",
        PercentualeDiInvalidita: "",
        IndennitaDiAccompagnamento: "",
        PatologiaUditiva: "",
        RiduzioneDelVisus: "",
        NoteVerbale: "",
        DataDecorenzaDelDirittoAlPagamento: ""
      }
    };
  }

  if (!$scope.domanda.OperazioneInCorso) $scope.domanda.OperazioneInCorso = "";

  $scope.camillo =
    "<div>Stato: <label class='text-warning'>Revocata</label></div><div>Data revoca: <label>01/01/2006</label><br>Importo da recuperare: <label>549,00 €</label></div>";

  // gestione tabs
  $scope.tab = 1;
  $scope.setTab = function(newTab) {
    $scope.tab = newTab;
  };

  $scope.isSet = function(tabNum) {
    return $scope.tab === tabNum;
  };

  $scope.visualizzaLiquidazione = function($index) {
    alert("aaaaaaaaaaaaaaaaaaaa");
    // if ($index) {
    //   $scope.tmpRedditiAssistito = $scope.datiAssistito.Redditi[$index];
    // }else{
    //   $scope.tmpRedditiAssistito = null
    // }

    // Math.random() genera un numero casuale compreso fra 0 e 1,
    // quindi è sufficiente moltiplicarlo per il massimo numero che si vuole ottenere
    // e poi arrotondarne il risultato.

    $scope.sospendiDomanda = function() {
      alert("qqqqqqqqqqqqqqqqq");
    };

    this.randomMove = function() {
      let risultato = null;

      // clsPopup
      switch (Math.round(5 * Math.random())) {
        case 0:
          risultato = "clsPopup";
          break;
        case 1:
          risultato = "animated flipInX";
          break;
        case 2:
          risultato = "animated flipInY";
          break;
        case 3:
          risultato = "animated fadeInLeftBig";
          break;
        case 4:
          risultato = "animated fadeInRightBig";
          break;
        case 5:
          risultato = "animated rotateIn";
          break;
      }
      return risultato;
    };

    self.modalInstance = $uibModal.open({
      templateUrl: "./../views/modal_visualizza_liquidazione.html",
      controller: "modalVisualizzaLiquidazioneCtrl",
      size: "lg",
      scope: $scope,
      windowClass: "animated fadeInRightBig"
    });
  };

  //--------- prestazioni start

  $scope.totaleDellePrestazioniLiquidatePerAnno = [
    {
      Anno: "2014",
      TotalePrestazioniLiquidate: "15150.55",
      Dettagli: [
        { NomePrestazione: "aaaaaaaaaaaaa", Totale: 111111 },
        { NomePrestazione: "bbbbbbbbbbbaaaa", Totale: 22222 },
        { NomePrestazione: "bbbbbbbbbbbaaaa", Totale: 22222 },
        { NomePrestazione: "bbbbbbbbbbbaaaa", Totale: 22222 },
        { NomePrestazione: "bbbbbbbbbbbaaaa", Totale: 22222 }
      ]
    },
    {
      Anno: "2015",
      TotalePrestazioniLiquidate: "17999.55",
      Dettagli: [
        { NomePrestazione: "Nome prestazione 1", Totale: 111111 },
        { NomePrestazione: "Nome prestazione 2", Totale: 222222 },
        { NomePrestazione: "Nome prestazione 3", Totale: 333333 }
      ]
    },
    {
      Anno: "2016",
      TotalePrestazioniLiquidate: "13999.55",
      Dettagli: [
        {
          NomePrestazione:
            "Assegno mensile per invalidi civili parziali minorenni",
          Totale: 111111
        },
        {
          NomePrestazione:
            "Indennità di accompagnamento per invalidi civili totalmente inabili",
          Totale: 22222
        },
        { NomePrestazione: "Indennità di prova", Totale: 22222 }
      ]
    }
  ];

  $scope.elencoPrestazioni = [
    // primo
    {
      descrizionePrestazione:
        "Assegno mensile per invalidi civili parziali minorenni (descrizione prestazione)",

      stato: "Revocata",
      dataRevoca: "01/01/1111",
      motivoRevoca: "fkajsdfkjdsòlk",
      importoDaRecuperareRevoca: "12000.00",
      noteRevoca:"Note relative alla revoca....... Questi sono dati finti caricati dal controller, sempre visibili per comodità di debug",

      dataNegazione: "",
      motivoNegazione: "",
      dataFineNegazione: "",
      noteNegazione:"Note relative alla negazione...... Questi sono dati finti caricati dal controller, perciò sempre visibili x comodità di debug",

      importiSpettanti: [
        {
          Anno: 2014,
          TotaleSpettante: 111.0,
          TotaleLiquidato: 111111.0
        },
        {
          Anno: 2015,
          TotaleSpettante: 222.0,
          TotaleLiquidato: 222222.0
        },
        {
          Anno: 2016,
          TotaleSpettante: 333.0,
          TotaleLiquidato: 333333.0
        }
      ],
      elencoEvidenze: [
        {
          Decorrenza: "01/01/2020",
          Scadenza: "01/01/2017",
          Tipo: "Prestazione da ripristinare – assegno di cura",
          Descrizione:
            "Prestazione da ripristinare, assistito non percepisce più l’assegno di cura",
          Posizione: "777232",
          Prestazione: "Pensione per invalidi civili parziali",
          Chiusura: null,
          Note:
            "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
        },
        {
          Decorrenza: "01/01/2022",
          Scadenza: "01/01/2018",
          Tipo: "Importo da recuperare",
          Descrizione: "Importo da recuperare",
          Posizione: "777232",
          Prestazione: "Pensione per invalidi civili parziali",
          Chiusura: null,
          Note:
            "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
        },
        {
          Decorrenza: "01/01/2022",
          Scadenza: "01/01/2018",
          Tipo: "Prestazione da ripristinare – casa di lungodegenza",
          Descrizione:
            "Prestazione da ripristinare, assistito non soggiorna più in una casa di lungodegenza",
          Posizione: "777232",
          Prestazione: "Pensione per invalidi civili parziali",
          Chiusura: null,
          Note:
            "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
        },
        {
          Decorrenza: "01/01/2022",
          Scadenza: "01/01/2018",
          Tipo: "Prestazione da revocare - soglia di reddito",
          Descrizione:
            "Prestazione da recocare per superamento soglia di reddito",
          Posizione: "777232",
          Prestazione: "Pensione per invalidi civili parziali",
          Chiusura: null,
          Note:
            "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
        },
        {
          Decorrenza: "01/01/2022",
          Scadenza: "01/01/2018",
          Tipo: "Recupero da annullare",
          Descrizione: "Recupero già liquidato da annullare – fare riaccredito",
          Posizione: "777232",
          Prestazione: "Pensione per invalidi civili parziali",
          Chiusura: {
            Utente: "Marco Formigoni",
            NoteDiChiusura: "no anomalie",
            LetteraInviata: "no"
          },
          Note:
            "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
        },
        {
          Decorrenza: "01/01/2022",
          Scadenza: "01/01/2018",
          Tipo: "Importo da recuperare",
          Descrizione: "Importo da recuperare",
          Posizione: "777232",
          Prestazione: "Pensione per invalidi civili parziali",
          Chiusura: {
            Utente: "Rino Grandi",
            NoteDiChiusura: "-",
            LetteraInviata: "sì"
          },
          Note:
            "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
        }
      ],
      elencoDatiRelativiAlReddito: [
        {
          Anno: 2016,
          Soglia: 4805.19,
          Reddito: 3500.0,
          EsitoReddito: "Congruo",
          SogliaIncremento: 14135.55,
          EsitoSoglia: "Superato",
          ImportoAnnualeDiTutteLePensioni: null,
          ImportoAnnualeDellAssegnoIntegrativoCiechi: null
        },
        {
          Anno: 2015,
          Soglia: 4805.19,
          Reddito: 3500.0,
          EsitoReddito: "Congruo",
          SogliaIncremento: 14135.55,
          EsitoSoglia: "Superato",
          ImportoAnnualeDiTutteLePensioni: null,
          ImportoAnnualeDellAssegnoIntegrativoCiechi: null
        },
        {
          Anno: 2014,
          Soglia: 4805.19,
          Reddito: 3500.0,
          EsitoReddito: "Congruo",
          SogliaIncremento: 8304.79,
          EsitoSoglia: "Congruo",
          ImportoAnnualeDiTutteLePensioni: 5220.0,
          ImportoAnnualeDellAssegnoIntegrativoCiechi: 1389.72
        },
        {
          Anno: 2013,
          Soglia: 4805.19,
          Reddito: 3500.0,
          EsitoReddito: "Congruo",
          SogliaIncremento: 8304.79,
          EsitoSoglia: "Congruo",
          ImportoAnnualeDiTutteLePensioni: 5220.0,
          ImportoAnnualeDellAssegnoIntegrativoCiechi: 1389.72
        }
      ],
      elencoSospensioni: [
        {
          Data: "01/01/2021",
          Motivo: "Soggiorno presso struttura di lungodegenza-11111",
          Scadenza: "01/03/2020",
          Fine: "01/03/2020",
          Note:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          Data: "01/01/2020",
          Motivo: "Percepisce altre pensioni-22222",
          Scadenza: "01/01/2020",
          Fine: "01/01/2020",
          Note: "-"
        },
        {
          Data: "01/01/2020",
          Motivo: "Percepisce assegno di cura-111111",
          Scadenza: "01/01/2020",
          Fine: "01/01/2020",
          Note:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          Data: "01/01/2020",
          Motivo: "Percepisce assegno di cura-55555",
          Scadenza: "01/01/2020",
          Fine: "01/01/2020",
          Note:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      ]
    },
    // secondo
    {
      descrizionePrestazione:
        "Indennità di accompagnamento per invalidi civili totalmente inabili",

      stato: "Negazione",
      dataRevoca: "01/01/1111",
      motivoRevoca: "fkajsdfkjdsòlk",
      importoDaRecuperareRevoca: "12000.00",
      noteRevoca:"Note relative alla revoca....... Questi sono dati finti caricati dal controller, sempre visibili per comodità di debug",

      dataNegazione: "02/02/2012",
      motivoNegazione: "non saprei perche è stata negata.",
      dataFineNegazione: "02/02/2012",
      noteNegazione:"Note relative alla negazione...... Questi sono dati finti caricati dal controller, perciò sempre visibili x comodità di debug",

      importiSpettanti: [
        {
          Anno: 2014,
          TotaleSpettante: 22111.0,
          TotaleLiquidato: 11111.0
        },
        {
          Anno: 2015,
          TotaleSpettante: 212121.0,
          TotaleLiquidato: 212121.0
        },
        {
          Anno: 2016,
          TotaleSpettante: 1234.0,
          TotaleLiquidato: 1234.0
        }
      ],
      elencoEvidenze: [
        {
          Decorrenza: "01/01/2020",
          Scadenza: "01/01/2017",
          Tipo: "Prestazione da ripristinare – assegno di cura",
          Descrizione:
            "Prestazione da ripristinare, assistito non percepisce più l’assegno di cura",
          Posizione: "777232",
          Prestazione: "Pensione per invalidi civili parziali",
          Chiusura: null,
          Note:
            "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
        },
        {
          Decorrenza: "01/01/2022",
          Scadenza: "01/01/2018",
          Tipo: "Importo da recuperare",
          Descrizione: "Importo da recuperare",
          Posizione: "777232",
          Prestazione: "Pensione per invalidi civili parziali",
          Chiusura: null,
          Note:
            "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
        },
        {
          Decorrenza: "01/01/2022",
          Scadenza: "01/01/2018",
          Tipo: "Prestazione da ripristinare – casa di lungodegenza",
          Descrizione:
            "Prestazione da ripristinare, assistito non soggiorna più in una casa di lungodegenza",
          Posizione: "777232",
          Prestazione: "Pensione per invalidi civili parziali",
          Chiusura: null,
          Note:
            "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
        },
        {
          Decorrenza: "01/01/2022",
          Scadenza: "01/01/2018",
          Tipo: "Prestazione da revocare - soglia di reddito",
          Descrizione:
            "Prestazione da recocare per superamento soglia di reddito",
          Posizione: "777232",
          Prestazione: "Pensione per invalidi civili parziali",
          Chiusura: null,
          Note:
            "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
        },
        {
          Decorrenza: "01/01/2022",
          Scadenza: "01/01/2018",
          Tipo: "Recupero da annullare",
          Descrizione: "Recupero già liquidato da annullare – fare riaccredito",
          Posizione: "777232",
          Prestazione: "Pensione per invalidi civili parziali",
          Chiusura: {
            Utente: "Marco Formigoni",
            NoteDiChiusura: "no anomalie",
            LetteraInviata: "no"
          },
          Note:
            "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
        },
        {
          Decorrenza: "01/01/2022",
          Scadenza: "01/01/2018",
          Tipo: "Importo da recuperare",
          Descrizione: "Importo da recuperare",
          Posizione: "777232",
          Prestazione: "Pensione per invalidi civili parziali",
          Chiusura: {
            Utente: "Rino Grandi",
            NoteDiChiusura: "-",
            LetteraInviata: "sì"
          },
          Note:
            "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
        }
      ],
      elencoDatiRelativiAlReddito: [
        {
          Anno: 2016,
          Soglia: 4805.19,
          Reddito: 3500.0,
          EsitoReddito: "Congruo",
          SogliaIncremento: 14135.55,
          EsitoSoglia: "Superato",
          ImportoAnnualeDiTutteLePensioni: null,
          ImportoAnnualeDellAssegnoIntegrativoCiechi: null
        },
        {
          Anno: 2015,
          Soglia: 4805.19,
          Reddito: 3500.0,
          EsitoReddito: "Congruo",
          SogliaIncremento: 14135.55,
          EsitoSoglia: "Superato",
          ImportoAnnualeDiTutteLePensioni: null,
          ImportoAnnualeDellAssegnoIntegrativoCiechi: null
        },
        {
          Anno: 2014,
          Soglia: 4805.19,
          Reddito: 3500.0,
          EsitoReddito: "Congruo",
          SogliaIncremento: 8304.79,
          EsitoSoglia: "Congruo",
          ImportoAnnualeDiTutteLePensioni: 5220.0,
          ImportoAnnualeDellAssegnoIntegrativoCiechi: 1389.72
        },
        {
          Anno: 2013,
          Soglia: 4805.19,
          Reddito: 3500.0,
          EsitoReddito: "Congruo",
          SogliaIncremento: 8304.79,
          EsitoSoglia: "Congruo",
          ImportoAnnualeDiTutteLePensioni: 5220.0,
          ImportoAnnualeDellAssegnoIntegrativoCiechi: 1389.72
        }
      ],
      elencoSospensioni: [
        {
          Data: "01/01/2021",
          Motivo: "Soggiorno presso struttura di lungodegenza-11111",
          Scadenza: "01/03/2020",
          Fine: "01/03/2020",
          Note:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          Data: "01/01/2020",
          Motivo: "Percepisce altre pensioni-22222",
          Scadenza: "01/01/2020",
          Fine: "01/01/2020",
          Note: "-"
        },
        {
          Data: "01/01/2020",
          Motivo: "Percepisce assegno di cura-111111",
          Scadenza: "01/01/2020",
          Fine: "01/01/2020",
          Note:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          Data: "01/01/2020",
          Motivo: "Percepisce assegno di cura-55555",
          Scadenza: "01/01/2020",
          Fine: "01/01/2020",
          Note:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      ]
    },
    // terzo
    {
      descrizionePrestazione:
        "Prova Prova Prova possiamo inserire quante prestazioni vogliamo",

      stato: "Revocata",
      dataRevoca: "01/01/1111",
      motivoRevoca: "fkajsdfkjdsòlk",
      importoDaRecuperareRevoca: "12000.00",
      noteRevoca:"Note relative alla revoca....... Questi sono dati finti caricati dal controller, sempre visibili per comodità di debug",

      dataNegazione: "",
      motivoNegazione: "",
      dataFineNegazione: "",
      noteNegazione:"Note relative alla negazione...... Questi sono dati finti caricati dal controller, perciò sempre visibili x comodità di debug",

      importiSpettanti: [
        {
          Anno: 2014,
          TotaleSpettante: 221.0,
          TotaleLiquidato: 111.0
        },
        {
          Anno: 2015,
          TotaleSpettante: 211.0,
          TotaleLiquidato: 211.0
        },
        {
          Anno: 2016,
          TotaleSpettante: 12.0,
          TotaleLiquidato: 12.0
        }
      ],

      elencoEvidenze: [
        {
          Decorrenza: "01/01/2020",
          Scadenza: "01/01/2017",
          Tipo: "Prestazione da ripristinare – assegno di cura",
          Descrizione:
            "Prestazione da ripristinare, assistito non percepisce più l’assegno di cura",
          Posizione: "777232",
          Prestazione: "Pensione per invalidi civili parziali",
          Chiusura: null,
          Note:
            "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
        },
        {
          Decorrenza: "01/01/2022",
          Scadenza: "01/01/2018",
          Tipo: "Importo da recuperare",
          Descrizione: "Importo da recuperare",
          Posizione: "777232",
          Prestazione: "Pensione per invalidi civili parziali",
          Chiusura: null,
          Note:
            "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
        },
        {
          Decorrenza: "01/01/2022",
          Scadenza: "01/01/2018",
          Tipo: "Prestazione da ripristinare – casa di lungodegenza",
          Descrizione:
            "Prestazione da ripristinare, assistito non soggiorna più in una casa di lungodegenza",
          Posizione: "777232",
          Prestazione: "Pensione per invalidi civili parziali",
          Chiusura: null,
          Note:
            "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
        },
        {
          Decorrenza: "01/01/2022",
          Scadenza: "01/01/2018",
          Tipo: "Prestazione da revocare - soglia di reddito",
          Descrizione:
            "Prestazione da recocare per superamento soglia di reddito",
          Posizione: "777232",
          Prestazione: "Pensione per invalidi civili parziali",
          Chiusura: null,
          Note:
            "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
        },
        {
          Decorrenza: "01/01/2022",
          Scadenza: "01/01/2018",
          Tipo: "Recupero da annullare",
          Descrizione: "Recupero già liquidato da annullare – fare riaccredito",
          Posizione: "777232",
          Prestazione: "Pensione per invalidi civili parziali",
          Chiusura: {
            Utente: "Marco Formigoni",
            NoteDiChiusura: "no anomalie",
            LetteraInviata: "no"
          },
          Note:
            "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
        },
        {
          Decorrenza: "01/01/2022",
          Scadenza: "01/01/2018",
          Tipo: "Importo da recuperare",
          Descrizione: "Importo da recuperare",
          Posizione: "777232",
          Prestazione: "Pensione per invalidi civili parziali",
          Chiusura: {
            Utente: "Rino Grandi",
            NoteDiChiusura: "-",
            LetteraInviata: "sì"
          },
          Note:
            "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
        }
      ],
      elencoDatiRelativiAlReddito: [
        {
          Anno: 2016,
          Soglia: 1111.19,
          Reddito: 11111.0,
          EsitoReddito: "Congruo",
          SogliaIncremento: 1111111.55,
          EsitoSoglia: "Superato",
          ImportoAnnualeDiTutteLePensioni: null,
          ImportoAnnualeDellAssegnoIntegrativoCiechi: null
        },
        {
          Anno: 2015,
          Soglia: 22222.19,
          Reddito: 22222.0,
          EsitoReddito: "Congruo",
          SogliaIncremento: 2222222.55,
          EsitoSoglia: "Superato",
          ImportoAnnualeDiTutteLePensioni: null,
          ImportoAnnualeDellAssegnoIntegrativoCiechi: null
        },
        {
          Anno: 2014,
          Soglia: 3333.19,
          Reddito: 3333.0,
          EsitoReddito: "Congruo",
          SogliaIncremento: 33333.79,
          EsitoSoglia: "Congruo",
          ImportoAnnualeDiTutteLePensioni: 3333.0,
          ImportoAnnualeDellAssegnoIntegrativoCiechi: 3333.72
        },
        {
          Anno: 2013,
          Soglia: 44444.19,
          Reddito: 44444.0,
          EsitoReddito: "Congruo",
          SogliaIncremento: 44444.79,
          EsitoSoglia: "Congruo",
          ImportoAnnualeDiTutteLePensioni: 4444.0,
          ImportoAnnualeDellAssegnoIntegrativoCiechi: 4444.72
        }
      ],
      elencoSospensioni: [
        {
          Data: "01/01/2021",
          Motivo: "Soggiorno presso struttura di lungodegenza-11111",
          Scadenza: "01/03/2020",
          Fine: "01/03/2020",
          Note:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          Data: "01/01/2020",
          Motivo: "Percepisce altre pensioni-22222",
          Scadenza: "01/01/2020",
          Fine: "01/01/2020",
          Note: "-"
        },
        {
          Data: "01/01/2020",
          Motivo: "Percepisce assegno di cura-111111",
          Scadenza: "01/01/2020",
          Fine: "01/01/2020",
          Note:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          Data: "01/01/2020",
          Motivo: "Percepisce assegno di cura-55555",
          Scadenza: "01/01/2020",
          Fine: "01/01/2020",
          Note:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      ]
    }
  ];

  $scope.dtOptionsTabPrestazioniLiquidate = DTOptionsBuilder.newOptions()
    .withOption("order", [1, "desc"])
    .withOption("pageLength", 5)
    .withOption("lengthChange", false);

  $scope.dtColumnTabPrestazioniLiquidate = [
    DTColumnDefBuilder.newColumnDef(0).notSortable()
  ];

  $scope.vm = {};
  $scope.vm.dtInstance = {};

  $scope.detailInfoPrestazioniLiquidate = function(dettagliJson, event, url) {
    var scope = $scope.$new(true);
    scope.dettagliJson = dettagliJson;
    scope.url = url;

    var link = angular.element(event.currentTarget),
      icon = link.find(".fa"),
      tr = link.parent().parent(),
      table = $scope.vm.dtInstance.DataTable,
      row = table.row(tr);

    if (row.child.isShown()) {
      // This row is already open - close it
      icon.removeClass("fa-chevron-up").addClass("fa-chevron-down");
      row.child.hide();
      tr.removeClass("shown");
    } else {
      // Open this row
      icon.removeClass("fa-chevron-down").addClass("fa-chevron-up");
      row
        .child(
          $compile(
            "<dettaglio-prestazioni parameter = 'dettagliJson' url = '" +
              scope.url +
              "' ></dettaglio-prestazioni>"
          )(scope)
        )
        .show();

      tr.addClass("shown");
    }
  };

  //--------- prestazioni end

  $scope.modificaDomanda = function() {
    debugger;
    $scope.domanda.OperazioneInCorso = "MODIFICA_DOMANDA";
    swal({
      title: "Desideri modificare la domanda?",
      // text:
      //   "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(function(willDelete) {
      if (willDelete) {
        $scope.$state.go("domande.domanda");
      } else {
      }
    });
  };

  self = this;

  $scope.showModal = function(win) {
    this.randomMove = function() {
      let risultato = null;

      // clsPopup
      switch (Math.round(5 * Math.random())) {
        case 0:
          risultato = "clsPopup";
          break;
        case 1:
          risultato = "animated flipInX";
          break;
        case 2:
          risultato = "animated flipInY";
          break;
        case 3:
          risultato = "animated fadeInLeftBig";
          break;
        case 4:
          risultato = "animated fadeInRightBig";
          break;
        case 5:
          risultato = "animated rotateIn";
          break;
      }

      return risultato;
    };

    // http://www.marcorpsa.com/ee/t1891.html

    self.modalInstance = $uibModal.open({
      templateUrl: win.template,
      controller: win.controller,
      size: win.size,
      scope: $scope,
      windowClass: "animated fadeInRightBig"
    });
  };

  // ------------------------
  $scope.sospendiDomanda = function() {
    $scope.domanda.StatoDomanda = "Sospesa";
    var self = this;
    swal({
      title: "Desideri sospendere la domanda?",
      // text:
      //   "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(function(willDelete) {
      if (willDelete) {
        self.showModal({
          template: "./../views/modal_sospensione_domanda.html",
          controller: "modalSospensioneDomandaCtrl",
          size: "lg"
        });
        // $scope.domanda.StatoDomanda = "Sospesa";
        // $scope.$apply();
        // swal("La domanda è stata sospesa!", {
        //   icon: "success"
        // });
      } else {
        swal("La domanda non è stata sospesa!");
      }
    });
  };
  // ------------------------
  $scope.revocaDomanda = function(cType) {
    $scope.Type = cType;

    $scope.domanda.StatoDomanda = "Revocata";

    var self = this;

    swal({
      title: "Desideri revocare la domanda?",
      // text:
      //   "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(function(willDelete) {
      if (willDelete) {
        self.showModal({
          template: "./../views/modal_revoca_domanda.html",
          controller: "modalRevocaDomandaCtrl",
          size: "lg"
        });
        // $scope.domanda.StatoDomanda = "Revocata";
        // $scope.$apply();
        // swal("La domanda è stata revocata!", {
        //   icon: "success"
        // });
      } else {
        swal("La domanda non è stata revocata!");
      }
    });
  };

  $scope.negaDomanda = function(cType) {
    $scope.Type = cType;

    $scope.domanda.StatoDomanda = "Negata";

    var self = this;

    swal({
      title: "Desideri negare la domanda?",
      // text:
      //   "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(function(willDelete) {
      if (willDelete) {
        self.showModal({
          template: "./../views/modal_negazione_domanda.html",
          controller: "modalNegazioneDomandaCtrl",
          size: "lg"
        });

        // $scope.domanda.StatoDomanda = "Negata";
        // $scope.$apply();
        // swal("La domanda è stata negata!", {
        //   icon: "success"
        // });
      } else {
        swal("La domanda non è stata modificata!");
      }
    });
  };
  $scope.inserisciNuovoVerbale = function() {
    swal("Inserimento verbale!", "...individuare procedura da chiamare!");
  };
  $scope.inserisciNuovaEvidenza = function() {
    swal("Inserimento evidenza!", "...individuare procedura da chiamare!");
  };

  $scope.creaSospensione = function() {
    swal(
      "Creazione nuova sospensione!",
      "...individuare procedura da chiamare!"
    );
  };
  $scope.cancellaDomanda = function() {
    swal({
      title: "Desideri cancellare la domanda?",
      text: "Ricorda: potrà sempre essere recuperata!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(function(willDelete) {
      if (willDelete) {
        $scope.domanda.StatoDomanda = "Cancellata";
        $scope.$apply();
        swal("La domanda è stata cancellata!", {
          icon: "success"
        });
      } else {
        swal("La domanda non è stata modificata!");
      }
    });
  };
}

/**
 * Collega il controller al modulo inciso
 **/
angular
  .module("inciso")
  .controller("visualizzaDomandaCtrl", visualizzaDomandaCtrl);
