function httpServices() {
  var service = {};
  service.readStructure = readStructure;
  service.fromDb = fromDb;
  service.jsonFromDb = jsonFromDb;
  service.toDb = toDb;
  service.convDateAmgGma = convDateAmgGma;
  service.convDateGmaAmg = convDateGmaAmg;
  service.today = today;
  service.yyyymmdd = yyyymmdd;
  return service;
}

//------------------------------------------
// FUNZIONI SULLE STRUCTURE
//------------------------------------------
function readStructure(cStructure) {
  switch (cStructure) {
    case "assistito":
      return assistitoStructure();
    case "posizione":
      return posizioneStructure();
    case "anagrafe":
      return anagrafeStructure();
    case "eredita":
      return ereditaStructure();
    case "eredi":
      return erediStructure();
    case "redditi":
      return redditiStructure();
    case "pensioni":
      return pensioniStructure();
    case "indirizzi":
      return indirizziStructure();
    case "associazioni":
      return associazioniStructure();
    case "liquidazioni":
      return liquidazioniStructure();
    case "importiriaccreditati":
      return importiriaccreditatiStructure();
    case "importidarecuperare":
      return importidarecuperareStructure();
    case "ritenutedicategoriarecuperate":
      return ritenutedicategoriarecuperateStructure();
    case "totdarecuperare":
      return totDaRecuperareStructure();
    case "nrtrasferimentoflumo":
      return nrtrasferimentoflumoStructure();
    case "dettagliassistito":
      return dettagliassistitoStructure();
    case "dettagliconiuge":
      return dettagliconiugeStructure();

    default:
      swal("Manca definizione Struttura " + cStructure, "Bisogna ancora implementarla", "error")
  }
}

function fromDb(objDb, cStructure) {

  var objMem = {};
  var objStru = this.readStructure(cStructure.trim());

  for (let i in objDb) {
    objMem[i] = jsonFromDb(objDb[i], objStru)
  };
  return objMem;
};


function jsonFromDb(jsonDb, objStru) {

  if (typeof objStru === 'string')
    objStru = this.readStructure(objStru);

  let jsonResult = {};

  for (let j in objStru) {

    // Lettura j colonna Db
    let cFormat = objStru[j].Tipo.toUpperCase();
    let cDbName = objStru[j].DbName;
    let cMemName = objStru[j].MemName;
    let cStruttura = objStru[j].Struttura;

    // Lettura dato da trasferire
    // let DbContent = jsonDb[cDbName]
    let DbContent = ""
    if (jsonDb) {
      if (jsonDb || jsonDb.hasOwnProperty(cDbName)) {
        DbContent = jsonDb[cDbName]
      }
    }
    // Scrittura dato da trasferire in funzione del tipo
    switch (cFormat) {

      case "JSON":
        jsonResult[cMemName] = jsonFromDb(DbContent, this.readStructure(cStruttura)) //arrayJsonFromDb(DbContent, cStruttura )
        break;
      case "ARRAY-JSON":
        //array-json
        jsonResult[cMemName] = fromDb(DbContent, cStruttura) //arrayJsonFromDb(DbContent, cStruttura )
        break;
      case "K":
        //key
        jsonResult[cMemName] = DbContent;
        break;
      case "C":
        //stringa
        jsonResult[cMemName] = DbContent;
        break;
      case "K":
        //key
        jsonResult[cMemName] = DbContent * 1;
        break;
      case "B":
        //boolean
        if (DbContent === "1") {
          jsonResult[cMemName] = true
        } else {
          jsonResult[cMemName] = false
        }
        break;
      case "I":
        //Intero
        jsonResult[cMemName] = DbContent * 1;
        break;
      case "N":
        //numerico
        jsonResult[cMemName] = DbContent * 1;
        break;
      case "D":
        //data
        jsonResult[cMemName] = DbContent;
        break;
      case "%":
        //percentuale
        if (typeof (DbContent) != 'undefined' && DbContent != null && DbContent != "") {
          let perc = (DbContent / 100).toFixed(2);
          jsonResult[cMemName] = (perc * 1).toLocaleString('de-DE', {
            minimumFractionDigits: 2
          });
        } else {
          jsonResult[cMemName] = "0.00";
        }
        break;
      default:
        jsonResult[cMemName] = DbContent;
    }
  }

  return jsonResult
}

