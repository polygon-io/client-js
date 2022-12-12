// CF: https://polygon.io/docs/crypto/launchpad/get_v1_summaries

import { get, IPolygonEdgeHeaders } from "../transport/request";
import { ISummaries, ISummariesQuery } from "../stocks/summaries";

export const summaries = async (
  apikey: string,
  apiBase: string,
  query?: ISummariesQuery,
  headers?: IPolygonEdgeHeaders
): Promise<ISummaries> =>
  get(
    `/v1/summaries`,
    apikey,
    apiBase,
    query,
    headers
  );
