import { UserProperties } from './models/userProperties';
import { EgovAuthConfiguration } from './egovAuthConfiguration.interface';
import { AuthSession } from './authSession';
import { XHRResponse } from './models/xhr';
import { AuthenticationUrls } from './authenticationUrls';
export declare class Authentication {
    static isConfigured: boolean;
    private static configuration;
    private static authSession;
    private static authUrls;
    private static sessionCreatedCb;
    /**
       * Configure the authentication library with the different available options
       *
       * @param {EgovAuthConfiguration} configuration The configuration options
       */
    static configure(configuration: EgovAuthConfiguration): void;
    static isAuthenticated(): boolean;
    /**
       * Returns the authentication configuration
       */
    static getConfiguration(): EgovAuthConfiguration;
    static onSessionCreated(cb: Function): void;
    static getAuthSession(): AuthSession;
    static handleAjaxResponse(xhr: XHRResponse): void;
    static getUrls(): AuthenticationUrls;
    static getCurrent(options?: any): any;
    /**
       * Manually initialize a new session by simply passing in the user object
       */
    static initWithUser(user: UserProperties): void;
}
