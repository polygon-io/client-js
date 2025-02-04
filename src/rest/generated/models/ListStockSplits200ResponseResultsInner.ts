/* tslint:disable */
/* eslint-disable */
/**
 * Polygon API
 * The future of fintech.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ListStockSplits200ResponseResultsInner
 */
export interface ListStockSplits200ResponseResultsInner {
    /**
     * The execution date of the stock split. On this date the stock split was applied.
     * @type {string}
     * @memberof ListStockSplits200ResponseResultsInner
     */
    executionDate: string;
    /**
     * The unique identifier for this stock split.
     * @type {string}
     * @memberof ListStockSplits200ResponseResultsInner
     */
    id: string;
    /**
     * The second number in the split ratio.
     * 
     * For example: In a 2-for-1 split, split_from would be 1.
     * @type {number}
     * @memberof ListStockSplits200ResponseResultsInner
     */
    splitFrom: number;
    /**
     * The first number in the split ratio.
     * 
     * For example: In a 2-for-1 split, split_to would be 2.
     * @type {number}
     * @memberof ListStockSplits200ResponseResultsInner
     */
    splitTo: number;
    /**
     * The ticker symbol of the stock split.
     * @type {string}
     * @memberof ListStockSplits200ResponseResultsInner
     */
    ticker: string;
}

/**
 * Check if a given object implements the ListStockSplits200ResponseResultsInner interface.
 */
export function instanceOfListStockSplits200ResponseResultsInner(value: object): value is ListStockSplits200ResponseResultsInner {
    if (!('executionDate' in value) || value['executionDate'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('splitFrom' in value) || value['splitFrom'] === undefined) return false;
    if (!('splitTo' in value) || value['splitTo'] === undefined) return false;
    if (!('ticker' in value) || value['ticker'] === undefined) return false;
    return true;
}

export function ListStockSplits200ResponseResultsInnerFromJSON(json: any): ListStockSplits200ResponseResultsInner {
    return ListStockSplits200ResponseResultsInnerFromJSONTyped(json, false);
}

export function ListStockSplits200ResponseResultsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListStockSplits200ResponseResultsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'executionDate': json['execution_date'],
        'id': json['id'],
        'splitFrom': json['split_from'],
        'splitTo': json['split_to'],
        'ticker': json['ticker'],
    };
}

export function ListStockSplits200ResponseResultsInnerToJSON(json: any): ListStockSplits200ResponseResultsInner {
    return ListStockSplits200ResponseResultsInnerToJSONTyped(json, false);
}

export function ListStockSplits200ResponseResultsInnerToJSONTyped(value?: ListStockSplits200ResponseResultsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'execution_date': value['executionDate'],
        'id': value['id'],
        'split_from': value['splitFrom'],
        'split_to': value['splitTo'],
        'ticker': value['ticker'],
    };
}

