// CF: https://polygon.io/docs/stocks/get_vx_reference_financials

import { get, IPolygonQuery } from "../transport/request";

export interface ITableInfo {
  formula?: string;
  label: string;
  order: number;
  unit: string;
  value: number;
  xpath?: string;
}

export interface IFinancials {
  balance_sheet?: { [key: string]: ITableInfo };
  cash_flow_statement?: { [key: string]: ITableInfo };
  comprehensive_income?: { [key: string]: ITableInfo };
  income_statement?: { [key: string]: ITableInfo };
}

export interface IStocksFinancial {
  cik: string;
  company_name: string;
  end_date: string;
  filing_date: string;
  financials: IFinancials;
  fiscal_period: string;
  fiscal_year: string;
  source_filing_file_url: string;
  source_filling_url: string;
  start_date: string;
}

export interface IStockFinancialResults {
  count?: number;
  next_url?: string;
  request_id?: string;
  results?: IStocksFinancial[];
  status?: string;
}

export interface IStockFinancialQuery extends IPolygonQuery {
  ticker?:
    | string
    | {
        lt?: string;
        lte?: string;
        gt?: string;
        gte?: string;
      };
  cik?: string;
  company_name?:
    | string
    | {
        lt?: string;
        lte?: string;
        gt?: string;
        gte?: string;
      };
  sic?: string;
  filling_date?:
    | string
    | {
        lt?: string;
        lte?: string;
        gt?: string;
        gte?: string;
      };
  period_of_report_date?:
    | string
    | {
        lt?: string;
        lte?: string;
        gt?: string;
        gte?: string;
      };
  timeframe?: "annual" | "quarterly";
  included_sources?: "true" | "false";
  order?: "asc" | "desc";
  limit?: number;
  sort?: "filling_date" | "period_of_report_date";
}

export const stockFinancials = async (
  apiKey: string,
  apiBase: string,
  query?: IStockFinancialQuery
): Promise<IStockFinancialResults> =>
  get(`/vX/reference/financials`, apiKey, apiBase, query);
