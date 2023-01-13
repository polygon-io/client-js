// CF: https://polygon.io/docs/options/get_v1_indicators_sma__optionsticker

import { ISma, ITechnicalIndicatorsQuery } from "../stocks/sma";
import { get } from "../transport/request";

export { ISma } from '../stocks/sma';

export const sma = async (
    apiKey: string,
    apiBase: string,
    symbol: string,
    query?: ITechnicalIndicatorsQuery,
): Promise<ISma> => get(`/v1/indicators/sma/${symbol}`, apiKey, apiBase, query);
