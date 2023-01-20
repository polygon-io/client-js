import { getWithGlobals, IPolygonQuery, IRequestOptions } from "../transport/request";
import { IAggsQuery, IAggs } from "../stocks/aggregates";
import {
  IAggsPreviousCloseQuery,
  IAggsPreviousClose,
} from "../stocks/previousClose";
import { ITradesQuotesQuery } from "../stocks/trades";
import { aggregates } from "./aggregates";
import {
  IOptionsDailyOpenCloseQuery,
  IOptionsDailyOpenClose,
  dailyOpenClose,
} from "./dailyOpenClose";
import { previousClose } from "./previousClose";
import { IOptionTrades, trades } from "./trades";
import { IOptionsLastTrade, lastTrade } from "./lastTrade";
import { IOptionQuotes, quotes } from "./quotes";
import {
  IOptionsSnapshotContract,
  IOptionsSnapshotChain,
  IOptionsChainQuery,
  snapshotOptionContract,
  snapshotOptionChain
} from "./snapshots";
import { ISummaries, ISummariesQuery } from "../stocks/summaries";
import { summaries } from "./summaries";
import { ITechnicalIndicatorsQuery } from "../stocks/sma";
import { ISma, sma } from "./sma";
import { IEma, ema } from "./ema";
import { IMacd, macd } from "./macd";
import { IRsi, rsi } from "./rsi";

export {
  IOptionsDailyOpenCloseQuery,
  IOptionsDailyOpenClose,
} from "./dailyOpenClose";
export { IOptionTrades } from "./trades";
export { IOptionsLastTrade } from "./lastTrade";
export { IOptionQuotes } from "./quotes";
export {
  IOptionsSnapshotContract,
  IOptionsSnapshotChain,
  IOptionsChainQuery,
  snapshotOptionContract,
  snapshotOptionChain,
} from "./snapshots";
export { ISummariesQuery, ISummaries } from '../stocks/summaries';
export { ISma, ITechnicalIndicatorsQuery } from '../stocks/sma';
export { IEma } from '../stocks/ema';
export { IMacd } from '../stocks/macd';
export { IRsi } from '../stocks/rsi';

export interface IOptionsClient {
  aggregates: (
    ticker: string,
    multiplier: number,
    timespan: string,
    from: string,
    to: string,
    query?: IAggsQuery,
    options?: IRequestOptions
  ) => Promise<IAggs>;
  summaries: (query?: ISummariesQuery, options?: IRequestOptions) => Promise<ISummaries>;
  dailyOpenClose: (
    symbol: string,
    date: string,
    query?: IOptionsDailyOpenCloseQuery,
    options?: IRequestOptions
  ) => Promise<IOptionsDailyOpenClose>;
  previousClose: (
    symbol: string,
    query?: IAggsPreviousCloseQuery,
    options?: IRequestOptions
  ) => Promise<IAggsPreviousClose>;
  trades: (
    optionsTicker: string,
    query?: ITradesQuotesQuery,
    options?: IRequestOptions
  ) => Promise<IOptionTrades>;
  lastTrade: (symbol: string, query?: IPolygonQuery, options?: IRequestOptions) => Promise<IOptionsLastTrade>;
  quotes: (
    optionsTicker: string,
    query?: ITradesQuotesQuery,
    options?: IRequestOptions
  ) => Promise<IOptionQuotes>;
  snapshotOptionContract: (
    underlyingAsset: string,
    optionContract: string,
    query?: IPolygonQuery,
    options?: IRequestOptions
  ) => Promise<IOptionsSnapshotContract>;
  snapshotOptionChain: (
    underlyingAsset: string,
    query?: IOptionsChainQuery,
    options?: IRequestOptions
  ) => Promise<IOptionsSnapshotChain>;
  sma: (symbol: string, query?: ITechnicalIndicatorsQuery, options?: IRequestOptions) => Promise<ISma>;
  ema: (symbol: string, query?: ITechnicalIndicatorsQuery, options?: IRequestOptions) => Promise<IEma>;
  macd: (symbol: string, query?: ITechnicalIndicatorsQuery, options?: IRequestOptions) => Promise<IMacd>;
  rsi: (symbol: string, query?: ITechnicalIndicatorsQuery, options?: IRequestOptions) => Promise<IRsi>;
}

export const optionsClient = (
  apiKey: string,
  apiBase = "https://api.polygon.io",
  options?: IRequestOptions
): IOptionsClient => {
  const get = getWithGlobals(apiKey, apiBase, options)
  
  return ({
    aggregates: (...args) => aggregates(get, ...args),
    summaries: (...args) => summaries(get, ...args),
    dailyOpenClose: (...args) => dailyOpenClose(get, ...args),
    previousClose: (...args) => previousClose(get, ...args),
    trades: (...args) => trades(get, ...args),
    lastTrade: (...args) => lastTrade(get, ...args),
    quotes: (...args) => quotes(get, ...args),
    snapshotOptionContract: (...args) => snapshotOptionContract(get, ...args),
    snapshotOptionChain: (...args) => snapshotOptionChain(get, ...args),
    sma: (...args) => sma(get, ...args),
    ema: (...args) => ema(get, ...args),
    macd: (...args) => macd(get, ...args),
    rsi: (...args) => rsi(get, ...args)
  })
};

export default optionsClient;
