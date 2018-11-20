import { HttpLibraryFunc } from './egovAuthConfiguration.interface';
export declare class HttpBackend {
    private ajaxLib;
    constructor(ajaxLib: HttpLibraryFunc);
    execute(ajaxOptions: any): any;
}
