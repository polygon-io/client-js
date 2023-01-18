import { auth, IHeaders } from '../transport/request';

import { IAggsQuery, IAggs } from '../stocks/aggregates';
import {
	IAggsGroupedDaily,
	IAggsGroupedDailyQuery
} from '../stocks/aggregatesGroupedDaily';
import {
	IAggsPreviousCloseQuery,
	IAggsPreviousClose
} from '../stocks/previousClose';
import { ITradesQuotesQuery } from '../stocks/trades';
import aggregates from './aggregates';
import aggregatesGroupedDaily from './aggregatesGroupedDaily';
import { IConversionQuery, IConversion, conversion } from './conversion';
import { IForexQuotes, quotes } from './quotes';
import { IForexLastQuote, lastQuote } from './lastQuote';
import previousClose from './previousClose';
import {
	IForexSnapshotAllTickersQuery,
	IForexSnapshotTickers,
	IForexSnapshot,
	snapshotAllTickers,
	snapshotGainersLosers,
	snapshotTicker
} from './snapshots';
import { ISummaries, ISummariesQuery } from '../stocks/summaries';
import summaries from './summaries';
import { ITechnicalIndicatorsQuery, ISma } from '../stocks/sma';
import sma from './sma';
import { IEma } from '../stocks/ema';
import ema from './ema';
import { IMacd } from '../stocks/macd';
import macd from './macd';
import { IRsi } from '../stocks/rsi';
import rsi from './rsi';

export interface IForexClient {
	aggregates: (
		ticker: string,
		multiplier: number,
		timespan: string,
		from: string,
		to: string,
		query?: IAggsQuery,
		headers?: IHeaders
	) => Promise<IAggs>;
	aggregatesGroupedDaily: (
		date: string,
		query?: IAggsGroupedDailyQuery
	) => Promise<IAggsGroupedDaily>;
	summaries: (
		query?: ISummariesQuery,
		headers?: IHeaders
	) => Promise<ISummaries>;
	conversion: (
		from: string,
		to: string,
		query?: IConversionQuery
	) => Promise<IConversion>;
	quotes: (
		fxTicker: string,
		query?: ITradesQuotesQuery
	) => Promise<IForexQuotes>;
	lastQuote: (from: string, to: string) => Promise<IForexLastQuote>;
	previousClose: (
		symbol: string,
		query?: IAggsPreviousCloseQuery
	) => Promise<IAggsPreviousClose>;
	snapshotAllTickers: (
		query?: IForexSnapshotAllTickersQuery
	) => Promise<IForexSnapshotTickers>;
	snapshotGainersLosers: (
		direction: 'gainers' | 'losers'
	) => Promise<IForexSnapshotTickers>;
	snapshotTicker: (symbol: string) => Promise<IForexSnapshot>;
	sma: (symbol: string, query?: ITechnicalIndicatorsQuery) => Promise<ISma>;
	ema: (symbol: string, query?: ITechnicalIndicatorsQuery) => Promise<IEma>;
	macd: (symbol: string, query?: ITechnicalIndicatorsQuery) => Promise<IMacd>;
	rsi: (symbol: string, query?: ITechnicalIndicatorsQuery) => Promise<IRsi>;
}

export const forexClient = (
	apiKey: string,
	apiBase = 'https://api.polygon.io',
	headers?: IHeaders
): IForexClient => ({
	aggregates: auth(apiKey, aggregates, apiBase, headers),
	aggregatesGroupedDaily: auth(apiKey, aggregatesGroupedDaily, apiBase),
	summaries: auth(apiKey, summaries, apiBase, headers),
	conversion: auth(apiKey, conversion, apiBase),
	quotes: auth(apiKey, quotes, apiBase),
	lastQuote: auth(apiKey, lastQuote, apiBase),
	previousClose: auth(apiKey, previousClose, apiBase),
	snapshotAllTickers: auth(apiKey, snapshotAllTickers, apiBase),
	snapshotGainersLosers: auth(apiKey, snapshotGainersLosers, apiBase),
	snapshotTicker: auth(apiKey, snapshotTicker, apiBase),
	sma: auth(apiKey, sma, apiBase),
	ema: auth(apiKey, ema, apiBase),
	macd: auth(apiKey, macd, apiBase),
	rsi: auth(apiKey, rsi, apiBase)
});

export default forexClient;
