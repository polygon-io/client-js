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
 * 
 * @export
 * @interface V2SnapshotLocaleGlobalMarketsCryptoDirectionGet200Response
 */
export interface V2SnapshotLocaleGlobalMarketsCryptoDirectionGet200Response {
    /**
     * 
     * @type {Array<V2SnapshotLocaleGlobalMarketsCryptoTickersGet200ResponseAllOfTickersInner>}
     * @memberof V2SnapshotLocaleGlobalMarketsCryptoDirectionGet200Response
     */
    tickers?: Array<V2SnapshotLocaleGlobalMarketsCryptoTickersGet200ResponseAllOfTickersInner>;
}

/**
 * Check if a given object implements the V2SnapshotLocaleGlobalMarketsCryptoDirectionGet200Response interface.
 */
export function instanceOfV2SnapshotLocaleGlobalMarketsCryptoDirectionGet200Response(value: object): value is V2SnapshotLocaleGlobalMarketsCryptoDirectionGet200Response {
    return true;
}

export function V2SnapshotLocaleGlobalMarketsCryptoDirectionGet200ResponseFromJSON(json: any): V2SnapshotLocaleGlobalMarketsCryptoDirectionGet200Response {
    return V2SnapshotLocaleGlobalMarketsCryptoDirectionGet200ResponseFromJSONTyped(json, false);
}

export function V2SnapshotLocaleGlobalMarketsCryptoDirectionGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2SnapshotLocaleGlobalMarketsCryptoDirectionGet200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'tickers': json['tickers'] == null ? undefined : ((json['tickers'] as Array<any>).map(V2SnapshotLocaleGlobalMarketsCryptoTickersGet200ResponseAllOfTickersInnerFromJSON)),
    };
}

export function V2SnapshotLocaleGlobalMarketsCryptoDirectionGet200ResponseToJSON(json: any): V2SnapshotLocaleGlobalMarketsCryptoDirectionGet200Response {
    return V2SnapshotLocaleGlobalMarketsCryptoDirectionGet200ResponseToJSONTyped(json, false);
}

export function V2SnapshotLocaleGlobalMarketsCryptoDirectionGet200ResponseToJSONTyped(value?: V2SnapshotLocaleGlobalMarketsCryptoDirectionGet200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'tickers': value['tickers'] == null ? undefined : ((value['tickers'] as Array<any>).map(V2SnapshotLocaleGlobalMarketsCryptoTickersGet200ResponseAllOfTickersInnerToJSON)),
    };
}

