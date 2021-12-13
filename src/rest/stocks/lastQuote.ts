// CF: https://polygon.io/docs/stocks/get_v2_ticks_stocks_nbbo__ticker___date

import { get } from "../transport/request";
import { ITradeInfo } from "./trades";

export interface ILastQuote {
  request_id?: string;
  status?: string;
  results?: ITradeInfo[];
}

export const lastQuote = async (
  apiKey: string,
  apiBase: string,
  symbol: string
): Promise<ILastQuote> => get(`/v2/last/nbbo/${symbol}`, apiKey, apiBase);
