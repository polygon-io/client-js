import fetchModule from './fetch.js';
import { stringify } from "query-string";

export interface IPolygonQuery {
  [key: string]: string | number | boolean | undefined;
}

export interface IPolygonEdgeHeaders extends Partial<Record<string, string>> {
   'X-Polygon-Edge-ID'?: string;
   'X-Polygon-Edge-IP-Address'?: string;
   'X-Polygon-Edge-User-Agent'?: string;
}

export type IHeaders = IPolygonEdgeHeaders | HeadersInit

export interface IRequestInit extends Omit<RequestInit, 'headers'> {
  headers?: IHeaders
}

export interface IGlobalOptions extends IRequestInit {
  trace?: boolean;
  pagination?: boolean;
}

export type IRequestOptions = IGlobalOptions;

export interface IPolygonQueryWithCredentials extends IPolygonQuery {
  apiKey: string | boolean;
}

export type IGet = (path: string, query: IPolygonQuery, options: IRequestOptions) => Promise<any>;



export type ICurriedGet = (apiKey: string, apiBase: string, globalOptions?: IGlobalOptions) => IGet;
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

export const getWithGlobals: ICurriedGet = (apiKey, apiBase, globalOptions = {}): IGet =>
  async (path, query = {}, options = {}): Promise<any> => {
    if(!apiKey) {
      throw new Error("API KEY not configured...");
    }

    const fetchPage = async (path, query = {}, options: IRequestOptions = {}, allData = []): Promise<any> => {
      const queryString = stringify(query, {
        encode: true
      });
      const url = `${apiBase}${path}${queryString ? '?' + queryString : ''}`;
      const headers = {
        ...(options.headers || globalOptions.headers || {}),
        "Authorization": `Bearer ${apiKey}`
      }

      if(globalOptions.trace) {
        console.log("Request URL: ", url);

        // make a copy of headers so as not to modify the original
        const printHeaders = {
          ...headers
        };
        if('Authorization' in printHeaders) {
          printHeaders['Authorization'] = printHeaders['Authorization'].replace(apiKey, 'REDACTED');
        }

        console.log("Request Headers: ", printHeaders);
      }

      try {
        const response = await fetchModule.fetch(url, {
          ...globalOptions,
          ...options,
          headers: headers
        });

        if(globalOptions.trace) {
          console.log("Response Headers: ", response.headers);
        }

        if(response.status >= 400) {
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

        if(response?.headers?.get('content-type') === 'text/csv') {
          return response.text();
        }

        const json = await response.json();
        const newData = json.results instanceof Array ? allData.concat(json.results) : allData;

        if(globalOptions?.pagination && json.next_url) {
          // check if there is a next page, pagination is enabled, and fetch it recursively
          const nextPath = json.next_url.replace(apiBase, "");
          return fetchPage(nextPath, {}, options, newData);
        } else if (globalOptions?.pagination) {
          // check if there is a next page, pagination is enabled, and fetch it recursively
          return { ...json, results: newData, count: newData.length, next_url: null }
        } else {
          // just return the response
          return json;
        }

      } catch (e) {
        throw e;
      }
    };

    return fetchPage(path, query, options);
  };
