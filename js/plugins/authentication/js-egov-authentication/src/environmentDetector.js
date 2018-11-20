export class EnvironmentDetector {
    constructor(prefix, isHttps) {
        this.protocol = 'https';
        if (prefix) {
            this.envPrefix = prefix;
        }
        if (isHttps === false) {
            this.protocol = 'http';
        }
    }
    /**
     * Returns the current environment prefix, which is either 'dev', 'test', 'demo', 'prod'.
     */
    getEnvironmentPrefix() {
        let environment = ''; // equals to prod
        if (this.envPrefix) {
            environment = this.envPrefix;
        }
        else {
            let url = this.getCurrentWindowUrl();
            if (url.indexOf('dev') !== -1 || url.indexOf('localhost') !== -1) {
                environment = 'dev';
            }
            if (url.indexOf('test') !== -1) {
                environment = 'test';
            }
            if (url.indexOf('demo') !== -1) {
                environment = 'demo';
            }
        }
        return environment;
    }
    /**
     * Returns the current
     */
    getProtocol() {
        let protocol;
        if (this.protocol) {
            protocol = this.protocol;
        }
        else {
            let tmpProtocol = (window && window.location.protocol);
            // we get 'https:', or 'http:' and should get rid of the colon
            if (tmpProtocol) {
                protocol = tmpProtocol.replace(':', '');
            }
        }
        return protocol;
    }
    /**
     * Returns the current url.
     */
    getCurrentWindowUrl() {
        return window.location.href;
    }
}
//# sourceMappingURL=environmentDetector.js.map