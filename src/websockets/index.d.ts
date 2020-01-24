import * as WebSocket from "ws";

export interface IWebsocketClient {
  crypto: () => WebSocket;
  forex: () => WebSocket;
  stocks: () => WebSocket;
}
