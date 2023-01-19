// CF: https://polygon.io/docs/crypto/get_v1_open-close_crypto__from___to___date

import { get, IPolygonQuery } from '../transport/request';
import { ITick } from './ITickJson';

export interface ICryptoDailyOpenCloseQuery extends IPolygonQuery {
	adjusted?: 'true' | 'false';
}

export interface ICryptoDailyOpenClose {
	close?: number;
	closeingTrades?: ITick;
	day?: string;
	isUTC?: boolean;
	open?: number;
	openTrades?: ITick;
	symbol?: string;
}

export const dailyOpenClose = async (
	apiKey: string,
	apiBase: string,
	from: string,
	to: string,
	date: string,
	query?: ICryptoDailyOpenCloseQuery
): Promise<ICryptoDailyOpenClose> =>
	get(`/v1/open-close/crypto/${from}/${to}/${date}`, apiKey, apiBase, query);
