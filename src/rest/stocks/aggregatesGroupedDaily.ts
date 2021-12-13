// CF: https://polygon.io/docs/stocks/get_v2_aggs_grouped_locale_us_market_stocks__date

import { get, IPolygonQuery } from "../transport/request";
import { IAggsResults } from "./aggregates";

export interface IAggsGroupedDailyQuery extends IPolygonQuery {
  adjusted?: "true" | "false";
}

export interface IAggsGroupedDaily {
  adjusted?: boolean;
  queryCount?: number;
  request_id?: number;
  status?: string;
  results: IAggsResults[];
}

export const aggregatesGroupedDaily = async (
  apiKey: string,
  apiBase: string,
  date: string,
  query?: IAggsGroupedDailyQuery
): Promise<IAggsGroupedDaily> =>
  get(
    `/v2/aggs/grouped/locale/us/market/stocks/${date}`,
    apiKey,
    apiBase,
    query
  );
