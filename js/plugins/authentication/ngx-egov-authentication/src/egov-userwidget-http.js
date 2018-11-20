/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import 'rxjs/add/operator/map';
import { Authentication } from '@siag/js-egov-authentication';
import { EGovAuthModule } from './egov-userwidget_module';
export class EGovAuthHttp {
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
//# sourceMappingURL=egov-userwidget-http.js.map