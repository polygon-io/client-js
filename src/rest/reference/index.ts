import { getWithGlobals, IPolygonQuery, IRequestOptions } from "../transport/request.js";

import { IConditionsQuery, IConditions, conditions } from "./conditions.js";
import { IExchangesQuery, IExchanges, exchanges } from "./exchanges.js";
import { IMarketHoliday, marketHolidays } from "./marketHolidays.js";
import { IMarketStatus, marketStatus } from "./marketStatus.js";
import {
  IOptionsContractQuery,
  IOptionsContract,
  optionsContract,
} from "./optionsContract.js";
import {
  IOptionsContractsQuery,
  IOptionsContracts,
  optionsContracts,
} from "./optionsContracts.js";
import { IDividendsResults, IDividendsQuery, stockDividends } from "./dividends.js";
import { IStockSplitsResults, IStockSplitsQuery, stockSplits } from "./stockSplits.js";
import { IStockFinancialResults, IStockFinancialQuery, stockFinancials } from "./stockFinancials.js";
import { ITickerDetails, tickerDetails } from "./tickerDetails.js";
import { ITickerNews, ITickerNewsQuery, tickerNews } from "./tickerNews.js";
import { ITickers, ITickersQuery, tickers } from "./tickers.js";
import { ITickerTypes, ITickerTypesQuery, tickerTypes } from "./tickerTypes.js";
import { IUniversalSnapshot, IUniversalSnapshotQuery, universalSnapshot } from "./universalSnapshot.js";

export { IConditions } from "./conditions.js";
export { IExchanges } from "./exchanges.js";
export { IMarketHoliday } from "./marketHolidays.js";
export { IMarketStatus } from "./marketStatus.js";
export { IDividendsResults } from "./dividends.js";
export { IStockSplitsResults } from "./stockSplits.js";
export { IStockFinancialResults } from "./stockFinancials.js";
export { ITickerDetails } from "./tickerDetails.js";
export { ITickerNews, ITickerNewsQuery } from "./tickerNews.js";
export { ITickers, ITickersQuery } from "./tickers.js";
export { ITickerTypes, ITickerTypesQuery } from "./tickerTypes.js";
export { IUniversalSnapshot, IUniversalSnapshotQuery } from "./universalSnapshot.js";

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
  universalSnapshot: (query?: IUniversalSnapshotQuery, options?: IRequestOptions) => Promise<IUniversalSnapshot>;
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
    universalSnapshot: (...args) => universalSnapshot(get, ...args),
  });
}
export default referenceClient;