function toDb(objMem, cStructure) {

  let objDb = {};
  let objStru = this.readStructure(cStructure.trim());

  for (let i in objMem) {

    objDb[i] = {};

    for (let j in objStru) {

      // Lettura j colonna Db
      let cFormat = objStru[j].Tipo.toUpperCase();
      let cDbName = objStru[j].DbName;
      let cMemName = objStru[j].MemName;
      let cNote = objStru[j].Note;

      // Lettura dato da trasferire
      let DbContent = objMem[i][cMemName]

      // Scrittura dato da trasferire in funzione del tipo
      switch (cFormat.substr(0, 1)) {
        case "C":
          //stringa
          objDb[i][cDbName] = DbContent;
          break;
        case "K":
          //key
          objDb[i][cDbName] = DbContent * 1;
          break;
        case "B":
          //boolean
          if (DbContent === "1") {
            objDb[i][cDbName] = true
          } else {
            objDb[i][cDbName] = false
          }
          break;
        case "I":
          //Intero
          objDb[i][cDbName] = DbContent * 1;
          break;
        case "N":
          //numerico
          objDb[i][cDbName] = DbContent * 1;
          break;
        case "D":
          //data
          objDb[i][cDbName] = DbContent;
          break;
        case "%":
          //percentuale
          if (typeof (DbContent) != 'undefined' && DbContent != null && DbContent != "") {
            let perc = (DbContent / 100).toFixed(2);
            objDb[i][cDbName] = (perc * 1).toLocaleString('de-DE', {
              minimumFractionDigits: 2
            });
          } else {
            objDb[i][cDbName] = "0.00";
          }
          break;
        default:
          objDb[i][cDbName] = DbContent;
      }
    }
  };

  return objDb;

};

//------------------------------------------
// Funzioni Locali Non Esposte 
//------------------------------------------

function arrayJsonFromDb(objDb, cStructure) {

}
//------------------------------------------
// Conversione DATE 
//------------------------------------------

function convDateAmgGma(cAmg) {

  if (typeof (cAmg) != 'undefined' && cAmg != null) {
    cAmg = cAmg.replace("-", "").replace("-", "");
    cAmg = cAmg.replace("/", "").replace("/", "");
    var aa = cAmg.substr(0, 4);
    aa = ("0000" + aa.trim()).slice(-4);
    var mm = cAmg.substr(4, 2);
    mm = ("00" + mm.trim()).slice(-2);
    var gg = cAmg.substr(6, 2);
    gg = ("00" + gg.trim()).slice(-2);
    return gg + "/" + mm + "/" + aa;
  } else {
    return "";
  }

};

function convDateGmaAmg(cGma) {

  if (typeof (cGma != 'undefined' && cGma != null)) {
    cGma = cGma.split("/").join("");
    cGma = cGma.split("-").join("");
    var gg = cGma.substr(0, 2);
    gg = ("00" + gg.trim()).slice(-2);
    var mm = cGma.substr(2, 2);
    mm = ("00" + mm.trim()).slice(-2);
    var aa = cGma.substr(4, 4);
    aa = ("0000" + aa.trim()).slice(-4);
    return aa + "-" + mm + "-" + gg;
  } else {
    return "";
  }
};

//------------------------------------------
// TODAY() FORMATO EUROPEO
//------------------------------------------

function today() {

  let data = new Date();
  let dd = data.getDate();
  let mm = data.getMonth() + 1; //January is 0!

  var yyyy = data.getFullYear();

  if (dd < 10) {
    this.dd = '0' + dd;
  }
  if (mm < 10) {
    this.mm = '0' + mm;
  }
  return dd + '/' + mm + '/' + yyyy;
};

function yyyymmdd(data) {

  if (typeof data == "string")
    return data;

  var yyyy = data.getFullYear().toString();
  var mm = (data.getMonth() + 1).toString(); // getMonth() is zero-based
  var dd = data.getDate().toString();
  if (isNaN(yyyy)) {
    yyyy = "    ";
    mm = "  ";
    dd = "  ";
  }
  return yyyy + "-" + (mm[1] ? mm : "0" + mm[0]) + "-" + (dd[1] ? dd : "0" + dd[0]); // padding
};


//------------------------------------------
// FUNZIONI SULLE STRUCTURE
//------------------------------------------

