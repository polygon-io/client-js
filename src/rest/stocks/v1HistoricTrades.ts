// CF: https://polygon.io/docs/#!/Stocks--Equities/get_v1_meta_exchanges
import { get, IPolygonQuery } from "../transport/request";

export interface IV1HistoricTradesQuery extends IPolygonQuery {
  limit?: number;
  offset?: number;
}
export interface ITradeV1 {
  c1: number;
  c2: number;
  c3: number;
  c4: number;
  e: string;
  p: number;
  s: number;
  t: number;
}
export interface IV1HistoricTradesResult {
  day: string;
  map: {
    c1: string;
    c2: string;
    c3: string;
    c4: string;
    e: string;
    p: string;
    s: string;
    t: string;
  };
  msLatency: number;
  status: string;
  symbol: string;
  ticks: ITradeV1[];
}

// TODO: remap
export const v1HistoricTrades = (
  symbol: string,
  date: string,
  query?: IV1HistoricTradesQuery
): Promise<IV1HistoricTradesResult> =>
  get(`/v1/historic/trades/${symbol}/${date}`, query);
