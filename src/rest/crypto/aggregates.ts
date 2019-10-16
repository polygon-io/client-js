import { get } from "../transport/request";
import { IAggregateQuery, IAggResponse } from "../stocks";

// CF: https://polygon.io/docs/#!/Crypto/get_v2_aggs_ticker_ticker_prev
export const cryptoPreviousClose = (
  ticker: string,
  query?: IAggregateQuery
): Promise<IAggResponse> => get(`/v2/aggs/ticker/${ticker}/prev`, query);

// CF: https://polygon.io/docs/#!/Crypto/get_v2_aggs_ticker_ticker_range_multiplier_timespan_from_to
export const cryptoAggregates = (
  ticker: string,
  multiplier: number,
  timespan: string,
  from: string,
  to: string,
  query?: IAggregateQuery
): Promise<IAggResponse> =>
  get(
    `/v2/aggs/ticker/${ticker}/range/${multiplier}/${timespan}/${from}/${to}`,
    query
  );

// CF: https://polygon.io/docs/#!/Crypto/get_v2_aggs_grouped_locale_locale_market_market_date
export const cryptoGroupedDaily = (
  locale: string,
  market: string = "CRYPTO",
  date: string,
  query?: IAggregateQuery
): Promise<IAggResponse> =>
  get(`/v2/aggs/grouped/locale/${locale}/market/${market}/${date}`, query);
