// CF: https://polygon.io/docs/crypto/get_v2_aggs_ticker__cryptoTicker__range__multiplier___timespan___from___to

import { get, IHeaders } from '../transport/request';
import { IAggsQuery, IAggs } from '../stocks/aggregates';

const aggregates = async (
	apikey: string,
	apiBase: string,
	ticker: string,
	multiplier: number,
	timespan: string,
	from: string,
	to: string,
	query?: IAggsQuery,
	headers?: IHeaders
): Promise<IAggs> =>
	get(
		`/v2/aggs/ticker/${ticker}/range/${multiplier}/${timespan}/${from}/${to}`,
		apikey,
		apiBase,
		query,
		headers
	);

export default aggregates;
