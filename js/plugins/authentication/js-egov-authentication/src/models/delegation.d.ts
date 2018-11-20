import { JuristicPerson } from './juristicPerson';
import { NaturalPerson } from './naturalPerson';
export interface Delegation {
    availableInCurrentService: boolean;
    email: string;
    represented: {
        id: number;
        juristicPerson?: JuristicPerson;
        naturalPerson?: NaturalPerson;
    };
}
