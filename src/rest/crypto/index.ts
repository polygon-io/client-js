import { auth } from "../transport/request";
import { cryptoDailyOpenClose } from "./dailyOpenClose";
import { cryptoExchanges, ICryptoExchanges } from "./cryptoExchanges";
import {
  lastTradeForCryptoPair,
  ILastTradeForACryptoPair
} from "./lastTradeForACryptoPair";
import {
  cryptoSnapshotAllTickers,
  cryptoSnapshotGainersLosers,
  cryptoSnapshotSingleTicker,
  cryptoSnapshotSingleTickerFullBook,
  ICryptoSnapshotSingleTickerFormatted,
  ICryptoSnapshotAllTickersFormatted,
  ICryptoSingleTickerFullBookFormatted
} from "./snapshots";
import {
  cryptoAggregates,
  cryptoGroupedDaily,
  cryptoPreviousClose
} from "./aggregates";
import {
  historicCryptoTrades,
  IHistoricCryptoTradeQuery,
  IHistoricCryptoTradeFormatted
} from "./historicCryptoTrades";
import { IAggregateQuery, IAggResponseFormatted } from "../stocks/aggregates";
import { ICryptoDailyOpenCloseFormatted } from "./ICryptoTickJson";

export { ICryptoExchanges } from "./cryptoExchanges";
export { ILastTradeForACryptoPair } from "./lastTradeForACryptoPair";
export {
  ICryptoSnapshotSingleTickerFormatted,
  ICryptoSnapshotAllTickersFormatted,
  ICryptoSingleTickerFullBookFormatted
} from "./snapshots";
export { IAggregateQuery, IAggResponseFormatted } from "../stocks/aggregates";
export {
  IHistoricCryptoTradeQuery,
  IHistoricCryptoTradeFormatted
} from "./historicCryptoTrades";
export { ICryptoDailyOpenCloseFormatted } from "./ICryptoTickJson";

export interface ICryptoClient {
  dailyOpenClose: (
    from: string,
    to: string,
    date: string
  ) => Promise<ICryptoDailyOpenCloseFormatted>;
  exchanges: () => Promise<ICryptoExchanges[]>;
  lastTradeForPair: (
    from: string,
    to: string
  ) => Promise<ILastTradeForACryptoPair>;
  historicTrades: (
    from: string,
    to: string,
    date: string,
    query?: IHistoricCryptoTradeQuery
  ) => Promise<IHistoricCryptoTradeFormatted>;
  snapshotSingleTicker: (
    ticker: string
  ) => Promise<ICryptoSnapshotSingleTickerFormatted>;
  snapshotAllTickers: () => Promise<ICryptoSnapshotAllTickersFormatted>;
  snapshotGainersLosers: (
    direction?: string
  ) => Promise<ICryptoSnapshotAllTickersFormatted>;
  snapshotSingleTickerFullBook: (
    ticker: string
  ) => Promise<ICryptoSingleTickerFullBookFormatted>;
  previousClose: (
    ticker: string,
    query?: IAggregateQuery
  ) => Promise<IAggResponseFormatted>;
  aggregates: (
    ticker: string,
    multiplier: number,
    timespan: string,
    from: string,
    to: string,
    query?: IAggregateQuery
  ) => Promise<IAggResponseFormatted>;
  groupedDaily: (
    locale: string,
    market: string,
    date: string,
    query?: IAggregateQuery
  ) => Promise<IAggResponseFormatted>;
}

export const cryptoClient = (apiKey): ICryptoClient => ({
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
