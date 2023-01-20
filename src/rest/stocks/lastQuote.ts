// CF: https://polygon.io/docs/stocks/get_v2_last_nbbo__stocksticker

import { IGet, IPolygonQuery, IRequestOptions } from "../transport/request";
import { ILastTradeInfo } from "./lastTrade";

export interface ILastQuote {
  request_id?: string;
  status?: string;
  results?: ILastTradeInfo;
}

export const lastQuote = async (
  get: IGet,
  symbol: string,
  query?: IPolygonQuery,
  options?: IRequestOptions
): Promise<ILastQuote> => get(`/v2/last/nbbo/${symbol}`, query, options);
