import { auth } from "../transport/request";

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

export interface IStocksClient {
  aggregates: (
    ticker: string,
    multiplier: number,
    timespan: string,
    from: string,
    to: string,
    query?: IAggsQuery
  ) => Promise<IAggs>;
  aggregatesGroupedDaily: (
    date: string,
    query?: IAggsGroupedDailyQuery
  ) => Promise<IAggsGroupedDaily>;
  summaries: (query?: ISummariesQuery) => Promise<ISummaries>;
  dailyOpenClose: (
    symbol: string,
    date: string,
    query?: IDailyOpenCloseQuery
  ) => Promise<IDailyOpenClose>;
  lastQuote: (symbol: string) => Promise<ILastQuote>;
  lastTrade: (symbol: string) => Promise<ILastTrade>;
  previousClose: (
    ticker: string,
    query?: IAggsPreviousCloseQuery
  ) => Promise<IAggsPreviousClose>;
  quotes: (stockTicker: string, query?: ITradesQuotesQuery) => Promise<IQuotes>;
  snapshotAllTickers: (
    query?: ISnapshotAllTickersQuery
  ) => Promise<ISnapshotTickers>;
  snapshotGainersLosers: (
    direction: "gainers" | "losers"
  ) => Promise<ISnapshotTickers>;
  snapshotTicker: (symbol: string) => Promise<ISnapshot>;
  trades: (stockTicker: string, query?: ITradesQuotesQuery) => Promise<ITrades>;
}

export const stocksClient = (
  apiKey: string,
  apiBase = "https://api.polygon.io"
): IStocksClient => ({
  aggregates: auth(apiKey, aggregates, apiBase),
  aggregatesGroupedDaily: auth(apiKey, aggregatesGroupedDaily, apiBase),
  summaries: auth(apiKey, summaries, apiBase),
  dailyOpenClose: auth(apiKey, dailyOpenClose, apiBase),
  lastQuote: auth(apiKey, lastQuote, apiBase),
  lastTrade: auth(apiKey, lastTrade, apiBase),
  previousClose: auth(apiKey, previousClose, apiBase),
  quotes: auth(apiKey, quotes, apiBase),
  snapshotAllTickers: auth(apiKey, snapshotAllTickers, apiBase),
  snapshotGainersLosers: auth(apiKey, snapshotGainersLosers, apiBase),
  snapshotTicker: auth(apiKey, snapshotTicker, apiBase),
  trades: auth(apiKey, trades, apiBase),
});

export default stocksClient;
