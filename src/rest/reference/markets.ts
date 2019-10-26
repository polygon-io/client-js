// CF: https://polygon.io/docs/#!/Reference/get_v2_reference_markets
import { get } from "../transport/request";

export interface IMarket {
  market: string;
  desc: string;
}

export interface IMarketResponse {
  status?: string;
  results?: IMarket[];
}

export const markets = async (apiKey: string): Promise<IMarketResponse> =>
  get("/v2/reference/markets", apiKey);
