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
import type { CryptoSMA200ResponseResults } from './CryptoSMA200ResponseResults';
import {
    CryptoSMA200ResponseResultsFromJSON,
    CryptoSMA200ResponseResultsFromJSONTyped,
    CryptoSMA200ResponseResultsToJSON,
    CryptoSMA200ResponseResultsToJSONTyped,
} from './CryptoSMA200ResponseResults';

/**
 * 
 * @export
 * @interface CryptoSMA200Response
 */
export interface CryptoSMA200Response {
    /**
     * If present, this value can be used to fetch the next page of data.
     * @type {string}
     * @memberof CryptoSMA200Response
     */
    nextUrl?: string;
    /**
     * A request id assigned by the server.
     * @type {string}
     * @memberof CryptoSMA200Response
     */
    requestId?: string;
    /**
     * 
     * @type {CryptoSMA200ResponseResults}
     * @memberof CryptoSMA200Response
     */
    results?: CryptoSMA200ResponseResults;
    /**
     * The status of this request's response.
     * @type {string}
     * @memberof CryptoSMA200Response
     */
    status?: string;
}

/**
 * Check if a given object implements the CryptoSMA200Response interface.
 */
export function instanceOfCryptoSMA200Response(value: object): value is CryptoSMA200Response {
    return true;
}

export function CryptoSMA200ResponseFromJSON(json: any): CryptoSMA200Response {
    return CryptoSMA200ResponseFromJSONTyped(json, false);
}

export function CryptoSMA200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CryptoSMA200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'nextUrl': json['next_url'] == null ? undefined : json['next_url'],
        'requestId': json['request_id'] == null ? undefined : json['request_id'],
        'results': json['results'] == null ? undefined : CryptoSMA200ResponseResultsFromJSON(json['results']),
        'status': json['status'] == null ? undefined : json['status'],
    };
}

export function CryptoSMA200ResponseToJSON(json: any): CryptoSMA200Response {
    return CryptoSMA200ResponseToJSONTyped(json, false);
}

export function CryptoSMA200ResponseToJSONTyped(value?: CryptoSMA200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'next_url': value['nextUrl'],
        'request_id': value['requestId'],
        'results': CryptoSMA200ResponseResultsToJSON(value['results']),
        'status': value['status'],
    };
}

