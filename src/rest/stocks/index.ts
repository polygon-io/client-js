import { auth } from "../transport/request";
import {
  IAggregateQuery,
  IAggResponseFormatted,
  stocksAggregates,
  stocksGroupedDaily,
  stocksPreviousClose
} from "./aggregates";
import { conditionMappings, IConditionMappings } from "./conditionMappings";
import { dailyOpenClose, IDailyOpenClose } from "./dailyOpenClose";
import { exchanges, IExchangeFormatted } from "./exchanges";
import { ILastQuoteResult, lastQuoteForSymbol } from "./lastQuoteForSymbol";
import { ILastTradeResult, lastTradeForSymbol } from "./lastTradeForSymbol";
import {
  ISnapshotAllTickersResultFormatted,
  ISnapshotGainersLosersResultFormatted,
  ISnapshotSingleTickerResultFormatted,
  snapshotAllTickers,
  snapshotGainersLosers,
  snapshotSingleTicker
} from "./snapshots";
import {
  IV1HistoricQuotesQuery,
  IV1HistoricQuotesResultFormatted,
  v1HistoricQuotes
} from "./v1HistoricQuotes";
import {
  IV1HistoricTradesQuery,
  IV1HistoricTradesResultFormatted,
  v1HistoricTrades
} from "./v1HistoricTrades";
import {
  IV2HistoricQuotesQuery,
  IV2HistoricQuotesResultFormatted,
  v2HistoricQuotes
} from "./v2HistoricQuotes";
import {
  IV2HistoricTradesQuery,
  IV2HistoricTradesResultFormatted,
  v2HistoricTrades
} from "./v2HistoricTrades";

export { IAggregateQuery, IAggResponseFormatted } from "./aggregates";
export { IConditionMappings } from "./conditionMappings";
export { IDailyOpenClose } from "./dailyOpenClose";
export { IExchangeFormatted } from "./exchanges";
export { ILastQuoteResult } from "./lastQuoteForSymbol";
export { ILastTradeResult } from "./lastTradeForSymbol";
export {
  ISnapshotAllTickersResultFormatted,
  ISnapshotGainersLosersResultFormatted,
  ISnapshotSingleTickerResultFormatted
} from "./snapshots";
export {
  IV1HistoricQuotesQuery,
  IV1HistoricQuotesResultFormatted
} from "./v1HistoricQuotes";
export {
  IV1HistoricTradesQuery,
  IV1HistoricTradesResultFormatted
} from "./v1HistoricTrades";
export {
  IV2HistoricQuotesQuery,
  IV2HistoricQuotesResultFormatted
} from "./v2HistoricQuotes";
export {
  IV2HistoricTradesQuery,
  IV2HistoricTradesResultFormatted
} from "./v2HistoricTrades";

export interface IStocksClient {
  conditionMappings: (ticktype?: string) => Promise<IConditionMappings>;
  dailyOpenClose: (symbol: string, date: string) => Promise<IDailyOpenClose>;
  exchanges: () => Promise<IExchangeFormatted[]>;
  lastQuoteForSymbol: (symbol: string) => Promise<ILastQuoteResult>;
  lastTradeForSymbol: (symbol: string) => Promise<ILastTradeResult>;
  v1HistoricQuotes: (
    symbol: string,
    date: string,
    query?: IV1HistoricQuotesQuery
  ) => Promise<IV1HistoricQuotesResultFormatted>;
  v1HistoricTrades: (
    symbol: string,
    date: string,
    query?: IV1HistoricTradesQuery
  ) => Promise<IV1HistoricTradesResultFormatted>;
  v2HistoricQuotes: (
    symbol: string,
    date: string,
    query?: IV2HistoricQuotesQuery
  ) => Promise<IV2HistoricQuotesResultFormatted>;
  v2HistoricTrades: (
    symbol: string,
    date: string,
    query?: IV2HistoricTradesQuery
  ) => Promise<IV2HistoricTradesResultFormatted>;
  snapshotAllTickers: () => Promise<ISnapshotAllTickersResultFormatted>;
  snapshotSingleTicker: (
    ticker: string
  ) => Promise<ISnapshotSingleTickerResultFormatted>;
  snapshotGainersLosers: (
    direction?: string
  ) => Promise<ISnapshotGainersLosersResultFormatted>;
  previousClose: (
    ticker: string,
    query?: IAggregateQuery
  ) => Promise<IAggResponseFormatted>;
  aggregates: (
    ticker: string,
    multiplier: number,
    timespan: string,
    from: string,
    to: string,
    query?: IAggregateQuery
  ) => Promise<IAggResponseFormatted>;
  groupedDaily: (
    locale: string,
    market: string,
    date: string,
    query?: IAggregateQuery
  ) => Promise<IAggResponseFormatted>;
}

export const stocksClient = (apiKey: string): IStocksClient => ({
  conditionMappings: auth(apiKey, conditionMappings),
  dailyOpenClose: auth(apiKey, dailyOpenClose),
  exchanges: auth(apiKey, exchanges),
  lastQuoteForSymbol: auth(apiKey, lastQuoteForSymbol),
  lastTradeForSymbol: auth(apiKey, lastTradeForSymbol),
  v1HistoricQuotes: auth(apiKey, v1HistoricQuotes),
  v1HistoricTrades: auth(apiKey, v1HistoricTrades),
  v2HistoricQuotes: auth(apiKey, v2HistoricQuotes),
  v2HistoricTrades: auth(apiKey, v2HistoricTrades),
  // snapshot
  snapshotAllTickers: auth(apiKey, snapshotAllTickers),
  snapshotSingleTicker: auth(apiKey, snapshotSingleTicker),
  snapshotGainersLosers: auth(apiKey, snapshotGainersLosers),
  // aggregates
  previousClose: auth(apiKey, stocksPreviousClose),
  aggregates: auth(apiKey, stocksAggregates),
  groupedDaily: auth(apiKey, stocksGroupedDaily)
});

export default stocksClient;
