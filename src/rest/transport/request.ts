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

export type IHeaders = IPolygonEdgeHeaders | Record<string, string>

export const auth =
  (apiKey, func: Function, apiBase: string, headers: IHeaders  = {}) =>
  (args: any = {}) =>
    func(apiKey, apiBase, args, headers);

export const get = async (
  path: string,
  apiKey: string,
  apiBase: string,
  query?: IPolygonQuery,
  headers?: IHeaders
): Promise<any> => {
  if (!apiKey) {
    throw new Error("API KEY not configured...");
  }

  const queryString = stringify(query, { encode: true });

  const url = `${apiBase}${path}?${queryString}`;

	const authHeaders = {...headers, "Authorization": `Bearer ${apiKey}`}

  const response = await fetch(url, {
    headers: authHeaders
  });

  if (response.status >= 400) {
    const message = await response.text();
    throw new Error(message);
  }

  return response.json();
};
