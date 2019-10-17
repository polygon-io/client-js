import * as dotenv from "dotenv";
dotenv.config();

export interface IPolygonConfig {
  apiKey: string | boolean;
}

export const configs: IPolygonConfig = {
  apiKey: process.env.POLYGON_API_KEY || false
};

export const init = (localConfig: IPolygonConfig) => {
  const { apiKey } = localConfig;
  configs.apiKey = apiKey;
};
