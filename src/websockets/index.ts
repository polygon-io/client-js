import { WebSocket } from 'ws'
import { getCryptoWebsocket } from "./crypto/index.js";
import { getForexWebsocket } from "./forex/index.js";
import { getOptionsWebsocket } from "./options/index.js";
import { getStocksWebsocket } from "./stocks/index.js";

export * from "./forex/index.js";
export * from "./stocks/index.js";
export * from "./crypto/index.js";

export interface IWebsocketClient {
  crypto: () => WebSocket;
  forex: () => WebSocket;
  options: () => WebSocket;
  stocks: () => WebSocket;
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
