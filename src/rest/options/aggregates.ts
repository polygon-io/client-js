// CF: https://polygon.io/docs/options/get_v2_aggs_ticker__optionsTicker__range__multiplier___timespan___from___to

import { IAggsQuery, IAggs } from "../stocks/aggregates";
import { IGet, IRequestOptions } from "../transport/request";

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
