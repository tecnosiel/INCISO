export class AuthenticationUrls {
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
//# sourceMappingURL=authenticationUrls.js.map