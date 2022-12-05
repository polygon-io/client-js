import { auth, IPolygonEdgeHeaders } from "../transport/request";

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
  conditions: (query?: IConditionsQuery, headers?: IPolygonEdgeHeaders) => Promise<IConditions>;
  exchanges: (query?: IExchangesQuery, headers?: IPolygonEdgeHeaders) => Promise<IExchanges>;
  marketHolidays: (headers?: IPolygonEdgeHeaders) => Promise<IMarketHoliday[]>;
  marketStatus: (headers?: IPolygonEdgeHeaders) => Promise<IMarketStatus>;
  optionsContract: (
    optionsTicker: string,
    query?: IOptionsContractQuery,
    headers?: IPolygonEdgeHeaders
  ) => Promise<IOptionsContract>;
  optionsContracts: (
    query?: IOptionsContractsQuery, 
    headers?: IPolygonEdgeHeaders
  ) => Promise<IOptionsContracts>;
  dividends: (query?: IDividendsQuery, headers?: IPolygonEdgeHeaders) => Promise<IDividendsResults>;
  stockSplits: (query?: IStockSplitsQuery, headers?: IPolygonEdgeHeaders) => Promise<IStockSplitsResults>;
  stockFinancials: (query?: IStockFinancialQuery, headers?: IPolygonEdgeHeaders) => Promise<IStockFinancialResults>;
  tickerDetails: (symbol: string, headers?: IPolygonEdgeHeaders) => Promise<ITickerDetails>;
  tickerNews: (query?: ITickerNewsQuery, headers?: IPolygonEdgeHeaders) => Promise<ITickerNews>;
  tickers: (query?: ITickersQuery, headers?: IPolygonEdgeHeaders) => Promise<ITickers>;
  tickerTypes: (query?: ITickerTypesQuery, headers?: IPolygonEdgeHeaders) => Promise<ITickerTypes>;
}

export const referenceClient = (
  apiKey: string,
  apiBase = "https://api.polygon.io",
  headers?: IPolygonEdgeHeaders
): IReferenceClient => ({
  conditions: auth(apiKey, conditions, apiBase, headers),
  exchanges: auth(apiKey, exchanges, apiBase, headers),
  marketHolidays: auth(apiKey, marketHolidays, apiBase, headers),
  marketStatus: auth(apiKey, marketStatus, apiBase, headers),
  optionsContract: auth(apiKey, optionsContract, apiBase, headers),
  optionsContracts: auth(apiKey, optionsContracts, apiBase, headers),
  dividends: auth(apiKey, stockDividends, apiBase, headers),
  stockSplits: auth(apiKey, stockSplits, apiBase, headers),
  stockFinancials: auth(apiKey, stockFinancials, apiBase, headers),
  tickerDetails: auth(apiKey, tickerDetails, apiBase, headers),
  tickerNews: auth(apiKey, tickerNews, apiBase, headers),
  tickers: auth(apiKey, tickers, apiBase, headers),
  tickerTypes: auth(apiKey, tickerTypes, apiBase, headers),
});

export default referenceClient;
