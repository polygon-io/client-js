// CF: https://polygon.io/docs/options/get_v3_snapshot_options__underlyingAsset___optionContract

import { get, IPolygonQuery } from "../transport/request";

export interface SnapshotDay {
  change?: number;
  change_percent?: number;
  close?: number;
  high?: number;
  last_updated?: number;
  low?: number;
  open?: number;
  previous_close?: number;
  volume?: number;
  vwap?: number;
}

export interface SnapshotDetails {
  contract_type?: string;
  exercise_styled?: string;
  expiration_date?: string;
  shares_per_contract?: number;
  strike_price?: number;
  ticker?: string;
}

export interface SnapshotGreeks {
  delta?: number;
  gamma?: number;
  theta?: number;
  vega?: number;
}

export interface SnapshotLastQuote {
  ask?: number;
  ask_size?: number;
  bid?: number;
  bid_size?: number;
  last_updated?: number;
  midpoint?: number;
  timeframe?: number;
}

export interface SnapshotUnderlyingAsset {
  change_to_break_even?: number;
  last_updated?: number;
  price?: number;
  ticker?: string;
  timeframe?: string;
}

export interface SnapshotInfo {
  break_even_price?: number;
  day?: SnapshotDay;
  details?: SnapshotDetails;
  greeks?: SnapshotGreeks;
  implied_volatility?: number;
  last_quote?: SnapshotLastQuote;
  open_interest?: number;
  underlying_asset?: SnapshotUnderlyingAsset;
}

export interface IOptionsSnapshotContract {
  status?: string;
  request_id?: string;
  previous_url?: string;
  next_url?: string;
  results?: SnapshotInfo;
}

// CF: https://polygon.io/docs/options/get_v3_snapshot_options__underlyingasset
export interface IOptionsSnapshotChain {
  status?: string;
  request_id?: string;
  previous_url?: string;
  next_url?: string;
  results?: SnapshotInfo[];
}

export interface IOptionsChainQuery extends IPolygonQuery {
  contract_type?: string;
  expiration_date?: string;
  "expiration_date.lt"?: string;
  "expiration_date.lte"?: string;
  "expiration_date.gt"?: string;
  "expiration_date.gte"?: string;
  order?: "asc" | "desc";
  limit?: number;
  sort?: string;
  strike_price?: number;
}

export const snapshotOptionChain = async (
  apiKey: string,
  apiBase: string,
  underlyingAsset: string,
  query?: IOptionsChainQuery
): Promise<IOptionsSnapshotChain> =>
  get(
    `/v3/snapshot/options/${underlyingAsset}`,
    apiKey,
    apiBase,
    query
  );

export const snapshotOptionContract = async (
  apiKey: string,
  apiBase: string,
  underlyingAsset: string,
  optionContract: string
): Promise<IOptionsSnapshotContract> =>
  get(
    `/v3/snapshot/options/${underlyingAsset}/${optionContract}`,
    apiKey,
    apiBase
  );
