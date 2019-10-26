// CF: https://polygon.io/docs/#!/Crypto/get_v1_historic_crypto_from_to_date
import { get, IPolygonQuery } from "../transport/request";
import {
  formatICryptoTickJsonRaw,
  ICryptoTickJsonFormatted,
  ICryptoTickJsonRaw
} from "./ICryptoTickJson";

export interface IHistoricCryptoTradeRaw {
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
  ticks: ICryptoTickJsonRaw[];
}
export interface IHistoricCryptoTradeFormatted {
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
  ticks: ICryptoTickJsonFormatted[];
}
export interface IHistoricCryptoTradeQuery extends IPolygonQuery {
  offset?: number;
  limit: number;
}

export const historicCryptoTrades = async (
  apiKey: string,
  from: string,
  to: string,
  date: string,
  query: IHistoricCryptoTradeQuery = { limit: 100 }
): Promise<IHistoricCryptoTradeFormatted> => {
  const raw: IHistoricCryptoTradeRaw = await get(
    `/v1/historic/crypto/${from}/${to}/${date}`,
    apiKey,
    query
  );
  return {
    day: raw.day,
    map: raw.map,
    msLatency: raw.msLatency,
    status: raw.status,
    symbol: raw.symbol,
    ticks: raw.ticks.map(formatICryptoTickJsonRaw)
  };
};
