// CF: https://polygon.io/docs/#!/Stocks--Equities/get_v1_historic_quotes_symbol_date
import { get, IPolygonQuery } from "../transport/request";

export interface IV1HistoricQuotesQuery extends IPolygonQuery {
  limit?: number;
  offset?: number;
}
export interface IQuoteV1 {
  c: number;
  bE: number;
  aE: number;
  aP: number;
  bP: number;
  bS: number;
  aS: number;
  t: number;
}
export interface IV1HistoricQuotesResult {
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
  ticks: IQuoteV1[];
}

// TODO: remap
export const v1HistoricQuotes = (
  symbol: string,
  date: string,
  query?: IV1HistoricQuotesQuery
): Promise<IV1HistoricQuotesResult> =>
  get(`/v1/historic/quotes/${symbol}/${date}`, query);
