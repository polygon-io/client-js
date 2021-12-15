// CF: https://polygon.io/docs/stocks/get_v1_meta_symbols__stocksTicker__company

import { get } from "../transport/request";

export interface ITickerDetails {
  active?: boolean;
  bloomberg?: string;
  cik?: string;
  country?: string;
  description?: string;
  employees?: number;
  exchange?: string;
  exchangeSymbol?: string;
  figi?: string;
  hq_address?: string;
  hq_country?: string;
  hq_state?: string;
  industry?: string;
  lei?: string;
  listdate?: string;
  logo?: string;
  marketcap?: number;
  name?: string;
  phone?: string;
  sector?: string;
  sic?: number;
  similar?: string[];
  symbol?: string;
  tags?: string[];
  type?: string;
  updated?: string;
  url?: string;
}

export const tickerDetails = async (
  apiKey: string,
  apiBase: string,
  symbol: string
): Promise<ITickerDetails> =>
  get(`/v1/meta/symbols/${symbol}/company`, apiKey, apiBase);
