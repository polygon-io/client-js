// CF: https://polygon.io/docs/crypto/get_v1_historic_crypto__from___to___date

import { get } from "../transport/request";
import { ITradesQuotesQuery } from "../stocks/trades";

export interface ICryptoTradeInfo {
  conditions: number[];
  exchange: number;
  id: string;
  participant_timestamp: number;
  price: number;
  size: number;
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
  query?: ITradesQuotesQuery
): Promise<ICryptoTrade> =>
  get(`/v3/trades/${cryptoTicker}`, apiKey, apiBase, query);
