import { IGet, IPolygonQuery, IRequestOptions, getWithGlobals } from "../transport/request.js";

// ### Futures Aggregates
export interface IFuturesAggsQuery extends IPolygonQuery {
  resolution?: string;
  "window_start"?: string;
  "window_start.gt"?: string;
  "window_start.gte"?: string;
  "window_start.lt"?: string;
  "window_start.lte"?: string;
  order?: "asc" | "desc";
  limit?: number;
  sort?: string;
}

export interface IFuturesAgg {
  ticker: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  window_start: number;
  window_end: number;
}

export interface IFuturesAggs {
  status: string;
  request_id: string;
  results?: IFuturesAgg[];
}

export const listFuturesAggs = async (
  get: IGet,
  ticker: string,
  query?: IFuturesAggsQuery,
  options?: IRequestOptions
): Promise<IFuturesAggs> =>
  get(`/futures/vX/aggs/${ticker}`, query, options);

// ### Futures Contracts
export interface IFuturesContract {
  ticker: string;
  name: string;
  product_code: string;
  expiration_date: string;
}

export interface IFuturesContracts {
  status: string;
  request_id: string;
  results?: IFuturesContract[];
}

export const listFuturesContracts = async (
  get: IGet,
  query?: IPolygonQuery,
  options?: IRequestOptions
): Promise<IFuturesContracts> =>
  get(`/futures/vX/contracts`, query, options);

export const getFuturesContract = async (
  get: IGet,
  ticker: string,
  options?: IRequestOptions
): Promise<IFuturesContract> =>
  get(`/futures/vX/contracts/${ticker}`, undefined, options);

// ### Futures Market Status
export interface IFuturesMarketStatus {
  status: string;
  timestamp: number;
}

export const listFuturesMarketStatuses = async (
  get: IGet,
  options?: IRequestOptions
): Promise<IFuturesMarketStatus> =>
  get(`/futures/vX/market-status`, undefined, options);

// ### Futures Products
export interface IFuturesProduct {
  product_code: string;
  name: string;
  description?: string;
}

export interface IFuturesProducts {
  status: string;
  request_id: string;
  results?: IFuturesProduct[];
}

export const listFuturesProducts = async (
  get: IGet,
  query?: IPolygonQuery,
  options?: IRequestOptions
): Promise<IFuturesProducts> =>
  get(`/futures/vX/products`, query, options);

export const getFuturesProduct = async (
  get: IGet,
  product_code: string,
  options?: IRequestOptions
): Promise<IFuturesProduct> =>
  get(`/futures/vX/products/${product_code}`, undefined, options);

// ### Futures Schedules
export interface IFuturesSchedule {
  product_code?: string;
  start_date: string;
  end_date: string;
  open_time: string;
  close_time: string;
}

export interface IFuturesSchedules {
  status: string;
  request_id: string;
  results?: IFuturesSchedule[];
}

export const listFuturesSchedules = async (
  get: IGet,
  query?: IPolygonQuery,
  options?: IRequestOptions
): Promise<IFuturesSchedules> =>
  get(`/futures/vX/schedules`, query, options);

export const listFuturesProductSchedules = async (
  get: IGet,
  product_code: string,
  query?: IPolygonQuery,
  options?: IRequestOptions
): Promise<IFuturesSchedules> =>
  get(`/futures/vX/products/${product_code}/schedules`, query, options);

// ### Futures Trades
export interface IFuturesTrade {
  price: number;
  size: number;
  timestamp: number;
}

export interface IFuturesTrades {
  next_url?: string;
  request_id?: string;
  results?: IFuturesTrade[];
  status?: string;
}

export const listFuturesTrades = async (
  get: IGet,
  ticker: string,
  query?: IPolygonQuery,
  options?: IRequestOptions
): Promise<IFuturesTrades> =>
  get(`/futures/vX/trades/${ticker}`, query, options);

// ### Futures Quotes
export interface IFuturesQuote {
  ask_price: number;
  ask_size: number;
  bid_price: number;
  bid_size: number;
  timestamp: number;
}

export interface IFuturesQuotes {
  next_url?: string;
  request_id?: string;
  results?: IFuturesQuote[];
  status?: string;
}

export const listFuturesQuotes = async (
  get: IGet,
  ticker: string,
  query?: IPolygonQuery,
  options?: IRequestOptions
): Promise<IFuturesQuotes> =>
  get(`/futures/vX/quotes/${ticker}`, query, options);

// ### Futures Client Interface
export interface IFuturesClient {
  listFuturesAggs: (
    ticker: string,
    query?: IFuturesAggsQuery,
    options?: IRequestOptions
  ) => Promise<IFuturesAggs>;
  listFuturesContracts: (
    query?: IPolygonQuery,
    options?: IRequestOptions
  ) => Promise<IFuturesContracts>;
  getFuturesContract: (
    ticker: string,
    options?: IRequestOptions
  ) => Promise<IFuturesContract>;
  listFuturesMarketStatuses: (
    options?: IRequestOptions
  ) => Promise<IFuturesMarketStatus>;
  listFuturesProducts: (
    query?: IPolygonQuery,
    options?: IRequestOptions
  ) => Promise<IFuturesProducts>;
  getFuturesProduct: (
    product_code: string,
    options?: IRequestOptions
  ) => Promise<IFuturesProduct>;
  listFuturesSchedules: (
    query?: IPolygonQuery,
    options?: IRequestOptions
  ) => Promise<IFuturesSchedules>;
  listFuturesProductSchedules: (
    product_code: string,
    query?: IPolygonQuery,
    options?: IRequestOptions
  ) => Promise<IFuturesSchedules>;
  listFuturesTrades: (
    ticker: string,
    query?: IPolygonQuery,
    options?: IRequestOptions
  ) => Promise<IFuturesTrades>;
  listFuturesQuotes: (
    ticker: string,
    query?: IPolygonQuery,
    options?: IRequestOptions
  ) => Promise<IFuturesQuotes>;
}

// ### Futures Client Factory
export const futuresClient = (
  apiKey: string,
  apiBase = "https://api.polygon.io",
  options?: IRequestOptions
): IFuturesClient => {
  const get = getWithGlobals(apiKey, apiBase, options);
  return {
    listFuturesAggs: (...args) => listFuturesAggs(get, ...args),
    listFuturesContracts: (...args) => listFuturesContracts(get, ...args),
    getFuturesContract: (...args) => getFuturesContract(get, ...args),
    listFuturesMarketStatuses: (...args) => listFuturesMarketStatuses(get, ...args),
    listFuturesProducts: (...args) => listFuturesProducts(get, ...args),
    getFuturesProduct: (...args) => getFuturesProduct(get, ...args),
    listFuturesSchedules: (...args) => listFuturesSchedules(get, ...args),
    listFuturesProductSchedules: (...args) => listFuturesProductSchedules(get, ...args),
    listFuturesTrades: (...args) => listFuturesTrades(get, ...args),
    listFuturesQuotes: (...args) => listFuturesQuotes(get, ...args),
  };
};

export default futuresClient;
