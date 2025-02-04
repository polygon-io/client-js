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
 * @interface V2SnapshotLocaleGlobalMarketsCryptoTickersTickerGet200Response
 */
export interface V2SnapshotLocaleGlobalMarketsCryptoTickersTickerGet200Response {
    /**
     * The status of this request's response.
     * @type {string}
     * @memberof V2SnapshotLocaleGlobalMarketsCryptoTickersTickerGet200Response
     */
    status: string;
    /**
     * A request id assigned by the server.
     * @type {string}
     * @memberof V2SnapshotLocaleGlobalMarketsCryptoTickersTickerGet200Response
     */
    requestId: string;
    /**
     * 
     * @type {V2SnapshotLocaleGlobalMarketsCryptoTickersGet200ResponseAllOfTickersInner}
     * @memberof V2SnapshotLocaleGlobalMarketsCryptoTickersTickerGet200Response
     */
    ticker?: V2SnapshotLocaleGlobalMarketsCryptoTickersGet200ResponseAllOfTickersInner;
}

/**
 * Check if a given object implements the V2SnapshotLocaleGlobalMarketsCryptoTickersTickerGet200Response interface.
 */
export function instanceOfV2SnapshotLocaleGlobalMarketsCryptoTickersTickerGet200Response(value: object): value is V2SnapshotLocaleGlobalMarketsCryptoTickersTickerGet200Response {
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('requestId' in value) || value['requestId'] === undefined) return false;
    return true;
}

export function V2SnapshotLocaleGlobalMarketsCryptoTickersTickerGet200ResponseFromJSON(json: any): V2SnapshotLocaleGlobalMarketsCryptoTickersTickerGet200Response {
    return V2SnapshotLocaleGlobalMarketsCryptoTickersTickerGet200ResponseFromJSONTyped(json, false);
}

export function V2SnapshotLocaleGlobalMarketsCryptoTickersTickerGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2SnapshotLocaleGlobalMarketsCryptoTickersTickerGet200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'],
        'requestId': json['request_id'],
        'ticker': json['ticker'] == null ? undefined : V2SnapshotLocaleGlobalMarketsCryptoTickersGet200ResponseAllOfTickersInnerFromJSON(json['ticker']),
    };
}

export function V2SnapshotLocaleGlobalMarketsCryptoTickersTickerGet200ResponseToJSON(json: any): V2SnapshotLocaleGlobalMarketsCryptoTickersTickerGet200Response {
    return V2SnapshotLocaleGlobalMarketsCryptoTickersTickerGet200ResponseToJSONTyped(json, false);
}

export function V2SnapshotLocaleGlobalMarketsCryptoTickersTickerGet200ResponseToJSONTyped(value?: V2SnapshotLocaleGlobalMarketsCryptoTickersTickerGet200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status': value['status'],
        'request_id': value['requestId'],
        'ticker': V2SnapshotLocaleGlobalMarketsCryptoTickersGet200ResponseAllOfTickersInnerToJSON(value['ticker']),
    };
}

