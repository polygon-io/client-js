import { get, IPolygonQuery } from "../transport/request";

export interface IAggV2Raw {
  T?: string;
  v: number;
  o: number;
  c: number;
  h: number;
  l: number;
  t?: number;
  n?: number;
}
export interface IAggV2Formatted {
  T?: string;
  tickerSymbol?: string;
  v: number;
  volume: number;
  o: number;
  open: number;
  c: number;
  close: number;
  h: number;
  high: number;
  l: number;
  low: number;
  t?: number;
  timestamp?: number;
  n?: number;
  numberOfItems?: number;
}
const formatIAggv2Raw = (raw: IAggV2Raw): IAggV2Formatted => ({
  ...raw,
  tickerSymbol: raw.T,
  volume: raw.v,
  open: raw.o,
  close: raw.c,
  high: raw.h,
  low: raw.l,
  timestamp: raw.t,
  numberOfItems: raw.n
});

export interface IAggResponseRaw {
  ticker: string;
  status: string;
  adjusted: boolean;
  queryCount?: number;
  resultsCount?: number;
  results: IAggV2Raw[];
}
export interface IAggResponseFormatted {
  ticker: string;
  status: string;
  adjusted: boolean;
  queryCount?: number;
  resultsCount?: number;
  results: IAggV2Formatted[];
}
export const formatIAggResponseRaw = (
  raw: IAggResponseRaw
): IAggResponseFormatted => ({
  ...raw,
  results: raw.results.map(formatIAggv2Raw)
});

export interface IAggregateQuery extends IPolygonQuery {
  adjusted?: boolean;
}

// CF : https://polygon.io/docs/#!/Stocks--Equities/get_v2_aggs_ticker_ticker_prev
export const stocksPreviousClose = async (
  apiKey: string,
  ticker: string,
  query?: IAggregateQuery
): Promise<IAggResponseFormatted> =>
  formatIAggResponseRaw(
    await get(`/v2/aggs/ticker/${ticker}/prev`, apiKey, query)
  );

// CF: https://polygon.io/docs/#!/Stocks--Equities/get_v2_aggs_ticker_ticker_range_multiplier_timespan_from_to
export const stocksAggregates = async (
  apikey: string,
  ticker: string,
  multiplier: number,
  timespan: string,
  from: string,
  to: string,
  query?: IAggregateQuery
): Promise<IAggResponseFormatted> =>
  formatIAggResponseRaw(
    await get(
      `/v2/aggs/ticker/${ticker}/range/${multiplier}/${timespan}/${from}/${to}`,
      apikey,
      query
    )
  );

// CF: https://polygon.io/docs/#!/Stocks--Equities/get_v2_aggs_grouped_locale_locale_market_market_date
export const stocksGroupedDaily = async (
  apiKey: string,
  locale: string,
  market: string,
  date: string,
  query?: IAggregateQuery
): Promise<IAggResponseFormatted> =>
  formatIAggResponseRaw(
    await get(
      `/v2/aggs/grouped/locale/${locale}/market/${market}/${date}`,
      apiKey,
      query
    )
  );
