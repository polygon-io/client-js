// CF: https://polygon.io/docs/#!/Stocks--Equities/get_v2_ticks_stocks_trades_ticker_date
import { get, IPolygonQuery } from "../transport/request";

export interface IV2HistoricTradesQuery extends IPolygonQuery {
  limit?: number;
  reverse?: boolean;
  timestamp?: number;
  timestampLimit?: number;
}
export interface ITradeV2 {
  T?: string;
  t: number;
  y?: number;
  f?: number;
  q: number;
  i: string;
  x: number;
  s: number;
  c: number[];
  p: number;
  z: number;
}
export interface IV2HistoricTradesResult {
  results_count?: number;
  db_latency?: number;
  success: boolean;
  ticker: string;
  ticks: ITradeV2[];
}

// TODO: remap
export const v2HistoricTrades = (
  symbol: string,
  date: string,
  query?: IV2HistoricTradesQuery
): Promise<IV2HistoricTradesResult> =>
  get(`/v2/ticks/stocks/trades/${symbol}/${date}`, query);
