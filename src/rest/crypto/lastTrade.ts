// CF: https://polygon.io/docs/crypto/get_v1_last_crypto__from___to

import { get } from '../transport/request';

export interface ICryptoLastTrade {
	status?: string;
	request_id?: string;
	symbol?: string;
	last?: {
		conditions?: number[];
		exchange?: number;
		price?: number;
		size?: number;
		timestamp?: number;
	};
}

export const lastTrade = async (
	apiKey: string,
	apiBase: string,
	from: string,
	to: string
): Promise<ICryptoLastTrade> =>
	get(`/v1/last/crypto/${from}/${to}`, apiKey, apiBase);
