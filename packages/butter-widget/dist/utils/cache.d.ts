export interface CacheStorage<T> {
    value: T;
    timestamp: number;
}
/**
 * Write inside the local storage the value returned by the API call for a given key
 * @param {string} key stored in the local storage
 * @param {T} value for a given key to write in the local storage
 */
export declare const writeToCache: <T>(key: string, value: T) => void;
/**
 * API call to get the response data and store in the local storage if needed
 * @param {string} url API url
 * @param {boolean} cacheResponse should we store the value to the local storage
 * @returns {T} data response from the API
 */
export declare const getFreshData: <T>(url: string, cacheResponse?: boolean) => Promise<T>;
/**
 * Get the data response from the local storage or the API
 * @param {string} url of the API
 * @returns {T} data from the API or the local storage
 */
export declare const getData: <T>(url: string) => Promise<T>;
