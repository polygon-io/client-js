import { w3cwebsocket as Websocket } from "websocket";
import { getCryptoWebsocket } from "./crypto";
import { getForexWebsocket } from "./forex";
import { getOptionsWebsocket } from "./options";
import { getStocksWebsocket } from "./stocks";

export * from "./forex";
export * from "./stocks";
export * from "./crypto";

export interface IWebsocketClient {
  crypto: () => Websocket;
  forex: () => Websocket;
  options: () => Websocket;
  stocks: () => Websocket;
}

export const websocketClient = (
  apiKey: string,
  apiBase?: string
): IWebsocketClient => ({
  crypto: () => getCryptoWebsocket(apiKey, apiBase),
  forex: () => getForexWebsocket(apiKey, apiBase),
  options: () => getOptionsWebsocket(apiKey, apiBase),
  stocks: () => getStocksWebsocket(apiKey, apiBase),
});

export default websocketClient;
