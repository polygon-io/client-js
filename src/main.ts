export * from "./rest/index.js";
export * from "./websockets/index.js";

import axios, { InternalAxiosRequestConfig } from 'axios';
import restClient, { IRestClient } from "./rest/index.js";
import websocketClient, { IWebsocketClient } from "./websockets/index.js";
import { DefaultApi, Configuration } from "./generated-rest";

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

export const generatedRestClient = (apikey: string): DefaultApi => {
  // This function creates a generated REST client using the DefaultApi from the generated REST code
  // Note: This does not include any custom interceptors or configurations
  const config = new Configuration();
  const SERVICE_BASE_URL = 'https://api.polygon.io'; // Fallback to default if not set

  // Interceptor to add authorization token
  axios.interceptors.request.use((requestConfig: InternalAxiosRequestConfig) => {
    requestConfig.headers['Authorization'] = `Bearer ${apikey}`; // Use your API Key
    return requestConfig;
  });

  return new DefaultApi(config, SERVICE_BASE_URL, axios);
}

export default polygonClient;