function esempioStructure() {
  return [{
    DbName: "nomeCampo nel Db",
    MemName: "nomeCampo in Memoria",
    Tipo: "tipo campo",
  }]
}

function posizioneStructure() {
  return [{
      DbName: "DbPosizione",
      MemName: "Posizione",
      Tipo: "C",
    },
    {
      DbName: "DbCodiceFiscale",
      MemName: "CodiceFiscale",
      Tipo: "C",
    },
    {
      DbName: "DbCognome",
      MemName: "Cognome",
      Tipo: "C",
    },
    {
      DbName: "DbNome",
      MemName: "Nome",
      Tipo: "C",
    },
    {
      DbName: "DbDataDiNascita",
      MemName: "DataDiNascita",
      Tipo: "C",
    },
    {
      DbName: "DbDataDiDecesso",
      MemName: "DataDiDecesso",
      Tipo: "C",
    },
    {
      DbName: "DbAnnoDiScarto",
      MemName: "AnnoDiScarto",
      Tipo: "C",
    },
    {
      DbName: "DbNumeroFaldone",
      MemName: "NumeroFaldone",
      Tipo: "C",
    },
    {
      DbName: "DbFascicolo",
      MemName: "Fascicolo",
      Tipo: "C",
    },
    {
      DbName: "DbStatoDomanda",
      MemName: "StatoDomanda",
      Tipo: "C",
    }
  ]
}

function anagrafeStructure() {
  return [{
      DbName: "DbCodiceFiscale",
      MemName: "CodiceFiscale",
      Tipo: "C",
    },
    {
      DbName: "DbCognome",
      MemName: "Cognome",
      Tipo: "C",
    },
    {
      DbName: "DbNome",
      MemName: "Nome",
      Tipo: "C",
    },
    {
      DbName: "DbDataDiNascita",
      MemName: "DataDiNascita",
      Tipo: "C",
    },
    {
      DbName: "DbSesso",
      MemName: "Sesso",
      Tipo: "C",
    },
    {
      DbName: "DbLuogoDiNascita",
      MemName: "LuogoDiNascita",
      Tipo: "C",
    },
    {
      DbName: "DbNazionalita",
      MemName: "Nazionalita",
      Tipo: "C",
    },
    {
      DbName: "DbResidenza",
      MemName: "Residenza",
      Tipo: "C",
    },
    {
      DbName: "DbDomicilio",
      MemName: "Domicilio",
      Tipo: "C",
    },
    {
      DbName: "DbAltriIndirizzi",
      MemName: "AltriIndirizzi",
      Tipo: "C",
    },
    {
      DbName: "DbDataDiDecesso",
      MemName: "DataDiDecesso",
      Tipo: "C",
    },
    {
      DbName: "DbEredita",
      MemName: "Eredita",
      Struttura: "eredita",
      Tipo: "JSON",
    },
    {
      DbName: "DbRedditi",
      MemName: "Redditi",
      Struttura: "redditi",
      Tipo: "ARRAY-JSON",
    },
    {
      DbName: "DbPensioni",
      MemName: "Pensioni",
      Struttura: "pensioni",
      Tipo: "ARRAY-JSON",
    },
    {
      DbName: "DbIndirizzi",
      MemName: "Indirizzi",
      Struttura: "indirizzi",
      Tipo: "ARRAY-JSON",
    },
    {
      DbName: "DbAssociazioni",
      MemName: "Associazioni",
      Struttura: "associazioni",
      Tipo: "ARRAY-JSON",
    },
    {
      DbName: "DbLiquidazioni",
      MemName: "Liquidazioni",
      Struttura: "liquidazioni",
      Tipo: "ARRAY-JSON",
    },
    {
      DbName: "DbElencoImportiRiaccreditati",
      MemName: "ElencoImportiRiaccreditati",
      Struttura: "importiriaccreditati",
      Tipo: "ARRAY-JSON",
    },
    {
      DbName: "DbElencoImportiDaRecuperare",
      MemName: "ElencoImportiDaRecuperare",
      Struttura: "importidarecuperare",
      Tipo: "ARRAY-JSON",
    },
    {
      DbName: "DbCognomeAcquisito",
      MemName: "CognomeAcquisito",
      Tipo: "C",
    },
    {
      DbName: "DbStatoCivile",
      MemName: "StatoCivile",
      Tipo: "C",
    },
    {
      DbName: "DbProvinciaDiNascita",
      MemName: "ProvinciaDiNascita",
      Tipo: "C",
    },
    {
      DbName: "DbNazioneDiNascita",
      MemName: "NazioneDiNascita",
      Tipo: "C",
    },
    {
      DbName: "DbCittadinanza",
      MemName: "Cittadinanza",
      Tipo: "C",
    },
    {
      DbName: "DbExtracomunitario",
      MemName: "Extracomunitario",
      Tipo: "BSiNo",
    },
    {
      DbName: "DbPermessoDiSoggiornoTipoPermesso",
      MemName: "PermessoDiSoggiornoTipoPermesso",
      Tipo: "C",
    },
    {
      DbName: "DbPermessoDiSoggiornoDataRilascio",
      MemName: "PermessoDiSoggiornoDataRilascio",
      Tipo: "C",
    },
    {
      DbName: "DbPermessoDiSoggiornoValidoFinoAl",
      MemName: "PermessoDiSoggiornoValidoFinoAl",
      Tipo: "C",
    },
    {
      DbName: "DbTelefonoPrincipale",
      MemName: "TelefonoPrincipale",
      Tipo: "C",
    },
    {
      DbName: "DbTelefonoSecondario",
      MemName: "TelefonoSecondario",
      Tipo: "C",
    },
    {
      DbName: "DbEmail",
      MemName: "Email",
      Tipo: "C",
    },
    {
      DbName: "DbPec",
      MemName: "Pec",
      Tipo: "C",
    },
    {
      DbName: "DbNote",
      MemName: "Note",
      Tipo: "C",
    }
  ]
}

