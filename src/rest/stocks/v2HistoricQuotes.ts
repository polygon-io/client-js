// CF: https://polygon.io/docs/#!/Stocks--Equities/get_v2_ticks_stocks_nbbo_ticker_date
import { get, IPolygonQuery } from "../transport/request";

export interface IV2HistoricQuotesQuery extends IPolygonQuery {
  limit?: number;
  reverse?: boolean;
  timestamp?: number;
  timestampLimit?: number;
}

export interface IQuoteV2Raw {
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
export interface IQuoteV2Formatted {
  T?: string;
  ticker?: string;
  t?: number;
  SIPTimestamp?: number;
  y?: number;
  participantExchangeTimestamp?: number;
  f: number;
  tradeReportingFacilityTimestamp: number;
  q: number;
  sequenceNumber: number;
  c?: number[];
  conditions?: number[];
  i?: number[];
  indicators?: number[];
  p: number;
  bidPrice: number;
  x: number;
  bidExchangeId: number;
  s: number;
  bidSize: number;
  P: number;
  askPrice: number;
  X: number;
  askExchangeId: number;
  S: number;
  askSize: number;
  z: number;
  tapeWhereTradeOccured: number;
}
export const formatIQuoteV2Raw = (raw: IQuoteV2Raw): IQuoteV2Formatted => ({
  ...raw,
  ticker: raw.T,
  SIPTimestamp: raw.t,
  participantExchangeTimestamp: raw.y,
  tradeReportingFacilityTimestamp: raw.f,
  sequenceNumber: raw.q,
  conditions: raw.c,
  indicators: raw.i,
  bidPrice: raw.p,
  bidExchangeId: raw.x,
  bidSize: raw.s,
  askPrice: raw.p,
  askExchangeId: raw.X,
  askSize: raw.S,
  tapeWhereTradeOccured: raw.z
});

export interface IV2HistoricQuotesResultRaw {
  results_count?: number;
  db_latency?: number;
  success: boolean;
  ticker: string;
  results?: IQuoteV2Raw[];
}
export interface IV2HistoricQuotesResultFormatted {
  results_count?: number;
  db_latency?: number;
  success: boolean;
  ticker: string;
  results?: IQuoteV2Raw[];
}
const formatIV2HistoricQuotesResultRaw = (
  raw: IV2HistoricQuotesResultRaw
): IV2HistoricQuotesResultFormatted => ({
  ...raw,
  results: raw.results && raw.results.map(formatIQuoteV2Raw)
});

export const v2HistoricQuotes = async (
  apiKey: string,
  symbol: string,
  date: string,
  query?: IV2HistoricQuotesQuery
): Promise<IV2HistoricQuotesResultFormatted> =>
  formatIV2HistoricQuotesResultRaw(
    await get(`/v2/ticks/stocks/nbbo/${symbol}/${date}`, apiKey, query)
  );
