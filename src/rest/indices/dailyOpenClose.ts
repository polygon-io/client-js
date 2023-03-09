// CF: https://polygon.io/docs/indices/get_v1_open-close__stocksticker___date

import { IDailyOpenClose, IDailyOpenCloseQuery } from "../stocks/dailyOpenClose.js";
import { IGet, IRequestOptions } from "../transport/request.js";

export const dailyOpenClose = async (
  get: IGet,
  symbol: string,
  date: string,
  query?: IDailyOpenCloseQuery,
  options?: IRequestOptions
): Promise<IDailyOpenClose> =>
  get(`/v1/open-close/${symbol}/${date}`, query, options);
