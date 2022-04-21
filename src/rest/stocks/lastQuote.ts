// CF: https://polygon.io/docs/stocks/get_v2_last_nbbo__stocksticker

import { get } from "../transport/request";
import { ILastTradeInfo } from "./lastTrade";

export interface ILastQuote {
  request_id?: string;
  status?: string;
  results?: ILastTradeInfo;
}

export const lastQuote = async (
  apiKey: string,
  apiBase: string,
  symbol: string
): Promise<ILastQuote> => get(`/v2/last/nbbo/${symbol}`, apiKey, apiBase);
