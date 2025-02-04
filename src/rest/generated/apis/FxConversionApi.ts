import getWithGlobals from "../../transport/getWithGlobals";
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


import * as runtime from '../runtime';
import type {
  RealTimeCurrencyConversion200Response,
} from '../models/index';
import {
    RealTimeCurrencyConversion200ResponseFromJSON,
    RealTimeCurrencyConversion200ResponseToJSON,
} from '../models/index';

export interface RealTimeCurrencyConversionRequest {
    from: string;
    to: string;
    amount?: number;
    precision?: RealTimeCurrencyConversionPrecisionEnum;
}

/**
 * 
 */
export class FxConversionApi extends runtime.BaseAPI {

    /**
     * Get currency conversions using the latest market conversion rates. Note than you can convert in both directions. For example USD to CAD or CAD to USD.
     * Real-time Currency Conversion
     */
    async realTimeCurrencyConversionRaw(requestParameters: RealTimeCurrencyConversionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RealTimeCurrencyConversion200Response>> {
        if (requestParameters['from'] == null) {
            throw new runtime.RequiredError(
                'from',
                'Required parameter "from" was null or undefined when calling realTimeCurrencyConversion().'
            );
        }

        if (requestParameters['to'] == null) {
            throw new runtime.RequiredError(
                'to',
                'Required parameter "to" was null or undefined when calling realTimeCurrencyConversion().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['amount'] != null) {
            queryParameters['amount'] = requestParameters['amount'];
        }

        if (requestParameters['precision'] != null) {
            queryParameters['precision'] = requestParameters['precision'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["apiKey"] = await this.configuration.apiKey("apiKey"); // apiKey authentication
        }

        const response = await this.request({
            path: `/v1/conversion/{from}/{to}`.replace(`{${"from"}}`, encodeURIComponent(String(requestParameters['from']))).replace(`{${"to"}}`, encodeURIComponent(String(requestParameters['to']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RealTimeCurrencyConversion200ResponseFromJSON(jsonValue));
    }

    /**
     * Get currency conversions using the latest market conversion rates. Note than you can convert in both directions. For example USD to CAD or CAD to USD.
     * Real-time Currency Conversion
     */
    async realTimeCurrencyConversion(requestParameters: RealTimeCurrencyConversionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RealTimeCurrencyConversion200Response> {
        const response = await this.realTimeCurrencyConversionRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const RealTimeCurrencyConversionPrecisionEnum = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4
} as const;
export type RealTimeCurrencyConversionPrecisionEnum = typeof RealTimeCurrencyConversionPrecisionEnum[keyof typeof RealTimeCurrencyConversionPrecisionEnum];
