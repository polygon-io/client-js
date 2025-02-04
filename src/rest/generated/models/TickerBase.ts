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
 * @interface TickerBase
 */
export interface TickerBase {
    /**
     * The exchange symbol that this item is traded under.
     * @type {string}
     * @memberof TickerBase
     */
    ticker: string;
}

/**
 * Check if a given object implements the TickerBase interface.
 */
export function instanceOfTickerBase(value: object): value is TickerBase {
    if (!('ticker' in value) || value['ticker'] === undefined) return false;
    return true;
}

export function TickerBaseFromJSON(json: any): TickerBase {
    return TickerBaseFromJSONTyped(json, false);
}

export function TickerBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TickerBase {
    if (json == null) {
        return json;
    }
    return {
        
        'ticker': json['ticker'],
    };
}

export function TickerBaseToJSON(json: any): TickerBase {
    return TickerBaseToJSONTyped(json, false);
}

export function TickerBaseToJSONTyped(value?: TickerBase | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ticker': value['ticker'],
    };
}

