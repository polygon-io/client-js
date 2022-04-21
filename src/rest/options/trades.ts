// CF: https://polygon.io/docs/options/get_v3_trades__optionsticker

import { get } from "../transport/request";
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
  apiKey: string,
  apiBase: string,
  optionsTicker: string,
  query?: ITradesQuotesQuery
): Promise<IOptionTrades> =>
  get(`/v3/trades/${optionsTicker}`, apiKey, apiBase, query);
