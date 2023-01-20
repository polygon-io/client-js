// CF: https://polygon.io/docs/forex/get_v2_aggs_ticker__forexTicker__prev

import { IGet, IRequestOptions } from "../transport/request";
import {
  IAggsPreviousCloseQuery,
  IAggsPreviousClose,
} from "../stocks/previousClose";

export const previousClose = async (
  get: IGet,
  symbol: string,
  query?: IAggsPreviousCloseQuery,
  options?: IRequestOptions
): Promise<IAggsPreviousClose> =>
  get(`/v2/aggs/ticker/${symbol}/prev`, query, options);
