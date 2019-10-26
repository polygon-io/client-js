import { get } from "../transport/request";
import {
  formatITradeV1Raw,
  ITradeV1Raw,
  ITradeV1Formatted
} from "./v1HistoricTrades";

export interface IStocksSnapshotAggRaw {
  c: number;
  h: number;
  l: number;
  o: number;
  v: number;
}
export interface IStocksSnapshotAggFormatted {
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
export const formatIStocksSnapshotAggRaw = (
  raw: IStocksSnapshotAggRaw
): IStocksSnapshotAggFormatted => ({
  ...raw,
  close: raw.c,
  high: raw.h,
  low: raw.l,
  open: raw.o,
  volume: raw.v
});

export interface IStocksSnapshotQuoteRaw {
  p: number;
  s: number;
  P: number;
  S: number;
  t: number;
}
export interface IStocksSnapshotQuoteFormatted {
  p: number;
  bidPrice: number;
  s: number;
  bidSize: number;
  P: number;
  askPrice: number;
  S: number;
  askSize: number;
  t: number;
  lastUpdateTimestam: number;
}
export const formatIStocksSnapshotQuoteRaw = (
  raw: IStocksSnapshotQuoteRaw
): IStocksSnapshotQuoteFormatted => ({
  ...raw,
  bidPrice: raw.p,
  bidSize: raw.s,
  askPrice: raw.P,
  askSize: raw.S,
  lastUpdateTimestam: raw.t
});

export interface IStocksSnapshotTickerRaw {
  ticker: string;
  day: IStocksSnapshotAggRaw;
  lastTrade: ITradeV1Raw;
  lastQuote: IStocksSnapshotQuoteRaw;
  min: IStocksSnapshotAggRaw;
  prevDay: IStocksSnapshotAggRaw;
  todaysChange: number;
  todaysChangePerc: number;
  updated: number;
}
export interface IStocksSnapshotTickerFormatted {
  ticker: string;
  day: IStocksSnapshotAggFormatted;
  lastTrade: ITradeV1Formatted;
  lastQuote: IStocksSnapshotQuoteFormatted;
  min: IStocksSnapshotAggFormatted;
  prevDay: IStocksSnapshotAggFormatted;
  todaysChange: number;
  todaysChangePerc: number;
  updated: number;
}
export const formatIStocksSnapshotTickerRaw = (
  raw: IStocksSnapshotTickerRaw
): IStocksSnapshotTickerFormatted => ({
  ...raw,
  day: formatIStocksSnapshotAggRaw(raw.day),
  lastTrade: formatITradeV1Raw(raw.lastTrade),
  lastQuote: formatIStocksSnapshotQuoteRaw(raw.lastQuote),
  min: formatIStocksSnapshotAggRaw(raw.min),
  prevDay: formatIStocksSnapshotAggRaw(raw.prevDay)
});

// CF: https://polygon.io/docs/#!/Stocks--Equities/get_v2_snapshot_locale_us_markets_stocks_tickers
export interface ISnapshotAllTickersResultRaw {
  status: string;
  tickers: IStocksSnapshotTickerRaw[];
}
export interface ISnapshotAllTickersResultFormatted {
  status: string;
  tickers: IStocksSnapshotTickerFormatted[];
}
const formatISnapshotAllTickersResultRaw = (
  raw: ISnapshotAllTickersResultRaw
): ISnapshotAllTickersResultFormatted => ({
  ...raw,
  tickers: raw.tickers.map(formatIStocksSnapshotTickerRaw)
});

export const snapshotAllTickers = async (
  apiKey: string
): Promise<ISnapshotAllTickersResultFormatted> =>
  formatISnapshotAllTickersResultRaw(
    await get(`/v2/snapshot/locale/us/markets/stocks/tickers`, apiKey)
  );

// CF: https://polygon.io/docs/#!/Stocks--Equities/get_v2_snapshot_locale_us_markets_stocks_tickers_ticker
export interface ISnapshotSingleTickerResultRaw {
  status: string;
  ticker: IStocksSnapshotTickerRaw;
}
export interface ISnapshotSingleTickerResultFormatted {
  status: string;
  ticker: IStocksSnapshotTickerFormatted;
}
const formatISnapshotSingleTickerResultRaw = (
  raw: ISnapshotSingleTickerResultRaw
): ISnapshotSingleTickerResultFormatted => ({
  ...raw,
  ticker: formatIStocksSnapshotTickerRaw(raw.ticker)
});

export const snapshotSingleTicker = async (
  apiKey: string,
  ticker: string
): Promise<ISnapshotSingleTickerResultFormatted> =>
  formatISnapshotSingleTickerResultRaw(
    await get(`/v2/snapshot/locale/us/markets/stocks/tickers/${ticker}`, apiKey)
  );

// CF: https://polygon.io/docs/#!/Stocks--Equities/get_v2_snapshot_locale_us_markets_stocks_tickers_ticker
export interface ISnapshotGainersLosersResultRaw {
  status: string;
  tickers: IStocksSnapshotTickerRaw[];
}
export interface ISnapshotGainersLosersResultFormatted {
  status: string;
  tickers: IStocksSnapshotTickerFormatted[];
}
export const snapshotGainersLosers = async (
  apiKey: string,
  direction: string = "gainers"
): Promise<ISnapshotGainersLosersResultFormatted> =>
  formatISnapshotAllTickersResultRaw(
    await get(`/v2/snapshot/locale/us/markets/stocks/${direction}`, apiKey)
  );
