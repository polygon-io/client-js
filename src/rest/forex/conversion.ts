// CF: https://polygon.io/docs/forex/get_v1_conversion__from___to

import { get, IPolygonQuery } from '../transport/request';

export interface IConversionQuery extends IPolygonQuery {
	amount?: number,
	precision?: number
}

export interface IConversion {
	status?: string;
	converted?: number;
	initialAmmount?: number;
	last?: {
		ask?: number;
		bid?: number;
		exchange?: number;
		timestamp?: number;
	},
	to?: string;
}

export const conversion = async (
	apiKey: string,
	apiBase: string,
	from: string,
	to: string,
	query?: IConversionQuery
): Promise<IConversion> => get(`/v1/conversion/${from}/${to}`, apiKey, apiBase, query);