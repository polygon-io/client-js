// CF: https://polygon.io/docs/options/get_v1_open-close__optionsTicker___date

import { get, IPolygonQuery } from "../transport/request";

export interface IOptionsDailyOpenCloseQuery extends IPolygonQuery {
  adjusted?: "true" | "false";
}

export interface IOptionsDailyOpenClose {
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
  apiKey: string,
  apiBase: string,
  symbol: string,
  date: string,
  query?: IOptionsDailyOpenCloseQuery
): Promise<IOptionsDailyOpenClose> =>
  get(`/v1/open-close/${symbol}/${date}`, apiKey, apiBase, query);
