// CF: https://polygon.io/docs/stocks/get_v3_trades__stockticker

import { IGet, IRequestOptions, IPolygonQuery } from "../transport/request.js";

export interface ITradeInfo {
  conditions: number[];
  correction: number;
  exchange: number;
  id: string;
  participant_timestamp: number;
  price: number;
  sequence_number: number;
  sip_timestamp: number;
  size: number;
  tape: number;
  trf_id: number;
  trf_timestamp: number;
}

export interface ITradesQuotesQuery extends IPolygonQuery {
  timestamp?: string;
  "timestamp.lt"?: string;
  "timestamp.lte"?: string;
  "timestamp.gt"?: string;
  "timestamp.gte"?: string;
  order?: "asc" | "desc";
  limit?: number;
  sort?: "timestamp";
}

export interface ITrades {
  next_url: string;
  request_id?: string;
  results?: ITradeInfo[];
  status?: string;
}

export const trades = async (
  get: IGet,
  stockTicker: string,
  query?: ITradesQuotesQuery,
  options?: IRequestOptions
): Promise<ITrades> => get(`/v3/trades/${stockTicker}`, query, options);
