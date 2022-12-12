// CF: https://polygon.io/docs/forex/launchpad/get_v1_summaries

import { get, IHeaders } from "../transport/request";
import { ISummaries, ISummariesQuery } from "../stocks/summaries";

export const summaries = async (
  apikey: string,
  apiBase: string,
  query?: ISummariesQuery,
  headers?: IHeaders
): Promise<ISummaries> =>
  get(
    `/v1/summaries`,
    apikey,
    apiBase,
    query,
    headers
  );
