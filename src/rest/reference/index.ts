import { auth, IHeaders } from '../transport/request';

import { IConditionsQuery, IConditions, conditions } from './conditions';
import { IExchangesQuery, IExchanges, exchanges } from './exchanges';
import { IMarketHoliday, marketHolidays } from './marketHolidays';
import { IMarketStatus, marketStatus } from './marketStatus';
import {
	IOptionsContractQuery,
	IOptionsContract,
	optionsContract
} from './optionsContract';
import {
	IOptionsContractsQuery,
	IOptionsContracts,
	optionsContracts
} from './optionsContracts';
import {
	IDividendsResults,
	IDividendsQuery,
	stockDividends
} from './dividends';
import {
	IStockSplitsResults,
	IStockSplitsQuery,
	stockSplits
} from './stockSplits';
import {
	IStockFinancialResults,
	IStockFinancialQuery,
	stockFinancials
} from './stockFinancials';
import { ITickerDetails, tickerDetails } from './tickerDetails';
import { ITickerNews, ITickerNewsQuery, tickerNews } from './tickerNews';
import { ITickers, ITickersQuery, tickers } from './tickers';
import { ITickerTypes, ITickerTypesQuery, tickerTypes } from './tickerTypes';

export interface IReferenceClient {
	conditions: (
		query?: IConditionsQuery,
		headers?: IHeaders
	) => Promise<IConditions>;
	exchanges: (
		query?: IExchangesQuery,
		headers?: IHeaders
	) => Promise<IExchanges>;
	marketHolidays: (headers?: IHeaders) => Promise<IMarketHoliday[]>;
	marketStatus: (headers?: IHeaders) => Promise<IMarketStatus>;
	optionsContract: (
		optionsTicker: string,
		query?: IOptionsContractQuery,
		headers?: IHeaders
	) => Promise<IOptionsContract>;
	optionsContracts: (
		query?: IOptionsContractsQuery,
		headers?: IHeaders
	) => Promise<IOptionsContracts>;
	dividends: (
		query?: IDividendsQuery,
		headers?: IHeaders
	) => Promise<IDividendsResults>;
	stockSplits: (
		query?: IStockSplitsQuery,
		headers?: IHeaders
	) => Promise<IStockSplitsResults>;
	stockFinancials: (
		query?: IStockFinancialQuery,
		headers?: IHeaders
	) => Promise<IStockFinancialResults>;
	tickerDetails: (
		symbol: string,
		headers?: IHeaders
	) => Promise<ITickerDetails>;
	tickerNews: (
		query?: ITickerNewsQuery,
		headers?: IHeaders
	) => Promise<ITickerNews>;
	tickers: (query?: ITickersQuery, headers?: IHeaders) => Promise<ITickers>;
	tickerTypes: (
		query?: ITickerTypesQuery,
		headers?: IHeaders
	) => Promise<ITickerTypes>;
}

export const referenceClient = (
	apiKey: string,
	apiBase = 'https://api.polygon.io',
	headers?: IHeaders
): IReferenceClient => ({
	conditions: auth(apiKey, conditions, apiBase, headers),
	exchanges: auth(apiKey, exchanges, apiBase, headers),
	marketHolidays: auth(apiKey, marketHolidays, apiBase, headers),
	marketStatus: auth(apiKey, marketStatus, apiBase, headers),
	optionsContract: auth(apiKey, optionsContract, apiBase, headers),
	optionsContracts: auth(apiKey, optionsContracts, apiBase, headers),
	dividends: auth(apiKey, stockDividends, apiBase, headers),
	stockSplits: auth(apiKey, stockSplits, apiBase, headers),
	stockFinancials: auth(apiKey, stockFinancials, apiBase, headers),
	tickerDetails: auth(apiKey, tickerDetails, apiBase, headers),
	tickerNews: auth(apiKey, tickerNews, apiBase, headers),
	tickers: auth(apiKey, tickers, apiBase, headers),
	tickerTypes: auth(apiKey, tickerTypes, apiBase, headers)
});

export default referenceClient;
