import { auth, IHeaders } from '../transport/request';

import { IAggsQuery, IAggs, aggregates } from './aggregates';
import {
	IAggsGroupedDailyQuery,
	IAggsGroupedDaily,
	aggregatesGroupedDaily
} from './aggregatesGroupedDaily';
import {
	IDailyOpenCloseQuery,
	IDailyOpenClose,
	dailyOpenClose
} from './dailyOpenClose';
import {
	IAggsPreviousCloseQuery,
	IAggsPreviousClose,
	previousClose
} from './previousClose';
import { ILastQuote, lastQuote } from './lastQuote';
import { ILastTrade, lastTrade } from './lastTrade';
import {
	ISnapshotAllTickersQuery,
	ISnapshotTickers,
	ISnapshot,
	snapshotAllTickers,
	snapshotGainersLosers,
	snapshotTicker
} from './snapshots';
import { IQuotes, quotes } from './quotes';
import { ITradesQuotesQuery, ITrades, trades } from './trades';
import { ISummaries, ISummariesQuery, summaries } from './summaries';
import { ITechnicalIndicatorsQuery, sma, ISma } from './sma';
import { ema, IEma } from './ema';
import { macd, IMacd } from './macd';
import { rsi, IRsi } from './rsi';

export interface IStocksClient {
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
	dailyOpenClose: (
		symbol: string,
		date: string,
		query?: IDailyOpenCloseQuery
	) => Promise<IDailyOpenClose>;
	lastQuote: (symbol: string) => Promise<ILastQuote>;
	lastTrade: (symbol: string) => Promise<ILastTrade>;
	previousClose: (
		ticker: string,
		query?: IAggsPreviousCloseQuery
	) => Promise<IAggsPreviousClose>;
	quotes: (stockTicker: string, query?: ITradesQuotesQuery) => Promise<IQuotes>;
	snapshotAllTickers: (
		query?: ISnapshotAllTickersQuery
	) => Promise<ISnapshotTickers>;
	snapshotGainersLosers: (
		direction: 'gainers' | 'losers'
	) => Promise<ISnapshotTickers>;
	snapshotTicker: (symbol: string) => Promise<ISnapshot>;
	sma: (symbol: string, query?: ITechnicalIndicatorsQuery) => Promise<ISma>;
	ema: (symbol: string, query?: ITechnicalIndicatorsQuery) => Promise<IEma>;
	macd: (symbol: string, query?: ITechnicalIndicatorsQuery) => Promise<IMacd>;
	rsi: (symbol: string, query?: ITechnicalIndicatorsQuery) => Promise<IRsi>;
	trades: (stockTicker: string, query?: ITradesQuotesQuery) => Promise<ITrades>;
}

export const stocksClient = (
	apiKey: string,
	apiBase = 'https://api.polygon.io',
	headers?: IHeaders
): IStocksClient => ({
	aggregates: auth(apiKey, aggregates, apiBase, headers),
	aggregatesGroupedDaily: auth(apiKey, aggregatesGroupedDaily, apiBase),
	summaries: auth(apiKey, summaries, apiBase, headers),
	dailyOpenClose: auth(apiKey, dailyOpenClose, apiBase),
	lastQuote: auth(apiKey, lastQuote, apiBase),
	lastTrade: auth(apiKey, lastTrade, apiBase),
	previousClose: auth(apiKey, previousClose, apiBase),
	quotes: auth(apiKey, quotes, apiBase),
	snapshotAllTickers: auth(apiKey, snapshotAllTickers, apiBase),
	snapshotGainersLosers: auth(apiKey, snapshotGainersLosers, apiBase),
	snapshotTicker: auth(apiKey, snapshotTicker, apiBase),
	sma: auth(apiKey, sma, apiBase),
	ema: auth(apiKey, ema, apiBase),
	macd: auth(apiKey, macd, apiBase),
	rsi: auth(apiKey, rsi, apiBase),
	trades: auth(apiKey, trades, apiBase)
});

export default stocksClient;
