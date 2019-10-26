import { get } from "../transport/request";
import {
  formatICryptoTickJsonRaw,
  ICryptoTickJsonFormatted,
  ICryptoTickJsonRaw
} from "./ICryptoTickJson";

interface ICryptoSnapshotAggRaw {
  c: number;
  h: number;
  l: number;
  o: number;
  v: number;
}
export interface ICryptoSnapshotAggFormatted {
  c: number;
  closePrice: number;
  h: number;
  highPrice: number;
  l: number;
  lowPrice: number;
  o: number;
  openPrice: number;
  v: number;
  volume: number;
}
const formatICryptoSnapshotAggRaw = (
  raw: ICryptoSnapshotAggRaw
): ICryptoSnapshotAggFormatted => ({
  ...raw,
  closePrice: raw.c,
  highPrice: raw.h,
  lowPrice: raw.l,
  openPrice: raw.o,
  volume: raw.v
});

interface ICryptoSnapshotTickerRaw {
  ticker: string;
  day: ICryptoSnapshotAggRaw;
  lastTrade: ICryptoTickJsonRaw;
  min: ICryptoSnapshotAggRaw;
  prevDay: ICryptoSnapshotAggRaw;
  todaysChange: number;
  todaysChangePerc: number;
  updated: number;
}
export interface ICryptoSnapshotTickerFormatted {
  ticker: string;
  day: ICryptoSnapshotAggFormatted;
  lastTrade: ICryptoTickJsonFormatted;
  min: ICryptoSnapshotAggFormatted;
  prevDay: ICryptoSnapshotAggFormatted;
  todaysChange: number;
  todaysChangePerc: number;
  updated: number;
}
const formatICryptoSnapshotTickerRaw = (
  raw: ICryptoSnapshotTickerRaw
): ICryptoSnapshotTickerFormatted => ({
  ticker: raw.ticker,
  todaysChange: raw.todaysChange,
  todaysChangePerc: raw.todaysChangePerc,
  day: formatICryptoSnapshotAggRaw(raw.day),
  lastTrade: formatICryptoTickJsonRaw(raw.lastTrade),
  min: formatICryptoSnapshotAggRaw(raw.min),
  prevDay: formatICryptoSnapshotAggRaw(raw.prevDay),
  updated: raw.updated
});

interface ICryptoSnapshotAllTickersRaw {
  status: string;
  tickers: ICryptoSnapshotTickerRaw[];
}
export interface ICryptoSnapshotAllTickersFormatted {
  status: string;
  tickers: ICryptoSnapshotTickerFormatted[];
}

interface ICryptoSnapshotSingleTickerRaw {
  status: string;
  ticker: ICryptoSnapshotTickerRaw;
}
export interface ICryptoSnapshotSingleTickerFormatted {
  status: string;
  ticker: ICryptoSnapshotTickerFormatted;
}
// CF: https://polygon.io/docs/#!/Crypto/get_v2_snapshot_locale_global_markets_crypto_tickers
export const cryptoSnapshotAllTickers = async (
  apiKey: string
): Promise<ICryptoSnapshotAllTickersFormatted> => {
  const raw: ICryptoSnapshotAllTickersRaw = await get(
    `/v2/snapshot/locale/global/markets/crypto/tickers`,
    apiKey
  );
  return {
    status: raw.status,
    tickers: raw.tickers.map(formatICryptoSnapshotTickerRaw)
  };
};

// CF: https://polygon.io/docs/#!/Crypto/get_v2_snapshot_locale_global_markets_crypto_tickers
export const cryptoSnapshotSingleTicker = async (
  apiKey: string,
  ticker: string
): Promise<ICryptoSnapshotSingleTickerFormatted> => {
  const raw: ICryptoSnapshotSingleTickerRaw = await get(
    `/v2/snapshot/locale/global/markets/crypto/tickers/${ticker}`,
    apiKey
  );
  return {
    status: raw.status,
    ticker: formatICryptoSnapshotTickerRaw(raw.ticker)
  };
};

// CF: https://polygon.io/docs/#!/Crypto/get_v2_snapshot_locale_global_markets_crypto_direction
export const cryptoSnapshotGainersLosers = async (
  apiKey: string,
  direction: string = "gainers"
): Promise<ICryptoSnapshotAllTickersFormatted> => {
  const raw: ICryptoSnapshotAllTickersRaw = await get(
    `/v2/snapshot/locale/global/markets/crypto/${direction}`,
    apiKey
  );
  return {
    status: raw.status,
    tickers: raw.tickers.map(formatICryptoSnapshotTickerRaw)
  };
};

interface ICryptoSnapshotBookItemRaw {
  p: number;
  x: object;
}
export interface ICryptoSnapshotBookItemFormatted {
  p: number;
  price: number;
  x: object;
  exchange: object;
}
const formatICryptoSnapshotBookItemRaw = (
  raw: ICryptoSnapshotBookItemRaw
): ICryptoSnapshotBookItemFormatted => ({
  ...raw,
  price: raw.p,
  exchange: raw.x
});

interface ICryptoSnapshotTickerBookRaw {
  ticker: string;
  bids?: ICryptoSnapshotBookItemRaw[];
  asks?: ICryptoSnapshotBookItemRaw[];
  bidCount?: number;
  askCount?: number;
  spread?: number;
  updated: number;
}
export interface ICryptoSnapshotTickerBookFormatted {
  ticker: string;
  bids?: ICryptoSnapshotBookItemFormatted[];
  asks?: ICryptoSnapshotBookItemFormatted[];
  bidCount?: number;
  askCount?: number;
  spread?: number;
  updated: number;
}
const formatICryptoSnapshotTickerBookRaw = (
  raw: ICryptoSnapshotTickerBookRaw
): ICryptoSnapshotTickerBookFormatted => ({
  ...raw,
  bids:
    raw.bids && raw.bids.length
      ? raw.bids.map(formatICryptoSnapshotBookItemRaw)
      : [],
  asks:
    raw.asks && raw.asks.length
      ? raw.asks.map(formatICryptoSnapshotBookItemRaw)
      : []
});

interface ICryptoSingleTickerFullBookRaw {
  status: string;
  data: ICryptoSnapshotTickerBookRaw;
}
export interface ICryptoSingleTickerFullBookFormatted {
  status: string;
  data: ICryptoSnapshotTickerBookFormatted;
}
const formatICryptoSingleTickerFullBookRaw = (
  raw: ICryptoSingleTickerFullBookRaw
): ICryptoSingleTickerFullBookFormatted => ({
  ...raw,
  data: formatICryptoSnapshotTickerBookRaw(raw.data)
});

// CF: https://polygon.io/docs/#!/Crypto/get_v2_snapshot_locale_global_markets_crypto_tickers_ticker_book
export const cryptoSnapshotSingleTickerFullBook = async (
  apiKey: string,
  ticker: string
): Promise<ICryptoSingleTickerFullBookFormatted> => {
  const raw: ICryptoSingleTickerFullBookRaw = await get(
    `/v2/snapshot/locale/global/markets/crypto/tickers/${ticker}/book`,
    apiKey
  );
  return formatICryptoSingleTickerFullBookRaw(raw);
};
