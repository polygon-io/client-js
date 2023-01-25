// CF: https://polygon.io/docs/stocks/get_v2_aggs_grouped_locale_us_market_stocks__date

import { IGet, IRequestOptions, IPolygonQuery } from "../transport/request.js";
import { IAggsResults } from "./aggregates.js";

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
  get: IGet,
  date: string,
  query?: IAggsGroupedDailyQuery,
  options?: IRequestOptions
): Promise<IAggsGroupedDaily> =>
  get(
    `/v2/aggs/grouped/locale/us/market/stocks/${date}`,
    query,
    options
  );
