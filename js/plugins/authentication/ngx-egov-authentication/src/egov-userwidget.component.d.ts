import { OnInit, ElementRef } from '@angular/core';
import { User, EgovAuthConfiguration } from '@siag/js-egov-authentication';
export declare class EgovUserWidgetDirective implements OnInit {
    private elementRef;
    config: EgovAuthConfiguration;
    user: User;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
}
