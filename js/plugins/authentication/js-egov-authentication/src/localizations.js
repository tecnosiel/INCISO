var localizationTable = {
    en: {
        "My Profile": "My Profile",
        "AccessData": "Account Credentials",
        "Delegations": "Delegations",
        "MyRepresentatives": "Representatives",
        "Work for someone else": "Work for someone else",
        "DelegationNotAvailableInService": "not available for this service",
        "NoDelegations": "you don't have any delegations",
        "NewDelegationLinkText": "New Delegation",
        "WorkForMe": "Work for me",
        "wordFor": "on behalf of",
        "PossibleDelegations": "Possible Delegations"
    },
    de: {
        "My Profile": "Mein Profil",
        "AccessData": "Zugangsdaten",
        "Delegations": "Vertretungen",
        "MyRepresentatives": "Vertreter",
        "Work for someone else": "Für jemand anderen arbeiten",
        "DelegationNotAvailableInService": "für diesen Dienst nicht verfügbar",
        "NoDelegations": "Sie haben keine Vertretungen",
        "NewDelegationLinkText": "Neue Vertretung beantragen",
        "WorkForMe": "Für mich arbeiten",
        "wordFor": "im Namen von",
        "PossibleDelegations": "Mögliche Vertretungen"
    },
    it: {
        "My Profile": "Mio profilo",
        "AccessData": "Dati d'accesso",
        "Delegations": "Deleghe",
        "MyRepresentatives": "Rappresentanti",
        "Work for someone else": "Lavorare per qualcun altro",
        "DelegationNotAvailableInService": "non disponibile per questo servizio",
        "NoDelegations": "non ha ancora nessuna delega",
        "NewDelegationLinkText": "Richiesta nuova delega",
        "WorkForMe": "Lavorare per me stesso",
        "wordFor": "a nome di",
        "PossibleDelegations": "Deleghe possibili"
    }
};
export function translate(lang, key) {
    let language = lang.toLowerCase();
    return localizationTable[language][key] || '[' + key + ']';
}
//# sourceMappingURL=localizations.js.map