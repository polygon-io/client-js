// CF: 

import { get, IPolygonQuery } from "../transport/request";

export interface IBranding {
    icon_url: string;
    logo_url: string;
}

export interface IOptions {
    contract_type: 'put' | 'call' | 'other';
    exercise_style: 'american' | 'european' | 'bermudan';
    expiration_date: string;
    shares_per_contract: number;
    strike_price: number;
    underlying_ticker: string;
}

export interface ISession {
    change: number;
    change_percent: number;
    close: number;
    early_trading_change: number;
    early_trading_change_percent: number;
    high: number;
    late_trading_change: number;
    late_trading_change_percent: number;
    low: number;
    open: number;
    pervious_close: number;
    volume: number;

}

export interface ISummariesResults {
  branding: IBranding;
  market_status: string;
  name: string;
  option: IOptions;
  price: number;
  session: ISession;
  ticker: string;
  type: 'stock' | 'option' | 'forex' | 'crypto';
}

export interface ISummariesQuery extends IPolygonQuery {
  'ticker.any_of'?: string;
}

export interface ISummaries {
  request_id?: string;
  status?: string;
  results?: ISummariesResults[];
}

export const summaries = async (
  apikey: string,
  apiBase: string,
  query?: ISummariesQuery
): Promise<ISummaries> =>
  get(
    `/v1/summaries`,
    apikey,
    apiBase,
    query
  );
