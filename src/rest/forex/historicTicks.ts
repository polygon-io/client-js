// CF: https://polygon.io/docs/forex/get_v1_historic_forex__from___to___date

import { get, IPolygonQuery } from "../transport/request";

export interface IHistoricTicksQuery extends IPolygonQuery {
  offset?: number;
  limit?: number;
}

export interface ITick {
	ap?: number;
	bp?: number;
	t?: number;
	x?: number;
}

export interface IHistoricTicks {
  day?: string;
  map?: {
    [key: string]: string
  };
  msLatency?: number;
  pair?: string;
  status?: string;
  ticks: ITick[];
}

export const historicTicks = async (
  apiKey: string,
  apiBase: string,
  from: string,
  to: string,
  date: string,
  query?: IHistoricTicksQuery
): Promise<IHistoricTicks> => get(`/v1/historic/forex/${from}/${to}/${date}`, apiKey, apiBase, query);
