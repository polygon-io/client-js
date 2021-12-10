// CF: https://polygon.io/docs/stocks/get_v2_aggs_ticker__stocksTicker__prev

import { get, IPolygonQuery } from "../transport/request";
import { IAggsResults } from './aggregates';

export interface IAggsPreviousCloseQuery extends IPolygonQuery {
	adjusted?: "true" | "false"
}

export interface IAggsPreviousClose {
	ticker: string;
	adjusted: boolean;
	queryCount: number;
	request_id: string;
	resultsCount: number;
	status: string;
	count: number;
	results: IAggsResults[];
}

export const previousClose = async (
	apiKey: string,
	apiBase: string,
	symbol: string,
	query?: IAggsPreviousCloseQuery
): Promise<IAggsPreviousClose> => get(`/v2/aggs/ticker/${symbol}/prev`, apiKey, apiBase, query);