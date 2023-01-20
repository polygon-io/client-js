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
import {
  ICryptoDailyOpenCloseQuery,
  ICryptoDailyOpenClose,
  dailyOpenClose,
} from "./dailyOpenClose";
import { ICryptoTrade, trades } from "./trades";
import { ICryptoLastTrade, lastTrade } from "./lastTrade";
import { previousClose } from "./previousClose";
import {
  ICryptoSnapshotAllTickersQuery,
  ICryptoSnapshotTickers,
  ICryptoSnapshot,
  ICryptoSnapshotFullBookL2,
  snapshotAllTickers,
  snapshotGainersLosers,
  snapshotTicker,
  snapshotTickerFullBookL2,
} from "./snapshots";
import { ISummaries, ISummariesQuery } from "../stocks/summaries";
import { summaries } from "./summaries";
import { ITechnicalIndicatorsQuery } from "../stocks/sma";
import { ISma, sma } from "./sma";
import { IEma, ema } from "./ema";
import { IMacd, macd } from "./macd";
import { IRsi, rsi } from "./rsi";

export {
  ICryptoDailyOpenCloseQuery,
  ICryptoDailyOpenClose,
} from "./dailyOpenClose";
export { ICryptoTrade } from "./trades";
export { ICryptoLastTrade } from "./lastTrade";
export {
  ICryptoSnapshotAllTickersQuery,
  ICryptoSnapshotTickers,
  ICryptoSnapshot,
  ICryptoSnapshotFullBookL2,
} from "./snapshots";
export { ISummariesQuery, ISummaries } from '../stocks/summaries';
export { ISma, ITechnicalIndicatorsQuery } from '../stocks/sma';
export { IEma } from '../stocks/ema';
export { IMacd } from '../stocks/macd';
export { IRsi } from '../stocks/rsi';

export interface ICryptoClient {
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
    from: string,
    to: string,
    date: string,
    query?: ICryptoDailyOpenCloseQuery,
    options?: IRequestOptions
  ) => Promise<ICryptoDailyOpenClose>;
  trades: (
    cryptoTicker: string,
    query?: ITradesQuotesQuery,
    options?: IRequestOptions
  ) => Promise<ICryptoTrade>;
  lastTrade: (from: string, to: string, query?: IPolygonQuery, options?: IRequestOptions) => Promise<ICryptoLastTrade>;
  previousClose: (
    symbol: string,
    query?: IAggsPreviousCloseQuery,
    options?: IRequestOptions
  ) => Promise<IAggsPreviousClose>;
  snapshotAllTickers: (
    query?: ICryptoSnapshotAllTickersQuery,
    options?: IRequestOptions
  ) => Promise<ICryptoSnapshotTickers>;
  snapshotGainersLosers: (
    direction: "gainers" | "losers",
    query?: IPolygonQuery,
    options?: IRequestOptions
  ) => Promise<ICryptoSnapshotTickers>;
  snapshotTicker: (symbol: string, query?: IPolygonQuery, options?: IRequestOptions) => Promise<ICryptoSnapshot>;
  snapshotTickerFullBookL2: (
    symbol: string, query?: IPolygonQuery, options?: IRequestOptions
  ) => Promise<ICryptoSnapshotFullBookL2>;
  sma: (symbol: string, query?: ITechnicalIndicatorsQuery, options?: IRequestOptions) => Promise<ISma>;
  ema: (symbol: string, query?: ITechnicalIndicatorsQuery, options?: IRequestOptions) => Promise<IEma>;
  macd: (symbol: string, query?: ITechnicalIndicatorsQuery, options?: IRequestOptions) => Promise<IMacd>;
  rsi: (symbol: string, query?: ITechnicalIndicatorsQuery, options?: IRequestOptions) => Promise<IRsi>;
}

export const cryptoClient = (
  apiKey,
  apiBase = "https://api.polygon.io",
  options?: IRequestOptions
): ICryptoClient => {
  const get = getWithGlobals(apiKey, apiBase, options)
  
  return ({
    aggregates: (...args) => aggregates(get, ...args),
    aggregatesGroupedDaily: (...args) => aggregatesGroupedDaily(get, ...args),
    summaries: (...args) => summaries(get, ...args),
    dailyOpenClose: (...args) => dailyOpenClose(get, ...args),
    lastTrade: (...args) => lastTrade(get, ...args),
    trades: (...args) => trades(get, ...args),
    previousClose: (...args) => previousClose(get, ...args),
    snapshotAllTickers: (...args) => snapshotAllTickers(get, ...args),
    snapshotGainersLosers: (...args) => snapshotGainersLosers(get, ...args),
    snapshotTicker: (...args) => snapshotTicker(get, ...args),
    snapshotTickerFullBookL2: (...args) => snapshotTickerFullBookL2(get, ...args),
    sma: (...args) => sma(get, ...args),
    ema: (...args) => ema(get, ...args),
    macd: (...args) => macd(get, ...args),
    rsi: (...args) => rsi(get, ...args)
  });
}
export default cryptoClient;
