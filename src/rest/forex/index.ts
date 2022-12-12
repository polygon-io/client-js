import { auth, IPolygonEdgeHeaders } from "../transport/request";

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
import { IConversionQuery, IConversion, conversion } from "./conversion";
import { IForexQuotes, quotes } from "./quotes";
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
import { ISummaries, ISummariesQuery } from "../stocks/summaries";
import { summaries } from "./summaries";

export { IConversionQuery, IConversion } from "./conversion";
export { IForexQuotes } from "./quotes";
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
    query?: IAggsQuery,
    headers?: IPolygonEdgeHeaders
  ) => Promise<IAggs>;
  aggregatesGroupedDaily: (
    date: string,
    query?: IAggsGroupedDailyQuery
  ) => Promise<IAggsGroupedDaily>;
  summaries: (query?: ISummariesQuery, headers?: IPolygonEdgeHeaders) => Promise<ISummaries>;
  conversion: (
    from: string,
    to: string,
    query?: IConversionQuery
  ) => Promise<IConversion>;
  quotes: (
    fxTicker: string,
    query?: ITradesQuotesQuery
  ) => Promise<IForexQuotes>;
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
  apiBase = "https://api.polygon.io",
  headers?: IPolygonEdgeHeaders
): IForexClient => ({
  aggregates: auth(apiKey, aggregates, apiBase, headers),
  aggregatesGroupedDaily: auth(apiKey, aggregatesGroupedDaily, apiBase),
  summaries: auth(apiKey, summaries, apiBase, headers),
  conversion: auth(apiKey, conversion, apiBase),
  quotes: auth(apiKey, quotes, apiBase),
  lastQuote: auth(apiKey, lastQuote, apiBase),
  previousClose: auth(apiKey, previousClose, apiBase),
  snapshotAllTickers: auth(apiKey, snapshotAllTickers, apiBase),
  snapshotGainersLosers: auth(apiKey, snapshotGainersLosers, apiBase),
  snapshotTicker: auth(apiKey, snapshotTicker, apiBase),
});

export default forexClient;
