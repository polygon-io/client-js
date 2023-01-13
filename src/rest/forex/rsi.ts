// CF: https://polygon.io/docs/forex/get_v1_indicators_rsi__fxticker

import { ITechnicalIndicatorsQuery } from "../stocks/sma";
import { IRsi } from "../stocks/rsi";
import { get } from "../transport/request";

export { IRsi } from '../stocks/rsi';

export const rsi = async (
    apiKey: string,
    apiBase: string,
    symbol: string,
    query?: ITechnicalIndicatorsQuery,
): Promise<IRsi> => get(`/v1/indicators/rsi/${symbol}`, apiKey, apiBase, query);
