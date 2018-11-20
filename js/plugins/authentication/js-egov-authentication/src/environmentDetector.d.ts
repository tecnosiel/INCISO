import { EnvironmentPrefix } from './environmentPrefix';
export interface IEnvironmentDetector {
    getEnvironmentPrefix(): EnvironmentPrefix;
    getProtocol(): string;
    getCurrentWindowUrl(): string;
}
export declare class EnvironmentDetector implements IEnvironmentDetector {
    private envPrefix;
    private protocol;
    constructor(prefix?: EnvironmentPrefix, isHttps?: boolean);
    /**
     * Returns the current environment prefix, which is either 'dev', 'test', 'demo', 'prod'.
     */
    getEnvironmentPrefix(): EnvironmentPrefix;
    /**
     * Returns the current
     */
    getProtocol(): string;
    /**
     * Returns the current url.
     */
    getCurrentWindowUrl(): string;
}
