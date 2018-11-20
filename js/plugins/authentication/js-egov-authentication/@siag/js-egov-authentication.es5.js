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
    var language = lang.toLowerCase();
    return localizationTable[language][key] || '[' + key + ']';
}
var UIService = (function () {
    function UIService(user, egovAuthOptions) {
        this.user = user;
        // calculate the language to be used
        var lang = 'de';
        if (egovAuthOptions.language) {
            lang = egovAuthOptions.language;
        }
        else if (user && user.language) {
            lang = user.language;
        }
        this.lang = lang;
    }
    UIService.prototype.getCurrentLang = function () {
        return this.lang;
    };
    UIService.prototype.translate = function (key) {
        return translate(this.lang, key);
    };
    UIService.prototype.resolveDelegationLinkText = function (delegation) {
        var represented = delegation.represented;
        if (represented.id === this.user.owner.id) {
            return translate(this.lang, 'WorkForMe');
        }
        else if (represented.naturalPerson) {
            return represented.naturalPerson.firstname + " " + represented.naturalPerson.lastname;
        }
        else if (represented.juristicPerson) {
            return this.returnLocalized(represented.juristicPerson.nameDe, represented.juristicPerson.nameIt);
        }
        return '(unable to determine link text)';
    };
    UIService.prototype.resolveDelegationDisplayName = function () {
        var activeDelegation = this.user.activeDelegation;
        if (activeDelegation) {
            return this.resolveDelegationLinkText(activeDelegation);
        }
        return '(unable to determine delegation name)';
    };
    UIService.prototype.ellipsis = function (text, maxLength) {
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
    };
    UIService.prototype.returnLocalized = function (german, italian, english) {
        if (italian === void 0) { italian = german; }
        if (english === void 0) { english = german; }
        if (this.lang.toUpperCase() === 'IT') {
            return italian;
        }
        else if (this.lang.toUpperCase() === 'EN') {
            return english;
        }
        else {
            return german;
        }
    };
    return UIService;
}());
var HttpHandler = (function () {
    function HttpHandler() {
    }
    HttpHandler.handleAjaxRequest = function (user, xhr) {
        if (!xhr) {
            throw 'You have to pass in a valid XHR object.';
        }
        if (user.sessionInfo && user.sessionInfo.currentRepresentedId) {
            xhr.setRequestHeader('client-currentRepresentedId', user.sessionInfo.currentRepresentedId);
        }
        if (user && user.language) {
            xhr.setRequestHeader('current-language', user.language);
        }
    };
    HttpHandler.handleAjaxResponse = function (egovAuthOptions, xhr) {
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
            var responseBody = xhr.getResponseBody();
            if (responseBody && responseBody.redirectUrl) {
                var redirectUrl = responseBody.redirectUrl;
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
    };
    HttpHandler._redirect = function (url) {
        window.location.href = url;
    };
    HttpHandler._retrieveCurrentWindowUrl = function () {
        return window.location.href;
    };
    HttpHandler._isNullOrUndefined = function (obj) {
        return obj === null || typeof obj === 'undefined';
    };
    return HttpHandler;
}());
HttpHandler.REDIRECTURL_PLACEHOLDER = '{URLENCODED_TARGET}';
var AuthSession = (function () {
    function AuthSession(user, egovAuthOptions, authUrls, httpBackend) {
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
    Object.defineProperty(AuthSession.prototype, "uiService", {
        get: function () {
            return this.userInterfaceService;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthSession.prototype, "isAuthenticated", {
        get: function () {
            return this.sessionAuthenticated;
        },
        enumerable: true,
        configurable: true
    });
    AuthSession.prototype.changeDelegation = function (newRepresentedId) {
        if (this.egovAuthOptions &&
            this.egovAuthOptions.events &&
            this.egovAuthOptions.events.changeDelegation) {
            // user has full control, has to do the callback himself
            var delegation = this.user.getDelegation(parseInt(newRepresentedId));
            if (delegation) {
                return this.egovAuthOptions.events.changeDelegation(delegation);
            }
            else {
                throw "Delegation with id " + newRepresentedId + " not found.";
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
    };
    AuthSession.prototype.restartApplication = function () {
        window.location.reload();
    };
    AuthSession.prototype.handleAjaxRequest = function (xhr) {
        HttpHandler.handleAjaxRequest(this.user, xhr);
    };
    /**
       * @deprecated use HttpHandler.handleAjaxResponse instead
       *
       */
    AuthSession.prototype.handleAjaxResponse = function (xhr) {
        HttpHandler.handleAjaxResponse(this.egovAuthOptions, xhr);
    };
    AuthSession.prototype._redirect = function (url) {
        window.location.href = url;
    };
    AuthSession.prototype._retrieveCurrentWindowUrl = function () {
        return window.location.href;
    };
    AuthSession.prototype._isNullOrUndefined = function (obj) {
        return obj === null || typeof obj === 'undefined';
    };
    return AuthSession;
}());
var User = (function () {
    function User(properties) {
        if (properties) {
            // copy properties over
            for (var key in properties) {
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
    Object.defineProperty(User.prototype, "displayName", {
        get: function () {
            if (this.owner && this.owner.firstname && this.owner.lastname) {
                return this.owner.firstname + " " + this.owner.lastname;
            }
            else {
                return this.username;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "activeDelegation", {
        get: function () {
            for (var i = 0; i < this.delegations.length; i++) {
                if (this.sessionInfo && this.delegations[i].represented.id === this.sessionInfo.currentRepresentedId) {
                    return this.delegations[i];
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "isAuthenticated", {
        get: function () {
            return this.sessionInfo !== null && typeof (this.sessionInfo) !== 'undefined';
        },
        set: function (value) {
            // just a dummy one...as we ignore the isAuthenticated property from the server
            this._dummyValue = value;
        },
        enumerable: true,
        configurable: true
    });
    User.prototype.hasRole = function (name) {
        if (this.currentAccreditations) {
            for (var _i = 0, _a = this.currentAccreditations; _i < _a.length; _i++) {
                var accreditation = _a[_i];
                if (accreditation.qualification && accreditation.qualification.uid === name) {
                    return true;
                }
            }
        }
        return false;
    };
    User.prototype.getDelegation = function (id) {
        if (this.delegations) {
            var foundDelegation_1 = null;
            this.delegations.forEach(function (delegation) {
                if (delegation.represented.id === id) {
                    // we found the delegation
                    foundDelegation_1 = delegation;
                    return;
                }
            });
            return foundDelegation_1;
        }
        return null;
    };
    User.prototype.hasDelegationChanged = function (newRepresentedId) {
        return this.sessionInfo.currentRepresentedId !== newRepresentedId;
    };
    return User;
}());
var HttpBackend = (function () {
    function HttpBackend(ajaxLib) {
        this.ajaxLib = ajaxLib;
    }
    HttpBackend.prototype.execute = function (ajaxOptions) {
        return this.ajaxLib(ajaxOptions).then(function (userObject) {
            var resultObj = userObject;
            // watch out, if the actual response data is wrapped inside
            // the data property (i.e. with Angular's $http)
            if (userObject.data) {
                resultObj = userObject.data;
            }
            return new User(resultObj);
        });
    };
    return HttpBackend;
}());
var AuthenticationUrls = (function () {
    function AuthenticationUrls(envDetector, egovConfig) {
        this.envDetector = envDetector;
        this.egovConfig = egovConfig;
        this.apiPrefix = '/iamauth';
        this.protocol = 'https';
        if (!envDetector) {
            throw 'You have to pass in a valid class that implements the IEnvironmentDetector interface.';
        }
        // set default api prefix to emptystring
        if (egovConfig) {
            var prefix = this._resolveString(egovConfig.apiPrefix);
            if (prefix !== null) {
                this.apiPrefix = prefix;
            }
        }
        this.protocol = envDetector.getProtocol();
    }
    /**
     * Returns the url for fetching the user
     */
    AuthenticationUrls.prototype.getCurrentUserUrl = function () {
        if (this.egovConfig) {
            var config = this._resolveString(this.egovConfig.userUrl);
            if (config !== null) {
                return config;
            }
        }
        return this.apiPrefix + "/user/current";
    };
    /**
     * Get the url of the login page
     * @param backUrl - the url to redirect back to again
     */
    AuthenticationUrls.prototype.getLoginPageUrl = function (backUrl) {
        if (this.egovConfig) {
            var config = this._resolveString(this.egovConfig.loginUrl);
            if (config !== null) {
                return config;
            }
        }
        if (!backUrl) {
            backUrl = this.envDetector.getCurrentWindowUrl();
        }
        return this.apiPrefix + "/login?target=" + encodeURIComponent(backUrl);
    };
    AuthenticationUrls.prototype.getLogoutPageUrl = function (backUrl) {
        if (this.egovConfig) {
            var config = this._resolveString(this.egovConfig.logoutUrl);
            if (config !== null) {
                return config;
            }
        }
        if (!backUrl) {
            backUrl = this.envDetector.getCurrentWindowUrl();
        }
        return this.apiPrefix + "/logout?target=" + encodeURIComponent(backUrl);
    };
    /**
     * returns the url pointing to the profile homepage, where the user can see
     * and modify his profile.
     */
    AuthenticationUrls.prototype.getProfilePageUrl = function () {
        if (this.egovConfig) {
            var config = this._resolveString(this.egovConfig.myProfileUrl);
            if (config !== null) {
                return config;
            }
        }
        var envPrefix = this.envDetector.getEnvironmentPrefix();
        if (envPrefix !== '') {
            envPrefix += '-';
        }
        return this.protocol + "://" + envPrefix + "iam.civis.bz.it/api/appurls/MyProfile";
    };
    AuthenticationUrls.prototype.getNewDelegationRequestUrl = function (backUrl) {
        if (this.egovConfig) {
            var config = this._resolveString(this.egovConfig.newDelegationUrl);
            if (config !== null) {
                return config;
            }
        }
        if (!backUrl) {
            backUrl = this.envDetector.getCurrentWindowUrl();
        }
        return this.apiPrefix + "/requestDelegation?target=" + encodeURIComponent(backUrl);
    };
    AuthenticationUrls.prototype.getChangeDelegationUrl = function () {
        if (this.egovConfig) {
            var config = this._resolveString(this.egovConfig.changeDelegationUrl);
            if (config !== null) {
                return config;
            }
        }
        return this.apiPrefix + "/user/current";
    };
    AuthenticationUrls.prototype.getAccessDataUrl = function () {
        var envPrefix = this.envDetector.getEnvironmentPrefix();
        if (envPrefix !== '') {
            envPrefix += '-';
        }
        return this.protocol + "://" + envPrefix + "iam.civis.bz.it/api/appurls/MyCredentials";
    };
    AuthenticationUrls.prototype.getDelegationsUrl = function () {
        var envPrefix = this.envDetector.getEnvironmentPrefix();
        if (envPrefix !== '') {
            envPrefix += '-';
        }
        return this.protocol + "://" + envPrefix + "iam.civis.bz.it/api/appurls/MyDelegations";
    };
    AuthenticationUrls.prototype.getCurrentDelegationProfileUrl = function () {
        var envPrefix = this.envDetector.getEnvironmentPrefix();
        if (envPrefix !== '') {
            envPrefix += '-';
        }
        return this.protocol + "://" + envPrefix + "iam.civis.bz.it/api/appurls/CurrentDelegationProfile";
    };
    AuthenticationUrls.prototype.getRepresentativesUrl = function () {
        var envPrefix = this.envDetector.getEnvironmentPrefix();
        if (envPrefix !== '') {
            envPrefix += '-';
        }
        return this.protocol + "://" + envPrefix + "iam.civis.bz.it/api/appurls/CurrentDelegationRepresentatives";
    };
    AuthenticationUrls.prototype._resolveString = function (param) {
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
    };
    return AuthenticationUrls;
}());
var EnvironmentDetector = (function () {
    function EnvironmentDetector(prefix, isHttps) {
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
    EnvironmentDetector.prototype.getEnvironmentPrefix = function () {
        var environment = ''; // equals to prod
        if (this.envPrefix) {
            environment = this.envPrefix;
        }
        else {
            var url = this.getCurrentWindowUrl();
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
    };
    /**
     * Returns the current
     */
    EnvironmentDetector.prototype.getProtocol = function () {
        var protocol;
        if (this.protocol) {
            protocol = this.protocol;
        }
        else {
            var tmpProtocol = (window && window.location.protocol);
            // we get 'https:', or 'http:' and should get rid of the colon
            if (tmpProtocol) {
                protocol = tmpProtocol.replace(':', '');
            }
        }
        return protocol;
    };
    /**
     * Returns the current url.
     */
    EnvironmentDetector.prototype.getCurrentWindowUrl = function () {
        return window.location.href;
    };
    return EnvironmentDetector;
}());
var Authentication = (function () {
    function Authentication() {
    }
    /**
       * Configure the authentication library with the different available options
       *
       * @param {EgovAuthConfiguration} configuration The configuration options
       */
    Authentication.configure = function (configuration) {
        Authentication.isConfigured = true;
        Authentication.configuration = configuration;
        var envDetector = new EnvironmentDetector(configuration.environment, configuration.isHttps);
        this.authUrls = new AuthenticationUrls(envDetector, configuration);
    };
    Authentication.isAuthenticated = function () {
        return Authentication.authSession && Authentication.authSession.isAuthenticated;
    };
    /**
       * Returns the authentication configuration
       */
    Authentication.getConfiguration = function () {
        return Authentication.configuration;
    };
    Authentication.onSessionCreated = function (cb) {
        this.sessionCreatedCb = cb;
    };
    Authentication.getAuthSession = function () {
        return this.authSession;
    };
    Authentication.handleAjaxResponse = function (xhr) {
        var config = Authentication.configuration;
        HttpHandler.handleAjaxResponse(config, xhr);
    };
    Authentication.getUrls = function () {
        return this.authUrls;
    };
    Authentication.getCurrent = function (options) {
        var _this = this;
        // cannot add Promise as it causes compilation errors in jsui -> try later
        if (!Authentication.isConfigured) {
            throw new Error('Not configured, please invoke .configure(..) first');
        }
        if (!Authentication.configuration.httpLibrary) {
            throw new Error('No ajax library configured. Set the according property "httpLibrary"');
        }
        var httpBackend = new HttpBackend(Authentication.configuration.httpLibrary);
        var ajaxOptions = Object.assign({}, {
            url: this.getUrls().getCurrentUserUrl(),
            method: 'GET'
        }, options);
        return httpBackend.execute(ajaxOptions).then(function (userProps) {
            var user = new User(userProps);
            Authentication.authSession = new AuthSession(user, Authentication.configuration, _this.authUrls, httpBackend);
            if (_this.sessionCreatedCb) {
                _this.sessionCreatedCb(Authentication.authSession);
            }
            return user;
        });
    };
    /**
       * Manually initialize a new session by simply passing in the user object
       */
    Authentication.initWithUser = function (user) {
        if (!Authentication.isConfigured) {
            throw new Error('Not configured, please invoke .configure(..) first');
        }
        var httpBackend = new HttpBackend(Authentication.configuration.httpLibrary);
        Authentication.authSession = new AuthSession(new User(user), Authentication.configuration, this.authUrls, httpBackend);
    };
    return Authentication;
}());
// import 'core-js/es6/object';
export { Authentication, AuthSession, AuthenticationUrls, User, translate };
//# sourceMappingURL=js-egov-authentication.es5.js.map
