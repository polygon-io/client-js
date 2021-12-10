// CF: https://polygon.io/docs/crypto/get_v2_aggs_grouped_locale_global_market_crypto__date

import { get } from "../transport/request";
import { IAggsGroupedDaily, IAggsGroupedDailyQuery } from '../stocks/aggregatesGroupedDaily';

export const aggregatesGroupedDaily = async (
	apiKey: string,
	apiBase: string,
	date: string,
	query?: IAggsGroupedDailyQuery
): Promise<IAggsGroupedDaily> => get(`/v2/aggs/grouped/locale/global/market/crypto/${date}`, apiKey, apiBase, query);