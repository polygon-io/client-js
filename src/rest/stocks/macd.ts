// CF: https://polygon.io/docs/stocks/get_v1_indicators_macd__stockticker

import { IUnderyling, IValue, ITechnicalIndicatorsQuery } from "./sma";
import { IGet, IRequestOptions } from "../transport/request.js";

export interface IMacdResults {
    underlying?: IUnderyling;
    values: IValue[];
};

export interface IMacd {
    next_url?: string;
    request_id?: string;
    status?: string;
    results?: IMacdResults;
};

export const macd = async (
    get: IGet,
    symbol: string,
    query?: ITechnicalIndicatorsQuery,
    options?: IRequestOptions
): Promise<IMacd> => get(`/v1/indicators/macd/${symbol}`, query, options);
