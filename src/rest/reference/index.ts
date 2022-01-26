import { auth } from "../transport/request";

import { IConditionsQuery, IConditions, conditions } from "./conditions";
import { IExchangesQuery, IExchanges, exchanges } from "./exchanges";
import { IMarketHoliday, marketHolidays } from "./marketHolidays";
import { IMarketStatus, marketStatus } from "./marketStatus";
import {
  IOptionsContractsQuery,
  IOptionsContracts,
  optionsContracts,
} from "./optionsContracts";
import { IStockDividendsResults, stockDividends } from "./stockDividends";
import { IStockSplitsResults, stockSplits } from "./stockSplits";
import { ITickerDetails, tickerDetails } from "./tickerDetails";
import { ITickerNews, ITickerNewsQuery, tickerNews } from "./tickerNews";
import { ITickers, ITickersQuery, tickers } from "./tickers";
import { ITickerTypes, ITickerTypesQuery, tickerTypes } from "./tickerTypes";

export { IConditions } from "./conditions";
export { IExchanges } from "./exchanges";
export { IMarketHoliday } from "./marketHolidays";
export { IMarketStatus } from "./marketStatus";
export { IStockDividendsResults } from "./stockDividends";
export { IStockSplitsResults } from "./stockSplits";
export { ITickerDetails } from "./tickerDetails";
export { ITickerNews, ITickerNewsQuery } from "./tickerNews";
export { ITickers, ITickersQuery } from "./tickers";
export { ITickerTypes, ITickerTypesQuery } from "./tickerTypes";

export interface IReferenceClient {
  conditions: (query?: IConditionsQuery) => Promise<IConditions>;
  exchanges: (query?: IExchangesQuery) => Promise<IExchanges>;
  marketHolidays: () => Promise<IMarketHoliday[]>;
  marketStatus: () => Promise<IMarketStatus>;
  optionsContracts: (
    query?: IOptionsContractsQuery
  ) => Promise<IOptionsContracts>;
  stockDividends: (symbol: string) => Promise<IStockDividendsResults>;
  stockSplits: (symbol: string) => Promise<IStockSplitsResults>;
  tickerDetails: (symbol: string) => Promise<ITickerDetails>;
  tickerNews: (query?: ITickerNewsQuery) => Promise<ITickerNews>;
  tickers: (query?: ITickersQuery) => Promise<ITickers>;
  tickerTypes: (query?: ITickerTypesQuery) => Promise<ITickerTypes>;
}

export const referenceClient = (
  apiKey: string,
  apiBase = "https://api.polygon.io"
): IReferenceClient => ({
  conditions: auth(apiKey, conditions, apiBase),
  exchanges: auth(apiKey, exchanges, apiBase),
  marketHolidays: auth(apiKey, marketHolidays, apiBase),
  marketStatus: auth(apiKey, marketStatus, apiBase),
  optionsContracts: auth(apiKey, optionsContracts, apiBase),
  stockDividends: auth(apiKey, stockDividends, apiBase),
  stockSplits: auth(apiKey, stockSplits, apiBase),
  tickerDetails: auth(apiKey, tickerDetails, apiBase),
  tickerNews: auth(apiKey, tickerNews, apiBase),
  tickers: auth(apiKey, tickers, apiBase),
  tickerTypes: auth(apiKey, tickerTypes, apiBase),
});

export default referenceClient;
