import * as https from "https";
import * as querystring from "querystring";

export interface IPolygonQuery {
  [key: string]: string | number | boolean;
}

export interface IPolygonQueryWithCredentials extends IPolygonQuery {
  apiKey: string | boolean;
}

export const auth = (apiKey, func) => (...args) => func(apiKey, ...args);

export const get = (
  path: string,
  apiKey: string = "invalid",
  query?: IPolygonQuery
): Promise<any> =>
  new Promise((resolve, reject) => {
    if (!apiKey) {
      throw new Error("API KEY not configured...");
    }

    const authenticatedQuery: IPolygonQueryWithCredentials = {
      ...query,
      apiKey
    };

    const options = {
      protocol: "https:",
      method: "GET",
      host: "api.polygon.io",
      path: path + "?" + querystring.encode(authenticatedQuery)
    };

    const request = https.request(options, (response: any) => {
      let data = "";
      response.on("data", function(chunk: string) {
        data += chunk;
      });

      response.on("end", function() {
        resolve(JSON.parse(data));
      });
    });

    request.on("error", (error: any) => {
      reject(error);
    });

    request.end();
  });
