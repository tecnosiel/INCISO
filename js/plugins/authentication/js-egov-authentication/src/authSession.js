import { UIService } from './ui.service';
import { HttpHandler } from './httpHandler';
export class AuthSession {
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
//# sourceMappingURL=authSession.js.map