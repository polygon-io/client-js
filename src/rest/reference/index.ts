import { auth } from "../transport/request";
import { locales } from "./locales";
import { markets } from "./markets";
import { marketHolydays } from "./marketHolidays";
import { marketStatus } from "./marketStatus";
import { stockDividends } from "./stockDividends";
import { stockFinancials } from "./stockFinancials";
import { stockSplits } from "./stockSplits";
import { tickerDetails } from "./tickerDetails";
import { tickerNews } from "./tickerNews";
import { tickers } from "./tickers";
import { tickerTypes } from "./tickerTypes";

export const referenceClient = apiKey => ({
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
