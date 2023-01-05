// CF: https://polygon.io/docs/options/get_v2_aggs_ticker__optionsTicker__range__multiplier___timespan___from___to

import { get, IHeaders } from "../transport/request";
import { IAggsQuery, IAggs } from "../stocks/aggregates";

export const aggregates = async (
  apikey: string,
  apiBase: string,
  ticker: string,
  multiplier: number,
  timespan: string,
  from: string,
  to: string,
  query?: IAggsQuery,
  headers?: IHeaders
): Promise<IAggs> =>
  get(
    `/v2/aggs/ticker/${ticker}/range/${multiplier}/${timespan}/${from}/${to}`,
    apikey,
    apiBase,
    query,
    headers
  );
