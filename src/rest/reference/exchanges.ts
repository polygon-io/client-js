// CF: https://polygon.io/docs/stocks/get_v3_reference_exchanges

import { get, IPolygonQuery, IHeaders } from '../transport/request';

export interface IExchangesQuery extends IPolygonQuery {
	asset_class?: 'stocks' | 'options' | 'crypto' | 'fx';
	locale?: 'us' | 'global';
}

export interface IExchangesResults {
	acronymstring?: string;
	asset_class: string;
	id: number;
	locale: string;
	mic?: string;
	name: string;
	operating_mic?: string;
	participant_id?: string;
	type: string;
	url?: string;
}

export interface IExchanges {
	status: string;
	request_id: string;
	count?: number;
	results: IExchangesResults[];
}

export const exchanges = async (
	apiKey: string,
	apiBase: string,
	query?: IExchangesQuery,
	headers?: IHeaders
): Promise<IExchanges> =>
	get('/v3/reference/exchanges', apiKey, apiBase, query, headers);
