// CF: https://polygon.io/docs/forex/get_v1_indicators_ema__fxticker

import { ITechnicalIndicatorsQuery } from "../stocks/sma";
import { IEma } from "../stocks/ema";
import { IGet, IRequestOptions } from "../transport/request.js";

export { IEma } from '../stocks/ema';

export const ema = async (
    get: IGet,
    symbol: string,
    query?: ITechnicalIndicatorsQuery,
    options?: IRequestOptions
): Promise<IEma> => get(`/v1/indicators/ema/${symbol}`, query, options);