function ereditaStructure() {
  return [{
      DbName: "DbNumeroFaldone",
      MemName: "NumeroFaldone",
      Tipo: "C",
    },
    {
      DbName: "DbAnnoDiScartoINCISO",
      MemName: "AnnoDiScartoINCISO",
      Tipo: "C",
    },
    {
      DbName: "DbDataCalcoloSimulazione",
      MemName: "DataCalcoloSimulazione",
      Tipo: "D",
    },
    {
      DbName: "DbImportoSpettante",
      MemName: "ImportoSpettante",
      Tipo: "N",
    },
    {
      DbName: "DbEredi",
      MemName: "Eredi",
      Struttura: "eredi",
      Tipo: "ARRAY-JSON",
    },
  ]
}

function erediStructure() {
  return [{
      DbName: "DbCognomeNome",
      MemName: "CognomeNome",
      Tipo: "C",
    },
    {
      DbName: "DbCodiceFiscale",
      MemName: "CodiceFiscale",
      Tipo: "C",
    },
    {
      DbName: "DbPercDiEredita",
      MemName: "PercDiEredita",
      Tipo: "C",
    },
    {
      DbName: "DbLiquidatoInBaseAllaPercDiEredita",
      MemName: "LiquidatoInBaseAllaPercDiEredita",
      Tipo: "N",
    },
    {
      DbName: "DbLiquidazione",
      MemName: "Liquidazione",
      Tipo: "D",
    },

  ]
}

function redditiStructure() {
  return [{
      DbName: "DbAnno",
      MemName: "Anno",
      Tipo: "C"
    },
    {
      DbName: "DbRedditoAssistito",
      MemName: "RedditoAssistito",
      Tipo: "N"
    },
    {
      DbName: "DbRedditoConiuge",
      MemName: "RedditoConiuge",
      Tipo: "N"
    },
    {
      DbName: "DbValidoPerGliAnniSuccessivi",
      MemName: "ValidoPerGliAnniSuccessivi",
      Tipo: "B"
    },
    {
      DbName: "DbNessunRedditoPercepito",
      MemName: "NessunRedditoPercepito",
      Tipo: "B"
    },
    {
      DbName: "DbTotaleValoreRedditoAssistito",
      MemName: "TotaleValoreRedditoAssistito",
      Tipo: "N"
    },
    {
      DbName: "DbEstremiPensioneAssistito",
      MemName: "EstremiPensioneAssistito",
      Tipo: "C"
    },
    {
      DbName: "DbNoteAssistito",
      MemName: "NoteAssistito",
      Tipo: "C"
    },
    {
      DbName: "DbDettagliConiuge",
      MemName: "DettagliConiuge",
      Struttura: "dettagliconiuge",
      Tipo: "ARRAY-JSON"
    },
    {
      DbName: "DbDettagliAssistito",
      MemName: "DettagliAssistito",
      Struttura: "dettagliassistito",
      Tipo: "ARRAY-JSON"
    },

  ]
}

