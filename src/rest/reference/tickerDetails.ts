// CF: https://polygon.io/docs/stocks/get_v3_reference_tickers__ticker

import { get } from "../transport/request";

export interface ITickerDetails {
	request_id?: string;
	results?: {
	 active?: boolean;
	 address?: {
		address1?: string;
		city?: string;
		state?: string;
	 },
	 branding?: {
		icon_url?: string;
		logo_url?:string;
	 },
	 cik?: number;
	 composite_figi?: string;
	 currency_name?: string;
	 description?: string;
	 homepage_url?: string;
	 list_date?: string;
	 locale?: string;
	 market?: string;
	 market_cap?: number;
	 name?: string;
	 phone_number?: string;
	 primary_exchange?: string;
	 share_class_figi?: string;
	 share_class_shares_outstanding?: number;
	 sic_code?: number;
	 sic_description?: string;
	 ticker?: string;
	 total_employees?: number;
	 type?: string;
	 weighted_shares_outstanding?: number;
	},
	status?: string;
 }

export const tickerDetails = async (
  apiKey: string,
  apiBase: string,
  symbol: string
): Promise<ITickerDetails> =>
  get(`/v3/reference/tickers/${symbol}`, apiKey, apiBase);
