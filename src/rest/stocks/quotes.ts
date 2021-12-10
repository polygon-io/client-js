// CF: https://polygon.io/docs/stocks/get_v2_ticks_stocks_nbbo__ticker___date

import { get } from "../transport/request";
import { ITradesQuotesQuery, ITradeInfo } from './trades';

export interface IQuotes {
	db_latency?: number;
	results_count?: number;
	success?: boolean;
	ticker?: string;
	results?: ITradeInfo[];
}

export const quotes = async (
  apiKey: string,
  apiBase: string,
  symbol: string,
  date: string,
  query?: ITradesQuotesQuery
): Promise<IQuotes> => get(`/v2/ticks/stocks/nbbo/${symbol}/${date}`, apiKey, apiBase, query)