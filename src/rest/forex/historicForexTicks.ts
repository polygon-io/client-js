// CF: https://polygon.io/docs/#!/Forex--Currencies/get_v1_historic_forex_from_to_date

import { get, IPolygonQuery } from "../transport/request";

export interface IV1ForexRaw {
  a: number;
  b: number;
  t: number;
}
export interface IV1ForexFormatted {
  a: number;
  ask: number;
  b: number;
  bid: number;
  t: number;
  timestamp: number;
}
export const formatIV1ForexRaw = (raw: IV1ForexRaw): IV1ForexFormatted => ({
  ...raw,
  ask: raw.a,
  bid: raw.b,
  timestamp: raw.t
});

export interface IHistoricForexTicksRaw {
  day: string;
  map: {
    a: string;
    b: string;
    t: string;
  };
  msLatency: number;
  status: string;
  pair: string;
  ticks: IV1ForexRaw[];
}
export interface IHistoricForexTicksFormatted {
  day: string;
  map: {
    a: string;
    b: string;
    t: string;
  };
  msLatency: number;
  status: string;
  pair: string;
  ticks: IV1ForexFormatted[];
}
const formatIHistoricForexTicksRaw = (
  raw: IHistoricForexTicksRaw
): IHistoricForexTicksFormatted => ({
  ...raw,
  ticks: raw.ticks.map(formatIV1ForexRaw)
});

export interface IHistoricForexTicksQuery extends IPolygonQuery {
  offset?: number;
  limit: number;
}

export const historicForexTicks = async (
  apiKey: string,
  from: string,
  to: string,
  date: string,
  query: IHistoricForexTicksQuery
): Promise<IHistoricForexTicksFormatted> =>
  formatIHistoricForexTicksRaw(
    await get(`/v1/historic/forex/${from}/${to}/${date}`, apiKey, query)
  );
