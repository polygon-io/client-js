// CF: https://polygon.io/docs/stocks/get_v2_reference_dividends__stocksTicker

import { get, IPolygonQuery } from "../transport/request";

export interface IDividend {
  cash_amount: number;
  declaration_date: string;
  dividend_type: "CD" | "SC" | "LT" | "ST";
  ex_dividend_date: string;
  frequency: number;
  pay_date: string;
  record_date: string;
  ticker: string;
}

export interface IDividendsResults {
  next_url?: string;
  request_id?: string;
  results?: IDividend[];
  status?: string;
}

export interface IDividendsQuery extends IPolygonQuery {
  ticker?: string;
  "ticker.lt"?: string;
  "ticker.lte"?: string;
  "ticker.gt"?: string;
  "ticker.gte"?: string;
  ex_dividend_date?: string;
  "ex_dividend_date.lt"?: string;
  "ex_dividend_date.lte"?: string;
  "ex_dividend_date.gt"?: string;
  "ex_dividend_date.gte"?: string;
  record_date?: string;
  "record_date.lt"?: string;
  "record_date.lte"?: string;
  "record_date.gt"?: string;
  "record_date.gte"?: string;
  declaration_date?: string;
  "declaration_date.lt"?: string;
  "declaration_date.lte"?: string;
  "declaration_date.gt"?: string;
  "declaration_date.gte"?: string;
  pay_date?: string;
  "pay_date.lt"?: string;
  "pay_date.lte"?: string;
  "pay_date.gt"?: string;
  "pay_date.gte"?: string;
  frequency?: 0 | 1 | 2 | 4 | 12;
	cash_amount?: string;
  "cash_amount.lt"?: string;
  "cash_amount.lte"?: string;
  "cash_amount.gt"?: string;
  "cash_amount.gte"?: string;
  dividend_type?: "CD" | "SC" | "LT" | "ST";
  order?: "asc" | "desc";
  limit?: number;
  sort?:
    | "ex_dividend_date"
    | "pay_date"
    | "declaration_date"
    | "record_date"
    | "cash_amount"
    | "ticker";
}

export const stockDividends = async (
  apiKey: string,
  apiBase: string,
  query?: IDividendsQuery
): Promise<IDividendsResults> =>
  get(`/v3/reference/dividends`, apiKey, apiBase, query);
