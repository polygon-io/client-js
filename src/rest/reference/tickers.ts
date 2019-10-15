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
  [key: string]: any;
}

export const tickers = async (query?: ITickersQuery): Promise<ITickers[]> => {
  const path: string = "/v2/reference/tickers";
  return get(path, query);
};
