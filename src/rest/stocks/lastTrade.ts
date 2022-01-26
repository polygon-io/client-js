// CF: https://polygon.io/docs/stocks/get_v2_last_trade__stocksTicker

import { get } from "../transport/request";
import { ITradeInfo } from "./trades";

export interface ILastTrade {
  request_id?: string;
  status: string;
  results?: ITradeInfo;
}

export const lastTrade = async (
  apiKey: string,
  apiBase: string,
  symbol: string
): Promise<ILastTrade> => get(`/v2/last/trade/${symbol}`, apiKey, apiBase);
