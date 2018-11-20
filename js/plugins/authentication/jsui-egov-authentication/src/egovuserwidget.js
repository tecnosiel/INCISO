"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./egovuserwidget.scss");
var template = require('./egovuserwidget.html');
var loginButtonTemplate = require('./loginbutton.html');
// import this specific ejs version one as it is browser compatible
var ejs = require("ejs/ejs.js");
var js_egov_authentication_1 = require("@siag/js-egov-authentication");
var EgovUserwidget = (function () {
    function EgovUserwidget(selector, options) {
        // configure
        if (options) {
            js_egov_authentication_1.Authentication.configure(options);
        }
        // select node
        if (typeof selector === 'string') {
            this.userMenuTriggerButton = document.querySelector(selector);
        }
        else {
            // we probably already have a selected element
            this.userMenuTriggerButton = selector;
        }
        if (!this.userMenuTriggerButton) {
            throw "Wrong selector " + selector;
        }
    }
    EgovUserwidget.prototype.render = function (data) {
        var _this = this;
        if (!data) {
            // we need to fetch the user ourselves
            var userPromise = js_egov_authentication_1.Authentication.getCurrent().then(function (currentUser) {
                _this._renderUi({ user: currentUser });
            });
            if (userPromise && userPromise.fail) {
                userPromise.fail(this._userCurrentFailure);
            }
            else if (userPromise && userPromise['catch']) {
                userPromise['catch'](this._userCurrentFailure);
            }
        }
        else {
            // all the data necessary for rendering is provided by the
            // user
            this._renderUi(data);
        }
    };
    EgovUserwidget.prototype._userCurrentFailure = function () {
        // just render empty  => login should be displayed
        this._renderUi({ user: {} });
    };
    EgovUserwidget.prototype._renderUi = function (data) {
        var user = new js_egov_authentication_1.User(data.user);
        // get the latest most up to date options
        var options = js_egov_authentication_1.Authentication.getConfiguration();
        var activeDelegation = user.activeDelegation;
        var renderTargetNode = null;
        // let's see whether we have a selector created the previus round
        if (this.targetSelector && this.targetSelector !== '') {
            // overwrite with the one already created by the widget itself
            data.selector = this.targetSelector;
        }
        // let selector = '.js-userwidget-rendertarget';
        if (data.selector) {
            // select node
            if (typeof data.selector === 'string') {
                renderTargetNode = document.querySelector(data.selector);
            }
            else {
                // we probably already have a selected element
                renderTargetNode = data.selector;
            }
            if (!renderTargetNode) {
                throw "Wrong selector " + data.selector;
            }
        }
        // if we don't have an authentication session because the user has
        // been passed in by hand, let's initialize the session here
        if (!js_egov_authentication_1.Authentication.getAuthSession()) {
            js_egov_authentication_1.Authentication.initWithUser(user);
        }
        var uiService = js_egov_authentication_1.Authentication.getAuthSession().uiService;
        var authUrls = js_egov_authentication_1.Authentication.getUrls();
        var renderVM = {
            user: user,
            delegations: function () {
                if (user.delegations) {
                    return user.delegations.filter(function (x) { return x !== activeDelegation; });
                }
                else {
                    return [];
                }
            },
            newDelegationUrl: authUrls.getNewDelegationRequestUrl(window.location.href),
            myProfileUrl: authUrls.getProfilePageUrl(),
            myAccessDataUrl: authUrls.getAccessDataUrl(),
            myDelegationsUrl: authUrls.getDelegationsUrl(),
            logoutUrl: authUrls.getLogoutPageUrl(window.location.href),
            allowDelegationChange: function () { return options.allowDelegationChange; },
            isAuthenticated: function () { return user.isAuthenticated; },
            getDisplayName: function () { return user.displayName; },
            hasActiveDelegation: function () { return activeDelegation !== null; },
            getDelegationDisplayText: function () {
                return uiService.ellipsis(uiService.resolveDelegationDisplayName(), 40);
            },
            getActiveDelegation: function () {
                if (activeDelegation) {
                    // viewmodel used in the HTML part
                    var isOwner = activeDelegation.represented.id === user.owner.id;
                    var vm = {
                        displayName: null,
                        email: activeDelegation.email,
                        profileLink: isOwner
                            ? authUrls.getProfilePageUrl()
                            : authUrls.getCurrentDelegationProfileUrl(),
                        accessDataLink: isOwner ? authUrls.getAccessDataUrl() : null,
                        delegationsLink: isOwner ? authUrls.getDelegationsUrl() : null,
                        representativesLink: isOwner ? null : authUrls.getRepresentativesUrl(),
                        isOwner: isOwner
                    };
                    // adjust the displayname
                    if (activeDelegation.represented.naturalPerson) {
                        vm.displayName = activeDelegation.represented.naturalPerson
                            .firstname + " " + activeDelegation.represented.naturalPerson.lastname;
                    }
                    else {
                        vm.displayName = uiService.returnLocalized(activeDelegation.represented.juristicPerson.nameDe, activeDelegation.represented.juristicPerson.nameIt);
                    }
                    vm.displayName = uiService.ellipsis(vm.displayName, 40);
                    return vm;
                }
                else {
                    return null;
                }
            },
            getFiscalCode: function (delegation) {
                if (delegation && delegation.represented) {
                    if (delegation.represented.naturalPerson) {
                        return delegation.represented.naturalPerson.fiscalCode;
                    }
                    else {
                        return delegation.represented.juristicPerson.fiscalCode;
                    }
                }
                else {
                    return '';
                }
            },
            resolveDelegationLinkText: function (delegation) {
                return uiService.resolveDelegationLinkText(delegation);
            },
            translate: function (key) { return uiService.translate(key); }
        };
        // render user login button
        var loginButtonHtml = ejs.render(loginButtonTemplate, renderVM);
        this.userMenuTriggerButton.innerHTML = loginButtonHtml;
        if (!user.isAuthenticated) {
            this.userMenuTriggerButton.setAttribute('href', authUrls.getLoginPageUrl());
        }
        else {
            // userwidget handles click, avoid side-effects
            this.userMenuTriggerButton.setAttribute('href', 'javascript:;');
        }
        // render main part
        var renderedHtml = ejs.render(template, renderVM);
        // render it
        if (renderTargetNode === null) {
            this.targetSelector = 'js-userwidget-rendertarget';
            // clear eventual previously created nodes
            var nodeList = document.querySelectorAll("." + this.targetSelector);
            if (nodeList) {
                for (var i = 0; i < nodeList.length; i++) {
                    nodeList[i].remove();
                }
                // Array.prototype.forEach.call(nodeList, (node) => {
                //     node.remove();
                // });
            }
            // append the render Target node
            var htmlDivEl = document.createElement('div');
            htmlDivEl.className = this.targetSelector;
            renderTargetNode = this.userMenuTriggerButton.parentElement.appendChild(htmlDivEl);
        }
        renderTargetNode.innerHTML = renderedHtml;
        // event handlers
        var delegationListNode = renderTargetNode.querySelector('.js-delegation-list');
        if (delegationListNode) {
            renderTargetNode
                .querySelector('.js-delegation-list')
                .addEventListener('click', function (ev) {
                var target = ev.target;
                if (target) {
                    if (!target.dataset['representedId']) {
                        target = target.parentElement;
                    }
                    if (target) {
                        var delegationId = target.dataset['representedId'];
                        if (delegationId) {
                            js_egov_authentication_1.Authentication.getAuthSession()
                                .changeDelegation(delegationId)
                                .then(function () {
                                window.location.reload();
                            });
                        }
                    }
                }
            });
        }
        // register opening/closing
        // this.userMenuTriggerButton.querySelector('.js-userwidget-toggle').addEventListener('click', (ev: Event) => {
        this.userMenuTriggerButton.addEventListener('click', function (ev) {
            var toggleClassName = 'userwidget-dropdown--open';
            var dropdownContainer = renderTargetNode.querySelector('.js-userwidget-dropdowncontainer');
            if (dropdownContainer) {
                if (dropdownContainer.classList.contains(toggleClassName)) {
                    dropdownContainer.classList.remove(toggleClassName);
                }
                else {
                    dropdownContainer.classList.add(toggleClassName);
                }
            }
        });
        // register button for showing delegation container
        var workForSomeoneElseNode = renderTargetNode.querySelector('.js-work-someone-else');
        if (workForSomeoneElseNode) {
            workForSomeoneElseNode.addEventListener('click', function (ev) {
                var toggleClassName = 'userwidget-delegationlist-container--open';
                var container = renderTargetNode.querySelector('.js-delegation-list-container');
                if (container) {
                    if (container.classList.contains(toggleClassName)) {
                        container.classList.remove(toggleClassName);
                    }
                    else {
                        container.classList.add(toggleClassName);
                    }
                }
            });
        }
        var workForMeButton = renderTargetNode.querySelector('.js-workforme');
        if (workForMeButton) {
            workForMeButton.addEventListener('click', function (ev) {
                js_egov_authentication_1.Authentication.getAuthSession()
                    .changeDelegation(user.owner.id)
                    .then(function () {
                    window.location.reload();
                });
            });
        }
    };
    return EgovUserwidget;
}());
exports.EgovUserwidget = EgovUserwidget;
//# sourceMappingURL=egovuserwidget.js.map