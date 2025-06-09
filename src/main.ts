export * from "./rest/index.js";
export * from "./websockets/index.js";

import axios from 'axios';
import websocketClient, { IWebsocketClient } from "./websockets/index.js";
import { DefaultApi, Configuration } from "./rest/index.js";

export interface IPolygonClient {
  rest: DefaultApi;
  websockets: IWebsocketClient;
}

export const restClient = (apikey: string, restApiBase?: string, globalFetchOptions?: { pagination?: boolean } ): DefaultApi => {
  // This function creates a generated REST client using the DefaultApi from the generated REST code
  // Note: This does not include any custom interceptors or configurations
  const config = new Configuration({ apiKey: apikey });
  const SERVICE_BASE_URL = 'https://api.polygon.io'; // Fallback to default if not set
  axios.interceptors.response.use(async (response) => {
    if (globalFetchOptions?.pagination && response?.data?.next_url) {
      // If pagination is enabled and has a next_url, auto paginate the results and count
      const nextResults: any = await axios.get(`${response.data.next_url}&apiKey=${apikey}`);
      const { results, count } = nextResults;
      return { ...response.data, results: [...results, ...response.data?.results], ...(response.data?.count && { count: response.data.count + count }) };
    }
    return response?.data
  }
);
  return new DefaultApi(config, restApiBase || SERVICE_BASE_URL, axios);
}

export const polygonClient = (
  apiKey: string,
  restApiBase?: string,
  websocketApiBase?: string,
  globalFetchOptions?: { pagination: boolean }
): IPolygonClient => ({
  rest: restClient(apiKey, restApiBase, globalFetchOptions),
  websockets: websocketClient(apiKey, websocketApiBase),
});

export default polygonClient;
