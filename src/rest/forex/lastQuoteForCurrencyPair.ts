// CF: https://polygon.io/docs/#!/Forex--Currencies/get_v1_last_quote_currencies_from_to

import { get } from "../transport/request";

export interface ILastQuoteForex {
  ask: number;
  bid: number;
  exchange: number;
  timestamp: number;
}
export interface ILastQuoteForCurrencyPair {
  symbol: string;
  status: string;
  last: ILastQuoteForex;
}

export const lastQuoteForCurrencyPair = (
  apiKey: string,
  from: string,
  to: string
): Promise<ILastQuoteForCurrencyPair> =>
  get(`/v1/last_quote/currencies/${from}/${to}`, apiKey);
