import { auth } from "../transport/request";

import {
  stocksAggregates,
  stocksGroupedDaily,
  stocksPreviousClose
} from "./aggregates";
import { conditionMappings } from "./conditionMappings";
import { dailyOpenClose } from "./dailyOpenClose";
import { exchanges } from "./exchanges";
import { lastQuoteForSymbol } from "./lastQuoteForSymbol";
import { lastTradeForSymbol } from "./lastTradeForSymbol";
import {
  snapshotAllTickers,
  snapshotGainersLosers,
  snapshotSingleTicker
} from "./snapshots";
import { v1HistoricQuotes } from "./v1HistoricQuotes";
import { v1HistoricTrades } from "./v1HistoricTrades";
import { v2HistoricQuotes } from "./v2HistoricQuotes";
import { v2HistoricTrades } from "./v2HistoricTrades";

export const stocksClient = (apiKey: string) => ({
  conditionMappings: auth(apiKey, conditionMappings),
  dailyOpenClose: auth(apiKey, dailyOpenClose),
  exchanges: auth(apiKey, exchanges),
  lastQuoteForSymbol: auth(apiKey, lastQuoteForSymbol),
  lastTradeForSymbol: auth(apiKey, lastTradeForSymbol),
  v1HistoricQuotes: auth(apiKey, v1HistoricQuotes),
  v1HistoricTrades: auth(apiKey, v1HistoricTrades),
  v2HistoricQuotes: auth(apiKey, v2HistoricQuotes),
  v2HistoricTrades: auth(apiKey, v2HistoricTrades),
  // snapshot
  snapshotAllTickers: auth(apiKey, snapshotAllTickers),
  snapshotSingleTicker: auth(apiKey, snapshotSingleTicker),
  snapshotGainersLosers: auth(apiKey, snapshotGainersLosers),
  // aggregates
  previousClose: auth(apiKey, stocksPreviousClose),
  aggregates: auth(apiKey, stocksAggregates),
  groupedDaily: auth(apiKey, stocksGroupedDaily)
});

export default stocksClient;
