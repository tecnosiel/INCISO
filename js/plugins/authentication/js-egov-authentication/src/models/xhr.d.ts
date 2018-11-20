export interface XHRResponseBody {
    /**
     * Code sent from the server, either PROFILE_INCOMPLETE,
     * DELEGATION_NOT_VALID, AUTH_TYPE_NOT_SUPPORTED.
     * More here: https://git.services.siag.it/iam/iam/issues/84
     */
    code: string;
    /**
     * the url where the user should be redirected in case of an error,
     * usually as a consequence of a 401 or 403 status code. Note, the
     * URL contains a placeholder that needs to be filled with the current
     * app URL.
     */
    redirectUrl: string;
    /**
     * A message which can in case eventually be displayed to the user
     */
    message?: string;
}
export interface SetRequestHeaderFunc {
    (key: string, value: any): void;
}
export interface GetResponseHeaderFunc {
    (key: string): string;
}
export interface GetResponseBodyFunc {
    (): XHRResponseBody;
}
export interface XHRRequest {
    setRequestHeader: SetRequestHeaderFunc;
}
export interface XHRResponse {
    /**
     * the HTTP status code
     */
    status: number;
    /**
     * the HTTP request URL
     */
    url: string;
    getResponseHeader: GetResponseHeaderFunc;
    getResponseBody: GetResponseBodyFunc;
}
