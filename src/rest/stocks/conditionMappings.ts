// CF: https://polygon.io/docs/#!/Stocks--Equities/get_v1_meta_conditions_ticktype
import { get } from "../transport/request";

export interface IConditionMappings {
  [key: string]: string;
}

export const conditionMappings = async (
  apiKeys: string,
  ticktype: string = "trades"
): Promise<IConditionMappings> =>
  get(`/v1/meta/conditions/${ticktype}`, apiKeys);
