import { OldJQueryDeferred } from './egovAuthConfiguration.interface';
import { XHRResponseBody } from './models/xhr';
import { EnvironmentPrefix } from './environmentPrefix';
import { AuthLanguageCode } from './localizations';
export interface UserNotificationFunc {
    (data: XHRResponseBody): void;
}
export interface UrlConfigFunc {
    (envPrefix: EnvironmentPrefix): string;
}
export interface OldJQueryDeferred<T> {
    success: OldJQueryDeferred<T>;
    then: OldJQueryDeferred<T>;
    fail?: OldJQueryDeferred<T>;
}
export interface HttpLibraryFunc {
    (options: HttpRequestOptions): any;
}
export interface HttpRequestOptions {
    method: 'GET' | 'POST';
    url: string;
    headers?: Object;
    body?: string;
    data?: string;
}
export interface EgovAuthConfiguration {
    /**
       * Language of the application/user.
       * Allowed lang codes: "it", "de", "en". If not provided
       * it's being inferred from the user object; default fallback is "de"
       */
    language?: AuthLanguageCode;
    /**
       * The endpoint where the user API is being exposed
       */
    userUrl?: string | UrlConfigFunc;
    /**
       * the URL of the login page
       */
    loginUrl?: string | UrlConfigFunc;
    /**
       * the URL to logout the user and terminate the session
       */
    logoutUrl?: string | UrlConfigFunc;
    /**
       * URL for the page that allows to request a new delegation
       */
    newDelegationUrl?: string | UrlConfigFunc;
    /**
       * The url which is used to send the `POST` requests for changing
       * the current delegation.
       * Default: same as `userUrl`
       */
    changeDelegationUrl?: string | UrlConfigFunc;
    /**
       * Flag to determine wheter the current service offers
       * the change delegation functionality
       */
    allowDelegationChange?: boolean;
    /**
       * Url of the users profile page
       */
    myProfileUrl?: string | UrlConfigFunc;
    /**
       * Prefix for all the calls to the server
       */
    apiPrefix?: string | UrlConfigFunc;
    /**
       * The environment. This setting is used to determine the correct fallback urls
       * for retrieving the user endpoint API etc...
       */
    environment?: EnvironmentPrefix;
    /**
       * Set whether the endpoint answers in http or https. This in conjunction with
       * the `environment` is used to calculate the base urls
       */
    isHttps?: boolean;
    /**
       * the ajax library to be used, i.e. $http for Angular 1.x or $.ajax when
       * used with jQuery
       */
    httpLibrary: HttpLibraryFunc;
    /**
       * Events you can implement
       */
    events?: {
        /**
             * Invoked whenever the current delegation is being changed. This callback allows to overwrite
             * the change delegation handling.
             */
        changeDelegation?: Function;
    };
    /**
       * Callbacks that allow to register for certain events happening within
       * the authentication library
       */
    callbacks?: {
        /**
             * Generic callback that allows to communicate with the user. The authentication library
             * internally uses this callback (if provided) to send messages. The  user of the library
             * can implement these notifications based on the requirements of the app (as toasts, popups,...)
             */
        notifyUser?: UserNotificationFunc;
    };
}
