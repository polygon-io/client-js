import { IGet, IRequestOptions, IPolygonQuery } from "../transport/request.js";

export interface SnapshotDay {
  c?: number;
  h?: number;
  l?: number;
  o?: number;
  v?: number;
}

export interface SnapshotLastQuote {
  a?: number;
  b?: number;
  t?: number;
  x?: number;
}

export interface SnapshotMin {
  c?: number;
  h?: number;
  l?: number;
  o?: number;
  v?: number;
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
  lastQuote?: SnapshotLastQuote;
  min?: SnapshotMin;
  prevDay?: SnapshotPrevDay;
  ticker?: string;
  todaysChange?: number;
  todayChangePerc?: number;
  updated?: number;
}

export interface IForexSnapshotAllTickersQuery extends IPolygonQuery {
  tickers?: string;
}

export interface IForexSnapshotTickers {
  count?: number;
  status?: string;
  tickers?: SnapshotInfo[];
}

export interface IForexSnapshot {
  status?: string;
  request_id?: string;
  ticker?: SnapshotInfo;
}

// CF: https://polygon.io/docs/forex/get_v2_snapshot_locale_global_markets_forex_tickers
export const snapshotAllTickers = async (
  get: IGet,
  query?: IForexSnapshotAllTickersQuery,
  options?: IRequestOptions
): Promise<IForexSnapshotTickers> =>
  get(
    `/v2/snapshot/locale/global/markets/forex/tickers`,
    query,
    options
  );

// CF: https://polygon.io/docs/forex/get_v2_snapshot_locale_global_markets_forex__direction
export const snapshotGainersLosers = async (
  get: IGet,
  direction: "gainers" | "losers",
  query?: IPolygonQuery,
  options?: IRequestOptions
): Promise<IForexSnapshotTickers> =>
  get(`/v2/snapshot/locale/global/markets/forex/${direction}`, query, options);

// CF: https://polygon.io/docs/forex/get_v2_snapshot_locale_global_markets_forex_tickers__ticker
export const snapshotTicker = async (
  get: IGet,
  symbol: string,
  query?: IPolygonQuery,
  options?: IRequestOptions
): Promise<IForexSnapshot> =>
  get(
    `/v2/snapshot/locale/global/markets/forex/tickers/${symbol}`,
    query,
    options
  );
