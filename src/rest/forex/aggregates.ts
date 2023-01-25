// CF: https://polygon.io/docs/forex/get_v2_aggs_ticker__forexTicker__range__multiplier___timespan___from___to

import { IGet, IRequestOptions } from "../transport/request.js";
import { IAggsQuery, IAggs } from "../stocks/aggregates.js";

export const aggregates = async (
  get: IGet,
  ticker: string,
  multiplier: number,
  timespan: string,
  from: string,
  to: string,
  query?: IAggsQuery,
  options?: IRequestOptions
): Promise<IAggs> =>
  get(
    `/v2/aggs/ticker/${ticker}/range/${multiplier}/${timespan}/${from}/${to}`,
    query,
    options
  );
