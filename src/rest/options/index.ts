import { auth, IHeaders } from "../transport/request";

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
    headers?: IHeaders
  ) => Promise<IAggs>;
  summaries: (query?: ISummariesQuery, headers?: IHeaders) => Promise<ISummaries>;
  dailyOpenClose: (
    symbol: string,
    date: string,
    query?: IOptionsDailyOpenCloseQuery
  ) => Promise<IOptionsDailyOpenClose>;
  previousClose: (
    symbol: string,
    query?: IAggsPreviousCloseQuery
  ) => Promise<IAggsPreviousClose>;
  trades: (
    optionsTicker: string,
    query?: ITradesQuotesQuery
  ) => Promise<IOptionTrades>;
  lastTrade: (symbol: string) => Promise<IOptionsLastTrade>;
  quotes: (
    optionsTicker: string,
    query?: ITradesQuotesQuery
  ) => Promise<IOptionQuotes>;
  snapshotOptionContract: (
    underlyingAsset: string,
    optionContract: string
  ) => Promise<IOptionsSnapshotContract>;
  snapshotOptionChain: (
    underlyingAsset: string,
    query?: IOptionsChainQuery
  ) => Promise<IOptionsSnapshotChain>;
  sma: (symbol: string, query?: ITechnicalIndicatorsQuery) => Promise<ISma>;
  ema: (symbol: string, query?: ITechnicalIndicatorsQuery) => Promise<IEma>;
  macd: (symbol: string, query?: ITechnicalIndicatorsQuery) => Promise<IMacd>;
  rsi: (symbol: string, query?: ITechnicalIndicatorsQuery) => Promise<IRsi>;
}

export const optionsClient = (
  apiKey: string,
  apiBase = "https://api.polygon.io",
  headers?: IHeaders
): IOptionsClient => ({
  aggregates: auth(apiKey, aggregates, apiBase, headers),
  summaries: auth(apiKey, summaries, apiBase, headers),
  dailyOpenClose: auth(apiKey, dailyOpenClose, apiBase),
  previousClose: auth(apiKey, previousClose, apiBase),
  trades: auth(apiKey, trades, apiBase),
  lastTrade: auth(apiKey, lastTrade, apiBase),
  quotes: auth(apiKey, quotes, apiBase),
  snapshotOptionContract: auth(apiKey, snapshotOptionContract, apiBase),
  snapshotOptionChain: auth(apiKey, snapshotOptionChain, apiBase),
  sma: auth(apiKey, sma, apiBase), 
  ema: auth(apiKey, ema, apiBase), 
  macd: auth(apiKey, macd, apiBase), 
  rsi: auth(apiKey, rsi, apiBase)
});

export default optionsClient;
