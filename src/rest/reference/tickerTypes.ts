// CF: https://polygon.io/docs/#!/Reference/get_v2_reference_types
import { get } from "../transport/request";

export interface ITickerTypes {
  status?: string;
  results?: any;
}

export const tickerTypes = async (apiKeys: string): Promise<ITickerTypes> =>
  get("/v2/reference/types", apiKeys);
