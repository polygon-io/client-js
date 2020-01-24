import { auth } from "../rest/transport/request";
import * as WebSocket from "ws";

import { getCryptoWebsocket } from "./crypto";
import { getForexWebsocket } from "./forex";
import { getStocksWebsocket } from "./stocks";

export * from "./forex";
export * from "./stocks";
export * from "./crypto";

export interface IWebsocketClient {
  crypto: () => WebSocket;
  forex: () => WebSocket;
  stocks: () => WebSocket;
}

export const websocketClient = (apiKey: string): IWebsocketClient => ({
  crypto: auth(apiKey, getCryptoWebsocket),
  forex: auth(apiKey, getForexWebsocket),
  stocks: auth(apiKey, getStocksWebsocket)
});

export default websocketClient;
