import { Delegation } from './models/delegation';
import { EgovAuthConfiguration } from './egovAuthConfiguration.interface';
import { User } from './user';
import { AuthLanguageCode } from './localizations';
export declare class UIService {
    private user;
    private lang;
    constructor(user: User, egovAuthOptions: EgovAuthConfiguration);
    getCurrentLang(): AuthLanguageCode;
    translate(key: any): string;
    resolveDelegationLinkText(delegation: Delegation): string;
    resolveDelegationDisplayName(): string;
    ellipsis(text: string, maxLength: number): string;
    returnLocalized(german: string, italian?: string, english?: string): string;
}
