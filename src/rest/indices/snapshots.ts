// CF: https://polygon.io/docs/indices/get_v3_snapshot

import { IGet, IPolygonQuery, IRequestOptions } from "../transport/request.js";

export interface IIndexSnapshotQuery extends IPolygonQuery {
  "ticker.any_of"?: string;
}

export interface IIndexSnapshotSession {
    change?: number;
    change_percent?: number;
    close?: number;
    high?: number;
    low?: number;
    open?: number;
    previous_close?: number;
}

export interface IIndexSnapshotInfo {
    market_status: string;
    name: string;
    session: IIndexSnapshotSession;
    ticker: string;
    type: string;
    value: number;
}

export interface IIndexSnapshot {
  status?: string;
  request_id?: string;
  index?: IIndexSnapshotInfo;
}

// CF: https://polygon.io/docs/indices/get_v3_snapshot
export const snapshotTicker = async (
  get: IGet,
  query?: IIndexSnapshotQuery,
  options?: IRequestOptions
): Promise<IIndexSnapshot> =>
  get(
    `/v3/snapshot/indices/`,
    query,
    options
  );
