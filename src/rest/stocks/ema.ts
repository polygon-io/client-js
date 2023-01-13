// CF: https://polygon.io/docs/stocks/get_v1_indicators_ema__stockticker

import { IUnderyling, IValue, ITechnicalIndicatorsQuery } from "./sma";
import { get } from "../transport/request";

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
    apiKey: string,
    apiBase: string,
    symbol: string,
    query?: ITechnicalIndicatorsQuery,
): Promise<IEma> => get(`/v1/indicators/ema/${symbol}`, apiKey, apiBase, query);
