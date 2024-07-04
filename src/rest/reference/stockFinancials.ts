// CF: https://polygon.io/docs/stocks/get_vx_reference_financials

import { IGet, IPolygonQuery, IRequestOptions } from "../transport/request.js";

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
  source_filing_url: string;
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
  ticker?: string;
  "ticker.lt"?: string;
  "ticker.lte"?: string;
  "ticker.gt"?: string;
  "ticker.gte"?: string;
  cik?: string;
  company_name?: string;
  "company_name.lt"?: string;
  "company_name.lte"?: string;
  "company_name.gt"?: string;
  "company_name.gte"?: string;
  sic?: string;
  filing_date?: string;
  "filing_date.lt"?: string;
  "filing_date.lte"?: string;
  "filing_date.gt"?: string;
  "filing_date.gte"?: string;
  period_of_report_date?: string;
  "period_of_report_date.lt"?: string;
  "period_of_report_date.lte"?: string;
  "period_of_report_date.gt"?: string;
  "period_of_report_date.gte"?: string;
  timeframe?: "annual" | "quarterly" | "ttm";
  included_sources?: "true" | "false";
  order?: "asc" | "desc";
  limit?: number;
  sort?: "filing_date" | "period_of_report_date";
}

export const stockFinancials = async (
  get: IGet,
  query?: IStockFinancialQuery,
  options?: IRequestOptions
): Promise<IStockFinancialResults> =>
  get(`/vX/reference/financials`, query, options);
