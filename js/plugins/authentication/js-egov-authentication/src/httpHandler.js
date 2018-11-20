export class HttpHandler {
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
//# sourceMappingURL=httpHandler.js.map