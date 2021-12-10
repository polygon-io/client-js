import { get, IPolygonQuery } from "../transport/request";

export interface SnapshotDay {
	c?: number;
	h?: number;
	l?: number;
	o?: number;
	v?: number;
	vw?: number;
}

export interface SnapshotLastTrade {
	c?: string[];
	i?: string;
	p?: number;
	s?: number;
	t?: number;
	x?: number;
}

export interface SnapshotMin {
	c?: number;
	h?: number;
	l?: number;
	o?: number;
	v?: number;
	vw?: number;
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
	day?: SnapshotDay,
	lastTrade?: SnapshotLastTrade,
	min?: SnapshotMin,
	prevDay?: SnapshotPrevDay,
	ticker?: string,
	todaysChange?: number,
	todayChangePerc?: number,
	updated?: number
}

export interface ICryptoSnapshotAllTickersQuery extends IPolygonQuery {
	tickers?: string;
}

export interface ICryptoSnapshotTickers {
	count?: number;
	status?: string;
	tickers?: SnapshotInfo[];
}

export interface ICryptoSnapshot {
	status?: string;
	request_id?: string;
	ticker?: SnapshotInfo;
}

export interface IFullBookTick {
	p?: number;
	x?: {
		[key: string]: string
	}
}

export interface ICryptoSnapshotFullBookL2 {
	status?: string;
	data?: {
		ask?: IFullBookTick[];
		bidCount?: number;
		bids?: IFullBookTick[];
		spread?: number;
		ticker?: string;
		updated?: number
	}
}

// CF: https://polygon.io/docs/crypto/get_v2_snapshot_locale_global_markets_crypto_tickers
export const snapshotAllTickers = (
	apiKey: string,
	apiBase: string,
	query?: ICryptoSnapshotAllTickersQuery
): Promise<ICryptoSnapshotTickers> => get(`/v2/snapshot/locale/global/markets/crypto/tickers`, apiKey, apiBase, query);

// CF: https://polygon.io/docs/crypto/get_v2_snapshot_locale_global_markets_crypto__direction
export const snapshotGainersLosers = (
	apiKey: string,
	apiBase: string,
	direction:  "gainers" | "losers"
): Promise<ICryptoSnapshotTickers> => get(`/v2/snapshot/locale/global/markets/crypto/${direction}`, apiKey, apiBase);

// CF: https://polygon.io/docs/crypto/get_v2_snapshot_locale_global_markets_crypto_tickers__ticker
export const snapshotTicker = (
	apiKey: string,
	apiBase: string,
	symbol: string 
): Promise<ICryptoSnapshot> => get(`/v2/snapshot/locale/global/markets/crypto/tickers/${symbol}`, apiKey, apiBase);

// CF: https://polygon.io/docs/crypto/get_v2_snapshot_locale_global_markets_crypto_tickers__ticker__book
export const snapshotTickerFullBookL2 = (
	apiKey: string,
	apiBase: string,
	symbol: string
): Promise<ICryptoSnapshotFullBookL2> => get(`/v2/snapshot/locale/global/markets/crypto/tickers/${symbol}/book`, apiKey, apiBase)
