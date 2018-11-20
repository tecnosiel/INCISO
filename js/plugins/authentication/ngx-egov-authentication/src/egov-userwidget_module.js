/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EgovUserWidgetDirective } from './egov-userwidget.component';
import { Observable } from 'rxjs';
import { Authentication } from '@siag/js-egov-authentication';
export class EGovAuthModule {
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
function EGovAuthModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    EGovAuthModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    EGovAuthModule.ctorParameters;
}
//# sourceMappingURL=egov-userwidget_module.js.map