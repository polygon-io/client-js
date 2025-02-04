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
 * 
 * @export
 * @interface RealTimeCurrencyConversion200Response
 */
export interface RealTimeCurrencyConversion200Response {
    /**
     * The result of the conversion.
     * @type {number}
     * @memberof RealTimeCurrencyConversion200Response
     */
    converted: number;
    /**
     * The "from" currency symbol.
     * @type {string}
     * @memberof RealTimeCurrencyConversion200Response
     */
    from: string;
    /**
     * The amount to convert.
     * @type {number}
     * @memberof RealTimeCurrencyConversion200Response
     */
    initialAmount: number;
    /**
     * 
     * @type {RealTimeCurrencyConversion200ResponseLast}
     * @memberof RealTimeCurrencyConversion200Response
     */
    last?: RealTimeCurrencyConversion200ResponseLast;
    /**
     * A request id assigned by the server.
     * @type {string}
     * @memberof RealTimeCurrencyConversion200Response
     */
    requestId: string;
    /**
     * The status of this request's response.
     * @type {string}
     * @memberof RealTimeCurrencyConversion200Response
     */
    status: string;
    /**
     * The symbol pair that was evaluated from the request.
     * @type {string}
     * @memberof RealTimeCurrencyConversion200Response
     */
    symbol: string;
    /**
     * The "to" currency symbol.
     * @type {string}
     * @memberof RealTimeCurrencyConversion200Response
     */
    to: string;
}

/**
 * Check if a given object implements the RealTimeCurrencyConversion200Response interface.
 */
export function instanceOfRealTimeCurrencyConversion200Response(value: object): value is RealTimeCurrencyConversion200Response {
    if (!('converted' in value) || value['converted'] === undefined) return false;
    if (!('from' in value) || value['from'] === undefined) return false;
    if (!('initialAmount' in value) || value['initialAmount'] === undefined) return false;
    if (!('requestId' in value) || value['requestId'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('symbol' in value) || value['symbol'] === undefined) return false;
    if (!('to' in value) || value['to'] === undefined) return false;
    return true;
}

export function RealTimeCurrencyConversion200ResponseFromJSON(json: any): RealTimeCurrencyConversion200Response {
    return RealTimeCurrencyConversion200ResponseFromJSONTyped(json, false);
}

export function RealTimeCurrencyConversion200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RealTimeCurrencyConversion200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'converted': json['converted'],
        'from': json['from'],
        'initialAmount': json['initialAmount'],
        'last': json['last'] == null ? undefined : RealTimeCurrencyConversion200ResponseLastFromJSON(json['last']),
        'requestId': json['request_id'],
        'status': json['status'],
        'symbol': json['symbol'],
        'to': json['to'],
    };
}

export function RealTimeCurrencyConversion200ResponseToJSON(json: any): RealTimeCurrencyConversion200Response {
    return RealTimeCurrencyConversion200ResponseToJSONTyped(json, false);
}

export function RealTimeCurrencyConversion200ResponseToJSONTyped(value?: RealTimeCurrencyConversion200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'converted': value['converted'],
        'from': value['from'],
        'initialAmount': value['initialAmount'],
        'last': RealTimeCurrencyConversion200ResponseLastToJSON(value['last']),
        'request_id': value['requestId'],
        'status': value['status'],
        'symbol': value['symbol'],
        'to': value['to'],
    };
}

