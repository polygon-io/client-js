// CF: https://polygon.io/docs/options/get_v3_snapshot_options__underlyingAsset___optionContract

import { IGet, IPolygonQuery, IRequestOptions } from "../transport/request.js";

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
  value?: number;
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
  next_url?: string;
  results?: SnapshotInfo[];
}

export interface IOptionsChainQuery extends IPolygonQuery {
  contract_type?: "call" | "put";
  expiration_date?: string;
  "expiration_date.lt"?: string;
  "expiration_date.lte"?: string;
  "expiration_date.gt"?: string;
  "expiration_date.gte"?: string;
  order?: "asc" | "desc";
  limit?: number;
  sort?: "ticker" | "expiration_date" | "strike_price";
  strike_price?: number;
  "strike_price.lt"?: number;
  "strike_price.lte"?: number;
  "strike_price.gt"?: number;
  "strike_price.gte"?: number;
}

export const snapshotOptionChain = async (
  get: IGet,
  underlyingAsset: string,
  query?: IOptionsChainQuery,
  options?: IRequestOptions
): Promise<IOptionsSnapshotChain> =>
  get(`/v3/snapshot/options/${underlyingAsset}`, query, options);

export const snapshotOptionContract = async (
  get: IGet,
  underlyingAsset: string,
  optionContract: string,
  query?: IOptionsChainQuery,
  options?: IRequestOptions
): Promise<IOptionsSnapshotContract> =>
  get(
    `/v3/snapshot/options/${underlyingAsset}/${optionContract}`,
    query,
    options
  );
