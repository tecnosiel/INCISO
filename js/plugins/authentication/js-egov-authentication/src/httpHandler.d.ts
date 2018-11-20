import { User } from './user';
import { EgovAuthConfiguration } from './egovAuthConfiguration.interface';
import { XHRResponse, XHRRequest } from './models/xhr';
export declare class HttpHandler {
    private static REDIRECTURL_PLACEHOLDER;
    static handleAjaxRequest(user: User, xhr: XHRRequest): void;
    static handleAjaxResponse(egovAuthOptions: EgovAuthConfiguration, xhr: XHRResponse): void;
    private static _redirect(url);
    private static _retrieveCurrentWindowUrl();
    private static _isNullOrUndefined(obj);
}
