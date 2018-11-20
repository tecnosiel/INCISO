import './egovuserwidget.scss';
import { User, EgovAuthConfiguration, UserProperties } from '@siag/js-egov-authentication';
export interface UserwidgetRenderingOptions {
    selector?: string | Element;
    user: UserProperties | User;
}
export declare class EgovUserwidget {
    userMenuTriggerButton: Element | null;
    options: EgovAuthConfiguration;
    targetSelector: string | Element;
    constructor(selector: any, options: EgovAuthConfiguration);
    render(data?: UserwidgetRenderingOptions): void;
    _userCurrentFailure(): void;
    _renderUi(data: UserwidgetRenderingOptions): void;
}
