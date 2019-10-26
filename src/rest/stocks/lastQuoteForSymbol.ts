// CF: https://polygon.io/docs/#!/Stocks--Equities/get_v1_last_quote_stocks_symbol
import { get } from "../transport/request";

export interface ILastQuote {
  askprice: number;
  asksize: number;
  askexchange: number;
  bidprice: number;
  bidsize: number;
  bidexchange: number;
  timestamp: number;
}
export interface ILastQuoteResult {
  status: string;
  symbol: string;
  last: ILastQuote;
}

export const lastQuoteForSymbol = (
  apiKey: string,
  symbol: string
): Promise<ILastQuoteResult> => get(`/v1/last_quote/stocks/${symbol}`, apiKey);
