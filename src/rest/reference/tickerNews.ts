// CF: https://polygon.io/docs/#!/Reference/get_v1_meta_symbols_symbol_news
import { get, IPolygonQuery } from "../transport/request";

export interface ITickerNewsQuery extends IPolygonQuery {
  perpage?: number;
  page?: number;
}
export interface ITickerNews {
  symbols: string[];
  title: string;
  url: string;
  source: string;
  summary: string;
  image?: string;
  timestamp: string;
  keywords?: string[];
}

export const tickerNews = (
  apiKey: string,
  symbol: string,
  query?: ITickerNewsQuery
): Promise<ITickerNews[]> =>
  get(`/v1/meta/symbols/${symbol}/news`, apiKey, query);
