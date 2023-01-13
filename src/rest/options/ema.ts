// CF: https://polygon.io/docs/options/get_v1_indicators_ema__optionsticker

import { ITechnicalIndicatorsQuery } from "../stocks/sma";
import { IEma } from "../stocks/ema";
import { get } from "../transport/request";

export { IEma } from '../stocks/ema';

export const ema = async (
    apiKey: string,
    apiBase: string,
    symbol: string,
    query?: ITechnicalIndicatorsQuery,
): Promise<IEma> => get(`/v1/indicators/ema/${symbol}`, apiKey, apiBase, query);
