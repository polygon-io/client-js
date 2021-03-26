import fetch from "cross-fetch";
import { stringify } from "query-string";

export interface IPolygonQuery {
  [key: string]: string | number | boolean | undefined;
}

export interface IPolygonQueryWithCredentials extends IPolygonQuery {
  apiKey: string | boolean;
}

export const auth = (apiKey, func: Function, apiBase: string) => (...args) => func(apiKey, apiBase, ...args);

export const get = async (
  path: string,
  apiKey: string = "invalid",
  apiBase: string,
  query?: IPolygonQuery
): Promise<any> => {
  if (!apiKey) {
    throw new Error("API KEY not configured...");
  }

  const authenticatedQuery: IPolygonQueryWithCredentials = {
    ...query,
    apiKey
  };

  const queryString = stringify(authenticatedQuery, { encode: true });

  const url = `${apiBase}${path}?${queryString}`;

  const response = await fetch(url);

  if (response.status >= 400) {
    const message = await response.text();
    throw new Error(message);
  }

  return response.json();
};
