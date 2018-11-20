import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { EgovAuthConfiguration } from '@siag/js-egov-authentication';
export declare class EGovAuthHttp {
    static ErrorInterceptor(res: Response): void;
    static Configure(config: EgovAuthConfiguration, http: Http): void;
}
