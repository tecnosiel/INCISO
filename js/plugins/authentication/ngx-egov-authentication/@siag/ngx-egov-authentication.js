import { Directive, ElementRef, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Authentication } from '@siag/js-egov-authentication';
import { EgovUserwidget } from '@siag/jsui-egov-authentication';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EgovUserWidgetDirective {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const /** @type {?} */ userwidget = new EgovUserwidget(this.elementRef.nativeElement, this.config);
        if (this.user) {
            // if we get the user in, handle it ourself
            console.log('render userwidget with user input');
            userwidget.render({ user: this.user });
        }
        else {
            console.log('render userwidget plain');
            userwidget.render();
        }
    }
}
EgovUserWidgetDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[egov-userwidget]'
            },] },
];
/** @nocollapse */
EgovUserWidgetDirective.ctorParameters = () => [
    { type: ElementRef, },
];
EgovUserWidgetDirective.propDecorators = {
    "config": [{ type: Input },],
    "user": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EGovAuthModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: EGovAuthModule
        };
    }
    /**
     * @param {?} config
     * @param {?=} http
     * @return {?}
     */
    static Configure(config, http) {
        if (undefined === config.httpLibrary && undefined !== http) {
            config.httpLibrary = options => {
                return http
                    .request(options.method, options.url, {
                    //headers: options.headers,
                    body: options.data
                })
                    .toPromise();
            };
        }
        Authentication.configure(config);
    }
    /**
     * @return {?}
     */
    static GetCurrent() {
        return Observable.from(Authentication.getCurrent());
    }
}
EGovAuthModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [EgovUserWidgetDirective],
                exports: [EgovUserWidgetDirective]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EGovAuthHttp {
    /**
     * @param {?} res
     * @return {?}
     */
    static ErrorInterceptor(res) {
        Authentication.handleAjaxResponse({
            url: res.url,
            status: res.status,
            getResponseHeader: function (headerName) {
                return res.headers[headerName];
            },
            getResponseBody: function () {
                // Example, catch 401 errors
                if (res.status === 403) {
                    return res.json();
                }
            }
        });
    }
    /**
     * @param {?} config
     * @param {?} http
     * @return {?}
     */
    static Configure(config, http) {
        // default Http for angular 2
        if (undefined == config.httpLibrary) {
            config.httpLibrary = options => {
                return http
                    .request(options.url, {
                    method: options.method,
                    //headers: options.headers,
                    body: options.data
                })
                    .map(x => x.json())
                    .toPromise();
            };
        }
        EGovAuthModule.Configure(config);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { EGovAuthModule, EGovAuthHttp, EgovUserWidgetDirective as ɵa };
//# sourceMappingURL=ngx-egov-authentication.js.map
