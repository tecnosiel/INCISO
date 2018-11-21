/**
 * evidenzeController - controller
 * Controller del componente
 *
 */

function evidenzeController($scope, DTOptionsBuilder) {
  this.dtOptionsTabElencoEvidenze = DTOptionsBuilder.newOptions()
    .withOption("pageLength", 5)
    .withOption("lengthChange", false);

  this.elencoEvidenze = [{
      Decorrenza: "01/01/2020",
      Scadenza: "01/01/2017",
      Tipo: "Prestazione da ripristinare – assegno di cura",
      Descrizione: "Prestazione da ripristinare, assistito non percepisce più l’assegno di cura",
      Posizione: "777232",
      Prestazione: "Pensione per invalidi civili parziali",
      Chiusura: null,
      Note: "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
    },
    {
      Decorrenza: "01/01/2022",
      Scadenza: "01/01/2018",
      Tipo: "Importo da recuperare",
      Descrizione: "Importo da recuperare",
      Posizione: "777232",
      Prestazione: "Pensione per invalidi civili parziali",
      Chiusura: null,
      Note: "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
    },
    {
      Decorrenza: "01/01/2022",
      Scadenza: "01/01/2018",
      Tipo: "Prestazione da ripristinare – casa di lungodegenza",
      Descrizione: "Prestazione da ripristinare, assistito non soggiorna più in una casa di lungodegenza",
      Posizione: "777232",
      Prestazione: "Pensione per invalidi civili parziali",
      Chiusura: null,
      Note: "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
    },
    {
      Decorrenza: "01/01/2022",
      Scadenza: "01/01/2018",
      Tipo: "Prestazione da revocare - soglia di reddito",
      Descrizione: "Prestazione da recocare per superamento soglia di reddito",
      Posizione: "777232",
      Prestazione: "Pensione per invalidi civili parziali",
      Chiusura: null,
      Note: "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
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
      Note: "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
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
      Note: "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
    }
  ];
}