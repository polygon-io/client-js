// CF: https://polygon.io/docs/crypto/get_v1_historic_crypto__from___to___date

import { IGet, IRequestOptions } from "../transport/request";
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
  get: IGet,
  cryptoTicker: string,
  query?: ITradesQuotesQuery,
  options?: IRequestOptions
): Promise<ICryptoTrade> =>
  get(`/v3/trades/${cryptoTicker}`, query, options);
