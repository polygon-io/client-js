import { auth } from "../transport/request";

import { IAggsQuery, IAggs } from "../stocks/aggregates";
import {
  IAggsGroupedDaily,
  IAggsGroupedDailyQuery,
} from "../stocks/aggregatesGroupedDaily";
import {
  IAggsPreviousCloseQuery,
  IAggsPreviousClose,
} from "../stocks/previousClose";
import { aggregates } from "./aggregates";
import { aggregatesGroupedDaily } from "./aggregatesGroupedDaily";
import { IConversionQuery, IConversion, conversion } from "./conversion";
import {
  IHistoricTicksQuery,
  IHistoricTicks,
  historicTicks,
} from "./historicTicks";
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

export { IConversionQuery, IConversion } from "./conversion";
export { IHistoricTicksQuery, IHistoricTicks } from "./historicTicks";
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

export interface IForexClient {
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
  conversion: (
    from: string,
    to: string,
    query?: IConversionQuery
  ) => Promise<IConversion>;
  historicTicks: (
    from: string,
    to: string,
    date: string,
    query?: IHistoricTicksQuery
  ) => Promise<IHistoricTicks>;
  lastQuote: (from: string, to: string) => Promise<IForexLastQuote>;
  previousClose: (
    symbol: string,
    query?: IAggsPreviousCloseQuery
  ) => Promise<IAggsPreviousClose>;
  snapshotAllTickers: (
    query?: IForexSnapshotAllTickersQuery
  ) => Promise<IForexSnapshotTickers>;
  snapshotGainersLosers: (
    direction: "gainers" | "losers"
  ) => Promise<IForexSnapshotTickers>;
  snapshotTicker: (symbol: string) => Promise<IForexSnapshot>;
}

export const forexClient = (
  apiKey: string,
  apiBase = "https://api.polygon.io"
): IForexClient => ({
  aggregates: auth(apiKey, aggregates, apiBase),
  aggregatesGroupedDaily: auth(apiKey, aggregatesGroupedDaily, apiBase),
  conversion: auth(apiKey, conversion, apiBase),
  historicTicks: auth(apiKey, historicTicks, apiBase),
  lastQuote: auth(apiKey, lastQuote, apiBase),
  previousClose: auth(apiKey, previousClose, apiBase),
  snapshotAllTickers: auth(apiKey, snapshotAllTickers, apiBase),
  snapshotGainersLosers: auth(apiKey, snapshotGainersLosers, apiBase),
  snapshotTicker: auth(apiKey, snapshotTicker, apiBase),
});

export default forexClient;
