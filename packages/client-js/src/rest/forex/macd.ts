// CF: https://polygon.io/docs/forex/get_v1_indicators_macd__fxticker

import { ITechnicalIndicatorsQuery } from '../stocks/sma';
import { IMacd } from '../stocks/macd';
import { get } from '../transport/request';

const macd = async (
	apiKey: string,
	apiBase: string,
	symbol: string,
	query?: ITechnicalIndicatorsQuery
): Promise<IMacd> =>
	get(`/v1/indicators/macd/${symbol}`, apiKey, apiBase, query);

export default macd;
