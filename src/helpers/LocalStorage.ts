/**
 * Persist to local storage.
 * 
 * @param {string} key 
 * @param {any} value 
 */
 export const set = (key: string, value: any): void => {
    try{
        const stringValue = JSON.stringify(value);
        localStorage.setItem(key, stringValue);
    } catch(e){
        //  TODO: make more meaningful.
        Error('Something whent wrong with local storage.')
    }
};

/**
 * Get local storage item by key.
 * 
 * @param {string} key 
 * @returns string
 */
export const get = (key: string): string | null | Error => {
    try{
        return localStorage.getItem(key);
    } catch(e){
        console.log(e);
        //  TODO: make more meaningful.
        return Error('Something whent wrong with local storage.')
    }
};

/**
 * Remove local storage item by key.
 * @param {string} key
 */
export const remove = (key: string): void => {
    try{
        localStorage.removeItem(key);
    } catch(e){
        //  TODO: make more meaningful.
        Error('Something whent wrong with local storage.')
    }
}