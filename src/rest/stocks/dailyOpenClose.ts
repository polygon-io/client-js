// CF: https://polygon.io/docs/stocks/get_v1_open-close__stocksticker___date

import { IGet, IRequestOptions, IPolygonQuery } from "../transport/request.js";

export interface IDailyOpenCloseQuery extends IPolygonQuery {
  adjusted?: "true" | "false";
}

export interface IDailyOpenClose {
  afterHours?: number;
  close?: number;
  from?: string;
  high?: number;
  low?: number;
  open?: number;
  preMarket?: number;
  status?: string;
  symbol?: string;
  volume?: number;
}

export const dailyOpenClose = async (
  get: IGet,
  symbol: string,
  date: string,
  query?: IDailyOpenCloseQuery,
  options?: IRequestOptions
): Promise<IDailyOpenClose> =>
  get(`/v1/open-close/${symbol}/${date}`, query, options);
