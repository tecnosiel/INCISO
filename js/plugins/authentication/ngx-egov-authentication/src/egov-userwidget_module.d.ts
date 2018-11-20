import { ModuleWithProviders } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User, EgovAuthConfiguration } from '@siag/js-egov-authentication';
export declare class EGovAuthModule {
    static forRoot(): ModuleWithProviders;
    static Configure(config: EgovAuthConfiguration, http?: HttpClient): void;
    static GetCurrent(): Observable<User>;
}
