import { get } from "../transport/request";

export interface ICryptoTickJson {
  p: number;
  s: number;
  x: number;
  c: number[];
  t: number;
}
export interface ICryptoDailyOpenClose {
  symbol: string;
  isUTC?: boolean;
  day?: string;
  open?: number;
  close?: number;
  openTrades?: ICryptoTickJson[];
  closingTrades?: ICryptoTickJson[];
}

export const cryptoDailyOpenClose = (
  from: string,
  to: string,
  date: string
): Promise<ICryptoDailyOpenClose> =>
  get(`/v1/open-close/crypto/${from}/${to}/${date}`);
