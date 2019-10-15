import { get, IPolygonQuery } from "../transport/request";

export interface IAggV2 {
  T?: string;
  v: number;
  o: number;
  c: number;
  h: number;
  l: number;
  t?: number;
  n?: number;
}
export interface IAggResponse {
  ticker: string;
  status: string;
  adjusted: boolean;
  queryCount?: number;
  resultsCount?: number;
  results: IAggV2[];
}
export interface IAggregateQuery extends IPolygonQuery {
  adjusted?: boolean;
}

// CF : https://polygon.io/docs/#!/Stocks--Equities/get_v2_aggs_ticker_ticker_prev
export const previousClose = (
  ticker: string,
  query?: IAggregateQuery
): Promise<IAggResponse> => get(`/v2/aggs/ticker/${ticker}/prev`, query);

// CF: https://polygon.io/docs/#!/Stocks--Equities/get_v2_aggs_ticker_ticker_range_multiplier_timespan_from_to
export const aggregates = (
  ticker: string,
  multiplier: number,
  timespan: string,
  from: string,
  to: string,
  query?: IAggregateQuery
): Promise<IAggResponse> =>
  get(
    `/v2/aggs/ticker/${ticker}/range/${multiplier}/${timespan}/${from}/${to}`,
    query
  );

// CF: https://polygon.io/docs/#!/Stocks--Equities/get_v2_aggs_grouped_locale_locale_market_market_date
export const groupedDaily = (
  locale: string,
  market: string,
  date: string,
  query?: IAggregateQuery
): Promise<IAggResponse> =>
  get(`/v2/aggs/grouped/locale/${locale}/market/${market}/${date}`, query);
