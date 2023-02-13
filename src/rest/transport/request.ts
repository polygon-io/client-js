import fetchModule from './fetch.js';
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

export interface IRequestInit extends RequestInit {
  headers?: IHeaders
}

export type IRequestOptions = IRequestInit;

export interface IPolygonQueryWithCredentials extends IPolygonQuery {
  apiKey: string | boolean;
}

export type IGet = (path: string, query: IPolygonQuery, options: IRequestOptions) => Promise<any>;
export type ICurriedGet = (apiKey: string, apiBase: string, globalOptions?: IRequestOptions) => IGet;

export const getWithGlobals: ICurriedGet = (apiKey, apiBase, globalOptions = {}): IGet => 
  async ( path, query = {}, options = {} ): Promise<any> => {
  if (!apiKey) {
    throw new Error("API KEY not configured...");
  }

  const queryString = stringify(query, { encode: true });
  const url = `${apiBase}${path}?${queryString}`;
  try {
    const response = await fetchModule.fetch(url, {
      ...globalOptions,
      ...options,
      headers: {
        ...(options.headers || globalOptions.headers || {}),
        "Authorization": `Bearer ${apiKey}`
      }
    });

    if (response.status >= 400) {
      const message = await response.text();
      throw new Error(message);
    }

    if (response?.headers?.get('content-type') === 'text/csv') {
      return response.text();
    }

    return response.json();
  } catch (e) {
    throw new Error(e);
  }
};
