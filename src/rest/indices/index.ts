import { getWithGlobals, IPolygonQuery, IRequestOptions } from "../transport/request.js";

import { IAggsQuery, IAggs, aggregates } from "../stocks/aggregates.js";
import {
  IDailyOpenCloseQuery,
  IDailyOpenClose,
  dailyOpenClose,
} from "../stocks/dailyOpenClose.js";
import {
  IAggsPreviousCloseQuery,
  IAggsPreviousClose,
  previousClose,
} from "../stocks/previousClose.js";
import {
  ISnapshot,
  snapshotTicker,
} from "../stocks/snapshots.js";
import { ISma, ITechnicalIndicatorsQuery, sma } from "../stocks/sma.js";
import { IEma, ema } from "../stocks/ema.js";
import { IMacd, macd } from "../stocks/macd.js";
import { IRsi, rsi } from "../stocks/rsi.js";

export { IAggsQuery, IAggs } from "../stocks/aggregates.js";
export {
  IAggsGroupedDailyQuery,
  IAggsGroupedDaily,
} from "../stocks/aggregatesGroupedDaily.js";
export { IDailyOpenCloseQuery, IDailyOpenClose } from "../stocks/dailyOpenClose.js";
export { IAggsPreviousCloseQuery, IAggsPreviousClose } from "../stocks/previousClose.js";
export { ILastQuote } from "../stocks/lastQuote.js";
export { ILastTrade } from "../stocks/lastTrade.js";
export {
  ISnapshotAllTickersQuery,
  ISnapshotTickers,
  ISnapshot,
} from "../stocks/snapshots.js";
export { IQuotes } from "../stocks/quotes.js";
export { ITradesQuotesQuery, ITrades } from "../stocks/trades.js";
export { ISummariesQuery, ISummaries } from '../stocks/summaries.js';
export { ISma, ITechnicalIndicatorsQuery } from '../stocks/sma.js';
export { IEma } from '../stocks/ema.js';
export { IMacd } from '../stocks/macd.js';
export { IRsi } from '../stocks/rsi.js';

export interface IIndicesClient {
  aggregates: (
    ticker: string,
    multiplier: number,
    timespan: string,
    from: string,
    to: string,
    query?: IAggsQuery,
    options?: IRequestOptions
  ) => Promise<IAggs>;
  dailyOpenClose: (
    symbol: string,
    date: string,
    query?: IDailyOpenCloseQuery,
    options?: IRequestOptions
  ) => Promise<IDailyOpenClose>;
  previousClose: (
    ticker: string,
    query?: IAggsPreviousCloseQuery,
    options?: IRequestOptions
  ) => Promise<IAggsPreviousClose>;
  snapshotTicker: (symbol: string, query?: IPolygonQuery, options?: IRequestOptions) => Promise<ISnapshot>;
  sma: (symbol: string, query?: ITechnicalIndicatorsQuery, options?: IRequestOptions) => Promise<ISma>;
  ema: (symbol: string, query?: ITechnicalIndicatorsQuery, options?: IRequestOptions) => Promise<IEma>;
  macd: (symbol: string, query?: ITechnicalIndicatorsQuery, options?: IRequestOptions) => Promise<IMacd>;
  rsi: (symbol: string, query?: ITechnicalIndicatorsQuery, options?: IRequestOptions) => Promise<IRsi>;
}

export const indicesClient = (
  apiKey: string,
  apiBase = "https://api.polygon.io",
  options?: IRequestOptions
): IIndicesClient => {
  const get = getWithGlobals(apiKey, apiBase, options);
    
  return ({
    aggregates: (...args) => aggregates(get, ...args),
    dailyOpenClose: (...args) => dailyOpenClose(get, ...args),
    previousClose: (...args) => previousClose(get, ...args),
    snapshotTicker: (...args) => snapshotTicker(get, ...args),
    sma: (...args) => sma(get, ...args),
    ema: (...args) => ema(get, ...args),
    macd: (...args) => macd(get, ...args),
    rsi: (...args) => rsi(get, ...args),
  })
}

export default indicesClient;
