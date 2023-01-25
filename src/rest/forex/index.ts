import { getWithGlobals, IPolygonQuery, IRequestOptions } from "../transport/request.js";

import { IAggsQuery, IAggs } from "../stocks/aggregates.js";
import {
  IAggsGroupedDaily,
  IAggsGroupedDailyQuery,
} from "../stocks/aggregatesGroupedDaily.js";
import {
  IAggsPreviousCloseQuery,
  IAggsPreviousClose,
} from "../stocks/previousClose.js";
import { ITradesQuotesQuery } from "../stocks/trades.js";
import { aggregates } from "./aggregates.js";
import { aggregatesGroupedDaily } from "./aggregatesGroupedDaily.js";
import { IConversionQuery, IConversion, conversion } from "./conversion.js";
import { IForexQuotes, quotes } from "./quotes.js";
import { IForexLastQuote, lastQuote } from "./lastQuote.js";
import { previousClose } from "./previousClose.js";
import {
  IForexSnapshotAllTickersQuery,
  IForexSnapshotTickers,
  IForexSnapshot,
  snapshotAllTickers,
  snapshotGainersLosers,
  snapshotTicker,
} from "./snapshots.js";
import { ISummaries, ISummariesQuery } from "../stocks/summaries.js";
import { summaries } from "./summaries.js";
import { ITechnicalIndicatorsQuery } from "../stocks/sma.js";
import { ISma, sma } from "./sma.js";
import { IEma, ema } from "./ema.js";
import { IMacd, macd } from "./macd.js";
import { IRsi, rsi } from "./rsi.js";

export { IConversionQuery, IConversion } from "./conversion.js";
export { IForexQuotes } from "./quotes.js";
export { IForexLastQuote } from "./lastQuote.js";
export {
  IRealTimeCurrencyConversionQuery,
  IRealTimeCurrencyConversion,
} from "./realTimeCurrencyConversion.js";
export {
  IForexSnapshotAllTickersQuery,
  IForexSnapshotTickers,
  IForexSnapshot,
} from "./snapshots.js";
export { ISummariesQuery, ISummaries } from '../stocks/summaries.js';
export { ISma, ITechnicalIndicatorsQuery } from '../stocks/sma.js';
export { IEma } from '../stocks/ema.js';
export { IMacd } from '../stocks/macd.js';
export { IRsi } from '../stocks/rsi.js';

export interface IForexClient {
  aggregates: (
    ticker: string,
    multiplier: number,
    timespan: string,
    from: string,
    to: string,
    query?: IAggsQuery,
    options?: IRequestOptions
  ) => Promise<IAggs>;
  aggregatesGroupedDaily: (
    date: string,
    query?: IAggsGroupedDailyQuery,
    options?: IRequestOptions
  ) => Promise<IAggsGroupedDaily>;
  summaries: (query?: ISummariesQuery, options?: IRequestOptions) => Promise<ISummaries>;
  conversion: (
    from: string,
    to: string,
    query?: IConversionQuery,
    options?: IRequestOptions
  ) => Promise<IConversion>;
  quotes: (
    fxTicker: string,
    query?: ITradesQuotesQuery,
    options?: IRequestOptions
  ) => Promise<IForexQuotes>;
  lastQuote: (from: string, to: string, query?: IPolygonQuery, options?: IRequestOptions) => Promise<IForexLastQuote>;
  previousClose: (
    symbol: string,
    query?: IAggsPreviousCloseQuery,
    options?: IRequestOptions
  ) => Promise<IAggsPreviousClose>;
  snapshotAllTickers: (
    query?: IForexSnapshotAllTickersQuery,
    options?: IRequestOptions
  ) => Promise<IForexSnapshotTickers>;
  snapshotGainersLosers: (
    direction: "gainers" | "losers",
    query?: IPolygonQuery,
    options?: IRequestOptions
  ) => Promise<IForexSnapshotTickers>;
  snapshotTicker: (symbol: string, query?: IPolygonQuery, options?: IRequestOptions) => Promise<IForexSnapshot>;
  sma: (symbol: string, query?: ITechnicalIndicatorsQuery, options?: IRequestOptions) => Promise<ISma>;
  ema: (symbol: string, query?: ITechnicalIndicatorsQuery, options?: IRequestOptions) => Promise<IEma>;
  macd: (symbol: string, query?: ITechnicalIndicatorsQuery, options?: IRequestOptions) => Promise<IMacd>;
  rsi: (symbol: string, query?: ITechnicalIndicatorsQuery, options?: IRequestOptions) => Promise<IRsi>;
}

export const forexClient = (
  apiKey: string,
  apiBase = "https://api.polygon.io",
  options?: IRequestOptions
): IForexClient => {
  const get = getWithGlobals(apiKey, apiBase, options);
    
  return ({
    aggregates: (...args) => aggregates(get, ...args),
    aggregatesGroupedDaily: (...args) => aggregatesGroupedDaily(get, ...args),
    summaries: (...args) => summaries(get, ...args),
    conversion: (...args) => conversion(get, ...args),
    quotes: (...args) => quotes(get, ...args),
    lastQuote: (...args) => lastQuote(get, ...args),
    previousClose: (...args) => previousClose(get, ...args),
    snapshotAllTickers: (...args) => snapshotAllTickers(get, ...args),
    snapshotGainersLosers: (...args) => snapshotGainersLosers(get, ...args),
    snapshotTicker: (...args) => snapshotTicker(get, ...args),
    sma: (...args) => sma(get, ...args),
    ema: (...args) => ema(get, ...args),
    macd: (...args) => macd(get, ...args),
    rsi: (...args) => rsi(get, ...args)
  })
};

export default forexClient;
