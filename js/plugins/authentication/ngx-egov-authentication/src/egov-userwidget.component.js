/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, Input, ElementRef } from '@angular/core';
import { User } from '@siag/js-egov-authentication';
import { EgovUserwidget } from '@siag/jsui-egov-authentication';
export class EgovUserWidgetDirective {
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
function EgovUserWidgetDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    EgovUserWidgetDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    EgovUserWidgetDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    EgovUserWidgetDirective.propDecorators;
    /** @type {?} */
    EgovUserWidgetDirective.prototype.config;
    /** @type {?} */
    EgovUserWidgetDirective.prototype.user;
    /** @type {?} */
    EgovUserWidgetDirective.prototype.elementRef;
}
//# sourceMappingURL=egov-userwidget.component.js.map