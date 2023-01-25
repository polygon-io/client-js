// CF: https://polygon.io/docs/crypto/get_v1_last_crypto__from___to

import { IGet, IPolygonQuery, IRequestOptions } from "../transport/request.js";

export interface ICryptoLastTrade {
  status?: string;
  request_id?: string;
  symbol?: string;
  last?: {
    conditions?: number[];
    exchange?: number;
    price?: number;
    size?: number;
    timestamp?: number;
  };
}

export const lastTrade = async (
  get: IGet,
  from: string,
  to: string,
  query?: IPolygonQuery,
  options?: IRequestOptions
): Promise<ICryptoLastTrade> =>
  get(`/v1/last/crypto/${from}/${to}`, query, options);
