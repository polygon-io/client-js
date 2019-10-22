import { get } from "../transport/request";
import { ITradeV1 } from "./v1HistoricTrades";

export interface IStocksSnapshotAgg {
  c: number;
  h: number;
  l: number;
  o: number;
  v: number;
}
export interface IStocksSnapshotQuote {
  p: number;
  s: number;
  P: number;
  S: number;
  t: number;
}
export interface IStocksSnapshotTicker {
  ticker: string;
  day: IStocksSnapshotAgg;
  lastTrade: ITradeV1;
  lastQuote: IStocksSnapshotQuote;
  min: IStocksSnapshotAgg;
  prevDay: IStocksSnapshotAgg;
  todaysChange: number;
  todaysChangePerc: number;
  updated: number;
}

// TODO: remap
// CF: https://polygon.io/docs/#!/Stocks--Equities/get_v2_snapshot_locale_us_markets_stocks_tickers
export interface ISnapshotAllTickersResult {
  status: string;
  tickers: IStocksSnapshotTicker[];
}
export const snapshotAllTickers = (): Promise<ISnapshotAllTickersResult> =>
  get(`/v2/snapshot/locale/us/markets/stocks/tickers`);

// TODO: remap
// CF: https://polygon.io/docs/#!/Stocks--Equities/get_v2_snapshot_locale_us_markets_stocks_tickers_ticker
export interface ISnapshotSingleTickerResult {
  status: string;
  ticker: IStocksSnapshotTicker;
}
export const snapshotSingleTicker = (
  ticker: string
): Promise<ISnapshotSingleTickerResult> =>
  get(`/v2/snapshot/locale/us/markets/stocks/tickers/${ticker}`);

// CF: https://polygon.io/docs/#!/Stocks--Equities/get_v2_snapshot_locale_us_markets_stocks_tickers_ticker
export interface ISnapshotGainersLosersResult {
  status: string;
  tickers: IStocksSnapshotTicker[];
}
// TODO: remap
export const snapshotGainersLosers = (
  direction: string = "gainers"
): Promise<ISnapshotGainersLosersResult> =>
  get(`/v2/snapshot/locale/us/markets/stocks/${direction}`);
