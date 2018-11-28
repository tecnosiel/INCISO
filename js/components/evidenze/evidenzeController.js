/**
 * evidenzeController - controller
 * Controller del componente
 *
 */

function evidenzeController($scope, $state, anagrafeServices, evidenzeServices, $uibModal, DTOptionsBuilder) {
  this.dtOptionsTabElencoEvidenze = DTOptionsBuilder.newOptions()
    .withOption("pageLength", 5)
    .withOption("lengthChange", false);

  this.inserisciEvidenzaComponent = function (item) {
    if (item) {

      $scope.modale = false;

      anagrafeServices.findCodFis(item.CodiceFiscale, result => {
        evidenzeServices.findCodFis(item.CodiceFiscale, result2 => {
          $state.go("evidenze.visualizza_evidenza", {
            datiAssistito: result,
            evidenza: result2
          });
        });
      });



    } else {

      $scope.modale = true;

      // http://www.marcorpsa.com/ee/t1891.html

      $scope.modalInstance = $uibModal.open({
        templateUrl: "./../views/visualizza_evidenza.html",
        controller: "evidenzeCtrl",
        size: "lg",
        scope: $scope,
        windowClass: "animated fadeInRightBig"
      });
    }

  }

  $scope.cancellaEvidenza = function () {
    swal({
      title: "Desideri cancellare l'evidenza?",
      text: "Ricorda: potrà sempre essere recuperata!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(function (willDelete) {
      if (willDelete) {
        swal("L' evidenza è stata cancellata!", {
          icon: "success"
        }).then(function () {
          $state.go("evidenze.ricerca_evidenza", {
            datiAssistito: $scope.datiAssistito
          });
        });
      } else {
        swal("L' evidenza non è stata modificata!");
      }
    });
  };



  this.elencoEvidenze = [{
      CodiceFiscale: "RSSMRA70A41F2052",
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
      CodiceFiscale: "RSSMRA70A41F2052",
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
      CodiceFiscale: "RSSMRA70A41F2052",
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
      CodiceFiscale: "RSSMRA70A41F2052",
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
      CodiceFiscale: "RSSMRA70A41F2052",
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
      CodiceFiscale: "RSSMRA70A41F2052",
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