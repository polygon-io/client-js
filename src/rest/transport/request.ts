import * as https from "https";
import * as querystring from "querystring";

import { configs } from "../../config";

export interface IPolygonQuery {
  [key: string]: string | number | boolean;
}

export interface IPolygonQueryWithCredentials extends IPolygonQuery {
  apiKey: string;
}

export const get = (path: string, query?: IPolygonQuery): Promise<any> =>
  new Promise((resolve, reject) => {
    if (!configs.apiKey) {
      throw new Error(
        "API KEY not configured... either set the POLYGON_API_KEY env variable or use the init(apiKey: string) function"
      );
    }

    const authenticatedQuery: IPolygonQueryWithCredentials = {
      ...query,
      apiKey: configs.apiKey
    };

    const options = {
      protocol: "https:",
      method: "GET",
      host: "api.polygon.io",
      path: path + querystring.encode(authenticatedQuery)
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
