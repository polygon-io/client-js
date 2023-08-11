// CF: https://polygon.io/docs/stocks/get_v2_aggs_ticker__stocksTicker__range__multiplier___timespan___from___to

import { IGet, IPolygonQuery, IRequestOptions } from "../transport/request.js";

export interface IAggsResults {
  T?: string;
  c?: number;
  h?: number;
  l?: number;
  n?: number;
  o?: number;
  t?: number;
  v?: number;
  vw?: number;
}

export interface IAggsQuery extends IPolygonQuery {
  adjusted?: "true" | "false";
  sort?: "asc" | "desc";
  limit?: number;
}

export interface IAggs {
  ticker?: string;
  adjusted?: boolean;
  queryCount?: number;
  request_id?: number;
  resultsCount?: number;
  status?: string;
  results?: IAggsResults[];
  next_url?: string;
}

export const aggregates = async (
  get: IGet,
  ticker: string,
  multiplier: number,
  timespan: string,
  from: string | number,
  to: string | number,
  query?: IAggsQuery,
  options?: IRequestOptions
): Promise<IAggs> =>
  get(
    `/v2/aggs/ticker/${ticker}/range/${multiplier}/${timespan}/${from}/${to}`,
    query,
    options
  );
