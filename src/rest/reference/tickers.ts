// CF: https://polygon.io/docs/#!/Reference/get_v2_reference_tickers
import { get, IPolygonQuery } from "../transport/request";

export interface ITickersQuery extends IPolygonQuery {
  sort?: string;
  type?: string;
  market?: string;
  locale?: string;
  search?: string;
  perpage?: number;
  page?: number;
  active?: boolean;
}

export interface ITicker {
  ticker: string;
  name: string;
  market: string;
  locale: string;
  primary_exchange: string;
  currency_name: string;
  active: boolean;
  primary_exchange: string;
  cik: string;
  composite_figi: string;
  share_class_figi: string;
  last_updated_utc: string;
  type: string;
  codes?: { [key: string]: string };
  updated: string;
  url: string;
}

export interface ITickers = Array<ITicker>

export const tickers = async (
  apiKey: string,
  apiBase: string,
  query?: ITickersQuery
): Promise<ITickers> => {
  const path: string = "/v3/reference/tickers";
  return get(path, apiKey, apiBase, query);
};
