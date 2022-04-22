import { v4 as uuidv4 } from "uuid";
import { DateTime } from 'luxon';
import { IPerson } from '../../interfaces/IPersonModels';
import {
    get,
    set,
} from '../../helpers/LocalStorage';
import { MEMBER_LOCALSTORAGE_KEY } from '../../configurations/Constants';

/**
 * Persists mock member data to local storage.
 * @param {number} quantity 
 */
export const initMockMembers = (quantity: number): void => {
    if(get(MEMBER_LOCALSTORAGE_KEY) === null) {
        const mockMembers = generateMembers(quantity);
        set(MEMBER_LOCALSTORAGE_KEY, mockMembers);
    }
}; 

//  TODO: export below functions if we want to unit test.

/**
 * Generates a quantity of mock members.
 * @param {number} quantity - amount of members you want to generate 
 * @returns 
 */
const generateMembers = (quantity: number): Array<IPerson> => {
    return Array(quantity)
        .fill(0)
        .map((_, i: number) => (member(i+1)));
};

//  TODO: see if there is a randome name generator module?

/**
 * Creates a single mock member.
 * @param {number} i 
 * @returns IPerson
 */
const member = (i: number): IPerson => {
    return {
        id: uuidv4(),
        firstName: `${i}-firstname`,
        lastName: `${i}-lastname`,
        jobTitle: `${i}-jobtitle`,
        region: `${i}-region`,
        created: DateTime.now().toString(),
        lastUpdated: DateTime.now().toString(),
    } as IPerson;
};