// CF: https://polygon.io/docs/crypto/get_v1_indicators_sma__cryptoticker

import { ISma, ITechnicalIndicatorsQuery } from '../stocks/sma';
import { get } from '../transport/request';

const sma = async (
	apiKey: string,
	apiBase: string,
	symbol: string,
	query?: ITechnicalIndicatorsQuery
): Promise<ISma> => get(`/v1/indicators/sma/${symbol}`, apiKey, apiBase, query);

export default sma;
