// (function() {

function setupFakeBackend($httpBackend) {
  // i file statici verranno serviti senza elaborazione
  $httpBackend.whenGET(/^\w+.*/).passThrough();
  // le views verranno servite senza elaborazione. Se i elimina la riga si hanno interferenze con gli stati di UI-ROUTER
  $httpBackend.whenGET(/views\/.*/).passThrough();

  // fake authenticate api end point
  $httpBackend
    .whenPOST("/api/authenticate")
    .respond(function(method, url, data) {
      debugger;
      // get parameters from post request
      var params = angular.fromJson(data);

      // check user credentials and return fake jwt token if valid

      if (params.username === "camillo" && params.password === "camillo") {
        return [
          200,
          {
            immagineUtente:"profile1",
            nome: "Camillo",
            cognome: "Alfano",
            ruolo: "Consulente",
            token: "token-di-Camillo"
          },
          {}
        ];
      } else if (params.username === "mario" && params.password === "mario") {
        return [
          200,
          {
            immagineUtente:"profile2",
            nome: "Mario",
            cognome: "Petta",
            ruolo: "Capo Progetto",
            token: "token-di-Mario"
          },
          {}
        ];
      } else if (params.username === "danilo" && params.password === "danilo") {
        return [
          200,
          {
            immagineUtente:"profile3",
            nome: "Danilo",
            cognome: "Romano",
            ruolo: "Analista",
            token: "token-di-Danilo"
          },
          {}
        ];
      } else {
        return [200, {}, {}];
      }
    });
}
// })();
