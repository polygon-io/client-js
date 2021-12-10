// CF: https://polygon.io/docs/forex/get_v1_last_quote_currencies__from___to

import { get } from "../transport/request";

export interface IForexLastQuote {
  status?: string;
	request_id?: string;
  symbol?: string;
  last?: {
		ask?: number;
		bid?: number;
		exchange?: number;
		timestamp?: number;
	}
}

export const lastQuote = (
  apiKey: string,
  apiBase: string,
  from: string,
  to: string
): Promise<IForexLastQuote> =>
  get(`/v1/last_quote/currencies/${from}/${to}`, apiKey, apiBase);
