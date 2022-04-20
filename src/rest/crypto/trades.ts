// CF: https://polygon.io/docs/crypto/get_v1_historic_crypto__from___to___date

import { get, IPolygonQuery } from "../transport/request";

export interface ICryptoTradeInfo {
  conditions: number[];
  exchange: number;
  id: string;
  participant_timestamp: number;
  price: number;
  size: number;
}

export interface ICryptoTradeQuery extends IPolygonQuery {
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

export interface ICryptoTrade {
  next_url?: string;
  request_id?: string;
  results?: ICryptoTradeInfo[];
  status?: string;
}

export const trades = async (
  apiKey: string,
  apiBase: string,
  cryptoTicker: string,
  query?: ICryptoTradeQuery
): Promise<ICryptoTrade> =>
  get(`/v3/trades/${cryptoTicker}`, apiKey, apiBase, query);
