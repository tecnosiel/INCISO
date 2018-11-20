import { User } from './user';
export class HttpBackend {
    constructor(ajaxLib) {
        this.ajaxLib = ajaxLib;
    }
    execute(ajaxOptions) {
        return this.ajaxLib(ajaxOptions).then(userObject => {
            var resultObj = userObject;
            // watch out, if the actual response data is wrapped inside
            // the data property (i.e. with Angular's $http)
            if (userObject.data) {
                resultObj = userObject.data;
            }
            return new User(resultObj);
        });
    }
}
//# sourceMappingURL=httpBackend.js.map