function dettagliconiugeStructure() {
  return [{
      DbName: "DbTipologia:",
      MemName: "Tipologia:",
      Tipo: "C"
    },
    {
      DbName: "DbValore",
      MemName: "Valore",
      Tipo: "N"
    },

  ]
}

function dettagliassistitoStructure() {
  return [{
      DbName: "DbTipologia:",
      MemName: "Tipologia:",
      Tipo: "C"
    },
    {
      DbName: "DbValore",
      MemName: "Valore",
      Tipo: "N"
    },

  ]
}

function indirizziStructure() {
  return [{
      DbName: "DbTipo",
      MemName: "Tipo",
      Tipo: "C"
    },
    {
      DbName: "DbIndirizzo",
      MemName: "Indirizzo",
      Tipo: "C"
    },
    {
      DbName: "DbValidita",
      MemName: "Validita",
      Tipo: "C"
    },
    {
      DbName: "DbNazione",
      MemName: "Nazione",
      Tipo: "C"
    },
    {
      DbName: "DbComune",
      MemName: "Comune",
      Tipo: "C"
    },
    {
      DbName: "DbCap",
      MemName: "Cap",
      Tipo: "C"
    },
    {
      DbName: "DbFrazione",
      MemName: "Frazione",
      Tipo: "C"
    },
    {
      DbName: "DbVia",
      MemName: "Via",
      Tipo: "C"
    },
    {
      DbName: "DbCivico",
      MemName: "Civico",
      Tipo: "C"
    },
    {
      DbName: "DbUsaIndirizzo",
      MemName: "UsaIndirizzo",
      Tipo: "BSiNo"
    },
    {
      DbName: "DbNote",
      MemName: "Note",
      Tipo: "C"
    },
  ]
}

function associazioniStructure() {
  return [{
      DbName: "DbNumPosizione",
      MemName: "NumPosizione",
      Tipo: "C"
    },
    {
      DbName: "DbDataDomanda",
      MemName: "DataDomanda",
      Tipo: "D"
    },
    {
      DbName: "DbTipoAssociazione",
      MemName: "TipoAssociazione",
      Tipo: "C"
    },
    {
      DbName: "DbInizioIscrizione",
      MemName: "InizioIscrizione",
      Tipo: "D"
    },
    {
      DbName: "DbFineIscrizione",
      MemName: "FineIscrizione",
      Tipo: "D"
    },
    {
      DbName: "DbElencoRitenuteDiCategoriaRecuperate",
      MemName: "ElencoRitenuteDiCategoriaRecuperate",
      Struttura: "ritenutedicategoriarecuperate",
      Tipo: "ARRAY-JSON"
    },

  ]
}

function ritenutedicategoriarecuperateStructure() {
  return [{
      DbName: "DbDataRecupero",
      MemName: "DataRecupero",
      Tipo: "D"
    },
    {
      DbName: "DbImportoRecuperato",
      MemName: "ImportoRecuperato",
      Tipo: "D"
    },
    {
      DbName: "DbNote",
      MemName: "Note",
      Tipo: "C"
    },
  ]
}

function liquidazioniStructure() {
  return [{
      DbName: "DbDataCalcolo",
      MemName: "DataCalcolo",
      Tipo: "D"
    },
    {
      DbName: "DbLiquidato",
      MemName: "Liquidato",
      Tipo: "N"
    },
    {
      DbName: "DbRiaccredito",
      MemName: "Riaccredito",
      Tipo: "N"
    },
    {
      DbName: "DbTrattenutaDiCategoria",
      MemName: "TrattenutaDiCategoria",
      Tipo: "N"
    },
    {
      DbName: "DbImportoRecuperatoPerCompensazione",
      MemName: "ImportoRecuperatoPerCompensazione",
      Tipo: "N"
    },
    {
      DbName: "DbNrTrasferimentoFlumo",
      MemName: "NrTrasferimentoFlumo",
      Struttura: "nrtrasferimentoflumo",
      Tipo: "JSON"
    },
    {
      DbName: "DbTotMese",
      MemName: "TotMese",
      Tipo: "N"
    },
    {
      DbName: "DbTotAnno",
      MemName: "TotAnno",
      Tipo: "N"
    },

  ]
}

