import { translate } from './localizations';
export class UIService {
    constructor(user, egovAuthOptions) {
        this.user = user;
        // calculate the language to be used
        let lang = 'de';
        if (egovAuthOptions.language) {
            lang = egovAuthOptions.language;
        }
        else if (user && user.language) {
            lang = user.language;
        }
        this.lang = lang;
    }
    getCurrentLang() {
        return this.lang;
    }
    translate(key) {
        return translate(this.lang, key);
    }
    resolveDelegationLinkText(delegation) {
        const represented = delegation.represented;
        if (represented.id === this.user.owner.id) {
            return translate(this.lang, 'WorkForMe');
        }
        else if (represented.naturalPerson) {
            return `${represented.naturalPerson.firstname} ${represented.naturalPerson.lastname}`;
        }
        else if (represented.juristicPerson) {
            return this.returnLocalized(represented.juristicPerson.nameDe, represented.juristicPerson.nameIt);
        }
        return '(unable to determine link text)';
    }
    resolveDelegationDisplayName() {
        let activeDelegation = this.user.activeDelegation;
        if (activeDelegation) {
            return this.resolveDelegationLinkText(activeDelegation);
        }
        return '(unable to determine delegation name)';
    }
    ellipsis(text, maxLength) {
        if (text) {
            if (typeof maxLength === 'undefined') {
                maxLength = 9000; //a large number
            }
            if (text.length <= maxLength)
                return text;
            var xMaxFit = maxLength - 3;
            var xTruncateAt = text.lastIndexOf(' ', xMaxFit);
            if (xTruncateAt == -1 || xTruncateAt < maxLength / 2)
                xTruncateAt = xMaxFit;
            return text.substr(0, xTruncateAt) + "...";
        }
        else {
            return text;
        }
    }
    returnLocalized(german, italian = german, english = german) {
        if (this.lang.toUpperCase() === 'IT') {
            return italian;
        }
        else if (this.lang.toUpperCase() === 'EN') {
            return english;
        }
        else {
            return german;
        }
    }
}
//# sourceMappingURL=ui.service.js.map