// CF: https://polygon.io/docs/stocks/get_v1_marketstatus_now

import { IGet, IPolygonQuery, IRequestOptions } from "../transport/request.js";

export interface IIndicesGroups {
  s_and_p?: string;
  societe_generale?: string;
  cgi?: string;
  msci?: string;
  ftse_russell?: string;
  mstar?: string;
  mstarc?: string;
  cccy?: string;
  nasdaq?: string;
  dow_jones?: string;
}

export interface IMarketStatus {
  afterHours?: boolean;
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
  indicesGroups?: IIndicesGroups;
  market?: string;
  serverTime?: string;
}

export const marketStatus = async (
  get: IGet,
  query?: IPolygonQuery,
  options?: IRequestOptions
): Promise<IMarketStatus> => get("/v1/marketstatus/now", query, options);
