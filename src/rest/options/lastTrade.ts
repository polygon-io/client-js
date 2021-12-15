// CF: https://polygon.io/docs/options/get_v2_last_trade__optionsTicker

import { get } from "../transport/request";
import { ITradeInfo } from "../stocks/trades";

export interface IOptionsLastTrade {
  request_id?: string;
  status?: string;
  results?: ITradeInfo[];
}

export const lastTrade = async (
  apiKey: string,
  apiBase: string,
  symbol: string
): Promise<IOptionsLastTrade> =>
  get(`/v2/last/trade/${symbol}`, apiKey, apiBase);
