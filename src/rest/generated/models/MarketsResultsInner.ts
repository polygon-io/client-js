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
 * 
 * @export
 * @interface MarketsResultsInner
 */
export interface MarketsResultsInner {
    /**
     * A description of the market.
     * @type {string}
     * @memberof MarketsResultsInner
     */
    desc?: string;
    /**
     * The name of the market.
     * @type {string}
     * @memberof MarketsResultsInner
     */
    market?: string;
}

/**
 * Check if a given object implements the MarketsResultsInner interface.
 */
export function instanceOfMarketsResultsInner(value: object): value is MarketsResultsInner {
    return true;
}

export function MarketsResultsInnerFromJSON(json: any): MarketsResultsInner {
    return MarketsResultsInnerFromJSONTyped(json, false);
}

export function MarketsResultsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketsResultsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'desc': json['desc'] == null ? undefined : json['desc'],
        'market': json['market'] == null ? undefined : json['market'],
    };
}

export function MarketsResultsInnerToJSON(json: any): MarketsResultsInner {
    return MarketsResultsInnerToJSONTyped(json, false);
}

export function MarketsResultsInnerToJSONTyped(value?: MarketsResultsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'desc': value['desc'],
        'market': value['market'],
    };
}

