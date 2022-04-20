// CF: https://polygon.io/docs/stocks/get_v2_reference_splits__stocksTicker

import { get, IPolygonQuery } from "../transport/request";

export interface IStockSplit {
  execution_date: string;
  split_from: number;
  split_to: number;
  ticker: string;
}

export interface IStockSplitsResults {
  next_url?: string;
  request_id?: string;
  results?: IStockSplit[];
  status?: string;
}

export interface IStockSplitsQuery extends IPolygonQuery {
  ticker?:
    | string
    | {
        lt?: string;
        lte?: string;
        gt?: string;
        gte?: string;
      };
  execution_data?: 
    | string
    | {
        lt?: string;
        lte?: string;
        gt?: string;
        gte?: string;
      };
  reverse_split?: "true" | "false";
  order?: "asc" | "desc";
  limit?: number;
  sort?: "ticker" | "execution_date"
}

export const stockSplits = async (
  apiKey: string,
  apiBase: string,
  query?: IStockSplitsQuery
): Promise<IStockSplitsResults> =>
  get(`/v3/reference/splits`, apiKey, apiBase, query);
