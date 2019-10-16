import { ICryptoTickJson } from "./dailyOpenClose";
import { get } from "../transport/request";

export interface ICryptoSnapshotAgg {
  c: number;
  h: number;
  l: number;
  o: number;
  v: number;
}
export interface ICryptoSnapshotTicker {
  ticker: string;
  day: ICryptoSnapshotAgg;
  lastTrade: ICryptoTickJson;
  min: ICryptoSnapshotAgg;
  prevDay: ICryptoSnapshotAgg;
  todaysChange: number;
  todaysChangePerc: number;
  updated: number;
}
export interface ICryptoSnapshotAllTickers {
  status: string;
  tickers: ICryptoSnapshotTicker[];
}
export interface ICryptoSnapshotSingleTicker {
  status: string;
  ticker: ICryptoSnapshotTicker;
}

// CF: https://polygon.io/docs/#!/Crypto/get_v2_snapshot_locale_global_markets_crypto_tickers
export const cryptoSnapshotAllTickers = (): Promise<
  ICryptoSnapshotAllTickers
> => get(`/v2/snapshot/locale/global/markets/crypto/tickers`);

// CF: https://polygon.io/docs/#!/Crypto/get_v2_snapshot_locale_global_markets_crypto_tickers
export const cryptoSnapshotSingleTicker = (
  ticker: string
): Promise<ICryptoSnapshotSingleTicker> =>
  get(`/v2/snapshot/locale/global/markets/crypto/tickers/${ticker}`);

// CF: https://polygon.io/docs/#!/Crypto/get_v2_snapshot_locale_global_markets_crypto_direction
export const cryptoSnapshotGainersLosers = (
  direction: string = "gainers"
): Promise<ICryptoSnapshotAllTickers> =>
  get(`/v2/snapshot/locale/global/markets/crypto/${direction}`);

export interface ICryptoSnapshotBookItem {
  p: number;
  x: object;
}
export interface ICryptoSnapshotTickerBook {
  ticker: string;
  bids?: ICryptoSnapshotBookItem[];
  asks?: ICryptoSnapshotBookItem[];
  bidCount?: number;
  askCount?: number;
  spread?: number;
  updated: number;
}
export interface ICryptoSingleTickerFullBook {
  status: string;
  data: ICryptoSnapshotTickerBook;
}

// CF: https://polygon.io/docs/#!/Crypto/get_v2_snapshot_locale_global_markets_crypto_tickers_ticker_book
export const cryptoSnapshotSingleTickerFullBook = async (
  ticker: string
): Promise<any> =>
  get(`/v2/snapshot/locale/global/markets/crypto/tickers/${ticker}/book`);
