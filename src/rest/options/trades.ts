// CF: https://polygon.io/docs/options/get_v3_trades__optionsticker

import { IGet, IRequestOptions } from "../transport/request.js";
import { ITradesQuotesQuery } from "../stocks/trades";

export interface IOptionTradesInfo {
  conditions: number[];
  correction: number;
  exchange: number;
  participant_timestamp: number;
  price: number;
  sip_timestamp: number;
  size: number;
}

export interface IOptionTrades {
  next_url?: string;
  request_id?: string;
  results?: IOptionTradesInfo[];
  status?: string;
}

export const trades = async (
  get: IGet,
  optionsTicker: string,
  query?: ITradesQuotesQuery,
  options?: IRequestOptions
): Promise<IOptionTrades> =>
  get(`/v3/trades/${optionsTicker}`, query, options);
