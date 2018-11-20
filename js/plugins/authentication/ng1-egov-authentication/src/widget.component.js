"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsui_egov_authentication_1 = require("@siag/jsui-egov-authentication");
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
        controller: function ($element) {
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
        },
        controllerAs: '$ctrl'
    };
}
exports.userwidgetComponent = userwidgetComponent;
//# sourceMappingURL=widget.component.js.map