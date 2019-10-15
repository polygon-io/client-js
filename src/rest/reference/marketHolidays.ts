// CF: https://polygon.io/docs/#!/Reference/get_v1_marketstatus_upcoming
import { get } from "../transport/request";

export interface IMarketHolyday {
  exchange: string;
  name: string;
  status: string;
  date: string;
  open?: string;
  close?: string;
}

export const marketHolydays = async (): Promise<IMarketHolyday[]> =>
  get("/v1/marketstatus/upcoming");
