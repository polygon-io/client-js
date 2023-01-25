// CF: https://polygon.io/docs/crypto/launchpad/get_v1_summaries

import { IGet, IRequestOptions } from "../transport/request.js";
import { ISummaries, ISummariesQuery } from "../stocks/summaries";

export const summaries = async (
  get: IGet,
  query?: ISummariesQuery,
  options?: IRequestOptions
): Promise<ISummaries> =>
  get(
    `/v1/summaries`,
    query,
    options
  );
