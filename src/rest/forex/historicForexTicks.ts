// CF: https://polygon.io/docs/#!/Forex--Currencies/get_v1_historic_forex_from_to_date

import { get, IPolygonQuery } from "../transport/request";

export interface IV1Forex {
  a: number;
  b: number;
  t: number;
}

export interface IHistoricForexTicks {
  day: string;
  map: {
    a: string;
    b: string;
    t: string;
  };
  msLatency: number;
  status: string;
  pair: string;
  ticks: IV1Forex[];
}

export interface IHistoricForexTicksQuery extends IPolygonQuery {
  offset?: number;
  limit: number;
}

export const historicForexTicks = async (
  from: string,
  to: string,
  date: string,
  query: IHistoricForexTicksQuery
): Promise<IHistoricForexTicks> =>
  get(`/v1/historic/forex/${from}/${to}/${date}`, query);
