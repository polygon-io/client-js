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
 * The most recent quote for this ticker.
 * @export
 * @interface V2SnapshotLocaleGlobalMarketsForexTickersGet200ResponseAllOfTickersInnerLastQuote
 */
export interface V2SnapshotLocaleGlobalMarketsForexTickersGet200ResponseAllOfTickersInnerLastQuote {
    /**
     * The ask price.
     * @type {number}
     * @memberof V2SnapshotLocaleGlobalMarketsForexTickersGet200ResponseAllOfTickersInnerLastQuote
     */
    a: number;
    /**
     * The bid price.
     * @type {number}
     * @memberof V2SnapshotLocaleGlobalMarketsForexTickersGet200ResponseAllOfTickersInnerLastQuote
     */
    b: number;
    /**
     * The millisecond accuracy timestamp of the quote.
     * @type {number}
     * @memberof V2SnapshotLocaleGlobalMarketsForexTickersGet200ResponseAllOfTickersInnerLastQuote
     */
    t: number;
    /**
     * The exchange ID on which this quote happened.
     * @type {number}
     * @memberof V2SnapshotLocaleGlobalMarketsForexTickersGet200ResponseAllOfTickersInnerLastQuote
     */
    x: number;
}

/**
 * Check if a given object implements the V2SnapshotLocaleGlobalMarketsForexTickersGet200ResponseAllOfTickersInnerLastQuote interface.
 */
export function instanceOfV2SnapshotLocaleGlobalMarketsForexTickersGet200ResponseAllOfTickersInnerLastQuote(value: object): value is V2SnapshotLocaleGlobalMarketsForexTickersGet200ResponseAllOfTickersInnerLastQuote {
    if (!('a' in value) || value['a'] === undefined) return false;
    if (!('b' in value) || value['b'] === undefined) return false;
    if (!('t' in value) || value['t'] === undefined) return false;
    if (!('x' in value) || value['x'] === undefined) return false;
    return true;
}

export function V2SnapshotLocaleGlobalMarketsForexTickersGet200ResponseAllOfTickersInnerLastQuoteFromJSON(json: any): V2SnapshotLocaleGlobalMarketsForexTickersGet200ResponseAllOfTickersInnerLastQuote {
    return V2SnapshotLocaleGlobalMarketsForexTickersGet200ResponseAllOfTickersInnerLastQuoteFromJSONTyped(json, false);
}

export function V2SnapshotLocaleGlobalMarketsForexTickersGet200ResponseAllOfTickersInnerLastQuoteFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2SnapshotLocaleGlobalMarketsForexTickersGet200ResponseAllOfTickersInnerLastQuote {
    if (json == null) {
        return json;
    }
    return {
        
        'a': json['a'],
        'b': json['b'],
        't': json['t'],
        'x': json['x'],
    };
}

export function V2SnapshotLocaleGlobalMarketsForexTickersGet200ResponseAllOfTickersInnerLastQuoteToJSON(json: any): V2SnapshotLocaleGlobalMarketsForexTickersGet200ResponseAllOfTickersInnerLastQuote {
    return V2SnapshotLocaleGlobalMarketsForexTickersGet200ResponseAllOfTickersInnerLastQuoteToJSONTyped(json, false);
}

export function V2SnapshotLocaleGlobalMarketsForexTickersGet200ResponseAllOfTickersInnerLastQuoteToJSONTyped(value?: V2SnapshotLocaleGlobalMarketsForexTickersGet200ResponseAllOfTickersInnerLastQuote | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'a': value['a'],
        'b': value['b'],
        't': value['t'],
        'x': value['x'],
    };
}

