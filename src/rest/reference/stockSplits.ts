// CF: https://polygon.io/docs/#!/Reference/get_v2_reference_splits_symbol
import { get } from "../transport/request";

export interface IStockSplit {
  ticker: string;
  exDate: string;
  paymentDate: string;
  recordDate?: string;
  declaredDate?: string;
  ratio: number;
  tofactor: number;
  forfactor: number;
}
export interface IStockSplitsResults {
  status?: string;
  count?: number;
  results?: IStockSplit[];
}

export const stockSplits = async (
  apiKey: string,
  symbol: string
): Promise<IStockSplitsResults> =>
  get(`/v2/reference/splits/${symbol}`, apiKey);
