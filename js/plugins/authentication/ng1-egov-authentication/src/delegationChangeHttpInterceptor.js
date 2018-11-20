"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var js_egov_authentication_1 = require("@siag/js-egov-authentication");
// @ngInject
var handleResponses = function (response) {
    js_egov_authentication_1.Authentication.handleAjaxResponse({
        url: response.config.url,
        status: response.status,
        getResponseHeader: function (headerName) {
            return response.headers(headerName);
        },
        getResponseBody: function () {
            // Example, catch 401 errors
            if (response.status === 403) {
                return response.data;
            }
        }
    });
};
function delegationChangeHttpInterceptor($q) {
    return {
        request: function (config) {
            // pass in proper `setRequestHeader(..)` function
            // as the native $http doesn't have one
            if (js_egov_authentication_1.Authentication.getAuthSession()) {
                js_egov_authentication_1.Authentication.getAuthSession().handleAjaxRequest({
                    setRequestHeader: function (headerName, headerValue) {
                        // set it on the Angular $http object
                        config.headers[headerName] = headerValue;
                    }
                });
            }
            return config;
        },
        response: function (response) {
            handleResponses(response);
            return response;
        },
        responseError: function (response) {
            handleResponses(response);
            return $q.reject(response);
        }
    };
}
exports.delegationChangeHttpInterceptor = delegationChangeHttpInterceptor;
//# sourceMappingURL=delegationChangeHttpInterceptor.js.map