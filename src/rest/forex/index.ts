import { auth } from "../transport/request";

import { lastQuoteForCurrencyPair } from "./lastQuoteForCurrencyPair";
import { historicForexTicks } from "./historicForexTicks";
import {
  forexAggregates,
  forexGroupedDaily,
  forexPreviousClose
} from "./aggregates";
import {
  forexSnapshotAllTickers,
  forexSnapshotGainersLosers
} from "./snapshots";
import { realTimeCurrencyConversion } from "./realTimeCurrencyConversion";

export const forexClient = (apiKey: string) => ({
  lastQuoteForCurrencyPair: auth(apiKey, lastQuoteForCurrencyPair),
  historicTicks: auth(apiKey, historicForexTicks),
  realTimeCurrencyConversion: auth(apiKey, realTimeCurrencyConversion),
  // aggregates
  previousClose: auth(apiKey, forexPreviousClose),
  aggregates: auth(apiKey, forexAggregates),
  groupedDaily: auth(apiKey, forexGroupedDaily),
  // snapshots
  snapshotAllTickers: auth(apiKey, forexSnapshotAllTickers),
  snapshotGainersLosers: auth(apiKey, forexSnapshotGainersLosers)
});

export default forexClient;
