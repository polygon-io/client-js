// CF: https://polygon.io/docs/#!/Stocks--Equities/get_v2_ticks_stocks_nbbo_ticker_date
import { get, IPolygonQuery } from "../transport/request";

export interface IV2HistoricQuotesQuery extends IPolygonQuery {
  limit?: number;
  reverse?: boolean;
  timestamp?: number;
  timestampLimit?: number;
}
export interface IQuoteV2 {
  T?: string;
  t?: number;
  y?: number;
  f: number;
  q: number;
  c?: number[];
  i?: number[];
  p: number;
  x: number;
  s: number;
  P: number;
  X: number;
  S: number;
  z: number;
}
export interface IV2HistoricQuotesResult {
  results_count?: number;
  db_latency?: number;
  success: boolean;
  ticker: string;
  results?: IQuoteV2[];
}

export const v2HistoricQuotes = (
  symbol: string,
  date: string,
  query?: IV2HistoricQuotesQuery
): Promise<IV2HistoricQuotesResult> =>
  get(`/v2/ticks/stocks/nbbo/${symbol}/${date}`, query);
