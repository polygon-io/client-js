// CF: https://polygon.io/docs/stocks/get_v2_last_trade__stocksTicker

import { IGet, IPolygonQuery, IRequestOptions } from "../transport/request.js";

export interface ILastTradeInfo {
  T?: string;
  f?: string;
  q?: string;
  t?: string;
  y?: string;
  P?: number;
  S?: number;
  X?: number;
  c?: number[];
  e?: number;
  i?: string;
  p?: number;
  r?: number;
  s?: number;
  x?: number;
  z?: number;
}

export interface ILastTrade {
  request_id?: string;
  status: string;
  results?: ILastTradeInfo;
}

export const lastTrade = async (
  get: IGet,
  symbol: string,
  query?: IPolygonQuery,
  options?: IRequestOptions
): Promise<ILastTrade> => get(`/v2/last/trade/${symbol}`, query, options);
