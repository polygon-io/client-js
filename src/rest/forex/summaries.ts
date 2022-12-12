// CF: 

import { get } from "../transport/request";
import { ISummaries, ISummariesQuery } from "../stocks/summaries";

export const summaries = async (
  apikey: string,
  apiBase: string,
  query?: ISummariesQuery
): Promise<ISummaries> =>
  get(
    `/v1/summaries`,
    apikey,
    apiBase,
    query
  );
