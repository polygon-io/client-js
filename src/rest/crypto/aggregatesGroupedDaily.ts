// CF: https://polygon.io/docs/crypto/get_v2_aggs_grouped_locale_global_market_crypto__date

import { IGet, IRequestOptions } from "../transport/request.js";
import {
  IAggsGroupedDaily,
  IAggsGroupedDailyQuery,
} from "../stocks/aggregatesGroupedDaily";

export const aggregatesGroupedDaily = async (
  get: IGet,
  date: string,
  query?: IAggsGroupedDailyQuery,
  options?: IRequestOptions
): Promise<IAggsGroupedDaily> =>
  get(
    `/v2/aggs/grouped/locale/global/market/crypto/${date}`,
    query,
    options
  );
