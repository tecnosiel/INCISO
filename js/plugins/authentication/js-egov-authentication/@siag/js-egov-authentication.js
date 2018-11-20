import 'core-js/es6/object';

/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';

// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
// evergreen browsers need this
// import 'core-js/es6/reflect';
// import 'core-js/es7/reflect';

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
function translate(lang, key) {
    let language = lang.toLowerCase();
    return localizationTable[language][key] || '[' + key + ']';
}

class UIService {
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

class HttpHandler {
    static handleAjaxRequest(user, xhr) {
        if (!xhr) {
            throw 'You have to pass in a valid XHR object.';
        }
        if (user.sessionInfo && user.sessionInfo.currentRepresentedId) {
            xhr.setRequestHeader('client-currentRepresentedId', user.sessionInfo.currentRepresentedId);
        }
        if (user && user.language) {
            xhr.setRequestHeader('current-language', user.language);
        }
    }
    static handleAjaxResponse(egovAuthOptions, xhr) {
        if (!xhr) {
            throw 'You have to pass in a valid XHR object.';
        }
        if (this._isNullOrUndefined(xhr.status)) {
            throw 'You have to pass in a valid XHR object having a status property.';
        }
        if (this._isNullOrUndefined(xhr.url)) {
            throw 'You have to pass in a valid XHR object having a url property containing the request Url.';
        }
        if (!xhr.getResponseHeader && typeof xhr.getResponseHeader === 'function') {
            throw 'You have to pass in a valid XHR object having a getResponseHeader(key) function.';
        }
        if (!xhr.getResponseBody && typeof xhr.getResponseBody === 'function') {
            throw 'You have to pass in a valid XHR object having a getResponseBody() function.';
        }
        if (xhr.status === 401 || xhr.status === 403) {
            /*
                      If we are in here and the response came from the authentication library
                      we should have received a response object of the following form:
                          {
                              code: string;
                              redirectUrl: string;
                              message: string;
                          }
      
                      where the `code` property can be of the following:
                          - PROFILE_INCOMPLETE
                          - DELEGATION_NOT_VALID
                          - AUTH_TYPE_NOT_SUPPORTED
                  */
            const responseBody = xhr.getResponseBody();
            if (responseBody && responseBody.redirectUrl) {
                let redirectUrl = responseBody.redirectUrl;
                if (redirectUrl.includes(this.REDIRECTURL_PLACEHOLDER)) {
                    redirectUrl = redirectUrl.replace(this.REDIRECTURL_PLACEHOLDER, encodeURIComponent(this._retrieveCurrentWindowUrl()));
                }
                if (responseBody.message && responseBody.message !== '') {
                    if (egovAuthOptions.callbacks && egovAuthOptions.callbacks.notifyUser) {
                        egovAuthOptions.callbacks.notifyUser(responseBody);
                    }
                    else {
                        console.warn('Missing callbacks: { notifyUser: (options) => { ... } } function. You should inform the user about what is going on! (redirecting silently..)');
                        this._redirect(redirectUrl);
                    }
                }
                else {
                    this._redirect(redirectUrl);
                }
            }
        }
    }
    static _redirect(url) {
        window.location.href = url;
    }
    static _retrieveCurrentWindowUrl() {
        return window.location.href;
    }
    static _isNullOrUndefined(obj) {
        return obj === null || typeof obj === 'undefined';
    }
}
HttpHandler.REDIRECTURL_PLACEHOLDER = '{URLENCODED_TARGET}';

class AuthSession {
    constructor(user, egovAuthOptions, authUrls, httpBackend) {
        this.user = user;
        this.egovAuthOptions = egovAuthOptions;
        this.authUrls = authUrls;
        this.httpBackend = httpBackend;
        this.sessionAuthenticated = false;
        this.REDIRECTURL_PLACEHOLDER = '{URLENCODED_TARGET}';
        // set defaults
        this.egovAuthOptions = egovAuthOptions || {};
        // this.egovAuthOptions.changeDelegationUrl = egovAuthOptions.changeDelegationUrl || this.egovAuthOptions.userUrl;
        this.sessionAuthenticated = user.isAuthenticated;
        this.userInterfaceService = new UIService(user, egovAuthOptions);
    }
    get uiService() {
        return this.userInterfaceService;
    }
    get isAuthenticated() {
        return this.sessionAuthenticated;
    }
    changeDelegation(newRepresentedId) {
        if (this.egovAuthOptions &&
            this.egovAuthOptions.events &&
            this.egovAuthOptions.events.changeDelegation) {
            // user has full control, has to do the callback himself
            let delegation = this.user.getDelegation(parseInt(newRepresentedId));
            if (delegation) {
                return this.egovAuthOptions.events.changeDelegation(delegation);
            }
            else {
                throw `Delegation with id ${newRepresentedId} not found.`;
            }
        }
        else {
            return this.httpBackend.execute({
                method: 'POST',
                url: this.authUrls.getChangeDelegationUrl(),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                // data: `newDelegationId=${newRepresentedId}`
                data: JSON.stringify({
                    newRepresentedId: newRepresentedId
                })
            });
        }
        // what if this fails????
    }
    restartApplication() {
        window.location.reload();
    }
    handleAjaxRequest(xhr) {
        HttpHandler.handleAjaxRequest(this.user, xhr);
    }
    /**
       * @deprecated use HttpHandler.handleAjaxResponse instead
       *
       */
    handleAjaxResponse(xhr) {
        HttpHandler.handleAjaxResponse(this.egovAuthOptions, xhr);
    }
    _redirect(url) {
        window.location.href = url;
    }
    _retrieveCurrentWindowUrl() {
        return window.location.href;
    }
    _isNullOrUndefined(obj) {
        return obj === null || typeof obj === 'undefined';
    }
}

class User {
    constructor(properties) {
        if (properties) {
            // copy properties over
            for (let key in properties) {
                if (properties.hasOwnProperty(key)) {
                    this[key] = properties[key];
                }
            }
            // if (properties.roles) {
            // 	this.roles = properties.roles;
            // 	this.functions = getDistinctFunctions(properties.roles);
            // }
        }
        this.delegations = this.delegations || [];
    }
    get displayName() {
        if (this.owner && this.owner.firstname && this.owner.lastname) {
            return `${this.owner.firstname} ${this.owner.lastname}`;
        }
        else {
            return this.username;
        }
    }
    get activeDelegation() {
        for (var i = 0; i < this.delegations.length; i++) {
            if (this.sessionInfo && this.delegations[i].represented.id === this.sessionInfo.currentRepresentedId) {
                return this.delegations[i];
            }
        }
        return null;
    }
    set isAuthenticated(value) {
        // just a dummy one...as we ignore the isAuthenticated property from the server
        this._dummyValue = value;
    }
    get isAuthenticated() {
        return this.sessionInfo !== null && typeof (this.sessionInfo) !== 'undefined';
    }
    hasRole(name) {
        if (this.currentAccreditations) {
            for (let accreditation of this.currentAccreditations) {
                if (accreditation.qualification && accreditation.qualification.uid === name) {
                    return true;
                }
            }
        }
        return false;
    }
    getDelegation(id) {
        if (this.delegations) {
            let foundDelegation = null;
            this.delegations.forEach(delegation => {
                if (delegation.represented.id === id) {
                    // we found the delegation
                    foundDelegation = delegation;
                    return;
                }
            });
            return foundDelegation;
        }
        return null;
    }
    hasDelegationChanged(newRepresentedId) {
        return this.sessionInfo.currentRepresentedId !== newRepresentedId;
    }
}

class HttpBackend {
    constructor(ajaxLib) {
        this.ajaxLib = ajaxLib;
    }
    execute(ajaxOptions) {
        return this.ajaxLib(ajaxOptions).then(userObject => {
            var resultObj = userObject;
            // watch out, if the actual response data is wrapped inside
            // the data property (i.e. with Angular's $http)
            if (userObject.data) {
                resultObj = userObject.data;
            }
            return new User(resultObj);
        });
    }
}

class AuthenticationUrls {
    constructor(envDetector, egovConfig) {
        this.envDetector = envDetector;
        this.egovConfig = egovConfig;
        this.apiPrefix = '/iamauth';
        this.protocol = 'https';
        if (!envDetector) {
            throw 'You have to pass in a valid class that implements the IEnvironmentDetector interface.';
        }
        // set default api prefix to emptystring
        if (egovConfig) {
            let prefix = this._resolveString(egovConfig.apiPrefix);
            if (prefix !== null) {
                this.apiPrefix = prefix;
            }
        }
        this.protocol = envDetector.getProtocol();
    }
    /**
     * Returns the url for fetching the user
     */
    getCurrentUserUrl() {
        if (this.egovConfig) {
            const config = this._resolveString(this.egovConfig.userUrl);
            if (config !== null) {
                return config;
            }
        }
        return `${this.apiPrefix}/user/current`;
    }
    /**
     * Get the url of the login page
     * @param backUrl - the url to redirect back to again
     */
    getLoginPageUrl(backUrl) {
        if (this.egovConfig) {
            const config = this._resolveString(this.egovConfig.loginUrl);
            if (config !== null) {
                return config;
            }
        }
        if (!backUrl) {
            backUrl = this.envDetector.getCurrentWindowUrl();
        }
        return `${this.apiPrefix}/login?target=${encodeURIComponent(backUrl)}`;
    }
    getLogoutPageUrl(backUrl) {
        if (this.egovConfig) {
            const config = this._resolveString(this.egovConfig.logoutUrl);
            if (config !== null) {
                return config;
            }
        }
        if (!backUrl) {
            backUrl = this.envDetector.getCurrentWindowUrl();
        }
        return `${this.apiPrefix}/logout?target=${encodeURIComponent(backUrl)}`;
    }
    /**
     * returns the url pointing to the profile homepage, where the user can see
     * and modify his profile.
     */
    getProfilePageUrl() {
        if (this.egovConfig) {
            const config = this._resolveString(this.egovConfig.myProfileUrl);
            if (config !== null) {
                return config;
            }
        }
        let envPrefix = this.envDetector.getEnvironmentPrefix();
        if (envPrefix !== '') {
            envPrefix += '-';
        }
        return `${this.protocol}://${envPrefix}iam.civis.bz.it/api/appurls/MyProfile`;
    }
    getNewDelegationRequestUrl(backUrl) {
        if (this.egovConfig) {
            const config = this._resolveString(this.egovConfig.newDelegationUrl);
            if (config !== null) {
                return config;
            }
        }
        if (!backUrl) {
            backUrl = this.envDetector.getCurrentWindowUrl();
        }
        return `${this.apiPrefix}/requestDelegation?target=${encodeURIComponent(backUrl)}`;
    }
    getChangeDelegationUrl() {
        if (this.egovConfig) {
            const config = this._resolveString(this.egovConfig.changeDelegationUrl);
            if (config !== null) {
                return config;
            }
        }
        return `${this.apiPrefix}/user/current`;
    }
    getAccessDataUrl() {
        let envPrefix = this.envDetector.getEnvironmentPrefix();
        if (envPrefix !== '') {
            envPrefix += '-';
        }
        return `${this.protocol}://${envPrefix}iam.civis.bz.it/api/appurls/MyCredentials`;
    }
    getDelegationsUrl() {
        let envPrefix = this.envDetector.getEnvironmentPrefix();
        if (envPrefix !== '') {
            envPrefix += '-';
        }
        return `${this.protocol}://${envPrefix}iam.civis.bz.it/api/appurls/MyDelegations`;
    }
    getCurrentDelegationProfileUrl() {
        let envPrefix = this.envDetector.getEnvironmentPrefix();
        if (envPrefix !== '') {
            envPrefix += '-';
        }
        return `${this.protocol}://${envPrefix}iam.civis.bz.it/api/appurls/CurrentDelegationProfile`;
    }
    getRepresentativesUrl() {
        let envPrefix = this.envDetector.getEnvironmentPrefix();
        if (envPrefix !== '') {
            envPrefix += '-';
        }
        return `${this.protocol}://${envPrefix}iam.civis.bz.it/api/appurls/CurrentDelegationRepresentatives`;
    }
    _resolveString(param) {
        if (param) {
            if (typeof param === 'function') {
                return param(this.envDetector.getEnvironmentPrefix());
            }
            else {
                // must be a string
                return param;
            }
        }
        else {
            return null;
        }
    }
}

class EnvironmentDetector {
    constructor(prefix, isHttps) {
        this.protocol = 'https';
        if (prefix) {
            this.envPrefix = prefix;
        }
        if (isHttps === false) {
            this.protocol = 'http';
        }
    }
    /**
     * Returns the current environment prefix, which is either 'dev', 'test', 'demo', 'prod'.
     */
    getEnvironmentPrefix() {
        let environment = ''; // equals to prod
        if (this.envPrefix) {
            environment = this.envPrefix;
        }
        else {
            let url = this.getCurrentWindowUrl();
            if (url.indexOf('dev') !== -1 || url.indexOf('localhost') !== -1) {
                environment = 'dev';
            }
            if (url.indexOf('test') !== -1) {
                environment = 'test';
            }
            if (url.indexOf('demo') !== -1) {
                environment = 'demo';
            }
        }
        return environment;
    }
    /**
     * Returns the current
     */
    getProtocol() {
        let protocol;
        if (this.protocol) {
            protocol = this.protocol;
        }
        else {
            let tmpProtocol = (window && window.location.protocol);
            // we get 'https:', or 'http:' and should get rid of the colon
            if (tmpProtocol) {
                protocol = tmpProtocol.replace(':', '');
            }
        }
        return protocol;
    }
    /**
     * Returns the current url.
     */
    getCurrentWindowUrl() {
        return window.location.href;
    }
}

class Authentication {
    /**
       * Configure the authentication library with the different available options
       *
       * @param {EgovAuthConfiguration} configuration The configuration options
       */
    static configure(configuration) {
        Authentication.isConfigured = true;
        Authentication.configuration = configuration;
        let envDetector = new EnvironmentDetector(configuration.environment, configuration.isHttps);
        this.authUrls = new AuthenticationUrls(envDetector, configuration);
    }
    static isAuthenticated() {
        return Authentication.authSession && Authentication.authSession.isAuthenticated;
    }
    /**
       * Returns the authentication configuration
       */
    static getConfiguration() {
        return Authentication.configuration;
    }
    static onSessionCreated(cb) {
        this.sessionCreatedCb = cb;
    }
    static getAuthSession() {
        return this.authSession;
    }
    static handleAjaxResponse(xhr) {
        const config = Authentication.configuration;
        HttpHandler.handleAjaxResponse(config, xhr);
    }
    static getUrls() {
        return this.authUrls;
    }
    static getCurrent(options) {
        // cannot add Promise as it causes compilation errors in jsui -> try later
        if (!Authentication.isConfigured) {
            throw new Error('Not configured, please invoke .configure(..) first');
        }
        if (!Authentication.configuration.httpLibrary) {
            throw new Error('No ajax library configured. Set the according property "httpLibrary"');
        }
        let httpBackend = new HttpBackend(Authentication.configuration.httpLibrary);
        let ajaxOptions = Object.assign({}, {
            url: this.getUrls().getCurrentUserUrl(),
            method: 'GET'
        }, options);
        return httpBackend.execute(ajaxOptions).then((userProps) => {
            const user = new User(userProps);
            Authentication.authSession = new AuthSession(user, Authentication.configuration, this.authUrls, httpBackend);
            if (this.sessionCreatedCb) {
                this.sessionCreatedCb(Authentication.authSession);
            }
            return user;
        });
    }
    /**
       * Manually initialize a new session by simply passing in the user object
       */
    static initWithUser(user) {
        if (!Authentication.isConfigured) {
            throw new Error('Not configured, please invoke .configure(..) first');
        }
        let httpBackend = new HttpBackend(Authentication.configuration.httpLibrary);
        Authentication.authSession = new AuthSession(new User(user), Authentication.configuration, this.authUrls, httpBackend);
    }
}

// import 'core-js/es6/object';

export { Authentication, AuthSession, AuthenticationUrls, User, translate };
//# sourceMappingURL=js-egov-authentication.js.map
