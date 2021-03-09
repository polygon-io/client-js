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

export const referenceClient = (apiKey: string): IReferenceClient => ({
  locales: auth(apiKey, locales),
  markets: auth(apiKey, markets),
  marketHolydays: auth(apiKey, marketHolydays),
  marketStatus: auth(apiKey, marketStatus),
  stockDividends: auth(apiKey, stockDividends),
  stockFinancials: auth(apiKey, stockFinancials),
  stockSplits: auth(apiKey, stockSplits),
  tickerDetails: auth(apiKey, tickerDetails),
  tickerNews: auth(apiKey, tickerNews),
  tickers: auth(apiKey, tickers),
  tickerTypes: auth(apiKey, tickerTypes)
});

export default referenceClient;
