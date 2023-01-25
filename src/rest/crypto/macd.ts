// CF: https://polygon.io/docs/crypto/get_v1_indicators_macd__cryptoticker

import { ITechnicalIndicatorsQuery } from "../stocks/sma";
import { IMacd } from "../stocks/macd";
import { IGet, IRequestOptions } from "../transport/request.js";

export { IMacd } from '../stocks/macd';

export const macd = async (
    get: IGet,
    symbol: string,
    query?: ITechnicalIndicatorsQuery,
    options?: IRequestOptions
): Promise<IMacd> => get(`/v1/indicators/macd/${symbol}`, query, options);
