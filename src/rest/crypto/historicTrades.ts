// CF: https://polygon.io/docs/crypto/get_v1_historic_crypto__from___to___date

import { get, IPolygonQuery } from "../transport/request";
import { ITick } from './ITickJson';

export interface IHistoricTradeQuery extends IPolygonQuery {
  offset?: number;
  limit?: number;
}

export interface IHistoricTrade {
  day?: string;
	msLatency?: number;
	status?: string;
	symbol?: string;
	ticks?: ITick[];
  map?: {
    [key: string]: string
  };
}

export const historicTrades = async (
  apiKey: string,
  apiBase: string,
  from: string,
  to: string,
  date: string,
  query?: IHistoricTradeQuery
): Promise<IHistoricTrade> => get(`/v1/historic/crypto/${from}/${to}/${date}`, apiKey, apiBase, query);
