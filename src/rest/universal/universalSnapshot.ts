import { IGet, IRequestOptions, IPolygonQuery } from "../transport/request.js";

export interface UniversalSnapshotSession {
  change?: number;
  change_percent?: number;
  early_trading_change?: number;
  early_trading_change_percent?: number;
  late_trading_change?: number;
  late_trading_change_percent?: number;
  close?: number;
  high?: number;
  low?: number;
  open?: number;
  volume?: number;
  previous_close?: number;
  price?: number;
}

export interface UniversalSnapshotLastQuote {
  last_updated?: number;
  timeframe?: string;
  ask?: number;
  ask_size?: number;
  ask_exchange?: number,
  bid?: number;
  bid_size?: number;
  bid_exchange?: number;
  midpoint?: number;
  exchange?: number;
}

export interface UniversalSnapshotLastTrade {
  last_updated?: number;
  timeframe?: string;
  id?: string;
  price?: number;
  size?: number;
  exchange?: number;
  conditions?: number[];
  participant_timestamp?: number;
  sip_timestamp?: number;
}

export interface UniversalSnapshotDetails {
  contract_type?: string;
  exercise_style?: string;
  expiration_date?: string;
  shares_per_contract?: number;
  strike_price?: number;
}

export interface UniversalSnapshotGreeks {
  delta?: number;
  gamma?: number;
  theta?: number;
  vega?: number;
}

export interface UniversalSnapshotUnderlyingAsset {
  change_to_break_even?: number;
  last_updated?: number;
  price?: number;
  ticker?: string;
  timeframe?: string;
}

export interface UniversalSnapshotInfo {
  market_status?: string;
  name?: string;
  ticker?: string;
  type?: string;
  session?: UniversalSnapshotSession;
  last_quote?: UniversalSnapshotLastQuote;
  last_trade?: UniversalSnapshotLastTrade;
  details?: UniversalSnapshotDetails;
  greeks?: UniversalSnapshotGreeks;
  implied_volatility?: number;
  open_interest?: number;
  underlying_asset?: UniversalSnapshotUnderlyingAsset;
  value?: number;
  break_even_price?: number;
}

export interface IUniversalSnapshotQuery extends IPolygonQuery {
  "ticker.any_of"?: string;
}

export interface IUniversalSnapshot {
  status?: string;
  request_id?: string;
  results?: UniversalSnapshotInfo[];
}

// CF: https://api.polygon.io/v3/snapshot?ticker.any_of=NCLH,O:SPY250321C00380000,C:EURUSD,X:BTCUSD,I:SPX&apiKey=XXX
export const universalSnapshot = async (
  get: IGet,
  query?: IUniversalSnapshotQuery,
  options?: IRequestOptions
): Promise<IUniversalSnapshot> =>
  get(`/v3/snapshot`, query, options);
