// CF: https://polygon.io/docs/crypto/get_v1_open-close_crypto__from___to___date

import { IGet, IPolygonQuery, IRequestOptions } from "../transport/request.js";
import { ITick } from "./ITickJson";

export interface ICryptoDailyOpenCloseQuery extends IPolygonQuery {
  adjusted?: "true" | "false";
}

export interface ICryptoDailyOpenClose {
  close?: number;
  closeingTrades?: ITick;
  day?: string;
  isUTC?: boolean;
  open?: number;
  openTrades?: ITick;
  symbol?: string;
}

export const dailyOpenClose = async (
  get: IGet,
  from: string,
  to: string,
  date: string,
  query?: ICryptoDailyOpenCloseQuery,
  options?: IRequestOptions
): Promise<ICryptoDailyOpenClose> =>
  get(`/v1/open-close/crypto/${from}/${to}/${date}`, query, options);
