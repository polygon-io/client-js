// CF: https://polygon.io/docs/#!/Stocks--Equities/get_v1_meta_exchanges
import { get } from "../transport/request";

export interface IExchange {
  id: number;
  type: string;
  market: string;
  mic: string;
  name: string;
  tape: string;
}

// TODO: remap
export const exchanges = (): Promise<IExchange[]> => get(`/v1/meta/exchanges`);
