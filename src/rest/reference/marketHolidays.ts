// CF: https://polygon.io/docs/stocks/get_v1_marketstatus_upcoming

import { get } from "../transport/request";

export interface IMarketHoliday {
  close?: string;
  date?: string;
  name?: string;
  open?: string;
  staus?: string;
}

export const marketHolidays = async (
  apiKey: string,
  apiBase: string
): Promise<IMarketHoliday[]> =>
  get("/v1/marketstatus/upcoming", apiKey, apiBase);
