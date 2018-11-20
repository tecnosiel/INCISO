import { AuthenticationUrls } from './authenticationUrls';
import { User } from './user';
import { HttpBackend } from './httpBackend';
import { EgovAuthConfiguration } from './egovAuthConfiguration.interface';
import { XHRResponse, XHRRequest } from './models/xhr';
import { UIService } from './ui.service';
export declare class AuthSession {
    private user;
    private egovAuthOptions;
    private authUrls;
    private httpBackend;
    private sessionAuthenticated;
    private REDIRECTURL_PLACEHOLDER;
    private userInterfaceService;
    constructor(user: User, egovAuthOptions: EgovAuthConfiguration, authUrls: AuthenticationUrls, httpBackend: HttpBackend);
    readonly uiService: UIService;
    readonly isAuthenticated: boolean;
    changeDelegation(newRepresentedId: any): any;
    restartApplication(): void;
    handleAjaxRequest(xhr: XHRRequest): void;
    /**
       * @deprecated use HttpHandler.handleAjaxResponse instead
       *
       */
    handleAjaxResponse(xhr: XHRResponse): void;
    private _redirect(url);
    private _retrieveCurrentWindowUrl();
    private _isNullOrUndefined(obj);
}
