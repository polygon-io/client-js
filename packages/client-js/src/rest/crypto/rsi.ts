// CF: https://polygon.io/docs/crypto/get_v1_indicators_rsi__cryptoticker

import { ITechnicalIndicatorsQuery } from '../stocks/sma';
import { IRsi } from '../stocks/rsi';
import { get } from '../transport/request';

const rsi = async (
	apiKey: string,
	apiBase: string,
	symbol: string,
	query?: ITechnicalIndicatorsQuery
): Promise<IRsi> => get(`/v1/indicators/rsi/${symbol}`, apiKey, apiBase, query);

export default rsi;
