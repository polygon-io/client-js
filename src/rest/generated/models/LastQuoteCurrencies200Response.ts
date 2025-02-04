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
import type { RealTimeCurrencyConversion200ResponseLast } from './RealTimeCurrencyConversion200ResponseLast';
import {
    RealTimeCurrencyConversion200ResponseLastFromJSON,
    RealTimeCurrencyConversion200ResponseLastFromJSONTyped,
    RealTimeCurrencyConversion200ResponseLastToJSON,
    RealTimeCurrencyConversion200ResponseLastToJSONTyped,
} from './RealTimeCurrencyConversion200ResponseLast';

/**
 * Contains the requested quote data for the specified ticker.
 * @export
 * @interface LastQuoteCurrencies200Response
 */
export interface LastQuoteCurrencies200Response {
    /**
     * 
     * @type {RealTimeCurrencyConversion200ResponseLast}
     * @memberof LastQuoteCurrencies200Response
     */
    last?: RealTimeCurrencyConversion200ResponseLast;
    /**
     * A request id assigned by the server.
     * @type {string}
     * @memberof LastQuoteCurrencies200Response
     */
    requestId: string;
    /**
     * The status of this request's response.
     * @type {string}
     * @memberof LastQuoteCurrencies200Response
     */
    status: string;
    /**
     * The symbol pair that was evaluated from the request.
     * @type {string}
     * @memberof LastQuoteCurrencies200Response
     */
    symbol: string;
}

/**
 * Check if a given object implements the LastQuoteCurrencies200Response interface.
 */
export function instanceOfLastQuoteCurrencies200Response(value: object): value is LastQuoteCurrencies200Response {
    if (!('requestId' in value) || value['requestId'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('symbol' in value) || value['symbol'] === undefined) return false;
    return true;
}

export function LastQuoteCurrencies200ResponseFromJSON(json: any): LastQuoteCurrencies200Response {
    return LastQuoteCurrencies200ResponseFromJSONTyped(json, false);
}

export function LastQuoteCurrencies200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LastQuoteCurrencies200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'last': json['last'] == null ? undefined : RealTimeCurrencyConversion200ResponseLastFromJSON(json['last']),
        'requestId': json['request_id'],
        'status': json['status'],
        'symbol': json['symbol'],
    };
}

export function LastQuoteCurrencies200ResponseToJSON(json: any): LastQuoteCurrencies200Response {
    return LastQuoteCurrencies200ResponseToJSONTyped(json, false);
}

export function LastQuoteCurrencies200ResponseToJSONTyped(value?: LastQuoteCurrencies200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'last': RealTimeCurrencyConversion200ResponseLastToJSON(value['last']),
        'request_id': value['requestId'],
        'status': value['status'],
        'symbol': value['symbol'],
    };
}

