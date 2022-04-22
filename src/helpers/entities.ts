import { IEntityBase } from "../interfaces/IEntityBase";

export const doesExist = <T extends IEntityBase>(id: string, entities: Array<T>): boolean => {
    
    return id === ''
        ? false
        : entities.some((e: IEntityBase) => e.id === id);
};

export const findEntityRecordById = <T extends IEntityBase>(id: string, entities: Array<T>): T | undefined => {
    if(id === '' || entities.length < 1){
        return undefined;
    }

    const results = entities
        .filter((e: T) => (e.id === id));
        
    return results.length < 1
        ? undefined
        : results[0];
};

export const updateListItems = <T extends IEntityBase>(entity: T, items: Array<T>): Array<T> => {
    return items
        .map((e: IEntityBase) => (e.id === entity.id ? entity : e)) as Array<T>;
};

export const deleteListItems = <T extends IEntityBase>(id: string, items: Array<T>): Array<T> => {
    return items
        .filter((e: T) => e.id !== id);
};