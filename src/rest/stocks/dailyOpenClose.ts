// CF: https://polygon.io/docs/stocks/get_v1_open-close__stocksTicker___date

import { get, IPolygonQuery } from "../transport/request";

export interface IDailyOpenCloseQuery extends IPolygonQuery {
	adjusted?: "true" | "false"
}

export interface IDailyOpenClose {
  afterhours?: number;
	close?: number;
	from?: string;
	hight?: number;
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
	query?: IDailyOpenCloseQuery
): Promise<IDailyOpenClose> => get(`/v1/open-close/${symbol}/${date}`, apiKey, apiBase, query);
