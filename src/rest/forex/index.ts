import { getWithGlobals, IPolygonQuery, IRequestOptions } from "../transport/request";

import { IAggsQuery, IAggs } from "../stocks/aggregates";
import {
  IAggsGroupedDaily,
  IAggsGroupedDailyQuery,
} from "../stocks/aggregatesGroupedDaily";
import {
  IAggsPreviousCloseQuery,
  IAggsPreviousClose,
} from "../stocks/previousClose";
import { ITradesQuotesQuery } from "../stocks/trades";
import { aggregates } from "./aggregates";
import { aggregatesGroupedDaily } from "./aggregatesGroupedDaily";
import { IConversionQuery, IConversion, conversion } from "./conversion";
import { IForexQuotes, quotes } from "./quotes";
import { IForexLastQuote, lastQuote } from "./lastQuote";
import { previousClose } from "./previousClose";
import {
  IForexSnapshotAllTickersQuery,
  IForexSnapshotTickers,
  IForexSnapshot,
  snapshotAllTickers,
  snapshotGainersLosers,
  snapshotTicker,
} from "./snapshots";
import { ISummaries, ISummariesQuery } from "../stocks/summaries";
import { summaries } from "./summaries";
import { ITechnicalIndicatorsQuery } from "../stocks/sma";
import { ISma, sma } from "./sma";
import { IEma, ema } from "./ema";
import { IMacd, macd } from "./macd";
import { IRsi, rsi } from "./rsi";

export { IConversionQuery, IConversion } from "./conversion";
export { IForexQuotes } from "./quotes";
export { IForexLastQuote } from "./lastQuote";
export {
  IRealTimeCurrencyConversionQuery,
  IRealTimeCurrencyConversion,
} from "./realTimeCurrencyConversion";
export {
  IForexSnapshotAllTickersQuery,
  IForexSnapshotTickers,
  IForexSnapshot,
} from "./snapshots";
export { ISummariesQuery, ISummaries } from '../stocks/summaries';
export { ISma, ITechnicalIndicatorsQuery } from '../stocks/sma';
export { IEma } from '../stocks/ema';
export { IMacd } from '../stocks/macd';
export { IRsi } from '../stocks/rsi';

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
