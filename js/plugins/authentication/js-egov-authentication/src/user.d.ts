import { Delegation } from './models/delegation';
import { Owner } from './models/owner';
import { SessionInfo } from './models/sessionInfo';
import { Accreditation } from './models/accreditation';
import { UserProperties } from './models/userProperties';
import { AuthLanguageCode } from "./localizations";
export interface UserRole {
    role: string;
    functions: string[];
}
export declare class User {
    owner: Owner;
    username: string;
    language: AuthLanguageCode;
    sessionInfo: SessionInfo;
    delegations: Delegation[];
    currentAccreditations: Accreditation[];
    constructor(properties: UserProperties);
    readonly displayName: string;
    readonly activeDelegation: Delegation;
    _dummyValue: any;
    isAuthenticated: boolean;
    hasRole(name: string): boolean;
    getDelegation(id: number): Delegation;
    hasDelegationChanged(newRepresentedId: number): boolean;
}
