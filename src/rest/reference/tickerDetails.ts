// CF: https://polygon.io/docs/#!/Reference/get_v1_meta_symbols_symbol_company
import { get } from "../transport/request";

export interface ITickerDetails {
  logo?: string;
  exchange: string;
  name: string;
  symbol: string;
  listdate?: string;
  cik?: string;
  bloomberg?: string;
  figi?: string;
  lei?: string;
  sic?: number;
  country?: string;
  industry?: string;
  sector?: string;
  marketcap?: number;
  employees?: number;
  phone?: string;
  ceo?: string;
  url?: string;
  description?: string;
  similar?: string[];
  tags?: string[];
  updated?: string;
}

export const tickerDetails = (symbol: string): Promise<any> =>
  get(`/v1/meta/symbols/${symbol}/company`);
