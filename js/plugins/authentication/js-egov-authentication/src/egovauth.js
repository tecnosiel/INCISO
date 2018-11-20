import { AuthSession } from './authSession';
import { User } from './user';
import { HttpBackend } from './httpBackend';
import { AuthenticationUrls } from './authenticationUrls';
import { EnvironmentDetector } from './environmentDetector';
import { HttpHandler } from './httpHandler';
export class Authentication {
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
//# sourceMappingURL=egovauth.js.map