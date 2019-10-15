import { get } from "../transport/request";

export interface ITickerTypes {
  status?: string;
  results?: any;
}

export const tickerTypes = async (): Promise<ITickerTypes> =>
  get("/v2/reference/types");
