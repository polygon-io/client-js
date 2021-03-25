export * from "./rest";
export * from "./websockets";

import restClient, { IRestClient } from "./rest";
import websocketClient, { IWebsocketClient } from "./websockets";

export interface IPolygonClient {
  rest: IRestClient;
  websockets: IWebsocketClient;
}

export const polygonClient = (apiKey: string, restApiBase = "https://api.polygon.io", websocketApiBase = "wss://socket.polygon.io"): IPolygonClient => ({
  rest: restClient(apiKey, restApiBase),
  websockets: websocketClient(apiKey, websocketApiBase)
});

export default polygonClient;
