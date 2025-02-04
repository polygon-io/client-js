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
import type { ListConditions200ResponseResultsInner } from './ListConditions200ResponseResultsInner';
import {
    ListConditions200ResponseResultsInnerFromJSON,
    ListConditions200ResponseResultsInnerFromJSONTyped,
    ListConditions200ResponseResultsInnerToJSON,
    ListConditions200ResponseResultsInnerToJSONTyped,
} from './ListConditions200ResponseResultsInner';

/**
 * 
 * @export
 * @interface ListConditions400Response
 */
export interface ListConditions400Response {
    /**
     * The total number of results for this request.
     * @type {number}
     * @memberof ListConditions400Response
     */
    count: number;
    /**
     * If present, this value can be used to fetch the next page of data.
     * @type {string}
     * @memberof ListConditions400Response
     */
    nextUrl?: string;
    /**
     * A request ID assigned by the server.
     * @type {string}
     * @memberof ListConditions400Response
     */
    requestId: string;
    /**
     * An array of conditions that match your query.
     * @type {Array<ListConditions200ResponseResultsInner>}
     * @memberof ListConditions400Response
     */
    results: Array<ListConditions200ResponseResultsInner>;
    /**
     * The status of this request's response.
     * @type {string}
     * @memberof ListConditions400Response
     */
    status: string;
}

/**
 * Check if a given object implements the ListConditions400Response interface.
 */
export function instanceOfListConditions400Response(value: object): value is ListConditions400Response {
    if (!('count' in value) || value['count'] === undefined) return false;
    if (!('requestId' in value) || value['requestId'] === undefined) return false;
    if (!('results' in value) || value['results'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function ListConditions400ResponseFromJSON(json: any): ListConditions400Response {
    return ListConditions400ResponseFromJSONTyped(json, false);
}

export function ListConditions400ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListConditions400Response {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'],
        'nextUrl': json['next_url'] == null ? undefined : json['next_url'],
        'requestId': json['request_id'],
        'results': ((json['results'] as Array<any>).map(ListConditions200ResponseResultsInnerFromJSON)),
        'status': json['status'],
    };
}

export function ListConditions400ResponseToJSON(json: any): ListConditions400Response {
    return ListConditions400ResponseToJSONTyped(json, false);
}

export function ListConditions400ResponseToJSONTyped(value?: ListConditions400Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'count': value['count'],
        'next_url': value['nextUrl'],
        'request_id': value['requestId'],
        'results': ((value['results'] as Array<any>).map(ListConditions200ResponseResultsInnerToJSON)),
        'status': value['status'],
    };
}

