import { IV1Forex } from "./historicForexTicks";
import { get } from "../transport/request";

export interface IForexSnapshotAgg {
  c: number;
  h: number;
  l: number;
  o: number;
  v: number;
}
export interface IForexSnapshotTicker {
  ticker: string;
  day: IForexSnapshotAgg;
  lastTrade: IV1Forex;
  min: IForexSnapshotAgg;
  prevDay: IForexSnapshotAgg;
  todaysChange: number;
  todaysChangePerc: number;
  updated: number;
}

export interface IForexSnapshotAllTickersResponse {
  status: string;
  tickers: IForexSnapshotTicker[];
}

// TODO: remap
// CF: https://polygon.io/docs/#!/Forex--Currencies/get_v2_snapshot_locale_global_markets_forex_tickers
export const forexSnapshotAllTickers = async (): Promise<
  IForexSnapshotAllTickersResponse
> => get(`/v2/snapshot/locale/global/markets/forex/tickers`);

// TODO: remap
// CF: https://polygon.io/docs/#!/Forex--Currencies/get_v2_snapshot_locale_global_markets_forex_direction
export const forexSnapshotGainersLosers = async (
  direction: string = "gainers"
): Promise<IForexSnapshotAllTickersResponse> =>
  get(`/v2/snapshot/locale/global/markets/forex/${direction}`);
