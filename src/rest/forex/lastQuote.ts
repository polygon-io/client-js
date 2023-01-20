// CF: https://polygon.io/docs/forex/get_v1_last_quote_currencies__from___to

import { IGet, IPolygonQuery, IRequestOptions } from "../transport/request";

export interface IForexLastQuote {
  status?: string;
  request_id?: string;
  symbol?: string;
  last?: {
    ask?: number;
    bid?: number;
    exchange?: number;
    timestamp?: number;
  };
}

export const lastQuote = (
  get: IGet,
  from: string,
  to: string,
  query?: IPolygonQuery,
  options?: IRequestOptions
): Promise<IForexLastQuote> =>
  get(`/v1/last_quote/currencies/${from}/${to}`, query, options);
