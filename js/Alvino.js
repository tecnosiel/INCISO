//GETBYANAGFILTER REQUEST
//localhost:53061/api/Persona/GetByAnagFilter

// http: //GETBYANAGFILTER REQUEST BODY
x = {
  Cognome: "PIN",
  Nome: "PA",
  CodiceFiscale: null,
  DataNascita: null
}[
  //GETBYANAGFILTER RESPONSE

  {
    Cognome: "PINCO",
    Nome: "PALLINO",
    CodiceFiscale: "11",
    DataNascita: "2018-11-07T19:15:14",
    DataDecesso: null
  }
];

//GetDetailViewData REQUEST
//localhost:53061/api/Persona/GetDetailViewData?id=7

// http: //GetDetailViewData RESPONSE

xxx = {
  Id: 7, //ok
  Cognome: "PINCO", // ok
  Nome: "PALLINO", // ok
  CognomeAcquisito: "PINCO", //ok
  CodiceFiscale: "11", //ok
  Sesso: "M", //ok
  IdStatoCivile: 1, //ok
  DataNascita: "2018-11-07T19:15:14", //ok
  IdNazioneNascita: 1, //ok
  IdProvinciaNascita: 1, //ok
  IdComuneNascita: 1, //ok
  DataDecesso: null, //ok
  IdCittadinanza: 2, //ok
  IdPermessoSoggiorno: 0, // approfondire TipoPermesso DataRilascio ValidoFino
  TelefonoPrincipale: "1", //ok
  TelefonoSecondario: "1", //ok
  Email: "1", //ok
  Pec: "1", //ok
  NoteRecapiti: "1",
  Inizio: null,
  Fine: null,
  CDate: "2018-11-11T19:15:29",
  CUser: "ws",
  MDate: null,
  MUser: null,
  StatoCivile: {
    Id: 1,
    Descr_IT: "coni",
    Descr_DE: "coni",
    Inizio: null,
    Fine: null,
    CDate: "2018-11-26T19:02:14",
    CUser: "dfds",
    MDate: null,
    MUser: null,
    Stato: "A",
    Description: "coni"
  },
  Nazione: {
    Id: 1,
    Codice: "11",
    CodIstat: "1",
    CodISD: "1",
    CodMinistero: "1",
    CodCatastale: "1",
    Descr_IT: "1",
    Descr_DE: "1",
    Sigla: "1",
    IdIso: 1,
    CodIso: "1",
    CodIso3: "1",
    Continente: "1",
    IdTnz: 1,
    IbanLen: 1,
    IbanFmt: "1",
    Inizio: null,
    Fine: null,
    CDate: "2018-11-26T19:06:32",
    CUser: "1",
    MDate: null,
    MUser: null,
    Stato: "A",
    Description: "1"
  },
  Provincia: {
    Id: 1,
    CodIstat: "1",
    Abbrev: "1",
    Descr_IT: "1",
    Descr_DE: "1",
    IdNazione: 1,
    IdRegione: 1,
    Inizio: null,
    Fine: null,
    CDate: "2018-11-26T19:07:38",
    CUser: "1",
    MDate: null,
    MUser: null,
    CodDM86: "1",
    Nazione: {
      Id: 1,
      Codice: "11",
      CodIstat: "1",
      CodISD: "1",
      CodMinistero: "1",
      CodCatastale: "1",
      Descr_IT: "1",
      Descr_DE: "1",
      Sigla: "1",
      IdIso: 1,
      CodIso: "1",
      CodIso3: "1",
      Continente: "1",
      IdTnz: 1,
      IbanLen: 1,
      IbanFmt: "1",
      Inizio: null,
      Fine: null,
      CDate: "2018-11-26T19:06:32",
      CUser: "1",
      MDate: null,
      MUser: null,
      Stato: "A",
      Description: "1"
    },
    Regione: null,
    Stato: "A",
    Description: "1"
  },
  Comune: {
    Id: 1,
    CodIstat: "1",
    Descr_IT: "1",
    Descr_DE: "1",
    IdNazione: 1,
    IdRegione: 1,
    IdProvincia: 1,
    Inizio: null,
    Fine: null,
    CDate: "2018-11-26T19:08:12",
    CUser: "1",
    MDate: null,
    MUser: null,
    CodDM86: "1",
    Nazione: {
      Id: 1,
      Codice: "11",
      CodIstat: "1",
      CodISD: "1",
      CodMinistero: "1",
      CodCatastale: "1",
      Descr_IT: "1",
      Descr_DE: "1",
      Sigla: "1",
      IdIso: 1,
      CodIso: "1",
      CodIso3: "1",
      Continente: "1",
      IdTnz: 1,
      IbanLen: 1,
      IbanFmt: "1",
      Inizio: null,
      Fine: null,
      CDate: "2018-11-26T19:06:32",
      CUser: "1",
      MDate: null,
      MUser: null,
      Stato: "A",
      Description: "1"
    },
    Regione: null,
    Stato: "A",
    Description: "1"
  },
  Cittadinanza: {
    Id: 2,
    Descr_IT: "111",
    Descr_DE: "111",
    IdNazione: 1,
    MembroUE: "1",
    MembroDal: null,
    CDate: "2018-11-28T19:13:28",
    CUser: "1",
    MDate: null,
    MUser: null,
    Stato: "A",
    Description: "111"
  },
  PermessoSoggiorno: null,
  PersonaIndirizzi: [
    {
      Id: 5,
      IdPersona: 7,
      IdIndirizzo: 4,
      IdTipoIndirizzo: 1,
      Inizio: null,
      Fine: null,
      CDate: "2018-11-19T19:43:44",
      CUser: "11",
      MDate: null,
      MUser: null,
      Indirizzo: {
        Id: 4,
        IdNazionea: 1,
        IdProvincia: 1,
        IdComune: 1,
        IdFrazione: 1,
        IdStrada: 1,
        IdCap: 2,
        Localita: "1",
        CapNoCoded: "1",
        StradaNoCoded: "1",
        Civico: "1",
        IndirizzoCompleto: "1",
        CDate: "2018-11-09T19:41:54",
        CUser: "111",
        MDate: null,
        MUser: null,
        Nazione: {
          Id: 1,
          Codice: "11",
          CodIstat: "1",
          CodISD: "1",
          CodMinistero: "1",
          CodCatastale: "1",
          Descr_IT: "1",
          Descr_DE: "1",
          Sigla: "1",
          IdIso: 1,
          CodIso: "1",
          CodIso3: "1",
          Continente: "1",
          IdTnz: 1,
          IbanLen: 1,
          IbanFmt: "1",
          Inizio: null,
          Fine: null,
          CDate: "2018-11-26T19:06:32",
          CUser: "1",
          MDate: null,
          MUser: null,
          Stato: "A",
          Description: "1"
        },
        Provincia: {
          Id: 1,
          CodIstat: "1",
          Abbrev: "1",
          Descr_IT: "1",
          Descr_DE: "1",
          IdNazione: 1,
          IdRegione: 1,
          Inizio: null,
          Fine: null,
          CDate: "2018-11-26T19:07:38",
          CUser: "1",
          MDate: null,
          MUser: null,
          CodDM86: "1",
          Nazione: {
            Id: 1,
            Codice: "11",
            CodIstat: "1",
            CodISD: "1",
            CodMinistero: "1",
            CodCatastale: "1",
            Descr_IT: "1",
            Descr_DE: "1",
            Sigla: "1",
            IdIso: 1,
            CodIso: "1",
            CodIso3: "1",
            Continente: "1",
            IdTnz: 1,
            IbanLen: 1,
            IbanFmt: "1",
            Inizio: null,
            Fine: null,
            CDate: "2018-11-26T19:06:32",
            CUser: "1",
            MDate: null,
            MUser: null,
            Stato: "A",
            Description: "1"
          },
          Regione: null,
          Stato: "A",
          Description: "1"
        },
        Comune: {
          Id: 1,
          CodIstat: "1",
          Descr_IT: "1",
          Descr_DE: "1",
          IdNazione: 1,
          IdRegione: 1,
          IdProvincia: 1,
          Inizio: null,
          Fine: null,
          CDate: "2018-11-26T19:08:12",
          CUser: "1",
          MDate: null,
          MUser: null,
          CodDM86: "1",
          Nazione: {
            Id: 1,
            Codice: "11",
            CodIstat: "1",
            CodISD: "1",
            CodMinistero: "1",
            CodCatastale: "1",
            Descr_IT: "1",
            Descr_DE: "1",
            Sigla: "1",
            IdIso: 1,
            CodIso: "1",
            CodIso3: "1",
            Continente: "1",
            IdTnz: 1,
            IbanLen: 1,
            IbanFmt: "1",
            Inizio: null,
            Fine: null,
            CDate: "2018-11-26T19:06:32",
            CUser: "1",
            MDate: null,
            MUser: null,
            Stato: "A",
            Description: "1"
          },
          Regione: null,
          Stato: "A",
          Description: "1"
        },
        Frazione: null,
        Strada: {
          Id: 1,
          Codice: "1",
          Descr_IT: "1",
          Descr_DE: "1",
          IdComune: 1,
          Inizio: null,
          Fine: null,
          CDate: "2018-11-26T19:10:02",
          CUser: "111",
          MDate: null,
          MUser: null,
          Stato: "A",
          Description: "1"
        },
        Cap: {
          Id: 2,
          CapValue: "11",
          Principale: 1,
          IdComune: 1,
          IdFrazione: 1,
          CDate: "2018-11-07T19:41:24",
          CUser: "111",
          MDate: null,
          MUser: null,
          Stato: "A"
        },
        Stato: "A"
      },
      TipoIndirizzo: {
        Id: 1,
        Descr_IT: "1",
        Descr_DE: "1",
        Inizio: null,
        Fine: null,
        CDate: "2018-11-26T19:09:34",
        CUser: "a",
        MDate: null,
        MUser: null,
        Stato: "A",
        Description: "1"
      },
      Stato: "A"
    }
  ],
  PersonaRedditi: [ //ok
    {
      
      Anno: 2018, //ok
      EstremiPensione: "1234", //ok
      NessunReddito: 0, //ok
      IdPersona: 7, //ok
      Note: "test", //ok
      IdRedditoConiuge: 0,
      CDate: "2018-11-27T09:26:24",
      CUser: "dddd",
      MDate: null,
      MUser: null,
      Stato: "A"
    }
  ],
  Stato: "A"
};
