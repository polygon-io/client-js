// CF: https://polygon.io/docs/options/get_v1_indicators_macd__optionsticker

import { ITechnicalIndicatorsQuery } from "../stocks/sma";
import { IMacd } from "../stocks/macd";
import { get } from "../transport/request";

export { IMacd } from '../stocks/macd';

export const macd = async (
    apiKey: string,
    apiBase: string,
    symbol: string,
    query?: ITechnicalIndicatorsQuery,
): Promise<IMacd> => get(`/v1/indicators/macd/${symbol}`, apiKey, apiBase, query);
