// CF: https://polygon.io/docs/stocks/get_v1_indicators_macd__stockticker

import { IUnderyling, IValue, ITechnicalIndicatorsQuery } from './sma';
import { get } from '../transport/request';

export interface IRsiResults {
	underlying?: IUnderyling;
	values: IValue[];
}

export interface IRsi {
	next_url?: string;
	request_id?: string;
	status?: string;
	results?: IRsiResults;
}

export const rsi = async (
	apiKey: string,
	apiBase: string,
	symbol: string,
	query?: ITechnicalIndicatorsQuery
): Promise<IRsi> => get(`/v1/indicators/rsi/${symbol}`, apiKey, apiBase, query);
