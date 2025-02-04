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
import type { ListOptionsContracts200ResponseResultsInnerAdditionalUnderlyingsInner } from './ListOptionsContracts200ResponseResultsInnerAdditionalUnderlyingsInner';
import {
    ListOptionsContracts200ResponseResultsInnerAdditionalUnderlyingsInnerFromJSON,
    ListOptionsContracts200ResponseResultsInnerAdditionalUnderlyingsInnerFromJSONTyped,
    ListOptionsContracts200ResponseResultsInnerAdditionalUnderlyingsInnerToJSON,
    ListOptionsContracts200ResponseResultsInnerAdditionalUnderlyingsInnerToJSONTyped,
} from './ListOptionsContracts200ResponseResultsInnerAdditionalUnderlyingsInner';

/**
 * 
 * @export
 * @interface ListOptionsContracts200ResponseResultsInner
 */
export interface ListOptionsContracts200ResponseResultsInner {
    /**
     * If an option contract has additional underlyings or deliverables associated with it, they will appear here.
     * See <a rel="noopener noreferrer nofollow" target="_blank" href="https://www.optionseducation.org/referencelibrary/faq/splits-mergers-spinoffs-bankruptcies">here</a> for some examples of what might cause a contract to have additional underlyings.
     * @type {Array<ListOptionsContracts200ResponseResultsInnerAdditionalUnderlyingsInner>}
     * @memberof ListOptionsContracts200ResponseResultsInner
     */
    additionalUnderlyings?: Array<ListOptionsContracts200ResponseResultsInnerAdditionalUnderlyingsInner>;
    /**
     * The 6 letter CFI code of the contract (defined in <a rel="nofollow" target="_blank" href="https://en.wikipedia.org/wiki/ISO_10962">ISO 10962</a>)
     * @type {string}
     * @memberof ListOptionsContracts200ResponseResultsInner
     */
    cfi?: string;
    /**
     * The type of contract. Can be "put", "call", or in some rare cases, "other".
     * @type {string}
     * @memberof ListOptionsContracts200ResponseResultsInner
     */
    contractType?: string;
    /**
     * The correction number for this option contract.
     * @type {number}
     * @memberof ListOptionsContracts200ResponseResultsInner
     */
    correction?: number;
    /**
     * The exercise style of this contract. See <a rel="nofollow" target="_blank" href="https://en.wikipedia.org/wiki/Option_style">this link</a> for more details on exercise styles.
     * @type {string}
     * @memberof ListOptionsContracts200ResponseResultsInner
     */
    exerciseStyle?: ListOptionsContracts200ResponseResultsInnerExerciseStyleEnum;
    /**
     * The contract's expiration date in YYYY-MM-DD format.
     * @type {string}
     * @memberof ListOptionsContracts200ResponseResultsInner
     */
    expirationDate?: string;
    /**
     * The MIC code of the primary exchange that this contract is listed on.
     * @type {string}
     * @memberof ListOptionsContracts200ResponseResultsInner
     */
    primaryExchange?: string;
    /**
     * The number of shares per contract for this contract.
     * @type {number}
     * @memberof ListOptionsContracts200ResponseResultsInner
     */
    sharesPerContract?: number;
    /**
     * The strike price of the option contract.
     * @type {number}
     * @memberof ListOptionsContracts200ResponseResultsInner
     */
    strikePrice?: number;
    /**
     * The ticker for the option contract.
     * @type {string}
     * @memberof ListOptionsContracts200ResponseResultsInner
     */
    ticker?: string;
    /**
     * The underlying ticker that the option contract relates to.
     * @type {string}
     * @memberof ListOptionsContracts200ResponseResultsInner
     */
    underlyingTicker?: string;
}


/**
 * @export
 */
export const ListOptionsContracts200ResponseResultsInnerExerciseStyleEnum = {
    American: 'american',
    European: 'european',
    Bermudan: 'bermudan'
} as const;
export type ListOptionsContracts200ResponseResultsInnerExerciseStyleEnum = typeof ListOptionsContracts200ResponseResultsInnerExerciseStyleEnum[keyof typeof ListOptionsContracts200ResponseResultsInnerExerciseStyleEnum];


/**
 * Check if a given object implements the ListOptionsContracts200ResponseResultsInner interface.
 */
export function instanceOfListOptionsContracts200ResponseResultsInner(value: object): value is ListOptionsContracts200ResponseResultsInner {
    return true;
}

export function ListOptionsContracts200ResponseResultsInnerFromJSON(json: any): ListOptionsContracts200ResponseResultsInner {
    return ListOptionsContracts200ResponseResultsInnerFromJSONTyped(json, false);
}

export function ListOptionsContracts200ResponseResultsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListOptionsContracts200ResponseResultsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'additionalUnderlyings': json['additional_underlyings'] == null ? undefined : ((json['additional_underlyings'] as Array<any>).map(ListOptionsContracts200ResponseResultsInnerAdditionalUnderlyingsInnerFromJSON)),
        'cfi': json['cfi'] == null ? undefined : json['cfi'],
        'contractType': json['contract_type'] == null ? undefined : json['contract_type'],
        'correction': json['correction'] == null ? undefined : json['correction'],
        'exerciseStyle': json['exercise_style'] == null ? undefined : json['exercise_style'],
        'expirationDate': json['expiration_date'] == null ? undefined : json['expiration_date'],
        'primaryExchange': json['primary_exchange'] == null ? undefined : json['primary_exchange'],
        'sharesPerContract': json['shares_per_contract'] == null ? undefined : json['shares_per_contract'],
        'strikePrice': json['strike_price'] == null ? undefined : json['strike_price'],
        'ticker': json['ticker'] == null ? undefined : json['ticker'],
        'underlyingTicker': json['underlying_ticker'] == null ? undefined : json['underlying_ticker'],
    };
}

export function ListOptionsContracts200ResponseResultsInnerToJSON(json: any): ListOptionsContracts200ResponseResultsInner {
    return ListOptionsContracts200ResponseResultsInnerToJSONTyped(json, false);
}

export function ListOptionsContracts200ResponseResultsInnerToJSONTyped(value?: ListOptionsContracts200ResponseResultsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'additional_underlyings': value['additionalUnderlyings'] == null ? undefined : ((value['additionalUnderlyings'] as Array<any>).map(ListOptionsContracts200ResponseResultsInnerAdditionalUnderlyingsInnerToJSON)),
        'cfi': value['cfi'],
        'contract_type': value['contractType'],
        'correction': value['correction'],
        'exercise_style': value['exerciseStyle'],
        'expiration_date': value['expirationDate'],
        'primary_exchange': value['primaryExchange'],
        'shares_per_contract': value['sharesPerContract'],
        'strike_price': value['strikePrice'],
        'ticker': value['ticker'],
        'underlying_ticker': value['underlyingTicker'],
    };
}

