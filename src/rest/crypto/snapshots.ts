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
export const cryptoSnapshotAllTickers = async (): Promise<
  ICryptoSnapshotAllTickers
> => {
  return get(`/v2/snapshot/locale/global/markets/crypto/tickers`);
  // TODO remap
};

// CF: https://polygon.io/docs/#!/Crypto/get_v2_snapshot_locale_global_markets_crypto_tickers
export const cryptoSnapshotSingleTicker = async (
  ticker: string
): Promise<ICryptoSnapshotSingleTicker> => {
  return get(`/v2/snapshot/locale/global/markets/crypto/tickers/${ticker}`);
  // todo remap
};

// CF: https://polygon.io/docs/#!/Crypto/get_v2_snapshot_locale_global_markets_crypto_direction
export const cryptoSnapshotGainersLosers = async (
  direction: string = "gainers"
): Promise<ICryptoSnapshotAllTickers> => {
  return get(`/v2/snapshot/locale/global/markets/crypto/${direction}`);
  // todo remap
};

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
): Promise<any> => {
  return get(
    `/v2/snapshot/locale/global/markets/crypto/tickers/${ticker}/book`
  );
  // TODO: remap
};
