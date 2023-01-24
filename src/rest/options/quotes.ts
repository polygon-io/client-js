// CF: https://polygon.io/docs/options/get_v3_quotes__optionsticker

import { IGet, IRequestOptions } from "../transport/request.js";
import { ITradesQuotesQuery } from "../stocks/trades";

export interface IOptionQuotesInfo {
  ask_exchange: number;
  ask_price: number;
  ask_size: number;
  bid_exchange: number;
  bid_price: number;
  bid_size: number;
  sequence_number: number;
  sip_timestamp: number;
}

export interface IOptionQuotes {
  next_url?: string;
  request_id?: string;
  results?: IOptionQuotesInfo[];
  status?: string;
}

export const quotes = async (
  get: IGet,
  optionsTicker: string,
  query?: ITradesQuotesQuery,
  options?: IRequestOptions
): Promise<IOptionQuotes> =>
  get(`/v3/quotes/${optionsTicker}`, query, options);
