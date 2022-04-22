import { IPerson } from '../interfaces/IPersonModels';
import {
    doesExist,
    findEntityRecordById,
    updateListItems,
    deleteListItems,
} from './entities';

describe('entities unit tests', () => {
    const knownId: string = 'KNOWN_ID';
    const unknownId: string = 'UNKNOWN_ID';
    const mockEntities: Array<IPerson> = [
        { id: knownId, firstName: 'FirstName', lastName: 'LastName', jobTitle: 'JobTitle', region: 'Region', created: '2022-01-01', lastUpdated: '2022-01-01', }
    ];

    describe('doesExist', () => {

        it('should return false given id is empty', () => {
            const response = doesExist<IPerson>('', [...mockEntities]);

            expect(response).toBeFalsy();
        });

        it('should return false given entity does not exist', () => {
            const response = doesExist<IPerson>('NOT_EXIST', [...mockEntities]);

            expect(response).toBeFalsy();
        });

        it('should return true given entity does exist', () => {
            const response = doesExist<IPerson>(knownId, [...mockEntities]);

            expect(response).toBeTruthy();
        });
    });

    describe('findEntityRecordById', () => {

        it('should return undefined given id is empty', () => {
            const response = findEntityRecordById<IPerson>('', mockEntities);

            expect(response).toBeUndefined();
        });

        it('should return undefined given entity does not exist', () => {
            const response = findEntityRecordById<IPerson>(unknownId, mockEntities);

            expect(response).toBeUndefined();
        });

        it('should return entity given id does exist', () => {
            const response = findEntityRecordById<IPerson>(knownId, mockEntities);

            expect(response).toEqual(mockEntities[0]);
        });
    });

    describe('updateListItems', () => {

        it('should update supplied record given it exists', () => {
            const mockUpdatedPerson: IPerson = {
                id: knownId, firstName: 'FirstName-Updated', lastName: 'LastName-Updated', jobTitle: 'JobTitle-Updated', region: 'Region-Updated', created: '2022-01-01', lastUpdated: '2022-01-01',
            };

            const response = updateListItems<IPerson>(mockUpdatedPerson, [...mockEntities]);

            expect(response[0]).toEqual(mockUpdatedPerson);
            expect(response.length).toEqual(mockEntities.length);
        });

        it('should not update supplied record given it does not exist', () => {
            const mockUpdatedPerson: IPerson = {
                id: unknownId, firstName: 'FirstName-Updated', lastName: 'LastName-Updated', jobTitle: 'JobTitle-Updated', region: 'Region-Updated', created: '2022-01-01', lastUpdated: '2022-01-01',
            };

            const response = updateListItems<IPerson>(mockUpdatedPerson, [...mockEntities]);

            expect(response).toEqual(mockEntities);
            expect(response.length).toEqual(mockEntities.length);
        });
    });

    describe('deleteListItems', () => {

        it('should remove item given it exists', () => {
            const response = deleteListItems(knownId, [...mockEntities]);

            expect(response).toEqual([]);
        });

        it('should not remove item given it does not exist', () => {
            const response = deleteListItems(unknownId, [...mockEntities]);

            expect(response).toEqual(mockEntities);
        });
    });
});