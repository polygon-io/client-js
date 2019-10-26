// CF: https://polygon.io/docs/#!/Stocks--Equities/get_v2_ticks_stocks_trades_ticker_date
import { get, IPolygonQuery } from "../transport/request";

export interface IV2HistoricTradesQuery extends IPolygonQuery {
  limit?: number;
  reverse?: boolean;
  timestamp?: number;
  timestampLimit?: number;
}
export interface ITradeV2Raw {
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
export interface ITradeV2Formatted {
  T?: string;
  ticker?: string;
  t: number;
  SIPTimestamp: number;
  y?: number;
  participantExchangeTimestamp?: number;
  f?: number;
  tradeReportingFacilityTimestamp?: number;
  q: number;
  sequenceNumber: number;
  i: string;
  tradeId: string;
  x: number;
  exchange: number;
  s: number;
  size: number;
  c: number[];
  conditions: number[];
  p: number;
  price: number;
  z: number;
  tapeWhereTheTradeOccured: number;
}
export const formatITradeV2Raw = (raw: ITradeV2Raw): ITradeV2Formatted => ({
  ...raw,
  ticker: raw.T,
  SIPTimestamp: raw.t,
  participantExchangeTimestamp: raw.y,
  tradeReportingFacilityTimestamp: raw.y,
  sequenceNumber: raw.q,
  tradeId: raw.i,
  exchange: raw.x,
  size: raw.s,
  conditions: raw.c,
  price: raw.p,
  tapeWhereTheTradeOccured: raw.z
});

export interface IV2HistoricTradesResultRaw {
  results_count?: number;
  db_latency?: number;
  success: boolean;
  ticker: string;
  ticks: ITradeV2Raw[];
}
export interface IV2HistoricTradesResultFormatted {
  results_count?: number;
  db_latency?: number;
  success: boolean;
  ticker: string;
  ticks: ITradeV2Formatted[];
}
export const formatIV2HistoricTradeResultRaw = (
  raw: IV2HistoricTradesResultRaw
): IV2HistoricTradesResultFormatted => ({
  ...raw,
  ticks: raw.ticks.map(formatITradeV2Raw)
});

export const v2HistoricTrades = async (
  apiKey: string,
  symbol: string,
  date: string,
  query?: IV2HistoricTradesQuery
): Promise<IV2HistoricTradesResultFormatted> =>
  formatIV2HistoricTradeResultRaw(
    await get(`/v2/ticks/stocks/trades/${symbol}/${date}`, apiKey, query)
  );
