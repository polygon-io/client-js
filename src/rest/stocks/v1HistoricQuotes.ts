// CF: https://polygon.io/docs/#!/Stocks--Equities/get_v1_historic_quotes_symbol_date
import { get, IPolygonQuery } from "../transport/request";

export interface IV1HistoricQuotesQuery extends IPolygonQuery {
  limit?: number;
  offset?: number;
}
export interface IQuoteV1Raw {
  c: number;
  bE: number;
  aE: number;
  aP: number;
  bP: number;
  bS: number;
  aS: number;
  t: number;
}
export interface IQuoteV1Formatted {
  c: number;
  condition: number;
  bE: number;
  bidExchange: number;
  aE: number;
  askExchange: number;
  aP: number;
  askPrice: number;
  bP: number;
  buyPrice: number;
  bS: number;
  bidSize: number;
  aS: number;
  askSize: number;
  t: number;
  timestamp: number;
}
export const formatIQuoteV1Raw = (raw: IQuoteV1Raw): IQuoteV1Formatted => ({
  ...raw,
  condition: raw.c,
  bidExchange: raw.bE,
  askExchange: raw.aE,
  askPrice: raw.aP,
  buyPrice: raw.bP,
  bidSize: raw.bS,
  askSize: raw.aS,
  timestamp: raw.t
});

export interface IV1HistoricQuotesResultRaw {
  day: string;
  map: {
    aE: string;
    aP: string;
    aS: string;
    bE: string;
    bP: string;
    bS: string;
    c: string;
    t: string;
  };
  msLatency: number;
  status: string;
  symbol: string;
  ticks: IQuoteV1Raw[];
}
export interface IV1HistoricQuotesResultFormatted {
  day: string;
  map: {
    aE: string;
    aP: string;
    aS: string;
    bE: string;
    bP: string;
    bS: string;
    c: string;
    t: string;
  };
  msLatency: number;
  status: string;
  symbol: string;
  ticks: IQuoteV1Formatted[];
}
export const formatIV1HistoricQuotesResultRaw = (
  raw: IV1HistoricQuotesResultRaw
): IV1HistoricQuotesResultFormatted => ({
  ...raw,
  ticks: raw.ticks.map(formatIQuoteV1Raw)
});

export const v1HistoricQuotes = async (
  apiKey: string,
  symbol: string,
  date: string,
  query?: IV1HistoricQuotesQuery
): Promise<IV1HistoricQuotesResultFormatted> =>
  formatIV1HistoricQuotesResultRaw(
    await get(`/v1/historic/quotes/${symbol}/${date}`, apiKey, query)
  );
