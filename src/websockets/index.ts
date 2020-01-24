import { w3cwebsocket as Websocket } from "websocket";
import { auth } from "../rest/transport/request";

import { getCryptoWebsocket } from "./crypto";
import { getForexWebsocket } from "./forex";
import { getStocksWebsocket } from "./stocks";

export * from "./forex";
export * from "./stocks";
export * from "./crypto";

export interface IWebsocketClient {
  crypto: () => Websocket;
  forex: () => Websocket;
  stocks: () => Websocket;
}

export const websocketClient = (apiKey: string): IWebsocketClient => ({
  crypto: auth(apiKey, getCryptoWebsocket),
  forex: auth(apiKey, getForexWebsocket),
  stocks: auth(apiKey, getStocksWebsocket)
});

export default websocketClient;
