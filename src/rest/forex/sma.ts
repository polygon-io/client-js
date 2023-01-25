// CF: https://polygon.io/docs/forex/get_v1_indicators_sma__fxticker

import { ISma, ITechnicalIndicatorsQuery } from "../stocks/sma";
import { IGet, IRequestOptions } from "../transport/request.js";

export { ISma } from '../stocks/sma';

export const sma = async (
    get: IGet,
    symbol: string,
    query?: ITechnicalIndicatorsQuery,
    options?: IRequestOptions
): Promise<ISma> => get(`/v1/indicators/sma/${symbol}`, query, options);