function pensioniStructure() {
  return [{
      DbName: "DbTipo",
      MemName: "Tipo",
      Tipo: "C"
    },
    {
      DbName: "DbTipologiaDiAssistenza",
      MemName: "TipologiaDiAssistenza",
      Tipo: "C"
    },
    {
      DbName: "DbDataFineCompatibilita",
      MemName: "DataFineCompatibilita",
      Tipo: "D"
    }, {
      DbName: "DbNote",
      MemName: "Note",
      Tipo: "C"
    },
  ]
}


function nrtrasferimentoflumoStructure() {
  return [{
      DbName: "DbNrTrasferimentoFlumo",
      MemName: "NrTrasferimentoFlumo",
      Tipo: "I"
    },
    {
      DbName: "DbData",
      MemName: "Data",
      Tipo: "D"
    },
  ]
}


function importiriaccreditatiStructure() {
  return [{
      DbName: "DbDataRiaccredito",
      MemName: "DataRiaccredito",
      Tipo: "D"
    },
    {
      DbName: "DbImportoRiaccreditato",
      MemName: "ImportoRiaccreditato",
      Tipo: "I"
    },
    {
      DbName: "DbDataLiquidazioneArretrato",
      MemName: "DataLiquidazioneArretrato",
      Tipo: "D"
    },
  ]
}

function importidarecuperareStructure() {
  return [{
      DbName: "DbDataUltimaModifica",
      MemName: "DataUltimaModifica",
      Tipo: "D"
    },
    {
      DbName: "DbTipoDiRecupero",
      MemName: "TipoDiRecupero",
      Tipo: "N"
    },
    {
      DbName: "DbTotDaRecuperare",
      MemName: "TotDaRecuperare",
      Struttura: "totdarecuperare",
      Tipo: "JSON"
    },
    {
      DbName: "DbRecuperato",
      MemName: "Recuperato",
      Tipo: "N"
    },
    {
      DbName: "DbRestituito",
      MemName: "Restituito",
      Tipo: "N"
    },
    {
      DbName: "DbRimanenteDaRecuperare",
      MemName: "RimanenteDaRecuperare",
      Tipo: "N"
    },
    {
      DbName: "DbNote",
      MemName: "Note",
      Tipo: "C"
    },
  ]
}

function totDaRecuperareStructure() {
  return [{
      DbName: "DbCapitale",
      MemName: "Capitale",
      Tipo: "N",
    },
    {
      DbName: "DbInteressiLegali",
      MemName: "InteressiLegali",
      Tipo: "N",
    },
    {
      DbName: "DbInteressiDiRateizzazione",
      MemName: "InteressiDiRateizzazione",
      Tipo: "N",
    },
  ]
}


function posizioneStructure() {
  return [{
      DbName: "DbPosizione",
      MemName: "Posizione",
      Tipo: "C",
      Note: ""
    },
    {
      DbName: "DbCodiceFiscale",
      MemName: "CodiceFiscale",
      Tipo: "C",
      Note: ""
    },
    {
      DbName: "DbCognome",
      MemName: "Cognome",
      Tipo: "C",
      Note: ""
    },
    {
      DbName: "DbNome",
      MemName: "Nome",
      Tipo: "C",
      Note: ""
    },
    {
      DbName: "DbDataDiNascita",
      MemName: "DataDiNascita",
      Tipo: "C",
      Note: ""
    },
    {
      DbName: "DbDataDiDecesso",
      MemName: "DataDiDecesso",
      Tipo: "C",
      Note: ""
    },
    {
      DbName: "DbAnnoDiScarto",
      MemName: "AnnoDiScarto",
      Tipo: "C",
      Note: ""
    },
    {
      DbName: "DbNumeroFaldone",
      MemName: "NumeroFaldone",
      Tipo: "C",
      Note: ""
    },
    {
      DbName: "DbFascicolo",
      MemName: "Fascicolo",
      Tipo: "C",
      Note: ""
    },
    {
      DbName: "DbStatoDomanda",
      MemName: "StatoDomanda",
      Tipo: "C",
      Note: ""
    }
  ]
}




/**
 *
 * Collega tutte le funzioni al modulo
 */
angular.module("inciso").factory("httpServices", httpServices);