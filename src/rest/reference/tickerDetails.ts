// CF: https://polygon.io/docs/#!/Reference/get_v1_meta_symbols_symbol_company
import { get } from "../transport/request";

export interface ITickerDetailsRaw {
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

export interface ITickerDetailsFormatted {
  logo?: string;
  exchange: string;
  name: string;
  symbol: string;
  listdate?: string;
  cik?: string;
  bloomberg?: string;
  figi?: string;
  legalEntityIdentifier?: string;
  standardIndustryClassification?: number;
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

export const tickerDetails = async (
  apiKey: string,
  symbol: string
): Promise<ITickerDetailsFormatted> => {
  const raw: ITickerDetailsRaw = await get(
    `/v1/meta/symbols/${symbol}/company`,
    apiKey
  );

  const formatted: ITickerDetailsFormatted = { ...raw };
  formatted.legalEntityIdentifier = raw.lei;
  formatted.standardIndustryClassification = raw.sic;
  return formatted;
};
