// CF: https://polygon.io/docs/options/get_v1_indicators_rsi__optionsticker

import { ITechnicalIndicatorsQuery } from "../stocks/sma";
import { IRsi } from "../stocks/rsi";
import { IGet, IRequestOptions } from "../transport/request.js";

export { IRsi } from '../stocks/rsi';

export const rsi = async (
    get: IGet,
    symbol: string,
    query?: ITechnicalIndicatorsQuery,
    options?: IRequestOptions
): Promise<IRsi> => get(`/v1/indicators/rsi/${symbol}`, query, options);
