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
import type { CryptoEMA200ResponseResultsValuesInner } from './CryptoEMA200ResponseResultsValuesInner';
import {
    CryptoEMA200ResponseResultsValuesInnerFromJSON,
    CryptoEMA200ResponseResultsValuesInnerFromJSONTyped,
    CryptoEMA200ResponseResultsValuesInnerToJSON,
    CryptoEMA200ResponseResultsValuesInnerToJSONTyped,
} from './CryptoEMA200ResponseResultsValuesInner';
import type { CryptoEMA200ResponseResultsUnderlying } from './CryptoEMA200ResponseResultsUnderlying';
import {
    CryptoEMA200ResponseResultsUnderlyingFromJSON,
    CryptoEMA200ResponseResultsUnderlyingFromJSONTyped,
    CryptoEMA200ResponseResultsUnderlyingToJSON,
    CryptoEMA200ResponseResultsUnderlyingToJSONTyped,
} from './CryptoEMA200ResponseResultsUnderlying';

/**
 * 
 * @export
 * @interface CryptoSMA200ResponseResults
 */
export interface CryptoSMA200ResponseResults {
    /**
     * 
     * @type {CryptoEMA200ResponseResultsUnderlying}
     * @memberof CryptoSMA200ResponseResults
     */
    underlying?: CryptoEMA200ResponseResultsUnderlying;
    /**
     * 
     * @type {Array<CryptoEMA200ResponseResultsValuesInner>}
     * @memberof CryptoSMA200ResponseResults
     */
    values?: Array<CryptoEMA200ResponseResultsValuesInner>;
}

/**
 * Check if a given object implements the CryptoSMA200ResponseResults interface.
 */
export function instanceOfCryptoSMA200ResponseResults(value: object): value is CryptoSMA200ResponseResults {
    return true;
}

export function CryptoSMA200ResponseResultsFromJSON(json: any): CryptoSMA200ResponseResults {
    return CryptoSMA200ResponseResultsFromJSONTyped(json, false);
}

export function CryptoSMA200ResponseResultsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CryptoSMA200ResponseResults {
    if (json == null) {
        return json;
    }
    return {
        
        'underlying': json['underlying'] == null ? undefined : CryptoEMA200ResponseResultsUnderlyingFromJSON(json['underlying']),
        'values': json['values'] == null ? undefined : ((json['values'] as Array<any>).map(CryptoEMA200ResponseResultsValuesInnerFromJSON)),
    };
}

export function CryptoSMA200ResponseResultsToJSON(json: any): CryptoSMA200ResponseResults {
    return CryptoSMA200ResponseResultsToJSONTyped(json, false);
}

export function CryptoSMA200ResponseResultsToJSONTyped(value?: CryptoSMA200ResponseResults | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'underlying': CryptoEMA200ResponseResultsUnderlyingToJSON(value['underlying']),
        'values': value['values'] == null ? undefined : ((value['values'] as Array<any>).map(CryptoEMA200ResponseResultsValuesInnerToJSON)),
    };
}

