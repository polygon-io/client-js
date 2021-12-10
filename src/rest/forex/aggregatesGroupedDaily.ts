// CF: https://polygon.io/docs/forex/get_v2_aggs_grouped_locale_global_market_fx__date

import { get } from "../transport/request";
import { IAggsGroupedDaily, IAggsGroupedDailyQuery } from '../stocks/aggregatesGroupedDaily';

export const aggregatesGroupedDaily = async (
	apiKey: string,
	apiBase: string,
	date: string,
	query?: IAggsGroupedDailyQuery
): Promise<IAggsGroupedDaily> => get(`/v2/aggs/grouped/locale/global/market/forex/${date}`, apiKey, apiBase, query);