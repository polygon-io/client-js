export * from "./websockets/index.js";

import axios from 'axios';
import websocketClient, { IWebsocketClient } from "./websockets/index.js";
import { DefaultApi, Configuration } from "./rest/index.js";

export interface IPolygonClient {
  rest: DefaultApi;
  websockets: IWebsocketClient;
}

export const restClient = (apikey: string, restApiBase?: string): DefaultApi => {
  // This function creates a generated REST client using the DefaultApi from the generated REST code
  // Note: This does not include any custom interceptors or configurations
  const config = new Configuration({ apiKey: apikey });
  const SERVICE_BASE_URL = 'https://api.polygon.io'; // Fallback to default if not set
  axios.interceptors.response.use((response) => response?.data);
  return new DefaultApi(config, restApiBase || SERVICE_BASE_URL, axios);
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
