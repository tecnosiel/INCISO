(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"), require("EGovJSBase"), require("EGovJSUI"));
	else if(typeof define === 'function' && define.amd)
		define(["angular", "EGovJSBase", "EGovJSUI"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("angular"), require("EGovJSBase"), require("EGovJSUI")) : factory(root["angular"], root["EGovJSBase"], root["EGovJSUI"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var js_egov_authentication_1 = __webpack_require__(4);
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
handleResponses.$inject = ["response"];
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


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var jsui_egov_authentication_1 = __webpack_require__(5);
function userwidgetComponent() {
    return {
        restrict: 'A',
        scope: {},
        bindToController: {
            user: '=',
            config: '='
            // language: '=?',
            // loginUrl: '=?',
            // myProfileUrl: '=?',
            // logoutUrl: '=?',
            // newDelegationUrl: '=?',
            // allowDelegationChange: '=?',
            // delegations: '=?',
            // currentDelegationId: '=?',
            // changeDelegation: '&?',
            // userChange: '&?',
        },
        // @ngInject
        controller: ["$element", function ($element) {
            var vm = this;
            vm.$onInit = onInit;
            function onInit() {
                console.log('widget onInit');
                var userwidget = new jsui_egov_authentication_1.EgovUserwidget($element[0], vm.config);
                if (vm.user) {
                    userwidget.render({ user: vm.user });
                }
                else {
                    userwidget.render();
                }
            }
        }],
        controllerAs: '$ctrl'
    };
}
exports.userwidgetComponent = userwidgetComponent;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(2);
var widget_component_1 = __webpack_require__(1);
var delegationChangeHttpInterceptor_1 = __webpack_require__(0);
// export * from '@siag/jsui-egov-authentication';
exports.EgovauthModule = angular.module('egov.userwidget', [])
    .directive('egovUserwidget', widget_component_1.userwidgetComponent)
    .factory('delegationChangeHttpInterceptor', delegationChangeHttpInterceptor_1.delegationChangeHttpInterceptor)
    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('delegationChangeHttpInterceptor');
    }]);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=ng1-egov-authentication.umd.js.map