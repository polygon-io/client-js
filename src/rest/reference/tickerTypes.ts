// CF: https://polygon.io/docs/stocks/get_v3_reference_tickers_types

import { get, IPolygonQuery, IPolygonEdgeHeaders } from "../transport/request";

export type AssetClassType = "stocks" | "options" | "crypto" | "fx";
export type LocaleType = "us" | "global";

export interface ITickerTypesQuery extends IPolygonQuery {
  asset_class?: AssetClassType;
  locale?: LocaleType;
}

export interface ITickerTypesResults {
  asset_class: AssetClassType;
  code: string;
  description: string;
  locale: LocaleType;
}

export interface ITickerTypes {
  status: string;
  request_id: string;
  count?: number;
  results?: ITickerTypesResults[];
}

export const tickerTypes = async (
  apiKeys: string,
  apiBase: string,
  query?: ITickerTypesQuery,
  headers?: IPolygonEdgeHeaders
): Promise<ITickerTypes> =>
  get("/v3/reference/tickers/types", apiKeys, apiBase, query, headers);
