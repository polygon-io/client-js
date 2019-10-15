import * as dotenv from "dotenv";
dotenv.config();

export interface IPolygonConfig {
  apiKey: string;
}

export const configs: IPolygonConfig = {
  apiKey: process.env.POLYGON_APIKEY || "invalid api key"
};

export const init = (localConfig: IPolygonConfig) => {
  const { apiKey } = localConfig;
  configs.apiKey = apiKey;
};
