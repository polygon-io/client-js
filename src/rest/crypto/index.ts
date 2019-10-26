import { auth } from "../transport/request";
import { cryptoDailyOpenClose } from "./dailyOpenClose";
import { cryptoExchanges } from "./cryptoExchanges";
import { lastTradeForCryptoPair } from "./lastTradeForACryptoPair";
import {
  cryptoSnapshotAllTickers,
  cryptoSnapshotGainersLosers,
  cryptoSnapshotSingleTicker,
  cryptoSnapshotSingleTickerFullBook
} from "./snapshots";
import {
  cryptoAggregates,
  cryptoGroupedDaily,
  cryptoPreviousClose
} from "./aggregates";
import { historicCryptoTrades } from "./historicCryptoTrades";

export const cryptoClient = apiKey => ({
  dailyOpenClose: auth(apiKey, cryptoDailyOpenClose),
  exchanges: auth(apiKey, cryptoExchanges),
  lastTradeForPair: auth(apiKey, lastTradeForCryptoPair),
  historicTrades: auth(apiKey, historicCryptoTrades),
  // snapshots
  snapshotSingleTicker: auth(apiKey, cryptoSnapshotSingleTicker),
  snapshotAllTickers: auth(apiKey, cryptoSnapshotAllTickers),
  snapshotGainersLosers: auth(apiKey, cryptoSnapshotGainersLosers),
  snapshotSingleTickerFullBook: auth(
    apiKey,
    cryptoSnapshotSingleTickerFullBook
  ),
  // aggregates
  previousClose: auth(apiKey, cryptoPreviousClose),
  aggregates: auth(apiKey, cryptoAggregates),
  groupedDaily: auth(apiKey, cryptoGroupedDaily)
});

export default cryptoClient;
