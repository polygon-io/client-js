// CF: https://polygon.io/docs/forex/get_v1_historic_forex__from___to___date

import { get, IPolygonQuery } from "../transport/request";

export interface IForexQuotesInfo {
  ask_exchange: number;
  ask_price: number;
  bid_exchange: number;
  bid_price: number;
  participant_timestamp: number;
}

export interface IForexQuotesQuery extends IPolygonQuery {
  timestamp?: 
  | string
  | {
      lt?: string;
      lte?: string;
      gt?: string;
      gte?: string;
    };
  order?: "asc" | "desc";
  limit?: number;
  sort?: "timestamp";
}

export interface IForexQuotes {
  next_url?: string;
  request_id?: string;
  results?: IForexQuotesInfo[];
  status?: string;
}

export const quotes = async (
  apiKey: string,
  apiBase: string,
  fxTicker: string,
  query?: IForexQuotesQuery
): Promise<IForexQuotes> =>
  get(`/v3/quotes/${fxTicker}`, apiKey, apiBase, query);
