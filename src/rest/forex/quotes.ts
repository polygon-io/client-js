// CF: https://polygon.io/docs/forex/get_v1_historic_forex__from___to___date

import { IGet, IRequestOptions } from "../transport/request";
import { ITradesQuotesQuery } from "../stocks/trades";

export interface IForexQuotesInfo {
  ask_exchange: number;
  ask_price: number;
  bid_exchange: number;
  bid_price: number;
  participant_timestamp: number;
}

export interface IForexQuotes {
  next_url?: string;
  request_id?: string;
  results?: IForexQuotesInfo[];
  status?: string;
}

export const quotes = async (
  get: IGet,
  fxTicker: string,
  query?: ITradesQuotesQuery,
  options?: IRequestOptions
): Promise<IForexQuotes> =>
  get(`/v3/quotes/${fxTicker}`, query, options);
