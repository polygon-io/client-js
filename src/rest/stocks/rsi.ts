// CF: https://polygon.io/docs/stocks/get_v1_indicators_macd__stockticker

import { IUnderyling, IValue, ITechnicalIndicatorsQuery } from "./sma";
import { IGet, IRequestOptions } from "../transport/request.js";

export interface IRsiResults {
    underlying?: IUnderyling;
    values: IValue[];
};

export interface IRsi {
    next_url?: string;
    request_id?: string;
    status?: string;
    results?: IRsiResults;
};

export const rsi = async (
    get: IGet,
    symbol: string,
    query?: ITechnicalIndicatorsQuery,
    options?: IRequestOptions
): Promise<IRsi> => get(`/v1/indicators/rsi/${symbol}`, query, options);
