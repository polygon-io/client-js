// CF: https://polygon.io/docs/stocks/get_v2_reference_dividends__stocksTicker

import { get } from "../transport/request";

export interface IStockDividend {
  amount?: number;
  exDate?: string;
  paymentDate?: string;
  recordDate?: string;
  ticker?: string;
}

export interface IStockDividendsResults {
  status?: string;
  count?: number;
  results?: IStockDividend[];
}

export const stockDividends = async (
  apiKey: string,
  apiBase: string,
  symbol: string
): Promise<IStockDividendsResults> =>
  get(`/v2/reference/dividends/${symbol}`, apiKey, apiBase);
