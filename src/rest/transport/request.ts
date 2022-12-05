import fetch from "cross-fetch";
import { stringify } from "query-string";

export interface IPolygonQuery {
  [key: string]: string | number | boolean | undefined;
}

export interface IPolygonEdgeHeaders extends Record<string, string> {
   'X-Polygon-Edge-ID': string;
   'X-Polygon-Edge-IP-Address': string;
   'X-Polygon-Edge-User-Agent'?: string;
}

export interface IPolygonQueryWithCredentials extends IPolygonQuery {
  apiKey: string | boolean;
}

export const auth =
  (apiKey, func: Function, apiBase: string, headers?: IPolygonEdgeHeaders) =>
  (...args) =>
    func(apiKey, apiBase, ...args, headers);

export const get = async (
  path: string,
  apiKey: string,
  apiBase: string,
  query?: IPolygonQuery,
  headers?: IPolygonEdgeHeaders
): Promise<any> => {
  if (!apiKey) {
    throw new Error("API KEY not configured...");
  }

  const authenticatedQuery: IPolygonQueryWithCredentials = {
    ...query,
    apiKey,
  };

  const queryString = stringify(authenticatedQuery, { encode: true });

  const url = `${apiBase}${path}?${queryString}`;

  const response = await fetch(url, {
    headers
  });

  if (response.status >= 400) {
    const message = await response.text();
    throw new Error(message);
  }

  return response.json();
};
