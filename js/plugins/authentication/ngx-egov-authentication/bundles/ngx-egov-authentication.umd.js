(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@siag/js-egov-authentication'), require('@siag/jsui-egov-authentication'), require('rxjs'), require('rxjs/add/operator/map')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@siag/js-egov-authentication', '@siag/jsui-egov-authentication', 'rxjs', 'rxjs/add/operator/map'], factory) :
	(factory((global.NGXEgovAuth = {}),global._angular_core,global._angular_common,global.EGovJSBase,global.EGovJSUI,global.rxjs));
}(this, (function (exports,_angular_core,_angular_common,_siag_jsEgovAuthentication,_siag_jsuiEgovAuthentication,rxjs) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EgovUserWidgetDirective = /** @class */ (function () {
    /**
     * @param {?} elementRef
     */
    function EgovUserWidgetDirective(elementRef) {
        this.elementRef = elementRef;
    }
    /**
     * @return {?}
     */
    EgovUserWidgetDirective.prototype.ngOnInit = function () {
        var /** @type {?} */ userwidget = new _siag_jsuiEgovAuthentication.EgovUserwidget(this.elementRef.nativeElement, this.config);
        if (this.user) {
            // if we get the user in, handle it ourself
            console.log('render userwidget with user input');
            userwidget.render({ user: this.user });
        }
        else {
            console.log('render userwidget plain');
            userwidget.render();
        }
    };
    return EgovUserWidgetDirective;
}());
EgovUserWidgetDirective.decorators = [
    { type: _angular_core.Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[egov-userwidget]'
            },] },
];
/** @nocollapse */
EgovUserWidgetDirective.ctorParameters = function () { return [
    { type: _angular_core.ElementRef, },
]; };
EgovUserWidgetDirective.propDecorators = {
    "config": [{ type: _angular_core.Input },],
    "user": [{ type: _angular_core.Input },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EGovAuthModule = /** @class */ (function () {
    function EGovAuthModule() {
    }
    /**
     * @return {?}
     */
    EGovAuthModule.forRoot = function () {
        return {
            ngModule: EGovAuthModule
        };
    };
    /**
     * @param {?} config
     * @param {?=} http
     * @return {?}
     */
    EGovAuthModule.Configure = function (config, http) {
        if (undefined === config.httpLibrary && undefined !== http) {
            config.httpLibrary = function (options) {
                return http
                    .request(options.method, options.url, {
                    //headers: options.headers,
                    body: options.data
                })
                    .toPromise();
            };
        }
        _siag_jsEgovAuthentication.Authentication.configure(config);
    };
    /**
     * @return {?}
     */
    EGovAuthModule.GetCurrent = function () {
        return rxjs.Observable.from(_siag_jsEgovAuthentication.Authentication.getCurrent());
    };
    return EGovAuthModule;
}());
EGovAuthModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [_angular_common.CommonModule],
                declarations: [EgovUserWidgetDirective],
                exports: [EgovUserWidgetDirective]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EGovAuthHttp = /** @class */ (function () {
    function EGovAuthHttp() {
    }
    /**
     * @param {?} res
     * @return {?}
     */
    EGovAuthHttp.ErrorInterceptor = function (res) {
        _siag_jsEgovAuthentication.Authentication.handleAjaxResponse({
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
    };
    /**
     * @param {?} config
     * @param {?} http
     * @return {?}
     */
    EGovAuthHttp.Configure = function (config, http) {
        // default Http for angular 2
        if (undefined == config.httpLibrary) {
            config.httpLibrary = function (options) {
                return http
                    .request(options.url, {
                    method: options.method,
                    //headers: options.headers,
                    body: options.data
                })
                    .map(function (x) { return x.json(); })
                    .toPromise();
            };
        }
        EGovAuthModule.Configure(config);
    };
    return EGovAuthHttp;
}());

exports.EGovAuthModule = EGovAuthModule;
exports.EGovAuthHttp = EGovAuthHttp;
exports.ɵa = EgovUserWidgetDirective;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-egov-authentication.umd.js.map
