import { auth } from "../transport/request";

import { IAggsQuery, IAggs } from '../stocks/aggregates';
import { IAggsPreviousCloseQuery, IAggsPreviousClose } from '../stocks/previousClose';
import { aggregates } from './aggregates';
import { IOptionsDailyOpenCloseQuery, IOptionsDailyOpenClose, dailyOpenClose } from './dailyOpenClose';
import { previousClose } from './previousClose';
import { IOptionsLastTrade, lastTrade } from './lastTrade';
import { IOptionsSnapshotContract, snapshotOptionContract} from './snapshots';

export { IOptionsDailyOpenCloseQuery, IOptionsDailyOpenClose } from './dailyOpenClose';
export { IOptionsLastTrade } from './lastTrade';
export { IOptionsSnapshotContract, snapshotOptionContract} from './snapshots';

export interface IOptionsClient {
	aggregates: (
    ticker: string,
    multiplier: number,
    timespan: string,
    from: string,
    to: string,
    query?: IAggsQuery
  ) => Promise<IAggs>;
	dailyOpenClose: (
		symbol: string,
		date: string,
		query?: IOptionsDailyOpenCloseQuery
	) => Promise<IOptionsDailyOpenClose>
	previousClose: (
		symbol: string,
		query?: IAggsPreviousCloseQuery
	) => Promise<IAggsPreviousClose>;
	lastTrade: (
		symbol: string
	) => Promise<IOptionsLastTrade>
	snapshotOptionContract: (
		underlyingAsset: string,
		optionContract: string
	) => Promise<IOptionsSnapshotContract>
}

export const optionsClient = (apiKey: string, apiBase = "https://api.polygon.io"): IOptionsClient => ({
  aggregates: auth(apiKey, aggregates, apiBase),
  dailyOpenClose: auth(apiKey, dailyOpenClose, apiBase),
  previousClose: auth(apiKey, previousClose, apiBase),
  lastTrade: auth(apiKey, lastTrade, apiBase),
  snapshotOptionContract: auth(apiKey, snapshotOptionContract, apiBase),
});

export default optionsClient;
