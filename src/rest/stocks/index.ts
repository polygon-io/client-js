import { getWithGlobals, IPolygonQuery, IRequestOptions } from "../transport/request.js";

import { IAggsQuery, IAggs, aggregates } from "./aggregates.js";
import {
  IAggsGroupedDailyQuery,
  IAggsGroupedDaily,
  aggregatesGroupedDaily,
} from "./aggregatesGroupedDaily.js";
import {
  IDailyOpenCloseQuery,
  IDailyOpenClose,
  dailyOpenClose,
} from "./dailyOpenClose.js";
import {
  IAggsPreviousCloseQuery,
  IAggsPreviousClose,
  previousClose,
} from "./previousClose.js";
import { ILastQuote, lastQuote } from "./lastQuote.js";
import { ILastTrade, lastTrade } from "./lastTrade.js";
import {
  ISnapshotAllTickersQuery,
  ISnapshotTickers,
  ISnapshot,
  snapshotAllTickers,
  snapshotGainersLosers,
  snapshotTicker,
} from "./snapshots.js";
import { IQuotes, quotes } from "./quotes.js";
import { ITradesQuotesQuery, ITrades, trades } from "./trades.js";
import { ISummaries, ISummariesQuery, summaries } from "./summaries.js";
import { ISma, ITechnicalIndicatorsQuery, sma } from "./sma.js";
import { IEma, ema } from "./ema.js";
import { IMacd, macd } from "./macd.js";
import { IRsi, rsi } from "./rsi.js";

export { IAggsQuery, IAggs } from "./aggregates.js";
export {
  IAggsGroupedDailyQuery,
  IAggsGroupedDaily,
} from "./aggregatesGroupedDaily.js";
export { IDailyOpenCloseQuery, IDailyOpenClose } from "./dailyOpenClose.js";
export { IAggsPreviousCloseQuery, IAggsPreviousClose } from "./previousClose.js";
export { ILastQuote } from "./lastQuote.js";
export { ILastTrade } from "./lastTrade.js";
export {
  ISnapshotAllTickersQuery,
  ISnapshotTickers,
  ISnapshot,
} from "./snapshots.js";
export { IQuotes } from "./quotes.js";
export { ITradesQuotesQuery, ITrades } from "./trades.js";
export { ISummariesQuery, ISummaries } from './summaries.js';
export { ISma, ITechnicalIndicatorsQuery } from './sma.js';
export { IEma } from './ema.js';
export { IMacd } from './macd.js';
export { IRsi } from './rsi.js';

export interface IStocksClient {
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
  dailyOpenClose: (
    symbol: string,
    date: string,
    query?: IDailyOpenCloseQuery,
    options?: IRequestOptions
  ) => Promise<IDailyOpenClose>;
  lastQuote: (symbol: string, query?: IPolygonQuery, options?: IRequestOptions) => Promise<ILastQuote>;
  lastTrade: (symbol: string, query?: IPolygonQuery, options?: IRequestOptions) => Promise<ILastTrade>;
  previousClose: (
    ticker: string,
    query?: IAggsPreviousCloseQuery,
    options?: IRequestOptions
  ) => Promise<IAggsPreviousClose>;
  quotes: (stockTicker: string, query?: ITradesQuotesQuery, options?: IRequestOptions) => Promise<IQuotes>;
  snapshotAllTickers: (
    query?: ISnapshotAllTickersQuery,
    options?: IRequestOptions
  ) => Promise<ISnapshotTickers>;
  snapshotGainersLosers: (
    direction: "gainers" | "losers",
    query?: IPolygonQuery,
    options?: IRequestOptions
  ) => Promise<ISnapshotTickers>;
  snapshotTicker: (symbol: string, query?: IPolygonQuery, options?: IRequestOptions) => Promise<ISnapshot>;
  sma: (symbol: string, query?: ITechnicalIndicatorsQuery, options?: IRequestOptions) => Promise<ISma>;
  ema: (symbol: string, query?: ITechnicalIndicatorsQuery, options?: IRequestOptions) => Promise<IEma>;
  macd: (symbol: string, query?: ITechnicalIndicatorsQuery, options?: IRequestOptions) => Promise<IMacd>;
  rsi: (symbol: string, query?: ITechnicalIndicatorsQuery, options?: IRequestOptions) => Promise<IRsi>;
  trades: (stockTicker: string, query?: ITradesQuotesQuery, options?: IRequestOptions) => Promise<ITrades>;
}

export const stocksClient = (
  apiKey: string,
  apiBase = "https://api.polygon.io",
  options?: IRequestOptions
): IStocksClient => {
  const get = getWithGlobals(apiKey, apiBase, options);
    
  return ({
    aggregates: (...args) => aggregates(get, ...args),
    aggregatesGroupedDaily: (...args) => aggregatesGroupedDaily(get, ...args),
    summaries: (...args) => summaries(get, ...args),
    dailyOpenClose: (...args) => dailyOpenClose(get, ...args),
    lastQuote: (...args) => lastQuote(get, ...args),
    lastTrade: (...args) => lastTrade(get, ...args),
    previousClose: (...args) => previousClose(get, ...args),
    quotes: (...args) => quotes(get, ...args),
    snapshotAllTickers: (...args) => snapshotAllTickers(get, ...args),
    snapshotGainersLosers: (...args) => snapshotGainersLosers(get, ...args),
    snapshotTicker: (...args) => snapshotTicker(get, ...args),
    sma: (...args) => sma(get, ...args),
    ema: (...args) => ema(get, ...args),
    macd: (...args) => macd(get, ...args),
    rsi: (...args) => rsi(get, ...args),
    trades: (...args) => trades(get, ...args)
  })
}

export default stocksClient;
