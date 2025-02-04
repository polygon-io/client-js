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
 * @interface LastTradeCrypto200ResponseLast
 */
export interface LastTradeCrypto200ResponseLast {
    /**
     * A list of condition codes.
     * @type {Array<number>}
     * @memberof LastTradeCrypto200ResponseLast
     */
    conditions?: Array<number>;
    /**
     * The exchange that this crypto trade happened on.  
     * See <a href="https://polygon.io/docs/crypto/get_v3_reference_exchanges">Exchanges</a> for a mapping of exchanges to IDs.
     * @type {number}
     * @memberof LastTradeCrypto200ResponseLast
     */
    exchange: number;
    /**
     * The price of the trade. This is the actual dollar value per whole share of
     * this trade. A trade of 100 shares with a price of $2.00 would be worth a
     * total dollar value of $200.00.
     * @type {number}
     * @memberof LastTradeCrypto200ResponseLast
     */
    price: number;
    /**
     * The size of a trade (also known as volume).
     * @type {number}
     * @memberof LastTradeCrypto200ResponseLast
     */
    size: number;
    /**
     * The Unix millisecond timestamp.
     * @type {number}
     * @memberof LastTradeCrypto200ResponseLast
     */
    timestamp: number;
}

/**
 * Check if a given object implements the LastTradeCrypto200ResponseLast interface.
 */
export function instanceOfLastTradeCrypto200ResponseLast(value: object): value is LastTradeCrypto200ResponseLast {
    if (!('exchange' in value) || value['exchange'] === undefined) return false;
    if (!('price' in value) || value['price'] === undefined) return false;
    if (!('size' in value) || value['size'] === undefined) return false;
    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    return true;
}

export function LastTradeCrypto200ResponseLastFromJSON(json: any): LastTradeCrypto200ResponseLast {
    return LastTradeCrypto200ResponseLastFromJSONTyped(json, false);
}

export function LastTradeCrypto200ResponseLastFromJSONTyped(json: any, ignoreDiscriminator: boolean): LastTradeCrypto200ResponseLast {
    if (json == null) {
        return json;
    }
    return {
        
        'conditions': json['conditions'] == null ? undefined : json['conditions'],
        'exchange': json['exchange'],
        'price': json['price'],
        'size': json['size'],
        'timestamp': json['timestamp'],
    };
}

export function LastTradeCrypto200ResponseLastToJSON(json: any): LastTradeCrypto200ResponseLast {
    return LastTradeCrypto200ResponseLastToJSONTyped(json, false);
}

export function LastTradeCrypto200ResponseLastToJSONTyped(value?: LastTradeCrypto200ResponseLast | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'conditions': value['conditions'],
        'exchange': value['exchange'],
        'price': value['price'],
        'size': value['size'],
        'timestamp': value['timestamp'],
    };
}

