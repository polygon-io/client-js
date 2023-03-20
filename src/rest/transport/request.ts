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

export interface IPolygonQueryWithCredentials extends IPolygonQuery {
  apiKey: string | boolean;
}

export const auth =
  (apiKey, func: Function, apiBase: string, headers?: IHeaders) =>
  (...args) =>
    func(apiKey, apiBase, ...args, headers = {});

export type IStructuredError = InstanceType<typeof StructuredError>;

class StructuredError extends Error {
  status: string;
  request_id: string;
  constructor(message: string, status: string = '', requestId: string = '') {
      super(message);
      this.status = status;
      this.request_id = requestId;
  }
}

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

  const authenticatedQuery: IPolygonQueryWithCredentials = {
    ...query,
    apiKey,
  };

  const queryString = stringify(authenticatedQuery, { encode: true });

  const url = `${apiBase}${path}?${queryString}`;
  try {
    const response = await fetch(url, {
      headers
    });

    if (response.status >= 400) {
      const rawMessage = await response.text();
      let error;
      try {
        // first try parsing JSON from the response
        const json = JSON.parse(rawMessage);
        error = new StructuredError(json.message, json.status, json.request_id);
      } catch (e) {
        // default to sending a string error message
        error = new Error(rawMessage);
      }
      throw error;
    }

    return response.json();
  } catch (e) {
    throw e;
  }
};
