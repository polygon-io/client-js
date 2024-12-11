// CF: https://polygon.io/docs/stocks/get_v3_reference_tickers

import { IGet, IPolygonQuery, IRequestOptions } from "../transport/request.js";

export type TickerTypes =
  | "CS"
  | "ADRC"
  | "ADRP"
  | "ADRR"
  | "UNIT"
  | "RIGHT"
  | "PFD"
  | "FUND"
  | "SP"
  | "WARRENT"
  | "INDEX"
  | "ETF"
  | "ETN";
export type MarketType = "stocks" | "crypto" | "fx" | "otc" | "indices";
export type Order = "asc" | "desc";

export interface ITickersQuery extends IPolygonQuery {
  ticker?: string;
  "ticker.lt"?: string;
  "ticker.lte"?: string;
  "ticker.gt"?: string;
  "ticker.gte"?: string;
  type?: TickerTypes;
  market?: MarketType;
  exchange?: string;
  cusip?: string;
  cik?: string;
  date?: string;
  search?: string;
  active?: "true" | "false";
  sort?: string;
  order?: Order;
  limit?: number;
  cursor?: string;
}

export interface ITickersResults {
  ticker: string;
  name: string;
  market: MarketType;
  locale: string;
  primary_exchange: string;
  type: string;
  active: boolean;
  currency_symbol?: string;
  currency_name?: string;
  base_currency_symbol?: string;
  base_currency_name?: string;
  cik?: string;
  composite_figi?: string;
  share_class_fig?: string;
  last_updated_utc?: string;
  deslisted_utc?: string;
}

export interface ITickers {
  status: string;
  request_id: string;
  count: number;
  previous_url?: string;
  next_url?: string;
  results: ITickersResults[];
}

export const tickers = async (
  get: IGet,
  query?: ITickersQuery,
  options?: IRequestOptions
): Promise<ITickers> => get("/v3/reference/tickers", query, options);
