// CF: https://polygon.io/docs/stocks/get_v1_indicators_macd__stockticker

import { IUnderyling, IValue, ITechnicalIndicatorsQuery } from "./sma";
import { get } from "../transport/request";

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
    apiKey: string,
    apiBase: string,
    symbol: string,
    query?: ITechnicalIndicatorsQuery,
): Promise<IMacd> => get(`/v1/indicators/macd/${symbol}`, apiKey, apiBase, query);
