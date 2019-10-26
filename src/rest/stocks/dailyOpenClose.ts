// CF: https://polygon.io/docs/#!/Stocks--Equities/get_v1_open_close_symbol_date
import { get } from "../transport/request";

export interface IHistTrade {
  condition1: number;
  condition2: number;
  condition3: number;
  condition4: number;
  exchange: string;
  price: number;
  size: number;
  timestamp: string;
}

export interface IDailyOpenClose {
  symbol: string;
  open?: IHistTrade;
  close?: IHistTrade;
  afterHours?: IHistTrade;
}

export const dailyOpenClose = async (
  apiKey: string,
  symbol: string,
  date: string
): Promise<IDailyOpenClose> => get(`/v1/open-close/${symbol}/${date}`, apiKey);
