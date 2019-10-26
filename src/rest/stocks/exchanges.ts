// CF: https://polygon.io/docs/#!/Stocks--Equities/get_v1_meta_exchanges
import { get } from "../transport/request";

export interface IExchangeRaw {
  id: number;
  type: string;
  market: string;
  mic: string;
  name: string;
  tape: string;
}
export interface IExchangeFormatted {
  id: number;
  type: string;
  market: string;
  mic: string;
  marketIdentifierCode: string;
  name: string;
  tape: string;
}
const formatIExchangeRaw = (raw: IExchangeRaw): IExchangeFormatted => ({
  ...raw,
  marketIdentifierCode: raw.mic
});

export const exchanges = async (
  apiKey: string
): Promise<IExchangeFormatted[]> =>
  (await get(`/v1/meta/exchanges`, apiKey)).map(formatIExchangeRaw);
