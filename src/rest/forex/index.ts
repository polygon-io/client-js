import { auth } from "../transport/request";

import {
  lastQuoteForCurrencyPair,
  ILastQuoteForCurrencyPair
} from "./lastQuoteForCurrencyPair";
import {
  historicForexTicks,
  IHistoricForexTicksQuery,
  IHistoricForexTicksFormatted
} from "./historicForexTicks";
import {
  forexAggregates,
  forexGroupedDaily,
  forexPreviousClose
} from "./aggregates";
import {
  forexSnapshotAllTickers,
  forexSnapshotGainersLosers,
  IForexSnapshotAllTickersResponseFormatted
} from "./snapshots";
import {
  realTimeCurrencyConversion,
  IRealTimeConversionQuery,
  IRealTimeConversion
} from "./realTimeCurrencyConversion";

import { IAggregateQuery, IAggResponseFormatted } from "../stocks/aggregates";

export { ILastQuoteForCurrencyPair } from "./lastQuoteForCurrencyPair";
export {
  IHistoricForexTicksQuery,
  IHistoricForexTicksFormatted
} from "./historicForexTicks";
export {
  IRealTimeConversionQuery,
  IRealTimeConversion
} from "./realTimeCurrencyConversion";
export { IAggregateQuery, IAggResponseFormatted } from "../stocks/aggregates";
export { IForexSnapshotAllTickersResponseFormatted } from "./snapshots";

export interface IForexClient {
  lastQuoteForCurrencyPair: (
    from: string,
    to: string
  ) => Promise<ILastQuoteForCurrencyPair>;
  historicTicks: (
    from: string,
    to: string,
    date: string,
    query: IHistoricForexTicksQuery
  ) => Promise<IHistoricForexTicksFormatted>;
  realTimeCurrencyConversion: (
    from: string,
    to: string,
    query: IRealTimeConversionQuery
  ) => Promise<IRealTimeConversion>;
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
  snapshotAllTickers: () => Promise<IForexSnapshotAllTickersResponseFormatted>;
  snapshotGainersLosers: (
    direction?: string
  ) => Promise<IForexSnapshotAllTickersResponseFormatted>;
}

export const forexClient = (apiKey: string, apiBase = "https://api.polygon.io"): IForexClient => ({
  lastQuoteForCurrencyPair: auth(apiKey, lastQuoteForCurrencyPair, apiBase),
  historicTicks: auth(apiKey, historicForexTicks, apiBase),
  realTimeCurrencyConversion: auth(apiKey, realTimeCurrencyConversion, apiBase),
  // aggregates
  previousClose: auth(apiKey, forexPreviousClose, apiBase),
  aggregates: auth(apiKey, forexAggregates, apiBase),
  groupedDaily: auth(apiKey, forexGroupedDaily, apiBase),
  // snapshots
  snapshotAllTickers: auth(apiKey, forexSnapshotAllTickers, apiBase),
  snapshotGainersLosers: auth(apiKey, forexSnapshotGainersLosers, apiBase)
});

export default forexClient;
