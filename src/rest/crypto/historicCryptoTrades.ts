// CF: https://polygon.io/docs/#!/Crypto/get_v1_historic_crypto_from_to_date

import { ICryptoTickJson } from "./dailyOpenClose";
import { get, IPolygonQuery } from "../transport/request";

export interface IHistoricCryptoTrade {
  day: string;
  map: {
    c: string;
    p: string;
    s: string;
    x: string;
    t: string;
  };
  msLatency: number;
  status: string;
  symbol: string;
  ticks: ICryptoTickJson[];
}

export interface IHistoricCryptoTradeQuery extends IPolygonQuery {
  offset?: number;
  limit: number;
}

// todo: remap
export const historicCryptoTrades = (
  from: string,
  to: string,
  date: string,
  query: IHistoricCryptoTradeQuery = { limit: 100 }
): Promise<IHistoricCryptoTrade> =>
  get(`/v1/historic/crypto/${from}/${to}/${date}`, query);
