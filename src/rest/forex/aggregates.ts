import { get } from "../transport/request";
import {
  formatIAggResponseRaw,
  IAggregateQuery,
  IAggResponseFormatted
} from "../stocks/aggregates";

// CF: https://polygon.io/docs/#!/Forex--Currencies/get_v2_aggs_ticker_ticker_prev
export const forexPreviousClose = async (
  apiKey: string,
  ticker: string,
  query?: IAggregateQuery
): Promise<IAggResponseFormatted> =>
  formatIAggResponseRaw(
    await get(`/v2/aggs/ticker/${ticker}/prev`, apiKey, query)
  );

// CF: https://polygon.io/docs/#!/Forex--Currencies/get_v2_aggs_ticker_ticker_range_multiplier_timespan_from_to
export const forexAggregates = async (
  apiKey: string,
  ticker: string,
  multiplier: number,
  timespan: string,
  from: string,
  to: string,
  query?: IAggregateQuery
): Promise<IAggResponseFormatted> =>
  formatIAggResponseRaw(
    await get(
      `/v2/aggs/ticker/${ticker}/range/${multiplier}/${timespan}/${from}/${to}`,
      apiKey,
      query
    )
  );

// CF: https://polygon.io/docs/#!/Forex--Currencies/get_v2_aggs_grouped_locale_locale_market_market_date
export const forexGroupedDaily = async (
  apiKey: string,
  locale: string,
  market: string = "FX",
  date: string,
  query?: IAggregateQuery
): Promise<IAggResponseFormatted> =>
  formatIAggResponseRaw(
    await get(
      `/v2/aggs/grouped/locale/${locale}/market/${market}/${date}`,
      apiKey,
      query
    )
  );
