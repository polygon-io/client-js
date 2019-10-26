// CF: https://polygon.io/docs/#!/Stocks--Equities/get_v1_last_stocks_symbol

import { get } from "../transport/request";

export interface ILastTrade {
  price: number;
  size: number;
  exchange: number;
  cond1: number;
  cond2: number;
  cond3: number;
  cond4: number;
  timestamp: number;
}

export interface ILastTradeResult {
  status: string;
  symbol: string;
  last: ILastTrade;
}

export const lastTradeForSymbol = (
  apiKey: string,
  symbol: string
): Promise<ILastTradeResult> => get(`/v1/last/stocks/${symbol}`, apiKey);
