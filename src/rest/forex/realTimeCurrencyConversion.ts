// CF: https://polygon.io/docs/forex/get_v1_conversion__from___to

import { get, IPolygonQuery } from "../transport/request";

export interface IRealTimeCurrencyConversionQuery extends IPolygonQuery {
  amount?: number;
  precision?: number;
}

export interface IRealTimeCurrencyConversion {
  status?: string;
  from?: string;
  to?: string;
  initialAmount?: number;
  converted?: number;
  lastTrade?: {
		ask?: number;
		bid?: number;
		exchange?: number;
		timestamp?: number;
	}
  symbol?: string;
}

export const realTimeCurrencyConversion = async (
  apiKey: string,
  apiBase: string,
  from: string,
  to: string,
  query?: IRealTimeCurrencyConversionQuery
): Promise<IRealTimeCurrencyConversion> =>
  get(`/v1/conversion/${from}/${to}`, apiKey, apiBase, query);
