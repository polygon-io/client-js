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
  ticker?:
    | string
    | {
        lt?: string;
        lte?: string;
        gt?: string;
        gte?: string;
      };
  ex_dividend_date?:
    | string
    | {
        lt?: string;
        lte?: string;
        gt?: string;
        gte?: string;
      };
  record_date?:
    | string
    | {
        lt?: string;
        lte?: string;
        gt?: string;
        gte?: string;
      };
  declaration_date?:
    | string
    | {
        lt?: string;
        lte?: string;
        gt?: string;
        gte?: string;
      };
  pay_date?:
    | string
    | {
        lt?: string;
        lte?: string;
        gt?: string;
        gte?: string;
      };
  frequency?: 0 | 1 | 2 | 4 | 12;
  cash_amount?:
    | number
    | {
        lt?: number;
        lte?: number;
        gt?: number;
        gte?: number;
      };
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
