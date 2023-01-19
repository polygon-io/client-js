// CF: https://polygon.io/docs/forex/get_v2_aggs_ticker__forexTicker__prev

import { get } from '../transport/request';
import {
	IAggsPreviousCloseQuery,
	IAggsPreviousClose
} from '../stocks/previousClose';

const previousClose = async (
	apiKey: string,
	apiBase: string,
	symbol: string,
	query?: IAggsPreviousCloseQuery
): Promise<IAggsPreviousClose> =>
	get(`/v2/aggs/ticker/${symbol}/prev`, apiKey, apiBase, query);

export default previousClose;
