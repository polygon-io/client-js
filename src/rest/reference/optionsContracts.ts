// CF: https://polygon.io/docs/options/get_v3_reference_options_contracts

import { get, IPolygonQuery, IPolygonEdgeHeaders } from "../transport/request";

export interface IOptionsContractsQuery extends IPolygonQuery {
  ticker?: string;
  underlying_ticker?: string;
  contract_type?: string;
  expiration_date?: string;
  "expiration_date.lt"?: string;
  "expiration_date.lte"?: string;
  "expiration_date.gt"?: string;
  "expiration_date.gte"?: string;
  order?: "asc" | "desc";
  limit?: number;
  sort?: string;
}

export interface IOptionsContractsResults {
  cfi?: string;
  contract_type?: string;
  correction?: string;
  exercise_style?: string;
  expiration_date?: string;
  primary_exchange?: string;
  shares_per_contract?: number;
  strike_price?: number;
  ticker?: string;
  underlying_ticker?: string;
}

export interface IOptionsContracts {
  status?: string;
  request_id?: string;
  previous_url?: string;
  next_url?: string;
  results?: IOptionsContractsResults[];
}

export const optionsContracts = (
  apiKey: string,
  apiBase: string,
  query?: IOptionsContractsQuery,
  headers?: IPolygonEdgeHeaders
): Promise<IOptionsContracts> =>
  get("/v3/reference/options/contracts", apiKey, apiBase, query, headers);
