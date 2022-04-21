import { auth } from "../transport/request";

import { IConditionsQuery, IConditions, conditions } from "./conditions";
import { IExchangesQuery, IExchanges, exchanges } from "./exchanges";
import { IMarketHoliday, marketHolidays } from "./marketHolidays";
import { IMarketStatus, marketStatus } from "./marketStatus";
import { 
  IOptionsContractQuery, 
  IOptionsContract, 
  optionsContract 
} from './optionsContract';
import {
  IOptionsContractsQuery,
  IOptionsContracts,
  optionsContracts,
} from "./optionsContracts";
import { IDividendsResults, stockDividends } from "./dividends";
import { IStockSplitsResults, stockSplits } from "./stockSplits";
import { IStockFinancialResults, stockFinancials } from "./stockFinancials";
import { ITickerDetails, tickerDetails } from "./tickerDetails";
import { ITickerNews, ITickerNewsQuery, tickerNews } from "./tickerNews";
import { ITickers, ITickersQuery, tickers } from "./tickers";
import { ITickerTypes, ITickerTypesQuery, tickerTypes } from "./tickerTypes";

export { IConditions } from "./conditions";
export { IExchanges } from "./exchanges";
export { IMarketHoliday } from "./marketHolidays";
export { IMarketStatus } from "./marketStatus";
export { IDividendsResults } from "./dividends";
export { IStockSplitsResults } from "./stockSplits";
export { IStockFinancialResults } from "./stockFinancials";
export { ITickerDetails } from "./tickerDetails";
export { ITickerNews, ITickerNewsQuery } from "./tickerNews";
export { ITickers, ITickersQuery } from "./tickers";
export { ITickerTypes, ITickerTypesQuery } from "./tickerTypes";

export interface IReferenceClient {
  conditions: (query?: IConditionsQuery) => Promise<IConditions>;
  exchanges: (query?: IExchangesQuery) => Promise<IExchanges>;
  marketHolidays: () => Promise<IMarketHoliday[]>;
  marketStatus: () => Promise<IMarketStatus>;
  optionsContract: (
    optionsTicker: string,
    query?: IOptionsContractQuery
  ) => Promise<IOptionsContract>;
  optionsContracts: (
    query?: IOptionsContractsQuery
  ) => Promise<IOptionsContracts>;
  dividends: () => Promise<IDividendsResults>;
  stockSplits: () => Promise<IStockSplitsResults>;
  stockFinancials: () => Promise<IStockFinancialResults>;
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
  optionsContract: auth(apiKey, optionsContract, apiBase),
  optionsContracts: auth(apiKey, optionsContracts, apiBase),
  dividends: auth(apiKey, stockDividends, apiBase),
  stockSplits: auth(apiKey, stockSplits, apiBase),
  stockFinancials: auth(apiKey, stockFinancials, apiBase),
  tickerDetails: auth(apiKey, tickerDetails, apiBase),
  tickerNews: auth(apiKey, tickerNews, apiBase),
  tickers: auth(apiKey, tickers, apiBase),
  tickerTypes: auth(apiKey, tickerTypes, apiBase),
});

export default referenceClient;
