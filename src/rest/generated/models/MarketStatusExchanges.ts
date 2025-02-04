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
 * @interface MarketStatusExchanges
 */
export interface MarketStatusExchanges {
    /**
     * The status of the Nasdaq market.
     * @type {string}
     * @memberof MarketStatusExchanges
     */
    nasdaq?: string;
    /**
     * The status of the NYSE market.
     * @type {string}
     * @memberof MarketStatusExchanges
     */
    nyse?: string;
    /**
     * The status of the OTC market.
     * @type {string}
     * @memberof MarketStatusExchanges
     */
    otc?: string;
}

/**
 * Check if a given object implements the MarketStatusExchanges interface.
 */
export function instanceOfMarketStatusExchanges(value: object): value is MarketStatusExchanges {
    return true;
}

export function MarketStatusExchangesFromJSON(json: any): MarketStatusExchanges {
    return MarketStatusExchangesFromJSONTyped(json, false);
}

export function MarketStatusExchangesFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketStatusExchanges {
    if (json == null) {
        return json;
    }
    return {
        
        'nasdaq': json['nasdaq'] == null ? undefined : json['nasdaq'],
        'nyse': json['nyse'] == null ? undefined : json['nyse'],
        'otc': json['otc'] == null ? undefined : json['otc'],
    };
}

export function MarketStatusExchangesToJSON(json: any): MarketStatusExchanges {
    return MarketStatusExchangesToJSONTyped(json, false);
}

export function MarketStatusExchangesToJSONTyped(value?: MarketStatusExchanges | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'nasdaq': value['nasdaq'],
        'nyse': value['nyse'],
        'otc': value['otc'],
    };
}

