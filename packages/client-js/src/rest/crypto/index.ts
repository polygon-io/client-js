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
import {
	ICryptoDailyOpenCloseQuery,
	ICryptoDailyOpenClose,
	dailyOpenClose
} from './dailyOpenClose';
import { ICryptoTrade, trades } from './trades';
import { ICryptoLastTrade, lastTrade } from './lastTrade';
import previousClose from './previousClose';
import {
	ICryptoSnapshotAllTickersQuery,
	ICryptoSnapshotTickers,
	ICryptoSnapshot,
	ICryptoSnapshotFullBookL2,
	snapshotAllTickers,
	snapshotGainersLosers,
	snapshotTicker,
	snapshotTickerFullBookL2
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

export interface ICryptoClient {
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
		from: string,
		to: string,
		date: string,
		query?: ICryptoDailyOpenCloseQuery
	) => Promise<ICryptoDailyOpenClose>;
	trades: (
		cryptoTicker: string,
		query?: ITradesQuotesQuery
	) => Promise<ICryptoTrade>;
	lastTrade: (from: string, to: string) => Promise<ICryptoLastTrade>;
	previousClose: (
		symbol: string,
		query?: IAggsPreviousCloseQuery
	) => Promise<IAggsPreviousClose>;
	snapshotAllTickers: (
		query?: ICryptoSnapshotAllTickersQuery
	) => Promise<ICryptoSnapshotTickers>;
	snapshotGainersLosers: (
		direction: 'gainers' | 'losers'
	) => Promise<ICryptoSnapshotTickers>;
	snapshotTicker: (symbol: string) => Promise<ICryptoSnapshot>;
	snapshotTickerFullBookL2: (
		symbol: string
	) => Promise<ICryptoSnapshotFullBookL2>;
	sma: (symbol: string, query?: ITechnicalIndicatorsQuery) => Promise<ISma>;
	ema: (symbol: string, query?: ITechnicalIndicatorsQuery) => Promise<IEma>;
	macd: (symbol: string, query?: ITechnicalIndicatorsQuery) => Promise<IMacd>;
	rsi: (symbol: string, query?: ITechnicalIndicatorsQuery) => Promise<IRsi>;
}

export const cryptoClient = (
	apiKey,
	apiBase = 'https://api.polygon.io',
	headers?: IHeaders
): ICryptoClient => ({
	aggregates: auth(apiKey, aggregates, apiBase, headers),
	aggregatesGroupedDaily: auth(apiKey, aggregatesGroupedDaily, apiBase),
	summaries: auth(apiKey, summaries, apiBase, headers),
	dailyOpenClose: auth(apiKey, dailyOpenClose, apiBase),
	lastTrade: auth(apiKey, lastTrade, apiBase),
	trades: auth(apiKey, trades, apiBase),
	previousClose: auth(apiKey, previousClose, apiBase),
	snapshotAllTickers: auth(apiKey, snapshotAllTickers, apiBase),
	snapshotGainersLosers: auth(apiKey, snapshotGainersLosers, apiBase),
	snapshotTicker: auth(apiKey, snapshotTicker, apiBase),
	snapshotTickerFullBookL2: auth(apiKey, snapshotTickerFullBookL2, apiBase),
	sma: auth(apiKey, sma, apiBase),
	ema: auth(apiKey, ema, apiBase),
	macd: auth(apiKey, macd, apiBase),
	rsi: auth(apiKey, rsi, apiBase)
});

export default cryptoClient;
