import { getWithGlobals, IPolygonQuery, IRequestOptions } from "../transport/request.js";
import { IAggsQuery, IAggs } from "../stocks/aggregates.js";
import {
  IAggsPreviousCloseQuery,
  IAggsPreviousClose,
} from "../stocks/previousClose.js";
import { ITradesQuotesQuery } from "../stocks/trades.js";
import { aggregates } from "./aggregates.js";
import {
  IOptionsDailyOpenCloseQuery,
  IOptionsDailyOpenClose,
  dailyOpenClose,
} from "./dailyOpenClose.js";
import { previousClose } from "./previousClose.js";
import { IOptionTrades, trades } from "./trades.js";
import { IOptionsLastTrade, lastTrade } from "./lastTrade.js";
import { IOptionQuotes, quotes } from "./quotes.js";
import {
  IOptionsSnapshotContract,
  IOptionsSnapshotChain,
  IOptionsChainQuery,
  snapshotOptionContract,
  snapshotOptionChain
} from "./snapshots.js";
import { ISummaries, ISummariesQuery } from "../stocks/summaries.js";
import { summaries } from "./summaries.js";
import { ITechnicalIndicatorsQuery } from "../stocks/sma.js";
import { ISma, sma } from "./sma.js";
import { IEma, ema } from "./ema.js";
import { IMacd, macd } from "./macd.js";
import { IRsi, rsi } from "./rsi.js";

export {
  IOptionsDailyOpenCloseQuery,
  IOptionsDailyOpenClose,
} from "./dailyOpenClose.js";
export { IOptionTrades } from "./trades.js";
export { IOptionsLastTrade } from "./lastTrade.js";
export { IOptionQuotes } from "./quotes.js";
export {
  IOptionsSnapshotContract,
  IOptionsSnapshotChain,
  IOptionsChainQuery,
  snapshotOptionContract,
  snapshotOptionChain,
} from "./snapshots.js";
export { ISummariesQuery, ISummaries } from '../stocks/summaries.js';
export { ISma, ITechnicalIndicatorsQuery } from '../stocks/sma.js';
export { IEma } from '../stocks/ema.js';
export { IMacd } from '../stocks/macd.js';
export { IRsi } from '../stocks/rsi.js';

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
