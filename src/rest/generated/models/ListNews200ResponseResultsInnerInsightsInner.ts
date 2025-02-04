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
 * @interface ListNews200ResponseResultsInnerInsightsInner
 */
export interface ListNews200ResponseResultsInnerInsightsInner {
    /**
     * The sentiment of the insight.
     * @type {string}
     * @memberof ListNews200ResponseResultsInnerInsightsInner
     */
    sentiment: ListNews200ResponseResultsInnerInsightsInnerSentimentEnum;
    /**
     * The reasoning behind the sentiment.
     * @type {string}
     * @memberof ListNews200ResponseResultsInnerInsightsInner
     */
    sentimentReasoning: string;
    /**
     * The ticker symbol associated with the insight.
     * @type {string}
     * @memberof ListNews200ResponseResultsInnerInsightsInner
     */
    ticker: string;
}


/**
 * @export
 */
export const ListNews200ResponseResultsInnerInsightsInnerSentimentEnum = {
    Positive: 'positive',
    Neutral: 'neutral',
    Negative: 'negative'
} as const;
export type ListNews200ResponseResultsInnerInsightsInnerSentimentEnum = typeof ListNews200ResponseResultsInnerInsightsInnerSentimentEnum[keyof typeof ListNews200ResponseResultsInnerInsightsInnerSentimentEnum];


/**
 * Check if a given object implements the ListNews200ResponseResultsInnerInsightsInner interface.
 */
export function instanceOfListNews200ResponseResultsInnerInsightsInner(value: object): value is ListNews200ResponseResultsInnerInsightsInner {
    if (!('sentiment' in value) || value['sentiment'] === undefined) return false;
    if (!('sentimentReasoning' in value) || value['sentimentReasoning'] === undefined) return false;
    if (!('ticker' in value) || value['ticker'] === undefined) return false;
    return true;
}

export function ListNews200ResponseResultsInnerInsightsInnerFromJSON(json: any): ListNews200ResponseResultsInnerInsightsInner {
    return ListNews200ResponseResultsInnerInsightsInnerFromJSONTyped(json, false);
}

export function ListNews200ResponseResultsInnerInsightsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListNews200ResponseResultsInnerInsightsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'sentiment': json['sentiment'],
        'sentimentReasoning': json['sentiment_reasoning'],
        'ticker': json['ticker'],
    };
}

export function ListNews200ResponseResultsInnerInsightsInnerToJSON(json: any): ListNews200ResponseResultsInnerInsightsInner {
    return ListNews200ResponseResultsInnerInsightsInnerToJSONTyped(json, false);
}

export function ListNews200ResponseResultsInnerInsightsInnerToJSONTyped(value?: ListNews200ResponseResultsInnerInsightsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'sentiment': value['sentiment'],
        'sentiment_reasoning': value['sentimentReasoning'],
        'ticker': value['ticker'],
    };
}

