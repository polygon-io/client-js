import { getWithGlobals, IPolygonQuery, IRequestOptions } from "../transport/request";

import { IAggsQuery, IAggs, aggregates } from "./aggregates";
import {
  IAggsGroupedDailyQuery,
  IAggsGroupedDaily,
  aggregatesGroupedDaily,
} from "./aggregatesGroupedDaily";
import {
  IDailyOpenCloseQuery,
  IDailyOpenClose,
  dailyOpenClose,
} from "./dailyOpenClose";
import {
  IAggsPreviousCloseQuery,
  IAggsPreviousClose,
  previousClose,
} from "./previousClose";
import { ILastQuote, lastQuote } from "./lastQuote";
import { ILastTrade, lastTrade } from "./lastTrade";
import {
  ISnapshotAllTickersQuery,
  ISnapshotTickers,
  ISnapshot,
  snapshotAllTickers,
  snapshotGainersLosers,
  snapshotTicker,
} from "./snapshots";
import { IQuotes, quotes } from "./quotes";
import { ITradesQuotesQuery, ITrades, trades } from "./trades";
import { ISummaries, ISummariesQuery, summaries } from "./summaries";
import { ISma, ITechnicalIndicatorsQuery, sma } from "./sma";
import { IEma, ema } from "./ema";
import { IMacd, macd } from "./macd";
import { IRsi, rsi } from "./rsi";

export { IAggsQuery, IAggs } from "./aggregates";
export {
  IAggsGroupedDailyQuery,
  IAggsGroupedDaily,
} from "./aggregatesGroupedDaily";
export { IDailyOpenCloseQuery, IDailyOpenClose } from "./dailyOpenClose";
export { IAggsPreviousCloseQuery, IAggsPreviousClose } from "./previousClose";
export { ILastQuote } from "./lastQuote";
export { ILastTrade } from "./lastTrade";
export {
  ISnapshotAllTickersQuery,
  ISnapshotTickers,
  ISnapshot,
} from "./snapshots";
export { IQuotes } from "./quotes";
export { ITradesQuotesQuery, ITrades } from "./trades";
export { ISummariesQuery, ISummaries } from './summaries';
export { ISma, ITechnicalIndicatorsQuery } from './sma';
export { IEma } from './ema';
export { IMacd } from './macd';
export { IRsi } from './rsi';

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
