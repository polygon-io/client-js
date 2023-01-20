import { getWithGlobals, IPolygonQuery, IRequestOptions } from "../transport/request";

import { IConditionsQuery, IConditions, conditions } from "./conditions";
import { IExchangesQuery, IExchanges, exchanges } from "./exchanges";
import { IMarketHoliday, marketHolidays } from "./marketHolidays";
import { IMarketStatus, marketStatus } from "./marketStatus";
import {
  IOptionsContractQuery,
  IOptionsContract,
  optionsContract,
} from "./optionsContract";
import {
  IOptionsContractsQuery,
  IOptionsContracts,
  optionsContracts,
} from "./optionsContracts";
import { IDividendsResults, IDividendsQuery, stockDividends } from "./dividends";
import { IStockSplitsResults, IStockSplitsQuery, stockSplits } from "./stockSplits";
import { IStockFinancialResults, IStockFinancialQuery, stockFinancials } from "./stockFinancials";
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
  conditions: (query?: IConditionsQuery, options?: IRequestOptions) => Promise<IConditions>;
  exchanges: (query?: IExchangesQuery, options?: IRequestOptions) => Promise<IExchanges>;
  marketHolidays: (query?: IPolygonQuery, options?: IRequestOptions) => Promise<IMarketHoliday[]>;
  marketStatus: (query?: IPolygonQuery, options?: IRequestOptions) => Promise<IMarketStatus>;
  optionsContract: (
    optionsTicker: string,
    query?: IOptionsContractQuery,
    options?: IRequestOptions
  ) => Promise<IOptionsContract>;
  optionsContracts: (
    query?: IOptionsContractsQuery, 
    options?: IRequestOptions
  ) => Promise<IOptionsContracts>;
  dividends: (query?: IDividendsQuery, options?: IRequestOptions) => Promise<IDividendsResults>;
  stockSplits: (query?: IStockSplitsQuery, options?: IRequestOptions) => Promise<IStockSplitsResults>;
  stockFinancials: (query?: IStockFinancialQuery, options?: IRequestOptions) => Promise<IStockFinancialResults>;
  tickerDetails: (symbol: string, query?: IPolygonQuery, options?: IRequestOptions) => Promise<ITickerDetails>;
  tickerNews: (query?: ITickerNewsQuery, options?: IRequestOptions) => Promise<ITickerNews>;
  tickers: (query?: ITickersQuery, options?: IRequestOptions) => Promise<ITickers>;
  tickerTypes: (query?: ITickerTypesQuery, options?: IRequestOptions) => Promise<ITickerTypes>;
}

export const referenceClient = (
  apiKey: string,
  apiBase = "https://api.polygon.io",
  options?: IRequestOptions
): IReferenceClient => {
const get = getWithGlobals(apiKey, apiBase, options);
    
  return ({
    conditions: (...args) => conditions(get, ...args),
    exchanges: (...args) => exchanges(get, ...args),
    marketHolidays: (...args) => marketHolidays(get, ...args),
    marketStatus: (...args) => marketStatus(get, ...args),
    optionsContract: (...args) => optionsContract(get, ...args),
    optionsContracts: (...args) => optionsContracts(get, ...args),
    dividends: (...args) => stockDividends(get, ...args),
    stockSplits: (...args) => stockSplits(get, ...args),
    stockFinancials: (...args) => stockFinancials(get, ...args),
    tickerDetails: (...args) => tickerDetails(get, ...args),
    tickerNews: (...args) => tickerNews(get, ...args),
    tickers: (...args) => tickers(get, ...args),
    tickerTypes: (...args) => tickerTypes(get, ...args),
  });
}
export default referenceClient;
