"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
var widget_component_1 = require("./src/widget.component");
var delegationChangeHttpInterceptor_1 = require("./src/delegationChangeHttpInterceptor");
// export * from '@siag/jsui-egov-authentication';
exports.EgovauthModule = angular.module('egov.userwidget', [])
    .directive('egovUserwidget', widget_component_1.userwidgetComponent)
    .factory('delegationChangeHttpInterceptor', delegationChangeHttpInterceptor_1.delegationChangeHttpInterceptor)
    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('delegationChangeHttpInterceptor');
    }]);
//# sourceMappingURL=index.js.map