import { IGet, IPolygonQuery, IRequestOptions } from "../transport/request.js";

export interface SnapshotDay {
  c?: number;
  h?: number;
  l?: number;
  o?: number;
  v?: number;
  vw?: number;
}

export interface SnapshotLastTrade {
  c?: string[];
  i?: string;
  p?: number;
  s?: number;
  t?: number;
  x?: number;
}

export interface SnapshotMin {
  c?: number;
  h?: number;
  l?: number;
  o?: number;
  v?: number;
  vw?: number;
  t?: number;
  n?: number;
}

export interface SnapshotPrevDay {
  c?: number;
  h?: number;
  l?: number;
  o?: number;
  v?: number;
  vw?: number;
}

export interface SnapshotInfo {
  day?: SnapshotDay;
  lastTrade?: SnapshotLastTrade;
  min?: SnapshotMin;
  prevDay?: SnapshotPrevDay;
  ticker?: string;
  todaysChange?: number;
  todaysChangePerc?: number;
  updated?: number;
}

export interface ICryptoSnapshotAllTickersQuery extends IPolygonQuery {
  tickers?: string;
}

export interface ICryptoSnapshotTickers {
  count?: number;
  status?: string;
  tickers?: SnapshotInfo[];
}

export interface ICryptoSnapshot {
  status?: string;
  request_id?: string;
  ticker?: SnapshotInfo;
}

export interface IFullBookTick {
  p?: number;
  x?: {
    [key: string]: string;
  };
}

export interface ICryptoSnapshotFullBookL2 {
  status?: string;
  data?: {
    ask?: IFullBookTick[];
    bidCount?: number;
    bids?: IFullBookTick[];
    spread?: number;
    ticker?: string;
    updated?: number;
  };
}

// CF: https://polygon.io/docs/crypto/get_v2_snapshot_locale_global_markets_crypto_tickers
export const snapshotAllTickers = (
  get: IGet,
  query?: ICryptoSnapshotAllTickersQuery,
  options?: IRequestOptions
): Promise<ICryptoSnapshotTickers> =>
  get(
    `/v2/snapshot/locale/global/markets/crypto/tickers`,
    query,
    options
  );

// CF: https://polygon.io/docs/crypto/get_v2_snapshot_locale_global_markets_crypto__direction
export const snapshotGainersLosers = (
  get: IGet,
  direction: "gainers" | "losers",
  query?: IPolygonQuery,
  options?: IRequestOptions
): Promise<ICryptoSnapshotTickers> =>
  get(
    `/v2/snapshot/locale/global/markets/crypto/${direction}`,
    query,
    options
  );

// CF: https://polygon.io/docs/crypto/get_v2_snapshot_locale_global_markets_crypto_tickers__ticker
export const snapshotTicker = (
  get: IGet,
  symbol: string,
  query?: IPolygonQuery,
  options?: IRequestOptions
): Promise<ICryptoSnapshot> =>
  get(
    `/v2/snapshot/locale/global/markets/crypto/tickers/${symbol}`,
    query,
    options
  );

// CF: https://polygon.io/docs/crypto/get_v2_snapshot_locale_global_markets_crypto_tickers__ticker__book
export const snapshotTickerFullBookL2 = (
  get: IGet,
  symbol: string,
  query?: IPolygonQuery,
  options?: IRequestOptions
): Promise<ICryptoSnapshotFullBookL2> =>
  get(
    `/v2/snapshot/locale/global/markets/crypto/tickers/${symbol}/book`,
    query,
    options
  );
