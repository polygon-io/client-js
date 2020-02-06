export * from "./rest";
export * from "./websockets";

import restClient, { IRestClient } from "./rest";
import websocketClient, { IWebsocketClient } from "./websockets";

export interface IPolygonClient {
  rest: IRestClient;
  websockets: IWebsocketClient;
}

export const polygonClient = (apiKey: string): IPolygonClient => ({
  rest: restClient(apiKey),
  websockets: websocketClient(apiKey)
});

export default polygonClient;
