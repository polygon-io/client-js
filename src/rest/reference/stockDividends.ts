// CF: https://polygon.io/docs/#!/Reference/get_v2_reference_splits_symbol
import { get } from "../transport/request";

export interface IStockDividend {
  symbol: string;
  type: string;
  exDate: string;
  paymentDate?: string;
  recordDate?: string;
  declaredDate?: string;
  amount: number;
  qualified?: string;
  flag?: string;
}
export interface IStockDividendsResults {
  status?: string;
  count?: number;
  results?: IStockDividend[];
}

export const stockDividends = async (
  apiKey: string,
  symbol: string
): Promise<IStockDividendsResults> =>
  get(`/v2/reference/dividends/${symbol}`, apiKey);
