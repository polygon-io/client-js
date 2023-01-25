// CF: https://polygon.io/docs/stocks/get_v1_marketstatus_now

import { IGet, IPolygonQuery, IRequestOptions } from "../transport/request.js";

export interface IMarketStatus {
  afterhours?: boolean;
  currencies?: {
    fx?: string;
    crypto?: string;
  };
  earlyhours?: boolean;
  exchanges?: {
    nyse?: string;
    nasdaq?: string;
    otc?: string;
  };
  market?: string;
  serverTime?: string;
}

export const marketStatus = async (
  get: IGet,
  query?: IPolygonQuery,
  options?: IRequestOptions
): Promise<IMarketStatus> => get("/v1/marketstatus/now", query, options);
