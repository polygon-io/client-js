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
import type { LastTradeOptions200ResponseResults } from './LastTradeOptions200ResponseResults';
import {
    LastTradeOptions200ResponseResultsFromJSON,
    LastTradeOptions200ResponseResultsFromJSONTyped,
    LastTradeOptions200ResponseResultsToJSON,
    LastTradeOptions200ResponseResultsToJSONTyped,
} from './LastTradeOptions200ResponseResults';

/**
 * 
 * @export
 * @interface LastTradeOptions200Response
 */
export interface LastTradeOptions200Response {
    /**
     * A request id assigned by the server.
     * @type {string}
     * @memberof LastTradeOptions200Response
     */
    requestId: string;
    /**
     * 
     * @type {LastTradeOptions200ResponseResults}
     * @memberof LastTradeOptions200Response
     */
    results?: LastTradeOptions200ResponseResults;
    /**
     * The status of this request's response.
     * @type {string}
     * @memberof LastTradeOptions200Response
     */
    status: string;
}

/**
 * Check if a given object implements the LastTradeOptions200Response interface.
 */
export function instanceOfLastTradeOptions200Response(value: object): value is LastTradeOptions200Response {
    if (!('requestId' in value) || value['requestId'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function LastTradeOptions200ResponseFromJSON(json: any): LastTradeOptions200Response {
    return LastTradeOptions200ResponseFromJSONTyped(json, false);
}

export function LastTradeOptions200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LastTradeOptions200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'requestId': json['request_id'],
        'results': json['results'] == null ? undefined : LastTradeOptions200ResponseResultsFromJSON(json['results']),
        'status': json['status'],
    };
}

export function LastTradeOptions200ResponseToJSON(json: any): LastTradeOptions200Response {
    return LastTradeOptions200ResponseToJSONTyped(json, false);
}

export function LastTradeOptions200ResponseToJSONTyped(value?: LastTradeOptions200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'request_id': value['requestId'],
        'results': LastTradeOptions200ResponseResultsToJSON(value['results']),
        'status': value['status'],
    };
}

