// CF: https://polygon.io/docs/#!/Reference/get_v1_marketstatus_now

import { get } from "../transport/request";

export type MarketStatus = "open" | "closed";
export type MarketStatusExtended = "open" | "closed" | "extended-hours";

export interface IMarketStatus {
  market: MarketStatusExtended;
  serverTime: string;
  exchanges: {
    nyse: MarketStatusExtended;
    nasdaq: MarketStatusExtended;
    otc: MarketStatusExtended;
  };
  currencies?: {
    fx: MarketStatus;
    crypto: MarketStatus;
  };
}

export const marketStatus = async (apiKey: string): Promise<IMarketStatus> =>
  get("/v1/marketstatus/now", apiKey);
