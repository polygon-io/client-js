// CF: https://polygon.io/docs/#!/Stocks--Equities/get_v1_historic_trades_symbol_date
import { get, IPolygonQuery } from "../transport/request";

export interface IV1HistoricTradesQuery extends IPolygonQuery {
  limit?: number;
  offset?: number;
}
export interface ITradeV1Raw {
  c1: number;
  c2: number;
  c3: number;
  c4: number;
  e: string;
  p: number;
  s: number;
  t: number;
}
export interface ITradeV1Formatted {
  c1: number;
  condition1: number;
  c2: number;
  condition2: number;
  c3: number;
  condition3: number;
  c4: number;
  condition4: number;
  e: string;
  exchange: string;
  p: number;
  price: number;
  s: number;
  size: number;
  t: number;
  timestamp: number;
}
export const formatITradeV1Raw = (raw: ITradeV1Raw): ITradeV1Formatted => ({
  ...raw,
  condition1: raw.c1,
  condition2: raw.c2,
  condition3: raw.c3,
  condition4: raw.c4,
  exchange: raw.e,
  price: raw.p,
  size: raw.s,
  timestamp: raw.t
});

export interface IV1HistoricTradesResultRaw {
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
  ticks: ITradeV1Raw[];
}
export interface IV1HistoricTradesResultFormatted {
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
  ticks: ITradeV1Formatted[];
}
export const formatIV1HistoricTradesResultRaw = (
  raw: IV1HistoricTradesResultRaw
): IV1HistoricTradesResultFormatted => ({
  ...raw,
  ticks: raw.ticks.map(formatITradeV1Raw)
});

export const v1HistoricTrades = async (
  apiKey: string,
  symbol: string,
  date: string,
  query?: IV1HistoricTradesQuery
): Promise<IV1HistoricTradesResultFormatted> =>
  formatIV1HistoricTradesResultRaw(
    await get(`/v1/historic/trades/${symbol}/${date}`, apiKey, query)
  );
