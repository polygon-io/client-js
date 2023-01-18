import { get, IPolygonQuery } from '../transport/request';

export interface SnapshotDay {
	c?: number;
	h?: number;
	l?: number;
	o?: number;
	v?: number;
}

export interface SnapshotLastQuote {
	a?: number;
	b?: number;
	t?: number;
	x?: number;
}

export interface SnapshotMin {
	c?: number;
	h?: number;
	l?: number;
	o?: number;
	v?: number;
}

export interface SnapshotPrevDay {
	c?: number;
	h?: number;
	l?: number;
	o?: number;
	v?: number;
	vw?: number;
}

export interface SnapshotInfo {
	day?: SnapshotDay;
	lastQuote?: SnapshotLastQuote;
	min?: SnapshotMin;
	prevDay?: SnapshotPrevDay;
	ticker?: string;
	todaysChange?: number;
	todayChangePerc?: number;
	updated?: number;
}

export interface IForexSnapshotAllTickersQuery extends IPolygonQuery {
	tickers?: string;
}

export interface IForexSnapshotTickers {
	count?: number;
	status?: string;
	tickers?: SnapshotInfo[];
}

export interface IForexSnapshot {
	status?: string;
	request_id?: string;
	ticker?: SnapshotInfo;
}

// CF: https://polygon.io/docs/forex/get_v2_snapshot_locale_global_markets_forex_tickers
export const snapshotAllTickers = async (
	apiKey: string,
	apiBase: string,
	query?: IForexSnapshotAllTickersQuery
): Promise<IForexSnapshotTickers> =>
	get(
		`/v2/snapshot/locale/global/markets/forex/tickers`,
		apiKey,
		apiBase,
		query
	);

// CF: https://polygon.io/docs/forex/get_v2_snapshot_locale_global_markets_forex__direction
export const snapshotGainersLosers = async (
	apiKey: string,
	apiBase: string,
	direction: 'gainers' | 'losers'
): Promise<IForexSnapshotTickers> =>
	get(`/v2/snapshot/locale/global/markets/forex/${direction}`, apiKey, apiBase);

// CF: https://polygon.io/docs/forex/get_v2_snapshot_locale_global_markets_forex_tickers__ticker
export const snapshotTicker = async (
	apiKey: string,
	apiBase: string,
	symbol: string
): Promise<IForexSnapshot> =>
	get(
		`/v2/snapshot/locale/global/markets/forex/tickers/${symbol}`,
		apiKey,
		apiBase
	);
