// CF: https://polygon.io/docs/stocks/get_v2_reference_splits__stocksTicker

import { get } from "../transport/request";

export interface IStockSplit {
  declaredDate?: string;
  exDate?: string;
  forfactor?: number;
  paymentDate?: string;
  ratio?: number;
  ticker?: string;
  tofactor?: number;
}
export interface IStockSplitsResults {
  status?: string;
  count?: number;
  results?: IStockSplit[];
}

export const stockSplits = async (
  apiKey: string,
  apiBase: string,
  symbol: string
): Promise<IStockSplitsResults> =>
  get(`/v2/reference/splits/${symbol}`, apiKey, apiBase);
