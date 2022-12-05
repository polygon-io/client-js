// CF: https://polygon.io/docs/stocks/get_v1_marketstatus_now

import { get, IPolygonEdgeHeaders } from "../transport/request";

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
  apiKey: string,
  apiBase: string,
  headers?: IPolygonEdgeHeaders
): Promise<IMarketStatus> => get("/v1/marketstatus/now", apiKey, apiBase, {}, headers);
