// CF: https://polygon.io/docs/stocks/get_v2_ticks_stocks_trades__ticker___date

import { get, IPolygonQuery } from '../transport/request';

export interface ITradeInfo {
	T?: string;
	f?: string;
	q?: string;
	t?: string;
	y?: string;
	P?: number;
	S?: number;
	X?: number;
	c?: number[];
	e?: number;
	i?: string;
	p?: number;
	r?: number;
	s?: number;
	x?: number;
	z?: number;
}

export interface ITradesQuotesQuery extends IPolygonQuery {
	timestamp?: number;
	timestampLimit?: number;
	reverse?: "true" | "false";
	limit?: number;
}

export interface ITrades {
	db_latency?: number;
	results_count?: number;
	success?: boolean;
	ticker?: string;
	results?: ITradeInfo[];
}

export const trades = async (
	apiKey: string,
	apiBase: string,
	symbol: string,
	date: string,
	query?: ITradesQuotesQuery
): Promise<ITrades> => get(`/v2/ticks/stocks/trades/${symbol}/${date}`, apiKey, apiBase, query)