// CF: https://polygon.io/docs/#!/Reference/get_v2_reference_locales
import { get } from "../transport/request";

export interface ILocales {
  locale: string;
  desc: string;
}

export interface ILocalesResponse {
  status?: string;
  results?: ILocales[];
}

export const locales = async (apiKeys: string): Promise<ILocalesResponse> =>
  get("/v2/reference/locales", apiKeys);
