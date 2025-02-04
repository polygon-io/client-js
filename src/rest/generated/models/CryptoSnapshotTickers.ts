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
import type { V2SnapshotLocaleGlobalMarketsCryptoTickersGet200ResponseAllOfTickersInner } from './V2SnapshotLocaleGlobalMarketsCryptoTickersGet200ResponseAllOfTickersInner';
import {
    V2SnapshotLocaleGlobalMarketsCryptoTickersGet200ResponseAllOfTickersInnerFromJSON,
    V2SnapshotLocaleGlobalMarketsCryptoTickersGet200ResponseAllOfTickersInnerFromJSONTyped,
    V2SnapshotLocaleGlobalMarketsCryptoTickersGet200ResponseAllOfTickersInnerToJSON,
    V2SnapshotLocaleGlobalMarketsCryptoTickersGet200ResponseAllOfTickersInnerToJSONTyped,
} from './V2SnapshotLocaleGlobalMarketsCryptoTickersGet200ResponseAllOfTickersInner';

/**
 * An array of snapshot data for the specified tickers.
 * @export
 * @interface CryptoSnapshotTickers
 */
export interface CryptoSnapshotTickers {
    /**
     * 
     * @type {Array<V2SnapshotLocaleGlobalMarketsCryptoTickersGet200ResponseAllOfTickersInner>}
     * @memberof CryptoSnapshotTickers
     */
    tickers?: Array<V2SnapshotLocaleGlobalMarketsCryptoTickersGet200ResponseAllOfTickersInner>;
}

/**
 * Check if a given object implements the CryptoSnapshotTickers interface.
 */
export function instanceOfCryptoSnapshotTickers(value: object): value is CryptoSnapshotTickers {
    return true;
}

export function CryptoSnapshotTickersFromJSON(json: any): CryptoSnapshotTickers {
    return CryptoSnapshotTickersFromJSONTyped(json, false);
}

export function CryptoSnapshotTickersFromJSONTyped(json: any, ignoreDiscriminator: boolean): CryptoSnapshotTickers {
    if (json == null) {
        return json;
    }
    return {
        
        'tickers': json['tickers'] == null ? undefined : ((json['tickers'] as Array<any>).map(V2SnapshotLocaleGlobalMarketsCryptoTickersGet200ResponseAllOfTickersInnerFromJSON)),
    };
}

export function CryptoSnapshotTickersToJSON(json: any): CryptoSnapshotTickers {
    return CryptoSnapshotTickersToJSONTyped(json, false);
}

export function CryptoSnapshotTickersToJSONTyped(value?: CryptoSnapshotTickers | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'tickers': value['tickers'] == null ? undefined : ((value['tickers'] as Array<any>).map(V2SnapshotLocaleGlobalMarketsCryptoTickersGet200ResponseAllOfTickersInnerToJSON)),
    };
}

