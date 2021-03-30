import { auth } from "../transport/request";
import { ILocalesResponse, locales } from "./locales";
import { IMarketHolyday, marketHolydays } from "./marketHolidays";
import { IMarketResponse, markets } from "./markets";
import { IMarketStatus, marketStatus } from "./marketStatus";
import { IStockDividendsResults, stockDividends } from "./stockDividends";
import {
  IStockFinancialQuery,
  IStockFinancialResults,
  stockFinancials
} from "./stockFinancials";
import { IStockSplitsResults, stockSplits } from "./stockSplits";
import { ITickerDetailsFormatted, tickerDetails } from "./tickerDetails";
import { ITickerNews, ITickerNewsQuery, tickerNews } from "./tickerNews";
import { ITickers, ITickersQuery, tickers } from "./tickers";
import { ITickerTypes, tickerTypes } from "./tickerTypes";

export { ILocalesResponse } from "./locales";
export { IMarketHolyday } from "./marketHolidays";
export { IMarketResponse } from "./markets";
export { IMarketStatus } from "./marketStatus";
export { IStockDividendsResults } from "./stockDividends";
export {
  IStockFinancialQuery,
  IStockFinancialResults
} from "./stockFinancials";
export { IStockSplitsResults } from "./stockSplits";
export { ITickerDetailsFormatted } from "./tickerDetails";
export { ITickerNews, ITickerNewsQuery } from "./tickerNews";
export { ITickers, ITickersQuery } from "./tickers";
export { ITickerTypes } from "./tickerTypes";

export interface IReferenceClient {
  locales: () => Promise<ILocalesResponse>;
  markets: () => Promise<IMarketResponse>;
  marketHolydays: () => Promise<IMarketHolyday[]>;
  marketStatus: () => Promise<IMarketStatus>;
  stockDividends: (symbol: string) => Promise<IStockDividendsResults>;
  stockFinancials: (
    symbol: string,
    query?: IStockFinancialQuery
  ) => Promise<IStockFinancialResults[]>;
  stockSplits: (symbol: string) => Promise<IStockSplitsResults>;
  tickerDetails: (symbol: string) => Promise<ITickerDetailsFormatted>;
  tickerNews: (
    symbol: string,
    query?: ITickerNewsQuery
  ) => Promise<ITickerNews[]>;
  tickers: (query?: ITickersQuery) => Promise<ITickers[]>;
  tickerTypes: () => Promise<ITickerTypes>;
}

export const referenceClient = (apiKey: string, apiBase = "https://api.polygon.io"): IReferenceClient => ({
  locales: auth(apiKey, locales, apiBase),
  markets: auth(apiKey, markets, apiBase),
  marketHolydays: auth(apiKey, marketHolydays, apiBase),
  marketStatus: auth(apiKey, marketStatus, apiBase),
  stockDividends: auth(apiKey, stockDividends, apiBase),
  stockFinancials: auth(apiKey, stockFinancials, apiBase),
  stockSplits: auth(apiKey, stockSplits, apiBase),
  tickerDetails: auth(apiKey, tickerDetails, apiBase),
  tickerNews: auth(apiKey, tickerNews, apiBase),
  tickers: auth(apiKey, tickers, apiBase),
  tickerTypes: auth(apiKey, tickerTypes, apiBase)
});

export default referenceClient;
