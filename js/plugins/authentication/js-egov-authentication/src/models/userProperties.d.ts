import { Owner } from './owner';
import { Delegation } from './delegation';
import { Accreditation } from './accreditation';
import { SessionInfo } from './sessionInfo';
export interface UserProperties {
    username: string;
    language: string;
    owner: Owner;
    delegations?: Delegation[];
    currentAccreditations?: Accreditation[];
    sessionInfo?: SessionInfo;
    isAuthenticated?: boolean;
}
