// CF: https://polygon.io/docs/stocks/get_v1_marketstatus_upcoming

import { IGet, IPolygonQuery, IRequestOptions } from "../transport/request";

export interface IMarketHoliday {
  close?: string;
  date?: string;
	exchange?: string;
  name?: string;
  open?: string;
  status?: string;
}

export const marketHolidays = async (
  get: IGet,
  query?: IPolygonQuery,
  options?: IRequestOptions
): Promise<IMarketHoliday[]> =>
  get("/v1/marketstatus/upcoming", query, options);
