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

export interface ITickers {
  ticker: string;
  name: string;
  market: string;
  locale: string;
  currency: string;
  active: string;
  primaryExch: string;
  type: string;
  codes: { [key: string]: string };
  updated: string;
  url: string;
}

export const tickers = async (
  apiKey: string,
  query?: ITickersQuery
): Promise<ITickers[]> => {
  const path: string = "/v2/reference/tickers";
  return get(path, apiKey, query);
};
