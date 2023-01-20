// CF: https://polygon.io/docs/stocks/get_v2_aggs_ticker__stocksTicker__prev

import { IGet, IRequestOptions, IPolygonQuery } from "../transport/request";
import { IAggsResults } from "./aggregates";

export interface IAggsPreviousCloseQuery extends IPolygonQuery {
  adjusted?: "true" | "false";
}

export interface IAggsPreviousClose {
  ticker?: string;
  adjusted?: boolean;
  queryCount?: number;
  request_id?: string;
  resultsCount?: number;
  status?: string;
  count?: number;
  results?: IAggsResults[];
}

export const previousClose = async (
  get: IGet,
  symbol: string,
  query?: IAggsPreviousCloseQuery,
  options?: IRequestOptions
): Promise<IAggsPreviousClose> =>
  get(`/v2/aggs/ticker/${symbol}/prev`, query, options);
