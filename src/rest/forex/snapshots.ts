import { formatIV1ForexRaw, IV1ForexRaw } from "./historicForexTicks";
import { get } from "../transport/request";

export interface IForexSnapshotAggRaw {
  c: number;
  h: number;
  l: number;
  o: number;
  v: number;
}
export interface IForexSnapshotAggFormatted {
  c: number;
  close: number;
  h: number;
  high: number;
  l: number;
  low: number;
  o: number;
  open: number;
  v: number;
  volume: number;
}
const formatIForexSnapshotAggRaw = (
  raw: IForexSnapshotAggRaw
): IForexSnapshotAggFormatted => ({
  ...raw,
  close: raw.c,
  high: raw.h,
  low: raw.l,
  open: raw.o,
  volume: raw.v
});

export interface IForexSnapshotTickerRaw {
  ticker: string;
  day: IForexSnapshotAggRaw;
  lastTrade: IV1ForexRaw;
  min: IForexSnapshotAggRaw;
  prevDay: IForexSnapshotAggRaw;
  todaysChange: number;
  todaysChangePerc: number;
  updated: number;
}
export interface IForexSnapshotTickerFormatted {
  ticker: string;
  day: IForexSnapshotAggRaw;
  lastTrade: IV1ForexRaw;
  min: IForexSnapshotAggRaw;
  prevDay: IForexSnapshotAggRaw;
  todaysChange: number;
  todaysChangePerc: number;
  updated: number;
}
const formatIForexSnapshotRaw = (
  raw: IForexSnapshotTickerRaw
): IForexSnapshotTickerFormatted => ({
  ticker: raw.ticker,
  todaysChange: raw.todaysChange,
  todaysChangePerc: raw.todaysChangePerc,
  updated: raw.updated,
  day: formatIForexSnapshotAggRaw(raw.day),
  lastTrade: formatIV1ForexRaw(raw.lastTrade),
  min: formatIForexSnapshotAggRaw(raw.min),
  prevDay: formatIForexSnapshotAggRaw(raw.prevDay)
});

export interface IForexSnapshotAllTickersResponseRaw {
  status: string;
  tickers: IForexSnapshotTickerRaw[];
}
export interface IForexSnapshotAllTickersResponseFormatted {
  status: string;
  tickers: IForexSnapshotTickerFormatted[];
}
const formatIForexSnapshotAllTickersResponseRaw = (
  raw: IForexSnapshotAllTickersResponseRaw
): IForexSnapshotAllTickersResponseFormatted => ({
  status: raw.status,
  tickers: raw.tickers.map(formatIForexSnapshotRaw)
});

// CF: https://polygon.io/docs/#!/Forex--Currencies/get_v2_snapshot_locale_global_markets_forex_tickers
export const forexSnapshotAllTickers = async (
  apiKey: string
): Promise<IForexSnapshotAllTickersResponseFormatted> =>
  formatIForexSnapshotAllTickersResponseRaw(
    await get(`/v2/snapshot/locale/global/markets/forex/tickers`, apiKey)
  );

// CF: https://polygon.io/docs/#!/Forex--Currencies/get_v2_snapshot_locale_global_markets_forex_direction
export const forexSnapshotGainersLosers = async (
  apiKey: string,
  direction: string = "gainers"
): Promise<IForexSnapshotAllTickersResponseFormatted> =>
  formatIForexSnapshotAllTickersResponseRaw(
    await get(`/v2/snapshot/locale/global/markets/forex/${direction}`, apiKey)
  );
