import { EgovAuthConfiguration } from './egovAuthConfiguration.interface';
import { IEnvironmentDetector } from './environmentDetector';
export declare class AuthenticationUrls {
    private envDetector;
    private egovConfig;
    private apiPrefix;
    private protocol;
    constructor(envDetector: IEnvironmentDetector, egovConfig?: EgovAuthConfiguration);
    /**
     * Returns the url for fetching the user
     */
    getCurrentUserUrl(): string;
    /**
     * Get the url of the login page
     * @param backUrl - the url to redirect back to again
     */
    getLoginPageUrl(backUrl?: string): string;
    getLogoutPageUrl(backUrl?: string): string;
    /**
     * returns the url pointing to the profile homepage, where the user can see
     * and modify his profile.
     */
    getProfilePageUrl(): string;
    getNewDelegationRequestUrl(backUrl?: string): string;
    getChangeDelegationUrl(): string;
    getAccessDataUrl(): string;
    getDelegationsUrl(): string;
    getCurrentDelegationProfileUrl(): string;
    getRepresentativesUrl(): string;
    private _resolveString(param);
}
