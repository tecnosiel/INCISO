/**
 * modalIndirizziCtrl - controller
 * Controller per la finestra modale di gestioneindirizzi
 *
 */
function modalIndirizziCtrl($scope, $rootScope, $http) {
    $scope.Tmp = {
      IndirizzoCodificato: {
        Nazione: "",
        Comune: "",
        Cap: "",
        Frazione: "",
        Via: ""
      },
      IndirizzoNonCodificato: {
        Localita: "",
        Cap: "",
        Maso: "",
        Via: "",
        IndirizzoCompleto: ""
      }
    };
  
    $scope.usaIndirizzo = function() {
      var xxx = $rootScope.datiAssistito.Indirizzi.find(item => {
        return item.UsaIndirizzo === "Si";
      });
      debugger;
      if (xxx) {
        $scope.Tmp.IndirizzoCodificato.Nazione = xxx.Nazione;
        $scope.Tmp.IndirizzoCodificato.Comune = xxx.Comune;
        $scope.Tmp.IndirizzoCodificato.Cap = xxx.Cap;
        $scope.Tmp.IndirizzoCodificato.Frazione = xxx.Frazione;
        $scope.Tmp.IndirizzoCodificato.Via = xxx.Via;
  
        $scope.Tmp.IndirizzoNonCodificato.Localita = xxx.Comune;
        $scope.Tmp.IndirizzoNonCodificato.Cap = xxx.Cap;
        $scope.Tmp.IndirizzoNonCodificato.Maso = "";
        $scope.Tmp.IndirizzoNonCodificato.Via = xxx.Via;
        $scope.Tmp.IndirizzoNonCodificato.IndirizzoCompleto = xxx.Via + " " + xxx.Comune + " " + xxx.Cap + " " + xxx.Nazione ;
  
        $scope.Tmp.NroCivico = xxx.Civico;
  
        swal("Indirizzo correttamente copiato! Per verificare osservare il Cap dell'indirizzo codificato e l'indirizzo completo del non codifcato. Non viene copiato correttamente perche solo i valori delle options sono ammessi nelle select! ");
  
      }
    };
  }
  
  