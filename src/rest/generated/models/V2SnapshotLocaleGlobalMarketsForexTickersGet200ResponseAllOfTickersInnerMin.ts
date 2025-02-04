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
 * The most recent minute bar for this ticker.
 * @export
 * @interface V2SnapshotLocaleGlobalMarketsForexTickersGet200ResponseAllOfTickersInnerMin
 */
export interface V2SnapshotLocaleGlobalMarketsForexTickersGet200ResponseAllOfTickersInnerMin {
    /**
     * The close price for the symbol in the given time period.
     * @type {number}
     * @memberof V2SnapshotLocaleGlobalMarketsForexTickersGet200ResponseAllOfTickersInnerMin
     */
    c?: number;
    /**
     * The highest price for the symbol in the given time period.
     * @type {number}
     * @memberof V2SnapshotLocaleGlobalMarketsForexTickersGet200ResponseAllOfTickersInnerMin
     */
    h?: number;
    /**
     * The lowest price for the symbol in the given time period.
     * @type {number}
     * @memberof V2SnapshotLocaleGlobalMarketsForexTickersGet200ResponseAllOfTickersInnerMin
     */
    l?: number;
    /**
     * The number of transactions in the aggregate window.
     * @type {number}
     * @memberof V2SnapshotLocaleGlobalMarketsForexTickersGet200ResponseAllOfTickersInnerMin
     */
    n?: number;
    /**
     * The open price for the symbol in the given time period.
     * @type {number}
     * @memberof V2SnapshotLocaleGlobalMarketsForexTickersGet200ResponseAllOfTickersInnerMin
     */
    o?: number;
    /**
     * The Unix Msec timestamp for the start of the aggregate window.
     * @type {number}
     * @memberof V2SnapshotLocaleGlobalMarketsForexTickersGet200ResponseAllOfTickersInnerMin
     */
    t?: number;
    /**
     * The trading volume of the symbol in the given time period.
     * @type {number}
     * @memberof V2SnapshotLocaleGlobalMarketsForexTickersGet200ResponseAllOfTickersInnerMin
     */
    v?: number;
}

/**
 * Check if a given object implements the V2SnapshotLocaleGlobalMarketsForexTickersGet200ResponseAllOfTickersInnerMin interface.
 */
export function instanceOfV2SnapshotLocaleGlobalMarketsForexTickersGet200ResponseAllOfTickersInnerMin(value: object): value is V2SnapshotLocaleGlobalMarketsForexTickersGet200ResponseAllOfTickersInnerMin {
    return true;
}

export function V2SnapshotLocaleGlobalMarketsForexTickersGet200ResponseAllOfTickersInnerMinFromJSON(json: any): V2SnapshotLocaleGlobalMarketsForexTickersGet200ResponseAllOfTickersInnerMin {
    return V2SnapshotLocaleGlobalMarketsForexTickersGet200ResponseAllOfTickersInnerMinFromJSONTyped(json, false);
}

export function V2SnapshotLocaleGlobalMarketsForexTickersGet200ResponseAllOfTickersInnerMinFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2SnapshotLocaleGlobalMarketsForexTickersGet200ResponseAllOfTickersInnerMin {
    if (json == null) {
        return json;
    }
    return {
        
        'c': json['c'] == null ? undefined : json['c'],
        'h': json['h'] == null ? undefined : json['h'],
        'l': json['l'] == null ? undefined : json['l'],
        'n': json['n'] == null ? undefined : json['n'],
        'o': json['o'] == null ? undefined : json['o'],
        't': json['t'] == null ? undefined : json['t'],
        'v': json['v'] == null ? undefined : json['v'],
    };
}

export function V2SnapshotLocaleGlobalMarketsForexTickersGet200ResponseAllOfTickersInnerMinToJSON(json: any): V2SnapshotLocaleGlobalMarketsForexTickersGet200ResponseAllOfTickersInnerMin {
    return V2SnapshotLocaleGlobalMarketsForexTickersGet200ResponseAllOfTickersInnerMinToJSONTyped(json, false);
}

export function V2SnapshotLocaleGlobalMarketsForexTickersGet200ResponseAllOfTickersInnerMinToJSONTyped(value?: V2SnapshotLocaleGlobalMarketsForexTickersGet200ResponseAllOfTickersInnerMin | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'c': value['c'],
        'h': value['h'],
        'l': value['l'],
        'n': value['n'],
        'o': value['o'],
        't': value['t'],
        'v': value['v'],
    };
}

