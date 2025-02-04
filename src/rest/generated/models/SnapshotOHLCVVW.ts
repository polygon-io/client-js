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
 * @interface SnapshotOHLCVVW
 */
export interface SnapshotOHLCVVW {
    /**
     * The close price for the symbol in the given time period.
     * @type {number}
     * @memberof SnapshotOHLCVVW
     */
    c: number;
    /**
     * The highest price for the symbol in the given time period.
     * @type {number}
     * @memberof SnapshotOHLCVVW
     */
    h: number;
    /**
     * The lowest price for the symbol in the given time period.
     * @type {number}
     * @memberof SnapshotOHLCVVW
     */
    l: number;
    /**
     * The open price for the symbol in the given time period.
     * @type {number}
     * @memberof SnapshotOHLCVVW
     */
    o: number;
    /**
     * The trading volume of the symbol in the given time period.
     * @type {number}
     * @memberof SnapshotOHLCVVW
     */
    v: number;
    /**
     * The volume weighted average price.
     * @type {number}
     * @memberof SnapshotOHLCVVW
     */
    vw: number;
}

/**
 * Check if a given object implements the SnapshotOHLCVVW interface.
 */
export function instanceOfSnapshotOHLCVVW(value: object): value is SnapshotOHLCVVW {
    if (!('c' in value) || value['c'] === undefined) return false;
    if (!('h' in value) || value['h'] === undefined) return false;
    if (!('l' in value) || value['l'] === undefined) return false;
    if (!('o' in value) || value['o'] === undefined) return false;
    if (!('v' in value) || value['v'] === undefined) return false;
    if (!('vw' in value) || value['vw'] === undefined) return false;
    return true;
}

export function SnapshotOHLCVVWFromJSON(json: any): SnapshotOHLCVVW {
    return SnapshotOHLCVVWFromJSONTyped(json, false);
}

export function SnapshotOHLCVVWFromJSONTyped(json: any, ignoreDiscriminator: boolean): SnapshotOHLCVVW {
    if (json == null) {
        return json;
    }
    return {
        
        'c': json['c'],
        'h': json['h'],
        'l': json['l'],
        'o': json['o'],
        'v': json['v'],
        'vw': json['vw'],
    };
}

export function SnapshotOHLCVVWToJSON(json: any): SnapshotOHLCVVW {
    return SnapshotOHLCVVWToJSONTyped(json, false);
}

export function SnapshotOHLCVVWToJSONTyped(value?: SnapshotOHLCVVW | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'c': value['c'],
        'h': value['h'],
        'l': value['l'],
        'o': value['o'],
        'v': value['v'],
        'vw': value['vw'],
    };
}

