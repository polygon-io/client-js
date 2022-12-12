// CF: https://polygon.io/docs/stocks/get_v3_reference_conditions

import { get, IPolygonQuery, IHeaders } from "../transport/request";

export interface IConditionsQuery extends IPolygonQuery {
  asset_class?: "stocks" | "options" | "crypto" | "fx";
  data_type?: "trade" | "bbo" | "nbbo";
  id?: string;
  sip?: "CTA" | "UTP" | "OPRA";
  order?: "asc" | "desc";
  limit?: number;
  sort?: string;
}

export interface IConditionsResults {
  abbreviation?: string;
  asset_class: string;
  data_types: string[];
  description?: string;
  exchange?: number;
  id: number;
  legacy?: boolean;
  name: string;
  sip_mapping: {
    CTA?: string;
    OPRA?: string;
    UTP?: string;
  };
  type: string;
  update_rules?: {
    consolidated?: {
      updates_high_low: boolean;
      updates_open_close: boolean;
      updates_volume: boolean;
    };
    market_center?: {
      updates_high_low: boolean;
      updates_open_close: boolean;
      updates_volume: boolean;
    };
  };
}

export interface IConditions {
  status: string;
  request_id: string;
  count: number;
  previous_url?: string;
  next_url?: string;
  results: IConditionsResults[];
}

export const conditions = async (
  apiKey: string,
  apiBase: string,
  query?: IConditionsQuery,
  headers?: IHeaders
): Promise<IConditions> =>
  get("/v3/reference/conditions", apiKey, apiBase, query, headers);
