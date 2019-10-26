import { auth } from "../rest/transport/request";

import { getCryptoWebsocket } from "./crypto";
import { getForexWebsocket } from "./forex";
import { getStocksWebsocket } from "./stocks";

export * from "./forex";
export * from "./stocks";
export * from "./crypto";

export const websocketClient = (apiKey: string) => ({
  crypto: auth(apiKey, getCryptoWebsocket),
  forex: auth(apiKey, getForexWebsocket),
  stocks: auth(apiKey, getStocksWebsocket)
});

export default websocketClient;
