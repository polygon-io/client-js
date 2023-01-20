// CF: https://polygon.io/docs/options/get_v2_last_trade__optionsTicker

import { IGet, IPolygonQuery, IRequestOptions } from "../transport/request";
import { ILastTradeInfo } from "../stocks/lastTrade";

export interface IOptionsLastTrade {
  request_id?: string;
  status?: string;
  results?: ILastTradeInfo;
}

export const lastTrade = async (
  get: IGet,
  symbol: string,
  query?: IPolygonQuery,
  options?: IRequestOptions
): Promise<IOptionsLastTrade> =>
  get(`/v2/last/trade/${symbol}`, query, options);
