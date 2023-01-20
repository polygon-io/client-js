// CF: https://polygon.io/docs/stocks/get_v1_indicators_sma__stockticker

import { IAggsResults } from "./aggregates";
import { IGet, IRequestOptions, IPolygonQuery } from "../transport/request";

export interface IValue {
    histogram?: number;
    signal?: number;
    timestamp?: number;
    value?: number;
};

export interface IUnderyling {
    aggregates: IAggsResults[];
    url?: string;
};

export interface ITechnicalIndicatorsQuery extends IPolygonQuery {
    timestamp?: string;
    "timestamp.lt"?: string; 
    "timestamp.lte"?: string;
    "timestamp.gt"?: string; 
    "timestamp.gte"?: string;
    timespan?: 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';
    adjusted?: boolean;
    short_window?: number;
    long_window?: number;
    signal_window?: number;
    window?: number;
    series_type?: 'open' | 'high' | 'low' | 'close';
    expand_underlying?: boolean;
    order?: 'asc' | 'desc';
    limit?: number;
};

export interface ISmaResults {
    underlying?: IUnderyling;
    values: IValue[];
};

export interface ISma {
    next_url?: string;
    request_id?: string;
    status?: string;
    results?: ISmaResults;
};

export const sma = async (
    get: IGet,
    symbol: string,
    query?: ITechnicalIndicatorsQuery,
    options?: IRequestOptions
): Promise<ISma> => get(`/v1/indicators/sma/${symbol}`, query, options);
