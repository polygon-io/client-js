// CF: https://polygon.io/docs/stocks/get_v1_indicators_ema__stockticker

import { IUnderyling, IValue, ITechnicalIndicatorsQuery } from "./sma";
import { IGet, IRequestOptions } from "../transport/request.js";

export interface IEmaResults {
    underlying?: IUnderyling;
    values: IValue[];
};

export interface IEma {
    next_url?: string;
    request_id?: string;
    status?: string;
    results?: IEmaResults;
};

export const ema = async (
    get: IGet,
    symbol: string,
    query?: ITechnicalIndicatorsQuery,
    options?: IRequestOptions
): Promise<IEma> => get(`/v1/indicators/ema/${symbol}`, query, options);
