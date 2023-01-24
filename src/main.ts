export * from "./rest/index.js";
export * from "./websockets/index.js";

import restClient, { IRestClient } from "./rest/index.js";
import websocketClient, { IWebsocketClient } from "./websockets/index.js";

export interface IPolygonClient {
  rest: IRestClient;
  websockets: IWebsocketClient;
}

export const polygonClient = (
  apiKey: string,
  restApiBase?: string,
  websocketApiBase?: string
): IPolygonClient => ({
  rest: restClient(apiKey, restApiBase),
  websockets: websocketClient(apiKey, websocketApiBase),
});

export default polygonClient;
