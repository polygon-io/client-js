import { get, IPolygonQuery } from "../transport/request";

export interface SnapshotDay {
  c?: number;
  h?: number;
  l?: number;
  o?: number;
  v?: number;
  vw?: number;
}

export interface SnapshotLastQuote {
  P?: number;
  S?: number;
  p?: number;
  s?: number;
  t?: number;
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
  av?: number;
  c?: number;
  h?: number;
  l?: number;
  o?: number;
  v?: number;
  vw?: number;
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
  lastTrade?: SnapshotLastTrade;
  min?: SnapshotMin;
  prevDay?: SnapshotPrevDay;
  ticker?: string;
  todaysChange?: number;
  todaysChangePerc?: number;
  updated?: number;
}

export interface ISnapshotAllTickersQuery extends IPolygonQuery {
  tickers?: string;
}

export interface ISnapshotTickers {
  count?: number;
  status?: string;
  tickers?: SnapshotInfo[];
}

export interface ISnapshot {
  status?: string;
  request_id?: string;
  ticker?: SnapshotInfo;
}

// CF: https://polygon.io/docs/stocks/get_v2_snapshot_locale_us_markets_stocks_tickers
export const snapshotAllTickers = async (
  apiKey: string,
  apiBase: string,
  query?: ISnapshotAllTickersQuery
): Promise<ISnapshotTickers> =>
  get(`/v2/snapshot/locale/us/markets/stocks/tickers`, apiKey, apiBase, query);

// CF: https://polygon.io/docs/stocks/get_v2_snapshot_locale_us_markets_stocks__direction
export const snapshotGainersLosers = async (
  apiKey: string,
  apiBase: string,
  direction: "gainers" | "losers"
): Promise<ISnapshotTickers> =>
  get(`/v2/snapshot/locale/us/markets/stocks/${direction}`, apiKey, apiBase);

// CF: https://polygon.io/docs/stocks/get_v2_snapshot_locale_us_markets_stocks_tickers__stocksTicker
export const snapshotTicker = async (
  apiKey: string,
  apiBase: string,
  symbol: string
): Promise<ISnapshot> =>
  get(
    `/v2/snapshot/locale/us/markets/stocks/tickers/${symbol}`,
    apiKey,
    apiBase
  );
